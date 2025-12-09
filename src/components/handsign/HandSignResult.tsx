import * as ort from "onnxruntime-web";
import { useEffect, useRef, useState } from "react";
import Manual from "./Manual";
import Button from "../ui/CustomButton";


interface Props {
  landmarks: number[][] | null;
  setIsDrawSkeleton: (value: boolean) => void;
  IsDrawSkeleton?: boolean;
}

const angle = (a: number[], b: number[], c: number[]) => {
  // a, b, c là [x, y, z]
  const ba = [a[0] - b[0], a[1] - b[1]];
  const bc = [c[0] - b[0], c[1] - b[1]];

  const dot = ba[0] * bc[0] + ba[1] * bc[1];
  const mag_ba = Math.sqrt(ba[0] ** 2 + ba[1] ** 2);
  const mag_bc = Math.sqrt(bc[0] ** 2 + bc[1] ** 2);

  if (mag_ba === 0 || mag_bc === 0) return 0;

  let cos = dot / (mag_ba * mag_bc);
  cos = Math.max(-1, Math.min(1, cos)); // clamp

  return Math.acos(cos) * (180 / Math.PI);
};


const computeAngles = (lm: number[][]) => {
  return {
    thumb: angle(lm[1], lm[2], lm[4]),
    index: angle(lm[5], lm[6], lm[8]),
    middle: angle(lm[9], lm[10], lm[12]),
    ring: angle(lm[13], lm[14], lm[16]),
    pinky: angle(lm[17], lm[18], lm[20]),
  };
}

const HandSignResult = ({ landmarks, setIsDrawSkeleton, IsDrawSkeleton }: Props) => {
  const sessionRef = useRef<ort.InferenceSession | null>(null);
  const [pred, setPred] = useState<string | null>(null);
  const [prob, setProb] = useState<number | null>(null);
  const [isManual, setIsManual] = useState(false);
  const isRunningRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Tắt ONNX runtime logs
    ort.env.logLevel = "warning";
    ort.env.debug = false;

    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;
    const originalDebug = console.debug;

    // Danh sách cần filter
    const filters = [
      // ONNX Runtime
      "Unknown CPU vendor",
      "cpuid_info",
      "LogEarlyWarning",
      "[W:onnxruntime",

      // MediaPipe
      "gl_context.cc",
      "Graph successfully started",
      "GL version:",
      "OpenGL error",
      "inference_feedback_manager",
      "landmark_projection_calculator",
      "FrameBuffer",
      "glReadPixels",

      // WebAssembly
      "Created TensorFlow Lite XNNPACK delegate for CPU",
      "wasm streaming compile",
      "falling back to ArrayBuffer",
    ];

    const shouldShow = (args: any[]): boolean => {
      const msg = args?.join(" ") || "";
      return !filters.some(f => msg.includes(f));
    };

    console.error = (...args) => {
      if (shouldShow(args)) originalError(...args);
    };

    console.warn = (...args) => {
      if (shouldShow(args)) originalWarn(...args);
    };

    // KHÔNG filter console.log/debug vì có thể dùng debug
    // nhưng nếu muốn có thể bật filter tương tự ở đây.

    return () => {
      console.log = originalLog;
      console.warn = originalWarn;
      console.error = originalError;
      console.debug = originalDebug;
    };
  }, []);



  // 1. Load model
  // Load model
  useEffect(() => {
    ort.InferenceSession.create("/models/random_forest_model.onnx", {
      executionProviders: ['wasm']
    }).then(session => sessionRef.current = session);
  }, []);

  // Tính góc và predict
  useEffect(() => {
    const session = sessionRef.current;

    if (!landmarks || !session) {
      setPred(null);
      setProb(null);
      return;
    };

    const run = async () => {

      if (isRunningRef.current) return;
      isRunningRef.current = true;

      try {
        const angles = computeAngles(landmarks);
        const inputTensor = new ort.Tensor(
          "float32",
          Float32Array.from([
            angles.thumb,
            angles.index,
            angles.middle,
            angles.ring,
            angles.pinky,
          ]),
          [1, 5]
        );
        const inputName = session.inputNames[0];

        const outputs = await session.run({
          [inputName]: inputTensor,
        });

        // Nhãn dự đoán (kiểu int64)
        const label = Number(outputs["label"].data[0]);
        // Mảng xác suất (Float32Array)
        const probabilities = outputs["probabilities"].data;
        const probability = probabilities[label];

        setPred(Number(probability) > 0.7 ? label.toString() : "Không xát định");

        setProb(Number(probability));
      } catch (error) {
        console.error(error);
      } finally {
        isRunningRef.current = false;
      }
    };

    run();
  }, [landmarks]);

  return (
    <div className="flex-1 space-y-6">
      <div className="py-4 px-8 rounded-2xl h-fit border flex flex-col gap-4">
        <span className="text-xl text-center font-semibold">Phản hồi dự đoán</span>
        <span className="text-gray-300">Kết quả: {pred}</span>
        <span className="text-gray-300">Xác suất: {prob !== null ? (prob * 100).toFixed(0) + '%' : ''}</span>
        <div className="flex justify-center items-center gap-4">


          <Button text={IsDrawSkeleton ? "Ẩn khung xương" : "Hiển thị khung xương"} onClick={() => setIsDrawSkeleton(!IsDrawSkeleton)} />

          {!isManual ?
            <div className="cursor-pointer active:scale-90 hover:underline italic" onClick={() => setIsManual(true)}>
              Hướng dẫn sử dụng
            </div>
            : null}
        </div>
      </div>
      {isManual ? <Manual setIsManual={setIsManual} /> : null}

    </div>
  )
}

export default HandSignResult

"use client";

import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { HandLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
import Button from "../ui/CustomButton";

interface Props {
    onLandmarksChange: (lm: number[][] | null) => void;
    isDrawSkeleton: boolean;
}


const DetectCamera = ({ onLandmarksChange, isDrawSkeleton }: Props) => {
    const [isCameraOn, setIsCameraOn] = useState(false);
    const webcamRef = useRef<Webcam>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const handLandmarkerRef = useRef<HandLandmarker | null>(null);

    useEffect(() => {
        const loadModel = async () => {
            const vision = await FilesetResolver.forVisionTasks("/mediapipe");

            handLandmarkerRef.current = await HandLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: "/mediapipe/hand_landmarker.task",
                    delegate: "CPU", // GPU gây lỗi nhiều khi wasm chưa init xong
                },
                runningMode: "VIDEO",
                numHands: 1
            });
        };

        loadModel();
    }, []);

    useEffect(() => {
        if (!isCameraOn || !handLandmarkerRef.current) return;
        let frameId: number;
        const detect = () => {
            const video = webcamRef.current?.video;
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext('2d');
            const webcamElement = webcamRef.current?.video;

            if (!video || !canvas || !ctx || video.readyState !== 4) {
                frameId = requestAnimationFrame(detect);
                return;
            }

            if (webcamElement) {
                const rect = webcamElement.getBoundingClientRect();

                if (canvas.width !== rect.width || canvas.height !== rect.height) {
                    canvas.width = rect.width;
                    canvas.height = rect.height;
                }
            }

            try {
                const results = handLandmarkerRef.current!.detectForVideo(video, Date.now());
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                if (results.landmarks && results.landmarks.length > 0) {
                    const lm = results.landmarks[0];
                    const arr = lm.map((p) => [p.x, p.y, p.z]);
                    onLandmarksChange(arr);
                } else {
                    onLandmarksChange(null);
                }
                if (isDrawSkeleton) {
                    results.landmarks?.forEach(landmarks => {
                        HandLandmarker.HAND_CONNECTIONS.forEach(({ start, end }) => {
                            const [sx, sy] = [landmarks[start].x * canvas.width, landmarks[start].y * canvas.height];
                            const [ex, ey] = [landmarks[end].x * canvas.width, landmarks[end].y * canvas.height];
                            ctx.beginPath();
                            ctx.moveTo(canvas.width - sx, sy);
                            ctx.lineTo(canvas.width - ex, ey);
                            ctx.strokeStyle = "#00FF00";
                            ctx.lineWidth = 3;
                            ctx.stroke();
                        });

                        landmarks.forEach(({ x, y }) => {
                            ctx.beginPath();
                            ctx.arc(canvas.width - x * canvas.width, y * canvas.height, 5, 0, Math.PI * 2);
                            ctx.fillStyle = "#FF0000";
                            ctx.fill();
                        });
                    });
                }

            } catch (e) {
                console.error(e);
            }

            frameId = requestAnimationFrame(detect);
        };

        detect();
        return () => cancelAnimationFrame(frameId);
    }, [isCameraOn, isDrawSkeleton]);

    return (
        <div className="flex flex-col justify-center items-center gap-4 flex-1">
            <div className="relative">
                {isCameraOn && (
                    <>
                        <Webcam
                            ref={webcamRef}
                            audio={false}
                            mirrored
                            className="rounded-xl border"
                            
                        />
                        <canvas
                            ref={canvasRef}
                            className="absolute top-0 left-0 rounded-xl pointer-events-none"
                        />
                    </>
                )}
            </div>
            <Button text={isCameraOn ? "Đóng camera" : "Mở camera"} onClick={() => setIsCameraOn(!isCameraOn)} />
        </div>
    );
};

export default DetectCamera;
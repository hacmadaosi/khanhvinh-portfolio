import { X } from 'lucide-react';

interface Props {
    setIsManual: (value: boolean) => void;
}

const Manual = ({ setIsManual }: Props) => {
    return (
        <div className="border pt-4 py-6 px-4 rounded-2xl">
            <ul className="font-semibold">
                <li className="flex justify-end">
                    <div className="font-normal text-right active:scale-95 hover:italic hover:underline cursor-pointer select-none" onClick={() => setIsManual(false)}>
                        <X  size={16}/>
                    </div>
                </li>
                <li>
                    Bước 1: <span className="font-normal">Nhấn vào nút <strong>"Mở Camera"</strong> để khởi động hệ thống.</span>
                </li>
                <li>
                    Bước 2: <span className="font-normal">Đưa bàn tay vào khu vực mà camera hiển thị. Giữ tay trong khung hình để hệ thống đọc được các điểm mốc.</span>
                </li>
                <li>
                    Bước 3: <span className="font-normal">Giữ cố định tay trong 1–2 giây để mô hình phân tích và hiển thị kết quả dự đoán.</span>
                </li>
                <li className="text-sky-400 my-2">
                    Lưu ý:
                    <span className="font-normal text-white">
                        &nbsp;Hệ thống chỉ hỗ trợ nhận diện <strong>01 bàn tay</strong> tại một thời điểm. Vui lòng đảm bảo đủ ánh sáng và không bị che khuất.
                    </span>
                </li>
                
            </ul>
        </div>
    )
}

export default Manual

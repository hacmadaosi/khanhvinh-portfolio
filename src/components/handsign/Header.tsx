import Button from "../ui/CustomButton"

const Header = () => {
    return (
        <div className="flex items-center gap-4">
            <div className='py-4 px-8 rounded-2xl h-fit border flex flex-col gap-2'>
                <h2 className="text-xl font-semibold">Giới thiệu</h2>
                <p className="font-normal leading-relaxed text-gray-300">
                    Ứng dụng này hỗ trợ nhận diện <span className="font-semibold">ngôn ngữ ký hiệu các số từ 0 đến 9</span> thông qua camera.
                    Hệ thống sẽ theo dõi chuyển động bàn tay, hiển thị khung xương và sử dụng mô hình học máy
                    để phân tích và dự đoán số mà bạn đang biểu diễn. Chỉ cần bật camera và đưa tay vào khung
                    để xem kết quả nhận diện theo thời gian thực.
                </p>
            </div>
            <Button text="Quay lại" variant="link" href='/' />
        </div>

    )
}

export default Header

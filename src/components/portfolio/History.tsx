import Button from "../ui/CustomButton"

const History = () => {
    return (
        <div className="flex flex-col mb-32">
            <div className='flex text-white'>
                <div className='flex-1 px-12 py-6'>
                    <div className="border px-5 py-8 rounded-xl flex flex-col gap-2">
                        <span className="text-xl font-semibold">Học vấn</span>
                        <ul className="px-3">
                            <li className="text-xl">Trường Đại học An Giang (2022 - 2026)</li>
                            <li><span>Chuyên ngành:</span> Kỹ thuật phần mềm</li>
                        </ul>
                        <span className="text-xl font-semibold">Nổi bật:</span>
                        <ul className="px-3">
                            <li>GPA: 3.19</li>
                            <li>2 lần nhận học bổng khuyến học</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white w-px relative">
                    <div className="w-[11px] h-[11px] absolute bg-white rounded-full -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"></div>
                </div>
                <div className="flex-1 px-12 py-6"></div>
            </div>
            <div className='flex text-white'>
                <div className="flex-1 px-12"></div>
                <div className="bg-white w-px relative">
                    <div className="w-[11px] h-[11px] absolute bg-white rounded-full -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"></div>
                </div>
                <div className='flex-1 px-12'>
                    <div className="border px-5 py-8 rounded-xl flex flex-col gap-2">
                        <span className="text-xl font-semibold">Chứng chỉ</span>
                        <ul className="px-3">
                            <li>Microsoft Office Specialist: PowerPoint</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='flex text-white'>
                <div className='flex-1 px-12 py-6'>
                    <div className="border px-5 py-8 rounded-xl flex flex-col gap-2">
                        <span className="text-xl font-semibold">Giải thưởng</span>
                        <ul className="px-3">
                            <li>Giải Khuyến khích Cuộc thi tin học văn phòng thế giới - Viettel năm 2025 Khu vực Đồng bằng sông Cửu Long</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white w-px relative">
                    <div className="w-[11px] h-[11px] absolute bg-white rounded-full -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"></div>
                </div>
                <div className="flex-1 px-12 py-6 flex">
                </div>
            </div>
        </div>

    )
}

export default History

import CardSkill from "../ui/CardSkill"

const Skill = () => {
    return (
        <div className='flex flex-1 gap-12 items-center justify-center text-white'>
            < CardSkill title="Git" src="/git.png" alt="git"
                desc="Git là hệ thống quản lý mã nguồn phân tán, giúp theo dõi lịch sử thay đổi, làm việc nhóm hiệu quả và dễ dàng quản lý các phiên bản của dự án."
            />
            < CardSkill title="React" src="/react.png" alt="react"
                desc="React là thư viện JavaScript dùng để xây dựng giao diện người dùng theo mô hình component, giúp tái sử dụng code, tối ưu hiệu suất và phát triển ứng dụng nhanh hơn."
            />
            < CardSkill title="JavaScript" src="/javascript.png" alt="javascript"
                desc="JavaScript là ngôn ngữ lập trình chính trên web, cho phép tạo các thao tác động, xử lý logic phía client và xây dựng ứng dụng web tương tác."
            />
            < CardSkill title="TailwindCSS" src="/tailwind.png" alt="tailwind"
                desc="TailwindCSS là framework CSS dạng utility-first giúp xây dựng giao diện nhanh bằng các class nhỏ gọn, dễ responsive và tối ưu CSS khi build, phù hợp cho cả dự án nhỏ đến lớn."
            />
        </div>
    )
}

export default Skill

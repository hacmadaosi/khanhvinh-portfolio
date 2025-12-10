"use client";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import Button from "../ui/CustomButton";

const CardInfo = () => {
    const [displayedName, setDisplayedName] = useState('');

    const fullName = 'Lê Khánh Vinh';

    const copyNumberPhone = () => {
        const numberphone = document.getElementById("lbeNumberPhone")?.textContent
        if (navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(numberphone!);
            toast.success("Đã sao chép vào clipboard")
        } else {
            const t = document.createElement("textarea");
            t.value = numberphone!;
            document.body.appendChild(t);
            t.select();
            document.execCommand("copy");
            document.body.removeChild(t);
            toast.success("Đã sao chép vào bộ nhớ tạm")
        }
    }

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullName.length) {
                setDisplayedName(fullName.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col sm:flex-row w-full h-fit sm:p-5 sm:gap-12 gap-8 sm:border rounded-2xl text-white">
            <div>
                <img src="/anhdaidien.jpg" alt="Ảnh đại diện" className="rounded-lg w-full sm:w-[250px] sm:h-[250px] object-cover max-w-none" />
            </div>
            <div className='flex flex-col flex-1 gap-3'>
                <span className='text-4xl font-bold border-b-2 border-sky-400 w-fit pb-2'>{displayedName}</span>
                <p className='sm:mb-auto font-semibold text-xl animate-change-color'>Lập trình viên tự do</p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2"><IoLocationOutline size={24} />
                        <span className='text-sm'>xã Mỹ Đức, tỉnh An Giang</span></li>
                    <li><a href="mailto:khanhvinh2288@gmail.com" className='flex items-center gap-2 w-fit'><MdOutlineEmail size={24} />
                        <span className='text-sm'>khanhvinh2288@gmail.com</span></a></li>
                    <li className='flex items-center gap-2 w-fit'><MdOutlinePhone size={24} />
                        <span id='lbeNumberPhone' className='text-sm cursor-pointer active:scale-95' onClick={() => copyNumberPhone()}>0339432860</span></li>
                </ul>
            </div>

            <ul className='flex sm:flex-col gap-3 justify-end sm:border-l border-white sm:pl-5 sm:pr-1'>
                <li className='text-right'>
                    <a href="https://www.linkedin.com/in/lkvinh" className='flex gap-3 justify-end items-center group' target="_blank">
                        <span className="hidden group-hover:block transition-all duration-200 animate-change-color "  >lkvinh</span>
                        <FaLinkedin size={24} />
                    </a>
                </li>
                <li className='text-right'>
                    <a href="https://github.com/hacmadaosi" className='flex gap-3 justify-end items-center group' target="_blank">
                        <span className="hidden group-hover:block transition-all duration-200 animate-change-color "  >hacmadaosi</span>
                        <FaGithub size={24} />
                    </a>
                </li>
                <li className='text-right'>
                    <a href="https://www.instagram.com/hacmadaosi" className='flex gap-3 justify-end items-center group' target="_blank">
                        <span className="hidden group-hover:block transition-all duration-200 animate-change-color " >hacmadaosi</span>
                        <FaInstagram size={24} />

                    </a>
                </li>
            </ul>
        </div>
    )
}

export default CardInfo

"use client";

import { cn } from "@/src/libs/utils";
import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
    onClick?: () => void;
    text: string;
    href?: string;
    className?: string;
    variant?: "default" | "link"
}

const Button = ({ text, onClick, href, className, variant = "default" }: ButtonProps) => {
    const [clicked, setClicked] = useState(false);

    const baseStyle =
        "whitespace-nowrap h-fit w-fit px-4 py-2 cursor-pointer rounded-lg font-semibold select-none active:scale-95 text-black bg-white";

    const variants = {
        default: "hover:brightness-90",
        link: "bg-transparent text-white border border-transparent hover:border-white",
    };

    const style = cn(baseStyle, variants[variant], className);

    // ----- Button dạng Link -----
    if (href) {
        return (
            <Link href={href} className={style}>
                {text}
            </Link>
        );
    }

    // ----- Button dạng khác -----
    const handleClick = () => {
        setClicked(!clicked);
        onClick && onClick();
    };

    return (
        <div
            className={cn(style )}
            onClick={handleClick}
        >
            {text}
        </div>
    );
}

export default Button

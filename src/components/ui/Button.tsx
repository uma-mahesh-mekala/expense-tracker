import { ButtonProps } from "@/types";

export default function Button({buttonText, className, ...props }: ButtonProps) {
    const inputClass = `w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition`;

    return <button className = {`${inputClass} ${className}`} {...props} >
        {buttonText}
    </button>
}
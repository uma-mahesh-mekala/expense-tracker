import { InputProps } from "@/types";

export default function Input({label, error, className = '', ...props}: InputProps) {
    const inputClass = "mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    return (
        <div>
            {label && (
            <label
              htmlFor={props.id || props.name}
              className="block text-sm font-medium text-gray-700"
            >
              {label}
            </label>
            )}
            <input
              className={`${inputClass} ${className}`}
              {...props}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>
    )
}
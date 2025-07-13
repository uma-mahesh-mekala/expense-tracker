// app/components/Header.tsx
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex gap-3 px-4 py-4">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          <span className="text-blue-600">Expense</span> Tracker
        </h1>

        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </div>
    </header>
  );
}

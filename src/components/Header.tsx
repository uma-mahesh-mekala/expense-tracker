// app/components/Header.tsx
import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center gap-3 px-4 py-4">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={32}
          height={32}
          className="object-contain"
        />

        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-800">Expense Tracker</h1>
      </div>
    </header>
  );
}

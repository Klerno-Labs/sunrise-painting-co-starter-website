import Link from "next/link";
import { images } from "@/config/images";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="bg-primary text-white p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="m12 19 7-7 3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="m2 2 7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-heading font-bold text-primary leading-none">
          SUNRISE
        </span>
        <span className="text-xs font-medium text-secondary tracking-wider">
          PAINTING CO.
        </span>
      </div>
    </Link>
  );
}
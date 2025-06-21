// components/PeaButton.tsx
export default function PeaButton() {
  return (
    <div className="absolute bottom-6 right-6 z-50">
      <div className="relative w-[180px] h-[120px]">
        <svg
          viewBox="0 0 180 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M20,100 C0,60 40,0 90,20 C140,40 180,80 160,100 C140,120 40,140 20,100 Z"
            fill="#1E3A8A" // Tailwind's blue-800
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white tracking-widest text-sm">view collection</span>
        </div>
      </div>
    </div>
  );
}

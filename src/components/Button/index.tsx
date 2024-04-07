export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-primary-cta rounded-full h-12 w-[208px] text-white text-sm">
      {children}
    </button>
  );
}

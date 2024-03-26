export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded bg-[#1616190D]/[0.05] h-[23px]">
      <p className="font-medium text-[#656D76]">{children}</p>
    </div>
  );
}

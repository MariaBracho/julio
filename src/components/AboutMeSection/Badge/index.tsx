export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center rounded bg-primary-text/5 h-[23px] w-fit px-1">
      <p className="font-medium text-secondary-text text-sm">{children}</p>
    </div>
  );
}

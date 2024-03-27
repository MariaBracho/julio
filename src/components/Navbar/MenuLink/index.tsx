"use client";

import { useActiveSectionStore } from "@/stores/activeSectionStore";

export default function MenuLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  const { activeSection } = useActiveSectionStore();

  const isActive = href.replace("#", "") === activeSection;

  return (
    <li
      data-active={isActive}
      className="hover:text-primary-cta  hover:font-medium data-[active=true]:text-primary-cta data-[active=true]:font-medium "
    >
      <a href={href}>{children}</a>
    </li>
  );
}

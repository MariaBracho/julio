"use client";

import { useEffect, useState } from "react";
import useHash from "@/hooks/useHash";

export default function MenuLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  const [isActive, setIsActive] = useState(false);
  const { hash } = useHash();

  useEffect(() => {
    setIsActive(hash === href);
  }, [hash, href]);

  return (
    <li
      data-active={isActive}
      className="hover:text-primary-cta  hover:font-medium data-[active=true]:text-primary-cta data-[active=true]:font-medium "
    >
      <a href={href}>{children}</a>
    </li>
  );
}

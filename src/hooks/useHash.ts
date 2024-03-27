"use client";

import { useEffect, useState } from "react";
import { useIsClient } from "usehooks-ts";

export default function useHash() {
  const isClient = useIsClient();

  const loadHash = () =>
    isClient ? decodeURIComponent(window.location.hash.replace("#", "")) : null;

  const [hash, setHash] = useState<string | null>(loadHash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(loadHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    hash,
  };
}

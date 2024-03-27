import { useCallback, useEffect, useState } from "react";

const isClient = typeof window !== "undefined";
const getHash = () =>
  isClient ? decodeURIComponent(window.location.hash) : null;

export default function useHash() {
  const [hash, setHash] = useState<string | null>(getHash());

  const handleHashChange = useCallback(() => {
    setHash(getHash());
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [handleHashChange]);
  return {
    hash,
  };
}

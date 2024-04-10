"use client";

import { useActiveProjectModal } from "@/stores/projectModalActive";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function ShowProjectModal() {
  return function Wrapper<T extends Record<string, unknown>>(
    Component: React.FC<T>
  ) {
    return function WithActiveSessionWrapper(props: T) {
      const { openModal, setActiveModal } = useActiveProjectModal();
      const searchParams = useSearchParams();
      const queryProject = searchParams?.get("project") ?? null;

      useEffect(() => {
        setActiveModal(!!queryProject);
      }, [queryProject, setActiveModal]);

      if (!queryProject) return null;
      if (!openModal) return null;

      return <Component {...props} />;
    };
  };
}

export default ShowProjectModal;

import { ExtendedRecordMap } from "notion-types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ActiveProjectModal = {
  openModal: boolean;
  fetchData: {
    recordMap: ExtendedRecordMap | undefined;
    rootPageId?: string;
  } | null;
  data: {
    title: string;
    icon: string;
    category: string;
    hasProject?: boolean;
    image: string;
    url?: string;
    isOpenProject?: boolean;
  } | null;
  setActiveModal: (activeSection: boolean) => void;
  setData: (data: ActiveProjectModal["data"]) => void;
  setFetchData: (fetchData: ActiveProjectModal["fetchData"]) => void;
};

export const useActiveProjectModal = create(
  persist<ActiveProjectModal>(
    (set) => ({
      data: null,
      openModal: false,
      fetchData: {
        recordMap: undefined,
        rootPageId: undefined,
      },
      setActiveModal: (changeStatus: boolean) =>
        set({ openModal: changeStatus }),
      setData: (data: ActiveProjectModal["data"]) => set({ data }),
      setFetchData: (fetchData: ActiveProjectModal["fetchData"]) =>
        set({ fetchData }),
    }),

    {
      name: "projectModalActive",
    }
  )
);

import { DemonstrationActivityWithUser } from "@/types/DemonstrationActivitiesTypes";
import { DemonstrationFarmWithSpecialization } from "@/types/DemonstrationFarmsTypes";

import { create } from "zustand";
interface useFarmsData {
  farms: DemonstrationFarmWithSpecialization[] | [];
  setFarms: (farms: DemonstrationFarmWithSpecialization[]) => void;
  setNewFarms: (farm: DemonstrationFarmWithSpecialization) => void;
  updateFarm: (farm: DemonstrationFarmWithSpecialization) => void;
}

export const useFarmsData = create<useFarmsData>((set) => ({
  farms: [],
  setFarms: (farms) => set({ farms: farms }),
  setNewFarms: (farm) =>
    set((state) => ({
      farms: [...state.farms, farm].sort(
        //@ts-ignore
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      ),
    })),
  updateFarm: (farm) =>
    set((state) => ({
      farms: [...state.farms.filter((el) => el.id != farm.id), farm].sort(
        //@ts-ignore
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      ),
    })),
}));

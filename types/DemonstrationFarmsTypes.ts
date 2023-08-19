import {
  DemonstrationFarm,
  FarmSpecialization,
  AmountSpecialization,
  Specialization,
  Enterprise,
  Region,
} from "@prisma/client";

export interface FarmSpecializationWithAmountSpecialization
  extends FarmSpecialization {
  AmountSpecialization: AmountSpecialization[];
  Specialization: Specialization | null;
}
interface EnterpriseWithRegion extends Enterprise {
  Region: Region;
}
export interface DemonstrationFarmWithSpecialization extends DemonstrationFarm {
  FarmSpecialization: FarmSpecializationWithAmountSpecialization[];
  Enterprise: EnterpriseWithRegion | null;
}

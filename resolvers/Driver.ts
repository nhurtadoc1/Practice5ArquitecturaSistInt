import { DriverModelType } from "../db/Driver.ts";
import { TravelModel, TravelModelType } from "../db/Travel.ts";

export const Driver = {
  travels: async (parent: DriverModelType): Promise<TravelModelType[]> => {
    const travels = await TravelModel.find({ driver: parent._id });
    return travels;
  },
};
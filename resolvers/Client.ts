import { ClientModelType } from "../db/Client.ts";
import { TravelModel, TravelModelType } from "../db/Travel.ts";

export const Client = {
  travels: async (parent: ClientModelType): Promise<TravelModelType[]> => {
    const travels = await TravelModel.find({ client: parent._id });
    return travels;
  },
};
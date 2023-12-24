import { GraphQLError } from "graphql";
import { ClientModel, ClientModelType } from "../db/Client.ts";
import { DriverModel, DriverModelType } from "../db/Driver.ts";
import { TravelModelType } from "../db/Travel.ts";

export const Travel = {
  client: async (parent: TravelModelType): Promise<ClientModelType> => {
    const client = await ClientModel.findById(parent.client).exec();
    if (!client) {
      throw new GraphQLError(`No client found with id ${parent.client}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return client;
  },
  driver: async (parent: TravelModelType): Promise<DriverModelType> => {
    const driver = await DriverModel.findById(parent.driver).exec();
    if (!driver) {
      throw new GraphQLError(`No driver found with id ${parent.client}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return driver;
  }, 
};
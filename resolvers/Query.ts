import { GraphQLError } from "graphql";
import { ClientModel, ClientModelType } from "../db/Client.ts";
import { DriverModel, DriverModelType } from "../db/Driver.ts";
import { TravelModel, TravelModelType } from "../db/Travel.ts";

export const Query = {
  clients: async (): Promise<ClientModelType[]> => {
    const clients = await ClientModel.find().exec();
    return clients;
  },

  client: async (_: unknown, args: { id: string }): Promise<ClientModelType> => {
    const client = await ClientModel.findById(args.id);
    if (!client) {
      throw new GraphQLError(`No client found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return client;
  },

  drivers: async (): Promise<DriverModelType[]> => {
    const drivers = await DriverModel.find().exec();
    return drivers;
  },

  driver: async (_: unknown, args: { id: string }): Promise<DriverModelType> => {
    const driver = await DriverModel.findById(args.id);
    if (!driver) {
      throw new GraphQLError(`No driver found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return driver;
  },

  travels: async (): Promise<TravelModelType[]> => {
    const travels = await TravelModel.find().exec();
    return travels;
  },

  travel: async (_: unknown, args: { id: string }): Promise<TravelModelType> => {
    const travel = await TravelModel.findById(args.id);
    if (!travel) {
      throw new GraphQLError(`No travel found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return travel;
  },
};
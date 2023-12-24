import { GraphQLError } from "graphql";
import { ClientModel, ClientModelType } from "../db/Client.ts";
import { DriverModel, DriverModelType } from "../db/Driver.ts";
import { TravelModel, TravelModelType } from "../db/Travel.ts";
import mongoose from "mongoose";
import { Card } from "../types.ts";
import { CardModel } from "../db/Card.ts";

export const Mutation = {
  addClient: async (
    _: unknown,
    args: { name: string; email: string }
  ): Promise<ClientModelType> => {
    const client = {
      name: args.name,
      email: args.email,
    };
    const newClient = await ClientModel.create(client);
    return newClient;
  },
  deleteClient: async (
    _: unknown,
    args: { id: string }
  ): Promise<ClientModelType> => {
    const client = await ClientModel.findByIdAndDelete(args.id);
    if (!client) {
      throw new GraphQLError(`No client found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return client;
  },
  addCard: async (
    _: unknown,
    args: { id: string; number: number; cvv: number; expirity: string; money: number}
  ): Promise<ClientModelType> => {
    const card = {
        number: args.number,
        cvv: args.cvv,
        expirity: args.expirity,
        money: args.money,
    }
    const newCard = await CardModel.create(card);
    const refClient = await ClientModel.findById(args.id);
    if (!refClient) {
      throw new GraphQLError(`No client found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    const clientCardList = refClient!.cards
    const client = await ClientModel.findByIdAndUpdate(
      args.id,
      { cards: clientCardList.push(newCard) },
      { new: true, runValidators: true }
    );
    return client!;
  },
  removeCard: async (
    _: unknown,
    args: { id: string; number: number }
  ): Promise<ClientModelType> => {
    const refClient = await ClientModel.findById(args.id);
    if (!refClient) {
      throw new GraphQLError(`No client found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    const clientCardList = refClient!.cards
    clientCardList.filter((card: Card) => { return card.number != args.number});
    const client = await ClientModel.findByIdAndUpdate(
      args.id,
      { cards: null },
      { new: true, runValidators: true }
    );
    if (!client) {
      throw new GraphQLError(`No client found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return client;
  },

};
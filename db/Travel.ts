import mongoose from "mongoose";
import { Status, Travel } from "../types.ts";
const Schema = mongoose.Schema;

const TravelSchema = new Schema({
  client: { type: Schema.Types.ObjectId, required: true, unique: true, ref: "Client" },
  driver: { type: Schema.Types.ObjectId, required: true, unique: true, ref: "Driver" },
  money: { type: Number, unique: false, required: true, min: 5},
  distance: {type: Number, unique: false, required: true, min: 0.01},
  date: { type: Date, required: true, unique: false, min: '2023-12-20' },
  status: { type: String, unique: false, required: true },
});

export type TravelModelType = mongoose.Document & Omit<Travel, "id" >;

export const TravelModel = mongoose.model<TravelModelType>(
    "Travel",
    TravelSchema
);
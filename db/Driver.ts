import mongoose from "mongoose";
import { Driver, Travel } from "../types.ts";
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true, validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
  username: { type: String, unique: true, required: true },
  travels: { type: Array<Travel>, required: true, unique: false, ref: "Travel" },
});

export type DriverModelType = mongoose.Document & Omit<Driver, "id" >;

// if person is deleted, then delete all pets owned by that person
//DriverSchema.post("findOneAndDelete", async function (doc: DriverModelType) {
//  await mongoose.models.Pet.deleteMany({ owner: doc._id });
//});

export const DriverModel = mongoose.model<DriverModelType>(
  "Driver",
  DriverSchema
);
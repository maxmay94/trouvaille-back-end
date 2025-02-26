import mongoose from "mongoose";

const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, unique: true },
    name: String,
    isAdmin: { type: Boolean, required: true, default: false },
    itineraries: [{ type: Schema.Types.ObjectId, ref: "Itinerary" }],
    starred: [{ type: Schema.Types.ObjectId, ref: "Place" }],
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

export { Profile };

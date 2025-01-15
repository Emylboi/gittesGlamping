import mongoose, { Schema } from "mongoose";
mongoose.set("runValidators", true);

const staySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  numberOfPersons: { type: String, required: true },
  price: { type: Number, required: true },
  includes: { type: String },
  picture: { type: String, required: true },
  created: { type: Date, default: new Date() },
});

export default mongoose.models.stay || mongoose.model("stay", staySchema);

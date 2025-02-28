import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  img: String,
  codelink: String,
  livelink: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model("Portfolio", portfolioSchema);

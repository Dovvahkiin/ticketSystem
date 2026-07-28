import mongoose, { mongo } from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketType: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    content: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      default: null,
    },
    answeredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true },
);

const Ticket = mongoose.model("ticket", ticketSchema);
export default Ticket;

import mongoose, { ObjectId } from "mongoose";

export type ChallengerType = {
  _id: ObjectId | string
  name: string
  course: string
  slugChallenge: {
    key: number
  }
  pageChallenge: {
    key: number
    plainTextCompare: string[]
    cipherText: string
    solved?: string
    acceptedAnswer?: string
  }
}

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  course: { type: String, enum: ["web", "data"], required: true },
  slugChallenge: {
    key: { type: Number, required: true }
  },
  pageChallenge: { 
    key: { type: Number, required: true },
    plainTextCompare: [String],
    cipherText: { type: String, required: true },
    solved: String,
    acceptedAnswer: String
  }
});

const ChallengerModal = mongoose.models.challenger || mongoose.model("challenger", schema);

export default ChallengerModal
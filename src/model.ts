import mongoose from "mongoose";

export type ChallengerType = {
  name: string
  slugChallenge: {
    key: number
  }
  pageChallenge: {
    key: number
    plainText: string
    cipherText: string
    solved?: string
  }
}

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slugChallenge: {
    key: { type: Number, required: true }
  },
  pageChallenge: { 
    key: { type: Number, required: true },
    plainText: { type: String, required: true },
    cipherText: { type: String, required: true },
    solved: String
  }
});

const ChallengerModal = mongoose.models.challenger || mongoose.model("challenger", schema);

export default ChallengerModal
import * as mongoose from "mongoose"

export const UsersSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    }, 

    phone: {
      type: Number,
      required: true,
    },

    answer: {
      type: String,
      required: false,
    }
});

export interface IUsers extends mongoose.Document {
    name: string;
    email: string;
    phone: number;
    answer: string;
}

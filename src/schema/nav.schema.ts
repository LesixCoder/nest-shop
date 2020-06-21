import * as mongoose from 'mongoose';

export const NavSchema = new mongoose.Schema({
  title: String,
  url: String,
  status: Number,
});

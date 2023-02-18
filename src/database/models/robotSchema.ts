import mongoose from "mongoose";

const robotSchema = new mongoose.Schema({
  name: String,
  image: String,
  stats: {
    speed: Number,
    endurance: Number,
  },
  creationDate: Date,
});

const Robot = mongoose.model("Robot", robotSchema);

export default Robot;

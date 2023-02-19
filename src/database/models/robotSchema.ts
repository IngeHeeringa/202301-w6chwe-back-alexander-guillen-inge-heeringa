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

robotSchema.set("toJSON", {
  virtuals: true,
  transform(doc, ret) {
    delete ret._id;
  },
});

export default Robot;

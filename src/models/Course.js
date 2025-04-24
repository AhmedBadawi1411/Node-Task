const mongoose = require("mongoose");

const schema = {
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  price: { type: Number, required: true },
};

const options = { timestamps: true };

const courseSchema = new mongoose.Schema(schema, options);

module.exports = mongoose.model("Course", courseSchema);

const mongoose = require('mongoose');

const TodoItemSchema = new mongoose.Schema({
  behavior:  { type: mongoose.Schema.Types.ObjectId, ref: 'Behavior', required: true },
  text:      { type: String, required: true },
});

module.exports = mongoose.model("TodoItem", TodoItemSchema);

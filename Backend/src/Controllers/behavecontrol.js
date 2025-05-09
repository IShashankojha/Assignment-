const Behavior = require("../models/Behavior");
const TodoItem = require("../models/TodoItem");

exports.getTopBehaviors = async (req, res) => {
  try {
    const data = await Behavior.aggregate([
      { $match: { user: req.userId } },
      {
        $lookup: {
          from: "todoitems",
          localField: "_id",
          foreignField: "behavior",
          as: "todos",
        },
      },
      { $addFields: { todoCount: { $size: "$todos" } } },
      { $sort: { todoCount: -1 } },
      { $limit: 5 },
    ]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching top behaviors" });
  }
};

exports.getUserBehaviors = async (req, res) => {
  const behaviors = await Behavior.find({ user: req.userId });
  res.json(behaviors);
};

exports.createBehavior = async (req, res) => {
  const { name } = req.body;
  const behavior = new Behavior({ name, user: req.userId });
  await behavior.save();
  res.status(201).json(behavior);
};

exports.deleteBehavior = async (req, res) => {
  const { id } = req.params;
  await TodoItem.deleteMany({ behavior: id });
  await Behavior.findByIdAndDelete(id);
  res.json({ message: "Behavior and todos deleted" });
};

exports.getTodosByBehavior = async (req, res) => {
  const { id } = req.params;
  try {
    const todos = await TodoItem.find({ behavior: id });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Error fetching todos" });
  }
};

exports.addTodo = async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;
  const todo = new TodoItem({ behavior: id, text });
  await todo.save();
  res.status(201).json(todo);
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const todo = await TodoItem.findByIdAndUpdate(id, { text }, { new: true });
  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await TodoItem.findByIdAndDelete(id);
  res.json({ message: "Todo deleted" });
};

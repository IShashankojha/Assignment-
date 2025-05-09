const express = require("express");
const router = express.Router();
const auth = require("../middleware/authmiddleware.js");
const {
  getTopBehaviors,
  getUserBehaviors,
  createBehavior,
  deleteBehavior,
  addTodo,
  updateTodo,
  deleteTodo,
  getTodosByBehavior,
} = require("../Controllers/behavecontrol.js");

router.get("/top", auth, getTopBehaviors);
router.get("/", auth, getUserBehaviors);
router.post("/", auth, createBehavior);
router.delete("/:id", auth, deleteBehavior);

router.get("/:id/todos", auth, getTodosByBehavior);
router.post("/:id/todos", auth, addTodo);
router.put("/todos/:id", auth, updateTodo);
router.delete("/todos/:id", auth, deleteTodo);

module.exports = router;

import db from "../database/db.js";

export async function getAllTasks() {
  return await db("tasks").select("*");
}

export async function getTaskById(id) {
  return await db("tasks").where({ id }).first();
}

export async function createTask(title, description) {
  const [id] = await db("tasks").insert({ title, description });
  return getTaskById(id);
}

export async function updateTask(id, updates) {
  await db("tasks").where({ id }).update(updates);
  return getTaskById(id);
}

export async function deleteTask(id) {
  const deleted = await db("tasks").where({ id }).del();
  return deleted > 0;
}

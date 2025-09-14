import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} from "../models/taskModel.js";

// Listar todas as tarefas
export async function listTasks(req, res) {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
}

// Buscar uma tarefa pelo ID
export async function getTask(req, res) {
  try {
    const id = parseInt(req.params.id);
    const task = await getTaskById(id);
    if (!task) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar tarefa" });
  }
}

// Criar nova tarefa
export async function addTask(req, res) {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Título é obrigatório" });
    }
    const newTask = await createTask(title, description);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
}

// Editar tarefa existente
export async function editTask(req, res) {
  try {
    const id = parseInt(req.params.id);
    const updates = req.body;
    const updatedTask = await updateTask(id, updates);
    if (!updatedTask) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar tarefa" });
  }
}

// Remover tarefa
export async function removeTask(req, res) {
  try {
    const id = parseInt(req.params.id);
    const success = await deleteTask(id);
    if (!success) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir tarefa" });
  }
}

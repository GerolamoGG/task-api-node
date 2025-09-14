import db from "./db.js";

async function createTable() {
  const exists = await db.schema.hasTable("tasks");
  if (!exists) {
    await db.schema.createTable("tasks", table => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description");
      table.boolean("completed").defaultTo(false);
      table.timestamp("createdAt").defaultTo(db.fn.now());
    });
    console.log("Tabela 'tasks' criada com sucesso!");
  } else {
    console.log("Tabela 'tasks' já existe.");
  }
  process.exit();
}

createTable();

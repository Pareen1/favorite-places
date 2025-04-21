import * as SQLite from "expo-sqlite";

let db;

export async function init() {
  try {
    db = await SQLite.openDatabaseAsync("places.db");

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL, 
        title TEXT NOT NULL, 
        imageUri TEXT NOT NULL, 
        address TEXT NOT NULL, 
        lat REAL NOT NULL, 
        lng REAL NOT NULL
      );
    `);

    console.log("✅ Table created successfully");
  } catch (error) {
    console.error("❌ Error initializing DB", error);
    throw error;
  }
}

export function getDbInstance() {
  if (!db) {
    throw new Error("Database has not been initialized yet.");
  }
  return db;
}

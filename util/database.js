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

export async function insertPlace(place) {
  const db = getDbInstance();

  try {
    const result = await db.runAsync(
      `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
      [
        place.title,
        place.imageUri,
        place.address,
        place.location.lat,
        place.location.lng,
      ]
    );

    console.log("✅ Inserted place with ID:", result.lastInsertRowId);
    return result.lastInsertRowId;
  } catch (error) {
    console.error("❌ Failed to insert place", error);
    throw error;
  }
}

export async function fetchPlaces() {
  const db = getDbInstance();

  try {
    const result = await db.getAllAsync(`SELECT * FROM places`);
    return result;
  } catch (error) {
    console.error("❌ Failed to fetch places", error);
    throw error;
  }
}

export async function fetchPlaceDetails(id) {
  const db = getDbInstance();

  try {
    const result = await db.getFirstAsync(`SELECT * FROM places WHERE id = ?`, [
      id,
    ]);

    if (!result) {
      throw new Error("No place found with the provided ID.");
    }

    return result;
  } catch (error) {
    console.error("❌ Failed to fetch place details", error);
    throw error;
  }
}

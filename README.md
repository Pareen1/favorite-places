# 📍 Favorite Places App

A React Native app (built with Expo) that lets users store their favorite places — each with a **title**, **image**, and **location**. This project demonstrates how to use native device features (camera, location, maps) in combination with local SQLite storage to create a smooth mobile experience.

## 🌟 Features

- 📸 **Take a photo** from the camera
- 📍 **Get current location** or pick one on an interactive map
- 🗺️ **Preview the selected location** with Google Static Maps
- 🧠 **Reverse geocoding** to fetch human-readable addresses from coordinates
- 💾 **Store places locally** using SQLite for persistence
- 🗂️ **List of saved places**, with image and address details
- 🧭 **Detailed view** with image, address and the ability to open the location on a map

## ⚙️ Tech Stack

- **React Native** (Expo)
- **SQLite** via `expo-sqlite`
- **expo-location**
- **expo-image-picker**
- **Google Maps API** (for static map preview and reverse geocoding)
- **React Navigation**

## 📦 Project Structure

- `screens/`: App screens (AddPlace, AllPlaces, Map, PlaceDetails)
- `components/`: Reusable UI components like forms, buttons, and preview cards
- `util/`: Utility files for database and map logic
- `constants/`: Color schemes and shared styles
- `models/`: `Place` model for structured data

## 🧠 Native Features in Use

- **Camera access** – to capture photos of places
- **Location access** – to get current position and select on map
- **Google APIs** – to turn coordinates into addresses and display preview maps
- **SQLite** – for fast, offline-friendly local storage

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/favorite-places.git
cd favorite-places
```

### 2. Install dependencies
```
npm install
```

### 3. Set up your environment

Create a .env file based on .env.example and add your Google Maps API key.
Make sure your key has access to:
- Static Maps API
- Geocoding API

### 4. Start the app

```
npx expo start
```

Open the app in the Expo Go app on your device (or use a simulator).

## Permissions Required
- Camera
- Location Services

## Known Limitations & Areas for Improvement
- Minimal error handling – API/network failures or denied permissions could use more graceful fallbacks
- Data is only stored locally (no cloud sync or sharing support)
- No unit tests

## What This App Demonstrates
This project showcases how you can:
- Access native device features in React Native using Expo
- Use SQLite for local persistence
- Handle navigation across multiple screens with context-aware data
- Build out a small but complete CRUD-style mobile app from scratch

## Screenshots
![IMG_5494](https://github.com/user-attachments/assets/1e5732ee-a22e-4098-80ea-bc60c2650f3d)
![IMG_5493](https://github.com/user-attachments/assets/bbcda6cb-7688-4357-9dc6-3fff55ecd242)
![IMG_5495](https://github.com/user-attachments/assets/50b79133-db35-40de-9088-9a11725de20f)
![IMG_5496](https://github.com/user-attachments/assets/0c37c85a-bcec-49b0-af51-6fce0e93cff3)
![IMG_5492](https://github.com/user-attachments/assets/dc13c1ad-0333-4c85-935a-ea5c0b2cc989)

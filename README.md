# 🌦️ Weather Dashboard with Geolocation and Skeleton Loading

A **React Native** app that fetches **current weather** based on the
user's **geolocation** using the [OpenWeatherMap
API](https://openweathermap.org/api).\
It includes **skeleton loading**, **local caching**, and **performance
optimizations** for a smooth user experience.

---

## 🚀 Features

- 📍 **Geolocation-based Weather** -- Requests user's location and
  fetches live weather.\
- 🌡️ **Weather Details** -- Displays **temperature, condition, and
  humidity**.\
- ⏳ **Skeleton Loader** -- Shimmer placeholder while fetching API
  data.\
- 💾 **Local Caching** -- Stores weather results locally for offline
  use.\
- 🔄 **Revalidation** -- Refreshes weather data every **15 minutes**.\
- ⚡ **Optimized Performance** -- Reduces unnecessary re-fetching.

---

## 📂 Project Structure

    WeatherDashboard/
    │── src/
    │   ├── api/                # API layer (fetch functions)
    │   │   └── weatherApi.ts
    │   │
    │   ├── components/         # Reusable UI components
    │   │   ├── WeatherCard.tsx
    │   │   └── WeatherSkeleton.tsx
    │   │
    │   ├── hooks/              # Custom hooks for data + caching logic
    │   │   └── useWeather.ts
    │   │
    │   ├── utils/              # Helpers (permissions, storage, constants)
    │   │   ├── location.ts
    │   │   ├── storage.ts
    │   │   └── constants.ts
    │   │
    │   ├── screens/            # Screen-level components
    │   │   └── HomeScreen.tsx
    │   │
    │   ├── styles/             # Centralized styling/theme
    │   │   └── colors.ts
    │   │
    │   └── App.tsx             # Root component
    │
    ├── .env                    # API keys (e.g., OpenWeatherMap)
    ├── package.json
    └── README.md

---

## 🛠️ Tech Stack

- **React Native** (UI Framework)\
- **OpenWeatherMap API** (Weather Data)\
- **AsyncStorage / MMKV** (Local Caching)\
- **react-native-permissions** (Location Permissions)\
- **react-native-geolocation-service** (Get GPS Coordinates)\
- **react-native-skeleton-placeholder** (Skeleton Loader)

---

## 📦 Installation

1.  Clone the repo\

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

2.  Install dependencies\

```bash
npm install
# or
yarn install
```

3.  Add your **OpenWeatherMap API Key**

    - Create a `.env` file in the project root:\

    ```env
    OPENWEATHER_API_KEY=your_api_key_here
    ```

4.  Run the app\

```bash
npm run android
# or
npm run ios
```

---

## 📖 Usage Flow

1.  App requests **location permission**.\
2.  If granted, fetches **lat/lon** using geolocation.\
3.  Calls **OpenWeatherMap API** with user's coordinates.\
4.  Shows a **skeleton loader** while fetching.\
5.  Displays **temperature, weather condition, humidity**.\
6.  Stores result in **AsyncStorage** and revalidates after **15 mins**.

---

## 🧑‍💻 Concepts Covered

- ✅ Permissions Handling\
- ✅ Geolocation Fetching\
- ✅ API Fetch & Error Handling\
- ✅ Skeleton Loading State\
- ✅ Local Caching & Revalidation\
- ✅ Performance Optimization

---

## 📜 License

This project is licensed under the **MIT License**.

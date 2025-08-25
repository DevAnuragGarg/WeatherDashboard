export interface WeatherResponse {
  name: string; // City name
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    main: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

export type Location = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

export type Coords = { latitude: number; longitude: number };

export type LocationContext = {
  location: Location;
  convertAddressToCoordinates: (address: string) => Promise<Coords>;
};

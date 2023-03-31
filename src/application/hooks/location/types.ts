export type Location = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

export type LocationContext = {
  location: Location;
  convertAddressToCoordinates: (address: string) => Promise<void>;
};

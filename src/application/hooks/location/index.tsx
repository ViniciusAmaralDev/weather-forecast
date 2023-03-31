import { Children } from "../../../@types/Children";
import { Location, LocationContext } from "./types";
import GeocodingService from "infrastructure/services/geocoding";
import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({} as LocationContext);

export const LocationProvider = ({ children }: Children) => {
  const service = new GeocodingService();

  const [location, setLocation] = useState<Location>();

  const convertAddressToCoordinates = async (address: string) => {
    try {
      const { data } = await service.convertAddressToCoordinates(address);
      delete data[0].local_names;
      setLocation(data[0]);
    } catch (error: any) {
      throw error;
    }
  };

  useEffect(() => {
    // convertAddressToCoordinates("São Luís, Maranhão");
  }, []);

  return (
    <Context.Provider value={{ location, convertAddressToCoordinates }}>
      {children}
    </Context.Provider>
  );
};

export const useLocation = () => useContext(Context);

export interface VehiclesApiTypes {
  statusCode: number;
  message: string;
  content: Content;
}

export interface Content {
  vehicles: Vehicle[];
  locationVehicles: LocationVehicle[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface Vehicle {
  id: string;
  plate: string;
  fleet?: string;
  type: string;
  model: string;
  nameOwner: string;
  status: string;
  createdAt: string;
}

export interface LocationVehicle {
  id: string;
  fleet: string;
  equipmentId: string;
  name: string;
  plate: string;
  ignition: string;
  lat: number;
  lng: number;
  createdAt: string;
}

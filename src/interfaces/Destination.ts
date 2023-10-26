export interface Destination {
  id: number;
  name: string;
  description: string;
  country: string;
  climate: string;
  currency: string;
  latitude: number;
  longitude: number;
}

export interface DestinationState {
  currentDestination: Destination | null;
}

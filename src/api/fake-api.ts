import { Destination } from "../interfaces/Destination";
import destinations from "../utils/destinationData";
import { calculateDistance } from "../utils/utils";

export const fetchDestinations = async (
  query: string
): Promise<Destination[]> => {
  console.log("QueryFetchDestinations: ", query);
  // Delay Response One Second.
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (query === "fail") {
    return [];
  }
  const matchDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(query.toLowerCase())
  );
  return matchDestinations;
};

// Function to find top 5 nearby destinations
export const getTop5NearbyDestinations = (
  targetDestination: Destination
): Destination[] => {
  console.log("TargetToFetchTop5NearbyDestinations: ",targetDestination.name);
  if (targetDestination) {
    const sortedDestinations = [...destinations].sort((a, b) => {
      const distanceA = calculateDistance(
        targetDestination.latitude,
        targetDestination.longitude,
        a.latitude,
        a.longitude
      );
      const distanceB = calculateDistance(
        targetDestination.latitude,
        targetDestination.longitude,
        b.latitude,
        b.longitude
      );
      return distanceA - distanceB;
    });
    return sortedDestinations.slice(1, 6); // Exclude the target destination itself
  }
  return [];
};

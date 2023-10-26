import { useSelector } from "react-redux";
import { RootState } from "../interfaces/Types";
import DestinationCard from "./DestinationCard";
import { useEffect, useState } from "react";
import { getTop5NearbyDestinations} from "../api/fake-api";
import { Destination } from "../interfaces/Destination";
import NearbyDestinations from "./NearbyDestinations";

const DestinationDetails: React.FC = () => {
  const [nearbyDestionations, setNearbyDestionations] = useState<Destination[]>(
    []
  );

  const currentDestination = useSelector(
    (state: RootState) => state.destination.currentDestination
  );

  const fetchNearbyDestinations = async () => {
    try {
      const nearbyDest = await getTop5NearbyDestinations(
        currentDestination!
      );  
      if (nearbyDest.length > 0) {
        setNearbyDestionations(nearbyDest);
      } else {
        setNearbyDestionations([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentDestination) {
      fetchNearbyDestinations();
    }
  }, [currentDestination]);

  if (!currentDestination) {
    return null;
  }



  return (
    <div className="mt-8 flex flex-col justify-center items-center">
      <DestinationCard destination={currentDestination!} />
      {nearbyDestionations && (
        <NearbyDestinations nearbyDestinations={nearbyDestionations} />
      )}
    </div>
  );
};

export default DestinationDetails;

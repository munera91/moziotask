import { Destination } from "../interfaces/Destination";
import DestinationCard from "./DestinationCard";

interface Props {
  nearbyDestinations: Destination[];
}

const NearbyDestinations: React.FC<Props> = ({ nearbyDestinations }) => {
  return (
    <>
    <span className="text-2xl font-bold my-4 px-1">Other Nearby Destinations!</span>
    <div className="grid md:grid-cols-3 gap-4 md:m-16 m-4">
      {nearbyDestinations.map((nerDest) => (
        <DestinationCard key={nerDest.id} destination={nerDest} />
      ))}
    </div>
    </>
  );
};

export default NearbyDestinations;

import { useDispatch } from "react-redux";
import { Destination } from "../interfaces/Destination";
import { setCurrentDestination } from "../store/destinationSlice";

interface Props {
  destination: Destination;
}

const DestinationCard: React.FC<Props> = ({ destination }) => {
  const dispatch = useDispatch();

  const changeCurrentDestination = () => {
    dispatch(setCurrentDestination(destination));
  };

  return (
    <div
      className="flex flex-col border border-zinc-600 
                  hover:shadow-lg p-8 rounded-2xl cursor-pointer m-2"
      onClick={changeCurrentDestination}
    >
      <p className="text-2xl font-bold pb-4">{destination.name}</p>
      <p>{destination.description}</p>
      <p>
        <strong>Country:</strong> {destination.country}
      </p>
      <p>
        <strong>Climate:</strong> {destination.climate}
      </p>
      <p>
        <strong>Currency:</strong> {destination.currency}
      </p>
    </div>
  );
};

export default DestinationCard;

import ComboBox from "./ComboBox";

const DestinationSearch: React.FC = () => {

  return (
    <div className="flex flex-col text-center gap-4 mt-8 bg-sky-100 p-8 rounded-3xl">
      <h2>Location:</h2>
      <ComboBox/>
    </div>
  );
};

export default DestinationSearch;

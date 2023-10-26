import { useState, useEffect, useRef } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchDestinations } from "../api/fake-api";
import { Destination } from "../interfaces/Destination";
import { setCurrentDestination } from "../store/destinationSlice";

const ComboBox: React.FC = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [optionsOpenned, setOptionsOpenned] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [results, setResults] = useState<Destination[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    if (userInput.length > 0) {
      setQuery(userInput);
    } else {
      setQuery("");
      setResults([]);
      dispatch(setCurrentDestination(null));
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      if (query.length > 0) {
        const data = await fetchDestinations(query);
        setResults(data);
        setOptionsOpenned(true);
      } else {
        setResults([]);
      }
    } catch (error) {
      setError(error instanceof Error ? error : new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  useEffect(() => {
    if (optionsOpenned) {
      inputRef.current?.focus();
    }
  }, [optionsOpenned]);

  const showSelectedDestination = (dest: Destination) => {
    dispatch(setCurrentDestination(dest));
    setOptionsOpenned(false);
  };
  

  return (
    <>
      <input
        className="border rounded-xl px-4 py-2"
        type="text"
        name="combo"
        id="combo"
        placeholder="Search for a location..."
        onChange={handleChange}
        ref={inputRef}
        value={query}
        aria-label="Search for a location"
      />
      {loading && <CircularProgress />}
      {error && <div>Error: {error.message}</div>}
      {results.length === 0 && !loading && query.length > 0 && (
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold">Location not found</p>
          <p>The searched location doesn't exist.</p>
        </div>
      )}
      {results.length > 0 && optionsOpenned && query.length > 0 && (
        <div className="border border-zinc-600 rounded-2xl p-2">
          <ul>
            {results.map((destination) => (
              <li
                className="hover:bg-cyan-200 cursor-pointer"
                key={destination.id}
                onClick={() => showSelectedDestination(destination)}
              >
                {destination.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ComboBox;

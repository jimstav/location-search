import { useState } from "react";
import type { Place } from "../api/Place";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [places, setPlaces] = useState<Place[]>([]);

  return <div>Search for a location</div>;
}

export default LocationSearch;

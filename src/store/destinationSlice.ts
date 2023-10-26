import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Destination, DestinationState } from "../interfaces/Destination";

const initialState: DestinationState = {
  currentDestination : null
}

const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    setCurrentDestination(state, action: PayloadAction<Destination|null>) {
      state.currentDestination = action.payload;
    },
  },
});

export const { setCurrentDestination } = destinationSlice.actions;
export default destinationSlice.reducer;

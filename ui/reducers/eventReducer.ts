import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  name: string;
  organizer: string;
  address: string;
  description: string;
  date: string;
  email: string;
  phone: string;
  socialLinks: SocialLinks[];
  website: string;
  price: number;
  seats: number;
  poster: string;
}

interface SocialLinks {
  name: string;
  url: string;
}

export const eventFormSlice = createSlice({
  name: "eventForm",
  initialState: {
    description: "",
  } as InitialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setOrganizer: (state, action: PayloadAction<string>) => {
      state.organizer = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setPoster: (state, action: PayloadAction<string>) => {
      state.poster = action.payload;
    },
  },
});

export const { setName, setDate, setDescription, setOrganizer, setPoster } =
  eventFormSlice.actions;
export default eventFormSlice.reducer;

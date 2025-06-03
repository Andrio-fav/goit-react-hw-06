import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(c => c.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = Slice.actions;
export default Slice.reducer;

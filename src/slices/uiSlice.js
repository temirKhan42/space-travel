import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const pageNames = ['home', 'destination', 'crew', 'technology'];
const pages = pageNames.map((name) => ({ name, id: _.uniqueId() }));

const initialState = {
  currentPage: pages[0].id,
  pages,
  dropdownMenuState: 'close',   // open/close
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDropdownMenu: (state) => {
      const dropdownMenuState = state.dropdownMenuState === 'open' ? 'close' : 'open';
      return { ...state, dropdownMenuState };
    },
  },
});

export const { toggleDropdownMenu } = uiSlice.actions;

export default uiSlice.reducer;

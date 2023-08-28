import { FontSizePADService, FontSizeService } from '../services';
import { createSlice } from '@reduxjs/toolkit';

const initialFontSize = FontSizeService().get();
const initialFontSizePAD = FontSizePADService().get();

const initialState: {
  fontSize: string | undefined,
  fontSizePAD: string | undefined,
} = {
  fontSize: initialFontSize,
  fontSizePAD: initialFontSizePAD,
}

const FontSizeSlice = createSlice({
  name: 'fontSize',
  initialState,
  reducers: {
    handleFontSize: (state, action) => {
      state.fontSize = action.payload;
      if (action.payload) {
        FontSizeService().set(action.payload);
      } else {
        FontSizeService().destroy();
      }
    },
    handleFontSizePAD: (state, action) => {
      state.fontSizePAD = action.payload;
      if (action.payload) {
        FontSizePADService().set(action.payload);
      } else {
        FontSizePADService().destroy();
      }
    },
  },
});

export const {
  handleFontSize,
  handleFontSizePAD,
} = FontSizeSlice.actions;

export default FontSizeSlice.reducer;

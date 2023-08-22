import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import ContactClass from '../../models/Contact';

interface ContactState {
  items: ContactClass[];
}

const initialState: ContactState = {
  items: [
    {
      id: 1,
      name: 'Davis Lamenha Sampaio',
      email: 'davislamenha@gmail.com',
      phone: '82994208093',
      favorite: true,
    },
    {
      id: 2,
      name: 'Ana Barros',
      email: 'anab@gmail.com',
      phone: '82988195984',
    },
    {
      id: 3,
      name: 'Dione Lucia',
      email: 'dionel@gmail.com',
      phone: '82988786404',
    },
    {
      id: 4,
      name: 'Laise Lamenha',
      email: 'laisel@gmail.com',
      phone: '82994208080',
    },
  ],
};

const contactsReducer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<ContactClass>) => {
      const contactIndex = state.items.findIndex(
        ({ id }) => id === action.payload.id,
      );

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload;
      }
    },
  },
});

export const { edit } = contactsReducer.actions;
export default contactsReducer.reducer;

import { createSlice } from '@reduxjs/toolkit';
import Contact from '../../models/Contact';

interface ContactState {
  items: Contact[];
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
  reducers: {},
});

export default contactsReducer.reducer;

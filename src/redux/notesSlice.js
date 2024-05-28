import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
    notes: [],
    dialogState: {
        createNotesDialog: false,
        deleteNotesDialog: false,
    },
    searchInput: '',
    pagination: {
        page: 0,
        rowsPerPage: 5
    }
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        handleCreateDialog: (state, action) => {
            state.dialogState.createNotesDialog = action.payload;
        },
        handleDeleteDialog: (state, action) => {
            state.dialogState.deleteNotesDialog = action.payload;
        },
       
    },
});

export const { handleCreateDialog, handleDeleteDialog,  handleSearch} = notesSlice.actions;
export default notesSlice.reducer;

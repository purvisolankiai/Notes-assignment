import React, { useState } from "react";
import {
    Button, Typography, FormControlLabel, Switch, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    TablePagination,
    Grid, Tooltip, Box
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PrimarySearchAppBar from "../components/Navbar";
import { styled } from '@mui/material/styles';
import { handleAddNotes, handleCreateDialog, handleDeleteDialog, handleDeleteNote, handleUpdateNote } from "../redux/notesSlice";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InfoIcon from '@mui/icons-material/Info';

function Dashboard() {
    

    return (
        <>
            <PrimarySearchAppBar />
          
        </>
    );
}

export default Dashboard;
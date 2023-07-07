import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deletePlace, getFromLocalDB, insertPlace } from "../../db";

const initialState = {
    places: [],
}

export const addPlaceDB = createAsyncThunk(
    'location/addToDB',
    async(place, asyncThunk) => {
        try {
            await insertPlace(place)
            console.log("Add place DB result");
            return place
        } catch (error) {
            console.log(error.message);
            return asyncThunk.rejectWithValue("Error at writing place on db")
        }
    }
)

export const deletePlaceDB = createAsyncThunk(
    'location/deleteDB',
    async(item, asyncThunk) => {
        try {
            deletePlace(item.id, item.picture)
            console.log("aqui estoy dentro de deletePlaceDB");
            return item.id
        } catch (error) {
            console.log(error);
        }
    }
)

export const getFromLocalDBRedux = createAsyncThunk(
    'location/getDB',
    async(_, asyncThunk) => {
        try {
            console.log("antes del await desde locationSlice, getFromLocalDBRedux");
            const ej = await getFromLocalDB()
            console.log(ej);
            console.log("después del await desde locationSlice, getFromLocalDBRedux");
            const ejData = ej.rows._array
            return ejData
        } catch (error) {
            console.log(error);
        }
    }
)

const LocationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        addPlace: (state, {payload})=>{
            // state.places = state.places.concat(payload)
        },
        eliminarPlace: (state, {payload})=>{
            // state.places = state.places.filter((i)=>(i.id !== payload))
        }
    },
    extraReducers: {
        [addPlaceDB.fulfilled]:(state, {payload})=>{
            console.log(payload);
            state.places = state.places.concat(payload)
        },
        [deletePlaceDB.fulfilled]:(state, {payload})=>{
            console.log(payload);
            state.places = state.places.filter((i)=>(i.id !== payload))
            console.log(state.places);
        },
        [getFromLocalDBRedux.fulfilled]:(state, {payload})=>{
            state.places = payload
        }
    }
})

export const {addPlace, eliminarPlace} = LocationSlice.actions
export default LocationSlice.reducer
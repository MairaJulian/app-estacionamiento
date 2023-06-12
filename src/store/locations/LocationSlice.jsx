import { createSlice } from "@reduxjs/toolkit";

const initialState = {places: [
    { //BORRAR LUEGO DE CORROBORAR FUNCIONAMIENTO
        date: '11/11/1111',
        horasYMinutos: "11:11",
        id: 11111,
        picture: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg',
        title: 'Titulo 1',
    },
    {
        date: '22/22/2222',
        horasYMinutos: "22:22",
        id: 22222,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPAS_rNPYq5Bn9Gglol_ClXfKDxRHkMw-DgFB2uLC1w&s',
        title: 'Titulo 2',
    }
]}

const LocationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        addPlace: (state, {payload})=>{
            console.log(payload)
            state.places = state.places.concat(payload)
        },
        deletePlace: (state, {payload})=>{
            state.places = state.places.filter((i)=>(i.id !== payload))
        }
    }
})

export const {addPlace, deletePlace} = LocationSlice.actions
export default LocationSlice.reducer
/*
Bajo mi entendimiento de Node.js Aquí estamos realizando un modulo el cual sera un creador
del nav y que nos ayudara a pasar información del origen, destino y el tiempo.
Esto se logra con la palabra clave "export" lo cual nos permitira consumir lo almacenado en ello,
lo mismo con la palabra clave "import" que nos permitira importar los recursos de otro archivo.
*/
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;
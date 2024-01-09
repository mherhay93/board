import { configureStore } from "@reduxjs/toolkit";
import {segmentsSlice} from "./segments/segments";


export function makeStore () {
    return configureStore( {
        reducer: {
            [segmentsSlice.name]:segmentsSlice.reducer
        }
    } )
}

const store = makeStore()
export default store

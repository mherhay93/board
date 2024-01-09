import {createSlice} from "@reduxjs/toolkit";
import {IState} from "../types";


const initialState: IState = {
    segments: [],
}

export const segmentsSlice = createSlice({
    name: 'segments',
    initialState,
    reducers: {
        addSegment: (state, action) => {
            state.segments = [action.payload, ...state.segments]
        },
        setSegment: (state, action) => {
            const {id, value, keyName} = action.payload
            state.segments = state.segments.map((item) => item.id === id ? {...item, [keyName]: value} : item);
        },
        deleteSegment: (state, action) => {
            const id = action.payload
            state.segments = state.segments.filter((item) => item.id !== id);
        },
    },
})

export const {
    addSegment,
    setSegment,
    deleteSegment
} = segmentsSlice.actions

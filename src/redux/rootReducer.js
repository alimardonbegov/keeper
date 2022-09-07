import { combineReducers } from "redux";
import { CREATE_NOTE, DELETE_NOTE } from "./types";

const initialState = {
  listOfNotes: []
};

export function noteReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return {
        ...state,
        listOfNotes: state.listOfNotes.concat(action.payload)
      };
    case DELETE_NOTE:
      return {
        ...state,
        listOfNotes: state.listOfNotes.filter(
          (item, index) => index !== action.payload
        )
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({ notes: noteReducer });

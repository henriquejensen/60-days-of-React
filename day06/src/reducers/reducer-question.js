import { QUESTION } from "../constants/questions";
import data from "./questions.json";

const getInitialState = data.questions[0];

export default function(state=getInitialState, action) {
    switch(action.type) {
        case QUESTION:
            return data.questions[action.payload+1];
    }

    return state;
}
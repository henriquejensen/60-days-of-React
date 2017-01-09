import { QUESTION } from "../constants/questions";
import data from "./questions.json";

const getInitialState = {
    question: data.questions[0],
    isCompleted: false,
    correct: 0
}

export default function(state=getInitialState, action) {
    switch(action.type) {
        
        case QUESTION:
            let correct = state.correct;
            action.choosen == data.questions[action.payload].answer ? correct++ : correct;
            if(data.questions[action.payload+1]) {
                return {
                    isCompleted: false,
                    question: data.questions[action.payload+1],
                    correct: correct
                }
            }
            return {
                    isCompleted: true,
                    question: state.question,
                    correct: correct
            }                
    }

    return state;
}
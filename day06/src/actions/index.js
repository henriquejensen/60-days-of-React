import { QUESTION } from "../constants/questions";

export function answerQuestion(pos, choosen) {
    return {
        type: QUESTION,
        payload: pos,
        choosen: choosen
    }
}
import { QUESTION } from "../constants/questions";

export function answerQuestion(pos) {
    return {
        type: QUESTION,
        payload: pos
    }
}
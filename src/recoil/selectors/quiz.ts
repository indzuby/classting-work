import { selector } from "recoil";
import { quizListState, reviewNotesState } from "../atoms/quiz";

export const getAnswerCountState = selector({
	key: "getAnswerCountState",
	get: ({ get }) => {
		const list = get(quizListState)
		const reviewNote = get(reviewNotesState)
		const correctCount = list.filter((it, index) => reviewNote.find(r => r.id === index + 1)?.answer === it.correct_answer).length
		return {
			correctCount,
			inCorrectCount: list.length - correctCount
		}
	}
})

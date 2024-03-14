import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { TQuiz } from "../../type/quiz";


const { persistAtom } = recoilPersist({
	key: 'localStorage',
	storage: localStorage,
})


export const quizListState = atom<TQuiz[]>({
	key: 'quizListState',
	default: [],
	effects_UNSTABLE: [persistAtom]
})


export const reviewNotesState = atom<{ id: number, answer: string }[]>({
	key: 'reviewNotesState',
	default: [],
	effects_UNSTABLE: [persistAtom]
})

export const quizStartTimeState = atom({
	key: 'quizStartTimeState',
	default: 0,
	effects_UNSTABLE: [persistAtom]
})

export const quizEndTimeState = atom({
	key: 'quizEndTimeState',
	default: 0,
	effects_UNSTABLE: [persistAtom]
})

export const quizStepState = atom({
	key: 'quizStep',
	default: 1,
	effects_UNSTABLE: [persistAtom]
})
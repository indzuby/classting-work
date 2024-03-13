import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { quizStatusCode } from "../../type/quiz";


const { persistAtom } = recoilPersist({
	key: 'localStorage',
	storage: localStorage,
})


export const quizListState = atom({
	key: 'quizListState',
	default: [],
	effects_UNSTABLE: [persistAtom]
})


export const quizStatusState = atom({
	key: 'quizStatusState',
	default: quizStatusCode.start
})
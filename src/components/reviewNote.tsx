import { useRecoilState, useRecoilValue } from "recoil"
import { quizListState, reviewNotesState } from "../recoil/atoms/quiz"
import QuizItem from "./quizItem"

const ReviewNote = () => {
	const list = useRecoilValue(quizListState)
	const reviewNote = useRecoilValue(reviewNotesState)
	const onChangeSelected = () => {

	}
	return <>
		<h2>오답 노트</h2>
		{list.map((quiz, index) => (
			<QuizItem isReview step={index + 1} quiz={quiz} selected={reviewNote[index].answer} onChangeSelected={onChangeSelected} />
		))}
	</>
}

export default ReviewNote
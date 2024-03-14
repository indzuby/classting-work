import { useNavigate } from "react-router-dom"
import * as S from "../styles/main.style"
import { useSetRecoilState } from "recoil"
import { quizListState, quizStartTimeState, quizStepState, reviewNotesState } from "../recoil/atoms/quiz"
import { getQuiz } from "../services/quiz"
import { shuffle } from "../utils/list"
import { TQuiz } from "../type/quiz"
import { useState } from "react"

const Main = () => {
	const setQuizList = useSetRecoilState(quizListState)
	const setStartTime = useSetRecoilState(quizStartTimeState)
	const setReviewNote = useSetRecoilState(reviewNotesState)
	const setQuizStep = useSetRecoilState(quizStepState)
	const navigate = useNavigate()

	const [isLoading, setLoading] = useState<boolean>(false)


	const startQuiz = async () => {
		setLoading(true)
		const { data } = await getQuiz()
		setLoading(false)
		const list: [TQuiz] = data.results
		if (Array.isArray(list)) {
			setQuizList(list.map(it => ({
				...it,
				options: shuffle([it.correct_answer, ...it.incorrect_answers])
			})))
			setReviewNote(list.map((it, index) => ({
				id: index + 1,
				answer: ''
			})))
		}
		setQuizStep(1)
		setStartTime(new Date().getTime())
		navigate('/quiz')
	}
	return (
		<S.Wrapper>
			<h1>클래스팅 프론트엔드 개발자 과제 [퀴즈]</h1>
			{
				!isLoading ? <S.StartButton onClick={startQuiz}>
					퀴즈 풀기
				</S.StartButton>
					: <div className="loading" />
			}
		</S.Wrapper>
	)
}

export default Main


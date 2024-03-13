import { useNavigate } from "react-router-dom"
import * as S from "../styles/main.style"
import { useRecoilValueLoadable, useSetRecoilState } from "recoil"
import { getQuizListState } from "../recoil/selectors/quiz"
import { useEffect } from "react"


const Main = () => {
	const setQuizList = useSetRecoilState(getQuizListState)
	const navigate = useNavigate()


	const startQuiz = async () => {
		setQuizList([])
		navigate('/quiz?step=1')
	}
	return (
		<S.Wrapper>
			<h1>클래스팅 프론트엔드 개발자 과제 [퀴즈]</h1>
			<S.StartButton onClick={startQuiz}>
				퀴즈 풀기
			</S.StartButton>
		</S.Wrapper>
	)
}

export default Main


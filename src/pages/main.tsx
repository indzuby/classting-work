import { useNavigate } from "react-router-dom"
import * as S from "../styles/main/main.style"


const Main = () => {
	const navigate = useNavigate()
	const startQuiz = () => {
		navigate('/quiz')
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


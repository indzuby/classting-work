import { useRecoilStateLoadable } from "recoil"
import { getQuizListState } from "../recoil/selectors/quiz"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import * as S from "../styles/quiz.style"
import { TQuiz } from "../type/quiz"
import { shuffle } from "../utils/list"



const Quiz = () => {
	const navigate = useNavigate()
	const [step, setStep] = useState(1)
	const [{ state, contents: list }, setQuizList] = useRecoilStateLoadable(getQuizListState)
	const [quiz, setQuiz] = useState<TQuiz>()
	const [options, setOptions] = useState<[string]>()
	const [selected, setSelected] = useState<string>()

	useEffect(() => {
		if (state === 'hasValue') {
			setQuizList(list)
		}
	}, [state, list, setQuizList, setQuiz])

	useEffect(() => {
		setQuiz(list[step - 1])
	}, [step, list, setQuiz])

	useEffect(() => {
		if (quiz) {
			setOptions(shuffle([quiz.correct_answer, ...quiz.incorrect_answers]))
		}
	}, [quiz, setOptions])

	const onSubmit = useCallback(async () => {
		if (quiz?.correct_answer === selected) {
			alert('정답입니다.')
		} else {
			alert('오답입니다.')
		}
		setSelected('')
		if (step === 10) {

		} else {
			setStep(step + 1)
		}
	}, [selected, quiz, step, setStep])

	const onChangeSelected = useCallback((value: string) => {
		setSelected(value)
	}, [setSelected])

	const onStartClick = useCallback(() => {
		if (window.confirm('첫 페이지로 돌아가시겠습니까?'))
			navigate(-1)
	}, [navigate])

	return <S.Wrapper>
		{quiz &&
			<>
				<S.ExplainWrapper>
					<div dangerouslySetInnerHTML={{ __html: 'category: ' + quiz.category }} />
					<div dangerouslySetInnerHTML={{ __html: 'dificutly: ' + quiz.difficulty }} />
				</S.ExplainWrapper>
				<h2 dangerouslySetInnerHTML={{ __html: `${step}. ${quiz.question}` }} />
				<S.OptionWrapper>
					{options?.map((op, i) => (
						<label key={i}><input type="radio" name="options" value={op} checked={op === selected} onChange={(e) => onChangeSelected(e.target.value)} /> <span dangerouslySetInnerHTML={{ __html: op }}></span></label>
					))
					}
				</S.OptionWrapper>
				<S.ExplainWrapper style={{ marginTop: '50px' }}>
					<S.NextButton onClick={onSubmit}>제출</S.NextButton>
					<S.StartButton onClick={onStartClick}>처음으로</S.StartButton>
				</S.ExplainWrapper>
			</>
		}
	</S.Wrapper>
}

export default Quiz
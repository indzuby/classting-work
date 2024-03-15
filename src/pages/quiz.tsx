import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import * as S from "../styles/quiz.style"
import { TQuiz } from "../type/quiz"
import { shuffle } from "../utils/list"
import { quizEndTimeState, quizListState, quizStartTimeState, quizStepState, reviewNotesState } from "../recoil/atoms/quiz"
import { getOverSecond } from "../utils/time"

import QuizItem from "../components/quizItem"

const Quiz = () => {
	const navigate = useNavigate()
	const [step, setStep] = useRecoilState(quizStepState)
	const [reviewNote, setReviewNote] = useRecoilState(reviewNotesState)
	const startTime = useRecoilValue(quizStartTimeState)
	const setEndTime = useSetRecoilState(quizEndTimeState)
	const [list] = useRecoilState(quizListState)
	const [quiz, setQuiz] = useState<TQuiz>()
	const [selected, setSelected] = useState<string>()
	const [quizTime, setQuizTime] = useState<number>()

	useEffect(() => {
		setQuiz(list[step - 1])
	}, [step, list, setQuiz, setReviewNote])

	useEffect(() => {
		const timer = setInterval(() => {
			setQuizTime(getOverSecond(startTime))
		}, 1000)
		return () => clearInterval(timer)
	}, [setQuizTime, startTime])

	const setAnswer = useCallback((selected: string) => {
		let newNote = [...reviewNote].map(it => it.id === step ? {
			id: step,
			answer: selected
		} : it)
		setReviewNote(newNote)
	}, [setReviewNote, step, reviewNote])

	const onSubmit = useCallback(() => {
		if (!selected) {
			window.alert('정답을 선택해주세요.')
			return
		}
		else if (quiz?.correct_answer === selected) {
			window.alert('정답입니다.')
		} else {
			window.alert('오답입니다.')
		}
		setAnswer(selected as string)
		setSelected('')
		if (step === 10) {
			setEndTime(new Date().getTime())
			navigate('/result')
		} else {
			setStep(step + 1)
		}
	}, [selected, quiz, step, setStep, setAnswer, navigate, setEndTime])

	const onChangeSelected = useCallback((value: string) => {
		setSelected(value)
	}, [setSelected])

	const onStartClick = useCallback(() => {
		if (window.confirm('첫 페이지로 돌아가시겠습니까?'))
			navigate('/')
	}, [navigate])

	return <S.Wrapper>
		{quiz &&
			<>
				<S.ExplainWrapper>
					<div dangerouslySetInnerHTML={{ __html: 'category: ' + quiz.category }} />
					<div style={{ textAlign: "right" }}>
						<div>퀴즈 진행 시간: {quizTime}초</div>
						<div dangerouslySetInnerHTML={{ __html: 'dificutly: ' + quiz.difficulty }} />
					</div>
				</S.ExplainWrapper>
				<QuizItem step={step} quiz={quiz} selected={selected} onChangeSelected={onChangeSelected} />
				<S.ExplainWrapper style={{ marginTop: '50px' }}>
					<S.StartButton onClick={onStartClick}>처음으로</S.StartButton>
					<S.NextButton onClick={onSubmit}>제출</S.NextButton>
				</S.ExplainWrapper>
			</>
		}
	</S.Wrapper>
}

export default Quiz
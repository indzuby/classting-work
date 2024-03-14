import { useRecoilValue } from 'recoil'
import * as S from '../styles/result.style'
import { getAnswerCountState } from '../recoil/selectors/quiz'
import { quizEndTimeState, quizStartTimeState } from '../recoil/atoms/quiz'
import { getOverSecond } from '../utils/time'
import Charts from '../components/chart'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import ReviewNote from '../components/reviewNote'

const Result = () => {
	const navigate = useNavigate()
	const { correctCount, inCorrectCount } = useRecoilValue(getAnswerCountState)
	const startTime = useRecoilValue(quizStartTimeState)
	const endTime = useRecoilValue(quizEndTimeState) || new Date().getTime()

	const onStartClick = useCallback(() => {
		if (window.confirm('첫 페이지로 돌아가시겠습니까?'))
			navigate('/')
	}, [navigate])

	return <S.Wrapper>
		<h1>퀴즈가 종료되었습니다!</h1>
		<div>소요 시간: {getOverSecond(startTime, endTime)}초</div>
		<div>정답 개수: {correctCount}</div>
		<div>오답 개수: {inCorrectCount}</div>
		<Charts correctCount={correctCount} inCorrectCount={inCorrectCount} />
		<ReviewNote />
		<S.StartButton onClick={onStartClick} style={{ marginTop: '50px' }}>처음으로</S.StartButton>
	</S.Wrapper>
}

export default Result


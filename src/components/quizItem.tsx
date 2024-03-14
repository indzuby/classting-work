import * as S from '../styles/quiz.style'
import { TQuiz } from '../type/quiz'
const QuizItem = ({ isReview = false, step, quiz, onChangeSelected, selected }: { isReview?: boolean, step: number, quiz: TQuiz, selected?: string, onChangeSelected: (v: string) => void }) => {

	return <>
		<h2 dangerouslySetInnerHTML={{ __html: `${step}. ${quiz.question}` }} />
		<S.OptionWrapper>
			{quiz.options?.map((op, i) => (
				<label key={i} className={isReview && quiz.correct_answer === op ? 'answer' : ''}><input type="radio" name={`options+_${step}`} value={op} checked={op === selected} onChange={(e) => onChangeSelected(e.target.value)} /> <span dangerouslySetInnerHTML={{ __html: op }}></span></label>
			))
			}
		</S.OptionWrapper>
	</>

}

export default QuizItem
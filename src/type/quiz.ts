export const quizStatusCode = {
	start: 'start',
	ing: 'ing',
	complete: 'complete'
}

export type TquizStatus = typeof quizStatusCode[keyof typeof quizStatusCode]


export type TQuiz = {
	category: string,
	correct_answer: string,
	difficulty: string,
	incorrect_answers: []
	question: string,
	type: string,
	options?: [string]
}
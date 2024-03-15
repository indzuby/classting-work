
export const getQuiz = async () => {
	const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple').then((response) => response.json())
	return response
}
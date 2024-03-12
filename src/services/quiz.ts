import axios from "axios"

export const getQuiz = async () => {
	return await axios.get('https://opentdb.com/api.php?amount=10')
}
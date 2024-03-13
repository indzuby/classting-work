import { selector, selectorFamily } from "recoil";
import { quizListState } from "../atoms/quiz";
import { getQuiz } from "../../services/quiz";

export const getQuizListState = selector({
	key: "getQuizList",
	get: async ({ get }) => {
		const list = get(quizListState)
		if (list.length > 0)
			return list
		else {
			const { data } = await getQuiz()
			return data.results
			// return [
			// 	{
			// 		"type": "multiple",
			// 		"difficulty": "easy",
			// 		"category": "Entertainment: Japanese Anime &amp; Manga",
			// 		"question": "Who is the armored titan in &quot;Attack On Titan&quot;?",
			// 		"correct_answer": "Reiner Braun",
			// 		"incorrect_answers": [
			// 			"Armin Arlelt",
			// 			"Mikasa Ackermann",
			// 			"Eren Jaeger"
			// 		]
			// 	},
			// 	{
			// 		"type": "multiple",
			// 		"difficulty": "easy",
			// 		"category": "Science &amp; Nature",
			// 		"question": "Which of these bones is hardest to break?",
			// 		"correct_answer": "Femur",
			// 		"incorrect_answers": [
			// 			"Cranium",
			// 			"Humerus",
			// 			"Tibia"
			// 		]
			// 	},
			// 	{
			// 		"type": "multiple",
			// 		"difficulty": "medium",
			// 		"category": "Entertainment: Japanese Anime &amp; Manga",
			// 		"question": "Which animation studio animated the 2016 anime &quot;Mob Psycho 100&quot;?",
			// 		"correct_answer": "Bones",
			// 		"incorrect_answers": [
			// 			"A-1 Pictures",
			// 			"Shaft",
			// 			"Madhouse"
			// 		]
			// 	},
			// 	{
			// 		"type": "multiple",
			// 		"difficulty": "easy",
			// 		"category": "Entertainment: Television",
			// 		"question": "Grant Gustin plays which superhero on the CW show of the same name?",
			// 		"correct_answer": "The Flash",
			// 		"incorrect_answers": [
			// 			"The Arrow",
			// 			"Black Canary",
			// 			"Daredevil"
			// 		]
			// 	},
			// 	{
			// 		"type": "multiple",
			// 		"difficulty": "easy",
			// 		"category": "Entertainment: Cartoon &amp; Animations",
			// 		"question": "What is the relationship between Rick and Morty in the show &quot;Rick and Morty&quot;?",
			// 		"correct_answer": "Grandfather and Grandson",
			// 		"incorrect_answers": [
			// 			"Father and Son",
			// 			"Best Friends",
			// 			"Crimefighting Partners"
			// 		]
			// 	},
			// 	{
			// 		"type": "multiple",
			// 		"difficulty": "easy",
			// 		"category": "Entertainment: Japanese Anime &amp; Manga",
			// 		"question": "Which Pok&eacute;mon and it&#039;s evolutions were banned from appearing in a main role after the Episode 38 Incident?",
			// 		"correct_answer": "The Porygon Line",
			// 		"incorrect_answers": [
			// 			"The Pikachu Line",
			// 			"The Elekid Line",
			// 			"The Magby Line"
			// 		]
			// 	},
			// 	{
			// 		"type": "multiple",
			// 		"difficulty": "medium",
			// 		"category": "Entertainment: Film",
			// 		"question": "In the 2010 Nightmare on Elm Street reboot, who played Freddy Kruger?",
			// 		"correct_answer": "Jackie Earle Haley",
			// 		"incorrect_answers": [
			// 			"Tyler Mane",
			// 			"Derek Mears",
			// 			"Gunnar Hansen"
			// 		]
			// 	},
			// 	{
			// 		"type": "multiple",
			// 		"difficulty": "hard",
			// 		"category": "Entertainment: Television",
			// 		"question": "The theme for the popular science fiction series &quot;Doctor Who&quot; was composed by who?",
			// 		"correct_answer": "Ron Grainer",
			// 		"incorrect_answers": [
			// 			"Murray Gold",
			// 			"Delia Derbyshire",
			// 			"Peter Howell"
			// 		]
			// 	},
			// 	{
			// 		"type": "multiple",
			// 		"difficulty": "hard",
			// 		"category": "Entertainment: Video Games",
			// 		"question": "In Counter Strike: Global Offensive, what is the code implanted onto the C4 as the Terrorists plant the bomb?",
			// 		"correct_answer": "7355608",
			// 		"incorrect_answers": [
			// 			"7890728",
			// 			"7256380",
			// 			"7726354"
			// 		]
			// 	},
			// 	{
			// 		"type": "multiple",
			// 		"difficulty": "medium",
			// 		"category": "Entertainment: Music",
			// 		"question": "Which of these artists was NOT a member of the electronic music supergroup Swedish House Mafia, which split up in 2013?",
			// 		"correct_answer": "Alesso",
			// 		"incorrect_answers": [
			// 			"Steve Angello",
			// 			"Sebastian Ingrosso",
			// 			"Axwell"
			// 		]
			// 	}
			// ]
		}
	},
	set: ({ get, set }, newValue) => {
		set(quizListState, newValue)
	}
})

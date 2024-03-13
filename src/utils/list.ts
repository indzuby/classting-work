export const shuffle = <T>(list: [T]) => {
	list.sort(() => Math.random() - 0.5)
	return list
}
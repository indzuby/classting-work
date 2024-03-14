export const getOverSecond = (time: number, endTime: number = new Date().getTime()) => {
	return Math.floor((endTime - time) / 1000)
}
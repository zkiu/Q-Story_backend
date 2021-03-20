export const checkDuplicateImageId = (cards, secondSet = []) => {
	const combinedSet = [...cards, ...secondSet]

	const listOfID = []
	const newSet = []
	let duplicateFound = false
	combinedSet.forEach((card) => {
		if (listOfID.includes(card.imageID)) {
			duplicateFound = true
		} else {
			listOfID.push(card.imageID)
			newSet.push(card)
		}
	})

	return {
		duplicateFound,
		cards: newSet,
		cardDeficit: combinedSet.length - newSet.length,
	}
}

// ! for testing
// const cards = [
// 	{imageID: 'Nancy', age: 15},
// 	{imageID: 'Mike', age: 10},
// 	{imageID: 'Matt', age: 13},
// 	{imageID: 'Adam', age: 22},
// 	{imageID: 'Jenny', age: 85},
// ]
// const secondSet = [
// 	{imageID: 'Nancy', age: 2},
// 	{imageID: 'Carl', age: 40},
// 	{imageID: 'Carl', age: 40},
// 	{imageID: 'Mike', age: 1},
// ]

// console.log(checkDuplicateImageId(cards, secondSet))

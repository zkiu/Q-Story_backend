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
		newCards: newSet,
		cardDeficit: combinedSet.length - newSet.length,
	}
}

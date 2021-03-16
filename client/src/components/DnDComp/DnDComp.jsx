import {DragDropContext} from 'react-beautiful-dnd'

import DnDCardList from '../DnDCardList/DnDCardList'

// -- adapted from https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/about/examples.md#basic-samples --> https://codesandbox.io/s/zqwz5n5p9x?file=/src/index.js:0-2144

// reordering the result after releasing a drag
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list)
	const [removed] = result.splice(startIndex, 1)
	result.splice(endIndex, 0, removed)

	return result
}

// -- prop cards contain card object with properties: id, content, position
export default function DnDComp({cards, setCards}) {
	function onDragEnd(result) {
		if (!result.destination) {
			return
		}

		if (result.destination.index === result.source.index) {
			return
		}

		const reorderCards = reorder(
			cards,
			result.source.index,
			result.destination.index
		)

		setCards(reorderCards)
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<DnDCardList cards={cards} />
		</DragDropContext>
	)
}

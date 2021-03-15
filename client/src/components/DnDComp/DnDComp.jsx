import React, {useState} from 'react'
import {DragDropContext} from 'react-beautiful-dnd'

import DnDCardList from '../DnDCardList/DnDCardList'

// -- adapted from https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/about/examples.md#basic-samples --> https://codesandbox.io/s/zqwz5n5p9x?file=/src/index.js:0-2144

// fake data generator
const initial = Array.from({length: 10}, (v, i) => i).map((i) => {
	const cardData = {
		id: `card-${i}`,
		content: `Story #${i}`,
	}

	return cardData
})

// - function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list)
	const [removed] = result.splice(startIndex, 1)
	result.splice(endIndex, 0, removed)

	return result
}

export default function DnDComp() {
	const [state, setState] = useState({cards: initial})

	function onDragEnd(result) {
		if (!result.destination) {
			return
		}

		if (result.destination.index === result.source.index) {
			return
		}

		const cards = reorder(
			state.cards,
			result.source.index,
			result.destination.index
		)

		setState({cards})
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<DnDCardList cards={state.cards} />
		</DragDropContext>
	)
}

import {Draggable} from 'react-beautiful-dnd'

import DnDCard from '../DnDCard/DnDCard'

export default function DnDCardContainer({card, index}) {
	return (
		<Draggable draggableId={card.id} index={index}>
			{(provided, snapshot) => (
				<li
					className={snapshot.isDragging ? 'DnDCard isDragged' : 'DnDCard'}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					{/* {card.content} */}
					<DnDCard card={card} />
				</li>
			)}
		</Draggable>
	)
}

import {Draggable} from 'react-beautiful-dnd'

export default function DnDCard({card, index}) {
	return (
		<Draggable draggableId={card.id} index={index}>
			{(provided, snapshot) => (
				<li
					className={snapshot.isDragging ? 'DnDCard isDragged' : 'DnDCard'}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					{card.content}
				</li>
			)}
		</Draggable>
	)
}

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

export default function DnDCard({card, index}) {
	return (
		<Draggable draggableId={card.id} index={index}>
			{(provided, snapshot) => (
				<div
					className={snapshot.isDragging ? 'DnDCard isDragged' : 'DnDCard'}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					{card.content}
				</div>
			)}
		</Draggable>
	)
}

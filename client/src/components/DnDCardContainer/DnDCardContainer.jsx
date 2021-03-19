import {Draggable} from 'react-beautiful-dnd'

import DnDCard from '../DnDCard/DnDCard'

export default function DnDCardContainer({card, index, setImageIndex}) {
	const handleSelect = (e, index) => {
		// console.log(index)
		setImageIndex(index)
	}
	return (
		<Draggable draggableId={'' + card.imageID} index={index}>
			{(provided, snapshot) => (
				<li
					className={snapshot.isDragging ? 'DnDCard isDragged' : 'DnDCard'}
					onTouchStart={(e) => {
						handleSelect(e, index)
					}}
					onClick={(e) => {
						handleSelect(e, index)
					}}
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

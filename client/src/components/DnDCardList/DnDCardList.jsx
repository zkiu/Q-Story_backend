import {Droppable} from 'react-beautiful-dnd'

import DnDCardContainer from '../DnDCardContainer/DnDCardContainer'

export default function DnDCardList({cards, setImageIndex}) {
	return (
		<Droppable droppableId="cardlist" direction="horizontal">
			{(provided, snapshot) => (
				<ul
					className={
						snapshot.isDraggingOver ? 'DnDArea isDraggingOver' : 'DnDArea'
					}
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					{cards.map((card, index) => (
						<DnDCardContainer
							card={card}
							index={index}
							key={'' + card.imageID}
							setImageIndex={setImageIndex}
						/>
					))}
					{provided.placeholder}
				</ul>
			)}
		</Droppable>
	)
}

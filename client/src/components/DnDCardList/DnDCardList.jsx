import {Droppable} from 'react-beautiful-dnd'

import DnDCardContainer from '../DnDCardContainer/DnDCardContainer'

export default function DnDCardList({cards}) {
	return (
		// TODO: instead of cardlist for id, couled use uid of project
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
						// TODO: maybe replace key with the card uid in firestore
						<DnDCardContainer
							card={card}
							index={index}
							key={'' + card.imageID}
						/>
					))}
					{provided.placeholder}
				</ul>
			)}
		</Droppable>
	)
}

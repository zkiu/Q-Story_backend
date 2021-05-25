import {Droppable} from 'react-beautiful-dnd'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

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
					<TransitionGroup component={null}>
						{cards.map((card, index) => (
							<CSSTransition
								key={`card-${card.imageID}`}
								timeout={{
									enter: 500,
									exit: 500,
								}}
								classNames="card-animation-"
							>
								<DnDCardContainer
									card={card}
									index={index}
									key={'' + card.imageID}
									setImageIndex={setImageIndex}
								/>
							</CSSTransition>
						))}
						{provided.placeholder}
					</TransitionGroup>
				</ul>
			)}
		</Droppable>
	)
}

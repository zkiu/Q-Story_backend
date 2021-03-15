import React, {useState} from 'react'
import DnDCard from '../DnDCard/DnDCard'

export const DnDCardList = React.memo(({cards}) => {
	return cards.map((card, index) => (
		<DnDCard card={card} index={index} key={card.id} />
	))
})

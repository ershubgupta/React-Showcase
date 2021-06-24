import React from 'react';
import Cards from './Cards'

function CardList(props) {  
  return (
    <>
       {props.profiles.map(profile => (<Cards key={profile.id} {...profile} />))}
    </>
  )
}

export default CardList


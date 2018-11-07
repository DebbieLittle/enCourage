import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    { props.messages.map((message) => {return <ListItem message={message}/>}) }
  </div>
)

export default List;
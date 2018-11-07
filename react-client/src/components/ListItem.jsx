import React from 'react';

const ListItem = (props) => (
  <div>
    <li><strong>Reason to smile:</strong> { props.message }</li>
  </div>
)

export default ListItem;
import React from 'react';

const rate = (index) => {
  const views = [];
  for (let i = 0; i < index; i++) {
    views.push(<i class='fa fa-star'></i>);
  }
  return views;
};

export const RateListCard = (props) => {
  return (
    <tr>
      <td width='200px'> {props.name} </td>
      <td>{rate(props.rate)}</td>
    </tr>
  );
};

import React from 'react';

const RepoListItem = props => {
  const hrefUrl =`/repos/${props.value}`;

  return (
    <li>
      <a href={hrefUrl}>{props.value}</a>
    </li>
  );
};

export default RepoListItem;

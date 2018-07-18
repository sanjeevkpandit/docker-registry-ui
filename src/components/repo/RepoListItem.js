import React from 'react';

const RepoListItem = props => {
  const hrefUrl =`/repos/${props.value}`;

  return (
    <tr>
      <td>
        <a href={hrefUrl}>{props.value}</a>
      </td>
    </tr>
  );
};

export default RepoListItem;

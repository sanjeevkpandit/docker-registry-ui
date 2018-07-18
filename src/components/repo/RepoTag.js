import React from 'react';

const RepoTag = props => (
  <tr>
    <td>
      <a href={`/repos/${props.repo}/${props.value}`}>
        {props.value}
      </a>
    </td>
  </tr>
);

export default RepoTag;

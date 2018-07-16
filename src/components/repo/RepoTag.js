import React from 'react';

const RepoTag = props => (
  <li>
    <a href={`/repos/${props.repo}/${props.value}`}>
      {props.value}
    </a>
  </li>
);

export default RepoTag;

import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const RepoTag = props => {
  const hrefUrl = `/repos/${props.repo}/${props.value}`;

  return (
    <ListItem button divider component={Link} to={hrefUrl}>
      <ListItemText primary={props.value} />
    </ListItem>
  );
};

export default RepoTag;

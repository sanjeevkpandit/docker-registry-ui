import React from 'react';
import {Link} from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const RepoTag = props => {
  const hrefUrl = `/repos/${props.repo}/${props.value}`;

  return (
    <ListItem button component={Link} to={hrefUrl}>
      <ListItemIcon>
        <SendIcon/>
      </ListItemIcon>
      <ListItemText primary={props.value}/>
    </ListItem>
  );
};

export default RepoTag;

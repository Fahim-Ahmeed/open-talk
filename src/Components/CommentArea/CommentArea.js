import React from 'react';
//material ui import
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));




const CommentArea = (props) => {
    //material ui
    const classes = useStyles();
    // console.log(props.comment)
    const{id,postId,email,body,name}=props.comment;
    console.log(name)
    let number=Math.floor(Math.random()*99);
    return (
        <div>
            <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={`https://randomuser.me/api/portraits/men/${number}.jpg`} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                  id:{`${id}   `} 
                {/* Ali Connors */}
              </Typography>
          <h5>email:{email}</h5>
              {body}
            </React.Fragment>
          }
        />
      </ListItem>
     
      
    </List>
        </div>
    );
};

export default CommentArea;
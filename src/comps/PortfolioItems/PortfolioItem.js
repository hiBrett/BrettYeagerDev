import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, Grid, Container, Tooltip, Fab } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LinkIcon from '@material-ui/icons/Link';

import { Button, ButtonGroup, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '37.5%'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function PortfolioItem(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    var cardStyle = {
        marginTop: "15px",
        marginBottom: "15px",
    }

    return (
        <Container style={{ marginTop: "100px" }}><Grid item xs={12}><Card width={1} style={cardStyle} className={classes.root}>
            <CardHeader
                /*
                avatar={
                    <Avatar aria-label="Avatar" alt="Brett Yeager" src="BrettYeager.png" className={classes.large} >
          </Avatar>
                }
                */
                title={props.title}
                subheader={props.subheader}
            />
            {
                props.image != null && <CardMedia
                    className={classes.media}
                    image={props.image}
                />
            }
            <CardContent>
                <Typography paragraph color="textSecondary" component="p">
                    {props.imageText}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                
                {
                    (props.link1 != null || props.link2 != null) && < List component="nav">
                        <ListItem><ListItemText>
                            {
                                props.link1 != null && <Button variant="contained" color="primary" target='_blank' href={props.link1} aria-label={props.link1text} className="mr-25 mb-7 mt-7">{props.link1text}</Button>
                            }
                            {
                                props.link2 != null && <Button variant="contained" color="primary" target='_blank' href={props.link2} aria-label={props.link2text} className="mb-7 mt-7">{props.link2text}</Button>
                            }
                        </ListItemText></ListItem>
                    </List>
                }

                {
                    !props.noContent && <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <Fab color="secondary" className={classes.absolute}><ExpandMoreIcon /></Fab>
                    </IconButton>
                }
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {props.children}
                </CardContent>



                




            </Collapse>

        </Card></Grid></Container >
    );
}
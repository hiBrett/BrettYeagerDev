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
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { createMuiTheme } from '@material-ui/core/styles';
import Messages from '../Messages/Messages';

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
        width: "100px"
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
        marginBottom: "15px"
    }

    if(!props.shadow){
        cardStyle.boxShadow = "none";
    }

    return (
        <Container style={{ marginTop: "100px", textAlign: "left" }}><Grid item xs={12}><Card width={1} style={cardStyle} className={classes.root}>
            <CardHeader

                avatar={
                    <a href="https://www.linkedin.com/in/brett-yeager-developer/" target="_blank"><Avatar aria-label="Avatar" alt="Brett Yeager" src="BrettYeager.png" >
                    </Avatar></a>
                }

                title="Brett Yeager"
                subheader="Software Developer"
            />
            {
                props.image != null && <CardMedia
                    className={classes.media}
                    image={props.image}
                />
            }
            <CardContent>
                <Typography paragraph component="p">
                    <Messages elevation={0} medium text={[props.text]}></Messages>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                < List component="nav">
                    <ListItem><ListItemText>

                        <Tooltip title="Email" aria-label="Email" className="mr-25">
                            <a href="mailto:3.14brett@gmail.com" target="_blank"><Fab color="primary" className={classes.fab}>
                                <MailOutlineIcon />
                            </Fab></a>
                        </Tooltip>

                        <Tooltip title="LinkedIn" aria-label="LinkedIn">
                            <a href="https://www.linkedin.com/in/brett-yeager-developer/" target="_blank"><Fab className={classes.fab + " " + "linkedInIconFab"}>
                                <LinkedInIcon className="linkedInIcon" />
                            </Fab></a>
                        </Tooltip>

                    </ListItemText></ListItem>
                </List>

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {props.children}
                </CardContent>








            </Collapse>

        </Card></Grid></Container >
    );
}

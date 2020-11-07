import React from "react"
import {
  Typography,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
//import avatarRyan from "../../images/Avatar_Ryan.jpeg"
import avatarYue from "../../images/Avatar_Yue.JPG"
import { makeStyles } from "@material-ui/core/styles"
import EmailIcon from "@material-ui/icons/Email"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { GitHub } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  title: {
    marginTop: 12,
    marginLeft: 12,
  },
  author: {
    marginBottom: "10px",
    backgroundColor: theme.palette.grey[100],
    borderRadius: "10px",
  },
}))

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

const AuthorCard = () => {
  const classes = useStyles()

  return (
    <Grid md={5} xs={12} item container spacing={1} justify="space-between">
      <Grid
        item
        container
        direction="column"
        justify="center"
        className={classes.author}
        spacing={1}
      >
        <Grid
          item
          container
          spacing={2}
          alignItems="center"
          className={classes.title}
        >
          <Grid item>
            <Avatar src={avatarYue} className={classes.large}></Avatar>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              Yue Su
            </Typography>
            <Typography variant="subtitle1">Web Developer</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <PermIdentityIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body2">
                  Web developer focusing on React applications with MERN / PERN
                  stack
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItemLink href="https://github.com/yue-su" target="_blank">
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListItemText primary="github.com/yue-su" />
            </ListItemLink>
            <ListItemLink href="mailto:su2047@gmail.com" target="_blank">
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="su2047@gmail.com" />
            </ListItemLink>
            <ListItemLink
              href="https://www.linkedin.com/in/suxyue/"
              target="_blank"
            >
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="linkedin.com/in/suxyue" />
            </ListItemLink>
          </List>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AuthorCard

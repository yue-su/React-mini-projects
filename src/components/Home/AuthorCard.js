import React from 'react'
import {
  
  Typography,
  
  
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  
} from "@material-ui/core"
import avatarRyan from "../../images/Avatar_Ryan.jpeg"
import avatarYue from "../../images/Avatar_Yue.JPG"
import { makeStyles } from "@material-ui/core/styles"
import EmailIcon from "@material-ui/icons/Email"
import LanguageIcon from "@material-ui/icons/Language"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

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

const AuthorCard = () => {

    const classes = useStyles()

    return (
      <Grid md={5} xs={12} item container spacing={1} justify="space-between">
        <Grid
          item
          container
          direction="column"
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
              <Typography variant="subtitle1">Full-Stack Developer</Typography>
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
                    about me and about me and about me and about meand about
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">www.yue-su.dev</Typography>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">su2047@gmail.com</Typography>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">
                    linkedin.com/in/suxyue/
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
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
              <Avatar src={avatarRyan} className={classes.large}></Avatar>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6">
                Ryan Lee
              </Typography>
              <Typography variant="subtitle1">Full-Stack Developer</Typography>
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
                    about me and about me and about me and about meand about
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">www.yue-su.dev</Typography>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">su2047@gmail.com</Typography>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">
                    linkedin.com/in/suxyue/
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    )
}

export default AuthorCard

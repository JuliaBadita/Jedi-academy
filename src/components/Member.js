import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../config";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { AiFillCaretLeft } from "react-icons/ai";

export default function Member() {
  const { id } = useParams();
  let [memberState, setMember] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/members/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setMember(res);
        setIsLoading(true);
      });
  });
  return (
    <div>
      <nav className="memberNav">
        <Link to="/liste-des-membres">
          <Button variant="contained">
            <AiFillCaretLeft />
            <span>Back</span>
          </Button>
        </Link>
      </nav>

      <Grid container spacing={2}>
        <Grid item sm="6">
          <div className="memberImg">
            {isLoading ? (
              <img src="" />
            ) : (
              <Skeleton variant="rectangular" width="100%" height={300} />
            )}
          </div>
        </Grid>

        <Grid item sm="6">
          <h1>
            {isLoading ? (
              memberState.data.attributes.title
            ) : (
              <Skeleton variant="text" width={300} height={80} />
            )}
          </h1>
          <p>
            {isLoading ? (
              memberState.data.attributes.content
            ) : (
              <>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
              </>
            )}
          </p>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item md={6}>
          <form>
            <div>
              <TextField id="pseudo" label="Pseudo" type="text" />
            </div>

            <div>
              <TextField
                id="standard-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                variant="standard"
              />
            </div>

            <div>
              <Button variant="contained">Contained</Button>
            </div>
          </form>
        </Grid>

        <Grid item md={6}>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

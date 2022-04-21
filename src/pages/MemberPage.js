import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";

import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import MembersAPI from "../services/membersAPI";

// import FormComment from "../components/forms/FormComment";
import PreviousNextButton from "../components/PreviousNextButton";

export default function Member() {
  const { id } = useParams();
  let [memberState, setMember] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMember();
  }, []);

  const fetchMember = async () => {
    const data = await MembersAPI.findOne(id);
    setMember(data);
    setIsLoading(true);
  };

  const navigate = useNavigate();
  return (
    <Container>
      <div className="member">
        <Grid container spacing={2}>
          <Grid item sm="6">
            <div className="memberImg">
              {isLoading ? (
                <img
                  src={
                    memberState.data.attributes.image.data[0].attributes.formats
                      .small.url
                  }
                />
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

        <Link to="/liste-des-membres">
          <PreviousNextButton
            text="Retour"
            onClick={() => navigate(-1)}
            isNext="false"
          />
        </Link>
      </div>
    </Container>
  );
}

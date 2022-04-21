import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import { API_URL } from "../config";
import { Link } from "react-router-dom";

import SaberButton from "../components/SaberButton";

export default function CardMember({ member }) {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }} className="cardMember">
        <div className="roundImg">
          <CardMedia
            component="img"
            height="140"
            image={member.attributes.image.data[0].attributes.formats.small.url}
            alt="Starswar members"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {member.attributes.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member.attributes.content.substring(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions>
          <SaberButton
            text="En savoir plus..."
            link={`/member/${member.id}`}
          ></SaberButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

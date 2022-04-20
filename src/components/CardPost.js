import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import SaberButton from "../components/SaberButton";
import Typography from "@mui/material/Typography";
import { EMPTY_IMG } from "../config";

export default function CardPost({ post }) {
  const postContent = post.attributes;
  const imgSrc = postContent.img.datasrc.data.attributes.formats.small.url;
  const imgAlt = postContent.img.alt;
  return (
    <Card className="cardInfos">
      <CardMedia
        component="img"
        height="200"
        image={postContent.img !== null ? imgSrc : EMPTY_IMG}
        alt={postContent.img !== null ? imgAlt : "Star Wars l'Académie"}
      />
      <CardContent className="cardContent">
        <Typography gutterBottom variant="h5" component="div">
          <h2>{postContent.title}</h2>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {postContent.resume}
        </Typography>
      </CardContent>
      <CardActions>
        <SaberButton
          text="En savoir plus..."
          link={`/infos-utiles/${postContent.slug}`}
        ></SaberButton>
      </CardActions>
    </Card>
  );
}

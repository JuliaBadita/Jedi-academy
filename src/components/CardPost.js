import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { EMPTY_IMG } from "../config";
import { Link } from "react-router-dom";

export default function CardPost({ post }) {
  const postContent = post.attributes;
  const imgSrc = postContent.img.datasrc.data.attributes.formats.small.url;
  const imgAlt = postContent.img.alt;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={postContent.img !== null ? imgSrc : EMPTY_IMG}
        alt={postContent.img !== null ? imgAlt : "Star Wars l'Académie"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {postContent.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {postContent.resume}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/infos-utiles/${postContent.slug}`}>
          <Button size="small">En apprendre plus...</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

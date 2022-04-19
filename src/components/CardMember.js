import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import { API_URL } from "../config";
import { Link } from "react-router-dom";

export default function CardMember({ member }) {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={member.attributes.image}
          alt="Starswar members"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {member.attributes.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member.attributes.content.substring(0, 100)}...
          </Typography>
        </CardContent>
        <Link to={`/member/${member.id}`}>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Link>
      </Card>
    </Grid>
  );
}

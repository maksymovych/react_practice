import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({ imgURL, children, ButtonAction }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image={imgURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dog
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You will see pictures of different dos
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="success" onClick={ButtonAction}>
          {children}
        </Button>
      </CardActions>
    </Card>
  );
}

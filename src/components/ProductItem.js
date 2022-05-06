import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/actions/products";

export default function ProductItem({ item }) {
  const dispatch = useDispatch();

  function deleteHandler() {
    console.log(item.id);
    dispatch(deleteProduct(item.id));
  }
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia component="img" height="140" image={item.imageUrl} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Count - {item.count}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Size - {item.size}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Weight - {item.weight}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={deleteHandler} color="error" size="small">
            delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

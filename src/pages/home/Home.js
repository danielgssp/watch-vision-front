import "./home.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

const Home = () => {
  const classes = useStyles();
  return (
    <div style={{ flex: 1 }}>
      <h3>Ultimos assistidos...</h3>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={
              "https://img.pngio.com/hollywood-film-reel-clip-art-movies-cliparts-transparent-png-hollywood-reel-png-900_480.jpg"
            }
            title="Patriot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Avaliação: 5
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Temporadas: 2
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              20/09/2019
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Home;

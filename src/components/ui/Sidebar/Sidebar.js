import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sidebarImage from "@/assets/side-top-news.png";
import blankImage from "@/assets/blankImage.png";
import sideBottomImage from "@/assets/side-bottom-img.png"

const Sidebar = () => {
  return (
    <Box className="my-6">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sidebarImage} width={800} alt="topnews" />
          </CardMedia>
          <CardContent>
            <p className="bg-red-500 w-[100px] text-white my-4 rounded px-2">
              Technology
            </p>
            <Typography>
              Bitcoin climbs as Elon Musk says Tesla likely to accept it again
            </Typography>
            <Typography className="my-2">
              By Rifat Sarker 18 march 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Grid className="my-5 flex items-center" container spacing={2}>
        <Grid item xs={4}>
          <Image src={blankImage} width={800} alt="topnews" />
        </Grid>
        <Grid item xs={8}>
          <Typography>
            Bitcoin climbs as Elon Musk says Tesla likely to accept it again
          </Typography>
          <Typography className="my-2">18 march 2023</Typography>
        </Grid>
      </Grid>
      <Grid className="my-5 flex items-center" container spacing={2}>
        <Grid item xs={4}>
          <Image src={blankImage} width={800} alt="topnews" />
        </Grid>
        <Grid item xs={8}>
          <Typography>
            Bitcoin climbs as Elon Musk says Tesla likely to accept it again
          </Typography>
          <Typography className="my-2">18 march 2023</Typography>
        </Grid>
      </Grid>
      <Grid className="my-5 flex items-center" container spacing={2}>
        <Grid item xs={4}>
          <Image src={blankImage} width={800} alt="topnews" />
        </Grid>
        <Grid item xs={8}>
          <Typography>
            Bitcoin climbs as Elon Musk says Tesla likely to accept it again
          </Typography>
          <Typography className="my-2">18 march 2023</Typography>
        </Grid>
      </Grid>
      <Grid className="my-5 flex items-center" container spacing={2}>
        <Grid item xs={4}>
          <Image src={blankImage} width={800} alt="topnews" />
        </Grid>
        <Grid item xs={8}>
          <Typography>
            Bitcoin climbs as Elon Musk says Tesla likely to accept it again
          </Typography>
          <Typography className="my-2">18 march 2023</Typography>
        </Grid>
      </Grid>
      <Grid className="my-5 flex items-center" container spacing={2}>
        <Grid item xs={4}>
          <Image src={blankImage} width={800} alt="topnews" />
        </Grid>
        <Grid item xs={8}>
          <Typography>
            Bitcoin climbs as Elon Musk says Tesla likely to accept it again
          </Typography>
          <Typography className="my-2">18 march 2023</Typography>
        </Grid>
      </Grid>
      <Image src={sideBottomImage} alt="sidebottomimg"/>
    </Box>
  );
};

export default Sidebar;

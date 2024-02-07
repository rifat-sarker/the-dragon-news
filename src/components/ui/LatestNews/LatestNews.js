import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";
import { getAllNews } from "@/components/utils/getAllNews";

const LatestNews = async () => {
  const { data } = await getAllNews();
  return (
    <>
      <Box className="my-6">
        <Container>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image
                  src={data[0].thumbnail_url}
                  height={500}
                  width={800}
                  alt="topnews"
                />
              </CardMedia>
              <CardContent>
                <p className="bg-red-500 w-[100px] text-white my-4 rounded px-2">
                  {data[0].category}
                </p>
                <Typography gutterBottom variant="h5" component="div">
                  {data[0].title}
                </Typography>
                <Typography className="my-2">
                  By {data[0].author.name} {data[0].author.published_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data[0].details.length > 200
                    ? data[0].details.slice(0, 200) + "..."
                    : data[0].details}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Grid
            className="mt-5 "
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {data.slice(0, 4).map((news) => (
              <Grid key={news.id} className="mb-4" item xs={6}>
                <Card sx={{
                  height: "550px",
                  width: "100%",
                }}>
                  <CardActionArea>
                    <CardMedia
                      sx={{
                        "& img": {
                          width: "100%",
                          height: "250px",
                        },
                      }}
                    >
                      <Image
                        src={news.thumbnail_url}
                        height={500}
                        width={800}
                        alt="topnews"
                      />
                    </CardMedia>
                    <CardContent>
                      <p className="bg-red-500 w-[100px] text-white my-4 rounded px-2">
                        {news.category}
                      </p>
                      <Typography>{news.title}</Typography>
                      <Typography className="my-2">
                        By {news.author.name} {news.author.published_date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {news.details.length > 200
                          ? news.details.slice(0, 200) + "..."
                          : news.details}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default LatestNews;

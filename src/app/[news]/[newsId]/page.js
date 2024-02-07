import { getSingleNews } from "@/components/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);
  // console.log(data);
  return (
    <Box className="my-4">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              height={500}
              width={800}
              alt="news"
            />
            <Grid className="mt-4" container spacing={2}>
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  height={500}
                  width={800}
                  alt="news"
                />
              </Grid>
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  height={500}
                  width={800}
                  alt="news"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" component="h2">
              {news.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Avatar alt="news" src={news.author.img} />
              <Typography>
                {" "}
                By
                {news.author.name}
              </Typography>
              <Typography>
                {" "}
                Publish
                {news.author.published_date}
              </Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                color: "gray",
                whiteSpace: "pre-line",
                margin: "10px 0px",
              }}
            >
              {news.details}
            </Typography>
            <Typography variant="h6">
               `` Many destop publishling packages and web page editors now use as their  default model text!
              </Typography>
            <Typography variant="h6">
               By -- Jhankar Mahbub Bhai
              </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailsPage;

import { getCategoryNews } from "@/components/utils/getCategoryNews";
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
import Link from "next/link";

const DynamicNewsPage = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);

  return (
    <div>
      <h1>
        Total <span className="font-bold">{searchParams.category} </span> news :{" "}
        {data.length}{" "}
      </h1>
      <Grid
        className="mt-5 "
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news.id} className="mb-4" item xs={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              {" "}
              <Card>
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
                    <span className="bg-red-500  text-white my-3 rounded px-2">
                      {news.category}
                    </span>
                    <Typography variant="h6">
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + "..."
                        : news.title}
                    </Typography>
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
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;

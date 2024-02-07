// "use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";




const Footer = () => {

    const NavItems = [
        {
          route: "Home",
          pathname: "/",
        },
        {
          route: "Pages",
          pathname: "/pages",
        },
        {
          route: "Category",
          pathname: "/category",
        },
        {
          route: "News",
          pathname: "/news",
        },
        {
          route: "About",
          pathname: "/about",
        },
        {
          route: "Contact",
          pathname: "/contact",
        },
      ];
    return (
        <Box className="bg-black px-4 py-10 text-center ">
            <Container>
            <Box  direction="row"
              sx={{
                "& svg": {
                  color: "white",
                },
              }}>

              <IconButton>
                <FacebookIcon></FacebookIcon>
              </IconButton>
              <IconButton>
                <TwitterIcon></TwitterIcon>
              </IconButton>
              <IconButton>
                <LinkedInIcon></LinkedInIcon>
              </IconButton>
              <IconButton>
                <InstagramIcon></InstagramIcon>
              </IconButton>
              <IconButton>
                <YouTubeIcon></YouTubeIcon>
              </IconButton>
          </Box>

          <Box className="w-full text-center">
            {NavItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Typography variant="body2" color={"gray"}>
            @2024 The Dragon News. Design by Rifat Sarker.
          </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
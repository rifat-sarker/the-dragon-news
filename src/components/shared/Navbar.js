"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";

//icons
import logo from "@/assets/logo.png";
import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import Header from "./Header";

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
    pathname: "/categories/news?category=all-news",
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

function Navbar() {
  return (
    <>
      <Header></Header>
      <AppBar sx={{
        bgcolor: "black",
        padding: "10px 0px",
        marginBottom: "20px"
      }}  position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logo} height={100} width={100} alt="logo" />

            <Box className="w-full text-center">
              {NavItems.map((item) => (
                <Link key={item} href={item.pathname}>
                  <Button sx={{color: "white"}} >{item.route}</Button>
                </Link>
              ))}
            </Box>
            <Box>
              <Stack
                direction="row"
                sx={{
                  "& svg": {
                    color: "white",
                  },
                }}
              >
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
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;

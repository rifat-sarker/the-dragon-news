import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/The Dragon News.png";
import { displayCurrentDateTime } from "../utils/getCurrentDate";

const Header = () => {
    const currentDate = displayCurrentDateTime()
  return (
    <Box className=" w-full text-center my-5">
      <Container >
        <Image src={headingImage} height={500} width={500}  alt="header img"  className=" mx-auto"/>
        <Typography variant="body2" color={"gray"}>
          Journalism Without Fear or Favour
        </Typography>
        <Typography className="my-3">
            {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;

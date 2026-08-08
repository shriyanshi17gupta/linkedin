import { CircularProgress } from "@mui/joy";
import Header from "../Header/header";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Skeleton from "@mui/joy/Skeleton";
import Typography from "@mui/joy/Typography";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

function MyNetwork() {
  const [count, setCount] = useState(false);
  const [variant, setVariant] = useState("solid");

  const handleload = () => {};
  useEffect(() => {
    setTimeout(() => {
      setCount(true);
    }, 3000);
  }, []);

  return (
    <>
      <Header />
      <Button onClick={handleload}>hello</Button>
      <div>
        {!count ? (
          <>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(150px, 1fr))",
                gap: 1,
              }}
            >
              <CircularProgress variant={variant} color="neutral" />
            </Box>
          </>
        ) : (
          <h1>hello</h1>
        )}
        <Card variant="outlined" sx={{ width: 343, display: "flex", gap: 2 }}>
          <AspectRatio ratio="21/9">
            <Skeleton variant="overlay">
              <img
                alt=""
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              />
            </Skeleton>
          </AspectRatio>
          <Typography>
            <Skeleton>
              {/* <h1>hello</h1>
              <h1>Network</h1> */}
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries.
            </Skeleton>
          </Typography>
        </Card>
      </div>
    </>
  );
}

export default MyNetwork;

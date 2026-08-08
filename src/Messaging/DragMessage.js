import React, { useRef } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

const DragMessage = ({ id, name }) => {
  const ShoppingList = useSelector((state) => state.Feed.DragBox);
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "Shopping",
    item: { id, name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const opacity = isDragging ? 0 : 1;

  return (
    <>
      <Box
        ref={dragRef}
        sx={{
          margin: "0 auto",
          mb: "10px",
          textAlign: "center",
          fontSize: "20px",
          height: "50px",
          width: "70%",
          border: "solid 2px red",
          borderRadius: "8px",
          opacity: opacity,
          cursor: "move",
          bgcolor: "black",
          color: "white",
        }}
      >
        {name}
      </Box>
    </>
  );
};

export default DragMessage;

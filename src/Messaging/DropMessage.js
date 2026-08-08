import React, { useRef, useState } from "react";
import {
  Badge,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useDrag, useDragDropManager, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { MoveItem } from "../LInkedStore/InitialData";

const DropMessage = ({ id, name }) => {
  const dispatch = useDispatch();
  const dragDropManager = useDragDropManager();

  const [{ isDragging }, dragRef] = useDrag({
    type: "ShortList",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [numm, dropRef] = useDrop({
    accept: "ShortList",
    collect: (monitor) => ({
      numm: monitor.getClientOffset(),
    }),
    drop: (item, monitor) => {
      const dragIndex = item.id;
      const hoverIndex = id;
      moveListItem(dragIndex, hoverIndex);
    },
  });

  const moveListItem = (dragIndex, hoverIndex) => {
    dispatch(MoveItem({ dragIndex: dragIndex, hoverIndex: hoverIndex }));
  };

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));
  return (
    <>
      <Box
        ref={dragDropRef}
        sx={{
          margin: "0 auto",
          mb: "10px",
          textAlign: "center",
          fontSize: "20px",
          height: "50px",
          width: "70%",
          border: "solid 2px red",
          opacity: isDragging ? 0.1 : 1,
          cursor: "move",
          borderRadius: "8px",
          bgcolor: "black",
          color: "white",
        }}
      >
        {name}
      </Box>
    </>
  );
};

export default DropMessage;

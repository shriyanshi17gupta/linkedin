import { Card, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropMessage from "./DropMessage";
import { useDrop } from "react-dnd";
import { DeleteDrop } from "../LInkedStore/InitialData";

const DropData = () => {
  const ShoppingList = useSelector((state) => state.Feed.DropBox);
  const dispatch = useDispatch();
  const BadgeCount = useRef(0);
  const hoverIndex = useRef();

  const [{ isOver, canDrop, hover }, dropRef] = useDrop(() => ({
    accept: "Shopping",
    drop: (item) => {
      addItem(item.id);
      const hover = hoverIndex.current;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const addItem = (id) => {
    console.log(hoverIndex);
    dispatch(DeleteDrop(id));
    BadgeCount.current = BadgeCount.current + 1;
  };

  return (
    <>
      <Card
        ref={dropRef}
        sx={{
          height: "500px",
          width: "30%",
          mt: "30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ m: 2 }}>Shopping Done</Typography>

        {/* <Box ref={drop} sx={{ background: "red", width: "100px" }}>
          <Badge
            color="success"
            sx={{ width: "20px" }}
            badgeContent={BadgeCount.current}
          >
            <DeleteIcon sx={{ height: "100px", width: "100px" }} />
          </Badge>
        </Box> */}

        {ShoppingList.map(
          (ele, index) => (
            (hoverIndex.current = index),
            (<DropMessage id={index} name={ele[0].content} />)
          )
        )}
      </Card>
    </>
  );
};

export default DropData;

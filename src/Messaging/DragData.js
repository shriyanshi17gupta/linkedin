import React from "react";
import { useSelector } from "react-redux";
import DragMessage from "./DragMessage";
import { Card, Typography } from "@mui/material";

const DragData = () => {
  const ShoppingList = useSelector((state) => state.Feed.DragBox);
  return (
    <>
      <Card
        sx={{
          height: "500px",
          width: "30%",
          mt: "30px",
          backgroundColor: "#3E5151",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ m: 2 }}>Shopping List</Typography>
        {ShoppingList.map((ele) => (
          <DragMessage id={ele.id} name={ele.content} />
        ))}
      </Card>
    </>
  );
};

export default DragData;

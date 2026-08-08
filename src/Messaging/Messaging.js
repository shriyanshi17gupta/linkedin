import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../Header/header";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragMessage from "./DragMessage";
import { Container } from "@mui/material";
import DropMessage from "./DropMessage";
import DragData from "./DragData";
import DropData from "./DropData";

function Messaging() {
  return (
    <>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            justifyContent: "space-evenly",
          }}
        >
          <DragData />
          <DropData />
        </Container>
      </DndProvider>
    </>
  );
}

export default Messaging;

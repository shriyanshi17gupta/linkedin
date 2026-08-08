import logo from "./logo.png";
import "./Login.css";
import { Box } from "@mui/system";
import { LinearProgress } from "@mui/material";
export default function LodingPage() {
  return (
    <body className="loginbody">
      <div
        className="loginglogo"
        style={{
          backgroundColor: "black",
          height: "100vh",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            fontSize: "50px",
          }}
        >
          Linked
          <img
            src={logo}
            alt=""
            style={{
              height: "60px",
              paddingLeft: "3px",
              position: "relative",
              top: "11px",
            }}
          />
          <Box mt={5}>
            <LinearProgress />
          </Box>
        </div>
      </div>
    </body>
  );
}

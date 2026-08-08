import React from "react";
import logo from "../linkedin.png";
import {
  Avatar,
  AppBar,
  Autocomplete,
  Container,
  Paper,
  TextField,
  Box,
  Grid,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import Title from "./Datas";
import HeaderOption from "./headerOption";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SearchPerson } from "../LInkedStore/InitialData";

function Header() {
  const dispatch = useDispatch();
  const FeedData = useSelector((state) => state.Feed.FeedData);

  const Search = (e) => {
    dispatch(SearchPerson(e));
  };

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid rgb(140 140 140 / 20%)",
          zIndex: "1000",
        }}
        position="sticky"
        elevation={0}
      >
        <Container>
          <div className="main_header">
            <div className="left_side">
              <div>
                <Link to={"/home"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="hearder_searchbar">
                <SearchIcon sx={{ width: "20px", color: "black" }} />
                <Autocomplete
                  freeSolo={false}
                  popupIcon={""}
                  noOptionsText={"No Person"}
                  options={FeedData}
                  getOptionLabel={(option) => option.name}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      <Grid
                        container
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Grid item xs={1}>
                          <SearchIcon
                            sx={{ position: "relative", top: "2px" }}
                          />
                        </Grid>
                        <Grid item xs={9}>
                          {option.name}
                        </Grid>
                        <Grid item xs={2}>
                          <Avatar src={option.avatar} />
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                  PaperComponent={({ children }) => (
                    <Paper
                      style={{
                        width: "400px",
                        position: "relative",
                        top: "5px",
                        right: "30px",
                      }}
                    >
                      <span style={{ padding: "15px", fontWeight: "500" }}>
                        Recent
                      </span>
                      {children}
                    </Paper>
                  )}
                  sx={{ width: 400 }}
                  renderInput={(params, data) => (
                    <TextField
                      {...params}
                      sx={{
                        "& .MuiInput-underline:before": {
                          border: "none !important",
                        },
                        "& .MuiInput-underline:after": {
                          border: "none !important",
                        },
                      }}
                      placeholder="Search"
                      variant="standard"
                      onChange={(e) => {
                        console.log(e.target.value);
                        Search(e.target?.value);
                      }}
                      onSelect={(e) => {
                        console.log(e.target.value);
                        Search(e.target?.value);
                      }}
                    />
                  )}
                />
              </div>
            </div>
            <div className="right_side">
              {Title?.map((title) => {
                return <HeaderOption title={title} />;
              })}
            </div>
          </div>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;

import { Autocomplete, Avatar, Box, Divider, TextField } from "@mui/material";
import Header from "../Header/header";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";

function Jobs() {
  const FeedData = useSelector((state) => state.Feed.FeedData);
  // const [values, setvalues] = useState("swap");
  const ref = useRef();
  const numm = [{ id: "12" }, { id: "13" }, { id: "14" }, { id: "15" }];

  return (
    <>
      <Header />
      <div>
        <h1>hello</h1>
        <h1>Jobs</h1>
      </div>
      <Divider />
      <br />
      <div>
        <Autocomplete
          freeSolo={false}
          popupIcon={""}
          value={ref.current}
          sx={{ width: "200px" }}
          options={numm}
          getOptionLabel={(option) => option.id}
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              {/* {...props} */}
              <Avatar />
              {option.id}
            </Box>
          )}
          renderInput={(params, data) => (
            <TextField value={ref.current} {...params} />
          )}
        />
      </div>
    </>
  );
}

export default Jobs;

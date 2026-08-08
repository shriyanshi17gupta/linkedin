import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Box,
  Drawer,
  Grid,
  Menu,
  MenuItem,
  Typography,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AssessmentIcon from "@mui/icons-material/Assessment";
import WorkIcon from "@mui/icons-material/Work";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupsIcon from "@mui/icons-material/Groups";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { ListItemContent } from "@mui/joy";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const drawerWidth = 380;

// const drawerWidth = 700;

function HeaderOption(title) {
  const navigate = useNavigate();
  const [profile, setprofile] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpenProfile = (event) => {
    setprofile(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setprofile(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogOut = (e) => {
    if (e.target.outerText === "Logout") {
      console.log("hello");
      navigate("/lodingPage");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      console.log("hi");
    }
  };

  const business = [
    "Hire on Linkedin",
    "Sell with Linkedin",
    "Post a job for free",
    "Advertice on Linkedin",
    "Learn with Linkedin",
  ];

  const drawer = (
    <>
      <Box
        onClick={handleDrawerToggle}
        sx={{
          "&::WebkitScrollbar": { display: "none" },
          padding: "1.6rem 4.8rem 1.6rem 2.4rem",
        }}
      >
        <Typography variant="h6" sx={{ display: "inline-block" }}>
          For Business
        </Typography>
        <ClearIcon
          sx={{
            position: "relative",
            left: "170px",
            top: "6px",
            cursor: "pointer",
          }}
        />
      </Box>
      <Box
        sx={{
          border: "1px solid rgb(232 232 232)",
          borderRadius: "10px",
          mx: 3,
        }}
      >
        <Typography p={2} sx={{ fontSize: "16" }}>
          Visit More LinkedIn Products
        </Typography>
        <Divider sx={{}} />
        <Grid container>
          <Grid className="ForBusiness" item xs={3}>
            <Button sx={{ "&:hover": { boxShadow: 3 } }}>
              <MovieCreationIcon />
            </Button>
            <br />
            Learning
          </Grid>
          <Grid className="ForBusiness" item xs={3}>
            <Button sx={{ "&:hover": { boxShadow: 3 } }}>
              <AssessmentIcon />
            </Button>
            <br />
            Talent Insights
          </Grid>
          <Grid className="ForBusiness" item xs={3}>
            <Button sx={{ "&:hover": { boxShadow: 3 } }}>
              <WorkIcon />
            </Button>
            <br />
            Post a job
          </Grid>
          <Grid className="ForBusiness" item xs={3}>
            <Button sx={{ "&:hover": { boxShadow: 3 } }}>
              <AdsClickIcon />
            </Button>
            <br />
            Advertise
          </Grid>
          <Grid className="ForBusiness" item xs={3}>
            <Button sx={{ "&:hover": { boxShadow: 3 } }}>
              <ExploreIcon />
            </Button>
            <br />
            Sell
          </Grid>
          <Grid className="ForBusiness" item xs={3}>
            <Button sx={{ "&:hover": { boxShadow: 3 } }}>
              <GroupsIcon />
            </Button>
            <br />
            Groups
          </Grid>
          <Grid className="ForBusiness" item xs={3}>
            <Button sx={{ "&:hover": { boxShadow: 3 } }}>
              <MiscellaneousServicesIcon />
            </Button>
            <br />
            Services Marketplace
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          border: "1px solid rgb(232 232 232)",
          borderRadius: "10px",
          mx: 3,
          mt: 2,
        }}
      >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontSize: "16" }}>
              Explore more for business
            </Typography>
          </AccordionSummary>
          <Divider sx={{}} />
          <AccordionDetails sx={{ p: "0" }}>
            <List>
              {business.map((ele) => {
                return (
                  <ListItemButton>
                    <ListItemIcon>
                      <Checkbox
                        icon={<CircleOutlinedIcon />}
                        checkedIcon={<CheckCircleIcon />}
                      />
                      <ListItemContent
                        sx={{ fontSize: "15px", alignSelf: "center" }}
                      >
                        {ele}
                      </ListItemContent>
                    </ListItemIcon>
                  </ListItemButton>
                );
              })}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );

  return (
    <>
      {title?.title?.title === "Me" ||
      title?.title?.title === "For Business" ? (
        <div className="headerOption">
          {title?.title?.title === "Me" ? (
            <>
              <title.title.icon
                onClick={handleOpenProfile}
                className="headerOption_name"
              />
              <button
                className="headerOption_name"
                onClick={handleOpenProfile}
                sx={{ p: 0 }}
              >
                {title?.title?.title}
                <ArrowDropDownIcon
                  style={{
                    height: "13px",
                    position: "absolute",
                    width: "12px",
                  }}
                />
              </button>
              <Divider
                orientation="vertical"
                sx={{
                  position: "relative",
                  bottom: "48px",
                  left: "30px",
                }}
              />
            </>
          ) : (
            <>
              <title.title.icon
                onClick={handleDrawerToggle}
                className="headerOption_name"
              />
              <button
                className="headerOption_name"
                onClick={handleDrawerToggle}
                sx={{ p: 0 }}
              >
                {title?.title?.title}
                <ArrowDropDownIcon
                  style={{
                    height: "13px",
                    position: "absolute",
                    width: "12px",
                  }}
                />
              </button>
            </>
          )}

          {title?.title?.title === "Me" ? (
            <Menu
              sx={{ mt: "5px" }}
              anchorEl={profile}
              open={Boolean(profile)}
              onClose={handleCloseProfile}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClose={handleCloseProfile}
                  onClick={(e) => handleLogOut(e)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          ) : (
            <nav>
              <Drawer
                anchor="right"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                  zIndex: 0,
                  // "&::WebkitScrollbar": { display: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                    height: "100%",
                    top: "52px",
                    borderTopLeftRadius: "6px",
                    borderBottomLeftRadius: "10px",
                  },
                }}
              >
                {drawer}
              </Drawer>
            </nav>
          )}
        </div>
      ) : (
        // {mobileOpen === true? {style={{ '&::WebkitScrollbar'= { display = "none"} }}}:""}
        <>
          <Link
            to={title?.title?.link}
            replace={true}
            style={{ textDecoration: "none" }}
            className="underline"
          >
            <div className="headerOption">
              <title.title.icon className="headerOption_name" />
              <button className="headerOption_name">
                {title?.title?.title}
              </button>
            </div>
          </Link>
        </>
      )}
    </>
  );
}

export default HeaderOption;

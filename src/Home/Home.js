import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import "./MiddleContainer.css";
import media from "./picture.png";
import artical from "./artical.png";
import event from "./calendar.png";
import MiddleContainer from "./MiddleContainer";
import { useEffect, useRef, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Textarea from "@mui/joy/Textarea";
import EmojiPicker from "emoji-picker-react";
import linkedingold from "./linkedingold.png";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import timeline from "../photos/timeline.jpg";

import {
  AspectRatio,
  Card,
  CircularProgress,
  List,
  ListItemContent,
  Modal,
  ModalClose,
  ModalDialog,
  Skeleton,
} from "@mui/joy";

import { useDispatch, useSelector } from "react-redux";
import { AddPost, ShowMorePost } from "../LInkedStore/InitialData";
import Header from "../Header/header";

function Home() {
  const Posts = useSelector((state) => state.Feed.postcount);
  const FeedData = useSelector((state) => state.Feed.FeedData);
  const dispatch = useDispatch();
  const [postOpen, setPostOpen] = useState(false);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [postInput, setPostInput] = useState("");
  const [count, setCount] = useState(false);
  const [offset, setOffset] = useState(0);
  const [loder, setLoder] = useState(false);
  const timer = useRef(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [ratingTooltil, setRatingTooltip] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(true);
    }, 2000);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  function handleScroll() {
    if (loder === false) {
      setLoder(true);
      timer.current = setTimeout(() => {
        console.log("hello");
        setLoder(false);
        dispatch(ShowMorePost());
      }, 3000);
    }
  }

  function Scrolling(scrolling) {
    useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      // this function gives us current loaction of scrolling bar offset
    }, []);

    scrolling = document.body.offsetHeight - (offset + window.innerHeight);
    // document.body.offsetHeight gives us a whole screen height and window innerheight is the
    console.log(scrolling);
    if (scrolling < 20 && FeedData.length !== Posts.count) {
      handleScroll();
    }
  }

  const news = [
    "Gas and oil investment too high: IEA",
    "UST to hire 2,000",
    "Retail set for wedding boost",
    "Auto firms see CXO churn",
    "Israel-Hamas war: latest updates",
  ];

  function Post() {
    // const Profilename = document.getElementById("profilename").innerText;
    dispatch(AddPost(postInput));
    setPostOpen(false);
  }

  const onEmojiClick = (event) => {
    setPostInput((prevInput) => prevInput + event.emoji);
    setEmojiOpen(false);
  };

  return (
    <>
      <Header />
      <Container sx={{}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "27px",
          }}
        >
          {/* <---------------------Left Start-----------------------------> */}
          <div
            style={{
              width: "20%",
            }}
          >
            {!count ? (
              <>
                <Card variant="outlined" sx={{ display: "flex", gap: 2 }}>
                  <AspectRatio ratio="21/9">
                    <Skeleton variant="overlay"></Skeleton>
                  </AspectRatio>
                  <Skeleton variant="text" width={100} />
                  <Skeleton level="body-sm" variant="text" />
                  <Skeleton variant="text" width={100} />
                  <Skeleton level="body-sm" variant="text" />
                </Card>
              </>
            ) : (
              <div
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgb(76 75 161/ 20%)",
                  borderRadius: "10px 10px",
                }}
              >
                <img
                  src={timeline}
                  alt=""
                  style={{
                    width: "100%",
                    height: "70px",
                    objectFit: "cover",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                />
                <Avatar
                  // src="https://gravatar.com/avatar/f2a7d149cbe2e06f947cd03a15f2855f?s=400&d=robohash&r=x"
                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                  sx={{
                    position: "relative",
                    bottom: "20px",
                    left: "38%",
                    height: "50px",
                    width: "50px",
                  }}
                />
                <spam className="leftContainerName">Welcome, Ashwin</spam>
                <br />
                <Divider />
                <List>
                  <ListItemButton sx={{ p: 0, fontSize: "15px" }}>
                    <ListItem>Profile viewers </ListItem>
                  </ListItemButton>
                  <ListItemButton sx={{ p: 0, fontSize: "15px" }}>
                    <ListItem>View all analytics</ListItem>
                  </ListItemButton>
                  <Divider />
                  <ListItemButton
                    sx={{ p: 0, fontSize: "11px", fontWeight: "400" }}
                  >
                    <ListItem>
                      Strengthen your profile with an AI writing assistant
                    </ListItem>
                  </ListItemButton>
                  <Divider />
                  <ListItemButton sx={{ p: 0, fontSize: "15px", pl: "10px" }}>
                    <ListItemIcon sx={{ display: "contents" }}>
                      <BookmarkIcon sx={{ fontSize: "20px" }} />
                    </ListItemIcon>
                    <ListItem
                      sx={{ fontSize: "13px", fontWeight: "600", pl: "5px" }}
                    >
                      My items
                    </ListItem>
                  </ListItemButton>
                </List>
              </div>
            )}

            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px 10px",
                marginTop: "10px",
              }}
            >
              <Accordion
                elevation={0}
                style={{
                  border: "1px solid rgb(76 75 161/ 20%)",
                  borderRadius: "10px 10px",
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontSize: "16" }}>
                    Ratting Our Project
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Tooltip title={ratingTooltil}>
                    <Rating
                      value={ratingValue}
                      onChange={(event, newValue) => setRatingValue(newValue)}
                      onChangeActive={(event, newValue) =>
                        setRatingTooltip(newValue)
                      }
                    />
                  </Tooltip>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          {/* <---------------------Left End-----------------------------> */}
          {/* <---------------------Mid Start-----------------------------> */}
          <div
            style={{
              width: "53%",
            }}
          >
            {/* <-------------------------Mid Top Start-----------------------> */}
            <Grid
              container
              style={{
                backgroundColor: "white",
                height: "135px",
                borderRadius: "10px 10px",
                border: "1px solid rgb(76 75 161/ 20%)",
              }}
            >
              <Grid
                item
                xs={2}
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Avatar
                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                  style={{
                    color: "#80808061",
                    height: "50px",
                    width: "50px",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={10}
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
                pr={2}
              >
                <button
                  className="post_button"
                  onClick={() => {
                    setPostOpen(true);
                  }}
                >
                  <span className="font">Start a post</span>
                </button>

                <Modal
                  className="modal"
                  aria-labelledby="modal-title"
                  aria-describedby="modal-desc"
                  open={postOpen}
                  onClose={() => setPostOpen(false)}
                >
                  <ModalDialog
                    variant="outlined"
                    sx={{
                      // height: "200px",
                      width: "700px",
                      borderRadius: "md",
                      p: 3,
                      boxShadow: "lg",
                      position: "relatives",
                      top: 300,
                    }}
                  >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <>
                      <Button sx={{ width: "230px" }}>
                        <Avatar
                          src="https://xsgames.co/randomusers/avatar.php?g=male"
                          sx={{ height: "50px", width: "50px" }}
                        />
                        <Typography
                          sx={{
                            pl: 2,
                            textTransform: "none",
                            color: "black",
                            fontSize: "20px",
                          }}
                        >
                          <span id="profilename">Ashwin Singh</span>
                          <ArrowDropDownIcon />

                          <spam
                            style={{
                              fontSize: "15px",
                              position: "relative",
                              left: "-21px",
                            }}
                          >
                            Post to Anyone
                          </spam>
                        </Typography>
                      </Button>
                      <Textarea
                        value={postInput}
                        onChange={(e) => setPostInput(e.target?.value)}
                        sx={{
                          height: "200px",
                          "--Textarea-focusedInset": "white",
                        }}
                        minRows={2}
                        variant="plain"
                        placeholder="What do you want to talk about?"
                      />
                      <MoodIcon
                        onClick={() => {
                          setEmojiOpen(true);
                        }}
                      />
                      <Modal
                        aria-labelledby="modal-title"
                        aria-describedby="modal-desc"
                        className="modal"
                        open={emojiOpen}
                        onClose={() => setEmojiOpen(false)}
                      >
                        <ModalDialog>
                          <EmojiPicker onEmojiClick={onEmojiClick} />
                          <ModalClose variant="plain" sx={{ m: 1 }} />
                        </ModalDialog>
                      </Modal>
                      <Divider sx={{ width: "100%" }} />
                      <Button
                        disabled={!postInput}
                        sx={{ width: "80px" }}
                        onClick={Post}
                      >
                        Post
                      </Button>
                    </>
                  </ModalDialog>
                </Modal>
              </Grid>
              <Grid item xs={4} display="flex" justifyContent="space-around">
                <Button disableRipple>
                  <img src={media} alt="" height={"20px"} />
                  <spam className="font">Media</spam>
                </Button>
              </Grid>
              <Grid item xs={4} display="flex" justifyContent="space-around">
                <Button disableRipple>
                  <img src={event} alt="" height={"20px"} />
                  <spam className="font">Event</spam>
                </Button>
              </Grid>
              <Grid item xs={4} display="flex" justifyContent="space-around">
                <Button disableRipple>
                  <img src={artical} alt="" height={"20px"} />
                  <spam className="font">Write artical</spam>
                </Button>
              </Grid>
            </Grid>
            <Button
              sx={{ width: "100%", height: "20px", p: "0" }}
              disableRipple
              style={{ backgroundColor: "transparent" }}
            >
              <Divider
                orientation="horizontal"
                width="80%"
                sx={{ borderBottomWidth: 2 }}
              />
              <spen className="font" style={{ fontSize: "12px" }}>
                Sort by:Top
              </spen>
            </Button>
            {/* <-------------------------Mid Top End-----------------------> */}
            <MiddleContainer />

            <Scrolling />
            {loder === true ? (
              <CircularProgress
                // color="success"
                sx={{ width: "100%", mt: "20px", mb: "20px" }}
              />
            ) : (
              ""
            )}

            {/* <Button
              sx={{ mt: "20px", mb: "20px", width: "50%" }}
              disableRipple
              disabled={FeedData.length === Posts.count ? true : false}
              onClick={() => dispatch(ShowMorePost())}
            >
              Show More
            </Button> */}
            {/* <Button
              sx={{ mt: "20px", mb: "20px", width: "50%" }}
              disableRipple
              disabled={Posts.count === 2 ? true : false}
              onClick={() => dispatch(ShowLessPost())}
            >
              Show Less
            </Button> */}
          </div>
          {/* <---------------------Mid End-----------------------------> */}
          {/* <---------------------Right Start-----------------------------> */}
          <div
            style={{
              width: "23%",
            }}
          >
            {!count ? (
              <>
                <Card variant="outlined" sx={{ display: "flex", gap: 2 }}>
                  <Skeleton variant="text" width={100} />
                  <Skeleton level="body-sm" variant="text" />
                  <Skeleton variant="text" width={100} />
                  <Skeleton level="body-sm" variant="text" />
                  <Skeleton variant="text" width={100} />
                  <Skeleton level="body-sm" variant="text" />
                </Card>
              </>
            ) : (
              <>
                <div
                  style={{
                    borderRadius: "10px 10px",
                    border: "1px solid rgb(76 75 161/ 20%)",
                    backgroundColor: "white",
                  }}
                >
                  <Typography p={2} pb={0} fontWeight={600} color={"#757575"}>
                    Linkedin News
                  </Typography>
                  <List>
                    {news.map((News) => {
                      return (
                        <ListItemButton
                          sx={{
                            p: 0,
                            pl: "10px",
                            fontWeight: "500",
                            pb: "10px",
                          }}
                        >
                          <ListItemIcon sx={{ display: "contents" }}>
                            <CircleRoundedIcon
                              sx={{
                                fontSize: "10px",
                                display: "flex",
                                alignSelf: "baseline",
                                position: "absolute",
                                top: "8px",
                              }}
                            />
                          </ListItemIcon>
                          <ListItemContent
                            sx={{ pl: "24px", fontSize: "15px" }}
                          >
                            {News}
                            <List sx={{ p: "0" }}>
                              <ListItem
                                sx={{
                                  p: "0",
                                  fontWeight: "300",
                                  fontSize: "10px",
                                }}
                              >
                                11h ago . 180 readers
                              </ListItem>
                            </List>
                          </ListItemContent>
                        </ListItemButton>
                      );
                    })}
                  </List>
                </div>
                <div
                  className="rightlowerdiv"
                  style={{
                    border: "1px solid rgb(76 75 161/ 20%)",
                    marginTop: "20px",
                    backgroundColor: "white",
                    borderRadius: "10px 10px",
                  }}
                >
                  <Grid container className="premiumGrid">
                    <Grid item sx={12}>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "300",
                        }}
                      >
                        Ashwin boots your job search with Premium
                      </span>
                    </Grid>
                    <Grid item sx={12}>
                      <img
                        src={linkedingold}
                        style={{ marginTop: "20px", marginBottom: "20px" }}
                        alt=""
                      />
                    </Grid>
                    <Grid item sx={12}>
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          marginTop: "20px",
                        }}
                      >
                        See who's viewed your profile in the last 90 days Ashwin
                      </span>
                    </Grid>
                    <Grid item sx={12}>
                      <button className="premiumProfile">Try for free!</button>
                    </Grid>
                  </Grid>
                </div>
              </>
            )}
          </div>
          {/* <---------------------Right Start-----------------------------> */}
        </div>
      </Container>
    </>
  );
}

export default Home;

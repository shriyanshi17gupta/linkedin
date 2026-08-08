import {
  Alert,
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Snackbar,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useState, useRef } from "react";
import like from "./like.png";
import comment from "./comment.png";
import share from "./share.png";
import arrow from "./arrow.png";
import postlike from "./postlike.png";
import idea from "./idea.png";
import liked from "./liked.png";
import { useDispatch, useSelector } from "react-redux";

import {
  ShowComment,
  AddLike,
  AddComment,
  CountCommentLike,
  ShowReply,
  AddReply,
  DelComment,
  EditComment,
  FollowUnFollow,
} from "../LInkedStore/InitialData";

const settings = ["Delete", "Edit"];
export default function MiddleContainer() {
  const FeedData = useSelector((state) => state.Feed.FeedData);
  const search = useSelector((state) => state.Feed.search);
  const Posts = useSelector((state) => state.Feed.postcount);
  // console.log(postcount);

  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState("");
  const [replyInput, setReplyInput] = useState("");
  const [commentMenu, setCommentMenu] = useState(null);
  const [delData, setDelData] = useState(null);
  const [replyIndex, setReplyIndex] = useState();
  const postKey = useRef("Post");
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackDetail, setSnackDetail] = useState({ name: "", follow: "" });

  const handleSnackOpen = () => {
    setSnackOpen(true);
  };

  const handleSnackClose = () => {
    setSnackOpen(false);
  };

  const follow = (id, follow, name) => {
    dispatch(FollowUnFollow({ id: id, follow: follow }));
    setSnackDetail({ name: name, follow: follow });
  };

  const handleOpenCommentMenu = (event) => {
    setCommentMenu(event.currentTarget);
  };

  const handleChange = (value, index) => {
    setReplyIndex(index);
    setReplyInput(value);
  };

  const handleCloseCommentMenu = () => {
    setCommentMenu(null);
  };

  const commentlikebut = (id, index1, likes, but) => {
    if (but === false) {
      dispatch(
        CountCommentLike({
          id: id,
          index: index1,
          commentlike: likes + 1,
          commentlikecount: but,
        })
      );
    } else {
      dispatch(
        CountCommentLike({
          id: id,
          index: index1,
          commentlike: likes - 1,
          commentlikecount: but,
        })
      );
    }
  };

  const CommentPost = (e, id, commentcount) => {
    if (
      (e.key === "Enter" || e.type === "click") &&
      postKey.current === "Post"
    ) {
      dispatch(
        AddComment({
          id: id,
          commentcontent: commentInput,
          commentcount: commentcount + 1,
        })
      );
      setCommentInput("");
    } else if (
      (e.key === "Enter" || e.type === "click") &&
      postKey.current === "Edit"
    ) {
      dispatch(EditComment({ data: delData, content: commentInput }));
      setCommentInput("");
      postKey.current = "Post";
    }
  };

  const likecount = (id, like, likebut) => {
    if (likebut === false) {
      dispatch(AddLike({ like: like + 1, id: id, likebut: likebut }));
    } else {
      dispatch(AddLike({ like: like - 1, id: id, likebut: likebut }));
    }
  };

  const commentshow = (id, commentbut) => {
    dispatch(
      ShowComment({
        id: id,
        commentbut: commentbut,
      })
    );
  };

  const ReplyShow = (id, index) => {
    dispatch(
      ShowReply({
        id: id,
        index: index,
      })
    );
  };

  const ReplyPost = (e, id, commentcount, index1) => {
    console.log(postKey.current);
    if (
      (e.key === "Enter" || e.type === "click") &&
      postKey.current === "Post"
    ) {
      dispatch(
        AddReply({
          id: id,
          commentcount: commentcount + 1,
          index: index1,
          replycontent: replyInput,
        })
      );
      setReplyInput("");
    } else if (
      (e.key === "Enter" || e.type === "click") &&
      postKey.current === "Edit"
    ) {
      dispatch(EditComment({ data: delData, content: replyInput }));
      setReplyInput("");
      postKey.current = "Post";
    }
  };

  const DelComments = (select) => {
    console.log(select);
    if (select === "Delete") {
      dispatch(DelComment(delData));
    } else if (select === "Edit" && delData.index2 !== null) {
      dispatch(
        ShowReply({
          id: delData.id,
          index: delData.index1,
        })
      );
      handleChange(delData.reply.replycontent, delData.index1);
    } else {
      setCommentInput(delData.comments.commentcontent);
    }
  };

  let Datas = FeedData?.filter((ele) =>
    ele.id < Posts.count ? ele.name.toLowerCase().match(search) : ""
  );

  return (
    <>
      {Datas.map((Data, index) => (
        <div
          style={{
            marginTop: "10px",
            border: "1px solid rgb(76 75 161/ 20%)",
            backgroundColor: "white",
            borderRadius: "10px 10px",
          }}
        >
          <Grid container py={2}>
            <Grid
              item
              xs={2}
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Avatar src={Data.avatar} />
            </Grid>
            <Grid
              item
              xs={7}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
              {Data.name}
              <br />
              box
            </Grid>
            <Grid
              item
              xs={3}
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Button
                onClick={() => {
                  follow(Data.id, Data.follow, Data.name);
                  handleSnackOpen();
                }}
                sx={{ textTransform: "none", fontWeight: "600" }}
              >
                {Data.follow === false ? (
                  <span style={{ color: "gray" }}>Following</span>
                ) : (
                  <span>+ Follow</span>
                )}
              </Button>
              <Box>
                <Snackbar
                  autoHideDuration={2000}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  open={snackOpen}
                  onClose={handleSnackClose}
                >
                  {snackDetail.follow === true ? (
                    <Alert
                      variant="filled"
                      severity="success"
                      sx={{ width: "600%" }}
                    >
                      You Followed {snackDetail.name}
                    </Alert>
                  ) : (
                    <Alert
                      variant="filled"
                      severity="warning"
                      sx={{ width: "600%" }}
                    >
                      You UnFollowed {snackDetail.name}
                    </Alert>
                  )}
                </Snackbar>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              p={1}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              className="content"
            >
              {Data.content}
            </Grid>
            <Grid item xs={12}>
              <img
                src={Data.post}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </Grid>
            <Grid item xs={8} p={1}>
              <img src={postlike} alt="" />
              <img src={idea} alt="" />
              &nbsp; &nbsp;
              {Data.like}
            </Grid>
            <Grid item xs={4} p={1} display="flex" justifyContent="flex-end">
              {Data.commentcount + " "}Comments
            </Grid>
            <Divider variant="middle" width="95%" />
            <Grid
              item
              xs={3}
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Button
                disableRipple
                onClick={() => {
                  likecount(Data.id, Data.like, Data.likebutton);
                }}
              >
                {Data.likebutton === false ? (
                  <>
                    <img src={like} alt="" height={"20px"} />
                    <spam className="font">Like</spam>
                  </>
                ) : (
                  <>
                    <img src={liked} alt="" height={"20px"} />
                    <spam className="font" style={{ color: "blue" }}>
                      Like
                    </spam>
                  </>
                )}
              </Button>
            </Grid>
            <Grid
              item
              xs={3}
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Button
                disableRipple
                onClick={() => commentshow(Data.id, Data.commentbutton)}
              >
                <img src={comment} alt="" height={"20px"} color="gray" />
                <spam className="font">Comment</spam>
              </Button>
            </Grid>
            <Grid
              item
              xs={3}
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Button disableRipple>
                <img src={arrow} alt="" height={"20px"} color="gray" />
                <spam className="font">Repost</spam>
              </Button>
            </Grid>
            <Grid
              item
              xs={3}
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Button disableRipple>
                <img src={share} alt="" height={"20px"} color="gray" />
                <spam className="font">Send</spam>
              </Button>
            </Grid>

            {Data.commentbutton === false ? (
              <></>
            ) : (
              <>
                <Grid
                  item
                  xs={2}
                  display="flex"
                  justifyContent="space-evenly"
                  alignItems="center"
                  mt={2}
                >
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male" />
                </Grid>
                <Grid
                  item
                  xs={10}
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                  mt={2}
                >
                  <input
                    className="commentButton"
                    placeholder="Add a comment..."
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target?.value)}
                    onKeyDown={(e) =>
                      CommentPost(e, Data.id, Data.commentcount)
                    }
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Button
                    disabled={!commentInput}
                    onClick={(e) => CommentPost(e, Data.id, Data.commentcount)}
                    sx={{
                      width: "80px",
                      mr: "20px",
                    }}
                  >
                    Post
                  </Button>
                </Grid>
                {Data.comment.map((comments, index) => (
                  <>
                    <Grid
                      item
                      xs={2}
                      display="flex"
                      justifyContent="space-evenly"
                      alignItems="baseline"
                      mt={2}
                    >
                      <Avatar src={comments.comavatar} />
                    </Grid>
                    <Grid container xs={9} mt={2} className="commentContent">
                      <Grid item xs={10}>
                        <span id="commentname">{comments.name}</span>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="center"
                        paddingRight={1}
                      >
                        {comments.name === "Ashwin Singh" ? (
                          <>
                            <MoreHorizIcon
                              sx={{
                                fontSize: "1.2rem",
                                cursor: "pointer",
                              }}
                              onClick={(event) => {
                                handleOpenCommentMenu(event);
                                setDelData({
                                  id: Data.id,
                                  index1: comments.id,
                                  index2: null,
                                  comments: comments,
                                  commentcount: Data.commentcount,
                                });
                              }}
                            />
                          </>
                        ) : (
                          <span style={{ fontSize: "12px" }}>
                            {comments.commenthour}h
                          </span>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <div id="commenttext">{comments.commentcontent}</div>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={2}></Grid>
                      <Grid
                        item
                        xs={9}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <button
                          className="commentlikebut"
                          onClick={() =>
                            commentlikebut(
                              Data.id,
                              comments.id,
                              comments.commentlike,
                              comments.commentlikecount
                            )
                          }
                        >
                          Like
                        </button>
                        <spam className="commentlikescount">
                          {comments.commentlike}
                        </spam>
                        &nbsp; &nbsp;
                        <button
                          className="commentlikebut"
                          onClick={() => ReplyShow(Data.id, comments.id)}
                        >
                          Reply
                        </button>
                      </Grid>
                    </Grid>
                    {comments.commentreply.map((replys, index) => {
                      return (
                        <>
                          <Grid item xs={1}></Grid>
                          <Grid
                            item
                            xs={2}
                            display="flex"
                            justifyContent="space-evenly"
                            alignItems="baseline"
                            mt={2}
                          >
                            <Avatar src={replys.replyavatar} />
                          </Grid>
                          <Grid
                            container
                            xs={8}
                            mt={2}
                            className="commentContent"
                          >
                            <Grid item xs={10}>
                              <span id="commentname">{replys.replyname}</span>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              display="flex"
                              justifyContent="flex-end"
                              alignItems="center"
                              paddingRight={1}
                            >
                              {replys.replyname === "Ashwin Singh" ? (
                                <>
                                  <MoreHorizIcon
                                    sx={{
                                      fontSize: "1.2rem",
                                      cursor: "pointer",
                                    }}
                                    onClick={(event) => {
                                      handleOpenCommentMenu(event);
                                      setDelData({
                                        id: Data.id,
                                        index1: comments.id,
                                        index2: replys.id,
                                        reply: replys,
                                        commentcount: Data.commentcount,
                                      });
                                    }}
                                  />
                                </>
                              ) : (
                                <span style={{ fontSize: "12px" }}>
                                  {replys.replyhour}h
                                </span>
                              )}
                            </Grid>
                            <Grid item xs={12}>
                              <div id="commenttext">{replys.replycontent}</div>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item xs={3}></Grid>
                            <Grid
                              item
                              xs={9}
                              display="flex"
                              justifyContent="flex-start"
                              alignItems="center"
                            >
                              <button
                                className="commentlikebut"
                                // onClick={() =>
                                //   commentlikebut(
                                //     FeedData.indexOf(Data),
                                //     index,
                                //     comments.commentlike,
                                //     comments.commentlikecount
                                //   )
                                // }
                              >
                                Like
                              </button>
                              <spam className="commentlikescount">
                                {replys.replylikecount}
                              </spam>
                              &nbsp; &nbsp;
                              <button className="commentlikebut">Reply</button>
                            </Grid>
                          </Grid>
                        </>
                      );
                    })}
                    {comments.commentreplybut === false ? (
                      ""
                    ) : (
                      <>
                        <Grid container>
                          <Grid item xs={1}></Grid>
                          <Grid
                            item
                            xs={2}
                            display="flex"
                            justifyContent="space-evenly"
                            alignItems="center"
                            mt={2}
                          >
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male" />
                          </Grid>
                          <Grid
                            item
                            xs={8}
                            display="flex"
                            justifyContent="flex-start"
                            alignItems="center"
                            mt={2}
                          >
                            <input
                              className="commentButton"
                              placeholder="Add a comment..."
                              value={replyIndex === index ? replyInput : ""}
                              onChange={(e) => {
                                handleChange(e.target?.value, index);
                              }}
                              onKeyDown={(e) =>
                                ReplyPost(
                                  e,
                                  Data.id,
                                  Data.commentcount,
                                  comments.id
                                )
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="center"
                          >
                            <Button
                              // value={postKey.current}
                              disabled={!replyInput}
                              onClick={(e) =>
                                ReplyPost(
                                  e,
                                  Data.id,
                                  Data.commentcount,
                                  comments.id
                                )
                              }
                              sx={{
                                width: "80px",
                                mr: "20px",
                              }}
                            >
                              Post
                            </Button>
                          </Grid>
                        </Grid>
                      </>
                    )}

                    <Menu
                      sx={{ mt: "5px" }}
                      elevation={0}
                      anchorEl={commentMenu}
                      open={Boolean(commentMenu)}
                      onClose={handleCloseCommentMenu}
                    >
                      {settings.map((setting) => (
                        <MenuItem
                          key={setting}
                          onClick={handleCloseCommentMenu}
                        >
                          <Typography
                            textAlign="center"
                            onClick={() => {
                              if (setting === "Edit") {
                                postKey.current = "Edit";
                              }
                              console.log(setting);
                              DelComments(setting);
                            }}
                          >
                            {setting}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ))}
              </>
            )}
          </Grid>
        </div>
      ))}
    </>
  );
}

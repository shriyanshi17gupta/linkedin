import { createSlice } from "@reduxjs/toolkit";
import img1 from "../photos/1.jpg";
import img2 from "../photos/2.jpg";
import img3 from "../photos/3.jpg";
import img4 from "../photos/4.jpg";
import img5 from "../photos/5.jpg";
import img6 from "../photos/6.jpg";
import img7 from "../photos/7.jpg";
import img8 from "../photos/8.jpg";

const slice = createSlice({
  name: "FeedData",
  search: "",
  initialState: {
    postcount: {
      count: 2,
    },
    LogIn: [
      { id: 0, email: "swapnilguptq6@gmail.com", password: "8lessons" },
      { id: 1, email: "vaishnavi21@gmail.com", password: "Vaishu16$" },
    ],
    DragBox: [
      { id: 0, content: "1 Mango" },
      { id: 1, content: "2 Apple" },
      { id: 2, content: "3 IceCream" },
      { id: 3, content: "4 Banana" },
    ],
    DropBox: [],
    FeedData: [
      {
        id: 0,
        follow: true,
        name: "Ashwin Singh",
        avatar: "https://source.unsplash.com/random/?profile",
        content:
          "Revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh",
        post: img1,
        like: Math.floor(Math.random() * 100),
        likebutton: false,
        commentcount: 2 + Math.floor(Math.random() * 10),
        commentbutton: false,
        comment: [
          {
            id: 0,
            comavatar: "https://source.unsplash.com/random/?placd",
            name: "Narendra Jat",
            commentcontent: "Nice",
            commentlikecount: false,
            commentlike: 2,
            commentreplybut: false,
            commentreply: [
              {
                id: 0,
                replyavatar: "https://xsgames.co/randomusers/avatar.php?g=male",
                replyname: "Ashwin Singh",
                replycontent: "hi",
                replylikecount: false,
                replylike: null,
                replyreplybut: false,
                replyhour: Math.floor(Math.random() * 24),
              },
            ],
            commenthour: Math.floor(Math.random() * 24),
          },
          {
            id: 1,
            comavatar: "https://source.unsplash.com/random/?dish",
            name: "Aniket ",
            commentcontent: "Greathdsooooooooooooooooooxbzzzzzzzzzzzzzzzzzzz",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
        ],
      },
      {
        id: 1,
        follow: true,
        name: "Swapnil Gupta",
        avatar: "https://source.unsplash.com/random/?person",
        content:
          "Revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh",
        post: img2,
        like: Math.floor(Math.random() * 100),
        likebutton: false,
        commentcount: 2 + Math.floor(Math.random() * 10),
        commentbutton: false,
        comment: [
          {
            id: 0,
            comavatar: "https://source.unsplash.com/random/?place",
            name: "Narendra Jat",
            commentcontent: "Nice",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
          {
            id: 1,
            comavatar: "https://source.unsplash.com/random/?mobile",
            name: "Aniket ",
            commentcontent: "Great",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
        ],
      },
      {
        id: 2,
        follow: true,
        name: "Rahul",
        avatar: "https://source.unsplash.com/random/?man",
        content:
          "Revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh",
        post: img3,
        like: Math.floor(Math.random() * 100),
        likebutton: false,
        commentcount: 2 + Math.floor(Math.random() * 10),

        commentbutton: false,
        comment: [
          {
            id: 0,
            comavatar: "https://source.unsplash.com/random/?sky",
            name: "Narendra Jat",
            commentcontent: "Nice",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
          {
            id: 1,
            comavatar: "https://source.unsplash.com/random/?number",
            name: "Aniket ",
            commentcontent: "Great",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
        ],
      },
      {
        id: 3,
        follow: true,
        name: "Niyti",
        avatar: "https://source.unsplash.com/random/?women",
        content:
          "Revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh",
        post: img4,
        like: Math.floor(Math.random() * 100),
        likebutton: false,
        commentcount: 2 + Math.floor(Math.random() * 10),
        commentbutton: false,
        comment: [
          {
            id: 0,
            comavatar: "https://source.unsplash.com/random/?alphabet",
            name: "Narendra Jat",
            commentcontent: "Nice",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
          {
            id: 1,
            comavatar: "https://source.unsplash.com/random/?computer",
            name: "Aniket ",
            commentcontent: "Great",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
        ],
      },
      {
        id: 4,
        follow: true,
        name: "Mayur",
        avatar: "https://source.unsplash.com/random/?group",
        content:
          "Revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh",
        post: img5,
        like: Math.floor(Math.random() * 100),
        likebutton: false,
        commentcount: 2 + Math.floor(Math.random() * 10),

        commentbutton: false,
        comment: [
          {
            id: 0,
            comavatar: "https://source.unsplash.com/random/?collage",
            name: "Narendra Jat",
            commentcontent: "Nice",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
          {
            id: 1,
            comavatar: "https://source.unsplash.com/random/?bulding",
            name: "Aniket ",
            commentcontent: "Great",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
        ],
      },
      {
        id: 5,
        follow: true,
        name: "Vishal",
        avatar: "https://source.unsplash.com/random/?wallpaper",
        content:
          "Revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh",
        post: img6,
        like: Math.floor(Math.random() * 100),
        likebutton: false,
        commentcount: 2 + Math.floor(Math.random() * 10),
        commentbutton: false,
        comment: [
          {
            id: 0,
            comavatar: "https://source.unsplash.com/random/?keys",
            name: "Narendra Jat",
            commentcontent: "Nice",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
          {
            id: 1,
            comavatar: "https://source.unsplash.com/random/?movies",
            name: "Aniket ",
            commentcontent: "Great",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
        ],
      },
      {
        id: 6,
        follow: true,
        name: "Kunal",
        avatar: "https://source.unsplash.com/random/?indianman",
        content:
          "Revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh",
        post: img7,
        like: Math.floor(Math.random() * 100),
        likebutton: false,
        commentcount: 2 + Math.floor(Math.random() * 10),
        commentbutton: false,
        comment: [
          {
            id: 0,
            comavatar: "https://source.unsplash.com/random/?hero",
            name: "Narendra Jat",
            commentcontent: "Nice",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
          {
            id: 1,
            comavatar: "https://source.unsplash.com/random/?cartoon",
            name: "Aniket ",
            commentcontent: "Great",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
        ],
      },
      {
        id: 7,
        follow: true,
        name: "Vaishnavi",
        avatar: "https://source.unsplash.com/random/?girl",
        content:
          "Revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh revolves in its orbit to destroy everything that comes in his path thus making it a very offensive and destructive force. Chakravyuh",
        post: img8,
        like: Math.floor(Math.random() * 100),
        likebutton: false,
        commentcount: 2 + Math.floor(Math.random() * 10),
        commentbutton: false,
        comment: [
          {
            id: 0,
            comavatar: "https://source.unsplash.com/random/?hero",
            name: "Narendra Jat",
            commentcontent: "Nice",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
          {
            id: 1,
            comavatar: "https://source.unsplash.com/random/?cartoon",
            name: "Aniket ",
            commentcontent: "Great",
            commentlikecount: false,
            commentlike: null,
            commentreplybut: false,
            commentreply: [],
            commenthour: Math.floor(Math.random() * 24),
          },
        ],
      },
    ],
  },

  reducers: {
    DeleteDrop: (state, action) => {
      let numm = state.DragBox.splice(action.payload, 1);
      state.DropBox.push(numm);
    },

    MoveItem: (state, action) => {
      console.log(action.payload);
      [
        state.DropBox[action.payload.dragIndex],
        state.DropBox[action.payload.hoverIndex],
      ] = [
        state.DropBox[action.payload.hoverIndex],
        state.DropBox[action.payload.dragIndex],
      ];
    },

    AddNewLogin: (state, action) => {
      state.LogIn.push(action.payload);
    },

    ChangePassword: (state, action) => {
      console.log(action.payload);
      state.LogIn[action.payload.data].password = action.payload.pass;
    },

    SearchPerson: (state, action) => {
      state.search = action.payload.toLowerCase();
    },

    ShowMorePost: (state, action) => {
      if (state.FeedData.length > state.postcount.count) {
        state.postcount.count = state.postcount.count + 2;
      }
    },

    FollowUnFollow: (state, action) => {
      if (action.payload.follow === true) {
        state.FeedData[action.payload.id].follow = false;
      } else {
        state.FeedData[action.payload.id].follow = true;
      }
    },

    AddLike: (state, action) => {
      if (action.payload.likebut === false) {
        state.FeedData[action.payload.id].like = action.payload.like;
        state.FeedData[action.payload.id].likebutton = true;
      } else {
        state.FeedData[action.payload.id].like = action.payload.like;
        state.FeedData[action.payload.id].likebutton = false;
      }
    },

    ShowComment: (state, action) => {
      if (action.payload.commentbut === false) {
        state.FeedData[action.payload.id].commentbutton = true;
      } else {
        state.FeedData[action.payload.id].commentbutton = false;
      }
    },

    AddPost: (state, action) => {
      console.log(action.payload);
      state.FeedData.map((ele) => (ele.id = ele.id + 1));
      state.FeedData.unshift({
        id: 0,
        name: "Ashwin Singh",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
        content: action.payload,
        post: "https://source.unsplash.com/random/?bangalore",
        like: 0,
        likebutton: false,
        commentcount: 0,
        commentbutton: false,
        comment: [],
      });
    },

    AddComment: (state, action) => {
      state.FeedData[action.payload.id].commentcount =
        action.payload.commentcount;
      state.FeedData[action.payload.id].comment.map(
        (ele) => (ele.id = ele.id + 1)
      );
      state.FeedData[action.payload.id].comment.unshift({
        id: 0,
        comavatar: "https://xsgames.co/randomusers/avatar.php?g=male",
        name: "Ashwin Singh",
        commentcontent: action.payload.commentcontent,
        commentlikecount: false,
        commentlike: null,
        commentreplybut: false,
        commentreply: [],
        commenthour: null,
      });
    },

    CountCommentLike: (state, action) => {
      let id = action.payload.id;
      let index = action.payload.index;
      let like = action.payload.commentlike;
      let likebut = action.payload.commentlikecount;
      if (likebut === false) {
        state.FeedData[id].comment[index].commentlike = like;
        state.FeedData[id].comment[index].commentlikecount = true;
      } else if (
        likebut === true &&
        state.FeedData[id].comment[index].commentlike === 1
      ) {
        state.FeedData[id].comment[index].commentlike = null;
        state.FeedData[id].comment[index].commentlikecount = false;
      } else {
        state.FeedData[id].comment[index].commentlike = like;
        state.FeedData[id].comment[index].commentlikecount = false;
      }
    },

    ShowReply: (state, action) => {
      let id = action.payload.id;
      let index = action.payload.index;

      if (state.FeedData[id].comment[index].commentreplybut === false) {
        state.FeedData[id].comment[index].commentreplybut = true;
      } else {
        state.FeedData[id].comment[index].commentreplybut = false;
      }
    },

    AddReply: (state, action) => {
      let id = action.payload.id;
      let index = action.payload.index;

      state.FeedData[id].comment[index].commentreply.map(
        (ele) => (ele.id = ele.id + 1)
      );
      state.FeedData[id].comment[index].commentreply.unshift({
        id: 0,
        replyavatar: "https://xsgames.co/randomusers/avatar.php?g=male",
        replyname: "Ashwin Singh",
        replycontent: action.payload.replycontent,
        replylikecount: false,
        replylike: null,
        replyreplybut: false,
        replyhour: Math.floor(Math.random() * 24),
      });
      state.FeedData[id].commentcount = action.payload.commentcount;
      state.FeedData[id].comment[index].commentreplybut = false;
    },

    DelComment: (state, action) => {
      let id = action.payload.id;
      let index1 = action.payload.index1;
      let index2 = action.payload.index2;

      if (index2 === null) {
        state.FeedData[id].comment.splice(index1, 1);
        state.FeedData[id].comment.map((ele) =>
          ele.id === 0 ? (ele.id = 0) : (ele.id = ele.id - 1)
        );
        state.FeedData[id].commentcount =
          action.payload.commentcount -
          (action.payload.comments.commentreply.length + 1);
      } else {
        state.FeedData[id].comment[index1].commentreply.splice(index2, 1);
        state.FeedData[id].comment[index1].commentreply.map((ele) =>
          ele.id === 0 ? (ele.id = 0) : (ele.id = ele.id - 1)
        );
        state.FeedData[id].commentcount = action.payload.commentcount - 1;
      }
    },

    EditComment: (state, action) => {
      console.log(action.payload);
      let id = action.payload.data.id;
      let index1 = action.payload.data.index1;
      let index2 = action.payload.data.index2;
      if (index2 !== null) {
        console.log(index2);

        state.FeedData[id].comment[index1].commentreply[index2].replycontent =
          action.payload.content;
        state.FeedData[id].comment[index1].commentreplybut = false;
      } else {
        console.log(index2);
        state.FeedData[id].comment[index1].commentcontent =
          action.payload.content;
      }
    },
  },
});

export const {
  DeleteDrop,
  MoveItem,
  AddNewLogin,
  ChangePassword,
  SearchPerson,
  ShowMorePost,
  FollowUnFollow,
  AddLike,
  AddPost,
  ShowComment,
  AddComment,
  CountCommentLike,
  ShowReply,
  AddReply,
  DelComment,
  EditComment,
} = slice.actions;
export default slice.reducer;

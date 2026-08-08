import {
  Alert,
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Modal,
  Snackbar,
  Typography,
} from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import GroupIcon from "@mui/icons-material/Group";
import MovieIcon from "@mui/icons-material/Movie";
import WorkIcon from "@mui/icons-material/Work";
import ComputerIcon from "@mui/icons-material/Computer";
import logo from "./logo.png";
import homeimg from "./homeimg.svg";
import "./Login.css";
import { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import { ModalClose, ModalDialog } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { AddNewLogin, ChangePassword } from "../LInkedStore/InitialData";

export default function Loginpage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const [forgotPassword, setForgotPassword] = useState(false);
  const [createNewPassword, setCreateNewPassword] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [data, setData] = useState("");

  const [snackbar, setSnackBar] = useState({
    open: false,
    severity: "",
    content: "",
  });

  const submit = useRef(false);
  const mailerror = useRef("");
  const passworderror = useRef("");
  const navigate = useNavigate();
  const Datas = useSelector((state) => state.Feed.LogIn);
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let passwordFormat =
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[!@#$%^&amp;*])[a-zA-Z0-9!@#$%^&amp;*]{8,16}$/;

  const handleForm = (e) => {
    let numm = null;
    e.preventDefault();
    console.log(Datas);
    Validate(email, password);
    if (mailerror.current === "" && passworderror.current === "") {
      console.log(Datas);
      numm = Datas.filter(
        (ele) => ele.email === email && ele.password === password
      );
      if (numm.length !== 0) {
        navigate("/lodingPage");
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      } else {
        setSnackBar({
          open: true,
          severity: "warning",
          content: " Incorrect ID Password ",
        });
      }
      numm = null;
    }
  };

  const Validate = (mail, pass) => {
    if (mail.match(mailFormat) && pass.match(passwordFormat)) {
      mailerror.current = "";
      passworderror.current = "";
      submit.current = true;
    } else {
      if (!mail.match(mailFormat)) {
        mailerror.current = "Invalid Email";
        setSnackBar({
          open: true,
          severity: "error",
          content: " Invalid Email ",
        });
        // alert(mailerror.current);
      } else if (!pass.match(passwordFormat)) {
        passworderror.current = "Invalid Password";
        setSnackBar({
          open: true,
          severity: "error",
          content: " Invalid Password ",
        });
        // alert(passworderror.current);
      }
    }
  };

  const handleNewForm = (e) => {
    let numm = null;
    e.preventDefault();
    console.log(Datas);
    Validate(newEmail, newPassword);
    if (mailerror.current === "" && passworderror.current === "") {
      numm = Datas.filter((ele) => {
        return ele.email === newEmail;
      });
      console.log(numm);
      if (numm.length === 0) {
        // alert("your account is created");
        setSnackBar({
          open: true,
          severity: "success",
          content: " Your Account Is Created ",
        });

        dispatch(
          AddNewLogin({
            id: Datas.length,
            email: newEmail,
            password: newPassword,
          })
        );
      } else {
        // alert("email already exist");
        setSnackBar({
          open: true,
          severity: "error",
          content: " Email Already Exist ",
        });
      }
      setSignupOpen(false);
      console.log(Datas);
      numm = null;
    }
  };

  const handleForgotMail = (e) => {
    let numm = null;
    e.preventDefault();
    numm = Datas.filter((ele) => {
      return ele.email === verifyEmail;
    });

    if (numm.length === 0) {
      // alert("Enter valid Email");
      setSnackBar({
        open: true,
        severity: "warning",
        content: "Enter Valid Email!",
      });
    } else {
      setForgotPassword(false);
      setCreateNewPassword(true);
      setData(numm);
    }

    console.log(numm);
    console.log(data);
    numm = null;
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPass.match(passwordFormat) && newPass === confirmPass) {
      dispatch(ChangePassword({ data: data[0].id, pass: confirmPass }));
      setCreateNewPassword(false);
      setSnackBar({
        open: true,
        severity: "success",
        content: " Password Changed ",
      });
      console.log(Datas);
    } else {
      if (!newPass.match(passwordFormat)) {
        // passworderror.current = "Invalid Password";
        setSnackBar({
          open: true,
          severity: "error",
          content: " Invalid Password ",
        });
        // alert(passworderror.current);
      } else if (newPass !== confirmPass) {
        setSnackBar({
          open: true,
          severity: "warning",
          content: " Password Not Match ",
        });
        // alert("Password Not Match");
      }
    }
    console.log(data);
  };

  const handleSnackClose = (event, reason) => {
    setSnackBar({ ...snackbar, open: false });
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "white", height: "75px" }} elevation={0}>
        <Container>
          <Grid container>
            <Grid item xs={3}>
              <div className="logoname">
                Linked
                <img
                  src={logo}
                  alt=""
                  style={{ height: "38px", paddingLeft: "3px" }}
                />
              </div>
            </Grid>
            <Grid
              item
              xs={9}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <div className="headericons">
                <button>
                  <NewspaperIcon sx={{ fontSize: "30px" }} />
                  <span>Articles</span>
                </button>
                <button>
                  <GroupIcon sx={{ fontSize: "30px" }} />
                  <span>People</span>
                </button>
                <button>
                  <MovieIcon sx={{ fontSize: "30px" }} />
                  <span>Learning</span>
                </button>
                <button>
                  <WorkIcon sx={{ fontSize: "30px" }} />
                  <span>Jobs</span>
                </button>
                <Divider className="divider" orientation="vertical" />
                <button>
                  <ComputerIcon sx={{ fontSize: "30px" }} />
                  <span>Get the app</span>
                </button>
                <Divider
                  className="divider"
                  orientation="vertical"
                  sx={{
                    width: "10px",
                  }}
                />
              </div>
              <button className="joinbut" onClick={() => setSignupOpen(true)}>
                Join now
              </button>
              <Modal open={signupOpen}>
                <form onSubmit={handleNewForm}>
                  <ModalDialog
                    variant="outlined"
                    sx={{
                      width: "400px",
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ModalClose
                      onClick={() => setSignupOpen(false)}
                      variant="plain"
                    />
                    <Typography
                      sx={{
                        color: "#0a66c2",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Sign up
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: "20px",
                        display: "flex",
                        alignSelf: "flex-start",
                        paddingLeft: "12px",
                      }}
                    >
                      Email or phone number
                    </Typography>
                    <input
                      type="email"
                      onChange={(e) => setNewEmail(e.target.value)}
                      style={{
                        marginRight: "3px",
                        border: "1px solid black",
                        borderRadius: "3px 3px 3px 3px",
                        width: "300px",
                        height: "10px",
                        padding: "15px",
                        fontSize: "15px",
                      }}
                    />
                    <Typography
                      sx={{
                        display: "flex",
                        alignSelf: "flex-start",
                        paddingLeft: "12px",
                      }}
                    >
                      Password (6+ characters)
                    </Typography>
                    <Box sx={{ height: "43px", width: "335px" }}>
                      <input
                        id="passinput"
                        onChange={(e) => setNewPassword(e.target.value)}
                        type={showPass ? "text" : "password"}
                        style={{
                          paddingLeft: "15px",
                          paddingRight: "80px",
                          borderRadius: "3px 3px 3px 3px",
                          border: "1px solid black",
                          height: "38px",
                          width: "235px",
                          fontSize: "15px",
                        }}
                      ></input>
                      <span
                        onClick={() => setShowPass((prev) => !prev)}
                        style={{
                          position: "relative",
                          bottom: "32px",
                          left: "265px",
                          paddingLeft: "10px",
                          color: "#0a66c2",
                          fontWeight: "500",
                          cursor: "pointer",
                        }}
                      >
                        Show
                      </span>
                    </Box>
                    <Typography
                      variant="inharit"
                      sx={{
                        display: "flex",
                        alignSelf: "center",
                        padding: "0px 12px 0px 12px",
                        textAlign: "center",
                        fontWeight: "300",
                        fontSize: "10px",
                      }}
                    >
                      <p>
                        By clicking Agree & Join, you agree to the LinkedIn{" "}
                        <span style={{ color: "#0a66c2" }}>
                          User Agreement, Privacy Policy
                        </span>
                        , and{" "}
                        <span style={{ color: "#0a66c2" }}>Cookie Policy</span>.
                      </p>
                    </Typography>
                    <Button
                      type="submit"
                      sx={{
                        backgroundColor: "#0a66c2",
                        color: "white",
                        textTransform: "none",
                        width: "93%",
                        height: "50px",
                        borderRadius: "30px 30px 30px 30px",
                        "&:hover": {
                          background: "#194f86",
                        },
                      }}
                      disableRipple
                    >
                      Agree & Join
                    </Button>
                    <Typography>
                      Already on Linkedin?{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          color: "#0a66c2",
                          textDecoration: "underline",
                        }}
                        onClick={() => setSignupOpen(false)}
                      >
                        Sign in
                      </span>
                    </Typography>
                  </ModalDialog>
                </form>
              </Modal>
              <button className="signbut">Sign in</button>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      <Container
        sx={{
          display: "flex",
          pt: "30px",
        }}
        style={{ paddingLeft: "27px" }}
      >
        <div
          style={{
            width: "700px",
            position: "relative",
            top: "80px",
          }}
        >
          <Typography
            variant="inherit"
            sx={{ fontSize: "56px", fontWeight: "100", color: "#b24020" }}
          >
            Welcome to your professional community
          </Typography>
          <br />

          <form onSubmit={handleForm}>
            <Typography>Email or phone</Typography>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                border: "1px solid black",
                borderRadius: "3px 3px 3px 3px",
                width: "365px",
                height: "22px",
                padding: "15px",
                fontSize: "18px",
              }}
            />
            <br />
            <br />
            <Typography>Password</Typography>
            <Box sx={{ height: "80px", width: "397px" }}>
              <input
                id="passinput"
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  paddingLeft: "15px",
                  paddingRight: "100px",
                  borderRadius: "3px 3px 3px 3px",
                  border: "1px solid black",
                  height: "50px",
                  width: "280px",
                  fontSize: "large",
                }}
              ></input>
              <span
                onClick={() => setShowPass((prev) => !prev)}
                style={{
                  position: "relative",
                  bottom: "40px",
                  left: "330px",
                  paddingLeft: "10px",
                  color: "#0a66c2",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Show
              </span>
            </Box>
            <Typography id="forgotpass" onClick={() => setForgotPassword(true)}>
              Forgot password?
            </Typography>

            <Button id="mainSignbut" type="submit" disableRipple>
              Sign in
            </Button>
          </form>
          <Typography variant="inherit" sx={{ fontWeight: "200" }}>
            By clicking Continue, you agree to LinkedIn's{" "}
            <span style={{ color: "#0a66c2" }}>
              User Agreement, Privacy Policy
            </span>
            {"  "},and <span style={{ color: "#0a66c2" }}> Cookie Policy</span>.
          </Typography>
        </div>
        <Modal open={forgotPassword}>
          <form onSubmit={handleForgotMail}>
            <ModalDialog
              variant="outlined"
              sx={{
                width: "400px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ModalClose
                onClick={() => setForgotPassword(false)}
                variant="plain"
              />
              <Typography
                sx={{
                  color: "#0a66c2",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Forgot Password
              </Typography>
              <Typography
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  alignSelf: "flex-start",
                  paddingLeft: "12px",
                }}
              >
                Email or phone number
              </Typography>
              <input
                type="email"
                onChange={(e) => setVerifyEmail(e.target.value)}
                style={{
                  marginRight: "3px",
                  border: "1px solid black",
                  borderRadius: "3px 3px 3px 3px",
                  width: "300px",
                  height: "10px",
                  padding: "15px",
                  fontSize: "15px",
                }}
              />
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#0a66c2",
                  color: "white",
                  textTransform: "none",
                  width: "93%",
                  height: "50px",
                  borderRadius: "30px 30px 30px 30px",
                  "&:hover": {
                    background: "#194f86",
                  },
                }}
                disableRipple
              >
                Submit
              </Button>
            </ModalDialog>
          </form>
        </Modal>

        <Modal open={createNewPassword}>
          <form onSubmit={handleChangePassword}>
            <ModalDialog
              variant="outlined"
              sx={{
                width: "400px",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ModalClose
                onClick={() => setCreateNewPassword(false)}
                variant="plain"
              />
              <Typography
                sx={{
                  color: "#0a66c2",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Create new password
              </Typography>
              <Typography
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  alignSelf: "flex-start",
                  paddingLeft: "12px",
                }}
              >
                Enter New Password
              </Typography>
              <input
                onChange={(e) => setNewPass(e.target.value)}
                style={{
                  marginRight: "3px",
                  border: "1px solid black",
                  borderRadius: "3px 3px 3px 3px",
                  width: "300px",
                  height: "10px",
                  padding: "15px",
                  fontSize: "15px",
                }}
              />
              <Typography
                sx={{
                  display: "flex",
                  alignSelf: "flex-start",
                  paddingLeft: "12px",
                }}
              >
                Confirm Password
              </Typography>
              <Box sx={{ height: "43px", width: "335px" }}>
                <input
                  id="passinput"
                  onChange={(e) => setConfirmPass(e.target.value)}
                  type={showPass ? "text" : "password"}
                  style={{
                    paddingLeft: "15px",
                    paddingRight: "80px",
                    borderRadius: "3px 3px 3px 3px",
                    border: "1px solid black",
                    height: "38px",
                    width: "235px",
                    fontSize: "15px",
                  }}
                ></input>
                <span
                  onClick={() => setShowPass((prev) => !prev)}
                  style={{
                    position: "relative",
                    bottom: "32px",
                    left: "265px",
                    paddingLeft: "10px",
                    color: "#0a66c2",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Show
                </span>
              </Box>

              <Button
                type="submit"
                sx={{
                  backgroundColor: "#0a66c2",
                  mt: "30px",
                  color: "white",
                  textTransform: "none",
                  width: "93%",
                  height: "50px",
                  borderRadius: "30px 30px 30px 30px",
                  "&:hover": {
                    background: "#194f86",
                  },
                }}
                disableRipple
              >
                Create
              </Button>
            </ModalDialog>
          </form>
        </Modal>

        <div
          style={{
            backgroundImage: `url(${homeimg})`,
            objectFit: "cover",
            zIndex: "-1",
            position: "relative",
            top: "80px",
            minWidth: "700px",
            maxWidth: "700px",
            height: "670px",
          }}
        ></div>
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={snackbar.open}
        onClose={handleSnackClose}
      >
        <Alert
          sx={{ textAlign: "center", width: "400px" }}
          variant="filled"
          severity={snackbar.severity}
          onClose={handleSnackClose}
        >
          {snackbar.content}
        </Alert>
      </Snackbar>
    </>
  );
}

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUpWrapper from "../SignIn/SignInWrapper";
import { Suspense } from "react";
// import "../../CSS/sphere.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "../../components/ThreeJs/sphere";
import AnimatedSphere2 from "../../components/ThreeJs/sphere2";

import { signInF } from "../../Firebase/index";
import { isVerified } from "../../Consts/consts";

import "../../CSS/sphere.css";

function Sphere() {
  return (
    <div className="canvasWrapper">
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere />
          {/* <Model/> */}
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
      <Canvas className="canvas2">
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere2 />
          {/* <Model/> */}
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
      <h1 className="CodingSpace">CodingSpace</h1>
    </div>
  );
}

function Copyright(props) {
  console.log(isVerified + "Sign in");
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    signInF(userData);
  };

  return (
    <SignUpWrapper>
      <Sphere />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    sx={{ "&.Mui-checked": { color: "#112B2B" } }}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "white",
                  backgroundColor: "#091616",
                  "&:hover": { color: "#3de8e7", backgroundColor: "#112B2B" },
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </SignUpWrapper>
  );
}

export default SignIn;

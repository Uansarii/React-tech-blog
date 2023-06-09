import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Components/Header';
import { useState } from 'react';


const API_URL = 'http://localhost:3000/writers';


export default function SignInSide() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fetch the credentials from the server
      const response = await fetch(API_URL);
      const writers = await response.json();

      // Validate the credentials
      const validCredentials = writers.some((writer) => {
        return writer.email === email && writer.password === password;
      });

      if (validCredentials) {
        // Authentication successful, set the session information
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', email);

        // Redirect to the dashboard or home page
        // Replace '/dashboard' with the desired destination
        window.location.href = '/home';
      } else {
        // Authentication failed, handle the error
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error occurred during authentication:', error);
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        TechVerse
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();




  return (
    <>
    <Header/>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            //https://img.freepik.com/free-vector/gradient-geometric-blue-technology-background_52683-78527.jpg?w=996&t=st=1684730051~exp=1684730651~hmac=dd4732e11b3f5a0a8b097371583de09b089f067c22d5bc3c3565bae27f3d48e3
            //https://futureoflife.org/wp-content/uploads/2018/12/neural-pathways.jpg
            backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-geometric-blue-technology-background_52683-78527.jpg?w=996&t=st=1684730051~exp=1684730651~hmac=dd4732e11b3f5a0a8b097371583de09b089f067c22d5bc3c3565bae27f3d48e3)',
            backgroundRepeat: 'no-repeat',
            opacity: 0.87,
            backgroundColor: (t) =>
              t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} sx={{backgroundColor: 'silver'}} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#03a9f4' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={handleChangeEmail}
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
                value={password}
                onChange={handleChangePassword}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
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
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </>
  );
        }

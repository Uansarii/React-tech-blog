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
import { useState } from 'react';

const API_URL = 'http://localhost:3000/writers';

function createWriter(writerData) {
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(writerData),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Writer created:', data);
      // You can perform additional actions after creating the writer
    })
    .catch(error => {
      console.error('Error creating writer:', error);
      // Handle the error condition
    });
}


export default function Register() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmpass: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createWriter(formData);
    window.location.href = '/login';
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
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


// export default function SignUpSide() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       fname: data.get('fname'),
//       lname: data.get('lname'),
//       email: data.get('email'),
//       password: data.get('password'),
//       confirmpass: data.get('confirmpass')
//     });
//   };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
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
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
        margin="normal"
        required
        fullWidth
        id="fname"
        label="First Name"
        name="fname"
        autoComplete="fname"
        autoFocus
        value={formData.fname}
        onChange={handleInputChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="lname"
        label="Last Name"
        name="lname"
        autoComplete="lname"
        value={formData.lname}
        onChange={handleInputChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmpass"
        label="Confirm Password"
        type="password"
        id="confirmpass"
        autoComplete="confirm-password"
        value={formData.confirmpass}
        onChange={handleInputChange}
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
                  onClick={handleSubmit}>
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="https://www.lastpass.com/features/password-generator" variant="body2">
                    Suggest password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="\login" variant="body2">
                    {"Already Have an Account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
          }        

import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundImage: 'url("http://wallpaperswide.com/download/keep_moving_2-wallpaper-800x480.jpg")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  content: {
    color: '#fff',
    padding: '2rem',
    position: 'relative',
    top: '-150px',
  },
});

const Hero = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* <CardMedia component="img" height="100%" /> */}
      <CardContent style={{color:'black'}}className={classes.content}>
        <Typography style={{position:'relative', top:'70px'}} variant="h2">
          Use of Portable Tools <br></br>For Photography
        </Typography>
        <Typography variant="h7" style={{position:'relative', top:'80px'}}  >
        The use of portable tools for photography
        has revolutionized the way<br></br> photographers 
        capture moments on the go. These compact 
        and lightweight <br></br>devices, such as portable tripods 
        and smartphone camera lenses, enable <br></br> photographers
        to achieve professional-quality results 
        without the need for <br></br> heavy and bulky equipment. 
        With the convenience and versatility offered 
        by <br></br> portable tools, photographers can unleash 
        their creativity <br></br> and capture stunning 
        images anytime, anywhere.
        </Typography>
      </CardContent>
    </Card>
    
  );
};

export default Hero;
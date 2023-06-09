import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Header from '../Components/Header';
import Hero from '../Components/hero';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
  },
  link: {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
});

const Landing = () => {
  const classes = useStyles();

  return (
    <>
    <Header/>
    <Hero/>
    <div className={classes.root}>
    <Typography variant="h4" style={{marginBottom:'60px'}} gutterBottom>
    <Link style={{color:'#03a9f4'}}to="/login"> Login </Link>or<Link style={{color:'#03a9f4'}} to="/register"> Sign up </Link> to gain access!
      </Typography>
    <Typography variant="h2" style={{ marginBottom: '16px' }}>
        Techverse Blogs
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '32px' }}>
        Welcome to Techverse, a technology-related blog website. Discover the latest trends, insights, and tips in the world of technology. Explore our collection of AI, Health, Ecommerce, and Tech Support tips articles. Start reading and stay updated!
      </Typography>
      
    </div>
    </>
  );
};

export default Landing;
import React from 'react';
import Sidebar from './sidebar';
import { Grid, Card, CardMedia, CardContent, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const featuredPosts = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YbVJgPZwrzDLLgPldnCIMHuZfAb3Fbgu_w&usqp=CAU',
    title: 'Post 1',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YbVJgPZwrzDLLgPldnCIMHuZfAb3Fbgu_w&usqp=CAU',
    title: 'Post 2',
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YbVJgPZwrzDLLgPldnCIMHuZfAb3Fbgu_w&usqp=CAU',
    title: 'Post 3',
  },
];


const DashboardNav = () => {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={9} style={{ paddingBottom: '50px'}}>
        <Typography variant="h5" gutterBottom>
          Popular Posts
        </Typography>
        {featuredPosts.map((post) => (
          <Card key={post.id} style={{ margin: '10px', padding: '5px' }}>
            <CardMedia
              component="img"
              height="150"
              image={post.image}
              alt={post.title}
            />
            <CardContent>
              <Typography variant="subtitle1">{post.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
      
      <Sidebar/>
    </Grid>
    </>
  );
};

export default DashboardNav;

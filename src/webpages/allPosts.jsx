//page that displays all the blog posts

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import HorizontalCard from '../Components/horizontalCard';
import Header from '../Components/Header';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (

    <div style={{ margin: '15px', display: 'flex', gap: '16px', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
  <Header />
  <Typography variant='h4' style={{ margin: '15px' }}>All Posts</Typography>

  {posts.map(post => (
    <Link style={{ display: 'flex', gap: '16px', textDecoration: 'none', width:'100%', position:'relative', right:'-150px'}} to={`/post/${post.id}`} key={post.id}>
      <HorizontalCard
        id={post.id}
        imageUrl={post.imgUrl}
        heading={post.title}
        category={post.category}
      />
    </Link>
  ))}
 
</div>


  );
};

export default AllPosts;


//page to display all the posts of a particular category
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HorizontalCard from '../Components/horizontalCard';
import axios from 'axios';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  const filteredPosts = category
    ? posts.filter(post => post.category === category)
    : posts;

  return (
    <div>
      {filteredPosts.map(post => (
        <Link to={`/post/${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
          <HorizontalCard
            id={post.id}
            imageUrl={post.imgUrl}
            heading={post.title}
            category={post.category}
            text={post.body}
          />
        </Link>
      ))}
    </div>
  );
};

export default AllPosts;

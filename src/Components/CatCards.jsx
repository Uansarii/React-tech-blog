
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Sidebar from './sidebar';

const cardData = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YbVJgPZwrzDLLgPldnCIMHuZfAb3Fbgu_w&usqp=CAU',
    text: 'Card 1',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YbVJgPZwrzDLLgPldnCIMHuZfAb3Fbgu_w&usqp=CAU',
    text: 'Card 2',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YbVJgPZwrzDLLgPldnCIMHuZfAb3Fbgu_w&usqp=CAU',
    text: 'Card 3',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YbVJgPZwrzDLLgPldnCIMHuZfAb3Fbgu_w&usqp=CAU',
    text: 'Card 4',
  },
];



export default function CatCards() {
    return (
        <div>
        <Typography style={{margin: '10px', padding: '5px', display:'b'}}variant="h3" gutterBottom>
          Categories 
        </Typography>
        
        <Grid container spacing={2}>
       
      {cardData.map((card, index) => (
        <Grid key={index} item xs={2}>
          <Card style={{ margin: '10px', padding: '5px' }}>
            <CardMedia
              component="img"
              height="200"
              image={card.image}
              alt={card.text}
            />
            <CardContent>
              <Typography variant="subtitle1">{card.text}</Typography>
            </CardContent>
          </Card>
        </Grid>
        
      ))}
    </Grid>
    </div>
  );
}
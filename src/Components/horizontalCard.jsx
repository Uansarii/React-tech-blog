import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const HorizontalCard = ({ imageUrl, heading, category}) => {
  return (
    <Card style={{ margin: '10px', padding: '5px' ,width:'70%'}}>
            <CardMedia
              component="img"
              height="150"
              image={imageUrl}
              alt={heading}
            />
            <CardContent>
              <Typography variant="h5">Title: {heading}</Typography>
              <Typography variant="h6">Category: {category}</Typography>
            </CardContent>
          </Card>
    // <Card style={{ width: '70%', height: 250 }}>
    //   <CardMedia
    //     component="img"
    //     image={imageUrl}
    //     alt="Card Image"
    //     style={{ height: '100%', width: '30%', objectFit: 'cover' }}
    //   />
    //   <CardContent style={{ width: '80%', margin: '20px' }}>
    //     <Typography variant="h6" gutterBottom>
    //       {heading}
    //     </Typography>
    //     <Typography variant="subtitle2" color="textSecondary" gutterBottom>
    //       Category: {category}
    //     </Typography>
    //   </CardContent>
    // </Card>
  );
};

export default HorizontalCard;


// import React from 'react';
// import { Card, CardContent, CardMedia, Typography } from '@mui/material';

// const HorizontalCard = ({ imageUrl, heading, category }) => {
//   return (
//     <Card style={{ width: '70%', height: 250 }}>
//       <CardMedia
//         component="img"
//         image={imageUrl}
//         alt="Card Image"
//         style={{ height: '100%', width: '30%', objectFit: 'cover' }}
//       />
//       <CardContent style={{ width: '70%' }}>
//         <Typography variant="h6" gutterBottom>
//           {heading}
//         </Typography>
//         <Typography variant="subtitle2" color="textSecondary">
//           Category: {category}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default HorizontalCard;

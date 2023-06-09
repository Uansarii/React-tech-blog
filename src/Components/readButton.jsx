import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

const StartReadingButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/allposts');
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      style={{
        backgroundColor: '#03a9f4',
        height: '30px',
        width: 'fit-content',
        fontWeight: 'bold',
        fontSize: '16px',
      }}
    >
      Start reading here
    </Button>
  );
};

export default StartReadingButton;

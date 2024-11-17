import React from 'react';
import { Card as MuiCard, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';

interface CardProps {
  title: string;
  image: string;
  level: string;
  details: string;
}

const Card: React.FC<CardProps> = ({ title, image, level, details }) => {
  return (
    <MuiCard sx={{ backgroundColor: '#1e293b', color: '#e2e8f0', borderRadius: 2 }}>
      <CardMedia component="img" height="150" image={image} alt="Course image" />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{title}</Typography>
          <Chip label={level} color={level === 'Advanced' ? 'warning' : 'primary'} />
        </Box>
        <Typography variant="body2" color="textSecondary">
          {details}
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={2} color="textSecondary">
          <Typography variant="caption">Testnet</Typography>
          <Typography variant="caption">Mainnet</Typography>
          <Typography variant="caption">$100</Typography>
          <Typography variant="caption">Role</Typography>
        </Box>
      </CardContent>
    </MuiCard>
  );
};

export default Card;

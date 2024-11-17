import React from 'react';
import { Box, Grid, Typography, Card as MuiCard, CardContent, CardMedia, Button } from '@mui/material';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import { motion } from 'framer-motion';

const rewards = [
  {
    title: "Reward 1",
    image: "https://via.placeholder.com/250",
    description: "This is a brief description of reward 1.",
  },
  {
    title: "Reward 2",
    image: "https://via.placeholder.com/250",
    description: "This is a brief description of reward 2.",
  },
  {
    title: "Reward 3",
    image: "https://via.placeholder.com/250",
    description: "This is a brief description of reward 3.",
  },
  {
    title: "Reward 4",
    image: "https://via.placeholder.com/250",
    description: "This is a brief description of reward 4.",
  },
];

const Reward = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header />
        <Typography variant="h5" mb={2}>Rewards</Typography>
        <Grid container spacing={2}>
          {rewards.map((reward, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <MuiCard sx={{ backgroundColor: '#1e293b', color: '#e2e8f0', borderRadius: 2 }}>
                  <CardMedia component="img" height="150" image={reward.image} alt="Reward image" />
                  <CardContent>
                    <Typography variant="h6">{reward.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {reward.description}
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                      Claim Reward
                    </Button>
                  </CardContent>
                </MuiCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Reward;

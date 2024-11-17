import React from 'react';
import { Box, Grid, Typography, Card as MuiCard, CardContent, CardMedia } from '@mui/material';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';

const Community = () => {
  const communityPosts = [
    {
      title: "Community Post 1",
      image: "https://via.placeholder.com/250",
      content: "This is a brief description of community post 1.",
    },
    {
      title: "Community Post 2",
      image: "https://via.placeholder.com/250",
      content: "This is a brief description of community post 2.",
    },
    {
      title: "Community Post 3",
      image: "https://via.placeholder.com/250",
      content: "This is a brief description of community post 3.",
    },
    {
      title: "Community Post 4",
      image: "https://via.placeholder.com/250",
      content: "This is a brief description of community post 4.",
    },
  ];

  return (
    <Box display="flex">
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header />
        <Typography variant="h5" mb={2}>Community</Typography>
        <Grid container spacing={2}>
          {communityPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <MuiCard sx={{ backgroundColor: '#1e293b', color: '#e2e8f0', borderRadius: 2 }}>
                <CardMedia component="img" height="150" image={post.image} alt="Community post image" />
                <CardContent>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.content}
                  </Typography>
                </CardContent>
              </MuiCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Community;

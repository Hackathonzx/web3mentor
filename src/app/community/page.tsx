import React from 'react';
import { Box, Grid, Typography, Card as MuiCard, CardContent, CardMedia } from '@mui/material';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';

const Community = () => {
  const communityPosts = [
    {
      title: "How to join a community",
      image: "/images/community.png",
      content: "Hi guys, I will be showing you how to join a new community.",
    },
    {
      title: "Newbie here!",
      image: "/images/community.png",
      content: "Hi guys! I'm capy girl, newbie here. I need some course recommendation to keep the ball rolling.",
    },
    {
      title: "Looking for members in web3 community!",
      image: "/images/community.png",
      content: "Hi guys! I just created a new community forum for enthusiasts can you join?.",
    },
    {
      title: "New hackathons for the community",
      image: "/images/community.png",
      content: "Hi guys! Here to announce a new hackathon for the community.",
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

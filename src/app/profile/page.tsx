import React from 'react';
import { Box, Grid, Typography, Card as MuiCard, CardContent, CardMedia, LinearProgress } from '@mui/material';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';

const Profile = () => {
  const learningProgress = [
    { title: "Course 1", progress: 70 },
    { title: "Course 2", progress: 50 },
    { title: "Course 3", progress: 90 },
    { title: "Course 4", progress: 30 },
  ];

  return (
    <Box display="flex">
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header />
        <Typography variant="h5" mb={2}>Profile</Typography>
        <Box mb={4}>
          <MuiCard sx={{ backgroundColor: '#1e293b', color: '#e2e8f0', borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="200"
              image="/images/profile.png"
              alt="Profile image"
            />
            <CardContent>
              <Typography variant="h6">Cappy Girl</Typography>
              <Typography variant="body2" color="textSecondary">
                Hi! Cappy girl here. Nothing much to see, just learning about blockchain.
              </Typography>
            </CardContent>
          </MuiCard>
        </Box>
        <Typography variant="h6" mb={2}>Learning Progress</Typography>
        <Grid container spacing={2}>
          {learningProgress.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <MuiCard sx={{ backgroundColor: '#1e293b', color: '#e2e8f0', borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6">{course.title}</Typography>
                  <Box display="flex" alignItems="center" mt={2}>
                    <Box width="100%" mr={1}>
                      <LinearProgress variant="determinate" value={course.progress} />
                    </Box>
                    <Box minWidth={35}>
                      <Typography variant="body2" color="textSecondary">{`${course.progress}%`}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </MuiCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;

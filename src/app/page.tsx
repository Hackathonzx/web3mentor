'use client';

import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Card from '../components/cards';
import FilterButton from '../components/buttons';

export default function Home() {
  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header />
        <Box mb={2}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search Topics, project or Narrative"
            sx={{ backgroundColor: '#2d3748', borderRadius: 1 }}
            InputProps={{ style: { color: '#e2e8f0' } }}
          />
        </Box>
        <Box display="flex" gap={2} mb={2} flexWrap="wrap">
          <FilterButton label="All" active />
          <FilterButton label="Defi" />
          <FilterButton label="Futures" />
          <FilterButton label="Degen" />
          <FilterButton label="Jobs" />
          <FilterButton label="Marketing" />
          <FilterButton label="Airdrops" />
          <FilterButton label="Smart contract" />
          <FilterButton label="Development" />
        </Box>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Course title"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Beginner"
              details="Course Details"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Introduction to Defi"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Beginner"
              details="Course Details"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Course title"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Advanced"
              details="Course Details"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Course title"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Beginner"
              details="Course Details"
            />
          </Grid>
        </Grid>
        <Typography variant="h5" mb={2}>Top Picks</Typography>
        <Typography variant="body2" color="textSecondary" mb={2}>Courses taken by new users</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Course title"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Beginner"
              details="Course Details"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Introduction to Defi"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Beginner"
              details="Course Details"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Course title"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Advanced"
              details="Course Details"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Course title"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Beginner"
              details="Course Details"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

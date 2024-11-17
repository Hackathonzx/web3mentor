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
          <FilterButton label="All" active={true} />
          <FilterButton label="Defi" active={false} />
          <FilterButton label="Futures" active={false} />
          <FilterButton label="Degen" active={false} />
          <FilterButton label="Jobs" active={false} />
          <FilterButton label="Marketing" active={false} />
          <FilterButton label="Airdrops" active={false} />
          <FilterButton label="Smart contract" active={false} />
          <FilterButton label="Development" active={false} />
        </Box>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Welcome to web3 mentor"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Beginner"
              details="click course to learn more and start learning!"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Introduction to Defi"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Beginner"
              details="click course to learn more and start learning!"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="How does blockchain work?"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Advanced"
              details="click course to learn more and start learning!"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Testing your contracts"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Beginner"
              details="click course to learn more and start learning!"
            />
          </Grid>
        </Grid>
        <Typography variant="h5" mb={2}>Top Picks</Typography>
        <Typography variant="body2" color="textSecondary" mb={2}>Courses taken by new users</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="AI and blockchain"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Beginner"
              details="click course to learn more and start learning!"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Introduction to Defi"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Beginner"
              details="click course to learn more and start learning!"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="What are smart contracts"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Advanced"
              details="click course to learn more and start learning!"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              title="Rust fundamentals for blockchain"
              image="https://storage.googleapis.com/a1aa/image/6Dh6B3gebJ0HTaSZC14BmPP6Thhixf5GgyeYsWAQU2Xob8jnA.jpg"
              level="Beginner"
              details="click course to learn more and start learning!"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

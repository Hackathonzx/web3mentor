import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Book, People, CardGiftcard, Person } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box', backgroundColor: '#1e293b', color: '#e2e8f0' },
      }}
    >
      <div>
        <Typography variant="h5" sx={{ color: 'purple', padding: 2 }}>
          Web3mentor
        </Typography>
        <List>
          <ListItem button selected>
            <ListItemIcon>
              <Book sx={{ color: '#e2e8f0' }} />
            </ListItemIcon>
            <ListItemText primary="Classroom" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <People sx={{ color: '#e2e8f0' }} />
            </ListItemIcon>
            <ListItemText primary="Community" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CardGiftcard sx={{ color: '#e2e8f0' }} />
            </ListItemIcon>
            <ListItemText primary="Reward" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Person sx={{ color: '#e2e8f0' }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;

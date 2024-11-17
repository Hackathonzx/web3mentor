import React from 'react';
import { Button } from '@mui/material';

const FilterButton = ({ label, active }) => {
  return (
    <Button variant={active ? 'contained' : 'text'} color={active ? 'primary' : 'default'}>
      {label}
    </Button>
  );
};

export default FilterButton;

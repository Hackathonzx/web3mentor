import React from 'react';
import { Button } from '@mui/material';

interface FilterButtonProps {
  label: string;
  active: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, active }) => {
  return (
    <Button variant={active ? 'contained' : 'text'} color={active ? 'primary' : 'inherit'}>
      {label}
    </Button>
  );
};

export default FilterButton;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TabPanels = (props: any) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0, boxShadow: 'none' }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
export default TabPanels;

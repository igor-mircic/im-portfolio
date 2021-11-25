import { Container, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { ReactElement } from 'react';

interface Props {}

export default function PersonalDetails({}: Props): ReactElement {
  return (
    <Container maxWidth='lg' sx={{ pt: 8 }}>
      <Box component={Paper} elevation={1}>
        Personal Details
      </Box>
    </Container>
  );
}

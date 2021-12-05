import { Container } from '@mui/material';
import PersonalDetails from '../sections/PersonalDetails';
import { Skills } from '../sections/Skills';
import { Box } from '@mui/system';

export default function Index() {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          py: 2,
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            xs: 'minmax(250px, 350px)',
            md: '350px 1fr',
          },
          justifyContent: 'center',
        }}
      >
        <PersonalDetails />
        <Skills />
      </Box>
    </Container>
  );
}

import { Container } from '@mui/material';
import { Skills } from '../sections/Skills';
import { Box } from '@mui/system';
import { Projects } from '../sections/Projects';
import { PersonalDetails } from '../sections/PersonalDetails';

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
            md: '350px 1fr 1fr',
          },
          justifyContent: 'center',
        }}
      >
        <Box sx={{ gridRow: { md: 'span 2' } }}>
          <PersonalDetails />
        </Box>
        <Box sx={{ gridColumn: { md: 'span 2' } }}>
          <Skills />
        </Box>
        <Box sx={{ gridColumn: { md: 'span 2' } }}>
          <Projects />
        </Box>
      </Box>
    </Container>
  );
}

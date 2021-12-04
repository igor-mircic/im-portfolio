import { Container } from '@mui/material';
import PersonalDetails from '../sections/PersonalDetails';
import personalDetails from '../consts/personalDetails';
import { Skills } from '../sections/Skills';
import { frontEnd } from '../consts/skills';
import { Box } from '@mui/system';

export default function Index() {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          pt: 2,
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            xs: 'minmax(250px, 350px)',
            md: '350px 1fr 1fr',
          },
          justifyContent: 'center',
        }}
      >
        <PersonalDetails {...personalDetails} fullWidth={false} />
        <Skills skills={frontEnd} title='Front-end' />
        <Skills skills={frontEnd} title='Back-end' />
      </Box>
    </Container>
  );
}

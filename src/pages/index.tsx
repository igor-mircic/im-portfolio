import { Container } from '@mui/material';
import PersonalDetails from '../sections/PersonalDetails';
import personalDetails from '../consts/personalDetails';
import { Skills } from '../sections/Skills';
import skills from '../consts/skills';

export default function Index() {
  return (
    <Container
      maxWidth='lg'
      sx={{ pt: 1, display: 'flex', justifyContent: 'center' }}
    >
      {/* <PersonalDetails {...personalDetails} /> */}
      <Skills {...{ skills }} />
    </Container>
  );
}

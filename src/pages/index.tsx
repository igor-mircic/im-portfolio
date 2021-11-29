import { Container } from '@mui/material';
import PersonalDetails from '../sections/PersonalDetails';
import { personalDetails } from '../consts/personalDetails';

export default function Index() {
  return (
    <Container
      maxWidth='lg'
      sx={{ pt: 1, display: 'flex', justifyContent: 'center' }}
    >
      <PersonalDetails {...personalDetails} />
    </Container>
  );
}

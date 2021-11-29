import {
  Container,
  Paper,
  Typography,
  ListItem,
  List,
  ListItemIcon,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import profileImage from '../../public/me.jpg';

const ProfileImage = styled(Image)(({ theme }) => ({
  borderRadius: theme.spacing(2),
}));

export interface IPersonalDetails {
  name: string;
  jobTitle: string;
  mail: string;
  phone: string;
  intro: string[];
}

const PersonalDetails = ({
  name,
  jobTitle,
  mail,
  phone,
  intro,
}: IPersonalDetails) => {
  return (
    <Box
      component={Paper}
      borderRadius={3}
      elevation={2}
      padding={2}
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: '200px 1fr 1fr',
        },
        maxWidth: { xs: 350, md: 1 },
        gap: 2,
      }}
    >
      <Box sx={{ gridRow: { md: 'span 2' } }}>
        <ProfileImage src={profileImage} alt='profile picture' priority />
      </Box>
      <Box>
        <Typography variant='h5' component='div' sx={{ fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography variant='body1' component='div'>
          {jobTitle}
        </Typography>
      </Box>
      <List sx={{ justifySelf: { md: 'flex-end' } }}>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          {mail}
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          {phone}
        </ListItem>
      </List>
      <Box sx={{ gridColumn: { md: 'span 2' } }}>
        {intro.map((p, i) => (
          <Typography key={i} variant='body1' component='p' pb={1}>
            {p}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default PersonalDetails;

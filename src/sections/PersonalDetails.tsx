import { Paper, Typography, ListItem, List, ListItemIcon } from '@mui/material';
import { Box, styled } from '@mui/system';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import profileImage from '../../public/me.jpg';

interface IPersonDetails {
  name: string;
  jobTitle: string;
  mail: string;
  phone: string;
  intro: string[];
}

const personalDetails: IPersonDetails = {
  name: 'Igor Mirčić',
  jobTitle: 'Front-end developer',
  mail: 'contact@igor-mircic.com',
  phone: '(+381) 60 1300559',
  intro: [
    'Self-motivated developer, who is willing to learn and create outstanding UI applications.',
  ],
};

const ProfileImage = styled(Image)(({ theme }) => ({
  borderRadius: theme.spacing(2),
}));

const PersonalDetails = () => {
  const fullWidth = false;
  const { intro, jobTitle, mail, name, phone } = personalDetails;
  return (
    <Paper>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: fullWidth ? '240px 1fr 1fr' : '1fr',
          },
          maxWidth: { xs: 350, md: 1 },
          gap: 2,
        }}
      >
        <Box sx={{ gridRow: { md: fullWidth ? 'span 2' : 'span 1' } }}>
          <ProfileImage
            src={profileImage}
            alt='profile picture'
            width={320}
            height={320}
          />
        </Box>
        <Box>
          <Typography variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='body1' component='div'>
            {jobTitle}
          </Typography>
        </Box>
        <List sx={{ justifySelf: { md: fullWidth ? 'flex-end' : 'initial' } }}>
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
        <Box sx={{ gridColumn: { md: fullWidth ? 'span 2' : 'span 1' } }}>
          {intro.map((p, i) => (
            <Typography key={i} variant='body1' component='p' pb={1}>
              {p}
            </Typography>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default PersonalDetails;

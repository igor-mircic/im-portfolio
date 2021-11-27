import { ReactElement } from 'react';
import { Container, Paper, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import profilePic from '../../public/me.jpg';

interface Props {}

export default function PersonalDetails({}: Props): ReactElement {
  return (
    <Container component='section' maxWidth='lg' sx={{ py: 2 }}>
      <Box
        component={Paper}
        borderRadius={3}
        elevation={10}
        padding={2}
        width={320}
      >
        <Grid container spacing={2} pb={1}>
          <Grid item width='1'>
            <Box component='div' borderRadius={3} overflow='hidden'>
              <Image
                src={profilePic}
                alt='profile picture'
                layout='responsive'
              />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant='h5' component='div'>
              Igor Mirčic
            </Typography>
            <Typography variant='subtitle1' component='div'>
              Front-end developer
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' component='div'>
              contact@igor-mircic.com
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body2' component='div'>
              Self-motivated developer, who is willing to learn and create
              outstanding UI applications.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

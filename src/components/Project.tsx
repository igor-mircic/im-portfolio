import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from './Image';
import Link from '../mui/Link';

interface Props {
  thumbnail: StaticImageData;
  technologies: JSX.Element;
  title: string;
  description: string;
  demoLink: string;
  codeLink: string;
}
export const Project = (p: Props) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          lg: 'minmax(200px, 330px) minmax(200px, auto)',
        },
        gridTemplateRows: {
          md: 'auto 1fr',
        },
        maxWidth: { xs: 350, md: 1 },
        gap: 2,
      }}
    >
      <Box sx={{ gridRow: { lg: 'span 2' } }}>
        <Image
          src={p.thumbnail}
          alt={`${p.title} thumbnail`}
          layout='responsive'
          width={640}
          height={540}
        />
      </Box>
      {p.technologies}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h5' component='h5' sx={{ pb: 1 }}>
          {p.title}
        </Typography>
        <Typography variant='body2' component='p'>
          {p.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, pt: 2 }}>
          <Button component={Link} href={p.demoLink} variant='contained'>
            Demo
          </Button>
          <Button component={Link} href={p.codeLink} variant='outlined'>
            Code
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

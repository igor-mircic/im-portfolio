import { Box } from '@mui/system';
import { Project } from '../components/Project';
import restCountriesThumbnail from '../../public/rest-countries-thumbnail.jpg';
import { Paper, Typography } from '@mui/material';
import {
  MaterialUIChip,
  ReactChip,
  RESTfulAPIsChip,
  TypeScriptChip,
} from '../components/skills';

export const Projects = () => {
  return (
    <Box>
      <Box sx={{ pb: 2 }}>
        <Paper>
          <Typography component='h1' variant='h6'>
            Projects
          </Typography>
        </Paper>
      </Box>
      <Paper>
        <Box>
          <Project
            thumbnail={restCountriesThumbnail}
            technologies={
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <ReactChip />
                <TypeScriptChip />
                <MaterialUIChip />
                <RESTfulAPIsChip />
              </Box>
            }
            title='Where in world?'
            description='In this project, I worked with REST Counties API, React and MUI to create app that displays information about countries. The design is from frontendmentor.io'
            demoLink='https://rest-countries-react-im.netlify.app/'
            codeLink='https://github.com/igor-mircic/rest-countries-react'
          />
        </Box>
      </Paper>
    </Box>
  );
};

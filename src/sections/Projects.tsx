import { Box } from '@mui/system';
import { Project } from '../components/Project';
import restCountriesThumbnail from '../../public/rest-countries-thumbnail.jpg';

export const Projects = () => {
  return (
    <Box>
      <Project
        thumbnail={restCountriesThumbnail}
        technologies={['']}
        title='Where in world?'
        description=''
        demoLink=''
        codeLink=''
      />
    </Box>
  );
};

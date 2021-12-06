import { Chip, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {
  SiNextdotjs,
  SiGatsby,
  SiMaterialui,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiCss3,
  SiGit,
  SiNpm,
  SiNodedotjs,
  SiLinux,
  SiGnubash,
  SiRedux,
  SiReact,
  SiVisualstudiocode,
  SiVim,
  SiExpress,
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiFirebase,
} from 'react-icons/si';
import { GrConnect } from 'react-icons/gr';

export const Skills = () => {
  return (
    <Box>
      <Paper>
        <Typography component='h1' variant='h6' sx={{ pb: 2 }}>
          Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Chip label='React' icon={<SiReact fontSize={24} />} />
          <Chip
            label='Redux'
            icon={<Box component={SiRedux} fontSize={28} sx={{ pl: 1 }} />}
          />
          <Chip label='Next.js' icon={<SiNextdotjs fontSize={24} />} />
          <Chip label='Gatsby' icon={<SiGatsby fontSize={24} />} />
          <Chip
            label='TypeScript'
            icon={<Box component={SiTypescript} fontSize={28} sx={{ pl: 1 }} />}
          />
          <Chip
            label='JavaScript'
            icon={<Box component={SiJavascript} fontSize={28} sx={{ pl: 1 }} />}
          />
          <Chip
            label='CSS'
            icon={<Box component={SiCss3} fontSize={28} sx={{ pl: 1 }} />}
          />
          <Chip label='Sass' icon={<Box component={SiSass} fontSize={24} />} />
          <Chip
            label='Material UI'
            icon={<Box component={SiMaterialui} fontSize={30} sx={{ pl: 1 }} />}
          />
          <Chip
            label='Tailwind CSS'
            icon={
              <Box component={SiTailwindcss} fontSize={30} sx={{ pl: 1 }} />
            }
          />
          <Chip
            label='RESTful APIs'
            icon={<Box component={GrConnect} fontSize={28} sx={{ pl: 1 }} />}
          />
          <Chip
            label='GraphQL'
            icon={<Box component={SiGraphql} fontSize={24} />}
          />
          <Chip
            label='MongoDB'
            icon={<Box component={SiMongodb} fontSize={28} sx={{ pl: 1 }} />}
          />
          <Chip
            label='Firebase'
            icon={<Box component={SiFirebase} fontSize={28} sx={{ pl: 1 }} />}
          />
          <Chip
            label='Git'
            icon={<Box component={SiGit} fontSize={28} sx={{ pl: 1 }} />}
          />
          <Chip
            label='Node.js'
            icon={<Box component={SiNodedotjs} fontSize={30} sx={{ pl: 1 }} />}
          />
          <Chip
            label='NPM'
            icon={<Box component={SiNpm} fontSize={28} sx={{ pl: 1 }} />}
          />
          <Chip
            label='Express'
            icon={<Box component={SiExpress} fontSize={30} sx={{ pl: 1 }} />}
          />
          <Chip
            label='Docker'
            icon={<Box component={SiDocker} fontSize={30} sx={{ pl: 1 }} />}
          />
          <Chip
            label='Linux'
            icon={<Box component={SiLinux} fontSize={28} sx={{ pl: 1 }} />}
          />
          <Chip
            label='Bash'
            icon={<Box component={SiGnubash} fontSize={30} sx={{ pl: 1 }} />}
          />
          <Chip
            label='VS Code'
            icon={
              <Box
                component={SiVisualstudiocode}
                fontSize={30}
                sx={{ pl: 1 }}
              />
            }
          />
          <Chip
            label='VIM'
            icon={<Box component={SiVim} fontSize={30} sx={{ pl: 1 }} />}
          />
        </Box>
      </Paper>
    </Box>
  );
};

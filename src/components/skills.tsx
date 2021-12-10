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
  SiStyledcomponents,
  SiHtml5,
} from 'react-icons/si';
import { GrConnect } from 'react-icons/gr';

export const ReactChip = () => (
  <Chip label='React' icon={<SiReact fontSize={24} />} />
);
export const ReduxChip = () => (
  <Chip
    label='Redux'
    icon={<Box component={SiRedux} fontSize={28} sx={{ pl: 1 }} />}
  />
);
export const NextJSChip = () => (
  <Chip label='Next.js' icon={<SiNextdotjs fontSize={24} />} />
);
export const GatsbyChip = () => (
  <Chip label='Gatsby' icon={<SiGatsby fontSize={24} />} />
);

export const TypeScriptChip = () => (
  <Chip
    label='TypeScript'
    icon={<Box component={SiTypescript} fontSize={28} sx={{ pl: 1 }} />}
  />
);
export const JavaScriptChip = () => (
  <Chip
    label='JavaScript'
    icon={<Box component={SiJavascript} fontSize={28} sx={{ pl: 1 }} />}
  />
);

export const HTMLChip = () => (
  <Chip
    label='HTML5'
    icon={<Box component={SiHtml5} fontSize={28} sx={{ pl: 1 }} />}
  />
);

export const CSSChip = () => (
  <Chip
    label='CSS'
    icon={<Box component={SiCss3} fontSize={28} sx={{ pl: 1 }} />}
  />
);

export const SassChip = () => (
  <Chip label='Sass' icon={<Box component={SiSass} fontSize={24} />} />
);

export const MaterialUIChip = () => (
  <Chip
    label='Material UI'
    icon={<Box component={SiMaterialui} fontSize={30} sx={{ pl: 1 }} />}
  />
);

export const TailwindCSSChip = () => (
  <Chip
    label='Tailwind CSS'
    icon={<Box component={SiTailwindcss} fontSize={30} sx={{ pl: 1 }} />}
  />
);

export const StyledComponentsChip = () => (
  <Chip
    label='Styled Components'
    icon={<Box component={SiStyledcomponents} fontSize={39} sx={{ pl: 1 }} />}
  />
);

export const RESTfulAPIsChip = () => (
  <Chip
    label='RESTful APIs'
    icon={<Box component={GrConnect} fontSize={28} sx={{ pl: 1 }} />}
  />
);

export const GraphQLChip = () => (
  <Chip label='GraphQL' icon={<Box component={SiGraphql} fontSize={24} />} />
);

export const MongoDBChip = () => (
  <Chip
    label='MongoDB'
    icon={<Box component={SiMongodb} fontSize={28} sx={{ pl: 1 }} />}
  />
);

export const FirebaseChip = () => (
  <Chip
    label='Firebase'
    icon={<Box component={SiFirebase} fontSize={28} sx={{ pl: 1 }} />}
  />
);

export const GitChip = () => (
  <Chip
    label='Git'
    icon={<Box component={SiGit} fontSize={28} sx={{ pl: 1 }} />}
  />
);

export const NodeJSChip = () => (
  <Chip
    label='Node.js'
    icon={<Box component={SiNodedotjs} fontSize={30} sx={{ pl: 1 }} />}
  />
);
export const NPMChip = () => (
  <Chip
    label='NPM'
    icon={<Box component={SiNpm} fontSize={28} sx={{ pl: 1 }} />}
  />
);

export const ExpressChip = () => (
  <Chip
    label='Express'
    icon={<Box component={SiExpress} fontSize={30} sx={{ pl: 1 }} />}
  />
);

export const DockerChip = () => (
  <Chip
    label='Docker'
    icon={<Box component={SiDocker} fontSize={30} sx={{ pl: 1 }} />}
  />
);

export const LinuxChip = () => (
  <Chip
    label='Linux'
    icon={<Box component={SiLinux} fontSize={28} sx={{ pl: 1 }} />}
  />
);

export const BashChip = () => (
  <Chip
    label='Bash'
    icon={<Box component={SiGnubash} fontSize={30} sx={{ pl: 1 }} />}
  />
);

export const VSCodeChip = () => (
  <Chip
    label='VS Code'
    icon={<Box component={SiVisualstudiocode} fontSize={30} sx={{ pl: 1 }} />}
  />
);

export const VIMChip = () => (
  <Chip
    label='VIM'
    icon={<Box component={SiVim} fontSize={30} sx={{ pl: 1 }} />}
  />
);

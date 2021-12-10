import { GraphicEq } from '@mui/icons-material';
import { Chip, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {
  BashChip,
  CSSChip,
  DockerChip,
  ExpressChip,
  FirebaseChip,
  GatsbyChip,
  GitChip,
  GraphQLChip,
  HTMLChip,
  JavaScriptChip,
  LinuxChip,
  MaterialUIChip,
  MongoDBChip,
  NextJSChip,
  NodeJSChip,
  NPMChip,
  ReactChip,
  ReduxChip,
  RESTfulAPIsChip,
  SassChip,
  StyledComponentsChip,
  TailwindCSSChip,
  TypeScriptChip,
  VIMChip,
  VSCodeChip,
} from '../components/skills';

export const Skills = () => {
  return (
    <Box>
      <Paper>
        <Typography component='h1' variant='h6' sx={{ pb: 2 }}>
          Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <ReactChip />
          <ReduxChip />
          <NextJSChip />
          <GatsbyChip />
          <JavaScriptChip />
          <TypeScriptChip />
          <HTMLChip />
          <CSSChip />
          <SassChip />
          <MaterialUIChip />
          <TailwindCSSChip />
          <StyledComponentsChip />
          <RESTfulAPIsChip />
          <GraphQLChip />
          <MongoDBChip />
          <FirebaseChip />
          <GitChip />
          <NodeJSChip />
          <NPMChip />
          <ExpressChip />
          <DockerChip />
          <LinuxChip />
          <BashChip />
          <VSCodeChip />
          <VIMChip />
        </Box>
      </Paper>
    </Box>
  );
};

import { LinearProgress, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

export interface ISkill {
  name: string;
  rating: number;
}

interface Props {
  title: string;
  skills: ISkill[];
}

export const Skills = ({ skills, title }: Props) => {
  return (
    <Box>
      <Paper>
        <Typography component='h1' variant='h6' sx={{ pb: 1 }}>
          {title}
        </Typography>
        {skills.map((s) => (
          <Box key={s.name} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography component='span' variant='body2' sx={{ minWidth: 115 }}>
              {s.name}
            </Typography>
            <LinearProgress
              sx={{ height: 8, width: 1, borderRadius: 2 }}
              variant='determinate'
              value={s.rating}
            />
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

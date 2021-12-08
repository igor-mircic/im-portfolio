import { styled } from '@mui/system';
import nextImage from 'next/image';

const Image = styled(nextImage)(({ theme }) => ({
  borderRadius: theme.spacing(2),
}));

export default Image;

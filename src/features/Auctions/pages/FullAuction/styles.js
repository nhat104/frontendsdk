import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gridGap: '60px',
  },
  root: {
    margin: '0 120px',
  },
});
export { useStyles };
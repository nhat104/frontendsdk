import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    content: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gridGap: '48px 20px',
    },
    root: {
        margin: '0 50px',
      },
  });
  
export { useStyles };

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    minHeight: '100px',
    border: '1px dashed #888',
    borderRadius: 10,
    margin: '0 0 20px',
  },

  container: {
    margin: '15px 30px 15px 15px',
  },

  info: {
    display: 'flex',
    cursor: 'pointer',

    '& img': {
      width: '60px',
      height: '60px',
      backgroundColor: '#fff',
      border: '1px dashed #222',
      marginRight: '20px',
    },

    '& p': {
      margin: '4px 0 0',
      fontSize: '18px',
      lineHeight: 1.2,
    },
  },

  tokenId: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '12px 0',
  },
});

export { useStyles };

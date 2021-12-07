import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    minHeight: '160px',
    border: '1px dashed #888',
    fontSize: '18px',
    borderRadius: 10,
  },

  container: {
    margin: '15px 15px 15px 30px',
  },

  info: {
    display: 'flex',
    cursor: 'pointer',

    '& img': {
      width: '70px',
      height: '70px',
      backgroundColor: '#fff',
      border: '1px dashed #222',
      marginRight: '20px',
    },

    '& p': {
      margin: '0 0 2px',
      fontSize: '20px',
      lineHeight: 1.2,
    },
  },

  tokenId: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px 0',
  },

  player: {
    display: 'flex',
    alignItems: 'center',

    '& img': {
      width: '22px',
      marginRight: '5px',
    },
  },

  trade: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  },
});

export { useStyles };

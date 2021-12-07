import { makeStyles } from '@mui/styles';

const imgHeight = '186px';

const useStyles = makeStyles({
  container: {
    minWidth: '800px',
    minHeight: '400px',
    display: 'flex',
    margin: '80px 60px 40px',
    gap: '30px',
    fontSize: '20px',
  },

  _1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '240px',
  },

  _11: {
    height: `${imgHeight}`,
    border: '1px dashed #222',
  },

  _12: {
    height: `${imgHeight}`,
    border: '1px dashed #222',
    borderRadius: 10,

    '& p': {
      margin: 0,
      lineHeight: 1.3,
      marginLeft: '20px',
    },
  },

  player: {
    display: 'flex',
    alignItems: 'center',
    margin: '15px 20px 10px',

    '& img': {
      width: '22px',
      marginRight: '10px',
    },
  },

  _2: {
    minWidth: '600px',
    minHeight: '400px',
    border: '1px dashed #222',
    display: 'block',
    borderRadius: 10,
  },

  _2Container: {
    margin: '15px 25px 10px',

    '& div': {
      margin: '3px 0',

      '& span': {
        display: 'inline-block',
        width: '150px',
      },
    },

    '& > span': {
      width: '80px',
      backgroundColor: '#289df9',
      color: '#fff',
      borderRadius: 5,
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 1.5,
      marginTop: '12px',
    },
  },

  _2Desc: {
    width: '100%',
    height: '120px',
    border: '1px dashed #222',
    borderRadius: 10,
    cursor: 'pointer',
  },

  btn: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '3px',

    '& div': {
      display: 'flex',
      gap: '10px',
    },
  },
});

export { useStyles };

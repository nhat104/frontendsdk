import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: '50px',
    maxWidth: '800px',
    margin: '20px auto 30px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    border: '1px solid #000',
    borderRadius: 15,
    overflow: 'hidden',
    cursor: 'pointer',

    '& div': {
      '&:nth-child(1), &:nth-child(2)': {
        borderRight: '1px solid #000',
      },
    },
  },

  link: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 600,
    textDecoration: 'none',
    color: '#000',
    all: 'unset',
    height: '100%',
  },
});

export { useStyles };

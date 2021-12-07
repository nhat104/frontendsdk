import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      minHeight: '160px',
      border: '1px dashed #888',
      borderRadius: 10,
      fontSize: '18px',
  
      '& > p': {
        textAlign: 'center',
        margin: '10px 0',
      },
    },
  
    container: {
      margin: '0px 30px 15px 15px',
    },
  
    comboItem: {
      maxHeight: '290px',
      overflow: 'auto',
    },
  
    player: {
      display: 'flex',
      alignItems: 'center',
  
      '& img': {
        width: '22px',
        marginRight: '15px',
      },
    },
  
    trade: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
  
      '& button': {
        marginTop: '15px',
      },
    },
  });

export { useStyles };
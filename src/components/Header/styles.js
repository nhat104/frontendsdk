import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontSize: '18px',
    justifyContent: 'flex-end',
    margin: '20px 70px 20px',
    height: '26px',
    gap: '30px',
    cursor: 'default',
  },

  playerId: {
    fontSize: '20px',
    lineHeight: '26px',
  },

  coin: {
    fontWeight: 600,
    border: '1px solid #000',

    '& span': {
      padding: '0 8px',
    }
  },

  dollar: {
    fontWeight: 600,
    height: '26px',
    border: '1px solid #000',
    textAlign: 'center',
  },

  net: {
    fontSize: '16px',
    fontStyle: 'italic',
  },

  login: {
    color: '#0fc4edde',
    cursor:' pointer',
    fontSize: '20px',
    width: '65px',
  }
})

export { useStyles };
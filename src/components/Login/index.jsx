import { Backdrop, Button, CircularProgress } from '@mui/material';
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accountLogin } from '../../constants/global';
import { loginRequest } from './Slice';

export default function Login() {
  const { loadingLogin, errorLogin } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(loginRequest(accountLogin));
  }, [dispatch]);

  const onClickLogin = () => {
    dispatch(loginRequest(accountLogin));
  };

  return (
    <div>
      <Backdrop
        sx={{ bgcolor: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        {loadingLogin && (
          <>
            <CircularProgress size={50} value={0} />
            <p
              style={{
                color: '#1976d2',
                fontSize: '30px',
                fontWeight: 500,
                marginLeft: '20px',
              }}
            >
              Signing in
            </p>
          </>
        )}
        {errorLogin && (
          <Button
            type="submit"
            variant="contained"
            size="large"
            onClick={onClickLogin}
          >
            Login
          </Button>
        )}
      </Backdrop>
    </div>
  );
}

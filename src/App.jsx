import { CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import UnderLogic from './UnderLogic';
import Header from './components/Header';
import Login from './components/Login';
import TaskBar from './components/TaskBar';
import AuctionPage from './features/Auctions/pages/Auction';
import FullAuctionItemPage from './features/Auctions/pages/FullAuction';
import MintItem from './features/Items/pages/MintItem';
import MyItemPage from './features/Items/pages/MyItem';
import SellPage from './features/Items/pages/SellItem';
import { TYPE_ROUTE } from './constants/global';

const useStyles = makeStyles({
  root: {},
});

const AuthRoute = (props) => {
  const { type, children } = props;

  if (type === TYPE_ROUTE.GUEST && !!localStorage.getItem('user')) {
    return <Navigate to="/ListSellItem" />;
  } else if (type === TYPE_ROUTE.PRIVATE && !localStorage.getItem('user')) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <Header />
        <TaskBar />
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute type={TYPE_ROUTE.GUEST}>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/ListAuction"
            element={
              <AuthRoute type={TYPE_ROUTE.PRIVATE}>
                <AuctionPage />
              </AuthRoute>
            }
          />
          <Route
            type={TYPE_ROUTE.PRIVATE}
            path="/ListSellItem"
            element={
              <AuthRoute type={TYPE_ROUTE.PRIVATE}>
                <SellPage />{' '}
              </AuthRoute>
            }
          />
          <Route
            type={TYPE_ROUTE.PRIVATE}
            path="/ListMyItem"
            element={
              <AuthRoute type={TYPE_ROUTE.PRIVATE}>
                <MyItemPage />{' '}
              </AuthRoute>
            }
          />
          <Route
            type={TYPE_ROUTE.PRIVATE}
            path="/ListFullAuction"
            element={
              <AuthRoute type={TYPE_ROUTE.PRIVATE}>
                <FullAuctionItemPage />
              </AuthRoute>
            }
          />
          <Route
            type={TYPE_ROUTE.PRIVATE}
            path="/CreateItem"
            element={
              <AuthRoute type={TYPE_ROUTE.PRIVATE}>
                <MintItem />
              </AuthRoute>
            }
          />
        </Routes>
      </Router>
      <UnderLogic />
    </div>
  );
}

export default App;

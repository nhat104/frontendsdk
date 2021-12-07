import React, { useState, useEffect } from 'react';
import {
  TextField,
  Autocomplete,
  IconButton,
  Container,
  Grid,
  Stack,
  Box,
  CircularProgress,
  Alert,
  Snackbar,
  Backdrop,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import {
  uploadImageRequest,
  createItemRequest,
  updateLinkImage,
  saveDataToCreate,
} from './Slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryRequest,
  getGameRequest,
} from '../../components/Category/Slice';
import { useEthers } from '@usedapp/core';
import {
  useMarketItemContractMethod,
  marketItemContract,
} from '../../../../smartcontracts';
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';
import { Pause, SettingsSystemDaydreamTwoTone } from '@mui/icons-material';

MintItem.prototype = {};

function MintItem(props) {
  const {
    loadingImageUpload,
    dataImage,
    dataImageResponse,
    dataCreateItem,
    errorImageUpload,
    loadingCreateItem,
    createItemSuccess,
    errorCreateItem,
  } = useSelector((state) => state.mint);
  const listCategory = useSelector((state) => state.category.dataCategory);
  const listGame = useSelector((state) => state.category.dataGame);
  const loadingGame = useSelector((state) => state.category.loadingGame);
  const loadingCategory = useSelector(
    (state) => state.category.loadingCategory
  );
  const [textError, setTextError] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openListGame, setOpenListGame] = useState(false);
  const [openListCategory, setOpenListCategory] = useState(false);
  const [nameGame, setNameGame] = useState('');
  const client = create('https://ipfs.infura.io:5001/api/v0');
  const [securityCode, setSecurityCode] = useState('');
  const [urlIpfs, setUrlIpfs] = useState('');
  const [dataUpload, setDataUpload] = useState();
  const [tokenId, setTokenId] = useState('');
  const [loadingMintSC, setLoadingMintSC] = useState(false);
  const { account } = useEthers();
  const dispatch = useDispatch();

  // Lấy security_code
  useEffect(() => {
    const find = dataImageResponse.hasOwnProperty('results');
    if (find) {
      const security_code = dataImageResponse.results.security_code;
      setSecurityCode(security_code);
      console.log('security code', security_code);
    }
  }, [dataImageResponse]);

  //handle error
  useEffect(() => {
    if (errorImageUpload) {
      setTextError('This is an error upload image. Please try again!');
    } else if (errorCreateItem) {
      setTextError('This is an error create item. Please try again!');
    } else {
      setTextError('');
    }
  }, [errorImageUpload, errorCreateItem]);

  // useEffect(() => {
  //   if (tokenId !== '') {
  //     console.log('data', dataUpload);
  //     if (setNewItemSmartContractState.status !== 'Null') {
  //       const newPayload = {
  //         ...dataUpload,
  //         owner: account,
  //         token_of_eth: tokenId,
  //       };
  //       console.log(newPayload);
  //       dispatch(createItemRequest(newPayload));
  //       setLoadingMintSC(false);

  //       dispatch(updateLinkImage(''));
  //     }
  //   }
  // }, [tokenId]);
  // /** etherjs */
  const { state: setNewItemSmartContractState, send: setNewItemSmartContract } =
    useMarketItemContractMethod('addNewItem');
  // marketItemContract.once('TransferSingle', (operator, from, to, id, value) => {
  //   setTokenId(`${id}`);
  // });

  //create item
  const handleSubmit = async (event) => {
    setLoadingMintSC(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!dataImage.linkImage) {
      setTextError('Please upload image Item!');
    } else {
      const category = data.get('category');
      const categoryOj = listCategory.find((item) => item.name === category);

      const payload = {
        name: data.get('ItemName'),
        sub_category: categoryOj.id,
        item_id_of_game: data.get('ItemID'),
        image_url: urlIpfs,
        external_url: urlIpfs,
        quantity: data.get('Amount'),
        description: data.get('Description'),
      };
      setDataUpload(payload);
      dispatch(saveDataToCreate(payload));
      if (dataImageResponse.hasOwnProperty('results')) {
        setNewItemSmartContract(
          account,
          payload.quantity, //amount
          '0x01',
          payload.item_id_of_game, // itemId
          true,
          urlIpfs, // url ipfs
          securityCode, // security_code
          false,
          { value: ethers.utils.parseEther('0.005') }
        );
      }
    }
  };

  //create item success
  useEffect(() => {
    if (createItemSuccess) {
      setOpenSuccess(true);
    }
  }, [createItemSuccess]);

  //upload image
  const onAddImage = (event) => {
    // chop the image into smaller chunks
    const fileData = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(fileData);
    reader.onloadend = async () => {
      try {
        const created = await client.add(Buffer(reader.result));
        const url = `https://ipfs.infura.io/ipfs/${created.path}`;
        setUrlIpfs(url);
        console.log(url);
      } catch (error) {
        console.log(error.message);
      }
    };

    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('name', event.target.files[0].name);
    const payload = {
      file: data,
      linkImage: URL.createObjectURL(event.target.files[0]),
    };
    console.log('payload', payload);
    dispatch(uploadImageRequest(payload));
  };

  // get list game and list category with id
  const handleOpenListGame = () => {
    setOpenListGame(true);
    dispatch(getGameRequest());
  };

  const handleOpenListCategory = () => {
    if (listGame.length) {
      const game = listGame.find((item) => item.name === nameGame);
      const body = {
        category_id: game.id,
      };
      setOpenListCategory(true);
      dispatch(getCategoryRequest(body));
    }
  };

  return (
    <Container component="main">
      {textError && (
        <Alert
          severity="error"
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {textError}
        </Alert>
      )}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Stack>
            {loadingImageUpload ? (
              <LoadingLayout>
                <CircularProgress size={50} value={0} />
              </LoadingLayout>
            ) : (
              <img
                style={{ objectFit: 'contain', height: 460 }}
                src={
                  dataImage.linkImage
                    ? dataImage.linkImage
                    : 'https://vanhiep.net/assets/img/no-image-icon-11.png'
                }
                alt=""
              />
            )}

            <Box component="span">
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  onChange={onAddImage}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Box component="form" onSubmit={handleSubmit}>
            <Autocomplete
              disablePortal
              id="gameType"
              options={listGame.map(function (item) {
                return item.name;
              })}
              value={nameGame}
              onChange={(event, newValue) => {
                setNameGame(newValue);
              }}
              open={openListGame}
              loading={loadingGame}
              onOpen={handleOpenListGame}
              onClose={() => setOpenListGame(false)}
              sx={{ mt: 1, mb: 1 }}
              renderInput={(params) => (
                <TextField
                  name="gameType"
                  required
                  {...params}
                  label="Game"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loadingGame ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
            <Autocomplete
              disablePortal
              id="category"
              open={openListCategory}
              loading={loadingCategory}
              onOpen={handleOpenListCategory}
              onClose={() => setOpenListCategory(false)}
              options={listCategory.map(function (item) {
                return item.name;
              })}
              sx={{ mt: 1, mb: 1 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="category"
                  required
                  label="Category"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loadingCategory ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="itemname"
              label="Item name"
              name="ItemName"
              sx={{ mt: 1, mb: 1 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="Item id"
              name="ItemID"
              sx={{ mt: 1, mb: 1 }}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
            <TextField
              margin="normal"
              sx={{ mt: 1, mb: 1 }}
              required
              fullWidth
              id="amount"
              label="Amount"
              name="Amount"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
            <TextField
              sx={{ mt: 1, mb: 1 }}
              required
              fullWidth
              id="description"
              label="Description"
              name="Description"
              multiline
              maxRows={4}
            />
            <LoadingButton
              type="submit"
              loading={loadingCreateItem}
              fullWidth
              loadingPosition="start"
              variant="contained"
              startIcon={<React.Fragment />}
              sx={{ mt: 3, mb: 2 }}
              id="mint"
            >
              Mint
            </LoadingButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
export default MintItem;

const Input = styled('input')({
  display: 'none',
});

const LoadingLayout = styled('div')({
  display: 'flex',
  width: '100%',
  height: 460,
  justifyContent: 'center',
  alignItems: 'center',
});

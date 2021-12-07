import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import {
  useContractFunction,
  useContractCall,
  useContractCalls,
} from '@usedapp/core';
import marketItemAbi from '../abi/MarketItem.json';
import { marketItemAddress } from '../contracts';
let marketItemContract;
if (typeof window.ethereum !== 'undefined') {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner()

  const marketItemInterface = new ethers.utils.Interface(marketItemAbi);
  marketItemContract = new Contract(marketItemAddress, marketItemInterface, signer);
}


export function useMarketItemContractMethod(methodName) {
  const { state, send } = useContractFunction(
    marketItemContract,
    methodName,
    {}
  );
  return { state, send };
}
export { marketItemContract };

/*export function useMarketItemReturnValue(methodName, param) {
  const [data] =
    useContractCall({
      abi: marketItemInterface,
      address: marketItemAddress,
      method: methodName,
      args: param,
    }) ?? [];
  return data;
}*/
// export function GetAllItem(listItem) {
//   return useContractCalls(
//     listItem.map((item) => ({
//       abi: marketItemInterface,
//       address: marketItemAddress,
//       method: 'getItemDetail',
//       args: [item.token_of_eth],
//     }))
//   );
// }

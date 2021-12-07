import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractFunction, useContractCall, useContractCalls } from "@usedapp/core";
import transactionAbi from "../abi/Transaction.json";
import { transactionAddress } from "../contracts";

let transactionContract;
if (typeof window.ethereum !== 'undefined') {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner()
  
  const transactionInterface = new ethers.utils.Interface(transactionAbi);
  transactionContract = new Contract(transactionAddress, transactionInterface, signer);
}


export function useTransactionContractMethod(methodName) {
    const { state, send } = useContractFunction(transactionContract, methodName, {});
    return { state, send };
}
export {transactionContract}; 

/*export function useTransactionReturnValue(methodName, param) {
    const [data] = useContractCall({
      abi: transactionAddress,
      address: transactionContract,
      method: methodName,
      args: param,
    }) ?? [];
    return data;
};*/
export function GetAllSellItem(listItem) {
  return useContractCalls(
    listItem.map((item) => ({
      abi: transactionAddress,
      address: transactionContract,
      method: "getTransactionDetail",
      args: [item.token_of_eth],
    }))
  );
};

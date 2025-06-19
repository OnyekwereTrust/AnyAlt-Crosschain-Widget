import React from "react";
import {
  AnyaltWidget,
  ChainType,
  useModal,
} from "@anyalt/widget";

import "@solana/wallet-adapter-react-ui/styles.css";
import "@rainbow-me/rainbowkit/styles.css";

const apiKey = import.meta.env.VITE_API_KEY;

const Widget = () => {
  // useModal hook provides control over the widget’s modal state
  const { isOpen, onOpen, onClose } = useModal();

  // Define a callback to estimate transaction details before execution
  const estimateCallback = async (token) => {
    // Implement estimation logic here
    return {
      amountOut: "123.45",
      priceInUSD: "567",
    };
  };

  // Define a callback to execute the last-mile transaction
  const executeCallBack = async (token) => {
    // Implement execution logic here
    return {
      approvalTxHash: "0x123",
      executeTxHash: "0x123",
      amountOut: "123.45",
    };
  };

  return (
    <>
      <button onClick={onOpen}>Open</button>
      <AnyaltWidget
        inputToken={{
          symbol: "UCBI",
          address: "0x2adba23cf1252de095aced801e758b369ec10426",
          chainId: 1,
          name: "UCBI",
          chainType: ChainType.EVM,
          logoUrl: "https://example.com/static/logo-only.svg",
        }}
    
        apiKey={apiKey}
        widgetTemplate={'TOKEN_BUY'}
        isOpen={isOpen}
        onClose={onClose}
        estimateCallback={estimateCallback}
        executeCallBack={executeCallBack}
        minDepositAmount={0}
      />
    </>
  );
};

export default Widget;
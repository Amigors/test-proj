import { FC, useEffect, useState } from "react";
import { Card } from "./card";

import { useGetData } from "../hooks/useGetData";
import type { Transaction } from "../types";

const LIMIT = 5;

export const CardList: FC = () => {
  const [from, setFrom] = useState(Date.now());
  const [data, error] = useGetData<Transaction[]>(
    `https://awesome-bank.xyz/api/transactions?from=${from}&limit=${LIMIT}`,
  );
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const refreshPage = () => {
    window.location.reload()
  }

  const handleClick = () =>
    setFrom(transactions[transactions.length - 1].createdDate);

  useEffect(() => {
    if (data) setTransactions((prevData) => [...prevData, ...data]);
  }, [data]);

  return (
    <div className="card-list">
      {error ? (
        <>
          <p>We are sorry: {error.reason}</p>
          <button onClick={refreshPage}>Reload page</button>
        </>

      ) : (
        transactions.length > 0 &&
        transactions.map((transaction) => (
          <Card key={transaction.id} transaction={transaction} />
        ))
      )}
      {data && data.length > 0 && (
        <button onClick={handleClick}>Load more</button>
      )}
    </div>
  );
};

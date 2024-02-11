import { FC } from "react";
import { Transaction } from "../types";

interface CardProps {
  transaction: Transaction;
}

export const Card: FC<CardProps> = ({ transaction }) => {
  const formattedDate = new Date(transaction.createdDate).toLocaleString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  );

  return (
    <div className="card">
      <div className="card-meta">
        <div>{transaction.description}</div>
        <div style={{ fontSize: "0.8rem" }}>{formattedDate}</div>
      </div>
      <div className="card-meta">
        <div className="card-meta--amount">
          <div>{transaction.amount}</div>
          <div>{transaction.currency}</div>
        </div>
        <div
          style={{ color: transaction.state === "COMPLETED" ? "green" : "red" }}
        >
          {transaction.state}
        </div>
      </div>
    </div>
  );
};

import { FC } from "react";
import { CardList } from "./components/cardList";
import { useGetData } from "./hooks/useGetData";
import type { User, Transaction } from "./types";

import "./styles.css";

export const App: FC = () => {
  const [user] = useGetData<User>("https://awesome-bank.xyz/api/user");

  return (
    <div className="App">
      <h1>Awesome Bank</h1>
      {user && (
        <h2>
          Hello, {user.firstName} {user.lastName}!
        </h2>
      )}
      <div className="trans-container">
        <h3>List of transactions</h3>
        <CardList />
      </div>
    </div>
  );
};

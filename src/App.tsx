import { useFetchUserData } from "./hooks/useFetchUserData";
import { useFetchTrans } from "./hooks/useFetchTrans";
import { CardItem } from "./components/CardItem";

export default function App() {
  const user = useFetchUserData();
  const transactions = useFetchTrans();
  console.log("user", user);
  console.log("transactions", transactions);

  return (
    <div className="App">
      <h1>Awesome Bank</h1>
      {user && (
        <h2>
          Hello, {user.firstName} {user.lastName}!
        </h2>
      )}
      {transactions && transactions.map((item) => {
        return <CardItem info={item} key={item.id} />;
      })}
    </div>
  );
}

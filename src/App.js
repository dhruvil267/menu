import Item from "./components/Item/item";
import styles from "./App.module.css";
import Data from "./services/Data"; // Adjust the import path

function App() {
  const itemInstance = new Data();
  const menuItems = itemInstance.menuItems();

  return (
    <div className="App">
      <div className={styles.appContainer}>
        {menuItems.map((item) => (
          <Item name={item.name} subdetails={item.subdetails} />
        ))}
      </div>
    </div>
  );
}

export default App;

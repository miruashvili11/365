import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import AsideBar from "./Components/Aside/AsideBar";
import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import Profile from "./Pages/Profile";
import Dashbord from "./Pages/Dashbord";
import Inventory from "./Pages/Inventory";
import Orders from "./Pages/Orders";
import Transactions from "./Pages/Transactions";
import Stores from "./Pages/Stores";
import Cart from "./Pages/Cart";
import Home from './Components/Home/Home'
import AddProduct from "./Components/Main/AddProduct";

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

    const sellectAllProducts = () => {
        setSelectedItems(data.map((product) => product.id));
    };
    const unselectAll = () => {
        setSelectedItems([])
    }

    const token = localStorage.getItem('token')

  return (
      <Router>
          {token && <Sidebar />}
          <Switch>
              <Route exact path='/'>
                  <Redirect to='/' />
                  <Home />
              </Route>
              <Route path={'/Profile'}>
                  < Profile/>
              </Route>
              <Route path={'/DASHBOARD'}>
                  < Dashbord/>
              </Route>
              <Route path={'/Inventory'}>
                  < Inventory
                      selectedItems={selectedItems}
                  />
              </Route>
              <Route path={'/SHOPPING'}>
                  < Cart />
              </Route>
              <Route path={'/ORDERS'}>
                  < Orders />
              </Route>
              <Route path={'/addProduct/:productId?'}>
                  <AddProduct />
              </Route>
              <Route path={'/TRANSACTION'}>
                  < Transactions />
              </Route>
              <Route path={'/STORES'}>
                  < Stores />
              </Route>ა
              <Route path={'/catalog'}>
                  <div className="content">
                    <AsideBar setData={setData} />
                      <Header
                          data={data}
                          setData={setData}
                          searchQuery={searchQuery}
                          setSearchQuery={setSearchQuery}
                          selectedItems={selectedItems}
                          sellectAllProducts={sellectAllProducts}
                          unselectAll={unselectAll}
                      />
                      <Main
                          data={data}
                          setData={setData}
                          selectedItems={selectedItems}
                          setSelectedItems={setSelectedItems}
                      />
                  </div>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;

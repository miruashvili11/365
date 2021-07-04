
import Logo from './Logo.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SpeedIcon from '@material-ui/icons/Speed';
import ListIcon from '@material-ui/icons/List';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import EditIcon from '@material-ui/icons/Edit';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className={"nav"}>
      <nav className={"nav__container"}>
        <div>
          <Link to='/login'>
            <img src={Logo} className={"dropshipLogo"} alt={"logo"}/>
          </Link>  
          <div className={"nav__list"}>
            <div className={"nav__items"}>
                <Link to={'/Profile'}>
                    <AccountCircleIcon titleAccess={'MY PROFILE'} className={'SidebarIcon__list'} />
                </Link>
                <Link to={'/DASHBOARD'}>
                    <SpeedIcon titleAccess={'DASHBOARD'} className={'SidebarIcon__list'} />
                </Link>
                <Link to={'/catalog'}>
                    <ListIcon titleAccess={'products'} className={'SidebarIcon__list active'} />
                </Link>
                <Link to={'/Inventory'}>
                    <AllInboxIcon titleAccess={'Inventory'} className={'SidebarIcon__list'} />
                </Link>
                <Link to={'/SHOPPING'}>
                    <ShoppingCartIcon titleAccess={'SHOPPING CART'} className={'SidebarIcon__list'} />
                </Link>
                <Link to={'/ORDERS'}>
                    <AssignmentTurnedInIcon titleAccess={'ORDERS'} className={'SidebarIcon__list'} />
                </Link>
                <Link to={'/TRANSACTION'}>
                    <SwapHorizontalCircleIcon titleAccess={'TRANSACTION LOG'} className={'SidebarIcon__list'} />
                </Link>
                <Link to={'/STORES'}>
                    <AssignmentIcon titleAccess={'STORES LIST'} className={'SidebarIcon__list'} />
                </Link>
                <Link to={'/addProduct'}>
                    <EditIcon titleAccess={'STORES LIST'} className={'SidebarIcon__list'}/>
                </Link>
            </div>
          </div>
        </div>
      </nav>

    </div>

  );
};

export default Sidebar;

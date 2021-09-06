import { Avatar, IconButton } from "@material-ui/core";
import {
  Search,
  Home,
  Flag,
  SubscriptionsOutlined,
  StorefrontOutlined,
  SupervisedUserCircle,
  Add,
  Forum,
  NotificationsActive,
  ExpandMore,
} from "@material-ui/icons";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png"
          alt=""
        />
      </div>
      <div className="header__input">
        <Search />
        <input type="text" name="" placeholder="Search Facebook" id="" />
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Flag fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info"></div>
        <Avatar />
        <h4>Erardo</h4>
      </div>
      <IconButton>
        <Add />
      </IconButton>

      <IconButton>
        <Forum />
      </IconButton>

      <IconButton>
        <NotificationsActive />
      </IconButton>

      <IconButton>
        <ExpandMore />
      </IconButton>
    </div>
  );
};

export default Header;

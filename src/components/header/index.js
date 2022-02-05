import HeaderWrapper from "./HeaderWrapper";
import Button from "../button/Button";
import UserDropdown from "../userdropdown";
import SearchInput from "../input";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HeaderWrapper className="d-flex align-items-center justify-content-between">
      <a className="logo-link" href="#">
        CodePen
      </a>
      <SearchInput />
      <div className="d-flex align-items-center">
        <UserDropdown />
        <Link to="/signUp">
          <Button className="ms-4">Register</Button>
        </Link>
        <Link to="/signIn">
          <Button className="ms-4">Sign In</Button>
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

import HeaderWrapper from "./HeaderWrapper";
import Button from "../button/Button";
import UserDropdown from "../userdropdown";
import SearchInput from "../input";
const Header = () => {
  return ( 
    <HeaderWrapper className="d-flex align-items-center justify-content-between">
      <a className="logo-link" href="#">CodePen</a>
      <SearchInput />
      <div className="d-flex align-items-center">
        <UserDropdown/>
        <Button className="ms-4">Register</Button>
        <Button className="ms-4">Sign up</Button>
      </div>
    </HeaderWrapper>
   );
}
 
export default Header;
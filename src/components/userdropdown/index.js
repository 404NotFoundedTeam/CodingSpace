import { Dropdown } from "bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate,faSuitcase, faUserCog } from '@fortawesome/free-solid-svg-icons'

const DropdownButtonWrapper = styled.div`
  display: block;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  a:hover ul {
    visibility: visible;
    top: 35px;
    transition: 300ms;
  }
  ul {
    background: rgba(21, 50, 52, 0.4);
border-radius: 3px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(2.8px);
-webkit-backdrop-filter: blur(2.8px);
border: 1px solid rgba(21, 50, 52, 0.21);
z-index: 10;
    padding: 5px 20px;
    border-radius: 3px;
    margin-top: 5px;
    top: 30px;
    right: 10%;
    visibility: collapse;
    a {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      text-decoration: none;
      transition: 0ms;
    }
  }
`

const UserDropdown = () => {
  return (
    <DropdownButtonWrapper className="position-relative">
      <a href="#">
        <img src="https://image.shutterstock.com/mosaic_250/2780032/1714666150/stock-photo-head-shot-portrait-close-up-smiling-confident-businessman-wearing-glasses-looking-at-camera-1714666150.jpg" alt="" />
        <ul className="dropdown list-unstyled position-absolute">
          <li><a href="#"><FontAwesomeIcon icon={faSuitcase} /> Work</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faCertificate} /> Collection</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faUserCog} /> Profile</a></li>
        </ul>
      </a>
    </DropdownButtonWrapper>
  );
}

export default UserDropdown;

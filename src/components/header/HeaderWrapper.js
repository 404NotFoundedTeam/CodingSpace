import styled from "styled-components";

const HeaderWrapper = styled.div`
  padding: 10px 20px;
  color: #9696a5;
  .logo-link {
    text-decoration: none;
    font-size: 32px;
    color: white;
  }
  a {
    color: #9696a5;
    transition: 0.3s;
    &:hover {
      color: #3de8e7;
    }
  }
`;

export default HeaderWrapper;

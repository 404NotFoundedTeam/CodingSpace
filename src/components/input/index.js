import styled from "styled-components";

const InputSearchDeasign = styled.input`
  padding: 8px 15px;
  border-radius: 3px;
  background: rgba(21, 50, 52, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.8px);
  -webkit-backdrop-filter: blur(2.8px);
  border: 1px solid rgba(21, 50, 52, 0.21);
  color: #9696a5;
  border: none;
  outline: none;
  width: 50%;
`

const SearchInput = () => {
  return (
    <InputSearchDeasign type="text" placeholder="Search" />
  );
}

export default SearchInput;
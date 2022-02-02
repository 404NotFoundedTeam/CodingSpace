import styled from 'styled-components';

const Button = styled.button`
    padding: 8px 24px;
    background: rgba(21, 50, 52, 0.4);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(2.8px);
-webkit-backdrop-filter: blur(2.8px);
border: 1px solid rgba(21, 50, 52, 0.21);
    border-radius: 3px;
    transition: filter .3s ease;
    color: white;
    outline: none;
    border: none;
    transition: 0.4s;
    &:hover {
        background: rgba(21, 50, 52, 0.8);
        color: #3de8e7;
    }
`

export default Button
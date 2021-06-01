import styled from 'styled-components';

const Input = styled.input`
    display: block;
    width: 60%;
    margin: 1rem 0.5rem;
    padding: 0.5rem 1rem;
    outline: none;
    color: #6a5a6b;

    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 20px;

    font-size: 1.2rem;
  
    &:focus {
        border-color: rgba(125, 120, 246, 0.5) !important;
        border-radius: 20px !important;
    }
`;

export default Input;
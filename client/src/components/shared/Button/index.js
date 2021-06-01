import styled from 'styled-components';

const Button = styled.button`
    display: block;
    margin: 1rem 0.5rem;
    padding-top: 0.5rem;
    outlines: none;
    background-color: transparent;
    cursor: pointer;

    border: 2px solid transparent;
    transition: 0.3s;
    border-radius: 5px;
    color: #7d78f6;
    
    font-size: 1.5rem;

    &:hover {
        border-color: #7d78f6;
    }
`;

export default Button;
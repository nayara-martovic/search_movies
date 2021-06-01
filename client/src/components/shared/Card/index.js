import styled from 'styled-components';

import img from '../../../assets/images/image.jpg';

const Card = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 1rem;
    margin: 0 1rem;
    background-color: white;
    border-radius: 10px;
    width: inherit;
    height: inherit;
    overflow: hidden;
    box-shadow: 0 0px 8px 0 rgba(0,0,0,0.02);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    }

    &.v100 {
        height: 100%;
    }

    &.w100 {
        width: 100%;
    } 
    
    &.card-primary {
        background: #7D78F6 url(${img}) no-repeat center;
        background-size: auto;
        color: white;
    }

    .mb-2 {
        margin-bottom: 2rem !important;
    }

    .title {
        font-size: 1.2rem;
        margin-top: 0;
        margin-bottom: 0.4rem;
        font-weight: normal;
    }

    .subtitle {
        font-size: 0.8rem;
        margin: 0;
        margin-bottom: 0.5rem;
        font-weight: normal;
    }
`;

export default Card;
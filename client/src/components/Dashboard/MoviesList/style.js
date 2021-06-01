import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin: 0;
    padding: 0;
`;

export const ListItem = styled.li`
    display: flex;
    padding: 0.8rem 0.5rem;

    .year {
        display: block;
        padding: 0.5em 0.3em;
        width: 50px;
        margin: 0;
        border-radius: 6px;
        background-color: #eff4fe;
        font-size: 1.4rem;
        color: #7D78F6;
    }

    .total {
        padding: 0 0.5rem;

        h3 {
            font-size: 1rem;
            font-weight: 500;
            margin: 0;
        }
    }
`;

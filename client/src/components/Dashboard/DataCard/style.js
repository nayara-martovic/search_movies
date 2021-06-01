import styled from 'styled-components';

const DataCard = styled.div`
    &.float-right {
        text-align: right;
    }

    & > .title {
        margin: 0.2rem 0;
        font-size: 2.3rem !important;

        &.total {
            font-size: 3.5rem !important;
        }
    }

    & > .subtitle {
        margin: 0;
        font-size: 1.5rem !important;
        font-weight: normal;
    }

    & > .text {
        margin: 0;
        font-size: 1.2rem !important;
        font-weight: normal;
    }

    .min-icon {
        color: red;
        float: right;
    }

    .max-icon {
        color: green;
        float: right;
    }
`;

export default DataCard;
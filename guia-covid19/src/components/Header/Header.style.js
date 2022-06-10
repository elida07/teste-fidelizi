import { styled } from '@mui/material';

export const HeaderStyle = styled('header')`
    display: grid;
    justify-content: center;

    background-color: #FFDA00;
`;

export const Title = styled('div')`
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;

    h1 {
        font-size: 5vw;
        font-weight: 100;
        margin: 0;
        margin-bottom: 8px;
    }

    h2 {
        margin: 0;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2vw;
        color: #492b7c;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        h1 {
            font-size: 9vw;
        }
        h2{
            font-size: 7vw;
        }
    };
`;

export const Subtitle = styled('div')`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: #838383;
        font-size: 12px;
        margin: 0;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        p {
            font-size: 16px;
        }
    };
`;
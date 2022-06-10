import { styled } from '@mui/material';

export const Nav = styled('nav')`
    display: flex;
    justify-content: space-between;
    width: 55vw;
    margin-top: 40px;

    img {
        padding-right: 8px;
    }

    a {
        text-decoration: none;
        color: black;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
    }

    a:nth-child(2) {
        color: #492b7c;
        border-bottom: 4px solid #492b7c;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        display: grid;
        row-gap: 8px;
        width: 36vw;
    };
`;
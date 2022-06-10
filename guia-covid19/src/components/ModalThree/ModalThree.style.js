import { styled, Button } from '@mui/material';

export const BtnClose = styled('button')`
    position: absolute;
    right: 12px;
    top: 8px;
    background: none;
    border: none;
    font-weight: bolder;
    font-size: 17px;
    color: #b3b3b3;
    cursor: pointer;
`;

export const Title = styled('h2')`
    text-align: center;
    color: #492b7c;
`;

export const Subtitle = styled('h2')`
    color: #492b90 !important;
    font-weight: normal;
`;

export const Description = styled('p')`
    p { color: #7e7e7e; }
`;

export const Link = styled('a')`
    display: block;
    color: #e14bdb;
    text-decoration: none;
    margin-bottom: 12px;
    cursor: pointer;
`;

export const ButtonStyled = styled(Button)({
    backgroundColor: '#834be1'
});
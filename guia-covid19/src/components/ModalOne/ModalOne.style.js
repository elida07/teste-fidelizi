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

export const Description = styled('p')`
    p { color: #7e7e7e; }
`;

export const Item = styled('h3')`
    font-weight: normal;
    color: #492b7c;

    img {
        margin-right: 8px;
    }
`;

export const TxtFocus = styled('p')`
    color: #492b90 !important;
    font-size: 24px;
    font-weight: 200;
`;

export const ButtonStyled = styled(Button)({
    backgroundColor: '#834be1'
});
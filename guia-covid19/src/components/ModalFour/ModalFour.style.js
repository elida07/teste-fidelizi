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

    img {
        width: 17vw;
        margin-top: 10px;
        margin-left: 16px;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        img {
            width: 60vw;
        }
    };
`;

export const ButtonStyled = styled(Button)({
    backgroundColor: '#834be1'
});
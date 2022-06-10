import { HeaderStyle, Title, Subtitle } from './Header.style'
import { NavButtons } from '../NavButtons/NavButtons';
import logo from '../../assets/logo.png';

export const Header = () => {
    return (
        <HeaderStyle>
            <Title>
                <h1>Guia de enfrentamento</h1>
                <h2>crise coronavírus</h2>
            </Title>
            <Subtitle>
                <p>❤️ feito com amor por</p>
                <img src={logo} alt='FideliZi' />
            </Subtitle>
            <NavButtons />
        </HeaderStyle>
    )
};
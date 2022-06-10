import { Nav } from './NavButtons.style';
import heart from '../../assets/heart.svg';
import magic from '../../assets/magic.svg';
import newspaper from '../../assets/newspaper.svg';
import share from '../../assets/share.svg';

export const NavButtons = () => {
    return (
            <Nav>
                <a href='#'>
                    <img src={heart} alt=' ' />
                    Conte Conosco
                </a>
                <a href='#'>
                    <img src={magic} alt=' ' />
                    O que fazer?
                </a>
                <a href='#'>
                    <img src={newspaper} alt=' ' />
                    Notícias Empreendedoras
                </a>
                <a href='#'>
                    <img src={share} alt=' ' />
                    Compartilhe
                </a>
            </Nav>
    );
};
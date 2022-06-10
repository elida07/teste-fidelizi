import * as React from 'react';
import '../../Sass/style.scss';
import imageLab from '../../assets/lab.svg';
import { FooterList } from './Card.style';

export const Card = ({cards, btnText}) => {
    return (
        <>
            <section class="timeline">
                <div class="container">
                    {cards.map(card => (
                            <div class="timeline-item" id={card.id}>

                                <div class="timeline-img"></div>

                                <div class="timeline-content timeline-card js--fadeInRight">
                                    <div class="timeline-img-header" style={{backgroundImage: `url(${card.image})` }} >
                                    <h2>{card.title}</h2>
                                    </div>
                                    <div class="date">{card.id}</div>
                                    <p>
                                        {card.description}
                                    </p>
                                    <span className='btn-modal'>
                                        {card.modal}
                                    </span>
                                </div>

                            </div>   
                        )) }
                </div>
            </section>
            <FooterList>
                <img src={imageLab} alt=' ' />
                <p>Fique ligado, mais dicas estão saindo do laboratório!</p>
            </FooterList>
        </>
    );
};
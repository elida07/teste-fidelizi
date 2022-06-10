import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ButtonStyled, BtnClose, Title, Subtitle, Description } from './ModalFour.style';
import testimonialOne from '../../assets/depoimento-1.png';
import testimonialTwo from '../../assets/depoimento-2.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '62vw',
    height: '70vh',
    bgcolor: 'background.paper',
    borderRadius: '16px',
    boxShadow: 24,
    p: 6,
};

export const ModalFour = ({btnText}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <ButtonStyled 
                type="button" 
                size="small" 
                variant="contained" 
                onClick={handleOpen}
                >
                {btnText}
            </ButtonStyled>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{overflowX: 'overlay',}}>
                    <BtnClose onClick={handleClose}>X</BtnClose>
                    <Title id="modal-modal-title">
                        Conheça alguns clientes que compartilharam suas experiências
                    </Title>
                    <Description id="modal-modal-description">
                        <p>
                            Estamos a todo vapor neste período de quarentena, auxiliando e 
                            configurando as ferramentas para que nossos clientes possam 
                            manter uma comunicação perene com seus respectivos públicos.
                        </p>
                        <p>
                            <strong>
                                Neste momento, nosso objetivo principal é manter o 
                                seu negócio saudável e com mínimo de danos ocasionados pela crise!
                            </strong>
                        </p>
                        <p>
                            Manter o contato com a sua base de clientes é a melhor estratégia, 
                            seja oferecendo seus produtos com entregas delivery 
                            fazendo vendas antecipadas, provendo ações para a retomada pós 
                            quarentena, e outras diversas opções estratégicas.
                            <br/>
                            O importante é manter-se presente no dia a dia dos clientes, 
                            para que eles lembrem-se da sua marca e sejam motivados a voltar 
                            para o seu estabelecimento assim que tudo se acalmar, 
                            e mais, optar pelos seus produtos ou serviços se isso for uma opção 
                            neste período.
                        </p>
                        <Subtitle>
                            Confira alguns feedbacks de clientes que estão em busca de soluções para manter 
                            seus estabelecimentos ativos e saudáveis e contaram com a gente para isso!
                        </Subtitle>
                        <img src={testimonialOne} alt='Depoimento' />
                        <img src={testimonialTwo} alt='Depoimento' />
                    </Description>
                </Box>
            </Modal>
        </div>
    );
}
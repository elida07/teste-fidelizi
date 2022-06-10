import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { 
    ButtonStyled, 
    BtnClose, 
    Title, 
    Subtitle, 
    Description, 
    Link 
    } from './ModalThree.style';

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

export const ModalThree = ({btnText}) => {
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
                        Como tornar a magia real
                    </Title>
                    <Description id="modal-modal-description">
                        <p>
                            O momento é crítico, mas fazendo as ações corretas e traçando as 
                            estratégias de retomada, vamos trabalhar juntos para manter 
                            o seu negócio funcionando e seus clientes fidelizados!
                        </p>
                        <Subtitle>
                            Confira alguns materiais para te ajudar a ter 
                            insights e promover seu negócio durante a quarentena. 
                        </Subtitle>
                        <Link>
                            Como promover a fidelização de clientes em época de crise
                        </Link>
                        <Link>
                            5 estratégias de marketing de baixo custo que dão resultado.
                        </Link>
                        <Link>
                            Como o e-mail marketing te ajudará a se relacionar com seus leads
                        </Link>
                        <Link>
                            Como aumentar a curiosidade por sua marca e criar valor ao seu cliente!
                        </Link>
                        <Link>
                            Problemas são oportunidades disfarçadas.
                        </Link>
                        <Link>
                            Sistema de fidelização: Como melhorar a experiência de compra do seu cliente?
                        </Link>
                        <Link>
                            Meu cliente conhece mesmo o meu negócio?
                        </Link>
                        <Link>
                            Como construir um relacionamento com seus clientes?
                        </Link>
                        <Link>
                            Por que o programa de fidelidade certo deixará minha empresa mais competitiva?
                        </Link>
                        <Link>
                            4 passos para reconstruir fidelidade à marca da sua pequena empresa.
                        </Link>
                        <Link>
                            Por que engajar os clientes faz toda a diferença para seu negócio.
                        </Link>
                        <Link>
                            Meu cliente sumiu! E agora?
                        </Link>
                        <Link>
                            O poder das mídias socias para o pequeno e médio empreendedor. 
                        </Link>
                        <Link>
                            Descubra o que são e como ter táticas de promoção.
                        </Link>
                        <Link>
                            A prova fundamental de que a retenção de clientes funciona.
                        </Link>
                        <Link>
                            Como evitar gastos desnecessários na sua empresa.
                        </Link>
                        <Link>
                            Aposte no planejamento estratégico para alcançar resultados positivos
                        </Link>
                        <Link>
                            4 passos para recuperar um cliente perdido.
                        </Link>
                        <Link>
                            Estratégias matadoras para alavancar as vendas de pequenas empresas de varejo
                        </Link>
                        <Link>
                            Como avaliar o investimento no FideliZi para o seu negócio
                        </Link>
                        <Link>
                            Os pontos mais importantes sobre fazer o cliente retornar
                        </Link>
                        <Link>
                            Marca e consumidor: Como criar vínculos emocionais.
                        </Link>
                        <Link>
                            Qual é a importância da elaboração de um planejamento estratégico de negócios?
                        </Link>
                        <Link>
                            Como monitorar sua marca na web?
                        </Link>
                        <Link>
                            O que é diferencial competitivo?
                        </Link>
                        <Link>
                            Dicas de gestão para pequenas empresas.
                        </Link>
                        <Link>
                            É possível um pequeno comércio inovar na fidelização com os clientes?
                        </Link>
                        <Link>
                            A importância da inovação no relacionamento com os clientes
                        </Link>
                        <Link>
                            Como surpreender clientes fiéis de forma interativa? Conheça a FideliZi!
                        </Link>
                        <Link>
                            5 dicas de como fazer clientes retornarem para alavancar seu negócio
                        </Link>
                        <Link>
                            4 lições que a era digital nos ensinou sobre a fidelização de clientes
                        </Link>
                        <Link>
                            Como pequenas empresas podem ter bons resultados em marketing gastando pouco
                        </Link>
                        <Link>
                            Quanto pequenas empresas devem investir em marketing?
                        </Link>
                        <Link>
                            Enfrentando a concorrência com um Programa de Fidelidade
                        </Link>
                        <Subtitle>
                            Vídeos
                        </Subtitle>
                        <Link>
                            3 dicas para evitar a perda de clientes e combater a concorrência
                        </Link>
                        <Link>
                            Palestra Sebrae - Fidelização de clientes na era digital
                        </Link>
                        <Link>
                            Saiba como isentar suas mensalidades através do Indica FideliZi!
                        </Link>
                        <Link>
                            MARKETING DIGITAL - Saiba como as mídias sociais podem ajudar o seu negócio!
                        </Link>
                        <Link>
                            Estratégias promocionais SEM Desconto - Insights e Dicas para o seu negócio!
                        </Link>
                        <Link>
                            Saiba como vender o ano inteiro para os clientes que visitam sua loja em datas comemorativas.
                        </Link>
                        <Link>
                            Fidelização de clientes: O que você não sabe e o que está perdendo por isso | Palestra Abrasel.
                        </Link>
                        <Link>
                            LTV: O que é e qual a sua real importância?
                        </Link>
                    </Description>
                </Box>
            </Modal>
        </div>
    );
}
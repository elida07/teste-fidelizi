import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ButtonStyled, BtnClose, Title, Description, Item, TxtFocus } from './ModalOne.style';
import Arrow from '../../assets/arrow.svg';

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

export const ModalOne = ({btnText}) => {
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
                        O que estamos fazendo para ajudar o seu negócio
                    </Title>
                    <Description id="modal-modal-description">
                        <p>
                            Durante todo o período de quarentena, estamos à total 
                            disposição de cada um de vocês, clientes.
                            O COVID-19 chegou desestabilizando o país e trazendo 
                            consigo uma grande incógnita quanto a proporção disso no país, nas pessoas e 
                            principalmente, na economia.
                        </p>
                        <p>
                            Nosso compromisso com você durante essa fase, 
                            é para assegurar que o seu negócio seja o menos afetado 
                            possível, mantendo sua base de clientes fidelizados sólida e segura!
                        </p>
                        <p>
                            Apesar do caos, estamos contentes de ver na prática de que muitos 
                            clientes tem se apoiado em nossa solução como uma das 
                            saídas para enfrentar essa crise e estamos registrando um 
                            volume recorde de utilização de funções de comunicação com os 
                            clientes - sobretudo de email marketing e WhatsApp.
                        </p>
                        <p>
                            <strong style={{color: '#e14bdb'}}>
                            Hoje, contamos com um sistema robusto, 
                            funcionalidades eficientes, assertivas e primordiais para o seu negócio.
                            </strong>
                        </p>
                        <Item>
                            <img src={Arrow}  alt=" " />
                            O poder está nas suas mãos!
                        </Item>
                        <p>
                            Para garantir os melhores resultados e o mínimo de perdas, <strong>
                                estamos liberando para todos os clientes, as funcionalidades do 
                                nosso maior e mais completo plano, o Elite.
                            </strong> 
                            Com isso, você poderá fazer envio de email marketing para sua base de clientes e 
                            utilizar a régua de WhatsApp para reforçar sua comunicação com seu público.
                            <br/>
                            Para isto, basta entrar em contato com nosso suporte. 
                        </p>
                        <Item>
                            <img src={Arrow}  alt=" " />
                            Você pode estar onde seu público deseja.
                        </Item>
                        <p>
                        Além disso, também estamos disponibilizando licenças ilimitadas do FideliZi Lite, 
                        aplicativo para Android, que permite ações básicas como cadastrar, 
                        pontuar e resgatar prêmios. <strong>
                            Assim, se você está disponibilizando o 
                            delivery no seus estabelecimento, o aplicativo 
                            poderá ser utilizado pelo motoboy, para que os clientes possam ter suas 
                            compras pontuadas.
                        </strong>
                        </p>
                        <p>
                        Em breve, em caráter extraordinário, estamos trabalhando para 
                        lançar o mais rápido possível, uma solução adaptada para o 
                        delivery que ajudará os estabelecimentos que puderem continuar 
                        operando nessa modalidade. 
                        </p>
                        <Item>
                            <img src={Arrow}  alt=" " />
                            Um bom Mago detecta uma adversidade e oferece a solução.
                        </Item>
                        <p>
                            Entendemos perfeitamente as inseguranças impostas pela 
                            fase em que estamos, mas asseguramos que nossa parceria é 
                            fundamental para a sobrevivência do seu negócio, pois a 
                            comunicação que disponibilizamos é imprescindível no momento.
                            Seus clientes precisam se lembrar do seu negócio, dar preferência 
                            para os produtos ou serviços que você comercializa, e nesta 
                            época onde estar próximo precisa significa estar distante, 
                            a comunicação digital é o <strong>pó mágico para manter seu público 
                            fidelizado à sua marca.</strong>
                        </p>
                        <p>
                        Sabemos das dificuldades financeiras que muitas empresas já 
                        estão enfrentando, e apesar de difícil, manter a calma neste 
                        momento é de extrema importância. Obviamente, realizar cortes 
                        em despesas que não farão a diferença neste momento, é 
                        crucial, bem como negociar com fornecedores. Contudo, 
                        algumas soluções como a do FideliZi, tem um valor de investimento 
                        relativamente baixo que não impactarão o negócio de forma 
                        significativa, enquanto que, podem fazer muita diferença durante 
                        este período. 
                        </p>
                        <p>
                            Reforçando mais uma vez que em termos de marketing, mais do que nunca, 
                            será difícil vender para clientes novos. Logo, manter 
                            a comunicação com clientes fidelizados será crucial!
                            É preciso saber diferenciar o que é realmente custo e o que é estratégico 
                            antes de sair cortando tudo que parece despesa. Para os negócios 
                            em maior dificuldade, sobretudo aqueles já impossibilitados 
                            de operar, não deixem de entrar em contato com nosso time 
                            de FideWizards para que possamos auxiliá-lo da melhor forma 
                            possível. 
                        </p>
                        <p>
                            Quando dissemos que estamos juntos, não foi uma expressão, 
                            mas sim <strong>nosso principal objetivo nesse momento!</strong> Não iremos te 
                            abandonar e nem tornar o momento pior, 
                            muito pelo contrário. Vamos fazer de tudo para que você se mantenha 
                            firme nesta fase 
                            de incertezas e inseguranças.
                        </p>
                        <TxtFocus>
                            Os FideWizards estão em plena atividade para te auxiliar, orientar, 
                            desenvolver estratégias e fazer tudo que for possível para reduzir qualquer 
                            impacto econômico em seu negócio.
                        </TxtFocus>
                    </Description>
                </Box>
            </Modal>
        </div>
    );
}
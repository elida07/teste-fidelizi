import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ButtonStyled, BtnClose, Title, Description, Item, TxtFocus } from './ModalTwo.style';
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

export const ModalTwo = ({btnText}) => {
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
                        Ferramentas indispensáveis neste momento
                    </Title>
                    <Description id="modal-modal-description">
                        <p>
                            Você sabe que magos contam com bons artifícios para fazer 
                            sua magia acontecer. Com nós FideWizards não é diferente!
                        </p>
                        <p>
                            Contamos com ferramentas poderosas para fazer nossa mágica acontecer 
                            e fidelizar seus clientes. Especialmente neste 
                            período em que o COVID-19 nos pegou desprevenidos, 
                            vamos compartilhar com você nossas ferramentas e fórmulas mágicas, 
                            afinal, queremos ver o seu negócio se destacando e superando 
                            essa fase, como um toque de mágica. 
                        </p>
                        <p>
                            <strong style={{color: '#e14bdb'}}>
                                Conheça agora o que está a sua disposição:
                            </strong>
                        </p>
                        <Item>
                            <img src={Arrow}  alt=" " />
                            Segmentação
                        </Item>
                        <p>
                            Tão poderosa quanto qualquer outra ferramenta mágica, a Segmentação 
                            permite que os clientes da sua base sejam separados 
                            por categorias para que suas ações sejam direcionadas 
                            para grupos específicos. Desta forma, a efetividade da campanha 
                            torna-se alta e assertiva. <strong>
                                Faça comunicações segmentadas e ofereça o que cada cliente gosta e deseja. 
                            </strong>
                        </p>
                        <Item>
                            <img src={Arrow}  alt=" " />
                            Email Marketing
                        </Item>
                        <p>
                            Esta ferramenta tem o poder de falar diretamente com o seu cliente, 
                            levando informações, ofertas, surpresas ou o que você 
                            achar pertinente. Ela desperta o interesse e o seu poder ainda 
                            pode atrair seu público para que façam a ação sugerida no email, 
                            como visitar seus estabelecimento, fazer pedido por delivery, 
                            curtir e seguir suas redes sociais, entre outros.
                        </p>
                        <p>
                            Mas lembre-se: Para obter o resultado desejado, é preciso 
                            utilizar as palavras mágicas corretamente, por isso, elabore muito 
                            bem o conteúdo do email, para que o objetivo seja alcançado com sucesso!
                            Vale a pena aprender manusear a ferramenta de 
                            Email Marketing. <strong>O resultado dessa magia é surpreendente.</strong>
                        </p>
                        <Item>
                            <img src={Arrow}  alt=" " />
                            Piloto Automático
                        </Item>
                        <p>
                            Esta funcionalidade tem um poder incrível!
                        </p>
                        <p>
                            Imagine toda a sua base clientes sendo parabenizada pelo aniversário, 
                            sem que você precise saber a cada data de cor! Com os 
                            Pilotos automáticos isso e muito mais é possível.
                            Envie emails de boas-vindas, de inatividade para 
                            aqueles clientes que 
                            tomaram um chá de sumiço e os faça aparecer novamente, 
                            deseja Feliz Aniversário no dia certo para toda a sua base, faça com 
                            que seus novos clientes sintam-se acolhidos com um email de 
                            boas-vindas. Também é possível fazer envios de emails em datas 
                            comemorativas com mensagens, felicitações ou até mesmo oferta 
                            especiais para a ocasião. 
                        </p>
                        <p>
                            O Piloto Automático é uma ferramenta poderosa que pode <strong>
                                ajudar muito no seu relacionamento com o público
                            </strong>
                        </p>
                        <Item>
                            <img src={Arrow}  alt=" " />
                            Régua do WhatsApp
                        </Item>
                        <p>
                            A magia desta funcionalidade está na pontas dos seus dedos!
                        </p>
                        <p>
                            <strong>
                            Saiba quem são os clientes que não receberam o email que você enviou. 
                            </strong> Além destes, você também pode saber:
                        </p>
                        <p>
                            - Quem recebeu, mas não abriu o email.
                            <br/>
                            - Quem recebeu e abriu, mas não ativou a oferta que você disponibilizou.
                        </p>
                        <p>
                            Você terá estas informações e poderá falar com essas pessoas como 
                            num toque de mágica. A Régua de WhatsApp é um 
                            complemento para suas campanhas de email, onde é possível 
                            segmentar os clientes e acioná-los por mensagens direto em seu 
                            WhatsApp, desde que no cadastro do seu programa seja solicitado 
                            o número dos clientes.
                        </p>
                        <Item>
                            <img src={Arrow}  alt=" " />
                            Aplicativo FideliZi Lite
                        </Item>
                        <p>
                            Este pode ser considerado o Coelho na cartola do FideliZi!
                        </p>
                        <p>
                            O aplicativo FideliZi Lite permite que transações como cadastro, 
                            pontuação e resgate de prêmios <strong>
                                sejam feitas através de um smartphone Android com o app instalada. 
                            </strong> É uma boa saída 
                            para entregar delivery, onde os clientes mesmo longe do tablet, 
                            possam garantir a pontuação de suas compras sejam registradas, 
                            assim como os que desejam se cadastrar no seu programa e 
                            aqueles que tem prêmios para resgatar.
                        </p>
                        <p>
                            Neste período de quarentena causada pelo COVID-19, o aplicativo pode ser uma excelente estratégia para você, se o seu negócio 
                            permitir entregar delivery. Seus clientes continuarão ganhando pontos e o vínculo afetivo com sua marca poderá ser fortalecido!
                        </p>
                        <p>
                            É ou não é o coelho na cartola em tempos de crise?!
                        </p>
                        <Item>
                            <img src={Arrow}  alt=" " />
                            Plataforma de ofertas
                        </Item>
                        <p>
                            Esta ferramenta é um truque super eficiente e pode fazer toda 
                            diferença neste momento no qual estamos. 
                        </p>
                        <p>
                            Basicamente, a Plataforma de Ofertas é semelhante àquelas páginas 
                            de compras coletivas, entretanto, haverá apenas a oferta 
                            da sua loja e página pode conter todas as informações da sua marca. 
                            O cliente recebe o link por email, abre o link e é 
                            automaticamente direcionado para sua página, onde poderá ativar a 
                            oferta que você disponibilizou a ele e depois é ir até a sua 
                            loja para resgatar o prêmio. <strong>Esta é uma forma atrair novamente os clientes, 
                            quando os período de quarentena chegar ao fim.</strong>
                        </p>
                        <Item>
                            <img src={Arrow}  alt=" " />
                            Página de Indicações
                        </Item>
                        <p>
                            A magia desta ferramenta é transformar um cliente em outros vários!
                            Na Página de Indicações, os seus clientes podem enviar 
                            convites para amigos, parentes e conhecidos, para eles irem 
                            conhecer seu estabelecimento, com um prêmio disponível para 
                            eles. Além disso, os clientes que fizeram a indicação são bonificados também, 
                            seja com pontos extras, um brinde exclusivo ou 
                            vale compras. 
                        </p>
                        <p>
                            Está é uma ótima estratégia para a retomada pós-crise, 
                            pois você beneficia seus clientes quando fizerem indicações do seu 
                            negócio, aumentando as chances de eles indicarem cada vez mais; 
                            presenteia os clientes que vierem através das indicações, 
                            aumentando assim a probabilidade de fidelizá-los.
                        </p>
                        <p>
                            <strong style={{color: '#e14bdb'}}>
                                Cada ferramenta estará disponível para você fazer suas campanhas e 
                                traçar suas estratégias de retomada após a crise imposta pelo COVID-19. 
                                A comunicação com seus clientes é fundamental 
                                para manter os clientes próximos e reforçar a lembraça da sua marca.
                            </strong>
                        </p>
                        <TxtFocus>
                            Não postergue suas ações de marketing. Nós estamos a sua disposição 
                            para configurar as ferramentas necessárias para manter o seu negócio 
                            ativo e com os menores danos possíveis, diante da atual situação!
                        </TxtFocus>
                    </Description>
                </Box>
            </Modal>
        </div>
    );
}
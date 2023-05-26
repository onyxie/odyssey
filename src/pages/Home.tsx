import { styled } from 'styled-components'
import background from '../../public/113.jpg'

const MainContainer = styled.main`
color: white; 
font-size:50px;
padding: 8rem;
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30rem;
`

const HeroContainer = styled.div`
width: 80%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:4rem
`

const HeroTitle = styled.p`
    font-weight: 600;
    font-size: 1.8em;
`

const HeroSubtitle = styled.p`
    font-weight: 400;
    font-size: 0.8em;
    text-align: center;
`

const StartButton = styled.button`
    border-radius: 40px;
    background-color: black;
    color: white;
    width: 20rem;
    height: 5rem;
    font-size: 0.6em;
    cursor: pointer;
`

const CardContainers = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
`

const Card = styled.div`
    height: 10rem;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
`

function Home() {
    return (
        <MainContainer>
            <HeroContainer>
                <HeroTitle>Vamos juntos explorar o mundo.</HeroTitle>
                <HeroSubtitle>Comece a organizar sua viagem hoje</HeroSubtitle>
                <StartButton>Começar!</StartButton>
            </HeroContainer>
            <CardContainers>
                <Card>
                    Planeje cada passo
                </Card>
                <Card>
                    Organize-se financeiramente
                </Card>
                <Card>
                    Viaje com quem você ama
                </Card>

            </CardContainers>
        </MainContainer>
    )

}


export default Home

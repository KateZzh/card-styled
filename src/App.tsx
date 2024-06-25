import styled from 'styled-components';
import { myTheme } from './components/styles/Theme.styled';
import { Button, WrapperButtons } from './components/Button';
import imageCard from './assets/imageCard.png';

function App() {
    return (
        <div className='App'>
            <Box>
                <WrapperCard>
                    <Image src={imageCard} alt='desert' />

                    <Title>Headline</Title>
                    <Paragraph>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Paragraph>

                    <WrapperButtons>
                        <Button buttonType='primary' color={myTheme.colors.primary} hover={myTheme.colors.hover}>
                            See more
                        </Button>
                        <Button buttonType='outlined' color={myTheme.colors.primary} hover={myTheme.colors.hover}>
                            Save
                        </Button>
                    </WrapperButtons>
                </WrapperCard>
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const WrapperCard = styled.div`
    padding: 10px;
    max-width: 300px;
    width: 100%;
    background-color: ${myTheme.colors.backgroundCard};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    box-shadow: 0 4px 20px 5px #0000001a;

    button {
        cursor: pointer;
    }
`;

const Image = styled.img`
    border-radius: 10px;
    width: 280px;
    height: 170px;
`;

const Title = styled.h2`
    font: 700 16px 'Inter';
    color: #000000;
    padding-left: 10px;
    line-height: 20px;
`;

const Paragraph = styled.p`
    font: 500 12px 'Inter';
    color: ${myTheme.colors.grey.light};
    padding-left: 10px;
    line-height: 20px;
`;

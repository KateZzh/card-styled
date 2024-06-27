import { Card } from './components/Card';
import imageCard from './assets/imageCard.png';
import styled from 'styled-components';

function App() {
    return (
        <div className='App'>
            <Section>
                <Card
                    imgSrc={imageCard}
                    title='Headline'
                    description='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'
                />
                <Card
                    imgSrc={imageCard}
                    title='Headline'
                    description='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'
                />
                <Card
                    imgSrc={imageCard}
                    title='Headline'
                    description='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'
                />
            </Section>
        </div>
    );
}

const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`;

export default App;

import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { myTheme } from './styles/Theme.styled';

type StyleCardPropsType = {
    imgSrc: string;
    title: string;
    description: string;
};

export const Card = (props: StyleCardPropsType) => {
    return (
        <StyleCard>
            <Image src={props.imgSrc} alt='desert' />

            <Wrapper>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>

                <Button buttonType='primary' color={myTheme.colors.primary} hover={myTheme.colors.hover}>
                    See more
                </Button>
                <Button buttonType='outlined' color={myTheme.colors.primary} hover={myTheme.colors.hover}>
                    Save
                </Button>
            </Wrapper>
        </StyleCard>
    );
};

const StyleCard = styled.article`
    padding: 10px;
    max-width: 300px;
    width: 100%;
    background-color: ${myTheme.colors.backgroundCard};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    box-shadow: 0 4px 20px 5px #0000001a;

    button + button {
        margin-left: 12px;
    }

    button {
        cursor: pointer;
    }
`;

const Image = styled.img`
    border-radius: 10px;
    max-width: 280px;
    height: auto;
`;

const Wrapper = styled.div`
    padding: 0 0 12px 10px;
`;

const Title = styled.h2`
    font: 700 16px 'Inter';
    color: #000000;
    padding-bottom: 20px;
`;

const Description = styled.p`
    font: 500 12px 'Inter';
    color: ${myTheme.colors.grey.light};
    line-height: 20px;
    padding-bottom: 19px;
`;

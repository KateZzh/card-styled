import styled, { css } from 'styled-components';

type StyleButtonPropsType = {
    buttonType: 'primary' | 'outlined';
    color?: string;
    hover?: string;
};

export const WrapperButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    padding: 0 0 12px 10px;
`;

export const Button = styled.button<StyleButtonPropsType>`
    border: 2px solid ${(props) => props.color || '#c61a9e'};
    border-radius: 5px;
    font: 700 10px 'Inter';
    line-height: 20px;
    padding: 4px 0;
    width: 86px;
    height: 30px;

    ${(props) =>
        props.buttonType === 'outlined' &&
        css<StyleButtonPropsType>`
            color: ${(props) => props.color || '#c61a9e'};
            background-color: transparent;

            &:hover {
                border-color: ${(props) => props.hover || '#bad6d7'};
                color: ${(props) => props.hover || '#bad6d7'};
            }
        `}

    ${(props) =>
        props.buttonType === 'primary' &&
        css<StyleButtonPropsType>`
            background-color: ${(props) => props.color || '#c61a9e'};
            color: #ffffff;

            &:hover {
                background-color: ${(props) => props.hover || '#bad6d7'};
                border-color: ${(props) => props.hover || '#bad6d7'};
            }
        `}
`;

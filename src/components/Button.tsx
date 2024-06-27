import styled, { css } from 'styled-components';

type StyleButtonPropsType = {
    buttonType: 'primary' | 'outlined';
    color?: string;
    hover?: string;
};

export const Button = styled.button<StyleButtonPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    font: 700 10px Inter;
    padding: 4px 0;

    ${(props) =>
        props.buttonType === 'outlined' &&
        css<StyleButtonPropsType>`
            color: ${(props) => props.color || '#c61a9e'};
            background-color: transparent;
            border: 2px solid;


            &:hover {
                border-color: ${(props) => props.hover || '#bad6d7'};
                color: ${(props) => props.hover || '#bad6d7'};
            }
        `}

    ${(props) =>
        props.buttonType === 'primary' &&
        css<StyleButtonPropsType>`
            color: #ffffff;
            background-color: ${(props) => props.color || '#c61a9e'};
            border: none;

            &:hover {
                border-color: ${(props) => props.hover || '#bad6d7'};
                background-color: ${(props) => props.hover || '#bad6d7'};
            }
        `}
`;

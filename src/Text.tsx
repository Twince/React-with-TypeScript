import React from "react";
import styled from "styled-components";

interface TextProps {
    readonly color: string;
    readonly onClick?: React.MouseEventHandler;
    // onClick이 필요없을수도 있으므로 ?로 옵션으로 선택해줄 수 있음.
}

const ColorText = styled.p<{ a: string }>`
    /* TypeScript 제네릭 */
    font-weight: bold;
    color: ${(props) => props.a};
    user-select: none;

    &:hover{
      font-weight: normal;
    }
`;

const Text: React.FC<TextProps> = ({ children, color, onClick }) => {
    //FC는 Function Componet즉 함수형
    return (
        <>
            <ColorText a={color} onClick={onClick}>글자 : {children}</ColorText>
        </>
    );
};

export default Text;

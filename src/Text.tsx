import React from "react";

interface TextProps{
    readonly color:string;
}

const Text: React.FC<TextProps> = ({ children, color }) => {
    //FC는 Function Componet즉 함수형
    return (
        <>
            <p
                style={{
                    fontWeight: "bold",
                    color,
                }}
                //key와 vlaue가 같으므로 color로 표시(원래는 color: color)
            >
                글자 : {children}
            </p>
        </>
    );
};

export default Text;

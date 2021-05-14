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
                    color: "blue",
                }}
            >
                {children}
            </p>
        </>
    );
};

export default Text;

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useNum } from "./hooks/useNum";
import Text from "./Text";

const App: React.FC = () => {
    //FC는 Function Componet즉 함수형
    const [num, setNum] = useNum()!!;
    //!!는 undefind나 null이 아니라고 보장

    const plus = useMemo(() => num + 1, [num]);
    //상태 바뀔때마다 계속 불러와야 되므로 Num을 두번쨰 배열 즉, 디펜던시에 넣음

    const addNum = useCallback(() => {
        setNum((prevNum) => prevNum + 1);
        // 설정이 비동기라 num으로 가져오면 안되고 prevnum으로 가져와야 함.
        console.log(plus);
        // return plus; 같이 돌려주기도 가능
    }, [plus]);

    useEffect(() => {
        const timer = setInterval(() => {
            setNum((prevNum) => prevNum - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    /* 
        두번쨰 인자 즉, []가 비어있으면 페이지 로딩 시 한번만 실행
        인자에 값을 넣으면 리랜더링 될때마다 실행 
        
        return으로 넘겨저면 페이지 로딩 취소시 작동

        alt + shift + O 누르면 안쓰는 import 알아서 정리해줌
        webStorm은 Ctrl + ALt + O
    */

    return (
        <>
            <Text color="blue" onClick={addNum}>
                {num}
            </Text>
            <Link to="/b">B 페이지 이동</Link>
        </>
    );
};

export default App;

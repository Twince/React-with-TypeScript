import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import B from "./b";
import { NumProvider } from './hooks/useNum';

ReactDOM.render(
    <React.StrictMode>
        <NumProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route path="/b" component={B} exact />
                    {/* exact 옵션은 path에 있는 주소와 완전히 일치애햐 라우팅 되게 하는 역할을 해줌. */}
                </Switch>
            </BrowserRouter>
        </NumProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
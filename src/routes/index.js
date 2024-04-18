import React, { useState, useEffect } from "react";

/* URL 설정을 위한 라이브러리 */
import { Route, Routes, useFetcher, useNavigate } from 'react-router-dom';

/* 사용자가 만든 페이지를 모아놓은 파일에서 페이지를 불러온다. */
import { Main, Mymenu, Signin, Signup } from "./pages";

/* 아래 부분에서 링크와 페이지를 연결시킨다. */
const Router = () => {
    /* 변수(state) 및 useEffect설정 부분 */
    const test = useState(0); // 예제를 위한 state

    /* 예제를 위한 useEffect */
    useEffect(() => {

    }, []); // []로 설정이 되어 있으므로 페이지가 로드될 때 한번만 실행된다

    /* 출력할 페이지 설정 부분 */
    return (
        /* 리액트의 경우 return에 존재하는 최상위 태그는 하나여야 한다. */
        <div className="App">
            {/* URL설정을 위한 태그 */}
            <Routes>
                {/* 
                    path: URL
                        * path="/user"인 경우 http://localhost:3000/user로 접근 가능
                    element: 출력할 페이지
                        * 위에서 import한 페이지만 사용 가능
                */}
                <Route
                    path="/"
                    /*
                        사용자가 만든 페이지
                        * 윈도우의 경우 Ctrl을 누르신 뒤 App을 클릭하시면 해당 파일로 이동하실 수 있습니다.
                        * 맥의 경우 Command를 누르신 뒤 App을 클릭하시면 해당 파일로 이동하실 수 있습니다.
                    */
                    element={<Main />}
                />

                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/user/mymenu" element={<Mymenu/>}/>
                
            </Routes>
        </div>
    )
}

/* App/App.js에서 import하기 위한 설정 */
export default Router;
import {Outlet} from "react-router-dom";
import React from "react";

const Layout = () => {
    return (
        <main style={{backgroundColor:"#e2e2e2", padding:10, flex:1}}>
            <Outlet/>
        </main>

    )

}

export default Layout;
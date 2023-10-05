import {Outlet} from "react-router-dom";
import React from "react";

const Layout = () => {
    return (
        <main style={{backgroundColor:"black", flex:1, margin:0}}>
            <Outlet/>
        </main>

    )

}

export default Layout;
import { Outlet } from "react-router-dom"
import { Header } from "../header"
import { Menu } from "../menu"
// import { Props } from "./types"

export const Layout = () => {
    return(
        <div className="flex flex-col h-[100vh]">
            <Header/>
                {/* <div className="flex-grow">{children}</div> */}
                <Outlet/>
            <Menu/>
        </div>
    )
}
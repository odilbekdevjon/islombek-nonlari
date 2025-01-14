import { Header } from "../header"
import { Menu } from "../menu"
import { Props } from "./types"

export const Layout = ({children}: Props) => {
    return(
        <div className="flex flex-col h-[100vh]">
            <Header/>
                <div className="flex-grow">{children}</div>
            <Menu/>
        </div>
    )
}
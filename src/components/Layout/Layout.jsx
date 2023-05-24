import { NavLink, Outlet } from "react-router-dom";


const Layout = ({  }) => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>
                        Main
                    </NavLink></li>
                    <li><NavLink to={'/create'}>
                        Create Post
                    </NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}


export default Layout
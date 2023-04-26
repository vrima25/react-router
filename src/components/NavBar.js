import React from "react";
import Constants from "../constants";

const MENU = [
    {path : Constants.ROUTES.COURSE_LIST, text : "Course List", href : "a"},
    {path : Constants.ROUTES.ADD_COURSE, text : "Add Course", href: "b"},
    {path : Constants.ROUTES.EDIT_COURSE, text : "Edit Course", href: "c"},
    {path : Constants.ROUTES.TYPE_LIST, text : "Type List", href: "d"},
]
const NavBar = (props) => {
    const {onNavigate} = props;
    return (
        <nav>
            {MENU.map((menu, idx) => (
                <a
                    key={idx}
                    style={{marginRight:10}}
                    href={menu.href}
                    onClick={() => onNavigate(menu.path)}
                >
                    {menu.text}
                </a>
            ))}
        </nav>
    )
}

export default NavBar
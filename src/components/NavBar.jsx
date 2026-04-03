import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { navLinks } from "../data/portfolioData";

function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    const {theme, setTheme} = useContext(ThemeContext)

    function toggleMenu(){
        setIsOpen(prevState => !prevState)
    }

    function closeMenu(){
        setIsOpen(false)
    }

    return(
        <header>
            <div className="menu">
                <h1 className="header_title">Osondu Gabriel</h1>
                <div className="title2_box">
                    <h1 className="header_title2">Osondu</h1>
                    <h1 className="header_title2">Gabriel</h1>
                </div>
                <button className="menu_icon" onClick={toggleMenu}>{isOpen ? <FaTimes /> : <FaBars />}</button>
            </div>
            <nav className={isOpen ? "nav_open" : ""}>
                <ul className="nav_list">
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a href={link.href} onClick={closeMenu}>{link.label}</a>
                        </li>))}
                    <li>
                        <button className="theme_toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label="Toggle theme"> {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar
import styles from "@/../css/Components/Global/Dropdown.module.css";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

export default function Dropdown({ buttonLabel, links }) {
        
    /*
     * The "links" property expects an array of objects with the following structure:
     *
     * [
     *     {
     *         label: "Link 1",
     *         url: "www.url-for-link1.com"
     *     },
     * ]
     * 
    */
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(prevShowMenu => !prevShowMenu);
    }

    function closeMenu() {
        setTimeout(() => {
            setShowMenu(false);
        }, 300);
    }

    return (
        <div className={styles.custom_dropdown}>
            <button
                className={styles.dropdown_toggle}
                id={styles.dropdown_btn}
                aria-haspopup="true"
                aria-expanded="false"
                onClick={toggleMenu}
                onBlur={closeMenu}
            >
                {buttonLabel} <FaAngleDown />
            </button>
            {showMenu && (
                <ul className={styles.dropdown_menu} id="dropdown_menu" aria-labelledby="dropdown_btn">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.url}
                                method="get"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
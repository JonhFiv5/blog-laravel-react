// Uses Bootstrap
import styles from "../../../css/Components/Blog/Navbar.module.css";
import { Link } from "@inertiajs/react";
import Dropdown from "../Global/Dropdown";

export default function Navbar({ dropdown_links }) {
    return (
        <nav className={`${styles.blog_navbar} navbar`}>
            <div>
                <Link
                    className={`${styles.blog_navbar_link} navbar-brand mb-0 ms-2 h1`}
                    href="/"
                    method="get"
                >
                    Home
                </Link>
                <Dropdown
                    buttonLabel="Posts"
                    links={dropdown_links}
                />
            </div>
        </nav>
    );
}

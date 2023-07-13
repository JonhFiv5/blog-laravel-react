// Uses Bootstrap
import styles from "../../../css/Components/Blog/Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={`${styles.blog_navbar} navbar`}>
            <div className="container-fluid">
                <span className={`${styles.blog_navbar_text} navbar-brand mb-0 h1`}>Blog's Navbar</span>
            </div>
        </nav>
    );
}

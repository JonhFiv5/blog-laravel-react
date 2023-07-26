import styles from "@/../css/Components/Post/PostCard.module.css";
import { Link } from "@inertiajs/react";

export default function PostCard({ imageSrc, title, content, show_route }) {
    return (
        <div className={styles.card_container}>
            <div className="card">
                <Link 
                    className={styles.show_button}
                    href={show_route}
                    method="get"
                    as="button"
                    type="button"
                >
                    <img src={imageSrc} className={`${styles.card_image} card-img-top`} alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

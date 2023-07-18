import styles from "@/../css/Components/Post/PostCard.module.css";

export default function PostCard({ imageSrc, title, content }) {
    return (
        <div className={styles.card_container}>
            <div className="card">
                <img src={imageSrc} className={`${styles.card_image} card-img-top`} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        </div>
    );
}

import BlogLayout from "@/Layouts/BlogLayout";
import styles from "@/../css/Pages/Post/Show.module.css";

export default function Show({ post }) {
    return (
        <BlogLayout title={post.title}>
            <div className={styles.image_container}>
                <img src={post.cover_image} />
            </div>
            <div className={styles.title_container}>
                <h1>
                    {post.title}
                </h1>
            </div>
            <hr />
            <div>
                {post.content}
            </div>
        </BlogLayout>
    );
}
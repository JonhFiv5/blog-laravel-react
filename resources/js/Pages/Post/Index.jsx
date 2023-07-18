import BlogLayout from "@/Layouts/BlogLayout";
import PostCard from "@/Components/Post/PostCard";
import styles from "@/../css/Pages/Post/Index.module.css";
import Pagination from "@/Components/Global/Pagination";

export default function Index({ posts, pagination_links }) {
    return (
        <BlogLayout title="Posts">
            <div className={styles.main_title_container}>
                <h1 className={styles.main_title}>SIMPLE BLOG</h1>
            </div>
            <div className={styles.posts_container}>
                {posts.data.map(post => (
                    <PostCard
                        title={post.id}
                        imageSrc={post.cover_image}
                        content={post.content}
                        key={post.id}
                    />
                ))}
            </div>
            <Pagination
                current_page={posts.current_page}
                pagination_links={pagination_links}
            />
        </BlogLayout>
    );
}

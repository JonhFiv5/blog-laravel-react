import BlogLayout from "@/Layouts/BlogLayout";
import DateFormat from "@/Components/Global/DateFormat";
import Pagination from "@/Components/Global/Pagination";
import { Link } from "@inertiajs/react";

export default function UserPosts({ posts, pagination_links, dropdown_links }) {
    return (
        <BlogLayout title="My Posts" dropdown_links={dropdown_links}>
            <h1>My Posts</h1>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Creation Date</th>
                        <th scope="col" colSpan="3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { posts.data.map((post, index) => (
                        <tr key={index}>
                            <td>{post.title}</td>
                            <td><DateFormat date={post.created_at} /></td>
                            <td>
                                <Link className="btn btn-primary" href={post.show_route}>View</Link>
                            </td>
                            <td>
                                <Link className="btn btn-secondary" href={post.update_route}>Update</Link>
                            </td>
                            <td>
                                <Link className="btn btn-danger" href={post.delete_route} method="delete" as="button">Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                current_page={posts.current_page}
                pagination_links={pagination_links}
            />
        </BlogLayout>
    );
}

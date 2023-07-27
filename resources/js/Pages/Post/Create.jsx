import { Head } from '@inertiajs/react'
import BlogLayout from '../../Layouts/BlogLayout';
import Form from '../../Components/Post/Form';

export default function Create({ action, dropdown_links }) {
    return (
        <>
            <BlogLayout title="New Post" dropdown_links={dropdown_links}>
                <h1>New Post</h1>
                <Form action={action} />
            </BlogLayout>
        </>
    );
}

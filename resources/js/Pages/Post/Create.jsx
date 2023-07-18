import { Head } from '@inertiajs/react'
import BlogLayout from '../../Layouts/BlogLayout';
import Form from '../../Components/Post/Form';

export default function Create({ action }) {
    return (
        <>
            <BlogLayout title="New Post">
                <h1>New Post</h1>
                <Form action={action} />
            </BlogLayout>
        </>
    );
}

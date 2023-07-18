import { Head } from '@inertiajs/react'
import styles from '../../css/Layouts/BlogLayout.module.css';
import Navbar from '@/Components/Blog/NavBar';

export default function BlogLayout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                {/* Loading Bootstrap */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
            </Head>
            <Navbar />
            <div className="container mt-2">
                {children}
            </div>
        </>
    );
}

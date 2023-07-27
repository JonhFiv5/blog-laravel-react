import { useForm } from "@inertiajs/react";
import styles from "../../../css/Components/Post/Form.module.css";

export default function Form({ action }) {

    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        title: '',
        content: '',
        description: '',
        cover_image: null,
    });

    function clearForm() {
        document.getElementById('title').value = "";
        document.getElementById('content').value = "";
        document.getElementById('description').value = "";
        document.getElementById('cover_image').value = "";
        document.getElementById('image-preview').src = '';
    }

    function showPreview(e) {
        if (e.target.files.length > 0) {
            let src = URL.createObjectURL(e.target.files[0]);
            let preview = document.getElementById('image-preview');
            preview.src = src;
            preview.style.display = 'block';
        }
    }

    function submit(e) {
        e.preventDefault();
        post(action, {
            onSuccess: () => {
                clearForm();
            }
        });
    }

    return (
        <>
            {recentlySuccessful && (
                <div className="alert alert-info mt-2">
                    New post created successfully!
                </div>
            )}
            <form encType="multiform/data" onSubmit={submit}>
                <div className="form-group">
                    <label className="fw-bold" htmlFor="title">Title</label>
                    <input
                        type="text"
                        className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                        id="title"
                        name="title"
                        onChange={(e) => setData('title', e.target.value)}
                    />
                    {errors.title && (
                        <div className={styles.validation_error}>
                            {errors.title}
                        </div>
                    )}
                </div>
                <div className="form-group mt-2">
                    <label className="fw-bold" htmlFor="content">Content</label>
                    <textarea
                        type="text"
                        className={`form-control ${errors.content ? 'is-invalid' : ''}`}
                        rows="30"
                        id="content"
                        name="content"
                        onChange={(e) => setData('content', e.target.value)}
                    ></textarea>
                    {errors.content && (
                        <div className={styles.validation_error}>
                            {errors.content}
                        </div>
                    )}
                </div>
                <div className="form-group mt-2">
                    <label className="fw-bold" htmlFor="description">Description (optional)</label>
                    <textarea
                        type="text"
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                        rows="3"
                        id="description"
                        name="description"
                        onChange={(e) => setData('description', e.target.value)}
                    ></textarea>
                    <div id="descriptionHelp" className="form-text">
                        Brief description that will be displayed in the card post (max of 150 characters).
                        If not informed, the beginning of the post content will be used.
                    </div>
                    {errors.description && (
                        <div className={styles.validation_error}>
                            {errors.description}
                        </div>
                    )}
                </div>
                <div className="form-group mt-2">
                    <label className="fw-bold" htmlFor="cover_image">Post cover</label>
                    <input
                        type="file"
                        className={`form-control ${errors.cover_image ? 'is-invalid' : ''}`}
                        id="cover_image"
                        name="cover_image"
                        onChange={(e) => {
                            showPreview(e);
                            setData('cover_image', e.target.files[0]);
                        }}
                    />
                    {errors.cover_image && (
                        <div className={styles.validation_error}>
                            {errors.cover_image}
                        </div>
                    )}
                    <img className={styles.image_preview} id="image-preview" />
                </div>
                <button className="confirmation-button btn btn-primary mt-2 mb-2" disabled={processing}>Save</button>
            </form>
        </>
    );
}

import { Link } from "@inertiajs/react";

export default function Pagination({ current_page, pagination_links }) {

    // This function works with the values obtained from "$model->links()->elements" in the controller
    const renderListItens = () => {

        let listItens = [];

        Object.values(pagination_links).map(item => {
            if (typeof item === 'string') {
                listItens.push(
                    <li className='page-item disabled' key={listItens.length}>
                        <a className="page-link" href="#">...</a>
                    </li>
                );
            } else {
                Object.entries(item).map( ([pageNumber, url]) => {
                    listItens.push(
                        <li className={`page-item ${current_page == pageNumber ? 'active' : ''}`} key={listItens.length}>
                            <Link
                                className="page-link"
                                href={url}
                                method="get"
                                as="button"
                                type="button"
                            >
                                {pageNumber}
                            </Link>
                        </li>
                    );
                });
            }
        });

        return listItens;
    }

    return (
        <nav>
            <ul className="pagination">
                {renderListItens()}
            </ul>
        </nav>
    );
}

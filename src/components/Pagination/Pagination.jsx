import ReactPaginate from 'react-paginate';
import { setCurrentPage } from '../../redux/slices/postsSlice';

import styles from './Pagination.module.scss';

const Pagination = ({ dispatch, currentPage }) => {
  return (
    <ReactPaginate
      containerClassName={styles.root}
      activeLinkClassName={styles.active}
      pageLinkClassName={styles.page}
      previousLinkClassName={styles.previous}
      nextLinkClassName={styles.next}
      disabledLinkClassName={styles.disabled}
      nextLabel="Next"
      onPageChange={(e) => dispatch(setCurrentPage(e.selected))}
      pageRangeDisplayed={3}
      pageCount={10}
      forcePage={currentPage - 1}
      previousLabel="Prev"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;

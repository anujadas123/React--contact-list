import React from "react";
import ReactPaginate from "react-paginate";
import css from "./pagination.module.css"



const Pagination = ({ pageCount, handlePagination }) => {
  return (
    <>
      <ReactPaginate
        previousLabel="< previous"
        nextLabel="next >"
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePagination}


        // css

        containerClassName={css.Pagination}
        pageClassName={css.Page_item}
        previousClassName={css.Page_item}
        previousLinkClassName={css.Page_link}
        nextClassName={css.Page_item}
        nextLinkClassName={css.Page_link}
        breakClassName={css.Page_item}
        activeClassName={css.Page_item}
      />
    </>
  );
};

export default Pagination;
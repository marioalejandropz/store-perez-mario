import { useState } from "react";

//Pagination function
function usePagination(data, itemsPerPage) {
   //state
   const [currentPage, setCurrentPage] = useState(1);
   const maxPage = Math.ceil(data.length / itemsPerPage);

   //Returning data of the current page
   function currentData() {
      const begin = (currentPage - 1) * itemsPerPage;
      const end = begin + itemsPerPage;
      return data.slice(begin, end);
   }

   //Next page function
   function next() {
      setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
   }

   //Previous Page function
   function prev() {
      setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
   }

   //Jump page function
   function jump(page) {
      const pageNumber = Math.max(1, page);
      setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
   }

   return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;

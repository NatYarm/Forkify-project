import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    const prev = `<button data-goto="${
      curPage - 1
    }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Prev</span>
  </button>`;

    const next = `
  <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
      <span>Next</span>
      <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
      </svg>
  </button> 
`;

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return next;
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return prev;
    }
    // Other page
    if (curPage < numPages) {
      return prev + next;
    }
    // Page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();

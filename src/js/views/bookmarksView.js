//import View from './View.js';
import icons from 'url:../../img/icons.svg';
import PreviewView from './previewView.js';

class BookmarksView extends PreviewView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it.';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }
}

export default new BookmarksView();

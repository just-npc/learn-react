import SearchResult from "./Search-result";

export default function SearchForm() {
  return (
    <>
      <section>
        <h2>Cari Buku</h2>
        <form id="searchBook" data-testid="searchBookForm">
          <label for="searchBookTitle">Judul</label>
          <input id="searchBookTitle" type="text" data-testid="searchBookFormTitleInput" />
          <button id="searchSubmit" type="submit" data-testid="searchBookFormSubmitButton">
            Cari
          </button>
        </form>
      </section>

      <SearchResult />
    </>
  )
}

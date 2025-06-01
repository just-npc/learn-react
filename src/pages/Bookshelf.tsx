import BookCard from "../components/Book-card.tsx";
import InputForm from "../components/Input-form.tsx"
import SearchForm from "../components/Search-form.tsx";

export default function Bookshelf() {
  return (
    <>
      <header>
        <h1>Bookshelf App</h1>
      </header>

      <main>
        <InputForm />
        <SearchForm />

        <BookCard>
          <h2>Belum selesai dibaca</h2>

          <div id="incompleteBookList" data-testid="incompleteBookList">

            <div className="book-item" data-bookid="123123123" data-testid="bookItem">
              <h3 data-testid="bookItemTitle">Judul Buku 1</h3>
              <p data-testid="bookItemAuthor">Penulis: Penulis Buku 1</p>
              <p data-testid="bookItemYear">Tahun: 2030</p>
              <div>
                <button className="complete-btn" data-testid="bookItemIsCompleteButton">Selesai dibaca</button>
                <button className="delete-btn" data-testid="bookItemDeleteButton">Hapus Buku</button>
                <button className="edit-btn" data-testid="bookItemEditButton">Edit Buku</button>
              </div>
            </div>
          </div>
        </BookCard>

        <BookCard>
          <h2>Selesai dibaca</h2>

          <div id="completeBookList" data-testid="completeBookList">

            <div className="book-item" data-bookid="456456456" data-testid="bookItem">
              <h3 data-testid="bookItemTitle">Judul Buku 2</h3>
              <p data-testid="bookItemAuthor">Penulis: Penulis Buku 2</p>
              <p data-testid="bookItemYear">Tahun: 2030</p>
              <div>
                <button className="complete-btn" data-testid="bookItemIsCompleteButton">Selesai dibaca</button>
                <button className="delete-btn" data-testid="bookItemDeleteButton">Hapus Buku</button>
                <button className="edit-btn" data-testid="bookItemEditButton">Edit Buku</button>
              </div>
            </div>
          </div>
        </BookCard>
      </main>
    </>
  );
}

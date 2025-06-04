// import type { ComponentChildren } from 'preact'

import type { BookType } from "../utils/utils";

interface CardProps {
  // children: ComponentChildren;
  data: BookType[];
}

export default function BookCard({ data }: CardProps) {
  const completeBook = data.filter((book) => book.isComplete);
  const incompleteBook = data.filter((book) => !book.isComplete);

  return (
    <>
      <section className="card">
        <h2>Belum selesai dibaca</h2>
        <div id="incompleteBookList" data-testid="incompleteBookList">
          {incompleteBook.map((book) => {
            return (
              <div className="book-item" data-bookid={book.id} data-testid="bookItem">
                <h3 data-testid="bookItemTitle">
                  {book.title}
                </h3>
                <p data-testid="bookItemAuthor">Penulis: {book.author}</p>
                <p data-testid="bookItemYear">Tahun: {book.year}</p>
                <div>
                  <button className="complete-btn" data-testid="bookItemIsCompleteButton">Selesai dibaca</button>
                  <button className="delete-btn" data-testid="bookItemDeleteButton">Hapus Buku</button>
                  <button className="edit-btn" data-testid="bookItemEditButton">Edit Buku</button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* {children} */}

      <section className="card">
        <h2>Selesai dibaca</h2>
        <div id="completeBookList" data-testid="completeBookList">
          {completeBook.map((book) => {
            return (
              <div className="book-item" data-bookid={book.id} data-testid="bookItem">
                <h3 data-testid="bookItemTitle">
                  {book.title}
                </h3>
                <p data-testid="bookItemAuthor">Penulis: {book.author}</p>
                <p data-testid="bookItemYear">Tahun: {book.year}</p>
                <div>
                  <button className="complete-btn" data-testid="bookItemIsCompleteButton">Belum selesai dibaca</button>
                  <button className="delete-btn" data-testid="bookItemDeleteButton">Hapus Buku</button>
                  <button className="edit-btn" data-testid="bookItemEditButton">Edit Buku</button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
}

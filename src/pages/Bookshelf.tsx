import { useEffect, useState } from "preact/hooks";
import BookCard from "../components/Book-card.tsx";
import InputForm from "../components/Input-form.tsx"
import SearchForm from "../components/Search-form.tsx";
import { STORAGE_KEY, type BookType } from "../utils/utils.ts";
import Modal from "../components/Modals.tsx";

export default function Bookshelf() {
  let bookId;
  const [books, setBooks] = useState<BookType[]>([]);
  const [modal, setModal] = useState(false);
  const [editBookId, setEditBookId] = useState<number | null>(null);


  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookYear, setBookYear] = useState("");
  const [bookIsComplete, setBookIsComplete] = useState(false);
  // const [editableBook, setEditableBook] = useState<BookType | null>(null);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setBooks(JSON.parse(data));
    }
    console.log(JSON.parse(data!));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  const handleSubmit = (book: BookType) => {
    setBooks([...books, book]);
  }

  const handleChange = (id: number) => {
    const updatedBook = books.map((book) => book.id === id ? { ...book, isComplete: !book.isComplete } : book);
    setBooks(updatedBook);
  }

  const handleDelete = (id: number) => {
    const filtereddBook = books.filter((book) => book.id !== id);
    setBooks(filtereddBook);
  }

  const modalOpen = (id: number) => {
    setModal(true)
    bookId = id;
    setEditBookId(bookId)
  }

  console.log(editBookId);

  const resetForm = () => {
    setBookTitle("");
    setBookAuthor("");
    setBookYear("");
    setBookIsComplete(false);
  }

  const handleEditSubmit = (editedBook: BookType) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === editedBook.id ? editedBook : book
      )
    );
  };

  return (
    <>
      <header>
        <h1>Bookshelf App</h1>
      </header>

      <main>
        <InputForm onSubmit={handleSubmit} onReset={resetForm} formState={{
          bookTitle: bookTitle,
          setBookTitle: setBookTitle,
          bookAuthor: bookAuthor,
          setBookAuthor: setBookAuthor,
          bookYear: bookYear,
          setBookYear: setBookYear,
          bookIsComplete: bookIsComplete,
          setBookIsComplete: setBookIsComplete
        }} />
        <SearchForm />

        <BookCard data={books} handleChanges={handleChange} handleDelete={handleDelete} openModal={modalOpen} />

        {modal ? <Modal onReset={resetForm} onEditSubmit={handleEditSubmit} data={books} bookState={{
          editId: editBookId,
          setEditBookId: setEditBookId,
          bookTitle: bookTitle,
          setBookTitle: setBookTitle,
          bookAuthor: bookAuthor,
          setBookAuthor: setBookAuthor,
          bookYear: bookYear,
          setBookYear: setBookYear,
          bookIsComplete: bookIsComplete,
          setBookIsComplete: setBookIsComplete,
          setModal: setModal
        }} /> : ""}

      </main>
    </>
  );
}
// booklist={books} setBookList={setBooks}
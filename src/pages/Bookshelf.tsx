import { useEffect, useState } from "preact/hooks";
import BookCard from "../components/Book-card.tsx";
import InputForm from "../components/Input-form.tsx"
import SearchForm from "../components/Search-form.tsx";
import { STORAGE_KEY, type BookType } from "../utils/utils.ts";
import Modal from "../components/Modals.tsx";

export default function Bookshelf() {
  const [books, setBooks] = useState<BookType[]>([]);
  const [modal, setModal] = useState(false);

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

  const handleEdit = (value: boolean) => {
    setModal(value)
    console.log(value);
  }

  return (
    <>
      <header>
        <h1>Bookshelf App</h1>
      </header>

      <main>
        <InputForm onSubmit={handleSubmit} />
        <SearchForm />

        <BookCard data={books} handleChanges={handleChange} handleDelete={handleDelete} openModal={handleEdit} />

        {modal ? <Modal /> : ""}

      </main>
    </>
  );
}

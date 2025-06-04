import { useEffect, useState } from "preact/hooks";
import BookCard from "../components/Book-card.tsx";
import InputForm from "../components/Input-form.tsx"
import SearchForm from "../components/Search-form.tsx";
import { STORAGE_KEY, type BookType } from "../utils/utils.ts";

export default function Bookshelf() {
  const [books, setBooks] = useState<BookType[]>([]);

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

  return (
    <>
      <header>
        <h1>Bookshelf App</h1>
      </header>

      <main>
        <InputForm onSubmit={handleSubmit} />
        <SearchForm />

        <BookCard data={books} />

      </main>
    </>
  );
}

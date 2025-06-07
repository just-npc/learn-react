import type React from "preact/compat";
import { generateBookObject, generateId, type BookType } from "../utils/utils";
interface BokFormState {
  bookTitle: string;
  setBookTitle: React.Dispatch<React.SetStateAction<string>>;
  bookAuthor: string;
  setBookAuthor: React.Dispatch<React.SetStateAction<string>>;
  bookYear: string;
  setBookYear: React.Dispatch<React.SetStateAction<string>>;
  bookIsComplete: boolean;
  setBookIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}


interface InputFormProps {
  onSubmit: (book: BookType) => void;
  formState: BokFormState;
  onReset: () => void;
}

export default function InputForm({ onSubmit, onReset, formState }: InputFormProps) {
  const { bookTitle, setBookTitle, bookAuthor, setBookAuthor, bookYear, setBookYear, bookIsComplete, setBookIsComplete } = formState;

  // const [bookTitle, setBookTitle] = useState("");
  // const [bookAuthor, setBookAuthor] = useState("");
  // const [bookYear, setBookYear] = useState("");
  // const [bookIsComplete, setBookIsComplete] = useState(false);



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // masih belum selesai
    const id: number = generateId();
    const year = parseInt(bookYear)
    const title: string = bookTitle;
    const author: string = bookAuthor;
    const isComplete = bookIsComplete;

    const bookObject = generateBookObject({ id, title, author, year, isComplete });
    console.log(bookObject);
    onSubmit(bookObject);
    onReset();
  }

  return (
    <>
      <section className="card">
        <h2>Tambah Buku Baru</h2>
        <form id="bookForm" data-testid="bookForm" onSubmit={handleSubmit}>
          <div>
            <label for="bookFormTitle">Judul</label>
            <input value={bookTitle} onChange={(e) => setBookTitle((e.target as HTMLInputElement).value)} id="bookFormTitle" type="text" required data-testid="bookFormTitleInput" />
          </div>
          <div>
            <label for="bookFormAuthor">Penulis</label>
            <input value={bookAuthor} onChange={(e) => setBookAuthor((e.target as HTMLInputElement).value)} id="bookFormAuthor" type="text" required data-testid="bookFormAuthorInput" />
          </div>
          <div>
            <label for="bookFormYear">Tahun</label>
            <input value={bookYear} onChange={(e) => setBookYear((e.target as HTMLInputElement).value)} id="bookFormYear" type="number" required data-testid="bookFormYearInput" />
          </div>
          <div>
            <label for="bookFormIsComplete">Selesai dibaca</label>
            <input defaultChecked={bookIsComplete} checked={bookIsComplete} onChange={(e) => setBookIsComplete((e.target as HTMLInputElement).checked)} id="bookFormIsComplete" type="checkbox" data-testid="bookFormIsCompleteCheckbox" />
          </div>
          <button className="submit-btn" id="bookFormSubmit" type="submit" data-testid="bookFormSubmitButton">
            Masukkan Buku ke rak
          </button>
        </form>
      </section>
    </>
  );
}

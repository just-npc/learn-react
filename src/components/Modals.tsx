import type React from "preact/compat";
import type { BookType } from "../utils/utils";
// import type { BookType } from "../utils/utils";

interface BookState {
  editId: number | null,
  setEditBookId: React.Dispatch<React.SetStateAction<number | null>>;
  bookTitle: string;
  setBookTitle: React.Dispatch<React.SetStateAction<string>>;
  bookAuthor: string;
  setBookAuthor: React.Dispatch<React.SetStateAction<string>>;
  bookYear: string;
  setBookYear: React.Dispatch<React.SetStateAction<string>>;
  bookIsComplete: boolean;
  setBookIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalProps {
  bookState: BookState;
  onReset: () => void;
  data: BookType[];
  onEditSubmit: (editedBook: BookType) => void
}

export default function Modal({ onReset, onEditSubmit, data, bookState }: ModalProps) {
  const { editId, setEditBookId, bookTitle, setBookTitle, bookAuthor, setBookAuthor, bookYear, setBookYear, bookIsComplete, setBookIsComplete, setModal } = bookState

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();

    const index = data.findIndex((book) => book.id === editId);

    if (index !== -1) {
      const editedBook: BookType = {
        id: editId!,
        title: bookTitle,
        author: bookAuthor,
        year: parseInt(bookYear),
        isComplete: bookIsComplete
      }

      onEditSubmit(editedBook);
    }

    setModal(false);
    onReset();
    setEditBookId(null);
  }

  return (
    <div className="modal" id="modal">
      <h2>Tambah Buku Baru</h2>
      <div className="modal-content">
        <form id="bookFormEdit" data-testid="bookFormEdit" onSubmit={handleEdit}>
          <div>
            <label for="bookFormTitleEdit">Judul</label>
            <input value={bookTitle} onChange={(e) => setBookTitle((e.target as HTMLInputElement).value)} id="bookFormTitleEdit" type="text" required data-testid="bookFormTitleInputEdit" />
          </div>
          <div>
            <label for="bookFormAuthorEdit">Penulis</label>
            <input value={bookAuthor} onChange={(e) => setBookAuthor((e.target as HTMLInputElement).value)} id="bookFormAuthorEdit" type="text" required data-testid="bookFormAuthorInputEdit" />
          </div>
          <div>
            <label for="bookFormYearEdit">Tahun</label>
            <input value={bookYear} onChange={(e) => setBookYear((e.target as HTMLInputElement).value)} id="bookFormYearEdit" type="number" required data-testid="bookFormYearInputEdit" />
          </div>
          <div>
            <label for="bookFormIsCompleteEdit">Selesai dibaca</label>
            <input defaultChecked={bookIsComplete} checked={bookIsComplete} onChange={(e) => setBookIsComplete((e.target as HTMLInputElement).checked)} id="bookFormIsCompleteEdit" type="checkbox" data-testid="bookFormIsCompleteCheckboxEdit" />
          </div>
          <button className="submit-btn" id="bookFormSubmitEdit" type="submit" data-testid="bookFormSubmitEdit">
            Selesai Edit
          </button>
        </form>
      </div>
    </div>
  )
}
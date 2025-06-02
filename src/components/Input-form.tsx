import type React from "preact/compat";
import { generateId } from "../utils/utils";
import { useState } from "preact/hooks";

export default function InputForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // masih belum selesai
    const id: number = generateId();
    console.log(id)
    // const title: string
  }



  return (
    <>
      <section className="card">
        <h2>Tambah Buku Baru</h2>
        <form id="bookForm" data-testid="bookForm" onSubmit={handleSubmit}>
          <div>
            <label for="bookFormTitle">Judul</label>
            <input value={title} onChange={(e) => setTitle((e.target as HTMLInputElement).value)} id="bookFormTitle" type="text" required data-testid="bookFormTitleInput" />
          </div>
          <div>
            <label for="bookFormAuthor">Penulis</label>
            <input value={author} onChange={(e) => setAuthor((e.target as HTMLInputElement).value)} id="bookFormAuthor" type="text" required data-testid="bookFormAuthorInput" />
          </div>
          <div>
            <label for="bookFormYear">Tahun</label>
            <input value={year} onChange={(e) => setYear((e.target as HTMLInputElement).value)} id="bookFormYear" type="number" required data-testid="bookFormYearInput" />
          </div>
          <div>
            <label for="bookFormIsComplete">Selesai dibaca</label>
            <input checked={isComplete} onChange={(e) => setIsComplete((e.target as HTMLInputElement).checked)} id="bookFormIsComplete" type="checkbox" data-testid="bookFormIsCompleteCheckbox" />
          </div>
          <button className="submit-btn" id="bookFormSubmit" type="submit" data-testid="bookFormSubmitButton">
            Masukkan Buku ke rak
          </button>
        </form>
      </section>
    </>
  );
}

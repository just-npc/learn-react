export default function InputForm() {
  return (
    <>
      <section class="card">
        <h2>Tambah Buku Baru</h2>
        <form id="bookForm" data-testid="bookForm">
          <div>
            <label for="bookFormTitle">Judul</label>
            <input id="bookFormTitle" type="text" required data-testid="bookFormTitleInput" />
          </div>
          <div>
            <label for="bookFormAuthor">Penulis</label>
            <input id="bookFormAuthor" type="text" required data-testid="bookFormAuthorInput" />
          </div>
          <div>
            <label for="bookFormYear">Tahun</label>
            <input id="bookFormYear" type="number" required data-testid="bookFormYearInput" />
          </div>
          <div>
            <label for="bookFormIsComplete">Selesai dibaca</label>
            <input id="bookFormIsComplete" type="checkbox" data-testid="bookFormIsCompleteCheckbox" />
          </div>
          <button class="submit-btn" id="bookFormSubmit" type="submit" data-testid="bookFormSubmitButton">
            Masukkan Buku ke rak
          </button>
        </form>
      </section>
    </>
  );
}

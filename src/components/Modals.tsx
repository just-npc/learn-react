export default function Modal() {
  return (
    <div className="modal" id="modal">
      <h2>Tambah Buku Baru</h2>
      <div className="modal-content">
        <form id="bookFormEdit" data-testid="bookFormEdit">
          <div>
            <label for="bookFormTitleEdit">Judul</label>
            <input id="bookFormTitleEdit" type="text" required data-testid="bookFormTitleInputEdit" />
          </div>
          <div>
            <label for="bookFormAuthorEdit">Penulis</label>
            <input id="bookFormAuthorEdit" type="text" required data-testid="bookFormAuthorInputEdit" />
          </div>
          <div>
            <label for="bookFormYearEdit">Tahun</label>
            <input id="bookFormYearEdit" type="number" required data-testid="bookFormYearInputEdit" />
          </div>
          <div>
            <label for="bookFormIsCompleteEdit">Selesai dibaca</label>
            <input id="bookFormIsCompleteEdit" type="checkbox" data-testid="bookFormIsCompleteCheckboxEdit" />
          </div>
          <button className="submit-btn" id="bookFormSubmitEdit" type="submit" data-testid="bookFormSubmitEdit">
            Selesai Edit
          </button>
        </form>
      </div>
    </div>
  )
}
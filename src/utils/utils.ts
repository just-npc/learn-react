interface BookType {
  id: number;
  title: string;
  author: string;
  year: number;
  isComplete: boolean;
}

let books: BookType[] = [];

const SAVED_EVENT: string = "saved-book";
const STORAGE_KEY: string = "BOOKSHELF_APPS";

function isStorageExist(): boolean {
  if (typeof Storage === undefined) {
    alert("browser kamu tidak mendukung local storage");
    return false;
  }

  return true;
}

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function generateId(): number {
  return Number(new Date());
}

function generateBookObject<T extends BookType>(book: T): BookType {
  return { ...book };
}

function loadDataFromStorage(): void {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData!);

  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }
}

export { saveData, generateId, generateBookObject, loadDataFromStorage };

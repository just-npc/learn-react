interface BookType {
  id: number;
  title: string;
  author: string;
  year: number;
  isComplete: boolean;
}

// const SAVED_EVENT: string = "saved-book";
const STORAGE_KEY: string = "BOOKSHELF_APPS";

function generateId(): number {
  return Number(new Date());
}

function generateBookObject<T extends BookType>(book: T): BookType {
  return { ...book };
}

export {
  // SAVED_EVENT,
  type BookType,
  STORAGE_KEY,
  generateId,
  generateBookObject,
};

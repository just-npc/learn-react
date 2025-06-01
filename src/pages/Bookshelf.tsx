import InputForm from "../components/Input-form.tsx"
import SearchForm from "../components/Search-form.tsx";

export default function Bookshelf() {
  return (
    <>
      <header>
        <h1>Bookshelf App</h1>
      </header>

      <main>
        <InputForm />
        <SearchForm />
      </main>
    </>
  );
}

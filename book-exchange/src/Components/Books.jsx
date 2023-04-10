import { NavBar } from "./Navbar";
import { ComponentBooks } from "./ComponentBooks";
import { Footer } from "./Footer";
import { BookList } from "./BookList";

const Books = () => {
  return (
    <>
      <NavBar />
      <BookList />
      <ComponentBooks />
      <Footer />
    </>
  );
};

export { Books };

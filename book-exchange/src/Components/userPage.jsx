import { NavBar } from "./Navbar";
import { BookList } from "./BookList";
import { BookForm } from "./BookForm";
import { Footer } from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";


const UserPage = () => {
  return (
    <>
      <NavBar />
      <div className="container">
      <div className="row mt-3">
        <BookList />
        <div className="col-lg-1"></div>
        <BookForm />
      </div>
    </div>
      <Footer />
    </>
  );
};

export { UserPage };

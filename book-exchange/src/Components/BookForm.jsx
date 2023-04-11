import { useState } from "react";
import swal from "sweetalert";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

const BookForm = () => {
  const { addBook } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [explanation, setExplanation] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: title,
      author: author,
      isbnNumber: isbnNumber,
      explanation: explanation,
    };
    if (title !== "" && author !== "" && isbnNumber !== "" && explanation !=="") {
      addBook(newBook);
      setTitle("");
      setAuthor("");
      setIsbnNumber("");
      setExplanation("");
    } else {
      swal("Please enter all of information!");
    }
  };

  return (
    <div className="col-lg-5">
      <h4 className="text-center">Add a New Book</h4>
      <hr />
      <form onSubmit={handleSubmit} className="border border-1 p-3 rounded mt-5">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the Book Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Enter Author Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            ISBN Number
          </label>
          <input
            type="text"
            value={isbnNumber}
            onChange={(e) => setIsbnNumber(e.target.value)}
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="Enter ISBN Number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            Explanation
          </label>
          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            rows="5"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="Enter Explanation"
          />
        </div>
        <button data-testid="add-button" type="submit" className="nav-button">
          Add Book
        </button>
      </form>
    </div>
  );
};

export {BookForm};

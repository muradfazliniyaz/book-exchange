import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

const BookList = () => {
  const { bookList } = useContext(UserContext);

  const showAllBook = () => {
    const template = bookList.map((book, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>
            <p>{book?.id}</p>
          </td>
          <td>
            <p>{book?.title}</p>
          </td>
          <td>
            <p>{book?.author}</p>
          </td>
          <td>
            <p>{book?.isbnNumber}</p>
          </td>
          <td>
            <p>{book?.explanation}</p>
          </td>
        </tr>
      );
    });

    return template;
  };

  return (
    <div className="col-lg-6">
      <h4 className="text-center">Book List</h4>
      <hr />
      <table className="table table-hover mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">ISBN Number</th>
            <th scope="col">Explanation</th>
          </tr>
        </thead>
        <tbody>{showAllBook()}</tbody>
      </table>
    </div>
  );
};

export {BookList};

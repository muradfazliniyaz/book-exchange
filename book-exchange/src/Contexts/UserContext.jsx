import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [bookList, setBookList] = useState([]);

  const getBookList = async () => {
    try {
      const response = await fetch("http://localhost:9000/books");
      const data = await response.json();
      console.log(data)
      setBookList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookList();
  }, []);

  const addBook = async (pBook) => {
    const newBook = {
      title: pBook.title,
      author: pBook.author,
      isbnNumber: pBook.isbnNumber,
      explanation: pBook.explanation,
    };

    await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: { "Content-Type": "application/json" },
    });

    await getBookList();
  };

  return <UserContext.Provider value={{ addBook, bookList }}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;

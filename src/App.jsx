import { useState, useEffect } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import ViewBook from "./components/ViewBook";
import BookForm from "./components/BookForm";

const API_URL = 'https://node71398-node10079.proen.app.ruk-com.cloud/books';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectBook, setSelectBook] = useState(null);
  const [viewMode, setViewMode] = useState('list');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleError = (err) => {
    if (err.response) {
      setError(`Error: ${err.response.statue} - ${err.response.data.message}`);
    } else if (err.request) {
      setError('Network error: No response received from server.');
    } else {
      setError(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setBooks(response.data);
        setError(null);
        setLoading(false);
      } catch (err) {
        handleError(err);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleView = (id) => {
    setSelectBook(books.find((book) => book.id === id));
    setViewMode('view');
  };

  const handleEdit = (id) => {
    setSelectBook(books.find((book) => book.id === id) || null);
    setViewMode('edit');
  };

  const handleDelete = async (id) => {
    
  }
}
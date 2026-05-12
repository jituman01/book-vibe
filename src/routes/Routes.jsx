import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Homepage from '../pages/homepage/Homepage';
import Books from '../pages/books/Books';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import BookDetails from '../pages/bookDetails/BookDetails';
import ReadPage from '../pages/readPage/ReadPage';
('ReadPage');

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'books',
        element: <Books />,
      },
      {
        path: 'bookDetails/:bookId',
        element: <BookDetails />,
        loader: () => fetch('/booksData.json'),
      },
      {
        path: 'read',
        element: <ReadPage />,
      },
    ],
  },
]);

import ContactList from './pages/ContactList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormContact from './pages/FormContact';

const router = createBrowserRouter([
  { path: '/', element: <ContactList /> },
  { path: '/form-contact', element: <FormContact /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

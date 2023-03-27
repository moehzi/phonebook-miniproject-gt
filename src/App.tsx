import ContactList from './pages/ContactList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormContact from './pages/FormContact';
import FormEdit from './pages/FormContact/FormEdit';

const router = createBrowserRouter([
  { path: '/', element: <ContactList /> },
  {
    path: 'form-contact',
    element: <FormContact />,
    children: [{ path: 'edit/:contactId', element: <FormEdit /> }],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

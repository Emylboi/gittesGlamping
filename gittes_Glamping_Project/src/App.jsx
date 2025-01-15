import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import StaysPage from "./pages/stays/StaysPage";
import ActivitiesPage from "./pages/activities/ActivitiesPage";
import ContactsPage from "./pages/contact/ContactsPage";
import Navigation from "./components/common/Navigation/Navigation";
import BackofficeUsersPage from "./pages/backoffice/pages/BackofficeUsersPage";
import BackofficePage from "./pages/backoffice/BackofficePage";
import BoUsersForm from "./components/backoffice/Users/outlet/BoUsersForm";
import UsersPage from "./pages/users/UserPage";
import BackofficeStaysPage from "./pages/backoffice/pages/BackofficeStaysPage";
import BoStaysForm from "./components/backoffice/Stays/outlet/BoStaysForm";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./hooks/useAuth";
import Login from "./components/login/Login";

// Common Pages.

// Application
const App = () => {
  const { signedIn } = useAuth();
  // Setting Up Routes
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    {
      path: "/stays",
      element: <StaysPage></StaysPage>,
    },
    {
      path: "/activities",
      element: <ActivitiesPage></ActivitiesPage>,
    },
    {
      path: "/contacts",
      element: <ContactsPage></ContactsPage>,
    },
    {
      path: "/users",
      element: <UsersPage></UsersPage>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "*",
      element: <div>NOT 404 FOUND</div>,
    },

    {
      path: "/backoffice",
      element: (
        <ProtectedRoute isAllowed={signedIn}>
          <BackofficePage />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/backoffice/users",
          element: <BackofficeUsersPage></BackofficeUsersPage>,
          children: [
            {
              path: "/backoffice/users/add",
              element: <BoUsersForm></BoUsersForm>,
            },
            {
              path: "/backoffice/users/edit/:id",
              element: <BoUsersForm></BoUsersForm>,
            },
          ],
        },
        {
          path: "/backoffice/stays",
          element: <BackofficeStaysPage></BackofficeStaysPage>,
          children: [
            {
              path: "/backoffice/stays/add",
              element: <BoStaysForm></BoStaysForm>,
            },
            {
              path: "/backoffice/stays/edit/:id",
              element: <BoStaysForm></BoStaysForm>,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <Navigation></Navigation>
        <div className="globale-page-wrapper">{routes}</div>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
};

export default App;

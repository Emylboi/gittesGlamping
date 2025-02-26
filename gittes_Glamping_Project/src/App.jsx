import { useRoutes } from "react-router-dom";

// Pages
import ActivitiesPage from "./pages/activities/ActivitiesPage";
import ContactsPage from "./pages/contact/ContactsPage";
import HomePage from "./pages/home/HomePage";
import StayPage from "./pages/stay/StayPage";
import StaysPage from "./pages/stays/StaysPage";
import UsersPage from "./pages/users/UserPage";

// Backoffice Pages
import BackofficePage from "./pages/backoffice/BackofficePage";
import BackofficeActivitiesPage from "./pages/backoffice/pages/BackofficeActivitiesPage";
import BackofficeReviewsPage from "./pages/backoffice/pages/BackofficeReviewsPage";
import BackofficeStaysPage from "./pages/backoffice/pages/BackofficeStaysPage";
import BackofficeUsersPage from "./pages/backoffice/pages/BackofficeUsersPage";

// Backoffice Forms
import BoActivitiesForm from "./components/backoffice/Activities/outlet/BoActivitiesForm";
import BoReviewsForm from "./components/backoffice/Reviews/outlet/BoReviewsForm";
import BoStaysForm from "./components/backoffice/Stays/outlet/BoStaysForm";
import BoUsersForm from "./components/backoffice/Users/outlet/BoUsersForm";

// Components
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/login/Login";
import Header from "./components/common/Header/Header";
import useAuth from "./hooks/useAuth";

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
      path: "/stays/:id",
      element: <StayPage></StayPage>,
    },
    {
      path: "/activities",
      element: <ActivitiesPage></ActivitiesPage>,
    },
    {
      path: "/contact",
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
        {
          path: "/backoffice/reviews",
          element: <BackofficeReviewsPage></BackofficeReviewsPage>,
          children: [
            {
              path: "/backoffice/reviews/add",
              element: <BoReviewsForm></BoReviewsForm>,
            },
            {
              path: "/backoffice/reviews/edit/:id",
              element: <BoReviewsForm></BoReviewsForm>,
            },
          ],
        },
        {
          path: "/backoffice/activities",
          element: <BackofficeActivitiesPage></BackofficeActivitiesPage>,
          children: [
            {
              path: "/backoffice/activities/add",
              element: <BoActivitiesForm></BoActivitiesForm>,
            },
            {
              path: "/backoffice/activities/edit/:id",
              element: <BoActivitiesForm></BoActivitiesForm>,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <Header></Header>
        <div className="globale-page-wrapper">{routes}</div>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
};

export default App;

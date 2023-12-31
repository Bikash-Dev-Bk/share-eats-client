import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddFood from "../pages/AddFood/AddFood";
import MyFoodRequest from "../pages/MyFoodRequest/MyFoodRequest";
import ManageMyFoods from "../pages/ManageMyFoods/ManageMyFoods";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import PrivateRoute from "./PrivateRoute";
import ManageSingleFood from "../pages/ManageSingleFood/ManageSingleFood";
import UpdateFood from "../pages/UpdateFood/UpdateFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availablefoods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://share-eats-server.vercel.app/food/${params.id}`),
      },
      {
        path: "/addfood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/myfoodrequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/managemyfoods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://share-eats-server.vercel.app/food/${params.id}`),
      },
      {
        path: "/manage/:name",
        element: (
          <PrivateRoute>
            <ManageSingleFood></ManageSingleFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://share-eats-server.vercel.app/foodrequest/${params.name}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;

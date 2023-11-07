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
        path: "/addfood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/myfoodrequest",
        element: <MyFoodRequest></MyFoodRequest>,
      },
      {
        path: "/managemyfoods",
        element: <ManageMyFoods></ManageMyFoods>,
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

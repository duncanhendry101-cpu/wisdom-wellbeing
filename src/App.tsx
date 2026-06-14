// src/App.tsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "@/pages/Home/Home";
import { Layout } from "@/components/Layout/Layout";
import { HomeLayout } from "./pages/HomeLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}

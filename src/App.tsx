// src/App.tsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "@/pages/Home/Home";
import { Layout } from "@/components/Layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}

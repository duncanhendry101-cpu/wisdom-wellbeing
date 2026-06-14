import { ResourceProvider } from "@/context/ResourceContext";
import { Outlet } from "react-router-dom";

export function HomeLayout() {
  return (
    <ResourceProvider>
      <Outlet />
    </ResourceProvider>
  );
}

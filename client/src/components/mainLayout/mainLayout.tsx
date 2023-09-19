import { Outlet } from "react-router-dom";
import Header from "./header";

export const MainLayout : React.FC = () => <>
<main>
<Header/>
<Outlet/>
</main>
</>;
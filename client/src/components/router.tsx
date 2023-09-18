import { Route, Routes } from "react-router-dom";
import {Home} from './home';
import {Confession} from './confession';
import {Misdemeanour} from './misdemeanour';
import { NotFound } from "./notFound";
import { MainLayout } from "./mainLayout";


const Router : React.FC = () => (
  <Routes>
   <Route path= "/" element={<MainLayout/>}>
    <Route index element={<Home/>}/>
    <Route path= "confession" element={<Confession/>}/>
    <Route path= "misdemeanour" element={<Misdemeanour/>}/>
    <Route path= "*" element={<NotFound/>}/>
    </Route> 
  </Routes>
)

export default Router;
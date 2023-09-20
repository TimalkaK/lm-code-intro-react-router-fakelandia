import { Route, Routes } from "react-router-dom";
import {Home} from '../home';
import {Confession} from '../confession/confession';
import {Misdemeanours} from '../misdemeanours/misdemeanours';
import { NotFound } from "../notFound";
import { MainLayout } from "../mainLayout/mainLayout";


const Router : React.FC = () => (
  <Routes>
    <Route path= "/" element={<MainLayout/>}>
    <Route index element={<Home/>}/>
    <Route path= "confession" element={<Confession/>}/>
    <Route path= "misdemeanours" element={<Misdemeanours/>}/>
    <Route path= "*" element={<NotFound/>}/>
    </Route> 
  </Routes>
)

export default Router;
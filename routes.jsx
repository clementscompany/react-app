import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./src/pages/Home";
import Produtos from "./src/pages/Produtos";
import Contactos from "./src/pages/Contact";
import Dashboard from "./src/pages/Admin/views/Dashboard";
import DashProducts from "./src/pages/Admin/views/DashProducts";
import DasboardMessages from "./src/pages/Admin/views/DasboardMessages";
import DashboardMideas from "./src/pages/Admin/views/DashboardMideas";
import DashboardImages from "./src/pages/Admin/views/DashboardImages";
import Login from "./src/pages/Admin/views/Login";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/produtos" element={<Produtos/>} />
                <Route path="/contacto" element={<Contactos />} />
                <Route path="/admin" element={<Dashboard/>} />
                <Route path="/admin/produtos" element={ <DashProducts />}/>
                <Route path="/admin/messages" element={<DasboardMessages />} />
                <Route path="/admin/medias" element={<DashboardMideas />} />
                <Route path="/admin/images" element={<DashboardImages />} />
                <Route path="/admin/login"  element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;
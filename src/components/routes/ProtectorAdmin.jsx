import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({isAdmin}) => {
    //si no soy Administrador
    if(!isAdmin){
        return <Navigate to={'/'}></Navigate>
    }
    //si soy Administrador muestro las rutas
    return <Outlet/>
};

export default ProtectorAdmin;
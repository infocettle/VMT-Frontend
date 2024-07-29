import { Outlet, useRoutes } from "react-router-dom";
import Activation from "./Activation";
import Backup from "./Backup";
import Restore from "./Restore";
import Recover from "./Recover";
// import LockDomain from "./LockDomain";
// import CancelDomain from "./CancelDomain";


const MaintenanceRoute = () => {
    const routes = useRoutes([
        {path: 'activation', element: <Activation/>},
        {path: 'backup', element: <Backup/>},
        {path: 'restore', element: <Restore/>},
        {path: 'recover', element: <Recover/>},
        // {path: 'lock_domain', element: <LockDomain/>},
        // {path: 'cancel_domain', element: <CancelDomain/>}
    ])
  return routes || <Outlet/>
}

export default MaintenanceRoute

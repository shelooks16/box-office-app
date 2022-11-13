import { Outlet } from 'react-router-dom';
import AppTitle from './AppTitle';
import Navs from './Navs';

const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      <Navs />

      <Outlet />
    </div>
  );
};

export default MainLayout;

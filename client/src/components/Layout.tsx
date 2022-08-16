import { Outlet } from 'react-router-dom';


import Header from './Header';

function Layout() {
  // TODO: Check to see if the user has signed in or not
  return (
    <div className="layout bg-theme-white font-sans h-full w-screen">
      <Header />
      <Outlet />
    </div>
  );
}
export default Layout;
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/users/homePage";
//import ProfilePage from "./Pages/users/profilePage"
import { ROUTERS } from "./utils/router";
import MasterLayout from "./Pages/users/theme/masterLayout";

const renderUserRouter = () => {
  const userRouters = [
    { path: ROUTERS.USER.HOME, comment: <HomePage /> },
    //  {path:ROUTERS.USER.PROFILE,comment:<ProfilePage />},
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route Key={key} path={item.path} element={item.comment} />
        ))}
        ;
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;

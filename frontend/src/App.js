import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import AddFriendsScreen from "./screens/AddFriendsScreen";
import FriendScreen from "./screens/FriendScreen";

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const { userInfo } = useSelector((state) => state.auth);

//   return userInfo ? <Element /> : <Navigate to="/login" replace />;
// };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/mainscreen" element={<MainScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/users/workout/:id" element={<WorkoutScreen />} />
        <Route path="/profile/addfriends" element={<AddFriendsScreen />} />
        <Route path="/profile/friends/:friendId" element={<FriendScreen />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

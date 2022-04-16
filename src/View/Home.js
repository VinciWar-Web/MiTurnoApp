import { useDispatch } from "react-redux";
import { starLogout } from "../Redux/Actions/authActions";

export const Home = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(starLogout())
    console.log("Click")
  }

  return (
    <>
      <div>home</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

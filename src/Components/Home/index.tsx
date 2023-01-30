import styles from "./Home.module.css";
import { useLocation} from "react-router-dom"
export const Home = () => {
  const {state} = useLocation()
  return (
    <div>
      <h1>Home, my state in Redirection: {state}</h1>
    </div>
  );
};

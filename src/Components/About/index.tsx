import styles from "./About.module.css";
import { useLocation } from "react-router-dom";
export const About = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>About</h1>
      <p>Ocasionado pelo o, click do link= {state}</p>
    </div>
  );
};

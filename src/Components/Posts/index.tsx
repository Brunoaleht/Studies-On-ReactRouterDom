import styles from "./About.module.css";
import { useParams, useSearchParams, Outlet } from "react-router-dom";
export const Posts = () => {
  const params = useParams();
  const { id } = params;
  const [qs, setQs] = useSearchParams();
  return (
    <div>
      <h1>
        Post {`Param: ${id}`} e {`Qs: ${qs.get("page")}`}
      </h1>
      <Outlet />
    </div>
  );
};

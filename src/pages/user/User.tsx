import Single from "../../components/single/Single";
import { singleUser } from "../../data";
import "./user.scss";

const user = () => {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default user;

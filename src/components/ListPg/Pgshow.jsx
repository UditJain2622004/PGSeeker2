import PGListingPage from "./PGlistingPage";
import { useLocation } from "react-router-dom";

const Pgshow = () => {
  const location = useLocation();
  const data = location.state[0];
  const filters = location.state[1];

  return <PGListingPage pgs={data} filters={filters} />;
};

export default Pgshow;

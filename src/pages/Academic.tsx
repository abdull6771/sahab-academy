import { Navigate, useParams } from "react-router-dom";
import { getAcademic } from "@/data/academics";
import NotFound from "./NotFound";

const Academic = () => {
  const { stage } = useParams();
  const section = stage ? getAcademic(stage) : undefined;

  if (stage === "nursery") return <Navigate to="/academics/nursery" replace />;
  if (stage === "primary") return <Navigate to="/academics/primary" replace />;
  if (stage === "secondary") return <Navigate to="/academics/secondary" replace />;
  if (!section) return <NotFound />;

  return <NotFound />;
};

export default Academic;

import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const cookie = document.cookie;
  const navigate = useNavigate();

  useEffect(() => {
    if (cookie) {
      const cookies = cookie.split("; ");
      const userCookie = cookies.find((c) => c.startsWith("user"));

      if (userCookie) {
        navigate("/", { replace: true });
      }
    }
  }, [navigate]);

  return <div>{children}</div>;
};

export default PublicRoute;

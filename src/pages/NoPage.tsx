import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <h4 className="section-title my-14 text-center">404 Page Not Found</h4>
    </div>
  );
};

export default NoPage;

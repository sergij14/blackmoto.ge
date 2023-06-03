import React from "react";
import { useLocalize } from "../localization";
import { useNavigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const { t } = useLocalize();
  const navigate = useNavigate();

  return (
    <footer className="mt-auto py-8 container">
      <div className="footer text-lg md:text-xl">
        <p>
          &copy; {new Date().getFullYear()}, {t("terms.copyright")}
        </p>
        <button onClick={() => navigate("/admin")} className="btn">
          <LockClosedIcon width={20} />
          Admin
        </button>
      </div>
    </footer>
  );
};

export default Footer;

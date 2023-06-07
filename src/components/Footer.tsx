import React from "react";
import { useLocalize } from "../localization";
import { useNavigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import Socials from "./Socials";

const Footer = () => {
  const { t } = useLocalize();
  const navigate = useNavigate();

  return (
    <footer className="mt-auto py-8 container">
      <div className="footer text-lg md:text-xl">
        <div className="flex flex-col gap-2">
          <p>
            &copy; {new Date().getFullYear()}, {t("terms.copyright")}
          </p>
          <Socials cn="justify-center sm:justify-start" />
        </div>
        <button onClick={() => navigate("/admin")} className="btn">
          <LockClosedIcon width={20} />
          Admin
        </button>
      </div>
    </footer>
  );
};

export default Footer;

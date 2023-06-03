import React from "react";
import { useStore } from "../store";
import { userSignIn, userSignOut } from "../api/authMethods";
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import ItemForm from "../components/ItemForm/ItemForm";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { user } = useStore();
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <div className="flex flex-col gap-4 items-center pb-8 md:flex-row md:justify-between">
          <div className="flex gap-2 items-center">
            {user.photoURL && (
              <img src={user.photoURL} className="w-8 rounded-full" />
            )}
            {user.email}
          </div>
          <button className="btn" onClick={() => userSignOut(navigate)}>
            <ArrowLeftOnRectangleIcon /> Sign Out
          </button>
        </div>
      ) : (
        <button className="btn w-max" onClick={userSignIn}>
          <ArrowRightOnRectangleIcon /> Sign In
        </button>
      )}
      {user && (
        <div>
          <h4 className="section-title">Add Moto</h4>
          <ItemForm />
        </div>
      )}
    </>
  );
};

export default Admin;

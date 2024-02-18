"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  setUserId,
  setUsers,
  selectUserId,
  selectUsers,
  selectIsOnboarded,
  setUserName,
  setOnboarded,
} from "@/redux/features/state-slice";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { authService } from "@/app/api/auth";
import { fetchUser, fetchUsers } from "../api/user";
import LeftSidebar from "@/components/LeftSidebar";

export default function Home() {
  const [letSignIn, setLetSignIn] = useState(false);
  const userId = useSelector(selectUserId);
  const users = useSelector(selectUsers);
  const onboarded = useSelector(selectIsOnboarded);
  const dispatch = useDispatch();

  const handleAuth = async () => {
    try {
      const authId = await authService();
      if (authId) {
        const authUser = await fetchUser(authId);
        if (authUser) {
          dispatch(setUserId(authUser.id));
          dispatch(setUserName(authUser.name));
          dispatch(setOnboarded(authUser.onboarded));
        }
      } else setLetSignIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (letSignIn) {
      setLetSignIn(false);
      redirect("/sign-in");
    }
  }, [letSignIn]);

  const handleFetchUsers = async () => {
    try {
      const currentUsers = await fetchUsers();
      if (currentUsers) dispatch(setUsers(currentUsers));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
      if (userId && onboarded === false) redirect("/onboarding");
  }, [onboarded])

  useEffect(() => {
    if (!userId) handleAuth();
    else if (!users.length) handleFetchUsers();
  }, [userId]);

  return (
    <>
      <LeftSidebar />
      <section className="main-container">
        <div className="w-full">
          <section className="flex flex-col gap-10">Chat</section>
        </div>
      </section>
    </>
  );
}

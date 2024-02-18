"use client";
import { resetState } from "@/redux/features/state-slice";
import { SignIn } from "@clerk/nextjs";
import { useDispatch } from "react-redux";

export default function Page() {
  const dispatch = useDispatch();
  dispatch(resetState());
  return <SignIn />;
}
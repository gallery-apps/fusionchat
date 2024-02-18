"use client";
import { SignUp } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { resetState } from "@/redux/features/state-slice";

export default function Page() {
  const dispatch = useDispatch();
  dispatch(resetState());
  return <SignUp />;
}

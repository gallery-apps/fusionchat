import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";

function Header({ userName }: { userName: string }) {
  return (
    <div className="w-full bg-gray-200 border-b border-gray-400 shadow-md p-4 flex items-center justify-between">
      <div className="text-black flex items-center">
        <AccountCircleIcon />
        <span className="ml-2">{userName}</span>
      </div>
      <div className="flex gap-6 items-center">
        <IconButton>
          <VideocamOutlinedIcon />
        </IconButton>
        <IconButton>
          <LocalPhoneOutlinedIcon />
        </IconButton>
        <span className="text-gray-600">|</span>
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;

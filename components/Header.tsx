import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { ClickAwayListener, IconButton } from "@mui/material";
import { User } from "@/lib/actions/user.actions";

function Header({ user }: { user: User }) {
  return (
    <div className="w-full sticky top-0 p-2 h-20 bg-gray-200 border-b border-gray-400 z-10 flex items-center justify-between">
      <div className="text-black"> 
        <AccountCircleIcon />
        {user.username}
      </div>
      <div className="flex gap-6 items-center">
        <IconButton>
          <VideocamOutlinedIcon />
        </IconButton>
        <IconButton>
          <LocalPhoneOutlinedIcon />
        </IconButton>
        |
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


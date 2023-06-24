import { useAuth } from "@/context/authContext";
import { useChatContext } from "@/context/chatContext";
import { db } from "@/firebase/firebase";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import React from "react";
import ClickAwayListener from "react-click-away-listener";

const ChatMenu = ({ showMenu, setShowMenu }) => {
  const handleClickAway = () => {
    setShowMenu(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="w-[200px] absolute  top-[70px] right-5 bg-c0 z-10 rounded-md overflow-hidden">
        <ul className="flex flex-col py-2">
          <li className="flex items-center py-3 px-5 hover:bg-black cursor-pointer">
            Block User
          </li>

          <li className="flex items-center py-3 px-5 hover:bg-black cursor-pointer">
            Delete chat
          </li>
        </ul>
      </div>
    </ClickAwayListener>
  );
};

export default ChatMenu;
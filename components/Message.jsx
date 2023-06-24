import React from "react";
import { useAuth } from "@/context/authContext";
import Avatar from "./Avatar";
import { useChatContext } from "@/context/chatContext";

const message = ({ message }) => {
  const { currentUser } = useAuth();
  const { users, data } = useChatContext();

  const self = message.sender === currentUser.uid;

  return (
    <div className={`mb-5 max-w-[75%] ${self ? "self-end" : ""}`}>
      <div
        className={`flex items-end gap-3 mb-1 ${
          self ? "justify-start flex-row-reverse" : ""
        }`}
      >
        <Avatar
          size="small"
          user={self ? currentUser : users[data.user.uid]}
          className="mb-4"
        />
        <div
          className={`group flex flex-col gap-4 p-4 rounded-3xl relative break-all ${
            self ? "rounded-br-md bg-c5" : "rounded-bl-md bg-c1"
          }`}
        >
          message
        </div>
      </div>
      <div>date</div>
    </div>
  );
};

export default message;

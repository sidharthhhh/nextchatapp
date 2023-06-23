import React, { useEffect, useRef, useState } from "react";
import { useChatContext } from "@/context/chatContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { RiSearch2Line } from "react-icons/ri";
import Avatar from "./Avatar";
import { useAuth } from "@/context/authContext";



const Chats = () => {
  const {
     users,
     setUsers,
     selectedChat,
     serSelectedChat,
     chats, 
     setChats, } = useChatContext();
  const [search, setSearch] = useState("");
  const {currentUser} = useAuth()

  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      const updatedUsers = {};
      snapshot.forEach((doc) => {
        updatedUsers[doc.id] = doc.data();
        console.log(doc.data());
      });
      setUsers(updatedUsers);
    });
  }, []);

  useEffect(()=>{
    const getChats = () =>{
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc)=>{
        if(doc.exits()){
          const data = doc.data();
          setChats(data);
        }
      })
    }
    currentUser.uid && getChats();
  }, []);

  const filteredChats = Object.entries(chats || {})
  .sort((a,b)=>b[1].date-a[1].date)

  // console.log((filteredChats))

  return (
    <div className="flex flex-col h-full">
      <div className="shrink-0 sticky -top-[20px] z-10 flex justify-center w-full bg-c2 py-5">
        <RiSearch2Line className="absolute top-9 left-12 text-c3" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search username..."
          className="w-[300px] h-12 rounded-xl bg-c1/[0.5] pl-11 pr-5 placeholder:text-c3 outline-none text-base"
        />



          {/* yaha ul li tha...wo kaha gaya gaya */}


        <Avatar size= "x-larg" user={currentUser} />
        <div className="flex flex-col gap-1 grow relative">
          <span className="text-base text-white flex items-center justify-between">
            <div className="font-medium ">displayName</div>
            <div className="text-c3 text-xs">date</div>
          </span>
          <p className="text-sm text-c3 line-clamp-1 break-all">Last message</p>

          <span className="absolute right-0 top-7 min-w-[20px] h-5 rounded-full bg-red-500 justify-center items-center text-sm">5</span>
        </div>
      </div>
    </div>
  );
};

export default Chats;

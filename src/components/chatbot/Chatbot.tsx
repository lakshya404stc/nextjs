"use client"
import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "@/app/Context/store";
import "./chatbot.css"
import {MessageCircle, Send} from "lucide-react"
import { Heading } from "../heading";
import { MessageSquare, MessagesSquare } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { wrap } from "module";
import Spinner from "../Spinner";
const Chatbot = () => {
  const { userId, setUserId, data, setData } = useGlobalContext();
  const [loading,setLoading] = useState(false)

  const [chatMessages, setChatMessages] = useState([
    { message: "Hi there 👋 How can I help you today?", type: "incoming" }
  ]);
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendChat = async () => {
    setLoading(true)
    const user_id = userId
    if (!userInput.trim()) return;

    setChatMessages([
      ...chatMessages,
      { message: userInput.trim(), type: "outgoing" }
    ]);
    setUserInput("");

    try {
      
      const response = await axios.post("http://localhost:5000/ask", {
        question: userInput.trim(),
        id: userId
      });

      setChatMessages((prevMessages) => [
        ...prevMessages,
        { message: response.data.response, type: "incoming" }
      ]);
      
    } catch (error) {
      console.error("Error:", error);
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { message: "An error occurred while fetching data.", type: "incoming" }
      ]);
    }
    finally{
      setLoading(false)
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendChat();
    }
  };

  return (
  
    <div className="mt-10 h-[700px] pt-5 shadow-lg rounded-lg border w-[100%] mx-auto ">
    <Heading
        
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageCircle}
        iconColor="text-blue-600"
        bgColor="bg-white-500/10"
      />
      
    <div style={{display:"block"}}>
    <div>
      <ul className="chatbox  ps-1 " style={{height:"510px"}}>
        {chatMessages.map((chat, index) => (
          <li key={index} className={`chat ${chat.type} rounded-lg text-xs sm:text-lg my-2 p-2 `}>
            {chat.type === "incoming" && (
              <span className="material-symbols-outlined border border-blue-800"></span>
            )}
            <p>{chat.message}</p>
          </li>
        ))}
      </ul>
      <div className="chat-input py-2 shadow-lg border"
      style={{display:"flex",flexWrap:"wrap", justifyContent:"space-between"}}>
    
      <input
        placeholder="Enter a message..."
        spellCheck="false"
        required
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="w-[75%] sm:w-[89%]  border border-gray-300 ml-2  rounded-sm p-2 shadow-md"
      />
      <Button
        className=" mr-2  max-w-fill pl-auto h-10 w-15 sm:-15 text-black text-md"
        style={{  backgroundColor:"white" }}
        onClick={handleSendChat}
        type="submit"

      >
         {loading ? <Spinner /> : <Send/>}
        
      </Button>
     
    </div>

    </div>
  </div>
  </div>

  );
};

export default Chatbot;

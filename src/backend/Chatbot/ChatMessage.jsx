import { RiRobot2Line } from "react-icons/ri";
import ReactMarkdown from 'react-markdown';

export function ChatMessage ({ chat }) {
  return (
    !chat.hideInChat && (
      <div
        className={`message ${chat.role === "model" ? "bot" : "user"}-message ${
          chat.isError ? "error" : ""
        }`}
      >
        {chat.role === "model" && <RiRobot2Line />}
        <div className="message-text">
        <ReactMarkdown>{chat.text}</ReactMarkdown>
        </div>
      </div>
    )
  );
};

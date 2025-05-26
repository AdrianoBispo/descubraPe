import { useEffect, useState, useRef } from "react";
import { BsChatRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { RiRobot2Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ReactMarkdown from "react-markdown";

import { IoMdSend } from "react-icons/io";

import "./Chatbot.css";

export function Chatbot() {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: "Você é o chatbot de um site de guia turístico de Pernambuco, o Descubra PE. Você só poderá fornecer informações ao ser perguntado sobre algum destino turístico de Pernambuco, como: praças, parques, museus, teatros, praias, centros históricos, feiras e mercados, restaurantes e bares, cachoeiras e pontos turísticos de Pernambuco de modo geral; Caso seja perguntado sobre algo que não tem relação com o que foi mencionado anteriormente, informe ao usuário que você não poderá responder.\n\n Quero que você formule sua resposta em tópicos(bullet points) com as seguintes categorias: localização do destino, como chegar, clima, principais características, coisas para se fazer, culinária,dicas e curiosidades.",
    },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Pensando..."),
        { role: "model", text, isError },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_API_GEMINI,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Aconteceu alguma coisa errada!");

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\//g, "$1")
        .trim();

      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Pensando..." },
      ]);

      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `Usando os detalhes fornecidos acima, responda a esta pergunta: ${userMessage}`,
        },
      ]);
    }, 600);
  };

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
      >
        <BsChatRight className="chat-icon" size={24} />
        <IoMdClose className="close-icon" size={24} />
      </button>

      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <RiRobot2Line />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button onClick={() => setShowChatbot((prev) => !prev)}>
            <MdOutlineKeyboardArrowDown size={28} />
          </button>
        </div>

        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <RiRobot2Line />
            <div className="message-text">
              <ReactMarkdown>Olá, o que você deseja?</ReactMarkdown>
            </div>
          </div>

          {chatHistory.map(
            (chat, index) =>
              !chat.hideInChat && (
                <div
                  key={index}
                  className={`message ${
                    chat.role === "model" ? "bot" : "user"
                  }-message ${chat.isError ? "error" : ""}`}
                >
                  {chat.role === "model" && <RiRobot2Line />}
                  <div className="message-text">
                    <ReactMarkdown>{chat.text}</ReactMarkdown>
                  </div>
                </div>
              )
          )}
        </div>

        <div className="chat-footer">
          <form className="chat-form" onSubmit={handleFormSubmit}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Digite sua mensagem"
              className="message-input"
              required
            />
            <button type="submit">
              <IoMdSend className="inline-block" size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

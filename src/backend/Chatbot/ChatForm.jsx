import { useRef } from "react";
import { IoMdSend } from "react-icons/io";

export function ChatForm ({ chatHistory, setChatHistory, generateBotResponse }) {
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
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Digite sua mensagem"
        className="message-input"
        required
      />
      <button type="submit">
        <IoMdSend className="inline-block" size={20}/>
      </button>
    </form>
  );
};

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/**
 * Calls the server-side assistant proxy (/api/chat).
 * The OpenRouter key never reaches the browser — see api/chat.ts and ENV_SETUP.md.
 */
export const getChatResponse = async (messages: ChatMessage[]): Promise<string> => {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: messages.slice(-20) }),
  });

  if (!response.ok) {
    throw new Error("The assistant is unavailable right now. Please try again later.");
  }

  const result = (await response.json()) as { content?: string };
  if (!result.content) {
    throw new Error("The assistant returned an empty response.");
  }
  return result.content;
};

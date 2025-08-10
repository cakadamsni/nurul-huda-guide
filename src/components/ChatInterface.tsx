import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ChatMessage } from "@/components/ChatMessage";
import { Send, BookOpen, Heart, Users } from "lucide-react";

const sampleQuestions = [
  "What are the Five Pillars of Islam?",
  "How do I perform Wudu (ablution)?",
  "What is the significance of Ramadan?",
  "How do I find the Qibla direction?",
  "What are the daily prayers in Islam?",
];

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Assalamu'alaikum warahmatullahi wabarakatuh! 🌸\n\nWelcome to Ustadz AI. I'm here to guide you on your beautiful journey of learning Islam with warmth, patience, and authentic knowledge from the Qur'an and Sunnah.\n\nFeel free to ask me anything about Islamic teachings, practices, or guidance. I'm here to help with love and understanding.",
      isUser: false,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    };

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: "Thank you for your question. In a real implementation, I would provide a detailed, empathetic response with Qur'anic references, hadith citations, historical context, practical analogies, and key points summary. This is a beautiful start to your Islamic learning journey!",
      isUser: false,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
    setInput('');
  };

  const handleQuestionClick = (question: string) => {
    setInput(question);
  };

  return (
    <div className="flex flex-col h-[600px] max-w-4xl mx-auto">
      {/* Sample Questions */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-islamic-green" />
          Start with common questions:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {sampleQuestions.slice(0, 4).map((question, index) => (
            <Button
              key={index}
              variant="gentle"
              size="sm"
              className="text-left justify-start h-auto py-2 px-3"
              onClick={() => handleQuestionClick(question)}
            >
              {question}
            </Button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <Card className="flex-1 p-4 bg-background/50 backdrop-blur-sm border-islamic-green/10">
        <div className="h-full overflow-y-auto space-y-4 pr-2">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
        </div>
      </Card>

      {/* Input Area */}
      <div className="flex gap-2 mt-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask me about Islam... (e.g., 'What are the Five Pillars?')"
          className="flex-1 border-islamic-green/20 focus:border-islamic-green"
        />
        <Button onClick={handleSend} variant="peaceful" size="icon">
          <Send className="w-4 h-4" />
        </Button>
      </div>

      {/* Helper Text */}
      <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Heart className="w-3 h-3" />
          Verified Sources
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          Multiple Perspectives
        </div>
        <div className="flex items-center gap-1">
          <BookOpen className="w-3 h-3" />
          Easy to Understand
        </div>
      </div>
    </div>
  );
};
import { useState } from 'react';
import { Hero } from "@/components/Hero";
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  const handleStartLearning = () => {
    setShowChat(true);
  };

  if (showChat) {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Ustadz AI
            </h1>
            <p className="text-muted-foreground">
              Your journey of Islamic learning continues
            </p>
          </div>
          <ChatInterface />
        </div>
      </div>
    );
  }

  return <Hero onStartLearning={handleStartLearning} />;
};

export default Index;

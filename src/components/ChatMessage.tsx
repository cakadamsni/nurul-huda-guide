import { Card } from "@/components/ui/card";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[80%] ${isUser ? 'order-1' : 'order-2'}`}>
        <Card className={`p-4 animate-gentle-fade ${
          isUser 
            ? 'bg-islamic-green text-cream shadow-soft' 
            : 'bg-card border-islamic-green/10 shadow-soft'
        }`}>
          <div className="text-sm leading-relaxed whitespace-pre-wrap">
            {message}
          </div>
          {timestamp && (
            <div className={`text-xs mt-2 opacity-70 ${
              isUser ? 'text-cream/80' : 'text-muted-foreground'
            }`}>
              {timestamp}
            </div>
          )}
        </Card>
      </div>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ml-3 mr-3 ${
        isUser 
          ? 'bg-islamic-gold text-foreground order-2' 
          : 'bg-gradient-primary text-cream order-1'
      }`}>
        {isUser ? 'أنت' : 'أُ'}
      </div>
    </div>
  );
};
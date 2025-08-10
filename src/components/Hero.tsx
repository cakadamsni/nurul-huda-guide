import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Heart, Users, Star } from "lucide-react";
import islamicPattern from "@/assets/islamic-pattern.jpg";

interface HeroProps {
  onStartLearning: () => void;
}

export const Hero = ({ onStartLearning }: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${islamicPattern})` }}
      />
      
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-8 animate-gentle-fade">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Ustadz AI
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            Your warm, patient companion for learning Islam
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the beautiful teachings of Islam through authentic sources, 
            gentle guidance, and practical wisdom.
          </p>
        </div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-gentle-fade">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-islamic-green/10 hover:shadow-warm transition-all duration-300">
            <BookOpen className="w-12 h-12 text-islamic-green mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Authentic Sources</h3>
            <p className="text-muted-foreground text-sm">
              Every answer references verified Qur'anic verses and authentic hadiths with proper citations
            </p>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-islamic-green/10 hover:shadow-warm transition-all duration-300">
            <Heart className="w-12 h-12 text-islamic-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Warm & Empathetic</h3>
            <p className="text-muted-foreground text-sm">
              Designed especially for new Muslims with patience, understanding, and gentle guidance
            </p>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-islamic-green/10 hover:shadow-warm transition-all duration-300">
            <Users className="w-12 h-12 text-islamic-green mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Scholarly Perspectives</h3>
            <p className="text-muted-foreground text-sm">
              Compare different scholarly opinions when differences exist, with clear explanations
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="animate-gentle-fade">
          <Button 
            onClick={onStartLearning}
            variant="hero"
            size="lg"
            className="text-lg px-8 py-4 mb-6 animate-peaceful-glow"
          >
            Begin Your Journey
          </Button>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-islamic-gold" />
              Historical Context
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-islamic-gold" />
              Practical Examples
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-islamic-gold" />
              Key Point Summaries
            </div>
          </div>
        </div>

        {/* Greeting */}
        <div className="mt-12 p-6 bg-islamic-green/5 rounded-lg border border-islamic-green/10 max-w-2xl mx-auto">
          <p className="text-lg text-foreground/90 italic">
            "Assalamu'alaikum warahmatullahi wabarakatuh"
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Peace be upon you and Allah's mercy and blessings
          </p>
        </div>
      </div>
    </div>
  );
};
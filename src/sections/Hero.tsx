import { useEffect, useRef } from 'react';
import { Mail, Github, ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      const children = content.children;
      Array.from(children).forEach((child, index) => {
        (child as HTMLElement).style.opacity = '0';
        (child as HTMLElement).style.transform = 'translateY(20px)';
        setTimeout(() => {
          (child as HTMLElement).style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          (child as HTMLElement).style.opacity = '1';
          (child as HTMLElement).style.transform = 'translateY(0)';
        }, 100 * index);
      });
    }
  }, []);

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-start order-1 md:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-float">
                <img
                  src="/photo.jpg"
                  alt="Xuanyi Xie"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-60 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-sky-100 rounded-full opacity-60 blur-xl" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="text-center md:text-left order-2 md:order-2">
            <p className="text-blue-500 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
              谢轩奕
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-4">
              Xuanyi Xie
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Computer Science Student @ Tsinghua University
            </p>
            <p className="text-blue-500 font-medium mb-6">
              姚班 (Yao Class) | GPA: 3.81/4.00
            </p>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Passionate about <span className="text-blue-500 font-medium">Spatial Intelligence</span>,{' '}
              <span className="text-blue-500 font-medium">AI Agents</span>, and{' '}
              <span className="text-blue-500 font-medium">Embodied AI</span>. 
              Researching at the intersection of computer vision and robotics.
            </p>

            {/* Location */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mb-8">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Beijing / Shanghai, China</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button
                asChild
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <a href="#research">View Research</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="mailto:xie-xy23@mails.tsinghua.edu.cn"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="animate-bounce text-gray-400 hover:text-blue-500 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}

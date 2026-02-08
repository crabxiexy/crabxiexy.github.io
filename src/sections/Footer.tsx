import { Heart, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          {/* Logo/Name */}
          <div className="text-xl font-bold text-white">
            Xuanyi Xie
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Code className="w-4 h-4" />
            <span>Built with passion for AI and robotics</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gray-700 my-2" />

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Xuanyi Xie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

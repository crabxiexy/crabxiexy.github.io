import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'xie-xy23@mails.tsinghua.edu.cn',
    href: 'mailto:xie-xy23@mails.tsinghua.edu.cn',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 13651803948',
    href: 'tel:+8613651803948',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Beijing / Shanghai, China',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal');
            reveals.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-contact"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="reveal text-3xl font-bold text-white mb-4">
            Let's <span className="text-blue-100">Connect</span>
          </h2>
          <p className="reveal text-blue-100 max-w-2xl mx-auto">
            I'm always open to discussing research, collaborations, or new opportunities.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="reveal bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-medium hover:text-blue-100 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="reveal flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="reveal bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Send me an email
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you have a question, a research idea, or just want to say hi,
              I'll try my best to get back to you!
            </p>
            <Button
              asChild
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <a
                href="mailto:xie-xy23@mails.tsinghua.edu.cn"
                className="flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

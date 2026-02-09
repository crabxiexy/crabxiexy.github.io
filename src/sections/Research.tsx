import { useEffect, useRef } from 'react';
import { Microscope, Users, Calendar, Building2 } from 'lucide-react';

const researchData = [
  {
    lab: 'THU i-VisionGroup',
    role: 'Research Intern',
    period: 'December 2025 - Present',
    focus: 'Spatial intelligence and AI agents',
    advisor: {
      label: 'Professor Yueqi Duan',
      href: 'https://duanyueqi.github.io/',
    },
    icon: Microscope,
  },
  {
    lab: 'THU 3DVICI Lab',
    role: 'Research Intern',
    period: 'September 2024 - December 2025',
    focus: 'Humanoid locomotion and robotic arm manipulation',
    advisor: {
      label: 'Professor Li Yi',
      href: 'https://ericyi.github.io/',
    },
    icon: Building2,
  },
  {
    lab: 'Galbot Humanoid Group',
    labHref: 'https://www.galbot.com/',
    role: 'Researcher',
    period: 'June 2025 - September 2025',
    focus: 'Humanoid robotics research and development',
    advisor: null,
    icon: Users,
  },
];

export default function Research() {
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
              }, index * 150);
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
      id="research"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="reveal text-3xl font-bold text-gray-800 mb-4 text-center">
          Research <span className="text-blue-500">Experience</span>
        </h2>
        <p className="reveal text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          I've had the privilege of working with world-class research labs at Tsinghua University,
          exploring cutting-edge topics in AI and robotics.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchData.map((item, index) => (
            <div
              key={index}
              className="reveal bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {'labHref' in item && item.labHref ? (
                      <a
                        href={item.labHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 hover:underline underline-offset-4"
                      >
                        {item.lab}
                      </a>
                    ) : (
                      item.lab
                    )}
                  </h3>
                  <p className="text-sm text-blue-500">{item.role}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{item.period}</span>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium text-gray-700">Focus:</span>{' '}
                    {item.focus}
                  </p>
                  {item.advisor && (
                    <p className="text-sm text-gray-500">
                      <span className="font-medium text-gray-700">Advisor:</span>{' '}
                      <a
                        href={item.advisor.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 hover:underline underline-offset-4"
                      >
                        {item.advisor.label}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

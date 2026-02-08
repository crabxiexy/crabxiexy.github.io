import { useEffect, useRef } from 'react';
import { GraduationCap, School, Award, Calendar } from 'lucide-react';

const educationData = [
  {
    icon: GraduationCap,
    degree: 'Bachelor of Computer Science',
    school: 'IIIS (Yao Class), Tsinghua University',
    period: 'August 2023 - July 2027 (expected)',
    details: ['GPA: 3.8/4.0'],
    achievements: [
      {
        icon: Award,
        text: 'Academic Excellence Scholarship, Tsinghua University - Nov 2024',
      },
    ],
  },
  {
    icon: School,
    degree: 'High School Diploma',
    school: 'Shanghai High School',
    period: 'September 2020 - June 2023',
    details: [],
    achievements: [],
  },
];

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="reveal text-3xl font-bold text-gray-800 mb-12 text-center">
          Education <span className="text-blue-500">Background</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`reveal relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md z-10" />

                {/* Content card */}
                <div className="w-full md:w-1/2 px-0 md:px-8">
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <edu.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-500 font-medium mb-2">
                          {edu.school}
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        {edu.details.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {edu.details.map((detail, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                              >
                                {detail}
                              </span>
                            ))}
                          </div>
                        )}
                        {edu.achievements.length > 0 && (
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-sm text-gray-600"
                              >
                                <achievement.icon className="w-4 h-4 text-yellow-500" />
                                <span>{achievement.text}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for other side */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

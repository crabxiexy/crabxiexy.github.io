import { useEffect, useRef } from 'react';
import { FileText, Users, Calendar, ExternalLink, Sparkles } from 'lucide-react';

const publications = [
  {
    title: 'Efficient Controlled Text Generation of DLLMs with Classifier Guidance',
    venue: 'AAAI26 PerFM Workshop',
    role: 'Co-first Author',
    period: 'July 2025 - September 2025',
    paperHref: './papers/23_Controlled_Text_Generation_.pdf',
    description:
      'Developed an efficient pipeline for controlling text generation in diffusion large language models by integrating lightweight classifier guidance.',
    highlights: [
      'Achieved ~90% latency reduction compared with naïve guidance',
      'Maintained control accuracy while improving efficiency',
      'First experience in LLM research',
    ],
  },
];

export default function Publications() {
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
      id="publications"
      ref={sectionRef}
      className="py-20 bg-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="reveal text-3xl font-bold text-gray-800 mb-4 text-center">
          Publications <span className="text-blue-500">& Papers</span>
        </h2>
        <p className="reveal text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          My research contributions to the academic community.
        </p>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="reveal bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                    {pub.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pub.venue}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      <Users className="w-3.5 h-3.5" />
                      {pub.role}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      {pub.period}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {pub.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Key Contributions:</p>
                    <ul className="space-y-2">
                      {pub.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action */}
                <div className="flex-shrink-0">
                  {pub.paperHref ? (
                    <a
                      href={pub.paperHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <span>View Paper</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed"
                    >
                      <span>View Paper</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
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

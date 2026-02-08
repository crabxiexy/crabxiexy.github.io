import { useEffect, useRef } from 'react';
import { Code2, Brain, Cpu, Layers } from 'lucide-react';

const skills = {
  research: {
    icon: Brain,
    title: 'Research Interests',
    items: ['Spatial Intelligence', 'AI Agent', 'Embodied AI', 'Computer Vision'],
  },
  languages: {
    icon: Code2,
    title: 'Programming',
    items: ['C/C++', 'Python', 'Scala', 'SQL', 'JavaScript'],
  },
  frameworks: {
    icon: Layers,
    title: 'Frameworks',
    items: ['PyTorch', 'TensorFlow', 'PyBullet', 'MuJoCo', 'Isaac Gym', 'Isaac Lab', 'Blender'],
  },
  platforms: {
    icon: Cpu,
    title: 'Platforms',
    items: ['Franka', 'Unitree G1', 'Raspberry Pi'],
  },
};

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: About Text */}
          <div className="reveal">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              About <span className="text-blue-500">Me</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I am an undergraduate student at Tsinghua University's{' '}
                <a
                  href="https://iiis.tsinghua.edu.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-800 hover:text-blue-600 hover:underline underline-offset-4"
                >
                  Institute for Interdisciplinary Information Sciences (IIIS)
                </a>
                , also known as the prestigious{' '}
                <span className="text-blue-500 font-medium">Yao Class</span>.
              </p>
              <p>
                My research journey has taken me through cutting-edge labs where I've 
                explored spatial intelligence, humanoid locomotion, and robotic manipulation. 
                I'm particularly fascinated by the intersection of computer vision and 
                robotics, working to build intelligent systems that can perceive and 
                interact with the physical world.
              </p>
              <p>
                With hands-on experience in robotic simulators like Isaac Gym, MuJoCo, 
                and PyBullet, combined with expertise in vision-language models, I'm 
                passionate about pushing the boundaries of embodied AI.
              </p>
            </div>
          </div>

          {/* Right: Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(skills).map(([key, skill], index) => (
              <div
                key={key}
                className="reveal bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-500 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import {
  Hand,
  Eye,
  Shield,
  Music,
  Film,
  Droplets,
  FileText,
  Calendar,
  Users,
  ArrowUpRight,
} from 'lucide-react';

const projects = [
  {
    title: 'Generalizable Dynamic Handover',
    subtitle: 'via Physical Property Estimation',
    course: 'Intelligent Systems and Robots',
    period: 'October 2025 - January 2026',
    collaborators: 'Yingxi Lu, Zhuo Cao',
    pdfHref: './papers/ISR_final.pdf',
    description:
      'Extended the Dynamic Handover work by introducing a Physical Property Estimator network to improve generalization across object physical properties.',
    highlights: [
      'Enhanced OOD performance on mass variation',
      'Conditioned multi-agent RL policy on estimated physical parameters',
      'Identified limitations in scale generalization',
    ],
    icon: Hand,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'DISPER',
    subtitle: 'Disentangled Perception for Generalizable Post-Training',
    course: 'Embodied AI',
    period: 'April 2025 - May 2025',
    collaborators: 'Yingxi Lu, Zhuo Cao',
    pdfHref: './papers/EAI_Report.pdf',
    description:
      'Proposed a disentangled policy architecture separating proprioception, spatial, and geometric encoding modules to preserve geometry-level generalization.',
    highlights: [
      'Validated freezing geometric encoder during DAgger-based post-training',
      'Mitigated overfitting to specific object geometries',
    ],
    icon: Eye,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'SIGHT',
    subtitle: 'Safety Insight Generation and Hazard-Awareness Transfer',
    course: 'Natural Language Processing',
    period: 'April 2025 - May 2025',
    collaborators: 'Yihan Xu, Zhuo Cao, Peiqi Duan',
    pdfHref: './papers/SIGHT__Safety_Insight_Generation_and_Hazard_awareness_Transfer.pdf',
    description:
      'Developed a two-stage framework to distill safety reasoning capabilities from frontier LLMs to lightweight models.',
    highlights: [
      'Improved safety classification accuracy from 57% to 71% on XSTest',
      'Used gpt-oss-safeguard-20B as oracle',
      'Reduced exaggerated safety behaviors',
    ],
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Stable Personalized Music2Dance',
    subtitle: 'Video Generation',
    course: 'Deep Learning',
    period: 'April 2025 - June 2025',
    collaborators: 'Zhuo Cao, Yingxi Lu, Fangyu Zhu',
    pdfHref: './papers/DL_Final_Report.pdf',
    description:
      'Designed a pipeline to automatically generate dance videos from arbitrary music and a single reference image.',
    highlights: [
      'Combined diffusion-based motion generation with DensePose alignment',
      'Novel facial attention encoder for identity preservation',
      'Ranked second in popularity poll',
    ],
    icon: Music,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Black-and-White Video Restoration',
    subtitle: 'via Frame Interpolation and Multi-Reference Colorization',
    course: 'Computer Vision',
    period: 'April 2025 - May 2025',
    collaborators: 'Jiayi Hu',
    pdfHref: './papers/CV-report.pdf',
    description:
      'Developed a two-stage framework to restore and colorize old black-and-white videos.',
    highlights: [
      'Enhanced temporal smoothness with FILM model',
      'Improved colorization quality with modified TCVC structure',
      'Leveraged multiple reference frames',
    ],
    icon: Film,
    color: 'from-gray-500 to-slate-500',
  },
  {
    title: 'SPH Simulation',
    subtitle: 'Python Implementation of SPH Simulation Method',
    course: 'Advanced Computer Graphics',
    period: 'September 2024 - January 2025',
    collaborators: 'Songbo Hu',
    pdfHref: './papers/ACG_final.pdf',
    description:
      'Developed a complete simulation and rendering pipeline for rigid body and fluid dynamics based on WCSPH and DFSPH methods.',
    highlights: [
      'Supported solid-solid, solid-fluid, and fluid-fluid coupling',
      'Near real-time performance with GPU acceleration',
      'Advanced rendering with Blender',
    ],
    icon: Droplets,
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function Projects() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="reveal text-3xl font-bold text-gray-800 mb-4 text-center">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
        <p className="reveal text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A selection of my academic projects spanning AI, robotics, computer vision, and graphics.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="reveal group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">{project.subtitle}</p>
                  </div>
                </div>
                {project.pdfHref ? (
                  <a
                    href={project.pdfHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-lg inline-flex items-center gap-2"
                    aria-label={`Open ${project.title} PDF`}
                  >
                    <FileText className="w-5 h-5 text-gray-400" />
                    <span className="text-xs font-medium text-gray-500">PDF</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                  </button>
                )}
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-3 mb-4 text-sm">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-600 rounded-md">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.period}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md">
                  <Users className="w-3.5 h-3.5" />
                  {project.collaborators}
                </span>
              </div>

              {/* Course tag */}
              <div className="mb-4">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {project.course}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-500"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

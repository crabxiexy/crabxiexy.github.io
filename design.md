# Design Document - Xuanyi Xie Personal Portfolio

## Part 1: Visual Design System

### Color Palette

**Primary Colors:**
- Primary Blue: `#3b82f6` (blue-500) - Main accent color
- Primary Blue Light: `#60a5fa` (blue-400) - Hover states
- Primary Blue Dark: `#2563eb` (blue-600) - Active states
- Sky Blue: `#0ea5e9` (sky-500) - Secondary accent

**Neutral Colors:**
- White: `#ffffff` - Background, cards
- Gray-50: `#f8fafc` - Section backgrounds
- Gray-100: `#f1f5f9` - Subtle backgrounds
- Gray-200: `#e2e8f0` - Borders
- Gray-600: `#475569` - Body text
- Gray-800: `#1e293b` - Headings
- Gray-900: `#0f172a` - Dark text

**Accent Colors:**
- Cyan: `#06b6d4` - Highlights
- Indigo: `#6366f1` - Gradient accents

### Typography System

**Font Family:**
- Primary: Inter, system-ui, sans-serif
- Chinese: "Noto Sans SC", "PingFang SC", sans-serif

**Type Scale:**
- Hero Title: 48px / 3rem, font-weight: 700
- H1: 36px / 2.25rem, font-weight: 700
- H2: 30px / 1.875rem, font-weight: 600
- H3: 24px / 1.5rem, font-weight: 600
- H4: 20px / 1.25rem, font-weight: 600
- Body: 16px / 1rem, font-weight: 400
- Small: 14px / 0.875rem, font-weight: 400
- Caption: 12px / 0.75rem, font-weight: 400

**Line Heights:**
- Headings: 1.2
- Body: 1.6
- Tight: 1.4

### Spacing System

**Section Spacing:**
- Section padding: 80px vertical (py-20)
- Container max-width: 1200px
- Container padding: 16px horizontal (px-4)

**Component Spacing:**
- Card padding: 24px (p-6)
- Grid gap: 24px (gap-6)
- Element gap: 16px (gap-4)

### Border & Radius

- Card radius: 16px (rounded-2xl)
- Button radius: 8px (rounded-lg)
- Badge radius: 9999px (rounded-full)
- Border color: Gray-200

### Shadows

- Card shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)`
- Card hover shadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)`
- Button shadow: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`

---

## Part 2: Global Animations & Interactions

### Page Load Animation
- Hero content fades in with stagger effect
- Duration: 600ms
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Stagger delay: 100ms between elements

### Smooth Scroll Behavior
- `scroll-behavior: smooth` on html
- Navigation links scroll to sections

### Scroll-Triggered Reveal Animations
- Elements fade in and slide up when entering viewport
- Duration: 500ms
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Transform: translateY(20px) → translateY(0)
- Opacity: 0 → 1
- Trigger: When element is 20% visible

### Common Hover Patterns

**Cards:**
- Scale: 1 → 1.02
- Shadow intensity increases
- Duration: 300ms
- Easing: ease-out

**Buttons:**
- Background color darkens
- Scale: 1 → 1.05
- Duration: 200ms

**Links:**
- Color transition to primary blue
- Duration: 200ms

### Technical Specifications
- Use `transform` and `opacity` for animations (GPU accelerated)
- Add `will-change: transform, opacity` on animated elements
- Respect `prefers-reduced-motion` media query

---

## Part 3: Content Sections

### Section: Navigation

**Layout & Style:**
- Fixed position at top
- Height: 64px
- Background: white with subtle shadow on scroll
- Logo on left, nav links on right
- Container: max-w-6xl mx-auto

**Interactions:**
- Background becomes opaque white with shadow on scroll
- Nav links have underline animation on hover
- Duration: 200ms

**Content:**
- Logo: "Xuanyi Xie"
- Links: About, Education, Research, Projects, Contact

---

### Section: Hero

**Layout & Style:**
- Full viewport height (min-h-screen)
- Two-column layout on desktop (photo left, content right)
- Single column on mobile
- Background: Gradient from white to blue-50
- Padding: 80px top

**Interactions:**
- Photo has subtle float animation (translateY -10px to 10px)
- Duration: 3s, infinite, ease-in-out
- Text content fades in with stagger
- Social icons have hover scale effect

**Content:**
- Name: "谢轩奕 / Xuanyi Xie"
- Title: "Computer Science Student @ Tsinghua University"
- Subtitle: "姚班 (Yao Class) | GPA: 3.81/4.00"
- Bio: "Passionate about Spatial Intelligence, AI Agents, and Embodied AI. Researching at the intersection of computer vision and robotics."
- CTA Buttons: "View Research" | "Contact Me"
- Social Links: Email, GitHub (placeholder)

**Images:**
- Profile photo: `/photo.jpg` (user provided)
- Shape: Circular with border
- Size: 280px
- Border: 4px solid white with shadow

---

### Section: About

**Layout & Style:**
- White background
- Two-column layout: text left, skills right
- Section padding: 80px vertical

**Interactions:**
- Scroll-triggered fade in
- Skill tags have hover scale effect
- Duration: 300ms

**Content:**
- Heading: "About Me"
- Description: "I am an undergraduate student at Tsinghua University's Institute for Interdisciplinary Information Sciences (IIIS), also known as Yao Class. My research focuses on spatial intelligence, AI agents, and embodied AI, with hands-on experience in robotic simulators and vision-language models."

**Skills:**
- Research: Spatial Intelligence, AI Agent, Embodied AI, Computer Vision
- Languages: C/C++, Python, Scala, SQL, JavaScript
- Frameworks: PyTorch, TensorFlow, PyBullet, MuJoCo, Isaac Gym, Isaac Lab, Blender
- Platforms: Franka, Unitree G1, Raspberry Pi

---

### Section: Education

**Layout & Style:**
- Gray-50 background
- Vertical timeline layout
- Cards with left border accent
- Section padding: 80px vertical

**Interactions:**
- Timeline items fade in sequentially on scroll
- Stagger delay: 150ms
- Cards have hover lift effect

**Content:**
1. **Bachelor of Computer Science** (2023.8 - 2027.7 expected)
   - IIIS (Yao Class), Tsinghua University
   - GPA: 3.81/4.00
   - Achievement: Academic Excellence Scholarship (Nov 2024)

2. **High School Diploma** (2020.9 - 2023.6)
   - Shanghai High School

---

### Section: Research Experience

**Layout & Style:**
- White background
- Card grid layout (2 columns on desktop)
- Cards with blue top border
- Section padding: 80px vertical

**Interactions:**
- Cards fade in with stagger on scroll
- Hover: card lifts and shadow increases
- Duration: 300ms

**Content:**
1. **Research Intern - THU i-VisionGroup** (Dec 2025 - Present)
   - Focus: Spatial intelligence and AI agents
   - Advisor: Professor Yueqi Duan

2. **Research Intern - THU 3DVICI Lab** (Sep 2024 - Dec 2025)
   - Focus: Humanoid locomotion and robotic arm manipulation
   - Advisor: Professor Li Yi

3. **Galbot Humanoid Group** (Jun 2025 - Sep 2025)
   - Humanoid robotics research and development

---

### Section: Publications

**Layout & Style:**
- Blue-50 background
- Single column card layout
- Cards with publication badge
- Section padding: 80px vertical

**Interactions:**
- Cards fade in on scroll
- Hover: subtle scale and shadow increase

**Content:**
1. **Efficient Controlled Text Generation of DLLMs with Classifier Guidance**
   - Venue: AAAI26 PerFM Workshop
   - Role: Co-first Author
   - Period: Jul 2025 - Sep 2025
   - Description: Developed an efficient pipeline for controlling text generation in diffusion large language models by integrating lightweight classifier guidance. Achieved ~90% latency reduction while maintaining control accuracy.

---

### Section: Projects

**Layout & Style:**
- White background
- Card grid (2 columns on desktop, 1 on mobile)
- Cards with image/icon, title, description
- Section padding: 80px vertical

**Interactions:**
- Cards fade in with stagger
- Hover: card lifts, image zooms slightly
- Duration: 300ms

**Content:**
1. **Generalizable Dynamic Handover** (Oct 2025 - Jan 2026)
   - Course: Intelligent Systems and Robots
   - Extended Dynamic Handover work with Physical Property Estimator network
   - Improved OOD performance on mass variation

2. **DISPER: Disentangled Perception** (Apr 2025 - May 2025)
   - Course: Embodied AI
   - Disentangled policy architecture for generalizable post-training
   - Validated freezing geometric encoder during DAgger-based post-training

3. **SIGHT: Safety Insight Generation** (Apr 2025 - May 2025)
   - Course: Natural Language Processing
   - Two-stage framework distilling safety reasoning from LLMs
   - Improved accuracy from 57% to 71% on XSTest benchmark

4. **Stable Personalized Music2Dance** (Apr 2025 - Jun 2025)
   - Course: Deep Learning
   - Pipeline for generating dance videos from music and reference image
   - Ranked second in popularity poll

5. **Black-and-White Video Restoration** (Apr 2025 - May 2025)
   - Course: Computer Vision
   - Two-stage framework for video restoration and colorization
   - Enhanced temporal smoothness with FILM model

6. **SPH Simulation Implementation** (Sep 2024 - Jan 2025)
   - Course: Advanced Computer Graphics
   - Complete simulation pipeline for rigid body and fluid dynamics
   - Near real-time performance with GPU acceleration

---

### Section: Contact

**Layout & Style:**
- Gradient background (blue-500 to sky-600)
- Centered content
- White text
- Section padding: 80px vertical

**Interactions:**
- Content fades in on scroll
- Buttons have hover scale and brightness effect
- Social icons have hover lift

**Content:**
- Heading: "Let's Connect"
- Description: "I'm always open to discussing research, collaborations, or new opportunities."
- Email: xie-xy23@mails.tsinghua.edu.cn
- Phone: +86 13651803948
- Location: Beijing / Shanghai, China
- CTA: "Send Email" button

---

### Section: Footer

**Layout & Style:**
- Gray-900 background
- White text
- Centered content
- Padding: 40px vertical

**Content:**
- Copyright: "© 2025 Xuanyi Xie. All rights reserved."
- Tagline: "Built with passion for AI and robotics"

---

## Part 4: Responsive Breakpoints

- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md, lg)
- Desktop: > 1024px (xl)

**Mobile Adaptations:**
- Hero: Single column, photo on top
- Navigation: Hamburger menu
- Cards: Single column
- Timeline: Simplified layout

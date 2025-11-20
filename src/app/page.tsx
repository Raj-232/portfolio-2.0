"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { IconArrowRight, IconGithub, IconLinkDin, IconMail, IconPhoneCall, IconWhatsapp } from "@/lib/Icons";
import AnimatedDiv from "@/lib/AnimatedDiv";
import { ProjectData } from "@/lib/types";
import Link from "next/link";
import { useMemo, useState } from "react";
import ProjectDialog from "./ProjectDialog";
import { ProjectsCard } from "./ProjectsCard";

const heroStats = [
  { value: "5+", label: "Years building production systems" },
  { value: "25+", label: "APIs & services deployed" },
  { value: "400k+", label: "Telemetry traces observed daily" },
  { value: "70%", label: "B.E CGPA · GCE Tirunelveli" },
];

const focusAreas = [
  {
    title: "Product Engineering",
    summary: "Next.js + React systems backed by FastAPI/Nest microservices.",
    items: ["Design systems", "Type-safe APIs", "Performance tooling"],
  },
  {
    title: "Observability & Platforms",
    summary: "Full-stack telemetry: OpenTelemetry → Kafka → Superset/Grafana.",
    items: ["Data mesh", "Streaming", "Infra automation"],
  },
  {
    title: "AI & Automation",
    summary: "Applied AI for anomaly detection, resume parsing, RAG assistants.",
    items: ["LLM pipelines", "Vector stores", "MLOps"],
  },
];

const highlightBullets = [
  "Architected a Data Mesh using OTel, Kafka, Iceberg, Trino, MinIO, and Redis for governed data products.",
  "Built an observability control plane with ML-based anomaly detection to safeguard Kubernetes workloads.",
  "Designed AI/ML orchestration dashboards that coordinate multi-model training and delivery workflows.",
];

const experienceData = [
  {
    company: "Zaga Open Source Pvt Ltd",
    role: "Full Stack Software Developer",
    period: "Jun 2024 — Present",
    location: "Kovilpatti, India",
    outcomes: [
      "Designed and implemented a Data Mesh Architecture with OTel, Kafka, Hive, Iceberg, Trino, MinIO, and Redis.",
      "Built a real-time observability platform combining logs, traces, and metrics plus ML-based anomaly detection.",
      "Developed FastAPI microservices with CI/CD automation and RBAC backed by Trino access controls.",
      "Led Kubernetes, Docker, Helm, AWS, and OpenShift deployments while optimizing MinIO object storage.",
    ],
    toolbox: ["FastAPI", "OpenTelemetry", "Kafka", "Trino", "Iceberg", "MinIO", "Redis", "Kubernetes", "Docker", "Helm", "OpenShift", "GitHub Actions", "Milvus", "LangChain"],
  },
  {
    company: "Icanio Technologies",
    role: "Software Development Engineer",
    period: "Sep 2023 — Feb 2024",
    location: "Tirunelveli, India",
    outcomes: [
      "Built responsive React.js UI components and integrated REST APIs for customer-facing dashboards.",
      "Developed Node.js, SQL, and MongoDB services with optimized authentication workflows and DB operations.",
      "Collaborated within Agile squads, participated in code reviews, and streamlined cross-team delivery.",
    ],
    toolbox: ["React.js", "Next.js", "Node.js", "Nest.js", "SQL", "MongoDB", "Tailwind CSS", "Agile", "REST APIs"],
  },
];

const projectdata: ProjectData[] = [
  {
    name: "AI/ML Management Dashboard",
    description:
      "Centralized multi-model training and orchestration dashboard with project CRUD, training triggers, and execution insights.",
    impact:
      "Unified FastAPI-based AI control plane so teams can trigger jobs, monitor payloads, and review logs/metadata without scripting.",
    stack: ["FastAPI", "React/Next.js", "PostgreSQL", "Docker"],
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    projectlink: "https://github.com/Raj-232",
    websitelink: "https://raj-portfolio.dev/aiml-dashboard",
    category: "AI",
  },
  {
    name: "Data Lake Management & Data Product Platform",
    description:
      "Backend-driven platform for governed data product creation with Iceberg catalog management and Trino-powered query services.",
    impact:
      "Enabled teams to publish reusable datasets as REST APIs, accelerating analytics delivery without manual SQL handoffs.",
    stack: ["FastAPI", "Python", "Trino", "Iceberg", "Docker", "MinIO"],
    img: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=1200&q=80",
    projectlink: "https://github.com/Raj-232",
    websitelink: "https://raj-portfolio.dev/datalake",
    category: "Platform",
  },
  {
    name: "Observability & Monitoring Platform",
    description:
      "Unified observability fabric aggregating traces, logs, metrics, and LLM-based anomaly detection for sustainability dashboards.",
    impact:
      "Delivered proactive alerting and sustainability insights, cutting investigative toil for SREs and improving resource efficiency.",
    stack: ["OpenTelemetry", "Kafka", "Superset", "Milvus", "FastAPI"],
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    projectlink: "https://github.com/Raj-232",
    websitelink: "https://raj-portfolio.dev/observability",
    category: "Observability",
  },
  {
    name: "Online Meat Delivery App",
    description:
      "Microservices marketplace with FastAPI backend, Flutter customer app, React admin tools, and Razorpay-powered fulfillment.",
    impact:
      "Brought real-time order tracking, delivery partner routing, and automated notifications to 5k+ monthly orders.",
    stack: ["FastAPI", "Flutter", "React", "PostgreSQL", "Redis", "Razorpay"],
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    projectlink: "https://github.com/Raj-232",
    websitelink: "https://raj-portfolio.dev/meatkart",
    category: "Product",
  },
  {
    name: "Perfido · SaaS Performance Testing Platform",
    description:
      "Full-stack Next.js + Node.js suite for scenario authoring, SSR dashboards, and CI/CD-enabled performance test automation.",
    impact:
      "Automated weekly benchmarks for enterprise APIs, surfacing regressions before release and saving 30+ engineer-hours per sprint.",
    stack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Docker", "AWS"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    projectlink: "https://github.com/Raj-232",
    websitelink: "https://raj-portfolio.dev/perfido",
    category: "Platform",
  },
];

const caseStudies = [
  {
    title: "AI/ML Command Deck",
    summary: "Orchestrated training pipelines, monitoring, and metadata for independently deployed ML models.",
    result: "Reduced model rollout time by 40% by unifying triggers, tracking, and approvals.",
  },
  {
    title: "Data Mesh Governance Layer",
    summary: "Established Iceberg-backed catalogs, Trino access control, and MinIO storage policies for data products.",
    result: "Enabled governed self-serve analytics while keeping schema/table level compliance intact.",
  },
];

const testimonials = [
  {
    quote:
      "Anandharaj translated ambiguous platform goals into a clear roadmap and shipped production-ready tooling every sprint.",
    author: "Product Lead · Zaga Open Source",
  },
  {
    quote: "He pairs fast experimentation with rigorous engineering. Our performance suite wouldn't exist without him.",
    author: "CTO · Icanio Technologies",
  },
];

const contactLinks = [
  {
    label: "Mail",
    href: "mailto:aaraj232@gmail.com",
    icon: IconMail,
    value: "aaraj232@gmail.com",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918925191383",
    icon: IconWhatsapp,
    value: "+91 89251 91383",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anandharaj-Link-821029229/",
    icon: IconLinkDin,
    value: "anandharaj-link",
  },
];

const projectFilters = ["All", "Observability", "Platform", "AI", "Product"] as const;

const education = {
  degree: "Bachelor of Engineering (B.E) · Computer Science and Engineering",
  institution: "Government College of Engineering, Tirunelveli",
  period: "2019 — 2023",
  cgpa: "CGPA 70%",
  summary: [
    "Graduated with strong foundations in algorithms, systems programming, and IoT experimentation.",
    "Led student prototype initiatives that evolved into production-grade platform work."
  ],
};

const Page = () => {
  const [activeFilter, setActiveFilter] = useState<typeof projectFilters[number]>("All");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Anandharaj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredProjects = useMemo(() => {
    return projectdata
      .map((project, index) => ({ project, index }))
      .filter(({ project }) => activeFilter === "All" || project.category === activeFilter);
  }, [activeFilter]);

  const handleOpenProject = (index: number) => {
    setSelectedProjectIndex(index);
    setIsDialogOpen(true);
  };

  const selectedProject = selectedProjectIndex !== null ? projectdata[selectedProjectIndex] : null;

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, message } = formState;
    const mailto = `mailto:aaraj232@gmail.com?subject=Portfolio%20Conversation%20with%20${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <div className="lg:px-48 px-5 space-y-24 pb-24 pt-28">
      <section id="home" className="hero-gradient rounded-3xl border border-white/10 px-6 py-14 md:px-14 md:py-20 text-left text-white relative overflow-hidden">
        <AnimatedDiv>
          <p className="text-sm uppercase tracking-[0.4em] text-primary">Currently building data platforms</p>
        </AnimatedDiv>
        <AnimatedDiv>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Hey, I’m Anandharaj<span className="text-primary">.</span> <br />
            I craft resilient platforms that move data, insight, and design together.
          </h1>
        </AnimatedDiv>
        <AnimatedDiv>
          <p className="mt-6 text-lg md:text-xl text-white/80 md:w-2/3">
            Full-stack engineer blending React/Next experiences, Python/FastAPI services, and Kubernetes-native observability.
            I connect product, platform, and AI so teams can ship faster with confidence.
          </p>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button onClick={handleDownload} size="lg">
              Download Resume
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="https://cal.com/aaraj232/coffee" target="_blank" className="flex items-center space-x-2">
                <span>Book a 15-min call</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedDiv>
        <div className="mt-12 grid gap-6 md:grid-cols-4 sm:grid-cols-2">
          {heroStats.map((stat) => (
            <AnimatedDiv key={stat.label}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            </AnimatedDiv>
          ))}
        </div>
        <div className="mt-10 text-sm text-white/70">
          <span className="font-semibold text-white">Last resume update:</span> Nov 2025
              </div>
      </section>

      <section id="about" className="space-y-10">
            <AnimatedDiv>
          <div className="section-header">
            About <span className="text-primary">.</span>
            <Separator />
              </div>
            </AnimatedDiv>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <AnimatedDiv>
              <Card className="p-6 space-y-4 bg-background/80 border border-border/60">
                <p className="text-lg text-foreground/90">
                  I’m a full-stack software developer with a product mindset. I love orchestrating delightful interfaces,
                  type-safe APIs, and cloud-native infrastructure so teams can focus on value—not plumbing. I care about the
                  craft: good architecture, great DX, and storytelling dashboards that make complex systems legible.
                </p>
                <ul className="space-y-2 text-foreground/80">
                  {highlightBullets.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-3 pt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">Find me</span>
                  <IconArrowRight className="w-4 h-4 text-primary" />
                  <Link href="https://github.com/Raj-232" target="_blank" className="hover:text-primary">GitHub</Link>
                  <span>·</span>
                  <Link href="https://www.linkedin.com/in/anandharaj-Link-821029229/" target="_blank" className="hover:text-primary">LinkedIn</Link>
                  <span>·</span>
                  <Link href="https://wa.me/918925191383" target="_blank" className="hover:text-primary">WhatsApp</Link>
              </div>
              </Card>
            </AnimatedDiv>
          </div>
          <div className="space-y-6">
            {focusAreas.map((area) => (
              <AnimatedDiv key={area.title}>
                <Card className="p-5 h-full border border-border/60">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">{area.title}</p>
                  <p className="mt-2 text-base font-semibold text-foreground">{area.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {area.items.map((item) => (
                      <Badge key={item} variant="secondary">{item}</Badge>
                    ))}
              </div>
                </Card>
            </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      <section id="project" className="space-y-10">
            <AnimatedDiv>
          <div className="section-header">
            Projects <span className="text-primary">.</span>
            <Separator />
              </div>
            </AnimatedDiv>
            <AnimatedDiv>
          <div className="flex flex-wrap gap-3">
            {projectFilters.map((filter) => (
              <Badge
                key={filter}
                variant={activeFilter === filter ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Badge>
            ))}
              </div>
            </AnimatedDiv>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) setSelectedProjectIndex(null);
        }}>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map(({ project, index }) => (
              <AnimatedDiv key={project.name}>
                <ProjectsCard
                  handleOpen={handleOpenProject}
                  index={index}
                  {...project}
                />
              </AnimatedDiv>
            ))}
          </div>
          {selectedProject && (
            <ProjectDialog projectdata={selectedProject} />
          )}
        </Dialog>
      </section>

      <section id="exp" className="space-y-10">
        <AnimatedDiv>
          <div className="section-header">
            Experience <span className="text-primary">.</span>
            <Separator />
          </div>
        </AnimatedDiv>
        <div className="space-y-10">
          {experienceData.map((exp) => (
            <AnimatedDiv key={exp.company}>
              <div className="timeline-card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xl font-semibold">{exp.company}</p>
                    <p className="text-primary">{exp.role}</p>
                  </div>
                  <div className="text-sm text-right text-muted-foreground">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                    </div>
                <div className="mt-4 space-y-2 text-foreground/80">
                  {exp.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start space-x-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                      <span>{outcome}</span>
                    </div>
                  ))}
                    </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.toolbox.map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                  </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </section>

      <section id="education" className="space-y-8">
        <AnimatedDiv>
          <div className="section-header">
            Education <span className="text-primary">.</span>
            <Separator />
          </div>
        </AnimatedDiv>
              <AnimatedDiv>
          <Card className="p-6 border border-border/60 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xl font-semibold">{education.degree}</p>
                <p className="text-primary">{education.institution}</p>
              </div>
              <div className="text-sm text-muted-foreground text-right">
                <p>{education.period}</p>
                <p>{education.cgpa}</p>
              </div>
                </div>
            <div className="space-y-2 text-foreground/80">
              {education.summary.map((line) => (
                <div key={line} className="flex items-start space-x-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedDiv>
      </section>

      <section id="case-studies" className="space-y-8">
            <AnimatedDiv>
          <div className="section-header">
            Case Studies <span className="text-primary">.</span>
            <Separator />
          </div>
        </AnimatedDiv>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <AnimatedDiv key={study.title}>
              <Card className="p-6 border border-border/60 h-full">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">{study.title}</p>
                <p className="mt-3 text-lg font-semibold text-foreground">{study.summary}</p>
                <div className="mt-4 rounded-xl bg-muted/50 p-4">
                  <p className="text-sm text-muted-foreground">Result</p>
                  <p className="text-base font-semibold">{study.result}</p>
              </div>
              </Card>
            </AnimatedDiv>
                ))}
              </div>
      </section>

      <section id="testimonials" className="space-y-8">
        <AnimatedDiv>
          <div className="section-header">
            Kind Words <span className="text-primary">.</span>
            <Separator />
          </div>
        </AnimatedDiv>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <AnimatedDiv key={testimonial.author}>
              <Card className="p-6 border border-border/60 bg-background/70">
                <p className="text-lg italic text-foreground/90">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm text-muted-foreground">{testimonial.author}</p>
              </Card>
            </AnimatedDiv>
        ))}
      </div>
      </section>

      <section id="contact" className="space-y-10">
        <AnimatedDiv>
          <div className="section-header justify-center">
            Contact <span className="text-primary">.</span>
            <Separator />
          </div>
        </AnimatedDiv>
        <div className="grid gap-10 md:grid-cols-[2fr,1fr] items-start">
          <AnimatedDiv>
            <Card className="p-8 border border-border/60">
              <p className="text-sm uppercase tracking-[0.4em] text-primary">Start a conversation</p>
              <h3 className="mt-4 text-3xl font-semibold">Tell me about the product you want to ship.</h3>
              <form className="mt-8 space-y-5" onSubmit={handleContactSubmit}>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Name</label>
                  <input
                    required
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="form-input"
                    placeholder="Alex Product"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="form-input"
                    placeholder="alex@startup.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">What are we building?</label>
                  <textarea
                    required
                    name="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="form-textarea"
                    placeholder="A telemetry hub for multi-cloud workloads..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">Send intro</Button>
              </form>
            </Card>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <Card key={link.label} className="p-5 flex items-center justify-between border border-border/60">
            <div>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <Link href={link.href} target="_blank" className="text-lg font-semibold hover:text-primary">
                      {link.value}
                    </Link>
                  </div>
                  <link.icon className="w-6 h-6 text-primary" />
                </Card>
              ))}
              <Card className="p-5 border border-border/60">
                <p className="text-sm text-muted-foreground">Prefer instant chat?</p>
                <Link href="tel:+918925191383" className="flex items-center space-x-2 text-lg font-semibold hover:text-primary">
                  <IconPhoneCall className="w-5 h-5" />
                  <span>+91 89251 91383</span>
                </Link>
              </Card>
            </div>
          </AnimatedDiv>
        </div>
      </section>
    </div>
  )
}

export default Page
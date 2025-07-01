"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconArrowRight, IconEmojiSmileFill, IconGithub, IconLinkDin, IconMail, IconPhoneCall, IconTerminalFill, IconWhatsapp } from "@/lib/Icons";
import Link from "next/link";
import { useState } from "react";
import AnimatedDiv from "@/lib/AnimatedDiv";

const Page = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Anandharaj_Resume.pdf';
    // Trigger the click event on the anchor element
    document.body.appendChild(link);
    link.click();
    // Cleanup
    document.body.removeChild(link);

  };
  const projectdata = [
    {
      name: "Online Meat Delivery App",
      decription: [
        "Designed and implemented a microservices-based architecture using FastAPI for modularity and scalability.",
        "Developed backend services including User, Product, Order, Delivery, and Authentication services.",
        "Implemented JWT-based authentication and role-based access control for secure API access.",
        "Built the customer mobile app using Flutter with features like product browsing, order placement, and real-time tracking.",
        "Created a delivery partner app using React Native to manage pickups, delivery routes, and status updates.",
        "Developed a React.js admin dashboard for managing products, orders, delivery tracking, and customer support.",
        "Integrated payment gateway Razorpay for secure online transactions.",
        "Enabled real-time order updates and delivery tracking using WebSocket and Redis.",
        "Containerized services using Docker and prepared for deployment on OpenShift/Kubernetes.",
        "Used PostgreSQL for storing user data, product inventory, and transaction history.",
        "Implemented CI/CD pipelines using GitHub Actions for automated build and deployment.",
        "Ensured responsive, user-friendly UI with smooth navigation and error handling across all apps.",
        "Integrated push notifications to alert users about order status, offers, and delivery updates.",
        "Focused on performance optimization and secure communication between services."
      ],
      tech: [
        "FastAPI", "Flutter", "React Native", "React.js", "Razorpay", "WebSocket", "Redis", "Docker", "OpenShift", "Kubernetes", "PostgreSQL", "GitHub Actions", "JWT", "CI/CD"
      ]
    },
    {
      name: "Application Performance Monitoring (APM) System",
      decription: [
        "Implemented a robust monitoring system for tracing, logging, and collecting metrics to enhance real-time observability and debugging.",
        "Integrated OpenTelemetry (OTel) to collect telemetry data from various microservices and applications.",
        "Provided deep insights into application performance, helping teams optimize and troubleshoot issues efficiently."
      ],
      tech: ["OpenTelemetry (OTel)", "Microservices", "Observability"]
    },
    {
      name: "Infrastructure Monitoring Platform",
      decription: [
        "Designed a system to monitor nodes, pods, events, and cluster health across Kubernetes environments.",
        "Developed real-time dashboards using Apache Superset for visualizing infrastructure health and usage patterns.",
        "Integrated Prometheus and Grafana for real-time alerting and performance analytics."
      ],
      tech: ["Kubernetes", "Apache Superset", "Prometheus", "Grafana"]
    },
    {
      name: "Edge Monitoring Solution",
      decription: [
        "Developed an edge monitoring framework to connect multiple edge devices, enabling visibility of pod, node, and cluster information in a unified dashboard.",
        "Ensured seamless integration with existing observability platforms to provide real-time insights into edge infrastructure.",
        "Implemented lightweight monitoring agents on edge devices to capture key performance metrics."
      ],
      tech: ["Edge Devices", "Observability", "Monitoring"]
    },
    {
      name: "Sustainability Monitoring Dashboard",
      decription: [
        "Created a sustainability-focused dashboard for monitoring the resource efficiency of Kubernetes clusters, including node and pod sustainability tracking.",
        "Optimized resource allocation and sustainability by analyzing historical and real-time data on cluster resource consumption.",
        "Enhanced cloud cost efficiency by implementing intelligent scaling recommendations."
      ],
      tech: ["Kubernetes", "Sustainability", "Cloud Cost Optimization"]
    },
    {
      name: "VPBank - Vietnam Role-Based Access Control",
      decription: [
        "Developed a role-based access control system using React for the frontend and Python FastAPI for backend API services.",
        "Implemented role-specific access restrictions for Admin, Gold, and Platinum customers.",
        "Utilized Trino with file-based access control to manage schema and table-level access based on user roles.",
        "Enabled dynamic permissions for schema and catalog table management.",
        "Integrated customer loyalty data to enable promotional program targeting based on spending behavior."
      ],
      tech: ["React", "FastAPI", "Trino", "RBAC"]
    },
    {
      name: "TitanData (Resume Parsing AI Website)",
      decription: [
        "Frontend Development: Built the frontend of the resume parsing AI website using React.js, ensuring a seamless user experience.",
        "Backend Development: Developed the backend using Python, integrating AI models for resume parsing.",
        "Real-Time Data Processing: Implemented real-time data processing and parsing functionalities to enhance user experience and efficiency."
      ],
      tech: ["React.js", "Python", "AI", "Real-Time Processing"]
    },
    {
      name: "Perfido (Performance Testing Website)",
      decription: [
        "Frontend Development: Developed the frontend using Next.js, creating an intuitive and responsive user interface.",
        "Backend Development: Built the backend with Nest.js, ensuring robust performance testing capabilities.",
        "Performance Metrics: Integrated various performance metrics and reporting features to provide detailed insights into application performance."
      ],
      tech: ["Next.js", "Nest.js", "Performance Testing"]
    }
  ];
  // Add experience data array
  const experienceData = [
    {
      company: "Zaga Open Source Pvt Ltd",
      role: "Software Engineer",
      period: "Jun 2024 - Present",
      location: "Kovilpatti, India",
      description: [
        "Designed and implemented a Data Mesh Architecture utilizing OpenTelemetry (OTel), Kafka, Hive, Iceberg, MinIO, Trino, and Redis for scalable and efficient data processing.",
        "Developed a real-time observability platform by integrating tracing, logging, and metrics collection to monitor system health.",
        "Built a high-performance data ingestion framework using FastAPI, enabling seamless data flow between microservices.",
        "Engineered a React-based frontend to visualize infrastructure monitoring, system health, and analytics dashboards.",
        "Implemented role-based access control (RBAC) for data access management, leveraging Trino and Iceberg for secure and structured access policies.",
        "Led Kubernetes, Docker, Helm, and OpenShift deployments, automating application provisioning and ensuring high availability and scalability.",
        "Optimized MinIO-based object storage for handling large-scale telemetry and analytics data, improving storage efficiency and retrieval performance.",
        "Developed real-time data analytics and processing pipelines using Kafka and Trino, enabling fast query execution for observability insights.",
        "Developed and fine-tuned AI/ML models for anomaly detection using Isolation Forest, and Hugging Face.",
        "Implemented a Retrieval-Augmented Generation (RAG) pipeline integrating GPT-2 and Milvus vector database to enhance system intelligence.",
        "Focused on performance tuning, monitoring, and optimization to ensure seamless user experience and efficient system operations."
      ],
      skills: [
        "OpenTelemetry (OTel)",
        "Kafka",
        "Hive",
        "Iceberg",
        "MinIO",
        "Trino",
        "Redis",
        "FastAPI",
        "React",
        "RBAC",
        "Kubernetes",
        "Docker",
        "Helm",
        "OpenShift",
        "Milvus",
        "GPT-2",
        "Hugging Face",
        "AI/ML",
        "Python",
        "Data Mesh"
      ]
    },
    {
      company: "Icanio Technologies",
      role: "Software Development Engineer Intern",
      period: "09/2023 - 02/2024",
      location: "Tirunelveli",
      description: [
        "Developed user interfaces and components using React.js, ensuring responsiveness and a seamless user experience across different devices and browsers.",
        "Contributed to backend development by building RESTful APIs, handling authentication, and optimizing database operations using Node.js, MongoDB, and SQL.",
        "Worked closely with designers and backend developers to integrate frontend components with backend services, fostering effective collaboration and achieving project goals.",
        "Actively participated in code reviews, team meetings, and adopted agile methodologies, gaining valuable insights into software development best practices and enhancing my skills as a developer."
      ],
      skills: [
        "React Js",
        "Node Js",
        "Next JS",
        "Nest Js",
        "TypeScript",
        "Mui",
        "Tailwind Css",
        "MangoDb",
        "Sql",
        "REST APIs",
        "Web Socket"
      ]
    },
    {
      company: "Forge Innovation & Ventures",
      role: "Graduate Innovation Engineer Trainee",
      period: "02/2023 - 06/2023",
      location: "Tirunelveli",
      description: [
        "Applied academic IoT knowledge: Used theoretical learning in practical scenarios, particularly in IoT applications.",
        "Led innovation projects: Took charge of projects to solve problems with IoT solutions, actively contributing to problem-solving efforts.",
        "Gained hands-on IoT experience: Implemented IoT solutions in various sectors, like smart buildings and healthcare, learning about IoT systems firsthand.",
        "Developed professionally: Collaborated with mentors, enhancing technical and soft skills vital for professional growth and learning in a real-world setting."
      ],
      skills: [
        "arduino",
        "IoT",
        "php",
        "Sql",
        "Inovation"
      ]
    }
  ];
  return (
    <div className="lg:px-48 px-4">

      <div id="home" className="space-y-4 flex flex-col items-start justify-center h-screen">
        <AnimatedDiv>
          <div className="md:text-7xl text-4xl font-bold">
            {`Hey , I'm Anandharaj`}<span className="text-primary">.</span>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="md:text-5xl text-3xl font-bold">
            I am <span className="text-primary">Full Stack Software Developer</span>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="text-lg">
            Experienced in React, Python, and building scalable web apps.
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <Button onClick={handleDownload}>Download Resume</Button>
        </AnimatedDiv>
      </div>


      <div id="about" className="space-y-4 py-14">
        <AnimatedDiv>
          <div className="text-5xl flex items-center space-x-4 font-bold">About
            <span className="text-primary">.</span> <Separator />
          </div>
        </AnimatedDiv>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">

          <div className="capitalize space-y-4 text-lg md:col-span-2">
            <AnimatedDiv>
              <div>
                Full Stack Software Developer skilled in building scalable and efficient software solutions across frontend and backend development. Experienced in designing robust APIs using Python (FastAPI), developing responsive UIs with React.js and Next.js, and integrating modern databases like Trino and Iceberg. Proficient in DevOps tools including Docker, Kubernetes, and Helm, with experience in cloud-native deployments using OpenShift. Adept at creating real-time observability platforms, automating workflows with GitHub Actions, and applying AI/ML models for anomaly detection. Passionate about delivering high-quality, secure, and maintainable applications through microservices architecture, with a strong focus on performance optimization and user experience.
              </div>
            </AnimatedDiv>
            <AnimatedDiv>

              <div>
                His recent roles include developing a performance testing application at Icanio Technologies and spearheading the creation of a Green Cover Enhancement Web App at Forge Innovation & Ventures.
              </div>
            </AnimatedDiv>
            <AnimatedDiv>

              <div>
                i am collaborative mindset and dedication to innovation make him an invaluable asset in any software development team, consistently striving for excellence in his work.
              </div>
            </AnimatedDiv>
            <AnimatedDiv>

              <div className="flex space-x-3 items-center">
                <div className="font-bold text-primary">My Links</div>
                <IconArrowRight className="text-primary w-5 h-5" />
                <Link href="https://wa.me/918925191383" target="_blank" >
                  <IconWhatsapp className="w-5 h-5" />
                </Link>
                <Link href="https://github.com/Raj-232" target="_blank" >
                  <IconGithub className="w-5 h-5" />
                </Link>
                <Link href="mailto:aaraj232@gmail.com" >
                  <IconMail className="w-5 h-5" />
                </Link>
                <Link href="tel:+918925191383" >
                  <IconPhoneCall className="w-5 h-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/anandharaj-Link-821029229/" target="_blank" >
                  <IconLinkDin className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedDiv>
          </div>
          <div className="space-y-6">
            <AnimatedDiv>
              <div className="flex space-x-3 text-xl items-center"> <IconTerminalFill /><div>Work Skills</div>
              </div>
            </AnimatedDiv>
            <AnimatedDiv>
              <div className="flex-wrap space-x-2  space-y-2">
                <Badge>Javascript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>HTML</Badge>
                <Badge>React</Badge>
                <Badge>Redux</Badge>
                <Badge>Node Js</Badge>
                <Badge>Express</Badge>
                <Badge>Postgres</Badge>
                <Badge>MongoDB</Badge>
                <Badge>GitHub</Badge>
              </div>
            </AnimatedDiv>
            <AnimatedDiv>
              <div className="flex space-x-3 items-center text-xl"> <IconEmojiSmileFill /><div>Fun Skills</div></div>
            </AnimatedDiv>
            <AnimatedDiv>
              <div className="flex-wrap space-x-2 space-y-2">
                <Badge>Tailwind</Badge>
                <Badge>Python</Badge>
                <Badge>Blender</Badge>
                <Badge>Java</Badge>
                <Badge>Unity</Badge>
                <Badge>PhotoShop</Badge>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </div>


      <div id="project" className="space-y-8 py-14">
        <AnimatedDiv>
          <div className="text-5xl flex items-center space-x-4 font-bold"><Separator />Projects<span className="text-primary">.</span></div>
        </AnimatedDiv>
        <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
          {
            projectdata.map((data, index) => (
              <div key={index}>
                <AnimatedDiv>
                  <div className="bg-background border rounded-lg p-6 shadow space-y-3 h-96 flex flex-col">
                    <div className="text-2xl font-bold flex items-center space-x-2">
                      <span>{data.name}</span>
                      <span className="text-primary">.</span>
                    </div>
                    <div className="space-y-1 text-base flex-1 overflow-y-auto pr-2">
                      {Array.isArray(data.decription) ? data.decription.map((desc, i) => (
                        <div key={i}>• {desc}</div>
                      )) : <div>• {data.decription}</div>}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {Array.isArray(data.tech) ? data.tech.map((tech, i) => (
                        <Badge key={i}>{tech}</Badge>
                      )) : <Badge>{data.tech}</Badge>}
                    </div>
                  </div>
                </AnimatedDiv>
              </div>
            ))
          }
        </div>
      </div>


      <div id="exp" className="space-y-12 py-14">
        <AnimatedDiv>
        <div className="text-5xl flex items-center space-x-4 font-bold">Experience<span className="text-primary">.</span> <Separator /></div>
        </AnimatedDiv>
        {experienceData.map((exp, idx) => (
          <div className="space-y-4" key={idx}>
            <div className="flex justify-between ">
              <AnimatedDiv>
                <div className="font-bold space-y-2 text-lg" >
                  <div>{exp.company}</div>
                  <div className="text-primary">{exp.role}</div>
                </div>
              </AnimatedDiv>
              <AnimatedDiv>
                <div className="text-right space-y-2">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </AnimatedDiv>
            </div>
            <AnimatedDiv>
              <div>
                {exp.description.map((desc, i) => (
                  <div key={i}>• {desc}</div>
                ))}
              </div>
            </AnimatedDiv>
            <AnimatedDiv>
              <div className="flex-wrap space-x-2 space-y-2">
                {exp.skills.map((skill, i) => (
                  <Badge key={i}>{skill}</Badge>
                ))}
              </div>
            </AnimatedDiv>
          </div>
        ))}
      </div>


      <div id="contact" className="space-y-6 flex flex-col items-center justify-center h-screen">
        <AnimatedDiv>
          <div className="text-7xl flex items-center space-x-4 font-bold">Contact
            <span className="text-primary">.</span>
          </div>
        </AnimatedDiv>
        <div className="text-lg md:w-2/3 text-center">
          <AnimatedDiv>
            <div>
              Email or connect on <span className="text-primary"><Link href="https://www.linkedin.com/in/anandharaj-Link-821029229/" target="_blank" >Linkedin</Link></span> or <span className="text-primary"><Link href="https://wa.me/918925191383" target="_blank">Whatsapp</Link></span>.
            </div>
          </AnimatedDiv>
        </div>
        <AnimatedDiv>
          <Link href="mailto:aaraj232@gmail.com" className="space-x-2 text-lg font-bold flex items-center hover:text-primary" >
            <IconMail className="w-5 h-5" /> <div>aaraj232@gmail.com</div>
          </Link>
        </AnimatedDiv>
      </div>

    </div>
  )
}

export default Page
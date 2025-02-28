"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import ImageInternal from "../app/public/dashboard.jpg";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("About");

  const navigationItems = [
    "About",
    "Experience",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  const NavigationLinks = () => (
    <div className="space-y-4">
      {navigationItems.map((item) => (
        <Link key={item} href={`#${item}`}>
          <Button
            key={item}
            variant="ghost"
            className={`w-full justify-start ${
              activeSection === item ? "bg-primary/10" : ""
            }`}
            onClick={() => {
              setActiveSection(item);
              setIsOpen(false);
            }}
          >
            {item}
          </Button>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <NavigationLinks />
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center justify-between">
            <h1 className="text-lg font-bold">YEN KIMLOANG</h1>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        {/* Desktop Sidebar */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <nav className="relative px-4 py-6 lg:px-8">
            <NavigationLinks />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 lg:mb-12"
          >
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              YEN <span className="text-primary">KIMLOANG</span>
            </h1>
            <div className="flex flex-col gap-3 text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>PHNOM PENH</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:mrloang79@gmail.com"
                  className="hover:text-primary"
                >
                  MRLOANG78@GMAIL.COM
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-lg leading-relaxed">
                  I am an experienced BackEnd Developer proficient in C#, Java,
                  and SQL Server. I specialize in creating web APIs, Windows
                  Form applications, and Blazor websites. My expertise extends
                  to handling complex database structures using T-SQL in SQL
                  Server. With a passion for clean code and efficient solutions,
                  I strive to deliver high-quality software that meets and
                  exceeds client expectations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 mb-8"
          >
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </motion.div>

          <Separator className="my-8 lg:my-12" />

          {/* Experience Section */}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-8 lg:mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Experience</h2>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">BackEnd Developer</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Tonaire Digital • 2023 - Present
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Led the development of enterprise-level web applications
                    using C# and ASP.NET Core.
                  </li>
                  <li>
                    Implemented complex database solutions using SQL Server and
                    optimized query performance.
                  </li>
                  <li>
                    Mentored junior developers and conducted code reviews to
                    ensure high code quality.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">IT Assitant</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sorya Center Point• 2022- 2023
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Collaborated with cross-functional teams to deliver
                    high-quality software solutions.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          {/* Education Section */}
          <motion.section
            id="Education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mb-8 lg:mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Education</h2>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  National University of Management • 2013 - 2017
                </p>
                <p>
                  Graduated with honors. Specialized in Software Engineering and
                  Database Management.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            id="Skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mb-8 lg:mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
              Technical Skills
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4">
                  {[
                    { skill: "C#", level: 90 },
                    { skill: "Java", level: 85 },
                    { skill: "SQL Server", level: 88 },
                    { skill: "Blazor", level: 82 },
                    { skill: "Web API", level: 85 },
                    { skill: ".NET", level: 87 },
                  ].map((item) => (
                    <div key={item.skill}>
                      <div className="mb-2 flex justify-between">
                        <span className="font-medium">{item.skill}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-secondary">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.level}%` }}
                          transition={{ duration: 1, delay: 1.4 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="Projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mb-8 lg:mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">
                    E-commerce Platform{" "}
                  </h3>
                  <p className="mb-4">
                    Developed a full-stack e-commerce solution using .NET Core{" "}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Technologies: C#, ASP.NET Core, SQL Server,Dev Express UI
                    Framework
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Human Resource System
                  </h3>
                  <p className="mb-4">
                    Built a robust inventory tracking system for a large retail
                    chain.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Technologies: C#, ASP.NET Core, SQL Server,Dev Express UI
                    Framework
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-p">
                  <h3 className="text-xl font-semibold mb-2">
                    Point Of System
                  </h3>
                  <p className="mb-4">
                    Built a robust inventory tracking system for PlayGround And
                    Bevearage Stock Alert
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Technologies: C#, ASP.NET Core, SQL Server,Native UI
                    Framework
                  </p>
                </CardContent>
              </Card>
            </div>
            {/*
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2].map((index) => (
                <div
                  key={index}
                  className="relative aspect-video overflow-hidden rounded-lg"
                >
                  <Image
                    src={ImageInternal}
                    alt={`Project ${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
        
          */}
          </motion.section>
          {/* Contact Form Section */}
          <motion.section
            id="#Contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mb-8 lg:mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Contact Me</h2>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message here..." />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.section>
        </main>
      </div>
    </div>
  );
}

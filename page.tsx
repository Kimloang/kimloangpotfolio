"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, Menu, MessageCircle, Moon, Sun, Send } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("About")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigationItems = ["About", "Experience", "Education", "Skills", "Projects", "Certifications", "Contact"]

  const NavigationLinks = () => (
    <div className="space-y-6">
      {navigationItems.map((item) => (
        <Button
          key={item}
          variant="ghost"
          className={`w-full justify-start hover:bg-primary/10 ${activeSection === item ? "bg-primary/20" : ""}`}
          onClick={() => {
            setActiveSection(item)
            setIsOpen(false)
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 transition-colors duration-500">
      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 z-50 flex w-full items-center justify-between bg-background/80 p-4 backdrop-blur-sm lg:hidden"
      >
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-background p-6">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20">
                <Image
                  src="https://sjc.microlink.io/uJuLfP9_pSLe7tiqhzJfclwENL33U9E6fWbIjQyn2Bnac_nxiPmNzBDojaz7dMVPlJF-4w23RLuiQ7Jm5jjJMw.jpeg"
                  alt="Profile"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <NavigationLinks />
          </SheetContent>
        </Sheet>
        <h1 className="text-xl font-bold">YEN KIMLOANG</h1>
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {mounted && (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
        </Button>
      </motion.header>

      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed left-0 top-0 hidden h-screen w-64 bg-background p-6 lg:block"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">
            <Image
              src="https://sjc.microlink.io/uJuLfP9_pSLe7tiqhzJfclwENL33U9E6fWbIjQyn2Bnac_nxiPmNzBDojaz7dMVPlJF-4w23RLuiQ7Jm5jjJMw.jpeg"
              alt="Profile"
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <NavigationLinks />
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-6 left-6"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
        </Button>
      </motion.nav>

      {/* Main Content */}
      <main className="px-4 pb-8 pt-20 lg:ml-64 lg:p-8">
        <div className="mx-auto max-w-4xl">
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
                <a href="mailto:mrloang79@gmail.com" className="hover:text-primary">
                  MRLOANG79@GMAIL.COM
                </a>
              </div>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="mb-8 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary p-6 text-primary-foreground">
                  <h2 className="text-xl font-semibold">About Me</h2>
                </div>
                <div className="p-6">
                  <p className="text-lg leading-relaxed">
                    I am an experienced Full Stack Developer proficient in C#, Java, and SQL Server. I specialize in
                    creating web APIs, Windows Form applications, and Blazor websites. My expertise extends to handling
                    complex database structures using T-SQL in SQL Server. With a passion for clean code and efficient
                    solutions, I strive to deliver high-quality software that meets and exceeds client expectations.
                  </p>
                </div>
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
              <CardContent className="p-0">
                <div className="bg-primary p-6 text-primary-foreground">
                  <h3 className="text-xl font-semibold">Senior Full Stack Developer</h3>
                  <p className="text-sm">TechCorp Solutions • 2020 - Present</p>
                </div>
                <div className="p-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Led the development of enterprise-level web applications using C# and ASP.NET Core.</li>
                    <li>Implemented complex database solutions using SQL Server and optimized query performance.</li>
                    <li>Mentored junior developers and conducted code reviews to ensure high code quality.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="bg-primary p-6 text-primary-foreground">
                  <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                  <p className="text-sm">InnoSoft Inc. • 2017 - 2020</p>
                </div>
                <div className="p-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developed and maintained web applications using Java and Spring Framework.</li>
                    <li>Created responsive front-end interfaces using React and Angular.</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mb-8 lg:mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Education</h2>
            <Card>
              <CardContent className="p-0">
                <div className="bg-primary p-6 text-primary-foreground">
                  <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm">University of Technology • 2013 - 2017</p>
                </div>
                <div className="p-6">
                  <p>Graduated with honors. Specialized in Software Engineering and Database Management.</p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mb-8 lg:mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Technical Skills</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {[
                    { skill: "C#", level: 90 },
                    { skill: "Java", level: 85 },
                    { skill: "SQL Server", level: 88 },
                    { skill: "Blazor", level: 82 },
                    { skill: "Web API", level: 85 },
                    { skill: ".NET", level: 87 },
                    { skill: "React", level: 80 },
                    { skill: "Angular", level: 78 },
                    { skill: "Docker", level: 75 },
                  ].map((item) => (
                    <div key={item.skill}>
                      <div className="mb-2 flex justify-between">
                        <span className="font-medium">{item.skill}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mb-8 lg:mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-0">
                  <div className="bg-primary p-6 text-primary-foreground">
                    <h3 className="text-xl font-semibold">E-commerce Platform</h3>
                  </div>
                  <div className="p-6">
                    <p className="mb-4">Developed a full-stack e-commerce solution using .NET Core and React.</p>
                    <p className="text-sm text-muted-foreground">Technologies: C#, ASP.NET Core, React, SQL Server</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="bg-primary p-6 text-primary-foreground">
                    <h3 className="text-xl font-semibold">Inventory Management System</h3>
                  </div>
                  <div className="p-6">
                    <p className="mb-4">Built a robust inventory tracking system for a large retail chain.</p>
                    <p className="text-sm text-muted-foreground">
                      Technologies: Java, Spring Boot, Angular, PostgreSQL
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=Project+${index}`}
                    alt={`Project ${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </motion.section>

          {/* Certifications & Awards Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="mb-8 lg:mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Certifications & Awards</h2>
            <Card>
              <CardContent className="p-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Microsoft Certified: Azure Developer Associate</li>
                  <li>Oracle Certified Professional, Java SE 11 Developer</li>
                  <li>Best Innovative Project Award, TechCorp Annual Hackathon 2022</li>
                  <li>Employee of the Year, InnoSoft Inc., 2019</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          {/* Contact Form Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mb-8 lg:mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Contact Me</h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
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
        </div>
      </main>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <Button
          size="lg"
          className="rounded-full shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <MapPin className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  )
}


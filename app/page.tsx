"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const generateCases = () => {
  const locationData = [
    { name: "Michael Anderson", location: "New York, USA" },
    { name: "Sarah Thompson", location: "New York, USA" },
    { name: "James Wilson", location: "London, UK" },
    { name: "Emily Clarke", location: "London, UK" },
    { name: "Hiroshi Tanaka", location: "Tokyo, Japan" },
    { name: "Yuki Nakamura", location: "Tokyo, Japan" },
    { name: "Jack O'Brien", location: "Sydney, Australia" },
    { name: "Sophie Mitchell", location: "Sydney, Australia" },
    { name: "David Chen", location: "Toronto, Canada" },
    { name: "Emma Dubois", location: "Toronto, Canada" },
    { name: "Klaus Mueller", location: "Berlin, Germany" },
    { name: "Anna Schmidt", location: "Berlin, Germany" },
    { name: "Wei Zhang", location: "Singapore" },
    { name: "Priya Sharma", location: "Singapore" },
    { name: "Ahmed Al-Rashid", location: "Dubai, UAE" },
    { name: "Fatima Hassan", location: "Dubai, UAE" },
    { name: "Pierre Dubois", location: "Paris, France" },
    { name: "Marie Laurent", location: "Paris, France" },
    { name: "Li Wei", location: "Hong Kong" },
    { name: "Chen Mei", location: "Hong Kong" },
    { name: "Robert Martinez", location: "New York, USA" },
    { name: "Oliver Bennett", location: "London, UK" },
    { name: "Kenji Yamamoto", location: "Tokyo, Japan" },
    { name: "Isabella Costa", location: "Sydney, Australia" },
  ]

  const caseTypes = [
    "Wallet Recovery",
    "Exchange Hack",
    "Phishing Attack",
    "Smart Contract Exploit",
    "Private Key Loss",
    "2FA Lockout",
  ]

  const cases = []
  let dataIndex = 0

  // Generate processed cases (January - March 2025)
  for (let i = 0; i < 12; i++) {
    const month = Math.floor(Math.random() * 3) // 0-2 (Jan-Mar)
    const day = Math.floor(Math.random() * 28) + 1
    const date = new Date(2025, month, day)
    const clientData = locationData[dataIndex % locationData.length]
    dataIndex++

    cases.push({
      id: `case-${i}`,
      name: clientData.name,
      location: clientData.location,
      type: caseTypes[Math.floor(Math.random() * caseTypes.length)],
      status: "processed" as const,
      date: date.toISOString(),
      amount: `$${(Math.random() * 500000 + 50000).toFixed(0)}`,
    })
  }

  // Generate pending cases (April - June 2025)
  for (let i = 12; i < 18; i++) {
    const month = Math.floor(Math.random() * 3) + 3 // 3-5 (Apr-Jun)
    const day = Math.floor(Math.random() * 28) + 1
    const date = new Date(2025, month, day)
    const clientData = locationData[dataIndex % locationData.length]
    dataIndex++

    cases.push({
      id: `case-${i}`,
      name: clientData.name,
      location: clientData.location,
      type: caseTypes[Math.floor(Math.random() * caseTypes.length)],
      status: "pending" as const,
      date: date.toISOString(),
      amount: `$${(Math.random() * 500000 + 50000).toFixed(0)}`,
    })
  }

  // Generate new cases (July - October 2025)
  for (let i = 18; i < 24; i++) {
    const month = Math.floor(Math.random() * 4) + 6 // 6-9 (Jul-Oct)
    const day = Math.floor(Math.random() * 28) + 1
    const date = new Date(2025, month, day)
    const clientData = locationData[dataIndex % locationData.length]
    dataIndex++

    cases.push({
      id: `case-${i}`,
      name: clientData.name,
      location: clientData.location,
      type: caseTypes[Math.floor(Math.random() * caseTypes.length)],
      status: "new" as const,
      date: date.toISOString(),
      amount: `$${(Math.random() * 500000 + 50000).toFixed(0)}`,
    })
  }

  return cases.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

const AnimatedGlobe = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full max-w-4xl max-h-4xl opacity-30 animate-rotate-slow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Globe outer glow */}
        <defs>
          <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.4)" />
            <stop offset="70%" stopColor="rgba(99, 102, 241, 0.2)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Rotating globe circle */}
        <circle cx="100" cy="100" r="95" fill="url(#globeGradient)" opacity="0.3" />

        {/* Continents representation */}
        <g strokeWidth="1.5" stroke="rgba(99, 102, 241, 0.4)" fill="none">
          {/* North America */}
          <path d="M 60 80 Q 50 70 55 85 Q 65 95 60 80" />
          {/* South America */}
          <path d="M 65 100 Q 60 110 70 120 Q 75 110 65 100" />
          {/* Europe */}
          <path d="M 100 70 Q 110 60 115 75 Q 110 80 100 70" />
          {/* Africa */}
          <path d="M 115 90 Q 120 85 125 100 Q 120 115 115 90" />
          {/* Asia */}
          <path d="M 130 75 Q 145 70 155 85 Q 150 95 130 75" />
          {/* Australia */}
          <path d="M 150 120 Q 155 115 160 130 Q 155 135 150 120" />
        </g>

        {/* Latitude lines */}
        <g stroke="rgba(99, 102, 241, 0.15)" strokeWidth="0.5" fill="none" opacity="0.5">
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="60" />
          <circle cx="100" cy="100" r="40" />
        </g>

        {/* Longitude lines */}
        <g stroke="rgba(99, 102, 241, 0.15)" strokeWidth="0.5" fill="none" opacity="0.5">
          <line x1="100" y1="20" x2="100" y2="180" />
          <line x1="30" y1="100" x2="170" y2="100" />
          <line x1="45" y1="30" x2="155" y2="170" />
          <line x1="155" y1="30" x2="45" y2="170" />
        </g>

        {/* Data points on globe (representing cases worldwide) */}
        <g fill="rgba(99, 102, 241, 0.8)">
          <circle cx="65" cy="85" r="2" className="animate-pulse-glow" />
          <circle cx="110" cy="75" r="2" className="animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
          <circle cx="140" cy="90" r="2" className="animate-pulse-glow" style={{ animationDelay: "1s" }} />
          <circle cx="125" cy="120" r="2" className="animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </g>

        {/* Orbiting particles around globe */}
        <g fill="none" stroke="rgba(99, 102, 241, 0.6)" strokeWidth="1">
          <circle cx="100" cy="100" r="110" opacity="0.2" />
          <circle cx="100" cy="100" r="125" opacity="0.1" />
        </g>
      </svg>

      {/* Floating security icons around globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[
          { Icon: () => <ShieldIcon />, angle: 0 },
          { Icon: () => <LockIcon />, angle: 90 },
          { Icon: () => <FingerprintIcon />, angle: 180 },
          { Icon: () => <DatabaseIcon />, angle: 270 },
        ].map(({ Icon, angle }, i) => (
          <div
            key={`orbit-${i}`}
            className="absolute animate-orbit"
            style={
              {
                "--angle": angle,
                "--distance": "140px",
                animation: `orbit 20s linear infinite`,
                animationDelay: `${-i * 5}s`,
              } as React.CSSProperties
            }
          >
            <Icon className="h-6 w-6 text-primary/60 animate-pulse-glow" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CryptoRecoveryPage() {
  const [cases, setCases] = useState(generateCases())
  const [notifications, setNotifications] = useState<
    Array<{ id: string; name: string; location: string; type: string }>
  >([])

  useEffect(() => {
    // Show pop-up notifications every 8-15 seconds
    const interval = setInterval(
      () => {
        const newCases = cases.filter((c) => c.status === "new")
        if (newCases.length > 0) {
          const randomCase = newCases[Math.floor(Math.random() * newCases.length)]
          const notification = {
            id: `notif-${Date.now()}`,
            name: randomCase.name,
            location: randomCase.location,
            type: randomCase.type,
          }

          setNotifications((prev) => [...prev, notification])

          // Remove notification after 5 seconds
          setTimeout(() => {
            setNotifications((prev) => prev.filter((n) => n.id !== notification.id))
          }, 5000)
        }
      },
      Math.random() * 7000 + 8000,
    )

    return () => clearInterval(interval)
  }, [cases])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processed":
        return <CheckIcon className="h-4 w-4" />
      case "pending":
        return <ClockIcon className="h-4 w-4" />
      case "new":
        return <AlertIcon className="h-4 w-4" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "processed":
        return "bg-green-500/20 text-green-500 border-green-500/40"
      case "pending":
        return "bg-chart-4/20 text-chart-4 border-chart-4/40"
      case "new":
        return "bg-primary/20 text-primary border-primary/40"
      default:
        return ""
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <div className="min-h-screen bg-background dark">
      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
        {notifications.map((notif) => (
          <Card key={notif.id} className="animate-slide-up border-primary/50 bg-card/95 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                  <AlertIcon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground">New Case Reported</p>
                  <p className="text-sm text-muted-foreground truncate">{notif.name}</p>
                  <p className="text-xs text-muted-foreground">{notif.location}</p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {notif.type}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center animate-pulse-glow">
              <ShieldIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CryptoGuard</h1>
              <p className="text-xs text-muted-foreground">Digital Asset Recovery</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://wa.me/13162261142" target="_blank" rel="noopener noreferrer" className="hidden md:flex">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <MessageIcon className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
            <a href="https://forms.gle/oFgW2rJdm2diGjk17" target="_blank" rel="noopener noreferrer">
              <Button size="sm">Report Now</Button>
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <AnimatedGlobe />

        {/* Multiple animated background layers */}
        <div className="absolute inset-0 digital-grid opacity-20" />
        <div className="absolute inset-0 hex-pattern opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/4 via-transparent to-primary/4" />

        {/* Animated scan lines - multiple layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line opacity-40" />
          <div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-scan-line opacity-20"
            style={{ animationDelay: "2s", animationDuration: "6s" }}
          />
        </div>

        {/* Enhanced floating data particles with binary code effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-primary/40 rounded-full animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Floating security icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { Icon: () => <LockIcon />, delay: "0s", left: "10%" },
            { Icon: () => <ShieldIcon />, delay: "2s", left: "20%" },
            { Icon: () => <FingerprintIcon />, delay: "4s", left: "80%" },
            { Icon: () => <DatabaseIcon />, delay: "1s", left: "90%" },
            { Icon: () => <CodeIcon />, delay: "3s", left: "70%" },
            { Icon: () => <BinaryIcon />, delay: "5s", left: "30%" },
          ].map(({ Icon, delay, left }, i) => (
            <div
              key={`icon-${i}`}
              className="absolute animate-float opacity-10"
              style={{
                left,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: delay,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            >
              <Icon className="h-8 w-8 text-primary" />
            </div>
          ))}
        </div>

        {/* Pulsing circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 animate-pulse-slow" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary animate-pulse-glow">
              <span className="font-medium tracking-wide">Trusted by 10,000+ Clients Worldwide</span>
            </Badge>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-[1.1] tracking-tight">
              Recover Your Lost{" "}
              <span className="text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient inline-block">
                Crypto Assets
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground/90 mb-10 text-pretty max-w-3xl mx-auto leading-relaxed font-light">
              Expert digital forensics and ethical recovery services. We specialize in recovering lost, stolen, or
              inaccessible cryptocurrency with complete transparency and confidentiality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="https://forms.gle/oFgW2rJdm2diGjk17" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="text-lg h-14 px-10 font-semibold animate-pulse-glow shadow-lg shadow-primary/20"
                >
                  Report Your Case
                  <ArrowIcon className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://wa.me/13162261142" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="text-lg h-14 px-10 font-semibold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-600 text-black shadow-lg shadow-yellow-500/30 animate-pulse-glow border-0"
                >
                  <MessageIcon className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg h-14 px-10 font-semibold bg-transparent border-2">
                <SearchIcon className="mr-2 h-5 w-5" />
                View Cases
              </Button>
            </div>

            {/* Enhanced feature icons with more animations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              <div className="flex flex-col items-center gap-3 animate-float" style={{ animationDelay: "0s" }}>
                <div className="relative h-20 w-20">
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-glow" />
                  <div className="absolute inset-1 rounded-full bg-primary/10 animate-spin-slow opacity-50" />
                  <div className="absolute inset-2 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <ShieldIcon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <p className="text-base font-semibold text-foreground">Secure</p>
                <p className="text-sm text-muted-foreground/80 text-center font-light">256-bit Encryption</p>
              </div>
              <div className="flex flex-col items-center gap-3 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="relative h-20 w-20">
                  <div
                    className="absolute inset-0 rounded-full bg-accent/20 animate-pulse-glow"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute inset-1 rounded-full bg-accent/10 animate-spin-slow opacity-50"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div className="absolute inset-2 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <LockIcon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <p className="text-base font-semibold text-foreground">Confidential</p>
                <p className="text-sm text-muted-foreground/80 text-center font-light">Zero Data Leaks</p>
              </div>
              <div className="flex flex-col items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="relative h-20 w-20">
                  <div
                    className="absolute inset-0 rounded-full bg-chart-3/20 animate-pulse-glow"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute inset-1 rounded-full bg-chart-3/10 animate-spin-slow opacity-50"
                    style={{ animationDelay: "1s" }}
                  />
                  <div className="absolute inset-2 rounded-full bg-chart-3/10 border border-chart-3/30 flex items-center justify-center">
                    <EyeIcon className="h-8 w-8 text-chart-3" />
                  </div>
                </div>
                <p className="text-base font-semibold text-foreground">Forensic</p>
                <p className="text-sm text-muted-foreground/80 text-center font-light">Deep Analysis</p>
              </div>
              <div className="flex flex-col items-center gap-3 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="relative h-20 w-20">
                  <div
                    className="absolute inset-0 rounded-full bg-chart-4/20 animate-pulse-glow"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <div
                    className="absolute inset-1 rounded-full bg-chart-4/10 animate-spin-slow opacity-50"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <div className="absolute inset-2 rounded-full bg-chart-4/10 border border-chart-4/30 flex items-center justify-center">
                    <ZapIcon className="h-8 w-8 text-chart-4" />
                  </div>
                </div>
                <p className="text-base font-semibold text-foreground">Fast</p>
                <p className="text-sm text-muted-foreground/80 text-center font-light">24/7 Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/40 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 digital-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">$2.4B+</p>
              <p className="text-sm text-muted-foreground">Assets Recovered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">10,000+</p>
              <p className="text-sm text-muted-foreground">Cases Resolved</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-chart-3 mb-2">98%</p>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-chart-4 mb-2">24/7</p>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Cases Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 hex-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-balance tracking-tight">Live Case Dashboard</h3>
            <p className="text-muted-foreground/90 text-xl text-pretty max-w-2xl mx-auto font-light leading-relaxed">
              Real-time view of active recovery cases. All client information is anonymized for privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem) => (
              <Card
                key={caseItem.id}
                className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className={`${getStatusColor(caseItem.status)} flex items-center gap-1`}>
                      {getStatusIcon(caseItem.status)}
                      {caseItem.status.toUpperCase()}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{formatDate(caseItem.date)}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{caseItem.name}</CardTitle>
                  <CardDescription>{caseItem.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Case Type:</span>
                      <span className="font-medium text-foreground">{caseItem.type}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-semibold text-primary">{caseItem.amount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 digital-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-balance tracking-tight">
              Ready to Recover Your Assets?
            </h3>
            <p className="text-xl text-muted-foreground/90 mb-10 text-pretty font-light leading-relaxed">
              Our team of digital forensics experts is standing by 24/7 to assist you with your case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://wa.me/13162261142" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto gap-2 animate-pulse-glow h-14 px-8 font-semibold text-lg">
                  <MessageIcon className="h-5 w-5" />
                  WhatsApp: +1 (316) 226-1142
                </Button>
              </a>
              <a href="mailto:Napleyllp@gmail.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto gap-2 bg-transparent h-14 px-8 font-semibold text-lg border-2"
                >
                  <MailIcon className="h-5 w-5" />
                  Napleyllp@gmail.com
                </Button>
              </a>
            </div>
            <div className="mt-6">
              <a href="https://forms.gle/oFgW2rJdm2diGjk17" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 h-14 px-8 font-semibold text-lg">
                  <ArrowIcon className="h-5 w-5" />
                  Submit Case Report
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 relative">
        <div className="absolute inset-0 hex-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <ShieldIcon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">CryptoGuard</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional crypto asset recovery with ethical practices and complete transparency.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Wallet Recovery</li>
                <li>Exchange Disputes</li>
                <li>Phishing Recovery</li>
                <li>Smart Contract Audits</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Security</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+1 (316) 226-1142</li>
                <li>Napleyllp@gmail.com</li>
                <li>24/7 Emergency Line</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>© 2025 CryptoGuard. All rights reserved. Licensed digital forensics professionals.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Inline SVG icons
const ShieldIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3z" />
  </svg>
)

const LockIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 1H4c-1.1 0-1.99.9-1.99 2L2 23l4-4h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5l8-5v2z" />
  </svg>
)

const FingerprintIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3z" />
  </svg>
)

const DatabaseIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18l-8 5l-8-5V6l8 5l8-5v2z" />
  </svg>
)

const CodeIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L6.6 6 0 12l6.6 6 1.8-1.4zm5.2 0l4.6-4.6-4.6-4.6 1.4-1.4L24 12l-6.6 6 1.8 1.4z" />
  </svg>
)

const BinaryIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
)

const SearchIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
)

const MessageIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 1H4c-1.1 0-1.99.9-1.99 2L2 23l4-4h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18h-12v-2h12v2zm0-3h-12V8h12v2zm0-3h-12V5h12v2z" />
  </svg>
)

const CheckIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
)

const AlertIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
)

const MailIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
  </svg>
)

const ZapIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const EyeIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
)

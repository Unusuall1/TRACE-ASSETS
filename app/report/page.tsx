"use client"

import type React from "react"

import { useState } from "react"
import { Shield, ArrowLeft, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function ReportPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background dark">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CryptoGuard</h1>
              <p className="text-xs text-muted-foreground">Digital Asset Recovery</p>
            </div>
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Form Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 digital-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            {!submitted ? (
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-3xl">Report Your Case</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and our team will contact you within 24 hours. All information is encrypted
                    and confidential.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input id="location" placeholder="City, Country" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="caseType">Case Type *</Label>
                      <Select required>
                        <SelectTrigger id="caseType">
                          <SelectValue placeholder="Select case type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wallet">Wallet Recovery</SelectItem>
                          <SelectItem value="exchange">Exchange Hack</SelectItem>
                          <SelectItem value="phishing">Phishing Attack</SelectItem>
                          <SelectItem value="contract">Smart Contract Exploit</SelectItem>
                          <SelectItem value="key">Private Key Loss</SelectItem>
                          <SelectItem value="2fa">2FA Lockout</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="amount">Estimated Amount (USD)</Label>
                      <Input id="amount" type="number" placeholder="50000" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Case Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Please provide detailed information about your case..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-2">
                      <Send className="h-5 w-5" />
                      Submit Case Report
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service. All information is
                      encrypted and handled with strict confidentiality.
                    </p>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-primary/20 text-center">
                <CardContent className="pt-12 pb-12">
                  <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Case Report Submitted!</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                    Thank you for submitting your case. Our team will review your information and contact you within 24
                    hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                      <Button size="lg" className="gap-2">
                        <ArrowLeft className="h-5 w-5" />
                        Back to Home
                      </Button>
                    </Link>
                    <a href="https://wa.me/13162261142" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                        Contact via WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

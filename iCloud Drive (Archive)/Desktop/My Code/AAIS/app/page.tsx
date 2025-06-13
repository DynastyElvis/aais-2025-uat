'use client';

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CountdownTimer from "@/components/countdown-timer"
import SpeakerCard from "@/components/speaker-card"
import FAQSection from "@/components/faq-section"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useState } from 'react'
import {
  Users, Briefcase, BookOpen, GitMerge, Plane, Landmark,
  Hotel, Cpu, Truck, Shield, Globe, Zap, Link2
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'objectives'>('overview')

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/mombasa-aerial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="title-font text-4xl md:text-6xl lg:text-7xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-yellow-400 animate-float transition-transform duration-300 hover:scale-105">
              Africa Aviation Innovation Summit 2025
            </h1>

            <p className="text-xl md:text-2xl mb-6 text-gray-300">
              Investing in Africa's Aviation Future: Unlocking Opportunities for Growth and Transformation through Innovation
            </p>
            <p className="text-lg md:text-xl mb-8">6th - 7th November, 2025 - Mombasa, Kenya</p>

            {/* Countdown Timer */}
            <div className="mb-10">
              <CountdownTimer targetDate="2025-11-06T09:00:00" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white border-2 border-primary hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300"
              >
                <Link href="/register">Register Now</Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300"
              >
                <Link href="/agenda">View Agenda</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About the Summit */}
      <section className="py-16 md:py-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-font text-3xl md:text-4xl text-center mb-6 text-primary">
              Africa's Premier Aviation Event
            </h2>
            <p className="text-lg text-center mb-10 text-gray-600 dark:text-gray-300">
              Join industry leaders, innovators, and decision-makers from across the continent and beyond.
            </p>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 mx-2 border-b-2 font-medium text-lg ${activeTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-primary'
                  }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('objectives')}
                className={`px-6 py-3 mx-2 border-b-2 font-medium text-lg ${activeTab === 'objectives'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-primary'
                  }`}
              >
                Objectives
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 mt-1 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">High-Impact Networking</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Connect with 500+ executives from 20+ countries across the aviation ecosystem.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Briefcase className="w-6 h-6 mt-1 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Investment Opportunities</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Access to potential deal flow and partnership opportunities with African aviation stakeholders.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 mt-1 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Industry Insights</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Cutting-edge knowledge from aviation leaders shaping the future of African air transport.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'objectives' && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 mt-1 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Explore Cross-Industry Collaboration
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Involve investors, policymakers, and industry leaders to drive investment in aviation infrastructure

                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 mt-1 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Highlight Innovation's Role
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Demonstrate how innovation enhances efficiency, customer experience, and operational excellence

                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 mt-1 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Showcase Funding Models

                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Present innovative financing models and business strategies that bolster industry resilience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 mt-1 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Foster Regulatory Dialogue


                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Encourage discussions on regulatory frameworks that create an enabling environment for investments

                      </p>
                    </div>
                  </div>



                </div>

              )}

            </div>
            <div className="py-12 bg-white text-center">
              <h2 className="title-font text-3xl md:text-4xl text-center mb-6 text-primary">
                Cross-Industry Collaboration
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 px-4 max-w-6xl mx-auto">
                {[
                  {
                    icon: "✈️",
                    title: "Aviation",
                    content: "Airlines, airports, air traffic management, and aviation authorities",
                  },
                  {
                    icon: "🏨",
                    title: "Tourism",
                    content: "Tourism boards, hospitality leaders, and travel agencies",
                  },
                  {
                    icon: "💻",
                    title: "Technology",
                    content: "Tech providers, startups, AI specialists, and blockchain experts",
                  },

                  {
                    icon: "🏛️",
                    title: "Government",
                    content: "Policymakers, regulators, and government representatives",
                  },
                  {
                    icon: "🏗️",
                    title: "Infrastructure Development",
                    content: "Strengthening airports, air traffic management, and regional connectivity through cutting-edge solutions.",
                  },
                  {
                    icon: "♻️",
                    title: "Efficiency & Sustainability",
                    content: "Exploring funding models and innovative approaches for long-term sustainability in African aviation.",
                  },
                  {
                    icon: "🤝",
                    title: "Regional Partnerships",
                    content: "Identifying synergies among African airlines, governments, and investors for collaborative growth.",
                  },

                  {
                    icon: "🤖",
                    title: "Technological Advancements",
                    content: "Utilizing AI and automation to improve operational efficiency, safety, and customer experience.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-3 text-xl">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-1 text-neutral-900">{item.title}</h4>
                    <p className="text-sm text-neutral-600 max-w-xs">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        <div className="py-16 px-4 bg-white max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Expected Outcomes */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-700 mb-6 text-center">
                Expected Outcomes
              </h3>

              <div className="space-y-4">
                {[
                  "Strengthened Cross-Sector Partnerships",
                  "Defined Investment Roadmaps",
                  "Policy Recommendations",
                  "Innovative Financing Models",
                  "Commitments to Sustainable Practices",
                ].map((text, i) => (
                  <div key={i} className="flex items-center bg-gray-50 rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-800 font-bold flex items-center justify-center mr-4">
                      {i + 1}
                    </div>
                    <p className="font-medium text-neutral-800">{text}</p>
                  </div>
                ))}
              </div>
            </div>


            {/* Event Format */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-700 mb-6 text-center">
                Event Format
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "👥",
                    title: "CEO's Breakfast",
                    description: "An exclusive gathering of top executives to discuss industry trends and opportunities",
                  },
                  {
                    icon: "🖋️",
                    title: "Keynote Addresses",
                    description: "Expert insights from industry leaders, policymakers, and investors",
                  },
                  {
                    icon: "🗣️",
                    title: "Panel Discussions",
                    description: "Engaging dialogues featuring aviation, finance, tourism, logistics, and technology experts",
                  },
                  {
                    icon: "📊",
                    title: "Case Studies & Success Stories",
                    description: "Showcasing innovative aviation investment strategies and business models",
                  },
                  {
                    icon: "💡",
                    title: "Innovation & Investment Showcases",
                    description: "A platform for startups, investors, and technology providers to present cutting-edge solutions",
                  },
                  {
                    icon: "🎓",
                    title: "Workshops & Interactive Sessions",
                    description: "Designed for knowledge sharing and capacity building",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex bg-gray-50 rounded-lg p-4 shadow-sm">
                    <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full text-yellow-800 text-xl mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="mt-0 py-8 md:py-0 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="title-font text-3xl md:text-4xl text-center mb-6 text-primary">Featured Speakers</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Learn from industry leaders and innovators who are shaping the future of aviation in Africa
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                id: "1",
                name: "Dr. Sarah Kimani",
                title: "Chief Innovation Officer",
                company: "African Airways",
                image: "/placeholder.svg?height=400&width=300",
                bio: "Dr. Sarah Kimani is a renowned aviation expert with over 15 years of experience in the industry. She has led numerous innovation initiatives that have transformed customer experience and operational efficiency at African Airways.",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
              },
              {
                id: "2",
                name: "John Ochieng",
                title: "Director of Strategy",
                company: "East African Aviation Authority",
                image: "/placeholder.svg?height=400&width=300",
                bio: "John Ochieng brings extensive regulatory expertise to the summit. His work has been instrumental in developing policies that support innovation while maintaining the highest safety standards across East Africa.",
                linkedin: "https://linkedin.com",
              },
              {
                id: "3",
                name: "Amina Diallo",
                title: "CEO",
                company: "West African Airlines",
                image: "/placeholder.svg?height=400&width=300",
                bio: "As the youngest CEO in African aviation, Amina Diallo has pioneered digital transformation strategies that have positioned West African Airlines as a leader in customer-centric service delivery.",
                twitter: "https://twitter.com",
              },
              {
                id: "4",
                name: "Robert Mensah",
                title: "Head of Technology",
                company: "Pan-African Aviation Group",
                image: "/placeholder.svg?height=400&width=300",
                bio: "Robert Mensah leads technological innovation at Pan-African Aviation Group, implementing cutting-edge solutions that have revolutionized operations across multiple African markets.",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
              },
            ].map((speaker) => (
              <SpeakerCard key={speaker.id} {...speaker} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="group">
              <Link href="/speakers" className="flex items-center">
                View All Speakers
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="title-font text-3xl md:text-4xl text-center mb-6 text-primary">
              Claim Your Spotlight
            </h2>
            <p className="text-lg text-center mb-10 text-gray-600 dark:text-gray-300">
              Step into the spotlight and claim your place among the elite. Our exclusive sponsorship packages are designed to position your brand at the forefront of industry leadership, delivering unmatched visibility, prestige, and influence.            </p>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                tier: 'Diamond',
                price: '$75,000',
                slots: '2 slots available',
                features: [
                  'Title sponsorship rights',
                  'Logo on all key branding elements',
                  'Opening remarks opportunity',
                  'Premier exhibition space',
                  'Full access to speaker lounge & VIP events',
                  'Dedicated media feature',
                  '12 VIP passes',
                ],
                color: 'rgb(147, 51, 234)', // Purple
              },
              {
                tier: 'Platinum',
                price: '$60,000',
                slots: '2 slots available',
                features: [
                  'Naming rights: "AAIS 2025 Powered by [Your Company]"',
                  'Premium logo placement on all event materials',
                  'Keynote speech opportunity',
                  'Prime exhibition space',
                  'VIP Lounge access for private networking',
                  'Invitation to exclusive VIP dinner',
                  '10 VIP passes',
                ],
                color: 'rgb(38, 38, 38)', // Dark gray
              },
              {
                tier: 'Gold',
                price: '$50,000',
                slots: '3 slots available',
                mostPopular: true,
                features: [
                  'Logo on all marketing collateral & digital promotions',
                  'Panel discussion seat',
                  'Premium exhibition booth',
                  'Access to networking sessions & speaker lounge',
                  'Dedicated sponsor highlight across social media',
                  'Invitation to VIP networking cocktail',
                  '6 VIP passes',
                ],
                color: 'rgb(202, 138, 4)', // Gold (amber)
              },
              {
                tier: 'Silver',
                price: '$30,000',
                slots: '4 slots available',
                features: [
                  'Logo placement on selected event branding',
                  'Participation in a panel discussion',
                  'Standard exhibition booth',
                  'Access to curated networking events',
                  'Logo placement in event recap materials',
                  'Invitation to exclusive VIP dinner',
                  '4 VIP passes',
                ],
                color: 'rgb(163, 163, 163)', // Gray
              },
              {
                tier: 'Bronze',
                price: '$20,000',
                slots: '6 slots available',
                features: [
                  'Logo on event website & select signage',
                  'Mention in event brochure',
                  'Basic exhibition space',
                  'General networking access',
                  'Social media mentions',
                  'Invitation to exclusive VIP dinner',
                  '2 VIP passes',
                ],
                color: 'rgb(202, 103, 3)', // Bronze
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-lg border shadow-sm bg-white text-gray-800 transition-all duration-300 hover:text-white hover:shadow-lg hover:-translate-y-1"
                style={{
                  transition: 'background-color 0.3s',
                  backgroundColor: 'white',
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.backgroundColor = pkg.color)
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.backgroundColor = 'white')
                }
              >
                {pkg.mostPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-600 text-white px-3 py-1 text-xs font-semibold rounded">
                    MOST POPULAR
                  </div>
                )}

                <div className="flex justify-between items-center mb-4">
                  <h4
                    className={`text-xl font-bold transition-all group-hover:text-white`}
                    style={{ color: `var(--pkg-color)` }}
                  >
                    {pkg.tier}
                  </h4>


                  <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full group-hover:bg-white group-hover:text-black">
                    {pkg.slots}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-2 group-hover:text-white">
                  {pkg.price}
                </h3>
                <p className="text-sm text-gray-500 mb-4 group-hover:text-gray-200">
                  {pkg.tier === 'Diamond'
                    ? 'Ultimate brand dominance and prestige'
                    : pkg.tier === 'Platinum'
                      ? 'Exclusive top-tier visibility and engagement'
                      : pkg.tier === 'Gold'
                        ? 'Premium visibility with speaking opportunities'
                        : pkg.tier === 'Silver'
                          ? 'Enhanced visibility with networking opportunities'
                          : 'Essential visibility package for businesses'}
                </p>

                <ul className="space-y-2 text-sm mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start group-hover:text-white">
                      <span className="text-green-600 mr-2 group-hover:text-white">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-2 px-4 rounded-md font-semibold transition border-2 group-hover:bg-white"
                  style={{
                    backgroundColor: pkg.color,
                    borderColor: 'white',
                    color: 'white',
                  }}
                >
                  <span className="group-hover:text-white">Select Package</span>
                </button>

              </div>
            ))}
          </div>


        </div>

        <div className="py-16 px-4 bg-white max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Expected Outcomes */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-700 mb-6 text-center">
                Expected Outcomes
              </h3>

              <div className="space-y-4">
                {[
                  "Strengthened Cross-Sector Partnerships",
                  "Defined Investment Roadmaps",
                  "Policy Recommendations",
                  "Innovative Financing Models",
                  "Commitments to Sustainable Practices",
                ].map((text, i) => (
                  <div key={i} className="flex items-center bg-gray-50 rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-800 font-bold flex items-center justify-center mr-4">
                      {i + 1}
                    </div>
                    <p className="font-medium text-neutral-800">{text}</p>
                  </div>
                ))}
              </div>
            </div>


            {/* Event Format */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-700 mb-6 text-center">
                Event Format
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "👥",
                    title: "CEO's Breakfast",
                    description: "An exclusive gathering of top executives to discuss industry trends and opportunities",
                  },
                  {
                    icon: "🖋️",
                    title: "Keynote Addresses",
                    description: "Expert insights from industry leaders, policymakers, and investors",
                  },
                  {
                    icon: "🗣️",
                    title: "Panel Discussions",
                    description: "Engaging dialogues featuring aviation, finance, tourism, logistics, and technology experts",
                  },
                  {
                    icon: "📊",
                    title: "Case Studies & Success Stories",
                    description: "Showcasing innovative aviation investment strategies and business models",
                  },
                  {
                    icon: "💡",
                    title: "Innovation & Investment Showcases",
                    description: "A platform for startups, investors, and technology providers to present cutting-edge solutions",
                  },
                  {
                    icon: "🎓",
                    title: "Workshops & Interactive Sessions",
                    description: "Designed for knowledge sharing and capacity building",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex bg-gray-50 rounded-lg p-4 shadow-sm">
                    <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full text-yellow-800 text-xl mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Venue */}
      <section className="py-16 md:py-1 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="title-font text-3xl md:text-4xl mb-6 text-primary">The Venue</h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                The 2025 Africa Aviation Innovation Summit will be held at the prestigious Mombasa International
                Convention Centre, offering world-class facilities in Kenya's coastal city.
              </p>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                Located just 15 minutes from Moi International Airport, the venue provides the perfect setting
                for networking, collaboration, and innovation with stunning ocean views.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/location" className="flex items-center">
                  Explore Location
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden shadow-xl group rounded-[15px]">
              {/* Main image */}
              <Image
                src="/location/mombasa-1.jpg"
                alt="Mombasa International Convention Centre"
                fill
                className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0 rounded-[15px]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Grid of 4 images on hover - exactly matches original image size */}
              <div
                className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out p-[7.5px] bg-white"
                style={{
                  borderRadius: '15px',
                }}
              >
                {[2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className="relative w-full h-full overflow-hidden shadow-xl rounded-[15px]"
                  >
                    <Image
                      src={`/location/mombasa-${num}.jpg`}
                      alt={`View ${num}`}
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* Contact Section */}
      <section className="py-16 md:py-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="title-font text-3xl md:text-4xl mb-6 text-primary">Contact Us</h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Have questions about the summit? Our team is here to help you with any inquiries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
                <h3 className="title-font text-xl mb-4">General Inquiries</h3>
                <p className="mb-2 text-gray-600 dark:text-gray-300">Email: info@africaaviationsummit.com</p>
                <p className="text-gray-600 dark:text-gray-300">Phone: +254 123 456 789</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
                <h3 className="title-font text-xl mb-4">Registration Support</h3>
                <p className="mb-2 text-gray-600 dark:text-gray-300">Email: register@africaaviationsummit.com</p>
                <p className="text-gray-600 dark:text-gray-300">Phone: +254 987 654 321</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl mb-6">
              "The future of African aviation lies in innovation, collaboration, and a deep understanding of evolving
              customer needs."
            </h2>
            <p className="text-xl">
              — Dr. Amina Mohammed, Chairperson, Africa Aviation Innovation Summit
            </p>
          </div>
        </div>

      </section>
    </>
  )
}
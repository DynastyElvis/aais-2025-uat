"use client"

import { useState } from "react"
import SpeakerCard from "@/components/speaker-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Speaker data
const speakerCategories = {
  "summit-speakers": [
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
    {
      id: "5",
      name: "Dr. Fatima Nkosi",
      title: "Research Director",
      company: "African Aviation Institute",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Dr. Fatima Nkosi is a leading researcher in aviation economics and market development. Her groundbreaking studies have provided valuable insights for airlines seeking to expand into new markets across the continent.",
      linkedin: "https://linkedin.com",
    },
    {
      id: "6",
      name: "Michael Adeyemi",
      title: "VP of Customer Experience",
      company: "Southern Skies Airlines",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Michael Adeyemi has transformed the customer experience at Southern Skies Airlines through innovative digital solutions and personalized service approaches that have set new standards in the industry.",
      twitter: "https://twitter.com",
    },
  ],
  panelists: [
    {
      id: "7",
      name: "Grace Mwangi",
      title: "Head of Operations",
      company: "Kenya Airways",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Grace Mwangi brings over a decade of operational expertise to the panel discussions. Her insights on streamlining processes while maintaining safety standards are highly valued in the industry.",
      linkedin: "https://linkedin.com",
    },
    {
      id: "8",
      name: "Ibrahim Toure",
      title: "Director of Market Development",
      company: "Air Senegal",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Ibrahim Toure specializes in identifying and developing new market opportunities across West Africa. His strategic approach has helped Air Senegal expand its routes and customer base significantly.",
      twitter: "https://twitter.com",
    },
    {
      id: "9",
      name: "Sophia Banda",
      title: "Chief Digital Officer",
      company: "Zambezi Airlines",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Sophia Banda leads digital transformation initiatives that have revolutionized the customer journey at Zambezi Airlines. Her expertise in leveraging technology for business growth is widely recognized.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      id: "10",
      name: "Dr. Emmanuel Kwame",
      title: "Aviation Policy Advisor",
      company: "African Union",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Dr. Emmanuel Kwame advises on aviation policy development across the continent. His work focuses on creating regulatory frameworks that foster innovation while ensuring safety and security.",
      linkedin: "https://linkedin.com",
    },
  ],
  moderators: [
    {
      id: "11",
      name: "Zainab Hassan",
      title: "Senior Aviation Journalist",
      company: "African Aviation Review",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Zainab Hassan is a respected journalist with extensive knowledge of the aviation industry. Her insightful questions and ability to guide meaningful discussions make her an exceptional moderator.",
      twitter: "https://twitter.com",
    },
    {
      id: "12",
      name: "David Okafor",
      title: "Industry Analyst",
      company: "Global Aviation Consultancy",
      image: "/placeholder.svg?height=400&width=300",
      bio: "David Okafor brings analytical depth to panel discussions, with a particular focus on market trends and competitive dynamics in the African aviation landscape.",
      linkedin: "https://linkedin.com",
    },
  ],
  masterclass: [
    {
      id: "13",
      name: "Prof. Nadia El-Masri",
      title: "Professor of Aviation Management",
      company: "Cairo Aviation Academy",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Prof. Nadia El-Masri is a leading academic in aviation management, specializing in operational efficiency and strategic planning. Her masterclasses combine theoretical knowledge with practical applications.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      id: "14",
      name: "Thomas Okello",
      title: "Technology Implementation Specialist",
      company: "AviaTech Solutions",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Thomas Okello has guided numerous airlines through successful technology implementations. His masterclass provides practical frameworks for integrating new systems with minimal disruption.",
      linkedin: "https://linkedin.com",
    },
  ],
  mc: [
    {
      id: "15",
      name: "Leila Abdi",
      title: "Professional Conference Host",
      company: "East African Events",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Leila Abdi is a charismatic and experienced conference host who has facilitated numerous high-profile industry events. Her engaging style and deep knowledge of aviation make her the perfect Master of Ceremony.",
      twitter: "https://twitter.com",
    },
  ],
}

export default function SpeakersPage() {
  const [category, setCategory] = useState("summit-speakers")

  const categoryLabels = {
    "summit-speakers": "Summit Speakers",
    panelists: "Panelists",
    moderators: "Moderators",
    masterclass: "Master Class Presenters",
    mc: "Master of Ceremony",
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="title-font text-4xl md:text-5xl lg:text-6xl mb-6">Meet the Speakers</h1>
          <p className="text-xl max-w-3xl mx-auto">Industry Leaders Shaping the Future of Aviation</p>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="summit-speakers" onValueChange={setCategory} className="mb-12">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="flex">
                {Object.entries(categoryLabels).map(([value, label]) => (
                  <TabsTrigger key={value} value={value} className="title-font px-4">
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(speakerCategories).map(([value, speakers]) => (
              <TabsContent key={value} value={value} className="mt-0">
                <h2 className="title-font text-2xl md:text-3xl text-center mb-12">
                  {categoryLabels[value as keyof typeof categoryLabels]}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {speakers.map((speaker) => (
                    <SpeakerCard key={speaker.id} {...speaker} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  )
}

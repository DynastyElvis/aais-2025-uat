import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Clock, Users, Presentation, MicIcon as MicrophoneStage } from "lucide-react"

export default function AgendaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="title-font text-4xl md:text-5xl lg:text-6xl mb-6">Summit Agenda</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Explore the Schedule for Africa Aviation Innovation Summit 2025
          </p>
          <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
            <Link href="#" className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download Full Agenda (PDF)
            </Link>
          </Button>
        </div>
      </section>

      {/* Agenda Breakdown */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="day1" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="day1" className="title-font">
                  Day 1 - October 17
                </TabsTrigger>
                <TabsTrigger value="day2" className="title-font">
                  Day 2 - October 18
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="day1" className="mt-0">
              <div className="space-y-8">
                {/* Day 1 Morning */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 md:p-8">
                  <h2 className="title-font text-2xl text-primary mb-6">Morning Sessions</h2>

                  <div className="space-y-8">
                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">08:00 - 09:00</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Registration & Networking Breakfast</h3>
                      <p className="text-muted-foreground">Welcome coffee and registration for all attendees</p>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">09:00 - 09:30</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Opening Ceremony</h3>
                      <p className="text-muted-foreground">Welcome address by the Summit Chairperson and dignitaries</p>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">09:30 - 10:30</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Keynote Address: The Future of African Aviation</h3>
                      <p className="text-muted-foreground mb-2">
                        An inspiring vision for the next decade of aviation in Africa
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Presentation className="h-4 w-4 mr-1" />
                        <span>Dr. Sarah Kimani, Chief Innovation Officer, African Airways</span>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">10:30 - 11:00</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Networking Break</h3>
                      <p className="text-muted-foreground">Coffee, tea, and refreshments</p>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">11:00 - 12:30</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Panel Discussion: Market Diversification Strategies</h3>
                      <p className="text-muted-foreground mb-2">
                        Exploring new market segments and customer acquisition approaches
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <MicrophoneStage className="h-4 w-4 mr-1" />
                        <span>Moderator: John Ochieng, East African Aviation Authority</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        <span>Panelists: Industry leaders from major African airlines</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 1 Afternoon */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 md:p-8">
                  <h2 className="title-font text-2xl text-primary mb-6">Afternoon Sessions</h2>

                  <div className="space-y-8">
                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">12:30 - 14:00</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Networking Lunch</h3>
                      <p className="text-muted-foreground">Buffet lunch with themed networking tables</p>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">14:00 - 15:30</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Breakout Sessions</h3>
                      <p className="text-muted-foreground mb-3">Parallel sessions on key industry topics:</p>
                      <ul className="space-y-3">
                        <li className="pl-4 border-l-2 border-primary">
                          <h4 className="font-bold">Track A: Digital Transformation in Aviation</h4>
                          <p className="text-sm text-muted-foreground">Room: Kilimanjaro Hall</p>
                        </li>
                        <li className="pl-4 border-l-2 border-secondary">
                          <h4 className="font-bold">Track B: Customer Experience Innovation</h4>
                          <p className="text-sm text-muted-foreground">Room: Serengeti Hall</p>
                        </li>
                        <li className="pl-4 border-l-2 border-gray-500">
                          <h4 className="font-bold">Track C: Sustainable Aviation Solutions</h4>
                          <p className="text-sm text-muted-foreground">Room: Victoria Hall</p>
                        </li>
                      </ul>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">15:30 - 16:00</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Afternoon Break</h3>
                      <p className="text-muted-foreground">Refreshments and networking</p>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">16:00 - 17:30</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Innovation Showcase</h3>
                      <p className="text-muted-foreground">
                        Presentations from startups and innovators revolutionizing African aviation
                      </p>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">19:00 - 21:00</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Welcome Reception</h3>
                      <p className="text-muted-foreground">
                        Networking dinner with cultural entertainment at the Nairobi National Museum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="day2" className="mt-0">
              <div className="space-y-8">
                {/* Day 2 Morning */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 md:p-8">
                  <h2 className="title-font text-2xl text-primary mb-6">Morning Sessions</h2>

                  <div className="space-y-8">
                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">08:30 - 09:00</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Morning Coffee & Networking</h3>
                      <p className="text-muted-foreground">Start the day with coffee and connections</p>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">09:00 - 10:00</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Keynote: Reaching New Customer Segments</h3>
                      <p className="text-muted-foreground mb-2">
                        Strategies for expanding aviation services to underserved markets
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Presentation className="h-4 w-4 mr-1" />
                        <span>Amina Diallo, CEO, West African Airlines</span>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">10:00 - 11:30</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Panel Discussion: Regional Connectivity</h3>
                      <p className="text-muted-foreground mb-2">
                        Overcoming challenges to enhance intra-African air travel
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <MicrophoneStage className="h-4 w-4 mr-1" />
                        <span>Moderator: Robert Mensah, Pan-African Aviation Group</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        <span>Panelists: Representatives from regional airlines and regulatory bodies</span>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">11:30 - 12:00</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Networking Break</h3>
                      <p className="text-muted-foreground">Refreshments and exhibition viewing</p>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">12:00 - 13:00</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Masterclass: Technology Implementation</h3>
                      <p className="text-muted-foreground">
                        Practical approaches to implementing new technologies in aviation operations
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 2 Afternoon */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 md:p-8">
                  <h2 className="title-font text-2xl text-primary mb-6">Afternoon Sessions</h2>

                  <div className="space-y-8">
                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">13:00 - 14:30</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Networking Lunch</h3>
                      <p className="text-muted-foreground">Buffet lunch with regional cuisine</p>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">14:30 - 16:00</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Breakout Sessions</h3>
                      <p className="text-muted-foreground mb-3">Parallel sessions on key industry topics:</p>
                      <ul className="space-y-3">
                        <li className="pl-4 border-l-2 border-primary">
                          <h4 className="font-bold">Track A: Financing Innovation in Aviation</h4>
                          <p className="text-sm text-muted-foreground">Room: Kilimanjaro Hall</p>
                        </li>
                        <li className="pl-4 border-l-2 border-secondary">
                          <h4 className="font-bold">Track B: Regulatory Frameworks for Growth</h4>
                          <p className="text-sm text-muted-foreground">Room: Serengeti Hall</p>
                        </li>
                        <li className="pl-4 border-l-2 border-gray-500">
                          <h4 className="font-bold">Track C: Workforce Development</h4>
                          <p className="text-sm text-muted-foreground">Room: Victoria Hall</p>
                        </li>
                      </ul>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">16:00 - 16:30</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Afternoon Break</h3>
                      <p className="text-muted-foreground">Final networking opportunity</p>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">16:30 - 17:30</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Closing Keynote: The Path Forward</h3>
                      <p className="text-muted-foreground mb-2">
                        Vision for the future of African aviation and action steps
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Presentation className="h-4 w-4 mr-1" />
                        <span>Distinguished industry leader</span>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <span className="font-bold">17:30 - 18:00</span>
                      </div>
                      <h3 className="title-font text-xl mb-1">Closing Ceremony</h3>
                      <p className="text-muted-foreground">
                        Summary of key takeaways and announcement of the 2026 summit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}

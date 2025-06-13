import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink } from "lucide-react"

export default function RegisterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="title-font text-4xl md:text-5xl lg:text-6xl mb-6">Secure Your Spot Today!</h1>
          <p className="text-xl max-w-3xl mx-auto">Join Industry Leaders at Africa Aviation Innovation Summit 2025</p>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="title-font text-3xl md:text-4xl mb-6 text-primary">Registration Information</h2>
                <p className="text-lg mb-8">
                  The Africa Aviation Innovation Summit brings together industry leaders, innovators, and stakeholders
                  to explore new frontiers in aviation across the African continent.
                </p>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-8">
                  <h3 className="title-font text-xl mb-4">Registration Packages</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Early Bird (Until July 31, 2025)</h4>
                        <p className="text-lg font-bold text-primary">$499</p>
                        <p className="text-sm text-muted-foreground">
                          Full access to all summit sessions, networking events, and gala dinner
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Standard Registration (August 1 - September 30, 2025)</h4>
                        <p className="text-lg font-bold text-primary">$699</p>
                        <p className="text-sm text-muted-foreground">
                          Full access to all summit sessions, networking events, and gala dinner
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Late Registration (October 1 - October 16, 2025)</h4>
                        <p className="text-lg font-bold text-primary">$899</p>
                        <p className="text-sm text-muted-foreground">
                          Full access to all summit sessions, networking events, and gala dinner
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-secondary/10 p-2 rounded-full mr-4">
                        <span className="text-secondary font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Group Discount (5+ Attendees)</h4>
                        <p className="text-lg font-bold text-secondary">15% Off</p>
                        <p className="text-sm text-muted-foreground">
                          Contact us at groups@africaaviationsummit.com for group registration
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="title-font text-xl mb-4">Why Attend?</h3>
                  <ul className="space-y-3">
                    {[
                      "Network with industry leaders and decision-makers",
                      "Gain insights on emerging trends and innovations",
                      "Explore new business opportunities and partnerships",
                      "Learn from case studies and success stories",
                      "Contribute to the growth of African aviation",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
                <h3 className="title-font text-2xl text-center mb-6 text-primary">Register Now</h3>

                <div className="text-center mb-8">
                  <div className="inline-block bg-primary/10 rounded-full p-4 mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Registration"
                      width={80}
                      height={80}
                      className="mx-auto"
                    />
                  </div>
                  <p className="text-lg mb-2">Complete your registration through our secure online form</p>
                  <p className="text-sm text-muted-foreground mb-6">Early bird pricing available until July 31, 2025</p>

                  <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <a
                      href="https://forms.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Proceed to Registration Form
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                  <h4 className="font-bold text-center mb-4">Registration Includes</h4>
                  <ul className="space-y-2">
                    {[
                      "Access to all summit sessions and workshops",
                      "Conference materials and resources",
                      "Networking opportunities with industry leaders",
                      "Breakfast, lunch, and refreshments on both days",
                      "Invitation to the gala dinner (October 17)",
                      "Certificate of participation",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="title-font text-2xl mb-4">Need Assistance?</h3>
              <p className="text-lg mb-6">
                Our team is here to help with any registration questions or special requirements
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild variant="outline">
                  <a href="mailto:register@africaaviationsummit.com">Email Registration Support</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="tel:+254123456789">Call: +254 123 456 789</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

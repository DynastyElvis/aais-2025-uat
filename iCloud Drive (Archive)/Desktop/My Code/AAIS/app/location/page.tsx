import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Plane, Car, Hotel, FileText, ExternalLink, Navigation } from "lucide-react"

export default function LocationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="title-font text-4xl md:text-5xl lg:text-6xl mb-6">Summit Venue & Travel Information</h1>
          <p className="text-xl max-w-3xl mx-auto">Nairobi, Kenya | 17th - 18th October 2025</p>
        </div>
      </section>

      {/* Venue Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="title-font text-3xl md:text-4xl mb-6 text-primary">The Venue</h2>
              <h3 className="title-font text-2xl mb-4">Nairobi International Convention Centre</h3>
              <p className="text-lg mb-6">
                The Nairobi International Convention Centre (NICC) is Kenya's premier conference facility, offering
                world-class amenities in the heart of Nairobi's business district.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p>Kenyatta Avenue, Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Navigation className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Distance from Airport</h4>
                    <p>20 minutes from Jomo Kenyatta International Airport (JKIA)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="title-font text-xl">Venue Highlights</h4>
                <ul className="space-y-2">
                  {[
                    "State-of-the-art conference facilities",
                    "Multiple breakout rooms for parallel sessions",
                    "High-speed WiFi throughout the venue",
                    "On-site catering services",
                    "Accessible facilities for all attendees",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Nairobi International Convention Centre - Exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[150px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Conference Hall"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-[150px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Networking Area"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="title-font text-3xl md:text-4xl text-center mb-12 text-primary">Travel Information</h2>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="title-font text-xl">
                  <div className="flex items-center">
                    <Plane className="h-5 w-5 mr-2" />
                    Airport Information
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 p-2">
                    <h4 className="font-bold">Jomo Kenyatta International Airport (JKIA)</h4>
                    <p>
                      JKIA is Kenya's largest airport and the main international gateway to Nairobi. It serves numerous
                      international airlines with direct connections to major cities worldwide.
                    </p>
                    <h5 className="font-semibold mt-4">Airlines serving JKIA:</h5>
                    <ul className="grid grid-cols-2 gap-2">
                      {[
                        "Kenya Airways",
                        "Ethiopian Airlines",
                        "Emirates",
                        "Qatar Airways",
                        "KLM",
                        "British Airways",
                        "Turkish Airlines",
                        "South African Airways",
                      ].map((airline, index) => (
                        <li key={index} className="flex items-center">
                          <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                          {airline}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4">
                      <a
                        href="https://www.kaa.go.ke/airports/nairobi-jomo-kenyatta-intl-airport/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        Visit Airport Website
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="title-font text-xl">
                  <div className="flex items-center">
                    <Car className="h-5 w-5 mr-2" />
                    Ground Transportation
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 p-2">
                    <h4 className="font-bold">Airport Transfers</h4>
                    <p>
                      We have arranged for complimentary shuttle services between partner hotels and the venue. For
                      airport transfers, the following options are available:
                    </p>

                    <div className="space-y-3 mt-4">
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <h5 className="font-semibold">Taxis</h5>
                        <p>
                          Licensed taxis are available outside the arrivals terminal. The fare to the city center is
                          approximately 2,000-2,500 KES (USD 15-20).
                        </p>
                      </div>

                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <h5 className="font-semibold">Ride-Sharing Services</h5>
                        <p>
                          Uber and Bolt operate in Nairobi and provide reliable transportation from the airport to the
                          city.
                        </p>
                      </div>

                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <h5 className="font-semibold">Airport Shuttle</h5>
                        <p>
                          Some hotels offer airport shuttle services. Please check with your hotel for availability and
                          booking information.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="title-font text-xl">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Visa Requirements
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 p-2">
                    <p>
                      Most visitors to Kenya require a visa. Kenya offers an e-visa service that allows you to apply
                      online before your trip.
                    </p>

                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm mt-4">
                      <h5 className="font-semibold">E-Visa Application</h5>
                      <p className="mb-2">
                        Apply for your Kenyan e-visa at least 7 days before your travel date through the official
                        government portal.
                      </p>
                      <a
                        href="http://evisa.go.ke/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        Kenya E-Visa Portal
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>

                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <h5 className="font-semibold">Visa on Arrival</h5>
                      <p>
                        Some nationalities can obtain a visa on arrival at Jomo Kenyatta International Airport. However,
                        we recommend applying online in advance to avoid delays.
                      </p>
                    </div>

                    <p className="mt-4">
                      For specific visa requirements based on your nationality, please consult the Kenyan embassy or
                      consulate in your country.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="title-font text-xl">
                  <div className="flex items-center">
                    <Hotel className="h-5 w-5 mr-2" />
                    Accommodation
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 p-2">
                    <p>
                      We have negotiated special rates with several hotels near the venue. When booking, mention the
                      "Africa Aviation Innovation Summit" to receive the discounted rate.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <h5 className="font-semibold">Nairobi Serena Hotel ★★★★★</h5>
                        <p className="text-sm mb-2">Distance to venue: 0.5 km</p>
                        <p className="text-sm mb-2">Rate: From $180 per night</p>
                        <a href="#" className="text-primary hover:underline text-sm flex items-center">
                          Book Now
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>

                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <h5 className="font-semibold">Hilton Nairobi ★★★★</h5>
                        <p className="text-sm mb-2">Distance to venue: 0.8 km</p>
                        <p className="text-sm mb-2">Rate: From $150 per night</p>
                        <a href="#" className="text-primary hover:underline text-sm flex items-center">
                          Book Now
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>

                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <h5 className="font-semibold">Fairmont The Norfolk ★★★★★</h5>
                        <p className="text-sm mb-2">Distance to venue: 1.2 km</p>
                        <p className="text-sm mb-2">Rate: From $200 per night</p>
                        <a href="#" className="text-primary hover:underline text-sm flex items-center">
                          Book Now
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>

                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <h5 className="font-semibold">Sarova Stanley ★★★★</h5>
                        <p className="text-sm mb-2">Distance to venue: 1.0 km</p>
                        <p className="text-sm mb-2">Rate: From $140 per night</p>
                        <a href="#" className="text-primary hover:underline text-sm flex items-center">
                          Book Now
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>

                    <p className="mt-4 text-sm">
                      Note: Hotel rates are subject to availability. We recommend booking early to secure your preferred
                      accommodation.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="title-font text-3xl md:text-4xl text-center mb-12 text-primary">Location Map</h2>

          <div className="max-w-5xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              {/* This would be a Google Maps embed in a real implementation */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-600 mb-4">Nairobi International Convention Centre</p>
                  <Button className="bg-primary hover:bg-primary/90">Get Directions</Button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg">Need help planning your trip? Contact our travel support team:</p>
              <p className="text-primary">travel@africaaviationsummit.com | +254 789 123 456</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/banter-logo-svg.svg" alt="Banter Logo" width={140} height={40} className="h-10 w-auto" />
        </div>
        <div>
          <Button className="bg-[#1861FF] hover:bg-[#0D4EE0] text-white font-medium px-6">Sign Up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24 flex flex-col md:flex-row items-center" id="waitlist">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">If you care, you banter.</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            A simple way to stay in touch with the people who matter most.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1861FF] focus:border-transparent"
                id="email-input"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
              <div className="hidden text-red-500 text-sm mt-1" id="email-error">
                Please enter a valid email address
              </div>
            </div>
            <Button
              className="bg-[#1861FF] hover:bg-[#0D4EE0] text-white font-medium px-6 py-3"
              onClick={() => {
                const emailInput = document.getElementById("email-input") as HTMLInputElement
                const emailError = document.getElementById("email-error")

                if (emailInput && emailError) {
                  if (emailInput.validity.valid) {
                    emailError.classList.add("hidden")
                    alert("Thank you for joining the waitlist!")
                    emailInput.value = ""
                  } else {
                    emailError.classList.remove("hidden")
                  }
                }
              }}
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative z-10 transform -rotate-6">
            <Image
              src="/images/app-mockup-1.png"
              alt="Banter App Screenshot"
              width={300}
              height={600}
              className="rounded-3xl shadow-xl"
            />
          </div>
          <div className="absolute top-10 right-0 z-20 transform rotate-6">
            <Image
              src="/images/app-mockup-2.png"
              alt="Banter App Screenshot"
              width={300}
              height={600}
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#1861FF] to-[#8A4BFF]"></div>

      {/* Section 1: Never Let Time Break Relationships */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ✨ Never let time, distance, or distractions break apart your closest relationships ✨
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1861FF] to-[#8A4BFF] mx-auto my-8"></div>
        </div>
      </section>

      {/* Section: Prompts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prompts that make starting a conversation feel natural — not forced
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                Banter sends thoughtful, shared prompts to both people in a chat — so conversations feel easy,
                intentional, and mutual. You choose how often to check in, and we'll handle the conversation flowing.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <Image
                  src="/images/conversation-prompt.png"
                  alt="Banter Conversation Example"
                  width={600}
                  height={500}
                  className="rounded-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: A Space Just for Who Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1861FF] to-[#8A4BFF] opacity-10 rounded-3xl"></div>
            <div className="relative p-8">
              <Image
                src="/images/app-mockup-1.png"
                alt="Banter App Screenshot"
                width={350}
                height={700}
                className="rounded-3xl shadow-xl mx-auto"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Your Inner Circle</h2>
            <p className="text-lg text-gray-700 mb-8">
              Talk to family and friends away from the noise of your other apps. Banter is free from spam and endless
              notifications. It's a quiet space for real connection with the people you care about.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1861FF] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">No group chats, just meaningful one-on-one conversations</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1861FF] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">AI prompts that both users see, creating shared conversation starters</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1861FF] rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Minimalist design focused on what matters: your conversations</p>
              </li>
            </ul>

            <Button className="mt-8 bg-[#1861FF] hover:bg-[#0D4EE0] text-white font-medium px-8 py-6 text-lg">
              Get Started <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1861FF] to-[#8A4BFF] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take care of your relationships?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join Banter today and start meaningful conversations with the people who matter most.
          </p>
          <Button
            className="bg-white text-[#1861FF] hover:bg-gray-100 font-medium px-8 py-6 text-lg"
            onClick={() => {
              document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Join the Waitlist <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-12"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src="/images/banter-logo-svg.svg"
                alt="Banter Logo"
                width={120}
                height={35}
                className="h-8 w-auto"
              />
              <p className="mt-2 text-gray-400">© 2025 Banter. All rights reserved.</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

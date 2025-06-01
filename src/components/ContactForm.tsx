"use client";


import { Button } from "@/components/ui/button";

export function ContactForm() {

  return (
    <form 
      action="https://formsubmit.co/info@winwithtech.com" 
      method="POST"
      className="space-y-6"
    >
      {/* FormSubmit.co configuration */}
      <input type="text" name="_honey" style={{ display: "none" }} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://winwithtech.com/thank-you" />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Company
        </label>
          <input
            type="text"
            name="company"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your company"
          />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="How can we help?"
          />
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700"
      >
        Send Message
      </Button>
    </form>
  );
}

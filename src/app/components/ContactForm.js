"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    await fetch('/api/contact', {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div>
    <h1 className="text-6xl font-bold mb-12">Contact.</h1>
    <h2 className="mb-12">Get in touch or shoot me an email directly on <span className="text-sky-400">rajath365@gmail.com</span></h2>
    <form onSubmit={onSubmit} className="flex flex-col max-w-2xl gap-9 ">
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={e => setName(e.target.value)} 
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-transparent text-base h-14"
        required
      />
      <input 
        type="email" 
        value={email} 
        placeholder="Email" 
        onChange={e => setEmail(e.target.value)} 
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-transparent text-base h-14"
        required 
      />
      <textarea 
        rows={4} 
        value={message} 
        placeholder="Message"
        onChange={e => setMessage(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-transparent text-base appearance-none resize-none"
        required
      />
      <button type="submit" className="rounded bg-sky-700 h-14 w-40">
        Send Message
      </button>
    </form>
    </div>
  )
}
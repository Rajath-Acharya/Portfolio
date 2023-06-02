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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={e => setName(e.target.value)} 
        required
      />
      <input 
        type="email" 
        value={email} 
        placeholder="Email" 
        onChange={e => setEmail(e.target.value)} 
        required 
      />
      <textarea 
        rows={4} 
        value={message} 
        placeholder="Message"
        onChange={e => setMessage(e.target.value)}
        required
      />
      <button type="submit">
        Send Message
      </button>
    </form>
  )
}
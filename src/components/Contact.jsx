import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submission:', form);
  };

  return (
    <section className="py-20 bg-white max-w-4xl mx-auto px-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-900">Inquiries</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Available for selected freelance contracts and collaborative academic projects.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">Name</label>
              <input 
                type="text" 
                required
                className="bg-transparent border-b border-gray-200 py-2 text-sm focus:outline-none focus:border-gray-900 transition-colors text-gray-900"
                onChange={e => setForm({...form, name: e.target.value})}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">Email Address</label>
              <input 
                type="email" 
                required
                className="bg-transparent border-b border-gray-200 py-2 text-sm focus:outline-none focus:border-gray-900 transition-colors text-gray-900"
                onChange={e => setForm({...form, email: e.target.value})}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">Project Brief</label>
            <textarea 
              rows="4"
              required
              className="bg-transparent border-b border-gray-200 py-2 text-sm resize-none focus:outline-none focus:border-gray-900 transition-colors text-gray-900"
              onChange={e => setForm({...form, message: e.target.value})}
            />
          </div>
          <button 
            type="submit" 
            className="inline-block bg-gray-900 text-white text-xs font-semibold tracking-widest uppercase px-8 py-3.5 hover:bg-gray-800 transition-colors duration-200"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
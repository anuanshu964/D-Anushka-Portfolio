import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate fast dispatch (ready for EmailJS, Formspree or custom API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={14} />
            <span>Get in Touch</span>
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            I'm always interested in learning, collaborating, building projects, and exploring new opportunities.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          {/* Left: Contact Info Cards */}
          <div className="contact-info-column">
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: '1.25rem' }}>
              Direct Contact Channels
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.65 }}>
              Feel free to reach out directly via email, phone, or LinkedIn. I am actively seeking internship opportunities and collaborative projects in AI/ML.
            </p>

            <div className="contact-cards-list">
              {/* Email Card */}
              <div className="glass-card contact-card">
                <div className="contact-card-icon">
                  <Mail size={22} />
                </div>
                <div className="contact-card-details">
                  <span className="contact-card-label">Email Address</span>
                  <a href={`mailto:${personal.email}`} className="contact-card-value">
                    {personal.email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="copy-btn"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="glass-card contact-card">
                <div className="contact-card-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-card-details">
                  <span className="contact-card-label">Phone / WhatsApp</span>
                  <a href={`tel:${personal.phone}`} className="contact-card-value">
                    {personal.phoneFormatted}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="copy-btn"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-card contact-card">
                <div className="contact-card-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-card-details">
                  <span className="contact-card-label">Location</span>
                  <span className="contact-card-value">
                    {personal.location}
                  </span>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="glass-card contact-card">
                <div className="contact-card-icon">
                  <Linkedin size={22} />
                </div>
                <div className="contact-card-details">
                  <span className="contact-card-label">LinkedIn</span>
                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card-value"
                  >
                    {personal.linkedinName}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Validated Contact Form */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
              Send a Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              Have a question, feedback, or an internship opportunity? Leave your note below.
            </p>

            {submitted ? (
              <div className="form-success-banner">
                <CheckCircle2 size={36} className="text-emerald" />
                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-heading)', marginTop: '0.5rem' }}>
                  Thank you for reaching out!
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                  Your message has been recorded. You can also contact me directly at <a href={`mailto:${personal.email}`} style={{ color: 'var(--accent-cyan)' }}>{personal.email}</a>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '1.25rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && (
                    <span className="error-message">
                      <AlertCircle size={13} />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && (
                    <span className="error-message">
                      <AlertCircle size={13} />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Internship Inquiry / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={errors.subject ? 'input-error' : ''}
                  />
                  {errors.subject && (
                    <span className="error-message">
                      <AlertCircle size={13} />
                      <span>{errors.subject}</span>
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={errors.message ? 'input-error' : ''}
                  />
                  {errors.message && (
                    <span className="error-message">
                      <AlertCircle size={13} />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary submit-btn"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Embedded Component CSS */}
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 2.5rem;
          align-items: stretch;
        }

        .contact-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-card {
          padding: 1.15rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 1.15rem;
          border-radius: var(--radius-md);
        }

        .contact-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--gradient-subtle);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .contact-card-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .contact-card-label {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-card-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          word-break: break-all;
        }

        .copy-btn {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .copy-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
        }

        .text-emerald {
          color: var(--accent-emerald);
        }

        .contact-form-card {
          padding: 2.5rem;
          border-radius: var(--radius-md);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-bottom: 1.25rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.85rem 1.1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.92rem;
          transition: border-color var(--transition-fast), background var(--transition-fast), box-shadow var(--transition-fast);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--accent-cyan);
          background: var(--bg-card);
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2);
          outline: none;
        }

        .form-group input.input-error,
        .form-group textarea.input-error {
          border-color: #ef4444;
        }

        .error-message {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: #ef4444;
          margin-top: 0.15rem;
        }

        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
          padding: 0.95rem;
        }

        .form-success-banner {
          padding: 2.5rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-md);
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-form-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;

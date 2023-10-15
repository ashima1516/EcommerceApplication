import React from 'react'

export const Contact = () => {
  return (
    <>
      <header className="bg-success text-white text-center py-3">
        <h1>Contact Us</h1>
    </header>
    <main className='container py-5'>
    <section className="contact-form">
            <h2>Get in Touch</h2>
            <form>
                <div className="form-group my-2">
                    <label for="name">Your Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="form-group  my-2">
                    <label for="email">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" required/>
                </div>
                <div className="form-group  my-2">
                    <label for="message">Message</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
                </div><br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
        <section className="contact-info">
            <h2>Contact Information</h2>
            <p>If you prefer to reach us through other means, here's our contact information:</p>
            <address>
                <strong>Shopify</strong><br/>
                123 Main Street<br/>
                City, State ZIP<br/><br/>
                Email: <a href="mailto:contact@example.com">contact@example.com</a><br/>
                Phone: +1 (123) 456-7890
            </address>
        </section>
    </main>
    <footer className="bg-success text-warning text-center py-3">
        <p>&copy; 2023 Shopify.com </p>
    </footer>
    
    </>
    )}
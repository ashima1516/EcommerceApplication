import React from 'react'

export const About = () => {
  return (
    
    <>
    <header className="bg-warning text-dark text-center py-3">
        <h1>About Us</h1>
    </header>
    <main className="container py-5">
        <section className="about-section">
            <h2 className='text-danger'>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget tincidunt ex. Proin eget feugiat justo. Nunc bibendum ligula nec urna ultrices, eget convallis ex bibendum
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error velit ab reprehenderit ullam maxime similique facilis fugit alias fuga, esse et aliquid ipsam dolores aspernatur tenetur. Cum, soluta animi!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nisi consectetur explicabo, rerum vero sit sapiente fuga optio qui doloribus consequuntur veritatis officiis?
            </p>
        </section>
        <section className="team-section">
            <h2 className='text-danger'>Our Team</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="text-center">
                        <img src="images/ceo.png" alt="Team Member 1" className="img-fluid rounded-circle"/>
                        <h3>John Doe</h3>
                        <p>CEO</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center">
                        <img src="images/cto.png" alt="Team Member 2" className="img-fluid rounded-circle"/>
                        <h3>Jane Smith</h3>
                        <p>COO</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center">
                        <img src="images/oops.png" alt="Team Member 3" className="img-fluid rounded-circle"/>
                        <h3>Mike Johnson</h3>
                        <p>CTO</p>
                    </div>
                </div>
             
            </div>
        </section>
        <section className="contact-section">
            <h2 className='text-success'>Contact Us</h2>
            <p>If you have any questions or inquiries, please feel free to reach out to us. We're here to help!</p>
            <div className="row">
                <div className="col-md-6">
                    <h3>Address</h3>
                    <p>123 Main Street<br/>City, State ZIP</p>
                </div>
                <div className="col-md-6">
                    <h3>Contact Information</h3>
                    <p>Email: <a href="mailto:contact@example.com">contact@example.com</a><br/>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
        </section>
    </main>
    <footer className="bg-warning text-dark text-center py-2">
        <p className='text-dark '>&copy; Visit again!</p>
    </footer>


    
    
    </>
  )
}

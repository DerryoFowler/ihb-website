import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-black text-gold py-24 text-center">
        <h1 className="text-5xl font-bold">From Dirt to Dreams with Integrity</h1>
        <p className="mt-4 text-xl">Welcome to Integrity Home Builders LLC</p>
        <Button className="mt-6 bg-gold text-black hover:bg-white hover:text-gold">Schedule a Consultation</Button>
      </section>

      {/* About Us */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Integrity Home Builders LLC, led by CEO Derryo Fowler, brings over two decades of hands-on
          experience in residential construction, renovations, and remodeling. From humble beginnings
          to major builds across Alabama, we stand on craftsmanship, transparency, and unmatched
          professionalism. Your dream home isn’t just a project — it’s our mission.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-2xl font-semibold mt-4">New Construction</h3>
              <p className="mt-2">From blueprint to reality — we build homes that last generations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-2xl font-semibold mt-4">Renovations & Remodels</h3>
              <p className="mt-2">Breathe new life into outdated spaces with modern, customized upgrades.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-2xl font-semibold mt-4">Sunroom Additions</h3>
              <p className="mt-2">Let the light in. Add warmth, space, and style to your home.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          We’ve proudly transformed properties in Birmingham, Pinson, and beyond.
          From full builds to refined renovations, our work speaks for itself.
        </p>
        <Button variant="outline">Explore Our Gallery</Button>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
        <blockquote className="text-xl italic max-w-2xl mx-auto">
          “Integrity Home Builders turned our outdated deck into a stunning 16x20 sunroom.
          The results were beyond what we imagined. Highly recommend!” — The Pettways
        </blockquote>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-4">Let’s turn your vision into value. Book your consultation today.</p>
        <p className="text-md mb-1">📞 205-835-4426</p>
        <p className="text-md mb-1">📧 integrityhomebuildersllc@yahoo.com</p>
        <Button className="mt-4 bg-gold text-black hover:bg-black hover:text-gold">Get in Touch</Button>
      </section>

      <footer className="bg-black text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Integrity Home Builders LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

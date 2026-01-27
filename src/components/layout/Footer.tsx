import { Link } from 'react-router-dom';
import { PawPrint, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <PawPrint className="h-5 w-5" />
              </div>
              PawCare
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium pet grooming and boarding services. Your pet's happiness is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground transition-colors">Our Services</Link></li>
              <li><Link to="/booking" className="hover:text-foreground transition-colors">Book Appointment</Link></li>
              <li><Link to="/login" className="hover:text-foreground transition-colors">Customer Login</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Pet Grooming</li>
              <li>Day Boarding</li>
              <li>Overnight Stay</li>
              <li>Pick-up Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                hello@pawcare.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>123 Pet Street, Pawville, PC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PawCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

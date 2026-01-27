import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { 
  PawPrint, 
  Scissors, 
  Home, 
  Calendar, 
  Star, 
  Shield, 
  Clock,
  Heart,
  Sparkles,
  Truck
} from 'lucide-react';

export default function Index() {
  const services = [
    {
      icon: Scissors,
      title: 'Professional Grooming',
      description: 'Full-service grooming including bath, haircut, nail trim, and ear cleaning.',
      price: 'From $25'
    },
    {
      icon: Home,
      title: 'Boarding Services',
      description: 'Safe and comfortable overnight stays with 24/7 care and playtime.',
      price: 'From $45/night'
    },
    {
      icon: Truck,
      title: 'Pick-up Service',
      description: 'Convenient pick-up and drop-off service right at your doorstep.',
      price: 'From $15'
    },
  ];

  const features = [
    { icon: Star, title: 'Loyalty Rewards', description: 'Earn points with every visit and unlock exclusive discounts' },
    { icon: Shield, title: 'Certified Groomers', description: 'Trained professionals who truly love animals' },
    { icon: Clock, title: 'Flexible Scheduling', description: 'Book appointments that fit your busy schedule' },
    { icon: Heart, title: 'Personalized Care', description: 'Individual attention tailored to your pet\'s needs' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/50 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        </div>
        
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Premium Pet Care Services
            </div>
            
            <h1 className="mb-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Where Every Pet Gets{' '}
              <span className="gradient-text">Royal Treatment</span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Professional grooming, cozy boarding, and love-filled care for your furry family members. 
              Book your appointment today and give your pet the pampering they deserve.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/booking">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/services">
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative paw prints */}
        <div className="absolute bottom-10 left-10 opacity-10">
          <PawPrint className="h-24 w-24 text-primary" />
        </div>
        <div className="absolute top-20 right-20 opacity-10">
          <PawPrint className="h-16 w-16 text-accent" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From grooming to boarding, we offer comprehensive care tailored to your pet's unique needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold">{service.title}</h3>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <p className="font-semibold text-primary">{service.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">Why Choose PawCare?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We're not just a pet service — we're a family that cares about your furry friends as much as you do.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-xl bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-20 text-primary-foreground md:py-28">
        <div className="container text-center">
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Ready to Pamper Your Pet?
          </h2>
          <p className="mx-auto mb-8 max-w-xl opacity-90">
            Join our family of happy pet parents and experience the PawCare difference today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              variant="secondary" 
              size="xl" 
              className="shadow-lg"
              asChild
            >
              <Link to="/register">
                Create Account
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

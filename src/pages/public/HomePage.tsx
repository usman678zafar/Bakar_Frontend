import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import {
  Truck,
  Clock,
  Star,
  ArrowRight,
  ChefHat,
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Sparkles,
  Shield,
  Heart,
} from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Truck className="text-primary" size={32} />,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery within 6km of our location',
    },
    {
      icon: <ChefHat className="text-primary" size={32} />,
      title: 'Expert Chefs',
      description: 'Prepared by experienced chefs with authentic recipes',
    },
    {
      icon: <Shield className="text-primary" size={32} />,
      title: 'Quality Guaranteed',
      description: '100% satisfaction guaranteed with fresh ingredients',
    },
  ];

  const stats = [
    { value: '5000+', label: 'Happy Customers', icon: <Users size={20} /> },
    { value: '50+', label: 'Menu Items', icon: <Heart size={20} /> },
    { value: '4.9', label: 'Average Rating', icon: <Star size={20} /> },
    { value: '7', label: 'Years of Excellence', icon: <Award size={20} /> },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-gradient-to-br from-primary/90 to-primary-600/90 text-white py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 107, 53, 0.85), rgba(255, 90, 43, 0.85)), url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main Heading */} *
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Authentic Cuisine
              <br />
              <span className="text-primary-100">Delivered Fresh Daily</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-primary-50 max-w-2xl mx-auto leading-relaxed">
              Enjoy bold, aromatic dishes made from the finest ingredients.
              Order now for fast delivery or easy pickup!
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/menu/daily')}
                className="bg-white text-primary hover:bg-gray-100 border-white font-bold group"
              >
                Browse Daily Menu
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/menu/weekly')}
                className="border-white text-white hover:bg-white hover:text-primary font-bold"
              >
                View Subscriptions
              </Button>
            </div>
            {/* Trust Indicators */}
            <div className="mt-10 flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} />
                <span>No Minimum Order</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <CheckCircle size={16} />
                <span>Fresh Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} />
                <span>Free Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F9F9F9"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="font-heading text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-text mb-4">
              Why Choose Bakar's
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the perfect blend of tradition and convenience with our
              premium food delivery service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-text">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-text mb-4">
              Explore Our Menu
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From traditional favorites to modern delights, discover dishes
              that satisfy every craving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Daily Menu Card */}
            <Card
              className="relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => navigate('/menu/daily')}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                }}
              >
                <div className="h-full flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-heading text-2xl font-bold mb-2">
                      Daily Menu
                    </h3>
                    <p className="text-sm opacity-90">Fresh meals every day</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Enjoy our rotating selection of daily specials, prepared fresh
                  each morning.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Order Now</span>
                  <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </Card>

            {/* Weekly Subscription Card */}
            <Card
              className="relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => navigate('/menu/weekly')}
            >
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                SAVE 35%
              </div>
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                }}
              >
                <div className="h-full flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-heading text-2xl font-bold mb-2">
                      Weekly Plans
                    </h3>
                    <p className="text-sm opacity-90">Subscribe & save</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Save time and money with our flexible weekly meal
                  subscriptions.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  <span>View Plans</span>
                  <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </Card>

            {/* Catering Card */}
            <Card
              className="relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => navigate('/catering')}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                }}
              >
                <div className="h-full flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-heading text-2xl font-bold mb-2">
                      Catering
                    </h3>
                    <p className="text-sm opacity-90">For special events</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Make your events memorable with our premium catering services.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Get Quote</span>
                  <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container-custom">
          <Card className="bg-gradient-to-r from-primary to-primary-600 text-white text-center border-none shadow-2xl">
            <div className="py-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready to Order?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Start your culinary journey with Bakar's today and experience
                the difference
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/register')}
                className="bg-white text-primary hover:bg-gray-100 border-white font-bold"
              >
                Sign Up Now
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold text-text mb-2">Location</h4>
              <p className="text-gray-600 text-sm">
                Sydney Metropolitan Area
                <br />
                6km Delivery Radius
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold text-text mb-2">Call Us</h4>
              <p className="text-gray-600 text-sm">
                +61 XXX XXX XXX
                <br />7 Days a Week
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold text-text mb-2">Hours</h4>
              <p className="text-gray-600 text-sm">
                Mon - Sun
                <br />
                11:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

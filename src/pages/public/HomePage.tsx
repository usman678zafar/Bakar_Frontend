import React, { useEffect, useState, useCallback } from 'react';
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
  CheckCircle,
  Image as ImageIcon,
  Heart,
  Utensils,
} from 'lucide-react';
import { motion } from 'framer-motion';

// Leaflet imports
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * Replace these environment-like constants if you prefer reading from .env
 * Business location provided by you:
 */
const BUSINESS_LATITUDE = -33.855853;
const BUSINESS_LONGITUDE = 150.994854;
const BUSINESS_ADDRESS = '504-508 Woodville Rd, Guildford, NSW 2161';
const DELIVERY_RADIUS_METERS = 6000; // 6 km

// Fix default leaflet icon urls (avoids missing marker icon in many builds)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

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
    icon: <CheckCircle className="text-primary" size={32} />,
    title: 'Quality Guaranteed',
    description: '100% satisfaction guaranteed with fresh ingredients',
  },
];

const stats = [
  { value: '5000+', label: 'Happy Customers', icon: <Users size={20} /> },
  { value: '50+', label: 'Menu Items', icon: <ImageIcon size={20} /> },
  { value: '4.9', label: 'Average Rating', icon: <Star size={20} /> },
  { value: '7', label: 'Years of Excellence', icon: <Award size={20} /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, ease: 'easeOut', duration: 0.55 },
  }),
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-primary/90 to-primary-600/90 text-white py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 107, 53, 0.85), rgba(255, 90, 43, 0.85)), url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container-custom relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Authentic Cuisine
                <br />
                <span className="text-white opacity-95">
                  Delivered Fresh Daily
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white opacity-90 max-w-2xl mx-auto leading-relaxed">
                Enjoy bold, aromatic dishes prepared from high-quality
                ingredients and delivered to your door.
              </p>

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
                  className="bg-white text-primary hover:bg-gray-100 border-white font-bold group"
                >
                  View Subscriptions
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </div>

              <div className="mt-10 flex items-center justify-center space-x-6 text-sm text-white">
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
          </motion.div>
        </div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center group"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={idx}
              >
                <div className="flex justify-center mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="font-heading text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-700 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="order-2 lg:order-1">
                <div className="mb-3">
                  <span className="inline-flex items-center space-x-2 text-primary font-semibold">
                    <Heart size={20} className="fill-current" />
                    <span className="uppercase tracking-wider text-sm">
                      Discover
                    </span>
                  </span>
                </div>

                <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Our <span className="text-primary">Story</span>
                </h2>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Nestled in the heart of Guildford, Bakar's Food & Catering
                    began as a humble family dream in 2017. What started as a
                    small kitchen serving authentic South Asian and Middle
                    Eastern fusion has blossomed into Sydney's beloved
                    destination for flavorful, soul-warming meals.
                  </p>

                  <p>
                    Our founder, Chef Bakar, brought with him three generations
                    of culinary secrets passed down through his family. Growing
                    up in a household where food was the language of love, he
                    learned that the perfect meal isn't just about the
                    ingredients—it's about the passion, tradition, and care that
                    goes into every dish.
                  </p>

                  <p>
                    Today, we proudly serve over 5,000 happy customers across
                    Sydney, maintaining the same commitment to quality that we
                    started with. Every morning, our team of expert chefs
                    arrives before dawn to prepare fresh ingredients, hand-roll
                    our breads, and slow-cook our signature curries and grills
                    to perfection.
                  </p>

                  <p className="font-semibold text-gray-900">
                    From our family to yours, we don't just deliver food—we
                    deliver an experience steeped in tradition, crafted with
                    expertise, and served with love.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                      <Utensils className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">100% Halal</p>
                      <p className="text-sm text-gray-600">
                        Certified & Authentic
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                      <ChefHat className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Family Recipes</p>
                      <p className="text-sm text-gray-600">3 Generations</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/menu/daily')}
                    className="group"
                  >
                    Explore Our Menu
                    <ArrowRight
                      size={20}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => navigate('/catering')}
                  >
                    Catering Services
                  </Button>
                </div>
              </div>

              {/* Image Side */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                      alt="Bakar's signature dishes beautifully plated"
                      className="w-full h-[600px] object-cover"
                    />
                    {/* Overlay gradient for better text contrast if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Floating accent card */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-[200px]">
                    <div className="flex items-center space-x-3 mb-3">
                      <Award className="text-primary" size={32} />
                      <div>
                        <p className="font-heading text-3xl font-bold text-primary">
                          7+
                        </p>
                        <p className="text-xs text-gray-600 font-semibold">
                          Years of Excellence
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      5000+ Happy Customers
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-50 rounded-full opacity-20 blur-3xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-secondary-50 rounded-full opacity-20 blur-3xl"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bakar's
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the perfect blend of tradition and convenience with our
              premium food delivery service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="text-center group"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={idx}
              >
                <Card className="text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Explore Our Menu
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From traditional favorites to modern delights, discover dishes
              that satisfy every craving.
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

      {/* Delivery Area Map */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="text-center mb-10">
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
                Delivery Area
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We deliver across the Sydney Metropolitan Area. Enter your
                address at checkout to confirm availability.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="rounded-lg overflow-hidden shadow-md"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {/* react-leaflet map */}
              <MapContainer
                center={[BUSINESS_LATITUDE, BUSINESS_LONGITUDE]}
                zoom={12}
                scrollWheelZoom={false}
                className="w-full h-96"
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[BUSINESS_LATITUDE, BUSINESS_LONGITUDE]}>
                  <Popup>
                    <div className="text-sm">
                      <div className="font-medium">
                        Bakar's - Primary Kitchen
                      </div>
                      <div className="mt-1 text-xs">{BUSINESS_ADDRESS}</div>
                    </div>
                  </Popup>
                </Marker>

                {/* Circle showing delivery radius */}
                <Circle
                  center={[BUSINESS_LATITUDE, BUSINESS_LONGITUDE]}
                  radius={DELIVERY_RADIUS_METERS}
                  pathOptions={{ color: '#f97316', fillOpacity: 0.08 }}
                />
              </MapContainer>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <h4 className="font-semibold text-2xl mb-4 text-gray-900">
                Delivery Details
              </h4>

              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3 items-start">
                  <MapPin
                    className="text-primary flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <div className="font-medium text-gray-900">Coverage</div>
                    <div className="text-sm text-gray-600">
                      Primary kitchen at {BUSINESS_ADDRESS}. Deliveries within a{' '}
                      {DELIVERY_RADIUS_METERS / 1000} km radius.
                    </div>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <Clock
                    className="text-primary flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <div className="font-medium text-gray-900">
                      Delivery Hours
                    </div>
                    <div className="text-sm text-gray-600">
                      11:00 AM — 9:00 PM, daily. Same-day delivery available for
                      early orders.
                    </div>
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <Truck
                    className="text-primary flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <div className="font-medium text-gray-900">Standards</div>
                    <div className="text-sm text-gray-600">
                      Temperature-controlled packaging, professional drivers,
                      and contactless delivery options.
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex gap-4">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => navigate('/checkout')}
                  className="border-primary text-primary font-semibold hover:bg-primary hover:text-white"
                >
                  Check Delivery
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => navigate('/contact')}
                  className="border-gray-300 text-gray-700 font-semibold hover:bg-gray-100"
                >
                  Contact Support
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strengthened CTA - FIXED SECTION */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary text-white">
        <div className="container-custom">
          <div className="text-center">
            <div className="py-8 max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
                Make Your Next Meal Unforgettable
              </h2>
              <p className="text-lg mb-6 text-white/90">
                From everyday meals to large-scale events, Bakar's delivers
                consistent quality and exceptional service. Let us design the
                menu — you enjoy the occasion.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="solid"
                  size="lg"
                  onClick={() => navigate('/menu/daily')}
                  className="bg-white text-primary font-bold hover:bg-gray-100"
                >
                  Order Now
                </Button>
                <Button
                  variant="solid"
                  size="lg"
                  onClick={() => navigate('/catering')}
                  className="bg-white text-primary font-bold hover:bg-gray-100"
                >
                  Book Catering
                </Button>
              </div>

              <div className="mt-6 text-sm text-white/90">
                <div>Prefer to speak with our events team?</div>
                <div className="mt-2 font-medium text-white">
                  Call: +61 XXX XXX XXX — or email{' '}
                  <a
                    href="mailto:info@bakars.com"
                    className="underline hover:text-white/80"
                  >
                    info@bakars.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
              <p className="text-gray-600 text-sm">
                {BUSINESS_ADDRESS}
                <br />6 km Delivery Radius
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600 text-sm">
                +61 XXX XXX XXX
                <br />7 Days a Week
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
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

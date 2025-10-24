import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import { Truck, Clock, Star, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-600 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Authentic Indian Cuisine
              <br />
              <span className="text-primary-100">Delivered Fresh Daily</span>
            </h1>
            <p className="text-xl mb-8 text-primary-50">
              Experience the rich flavors of India with our freshly prepared
              meals. Order now for delivery or pickup!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/menu/daily')}
                className="bg-white text-primary hover:bg-gray-100"
              >
                Browse Daily Menu
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/menu/weekly')}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                View Subscriptions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-primary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">
                Free Delivery
              </h3>
              <p className="text-gray-600">Within 6km of Guildford</p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">
                Fresh Daily
              </h3>
              <p className="text-gray-600">Prepared fresh every day</p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">100% satisfaction guaranteed</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <Card className="bg-gradient-to-r from-primary to-primary-600 text-white text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Ready to Order?
            </h2>
            <p className="text-xl mb-6">
              Start your culinary journey with Bakar's today
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/register')}
              className="bg-white text-primary hover:bg-gray-100 border-white"
            >
              Sign Up Now
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

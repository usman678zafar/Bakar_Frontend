import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Card from '@components/common/Card';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import { useToast } from '@components/common/Toast';
import { contactAPI } from '@api';

const ContactPage: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await contactAPI.sendMessage(formData);
      showToast(
        'Message sent successfully! We will contact you soon.',
        'success'
      );
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Failed to send contact message', error);
      showToast(
        'Failed to send message. Please try again later.',
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold text-text mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch with Bakar's Food & Catering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card padding="lg">
            <h2 className="font-heading text-2xl font-bold mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                label="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              <Input
                type="email"
                label="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />

              <Input
                type="tel"
                label="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />

              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="lg"
                isLoading={isSubmitting}
              >
                <Send size={20} className="mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card padding="lg">
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-text mb-2">Address</h3>
                  <p className="text-gray-600">
                    Guildford 2161
                    <br />
                    Sydney, Australia
                  </p>
                </div>
              </div>
            </Card>

            <Card padding="lg">
              <div className="flex items-start space-x-4">
                <Phone className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-text mb-2">Phone</h3>
                  <a
                    href="tel:+61XXXXXXXXX"
                    className="text-primary hover:underline"
                  >
                    +61 XXX XXX XXX
                  </a>
                </div>
              </div>
            </Card>

            <Card padding="lg">
              <div className="flex items-start space-x-4">
                <Mail className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-text mb-2">Email</h3>
                  <a
                    href="mailto:info@bakarsfood.com.au"
                    className="text-primary hover:underline"
                  >
                    info@bakarsfood.com.au
                  </a>
                </div>
              </div>
            </Card>

            <Card
              padding="lg"
              className="bg-gradient-to-br from-primary to-primary-600 text-white"
            >
              <h3 className="font-heading text-xl font-bold mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Sunday:</span>
                  <span className="font-semibold">11:00 AM - 9:00 PM</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

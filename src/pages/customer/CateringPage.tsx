import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '@hooks/useMenu';
import { useCartStore } from '@store/cartStore';
import MenuItemCard from '@components/menu/MenuItemCard';
import FilterBar from '@components/menu/FilterBar';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Input from '@components/common/Input';
import { Calendar, Users, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@components/common/Toast';
import { formatCurrency } from '@utils/formatters';

interface CateringPackage {
  id: string;
  name: string;
  price_per_head: number;
  description: string;
  rules: {
    rice: number;
    gravy: number;
    bbq?: number;
    dessert?: number;
  };
}

const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    price_per_head: 25,
    description: 'Perfect for casual gatherings',
    rules: { rice: 1, gravy: 1 },
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price_per_head: 35,
    description: 'Ideal for special occasions',
    rules: { rice: 1, gravy: 2, bbq: 1 },
  },
  {
    id: 'diamond',
    name: 'Diamond Package',
    price_per_head: 50,
    description: 'Ultimate luxury experience',
    rules: { rice: 2, gravy: 2, bbq: 2, dessert: 1 },
  },
];

const CateringPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const {
    cateringMenuItems,
    categories,
    activeFilters,
    isLoading,
    setFilters,
    clearFilters,
    getFilteredItems,
  } = useMenu('special_catering');

  const { setOrderType } = useCartStore();

  const [selectedPackage, setSelectedPackage] =
    useState<CateringPackage | null>(null);
  const [eventDetails, setEventDetails] = useState({
    event_date: '',
    event_time: '',
    head_count: 10,
    event_type: 'Birthday Party',
    venue_address: '',
    special_requirements: '',
    contact_name: '',
    contact_phone: '',
    contact_email: '',
  });
  const [selectedItems, setSelectedItems] = useState<{
    [category: string]: string[];
  }>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setOrderType('special_catering');
  }, []);

  const filteredItems = getFilteredItems('special_catering');

  const handlePackageSelect = (pkg: CateringPackage) => {
    setSelectedPackage(pkg);
    setSelectedItems({});
    showToast(`${pkg.name} selected`, 'success');
  };

  const handleItemSelect = (category: string, itemId: string) => {
    if (!selectedPackage) {
      showToast('Please select a package first', 'warning');
      return;
    }

    const categoryKey = category.toLowerCase();
    const maxItems =
      selectedPackage.rules[
        categoryKey as keyof typeof selectedPackage.rules
      ] || 0;

    if (maxItems === 0) {
      showToast(`${category} not included in this package`, 'warning');
      return;
    }

    const currentItems = selectedItems[category] || [];

    if (currentItems.includes(itemId)) {
      setSelectedItems({
        ...selectedItems,
        [category]: currentItems.filter((id) => id !== itemId),
      });
    } else {
      if (currentItems.length >= maxItems) {
        showToast(`Maximum ${maxItems} ${category} items allowed`, 'warning');
        return;
      }
      setSelectedItems({
        ...selectedItems,
        [category]: [...currentItems, itemId],
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!eventDetails.event_date)
      newErrors.event_date = 'Event date is required';
    if (!eventDetails.event_time)
      newErrors.event_time = 'Event time is required';
    if (eventDetails.head_count < 10)
      newErrors.head_count = 'Minimum 10 guests required';
    if (!eventDetails.venue_address.trim())
      newErrors.venue_address = 'Venue address is required';
    if (!eventDetails.contact_name.trim())
      newErrors.contact_name = 'Contact name is required';
    if (!eventDetails.contact_phone.trim())
      newErrors.contact_phone = 'Contact phone is required';
    if (!eventDetails.contact_email.trim())
      newErrors.contact_email = 'Contact email is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToCheckout = () => {
    if (!selectedPackage) {
      showToast('Please select a catering package', 'error');
      return;
    }

    if (!validateForm()) {
      showToast('Please fill in all required event details', 'error');
      return;
    }

    // Check if all required items are selected
    const packageRules = selectedPackage.rules;
    for (const [category, count] of Object.entries(packageRules)) {
      const selectedCount = (
        selectedItems[category.charAt(0).toUpperCase() + category.slice(1)] ||
        []
      ).length;
      if (selectedCount < count) {
        showToast(`Please select ${count} ${category} items`, 'error');
        return;
      }
    }

    navigate('/checkout', {
      state: {
        cateringDetails: {
          package: selectedPackage,
          eventDetails,
          selectedItems,
        },
      },
    });
  };

  const totalAmount = selectedPackage
    ? selectedPackage.price_per_head * eventDetails.head_count
    : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" message="Loading catering menu..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold text-text mb-4">
            Special Catering Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perfect for weddings, corporate events, parties, and special
            occasions.
            <br />
            <span className="font-semibold text-primary">
              Minimum 10 people
            </span>
          </p>
        </div>

        {/* Package Selection */}
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-text mb-6">
            Choose Your Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATERING_PACKAGES.map((pkg) => (
              <Card
                key={pkg.id}
                className={`cursor-pointer transition-all ${
                  selectedPackage?.id === pkg.id
                    ? 'ring-4 ring-primary border-primary shadow-2xl scale-105'
                    : 'hover:shadow-xl'
                }`}
                onClick={() => handlePackageSelect(pkg)}
                padding="lg"
              >
                {selectedPackage?.id === pkg.id && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="text-primary" size={32} />
                  </div>
                )}

                <h3 className="font-heading text-2xl font-bold text-text mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>

                <div className="bg-primary-50 rounded-lg p-4 mb-4">
                  <span className="font-heading text-4xl font-bold text-primary">
                    {formatCurrency(pkg.price_per_head)}
                  </span>
                  <span className="text-gray-600 ml-2">per person</span>
                </div>

                <ul className="space-y-2 text-sm">
                  {pkg.rules.rice && <li>✓ {pkg.rules.rice} Rice dish</li>}
                  {pkg.rules.gravy && (
                    <li>✓ {pkg.rules.gravy} Gravy dish(es)</li>
                  )}
                  {pkg.rules.bbq && <li>✓ {pkg.rules.bbq} BBQ item(s)</li>}
                  {pkg.rules.dessert && <li>✓ {pkg.rules.dessert} Dessert</li>}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details Form */}
          <div className="lg:col-span-1">
            <Card padding="lg" className="sticky top-24">
              <h2 className="font-heading text-2xl font-bold text-text mb-6">
                Event Details
              </h2>

              <div className="space-y-4">
                <Input
                  type="text"
                  label="Contact Name"
                  value={eventDetails.contact_name}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      contact_name: e.target.value,
                    })
                  }
                  error={errors.contact_name}
                  required
                />

                <Input
                  type="tel"
                  label="Contact Phone"
                  value={eventDetails.contact_phone}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      contact_phone: e.target.value,
                    })
                  }
                  error={errors.contact_phone}
                  required
                />

                <Input
                  type="email"
                  label="Contact Email"
                  value={eventDetails.contact_email}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      contact_email: e.target.value,
                    })
                  }
                  error={errors.contact_email}
                  required
                />

                <Input
                  type="date"
                  label="Event Date"
                  value={eventDetails.event_date}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      event_date: e.target.value,
                    })
                  }
                  error={errors.event_date}
                  min={
                    new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
                      .toISOString()
                      .split('T')[0]
                  }
                  required
                />

                <Input
                  type="time"
                  label="Event Time"
                  value={eventDetails.event_time}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      event_time: e.target.value,
                    })
                  }
                  error={errors.event_time}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Number of Guests <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() =>
                        setEventDetails({
                          ...eventDetails,
                          head_count: Math.max(10, eventDetails.head_count - 5),
                        })
                      }
                      className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-primary"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-semibold text-2xl">
                      {eventDetails.head_count}
                    </span>
                    <button
                      onClick={() =>
                        setEventDetails({
                          ...eventDetails,
                          head_count: eventDetails.head_count + 5,
                        })
                      }
                      className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-primary"
                    >
                      +
                    </button>
                  </div>
                </div>

                <Input
                  type="text"
                  label="Venue Address"
                  value={eventDetails.venue_address}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      venue_address: e.target.value,
                    })
                  }
                  error={errors.venue_address}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Special Requirements (Optional)
                  </label>
                  <textarea
                    value={eventDetails.special_requirements}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        special_requirements: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    rows={4}
                  />
                </div>
              </div>

              {selectedPackage && (
                <div className="mt-6 pt-6 border-t-2 border-gray-200">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Package:</span>
                      <span className="font-medium">
                        {selectedPackage.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Per Head:</span>
                      <span className="font-medium">
                        {formatCurrency(selectedPackage.price_per_head)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests:</span>
                      <span className="font-medium">
                        {eventDetails.head_count}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-text">
                          Estimated Total:
                        </span>
                        <span className="font-heading text-3xl font-bold text-primary">
                          {formatCurrency(totalAmount)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    fullWidth
                    size="lg"
                    onClick={handleProceedToCheckout}
                  >
                    Request Quote
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Menu Selection */}
          <div className="lg:col-span-2 space-y-6">
            {selectedPackage ? (
              <>
                <FilterBar
                  categories={categories}
                  activeFilters={activeFilters}
                  onFilterChange={setFilters}
                  onClearFilters={clearFilters}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredItems.map((item) => (
                    <MenuItemCard
                      key={item._id}
                      item={item}
                      showQuickAdd={false}
                    />
                  ))}
                </div>
              </>
            ) : (
              <Card padding="lg">
                <div className="text-center py-16">
                  <Users className="mx-auto h-20 w-20 text-gray-300 mb-6" />
                  <h3 className="font-heading text-2xl font-bold text-text mb-2">
                    Select a Package to Continue
                  </h3>
                  <p className="text-gray-600">
                    Choose from our catering packages to start selecting your
                    menu
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateringPage;

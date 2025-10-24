import React, { useState, useEffect } from 'react';
import { useAuth } from '@hooks/useAuth';
import { useAddressStore } from '@store/addressStore';
import { useOrderStore } from '@store/orderStore';
import { useToast } from '@components/common/Toast';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Modal from '@components/common/Modal';
import {
  User,
  MapPin,
  Package,
  Settings,
  Bell,
  CreditCard,
  Edit2,
  Trash2,
  Plus,
  Check,
  X,
  Mail,
  Phone,
  Calendar,
} from 'lucide-react';
import { formatCurrency, formatDate } from '@utils/formatters';

const ProfilePage: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const {
    addresses,
    fetchAddresses,
    addAddress,
    deleteAddress,
    setDefaultAddress,
  } = useAddressStore();
  const { orderHistory, fetchOrderHistory } = useOrderStore();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<
    'profile' | 'addresses' | 'orders'
  >('profile');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Profile form state
  const [profileForm, setProfileForm] = useState({
    full_name: user?.full_name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  // Address form state
  const [addressForm, setAddressForm] = useState({
    label: '',
    street: '',
    suburb: '',
    postcode: '',
    state: 'NSW',
    delivery_instructions: '',
  });

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        await Promise.all([fetchAddresses(), fetchOrderHistory()]);
      } catch (error) {
        showToast('Failed to load profile data', 'error');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile(profileForm);
      showToast('Profile updated successfully', 'success');
      setIsEditingProfile(false);
    } catch (error) {
      showToast('Failed to update profile', 'error');
    }
  };

  const handleAddAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addAddress(addressForm);
      showToast('Address added successfully', 'success');
      setIsAddingAddress(false);
      setAddressForm({
        label: '',
        street: '',
        suburb: '',
        postcode: '',
        state: 'NSW',
        delivery_instructions: '',
      });
    } catch (error) {
      showToast('Failed to add address', 'error');
    }
  };

  const handleDeleteAddress = async (addressId: string) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      try {
        await deleteAddress(addressId);
        showToast('Address deleted successfully', 'success');
      } catch (error) {
        showToast('Failed to delete address', 'error');
      }
    }
  };

  const handleSetDefaultAddress = async (addressId: string) => {
    try {
      await setDefaultAddress(addressId);
      showToast('Default address updated', 'success');
    } catch (error) {
      showToast('Failed to update default address', 'error');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" message="Loading profile..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-heading text-4xl font-bold text-text mb-2">
            My Profile
          </h1>
          <p className="text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card padding="md">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                  {user?.full_name?.charAt(0).toUpperCase()}
                </div>
                <h3 className="font-semibold text-text text-lg">
                  {user?.full_name}
                </h3>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <User size={20} />
                  <span className="font-medium">Personal Info</span>
                </button>

                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'addresses'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <MapPin size={20} />
                  <span className="font-medium">Addresses</span>
                </button>

                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'orders'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Package size={20} />
                  <span className="font-medium">Order History</span>
                </button>
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <Card padding="lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-2xl font-bold text-text">
                    Personal Information
                  </h2>
                  {!isEditingProfile && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditingProfile(true)}
                    >
                      <Edit2 size={16} className="mr-2" />
                      Edit
                    </Button>
                  )}
                </div>

                {isEditingProfile ? (
                  <form onSubmit={handleProfileUpdate} className="space-y-6">
                    <Input
                      type="text"
                      label="Full Name"
                      value={profileForm.full_name}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          full_name: e.target.value,
                        })
                      }
                      leftIcon={<User size={20} />}
                      required
                    />

                    <Input
                      type="email"
                      label="Email Address"
                      value={profileForm.email}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          email: e.target.value,
                        })
                      }
                      leftIcon={<Mail size={20} />}
                      required
                    />

                    <Input
                      type="tel"
                      label="Phone Number"
                      value={profileForm.phone}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          phone: e.target.value,
                        })
                      }
                      leftIcon={<Phone size={20} />}
                      required
                    />

                    <div className="flex space-x-3">
                      <Button type="submit" variant="primary">
                        <Check size={16} className="mr-2" />
                        Save Changes
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsEditingProfile(false);
                          setProfileForm({
                            full_name: user?.full_name || '',
                            email: user?.email || '',
                            phone: user?.phone || '',
                          });
                        }}
                      >
                        <X size={16} className="mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
                      <User className="text-gray-400" size={24} />
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-semibold text-text">
                          {user?.full_name}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
                      <Mail className="text-gray-400" size={24} />
                      <div>
                        <p className="text-sm text-gray-500">Email Address</p>
                        <p className="font-semibold text-text">{user?.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
                      <Phone className="text-gray-400" size={24} />
                      <div>
                        <p className="text-sm text-gray-500">Phone Number</p>
                        <p className="font-semibold text-text">{user?.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 py-4">
                      <Calendar className="text-gray-400" size={24} />
                      <div>
                        <p className="text-sm text-gray-500">Member Since</p>
                        <p className="font-semibold text-text">
                          {formatDate(user?.created_at || '')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="space-y-6">
                <Card padding="lg">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-2xl font-bold text-text">
                      Saved Addresses
                    </h2>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setIsAddingAddress(true)}
                    >
                      <Plus size={16} className="mr-2" />
                      Add Address
                    </Button>
                  </div>

                  {addresses.length === 0 ? (
                    <div className="text-center py-12">
                      <MapPin className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                      <p className="text-gray-600 mb-4">
                        No saved addresses yet
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsAddingAddress(true)}
                      >
                        Add Your First Address
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {addresses.map((address) => (
                        <div
                          key={address._id}
                          className={`border-2 rounded-lg p-4 transition-all ${
                            address.is_default
                              ? 'border-primary bg-primary-50'
                              : 'border-gray-200 hover:border-primary'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold text-text mb-1">
                                {address.label}
                              </h3>
                              {address.is_default && (
                                <span className="inline-block px-2 py-1 bg-primary text-white text-xs rounded-full">
                                  Default
                                </span>
                              )}
                            </div>
                            <button
                              onClick={() => handleDeleteAddress(address._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>

                          <p className="text-sm text-gray-700 mb-3">
                            {address.street}
                            <br />
                            {address.suburb}, {address.state} {address.postcode}
                          </p>

                          {!address.is_default && (
                            <Button
                              variant="outline"
                              size="sm"
                              fullWidth
                              onClick={() =>
                                handleSetDefaultAddress(address._id)
                              }
                            >
                              Set as Default
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-6">
                  Order History
                </h2>

                {orderHistory.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                    <p className="text-gray-600 mb-4">No orders yet</p>
                    <Button
                      variant="primary"
                      onClick={() => (window.location.href = '/menu/daily')}
                    >
                      Start Ordering
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orderHistory.map((order) => (
                      <div
                        key={order._id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="font-semibold text-text">
                              Order #{order._id.slice(-8)}
                            </p>
                            <p className="text-sm text-gray-500">
                              {formatDate(order.created_at)}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              order.status === 'delivered'
                                ? 'bg-green-100 text-green-800'
                                : order.status === 'cancelled'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {order.status.toUpperCase().replace('_', ' ')}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-sm mb-3">
                          <p className="text-gray-600">
                            {order.items.length} item(s)
                          </p>
                          <p className="font-semibold text-text">
                            {formatCurrency(order.total)}
                          </p>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          fullWidth
                          onClick={() =>
                            (window.location.href = `/orders/${order._id}`)
                          }
                        >
                          View Details
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Add Address Modal */}
      <Modal
        isOpen={isAddingAddress}
        onClose={() => setIsAddingAddress(false)}
        title="Add New Address"
      >
        <form onSubmit={handleAddAddress} className="space-y-4">
          <Input
            type="text"
            label="Label (e.g., Home, Work)"
            value={addressForm.label}
            onChange={(e) =>
              setAddressForm({ ...addressForm, label: e.target.value })
            }
            required
          />

          <Input
            type="text"
            label="Street Address"
            value={addressForm.street}
            onChange={(e) =>
              setAddressForm({ ...addressForm, street: e.target.value })
            }
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              label="Suburb"
              value={addressForm.suburb}
              onChange={(e) =>
                setAddressForm({ ...addressForm, suburb: e.target.value })
              }
              required
            />

            <Input
              type="text"
              label="Postcode"
              value={addressForm.postcode}
              onChange={(e) =>
                setAddressForm({ ...addressForm, postcode: e.target.value })
              }
              maxLength={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              State
            </label>
            <select
              value={addressForm.state}
              onChange={(e) =>
                setAddressForm({ ...addressForm, state: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="NSW">NSW</option>
              <option value="VIC">VIC</option>
              <option value="QLD">QLD</option>
              <option value="SA">SA</option>
              <option value="WA">WA</option>
              <option value="TAS">TAS</option>
              <option value="ACT">ACT</option>
              <option value="NT">NT</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Delivery Instructions (Optional)
            </label>
            <textarea
              value={addressForm.delivery_instructions}
              onChange={(e) =>
                setAddressForm({
                  ...addressForm,
                  delivery_instructions: e.target.value,
                })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              rows={3}
            />
          </div>

          <div className="flex space-x-3">
            <Button type="submit" variant="primary" fullWidth>
              Add Address
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsAddingAddress(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ProfilePage;

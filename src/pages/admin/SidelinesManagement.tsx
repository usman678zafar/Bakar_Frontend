import React, { useEffect, useState } from 'react';
import { useAdminStore } from '@store/adminStore';
import { useToast } from '@components/common/Toast';
import { SidelinesList } from '@components/admin/sidelines/SidelinesList';
import { AddSideline } from '@components/admin/sidelines/AddSideline';
import { EditSideline } from '@components/admin/sidelines/EditSideline';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import { Plus, Search } from 'lucide-react';
import { Sideline } from '@models/menu.types';
import AdminSidebar from '@components/admin/AdminSidebar';

const SidelinesManagement: React.FC = () => {
  const { showToast } = useToast();
  const { managedSidelines, fetchManagedSidelines, deleteSideline, isLoading } =
    useAdminStore();

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingSideline, setEditingSideline] = useState<Sideline | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadSidelines();
  }, []);

  const loadSidelines = async () => {
    try {
      await fetchManagedSidelines();
    } catch (error) {
      showToast('Failed to load sidelines', 'error');
    }
  };

  const handleDelete = async (sidelineId: string) => {
    if (
      !window.confirm(
        'Are you sure you want to delete this sideline? This action cannot be undone.'
      )
    ) {
      return;
    }

    try {
      await deleteSideline(sidelineId);
      showToast('Sideline deleted successfully', 'success');
    } catch (error) {
      showToast('Failed to delete sideline', 'error');
    }
  };

  const handleEdit = (sideline: Sideline) => {
    setEditingSideline(sideline);
  };

  const handleCloseEdit = () => {
    setEditingSideline(null);
    loadSidelines();
  };

  const handleCloseAdd = () => {
    setShowAddModal(false);
    loadSidelines();
  };

  // Filter sidelines based on search
  const filteredSidelines = managedSidelines.filter((sideline) =>
    sideline.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading && managedSidelines.length === 0) {
    return (
      <div className="min-h-screen bg-[#F9F9F9]">
        <AdminSidebar />
        <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center py-8 pr-4 sm:pr-6 lg:pr-8 pl-4 sm:pl-24 md:pl-32 lg:pl-72">
          <LoadingSpinner size="lg" message="Loading sidelines..." />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <AdminSidebar />
      <div className="py-8 pr-4 sm:pr-6 lg:pr-8 pl-4 sm:pl-24 md:pl-32 lg:pl-72 transition-[padding-left] duration-300">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-heading text-4xl font-bold text-text mb-2">
                Sidelines Management
              </h1>
              <p className="text-gray-600">
                Manage add-ons and side items for orders
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => setShowAddModal(true)}
            >
              <Plus size={20} className="mr-2" />
              Add Sideline
            </Button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search sidelines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Sidelines List */}
          <SidelinesList
            sidelines={filteredSidelines}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isLoading={isLoading}
          />

          {/* Add Modal */}
          <Modal
            isOpen={showAddModal}
            onClose={() => setShowAddModal(false)}
            title="Add New Sideline"
            size="lg"
          >
            <AddSideline
              onSuccess={handleCloseAdd}
              onCancel={() => setShowAddModal(false)}
            />
          </Modal>

          {/* Edit Modal */}
          <Modal
            isOpen={!!editingSideline}
            onClose={() => setEditingSideline(null)}
            title="Edit Sideline"
            size="lg"
          >
            {editingSideline && (
              <EditSideline
                sideline={editingSideline}
                onSuccess={handleCloseEdit}
                onCancel={() => setEditingSideline(null)}
              />
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SidelinesManagement;

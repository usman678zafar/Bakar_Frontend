import React from 'react';
import { Sideline } from '@types/menu.types';
import { formatCurrency } from '@utils/formatters';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';

interface SidelinesListProps {
  sidelines: Sideline[];
  onEdit: (sideline: Sideline) => void;
  onDelete: (sidelineId: string) => void;
  isLoading: boolean;
}

export const SidelinesList: React.FC<SidelinesListProps> = ({
  sidelines,
  onEdit,
  onDelete,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <Card padding="lg">
        <LoadingSpinner message="Loading sidelines..." />
      </Card>
    );
  }

  if (sidelines.length === 0) {
    return (
      <Card padding="lg">
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No sidelines found</p>
          <p className="text-sm text-gray-400">
            Click "Add Sideline" to create your first add-on item
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {sidelines.map((sideline) => (
        <Card key={sideline._id} padding="none" className="overflow-hidden">
          {/* Image */}
          <div className="relative h-40 bg-gray-100">
            {sideline.image_url ? (
              <img
                src={sideline.image_url}
                alt={sideline.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 text-3xl">🍱</span>
              </div>
            )}

            {/* Availability Badge */}
            <div className="absolute top-3 right-3">
              {sideline.is_available ? (
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                  <CheckCircle size={14} />
                  <span>Available</span>
                </div>
              ) : (
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                  <XCircle size={14} />
                  <span>Unavailable</span>
                </div>
              )}
            </div>

            {/* Sort Order Badge */}
            {sideline.sort_order !== undefined && (
              <div className="absolute top-3 left-3 bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                #{sideline.sort_order}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Name */}
            <h3 className="font-heading text-lg font-bold text-text mb-2 line-clamp-1">
              {sideline.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[40px]">
              {sideline.description || 'No description available'}
            </p>

            {/* Price */}
            <div className="mb-4">
              <span className="font-heading text-2xl font-bold text-primary">
                {formatCurrency(sideline.price)}
              </span>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(sideline)}
                className="flex-1"
              >
                <Edit2 size={16} className="mr-1" />
                Edit
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDelete(sideline._id)}
                className="text-red-600 hover:bg-red-50"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SidelinesList;

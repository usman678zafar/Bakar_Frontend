import React from 'react';
import { MenuFilters } from '@types/menu.types';
import { Filter, X, Leaf } from 'lucide-react';

interface CategoryObject {
  id?: string;
  name: string;
  display_name?: string;
  description?: string;
  image_url?: string;
  is_active?: boolean;
  sort_order?: number;
}

interface FilterBarProps {
  categories: (string | CategoryObject)[]; // ✅ Accept both strings and objects
  activeFilters: MenuFilters;
  onFilterChange: (filters: Partial<MenuFilters>) => void;
  onClearFilters: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  activeFilters,
  onFilterChange,
  onClearFilters,
}) => {
  const hasActiveFilters =
    activeFilters.category ||
    activeFilters.is_vegetarian !== undefined ||
    activeFilters.is_vegan !== undefined;

  // ✅ Helper to get category name (works for both strings and objects)
  const getCategoryName = (category: string | CategoryObject): string => {
    if (typeof category === 'string') {
      return category;
    }
    return category.display_name || category.name;
  };

  // ✅ Helper to get category value (for filtering)
  const getCategoryValue = (category: string | CategoryObject): string => {
    if (typeof category === 'string') {
      return category;
    }
    return category.name;
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter size={20} className="text-primary" />
          <h3 className="font-semibold text-text">Filters</h3>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary transition-colors"
          >
            <X size={16} />
            <span>Clear All</span>
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Category filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onFilterChange({ category: undefined })}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !activeFilters.category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category, index) => {
              const categoryName = getCategoryName(category);
              const categoryValue = getCategoryValue(category);

              return (
                <button
                  key={index}
                  onClick={() => onFilterChange({ category: categoryValue })}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilters.category === categoryValue
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {categoryName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dietary preferences */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dietary Preferences
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() =>
                onFilterChange({
                  is_vegetarian: activeFilters.is_vegetarian ? undefined : true,
                })
              }
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilters.is_vegetarian
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Leaf size={16} />
              <span>Vegetarian</span>
            </button>

            <button
              onClick={() =>
                onFilterChange({
                  is_vegan: activeFilters.is_vegan ? undefined : true,
                })
              }
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilters.is_vegan
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Leaf size={16} />
              <span>Vegan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

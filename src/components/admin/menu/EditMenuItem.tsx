import React, { useState, useEffect } from 'react';
import { useAdminStore } from '@store/adminStore';
import { useToast } from '@components/common/Toast';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import { Upload, X, Save } from 'lucide-react';
import { MenuItem } from '@models/menu.types';

interface EditMenuItemProps {
  item: MenuItem;
  onSuccess: () => void;
  onCancel: () => void;
}

export const EditMenuItem: React.FC<EditMenuItemProps> = ({
  item,
  onSuccess,
  onCancel,
}) => {
  const {
    updateMenuItem,
    managedCategories,
    fetchManagedCategories,
    isUpdating,
  } = useAdminStore();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: item.name,
    category: item.category,
    price: String(item.price),
    description: item.description || '',
    is_available: item.is_available,
    is_available_for_daily: item.is_available_for_daily,
    is_available_for_weekly: item.is_available_for_weekly,
    is_available_for_catering: item.is_available_for_catering,
    max_boxes_per_menu: item.max_boxes_per_menu || 2,
    allergens: item.allergens?.join(', ') || '',
    spice_level: item.spice_level || '',
    is_vegetarian: item.is_vegetarian || false,
    is_halal: item.is_halal !== false,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(
    item.image_url || ''
  );
  const [removeImage, setRemoveImage] = useState(false);

  useEffect(() => {
    fetchManagedCategories();
  }, []);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file', 'error');
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setRemoveImage(false);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview('');
    setRemoveImage(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      // Append only changed fields
      if (formData.name !== item.name)
        formDataToSend.append('name', formData.name);
      if (formData.category !== item.category)
        formDataToSend.append('category', formData.category);
      if (Number(formData.price) !== item.price)
        formDataToSend.append('price', formData.price);
      if (formData.description !== item.description)
        formDataToSend.append('description', formData.description);
      if (formData.is_available !== item.is_available)
        formDataToSend.append('is_available', String(formData.is_available));
      if (formData.is_available_for_daily !== item.is_available_for_daily)
        formDataToSend.append(
          'is_available_for_daily',
          String(formData.is_available_for_daily)
        );
      if (formData.is_available_for_weekly !== item.is_available_for_weekly)
        formDataToSend.append(
          'is_available_for_weekly',
          String(formData.is_available_for_weekly)
        );
      if (formData.is_available_for_catering !== item.is_available_for_catering)
        formDataToSend.append(
          'is_available_for_catering',
          String(formData.is_available_for_catering)
        );
      if (formData.max_boxes_per_menu !== item.max_boxes_per_menu)
        formDataToSend.append(
          'max_boxes_per_menu',
          String(formData.max_boxes_per_menu)
        );

      const allergensArray = formData.allergens
        .split(',')
        .map((a) => a.trim())
        .filter(Boolean);
      if (
        JSON.stringify(allergensArray) !== JSON.stringify(item.allergens || [])
      ) {
        formDataToSend.append('allergens', JSON.stringify(allergensArray));
      }

      if (formData.spice_level !== (item.spice_level || ''))
        formDataToSend.append('spice_level', formData.spice_level);
      if (formData.is_vegetarian !== item.is_vegetarian)
        formDataToSend.append('is_vegetarian', String(formData.is_vegetarian));
      if (formData.is_halal !== item.is_halal)
        formDataToSend.append('is_halal', String(formData.is_halal));

      // Append image if changed
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      } else if (removeImage) {
        formDataToSend.append('remove_image', 'true');
      }

      await updateMenuItem(item._id, formDataToSend);
      showToast('Menu item updated successfully', 'success');
      onSuccess();
    } catch (error) {
      showToast('Failed to update menu item', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Item Image
        </label>

        {imagePreview ? (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 shadow-lg"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
            <Upload size={32} className="text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">
              Click to upload new image
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageSelect}
            />
          </label>
        )}
      </div>

      {/* Name */}
      <Input
        type="text"
        label="Item Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Butter Chicken"
        required
      />

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Category <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        >
          <option value="">Select category</option>
          {managedCategories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.display_name}
            </option>
          ))}
        </select>
      </div>

      {/* Price */}
      <Input
        type="number"
        step="0.01"
        label="Price (AUD)"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        placeholder="15.99"
        required
      />

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          rows={4}
          placeholder="Creamy butter chicken with aromatic spices..."
        />
      </div>

      {/* Availability Status */}
      <div className="space-y-3">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_available}
            onChange={(e) =>
              setFormData({ ...formData, is_available: e.target.checked })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700 font-medium">
            Item is Available
          </span>
        </label>
      </div>

      {/* Availability For Order Types */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-text">Available For:</p>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_available_for_daily}
            onChange={(e) =>
              setFormData({
                ...formData,
                is_available_for_daily: e.target.checked,
              })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Daily Menu</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_available_for_weekly}
            onChange={(e) =>
              setFormData({
                ...formData,
                is_available_for_weekly: e.target.checked,
              })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Meals Subscription</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_available_for_catering}
            onChange={(e) =>
              setFormData({
                ...formData,
                is_available_for_catering: e.target.checked,
              })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Special Catering</span>
        </label>
      </div>

      {/* Max Boxes Per Menu (for weekly) */}
      {formData.is_available_for_weekly && (
        <Input
          type="number"
          label="Max Boxes Per Meal Plan"
          value={String(formData.max_boxes_per_menu)}
          onChange={(e) =>
            setFormData({
              ...formData,
              max_boxes_per_menu: parseInt(e.target.value) || 2,
            })
          }
          min="1"
          max="10"
        />
      )}

      {/* Allergens */}
      <Input
        type="text"
        label="Allergens (comma separated)"
        value={formData.allergens}
        onChange={(e) =>
          setFormData({ ...formData, allergens: e.target.value })
        }
        placeholder="dairy, nuts, gluten"
      />

      {/* Spice Level */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Spice Level
        </label>
        <select
          value={formData.spice_level}
          onChange={(e) =>
            setFormData({ ...formData, spice_level: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">None</option>
          <option value="mild">Mild</option>
          <option value="medium">Medium</option>
          <option value="hot">Hot</option>
        </select>
      </div>

      {/* Dietary Options */}
      <div className="space-y-3">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_vegetarian}
            onChange={(e) =>
              setFormData({ ...formData, is_vegetarian: e.target.checked })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Vegetarian</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_halal}
            onChange={(e) =>
              setFormData({ ...formData, is_halal: e.target.checked })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Halal</span>
        </label>
      </div>

      {/* Actions */}
      <div className="flex space-x-3 pt-4 border-t border-gray-200">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="flex-1"
          disabled={isUpdating}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          className="flex-1"
          isLoading={isUpdating}
          disabled={isUpdating}
        >
          <Save size={20} className="mr-2" />
          {isUpdating ? 'Updating...' : 'Update Menu Item'}
        </Button>
      </div>
    </form>
  );
};

export default EditMenuItem;

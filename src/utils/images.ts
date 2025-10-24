/**
 * Image utility functions
 */

// Default placeholder images
const PLACEHOLDER_FOOD = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNiIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4=';

/**
 * Get the full image URL, handling various formats
 */
export const getImageUrl = (imageUrl?: string): string => {
  if (!imageUrl) {
    return PLACEHOLDER_FOOD;
  }

  // If it's already a full URL (http/https), return as is
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }

  // If it's a data URL, return as is
  if (imageUrl.startsWith('data:')) {
    return imageUrl;
  }

  // If it starts with /, assume it's a relative path
  if (imageUrl.startsWith('/')) {
    // Check if we have a CDN URL in environment
    const cdnUrl = import.meta.env.VITE_CDN_URL || import.meta.env.VITE_R2_PUBLIC_URL;
    if (cdnUrl) {
      return `${cdnUrl}${imageUrl}`;
    }
    // Otherwise use the API base URL
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    return `${apiUrl}${imageUrl}`;
  }

  // For any other format, try to construct a full URL
  const cdnUrl = import.meta.env.VITE_CDN_URL || import.meta.env.VITE_R2_PUBLIC_URL;
  if (cdnUrl) {
    return `${cdnUrl}/${imageUrl}`;
  }

  // Fallback to placeholder
  return PLACEHOLDER_FOOD;
};

/**
 * Handle image loading errors
 */
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
): void => {
  const target = event.currentTarget;
  // Prevent infinite loop by checking if we're already showing placeholder
  if (target.src !== PLACEHOLDER_FOOD) {
    target.src = PLACEHOLDER_FOOD;
  }
};

/**
 * Get placeholder image
 */
export const getPlaceholderImage = (): string => {
  return PLACEHOLDER_FOOD;
};

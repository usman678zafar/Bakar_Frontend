/**
 * Image utility functions with comprehensive error handling and fallbacks
 */

// Get environment variables
const CDN_URL = import.meta.env.VITE_CDN_URL || import.meta.env.VITE_R2_PUBLIC_URL || '';
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

// High-quality food image fallbacks from Unsplash
const FALLBACK_IMAGES = {
  food: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&auto=format',
  curry: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&auto=format',
  rice: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=400&h=300&fit=crop&auto=format',
  bbq: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format',
  default: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&auto=format',
};

// Placeholder for loading state
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Loading...';

// SVG placeholder as base64 (last resort fallback)
const SVG_PLACEHOLDER = `data:image/svg+xml;base64,${btoa(`
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="#f3f4f6"/>
  <g>
    <rect x="150" y="100" width="100" height="80" fill="none" stroke="#9ca3af" stroke-width="3" rx="10"/>
    <circle cx="175" cy="130" r="8" fill="#9ca3af"/>
    <circle cx="225" cy="130" r="8" fill="#9ca3af"/>
    <path d="M175 155 Q200 170 225 155" stroke="#9ca3af" stroke-width="3" fill="none"/>
  </g>
  <text x="50%" y="220" font-family="Arial" font-size="16" fill="#9ca3af" text-anchor="middle">No Image Available</text>
</svg>
`)}`;

/**
 * Get the full image URL with comprehensive fallback handling
 * @param imageUrl - The image URL from the API (can be relative or absolute)
 * @param category - Optional category for better fallback selection
 * @returns Absolute image URL or fallback
 */
export const getImageUrl = (imageUrl?: string | null, category?: string): string => {
  // Debug logging in development
  if (import.meta.env.DEV) {
    console.log('🖼️ [getImageUrl] Processing:', {
      input: imageUrl,
      category,
      CDN_URL,
      API_URL,
    });
  }

  // Case 1: No image URL provided - return category-specific or default fallback
  if (!imageUrl || imageUrl.trim() === '' || imageUrl === 'null' || imageUrl === 'undefined') {
    const fallback = getCategoryFallback(category);
    if (import.meta.env.DEV) {
      console.log('⚠️ [getImageUrl] No URL provided, using fallback:', fallback);
    }
    return fallback;
  }

  // Case 2: Already a full URL (http/https)
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    if (import.meta.env.DEV) {
      console.log('✅ [getImageUrl] Full URL detected:', imageUrl);
    }
    return imageUrl;
  }

  // Case 3: Data URL (base64)
  if (imageUrl.startsWith('data:')) {
    if (import.meta.env.DEV) {
      console.log('✅ [getImageUrl] Data URL detected');
    }
    return imageUrl;
  }

  // Case 4: Construct full URL from relative path
  let fullUrl = '';
  
  // Clean the image URL (remove any leading/trailing whitespace)
  const cleanImageUrl = imageUrl.trim();
  
  // If we have a CDN URL, use it
  if (CDN_URL) {
    // Remove leading slash from image URL if present
    const imagePath = cleanImageUrl.startsWith('/') 
      ? cleanImageUrl.substring(1) 
      : cleanImageUrl;
    
    // Ensure CDN URL doesn't end with slash
    const baseUrl = CDN_URL.endsWith('/') 
      ? CDN_URL.slice(0, -1) 
      : CDN_URL;
    
    fullUrl = `${baseUrl}/${imagePath}`;
  } 
  // Otherwise, use API URL as fallback
  else {
    // If the path doesn't start with /, assume it needs /static/ prefix
    if (!cleanImageUrl.startsWith('/')) {
      fullUrl = `${API_URL}/static/${cleanImageUrl}`;
    } else {
      fullUrl = `${API_URL}${cleanImageUrl}`;
    }
  }

  if (import.meta.env.DEV) {
    console.log('✅ [getImageUrl] Constructed URL:', fullUrl);
  }

  return fullUrl;
};

/**
 * Get category-specific fallback image
 * @param category - The food category
 * @returns Appropriate fallback image URL
 */
const getCategoryFallback = (category?: string): string => {
  if (!category) return FALLBACK_IMAGES.default;
  
  const lowerCategory = category.toLowerCase();
  
  if (lowerCategory.includes('rice')) return FALLBACK_IMAGES.rice;
  if (lowerCategory.includes('curry')) return FALLBACK_IMAGES.curry;
  if (lowerCategory.includes('bbq') || lowerCategory.includes('grill')) return FALLBACK_IMAGES.bbq;
  
  return FALLBACK_IMAGES.default;
};

/**
 * Handle image loading errors with multi-level fallback
 * @param event - The error event from img element
 * @param category - Optional category for better fallback
 */
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  category?: string
): void => {
  const target = event.currentTarget;
  const currentSrc = target.src;
  
  console.error('❌ [handleImageError] Image failed to load:', currentSrc);
  
  // Track which fallback level we're at using data attribute
  const fallbackLevel = parseInt(target.dataset.fallbackLevel || '0', 10);
  
  if (fallbackLevel === 0) {
    // Level 1: Try category-specific fallback
    const categoryFallback = getCategoryFallback(category);
    console.log('🔄 [handleImageError] Trying category fallback:', categoryFallback);
    target.src = categoryFallback;
    target.dataset.fallbackLevel = '1';
  } else if (fallbackLevel === 1) {
    // Level 2: Try generic food fallback
    console.log('🔄 [handleImageError] Trying generic fallback');
    target.src = FALLBACK_IMAGES.default;
    target.dataset.fallbackLevel = '2';
  } else if (fallbackLevel === 2) {
    // Level 3: Try placeholder service
    console.log('🔄 [handleImageError] Trying placeholder service');
    target.src = PLACEHOLDER_IMAGE;
    target.dataset.fallbackLevel = '3';
  } else {
    // Level 4: Final fallback to SVG
    console.log('🔄 [handleImageError] Using SVG fallback');
    target.src = SVG_PLACEHOLDER;
    target.onerror = null; // Prevent infinite loop
  }
};

/**
 * Preload an image to check if it's valid
 * @param src - Image source URL
 * @returns Promise that resolves if image loads successfully
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      console.log('✅ [preloadImage] Successfully loaded:', src);
      resolve();
    };
    
    img.onerror = () => {
      console.error('❌ [preloadImage] Failed to load:', src);
      reject(new Error(`Failed to load image: ${src}`));
    };
    
    img.src = src;
  });
};

/**
 * Check if image URL is valid format
 * @param url - URL to check
 * @returns Boolean indicating if URL appears to be valid image
 */
export const isValidImageUrl = (url?: string | null): boolean => {
  if (!url || url.trim() === '') return false;
  
  // Check for common image extensions
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.ico'];
  const hasImageExtension = imageExtensions.some(ext => 
    url.toLowerCase().includes(ext)
  );
  
  // Check for data URLs
  const isDataUrl = url.startsWith('data:image/');
  
  // Check for known image services
  const isImageService = 
    url.includes('unsplash.com') || 
    url.includes('placeholder.com') || 
    url.includes('cloudflarestorage.com') ||
    url.includes('r2.dev') ||
    url.includes('imagekit.io') ||
    url.includes('cloudinary.com');
  
  return hasImageExtension || isDataUrl || isImageService;
};

/**
 * Get optimized image URL with transformations (for Cloudflare Images)
 * @param imageUrl - Original image URL
 * @param options - Transformation options
 * @returns Optimized image URL
 */
export const getOptimizedImageUrl = (
  imageUrl: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    fit?: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';
    format?: 'auto' | 'webp' | 'avif' | 'json';
  } = {}
): string => {
  // Get the base URL
  const baseUrl = getImageUrl(imageUrl);
  
  // If it's not a Cloudflare URL, return as-is
  if (!baseUrl.includes('cloudflarestorage.com') && !baseUrl.includes('imagedelivery.net')) {
    return baseUrl;
  }
  
  // Build transformation parameters for Cloudflare Images
  const params: string[] = [];
  
  if (options.width) params.push(`w=${options.width}`);
  if (options.height) params.push(`h=${options.height}`);
  if (options.quality) params.push(`q=${options.quality}`);
  if (options.fit) params.push(`fit=${options.fit}`);
  if (options.format) params.push(`f=${options.format}`);
  
  // If no transformations, return original
  if (params.length === 0) {
    return baseUrl;
  }
  
  // Check if URL already has query parameters
  const separator = baseUrl.includes('?') ? '&' : '?';
  
  return `${baseUrl}${separator}${params.join('&')}`;
};

/**
 * Get placeholder image for loading states
 * @returns Placeholder image URL
 */
export const getPlaceholderImage = (): string => {
  return PLACEHOLDER_IMAGE;
};

/**
 * Get error fallback image
 * @param category - Optional category for specific fallback
 * @returns Error fallback image URL
 */
export const getErrorFallbackImage = (category?: string): string => {
  return getCategoryFallback(category);
};

/**
 * Generate image srcset for responsive images
 * @param imageUrl - Base image URL
 * @param sizes - Array of widths to generate
 * @returns srcset string for img element
 */
export const generateSrcSet = (
  imageUrl: string,
  sizes: number[] = [320, 640, 960, 1280, 1920]
): string => {
  const baseUrl = getImageUrl(imageUrl);
  
  // If it's not a Cloudflare URL, return empty (no srcset)
  if (!baseUrl.includes('cloudflarestorage.com') && !baseUrl.includes('imagedelivery.net')) {
    return '';
  }
  
  return sizes
    .map(size => {
      const optimizedUrl = getOptimizedImageUrl(baseUrl, { width: size });
      return `${optimizedUrl} ${size}w`;
    })
    .join(', ');
};

// Export default for convenience
export default {
  getImageUrl,
  handleImageError,
  preloadImage,
  isValidImageUrl,
  getOptimizedImageUrl,
  getPlaceholderImage,
  getErrorFallbackImage,
  generateSrcSet,
};

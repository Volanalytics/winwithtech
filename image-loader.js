export default function imageLoader({ src, width, quality }) {
  // For absolute URLs (e.g., https://example.com/image.jpg)
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, prepend the basePath
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://volanalytics.github.io/winwithtech' 
    : '';
  
  return `${baseUrl}${src}${width ? `?w=${width}` : ''}${quality ? `&q=${quality}` : ''}`;
}

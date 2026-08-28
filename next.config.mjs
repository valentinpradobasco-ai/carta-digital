/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Se usa <img> nativo en las tarjetas de producto (ver components/ProductCard.tsx)
    // en lugar de next/image, porque esta plantilla se reutiliza para distintos
    // restaurantes y cada uno sube fotos desde dominios distintos (Instagram,
    // Drive, su propio hosting, etc). Si en algún proyecto puntual se quiere
    // aprovechar la optimización de next/image, alcanza con declarar acá los
    // dominios permitidos, por ejemplo:
    // remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;

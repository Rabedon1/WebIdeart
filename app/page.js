export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-red to-black text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern/Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in relative z-10">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight drop-shadow-lg">
              Soluciones Visuales que <br />
              <span>Impulsan tu Marca</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto font-medium drop-shadow-md bg-black/20 p-4 rounded-xl backdrop-blur-sm">
              Rotulación, señalética, sellos y artículos promocionales con servicio a domicilio.
              Calidad profesional que destaca tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593996097226?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Ideart.%20¿Podrían%20enviarme%20su%20catálogo?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl inline-block border-2 border-white"
              >
                Solicita tu Cotización Gratis
              </a>
              <a
                href="#servicios"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-red transition-all duration-300 inline-block backdrop-blur-sm"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones profesionales para cada necesidad de tu negocio
            </p>
          </div>

          {/* Categoría 1: Identidad Visual */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Identidad Visual y Gran Formato</h3>
            <p className="text-gray-600 mb-8">Alta visibilidad y presencia de marca para tu negocio</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Gigantografías y Pancartas"
                description="Impresión de alta resolución sobre lona mesh o banner. Ideal para vallas, fachadas y eventos promocionales."
                link="/gigantografias-quito"
                imagePath="/images/productos/gigantografias.jpg"
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                }
                keywords={["Gran formato", "Eventos", "Publicidad exterior"]}
              />

              <ServiceCard
                title="Rótulos y Placas"
                description="Diseño y fabricación de letreros fijos, luminosos o sin luz para la fachada de tu local."
                link="/identidad-visual"
                imagePath="/images/productos/rotulos.jpg"
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                }
                keywords={["Señalización", "Letreros", "Fachadas"]}
              />

              <ServiceCard
                title="Rotulación de Espacios"
                description="Vinilos adhesivos para paredes, vitrinas, pisos y vehículos. Soluciones temporales o permanentes."
                link="/rotulacion-vehicular-quito"
                imagePath="/images/productos/rotulacion-vehicular.jpg"
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                }
                keywords={["Vehículos", "Vitrinas", "Decoración"]}
              />
            </div>
          </div>

          {/* Categoría 2: Oficina */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Herramientas de Oficina y Documentación</h3>
            <p className="text-gray-600 mb-8">Productos esenciales para la operación diaria de tu empresa</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Sellos"
                description="Sellos autoentintables, manuales y secos. Rapidez de entrega y variedad de tipos para todas tus necesidades."
                link="/sellos-quito"
                imagePath="/images/productos/sellos.jpg"
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                  </svg>
                }
                keywords={["Automáticos", "Notariales", "Urgentes"]}
              />

              <ServiceCard
                title="Credenciales de Identificación"
                description="Carnets y tarjetas de PVC personalizadas con códigos QR, bandas magnéticas y elementos de seguridad."
                link="/oficina-documentacion"
                imagePath="/images/productos/credenciales.jpg"
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                }
                keywords={["Carnets", "PVC", "Seguridad"]}
              />

              <ServiceCard
                title="Tarjetas de Presentación"
                description="Impresión digital u offset con acabados especiales. Diseño impactante y calidad premium."
                link="/tarjetas-presentacion-quito"
                imagePath="/images/productos/tarjetas-presentacion.jpg"
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                }
                keywords={["Diseño", "Premium", "Profesional"]}
              />
            </div>
          </div>

          {/* Categoría 3: Promocionales */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Artículos Promocionales y Regalos</h3>
            <p className="text-gray-600 mb-8">Personalización completa para fidelizar y promocionar tu marca</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Artículos Personalizados"
                description="Jarros, tomatodos, agendas y trofeos con sublimación y grabado láser. Regalos corporativos únicos."
                link="/articulos-promocionales-quito"
                imagePath="/images/productos/jarros-personalizados.jpg"
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                    <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                  </svg>
                }
                keywords={["Sublimación", "Grabado", "Corporativos"]}
              />

              <ServiceCard
                title="Esferográficos"
                description="Grabado láser o tampografía para grandes tiradas. Merchandising de bajo costo y gran alcance."
                link="/articulos-promocionales"
                imagePath="/images/productos/esferos.jpg"
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                }
                keywords={["Logo", "Merchandising", "Eventos"]}
              />

              <ServiceCard
                title="Stickers y Etiquetas"
                description="Adhesivos en vinilo o papel con corte personalizado. Ideales para empaques y branding de productos."
                link="/articulos-promocionales"
                imagePath="/images/productos/stickers.jpg"
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                }
                keywords={["Etiquetas", "Empaques", "Personalizado"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Servicio a domicilio en Quito. Tiempos de entrega competitivos.</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">Materiales premium y tecnología de impresión de última generación.</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Atención Personalizada</h3>
              <p className="text-gray-600">Asesoría profesional para encontrar la mejor solución para tu negocio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 gradient-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            ¿Listo para Impulsar tu Marca?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Solicita tu cotización gratuita y descubre cómo podemos ayudarte
          </p>
          <a
            href="https://wa.me/593996097226?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Ideart.%20¿Podrían%20enviarme%20su%20catálogo?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-red px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl inline-block"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

// Import ServiceCard component
import ServiceCard from '@/components/ServiceCard';

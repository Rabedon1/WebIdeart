export const metadata = {
    title: "Identidad Visual y Gran Formato en Quito | Ideart",
    description: "Gigantografías, rótulos y rotulación de espacios en Quito. Servicio profesional a domicilio. Alta visibilidad para tu negocio.",
    keywords: "gigantografías Quito, rótulos Quito, rotulación Quito, señalética Quito",
};

export default function IdentidadVisualPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="gradient-red text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Identidad Visual y Gran Formato
                    </h1>
                    <p className="text-xl text-gray-100">
                        Alta visibilidad y presencia de marca para tu negocio en Quito
                    </p>
                </div>
            </section>

            {/* Servicios */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Gigantografías */}
                        <div className="bg-gray-50 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-4 text-primary-red">Gigantografías y Pancartas</h2>
                            <p className="text-gray-700 mb-4">
                                Impresión de alta resolución sobre lona mesh o banner. Perfectas para vallas publicitarias,
                                fachadas de edificios y eventos promocionales.
                            </p>
                            <ul className="space-y-2 text-gray-600 mb-6">
                                <li>✓ Durabilidad garantizada</li>
                                <li>✓ Colores vibrantes</li>
                                <li>✓ Resistente a la intemperie</li>
                                <li>✓ Instalación disponible</li>
                            </ul>
                            <a
                                href="https://wa.me/593996097226?text=Hola,%20me%20interesa%20información%20sobre%20gigantografías"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-red text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-darkRed transition-all inline-block"
                            >
                                Cotizar Ahora
                            </a>
                        </div>

                        {/* Rótulos */}
                        <div className="bg-gray-50 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-4 text-primary-red">Rótulos y Placas</h2>
                            <p className="text-gray-700 mb-4">
                                Diseño y fabricación de letreros fijos, luminosos o sin luz para la fachada de tu local.
                                Incluye estructuras metálicas y placas de vidrio grabadas.
                            </p>
                            <ul className="space-y-2 text-gray-600 mb-6">
                                <li>✓ Diseño personalizado</li>
                                <li>✓ Iluminación LED disponible</li>
                                <li>✓ Materiales premium</li>
                                <li>✓ Instalación profesional</li>
                            </ul>
                            <a
                                href="https://wa.me/593996097226?text=Hola,%20me%20interesa%20información%20sobre%20rótulos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-red text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-darkRed transition-all inline-block"
                            >
                                Cotizar Ahora
                            </a>
                        </div>

                        {/* Rotulación */}
                        <div className="bg-gray-50 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-4 text-primary-red">Rotulación de Espacios</h2>
                            <p className="text-gray-700 mb-4">
                                Vinilos adhesivos para paredes, vitrinas, pisos y vehículos. Soluciones temporales
                                o permanentes para promociones y decoración.
                            </p>
                            <ul className="space-y-2 text-gray-600 mb-6">
                                <li>✓ Vehículos completos o parciales</li>
                                <li>✓ Vitrinas y escaparates</li>
                                <li>✓ Decoración de interiores</li>
                                <li>✓ Fácil aplicación y remoción</li>
                            </ul>
                            <a
                                href="https://wa.me/593996097226?text=Hola,%20me%20interesa%20información%20sobre%20rotulación"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-red text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-darkRed transition-all inline-block"
                            >
                                Cotizar Ahora
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">¿Necesitas asesoría personalizada?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Contáctanos y te ayudaremos a encontrar la mejor solución para tu negocio
                    </p>
                    <a
                        href="https://wa.me/593996097226?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20identidad%20visual"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-red text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-darkRed transform hover:scale-105 transition-all duration-300 shadow-xl inline-block"
                    >
                        Contactar por WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
}

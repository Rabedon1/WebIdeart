export const metadata = {
    title: "Sellos, Credenciales y Tarjetas en Quito | Ideart",
    description: "Sellos automáticos, credenciales PVC y tarjetas de presentación en Quito. Entrega rápida y calidad profesional.",
    keywords: "sellos Quito, credenciales Quito, tarjetas presentación Quito, carnets PVC",
};

export default function OficinaPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="gradient-red text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Herramientas de Oficina y Documentación
                    </h1>
                    <p className="text-xl text-gray-100">
                        Productos esenciales para la operación diaria de tu empresa
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-4 text-primary-red">Sellos</h2>
                            <p className="text-gray-700 mb-4">
                                Sellos autoentintables, manuales y secos. Rapidez de entrega y variedad de tipos.
                            </p>
                            <ul className="space-y-2 text-gray-600 mb-6">
                                <li>✓ Sellos automáticos</li>
                                <li>✓ Sellos manuales</li>
                                <li>✓ Sellos secos (relieve)</li>
                                <li>✓ Entrega en 24-48 horas</li>
                            </ul>
                            <a href="https://wa.me/593996097226?text=Hola,%20necesito%20información%20sobre%20sellos" target="_blank" rel="noopener noreferrer" className="bg-primary-red text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-darkRed transition-all inline-block">
                                Cotizar Ahora
                            </a>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-4 text-primary-red">Credenciales</h2>
                            <p className="text-gray-700 mb-4">
                                Carnets y tarjetas de PVC personalizadas con códigos QR y bandas magnéticas.
                            </p>
                            <ul className="space-y-2 text-gray-600 mb-6">
                                <li>✓ Diseño personalizado</li>
                                <li>✓ Códigos QR</li>
                                <li>✓ Bandas magnéticas</li>
                                <li>✓ Elementos de seguridad</li>
                            </ul>
                            <a href="https://wa.me/593996097226?text=Hola,%20necesito%20información%20sobre%20credenciales" target="_blank" rel="noopener noreferrer" className="bg-primary-red text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-darkRed transition-all inline-block">
                                Cotizar Ahora
                            </a>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-4 text-primary-red">Tarjetas de Presentación</h2>
                            <p className="text-gray-700 mb-4">
                                Impresión digital u offset con acabados especiales. Calidad premium.
                            </p>
                            <ul className="space-y-2 text-gray-600 mb-6">
                                <li>✓ Acabado mate o brillante</li>
                                <li>✓ Soft-touch disponible</li>
                                <li>✓ Diseño profesional</li>
                                <li>✓ Materiales premium</li>
                            </ul>
                            <a href="https://wa.me/593996097226?text=Hola,%20necesito%20información%20sobre%20tarjetas%20de%20presentación" target="_blank" rel="noopener noreferrer" className="bg-primary-red text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-darkRed transition-all inline-block">
                                Cotizar Ahora
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Solicita tu cotización</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Te respondemos en minutos con precios y tiempos de entrega
                    </p>
                    <a href="https://wa.me/593996097226?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20productos%20de%20oficina" target="_blank" rel="noopener noreferrer" className="bg-primary-red text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-darkRed transform hover:scale-105 transition-all duration-300 shadow-xl inline-block">
                        Contactar por WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
}

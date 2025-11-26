export const metadata = {
    title: "Tarjetas de Presentación en Quito | Ideart",
    description: "Tarjetas de presentación premium en Quito. Diseño profesional y acabados especiales. Impresión de alta calidad.",
    keywords: "tarjetas de presentación Quito, tarjetas de negocio Quito, business cards Quito",
};

export default function TarjetasPresentacionQuitoPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="gradient-red text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Tarjetas de Presentación en Quito
                    </h1>
                    <p className="text-xl text-gray-100">
                        Diseño profesional que causa impacto
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-6">Acabados Premium</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 text-primary-red">Acabados Disponibles</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✓ Mate (elegante y sofisticado)</li>
                                <li>✓ Brillante (colores vibrantes)</li>
                                <li>✓ Soft-touch (tacto aterciopelado)</li>
                                <li>✓ UV selectivo (relieve brillante)</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 text-primary-red">Incluye</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✓ Diseño profesional</li>
                                <li>✓ Revisiones ilimitadas</li>
                                <li>✓ Impresión de alta calidad</li>
                                <li>✓ Entrega a domicilio</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-primary-red text-white p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Destaca con Tarjetas Premium</h3>
                        <p className="text-lg mb-6">Solicita tu cotización y muestras de acabados</p>
                        <a href="https://wa.me/593996097226?text=Hola,%20necesito%20tarjetas%20de%20presentación%20en%20Quito" target="_blank" rel="noopener noreferrer" className="bg-white text-primary-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl inline-block">
                            Cotizar Ahora
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

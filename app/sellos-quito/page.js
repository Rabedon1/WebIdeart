export const metadata = {
    title: "Sellos en Quito - Entrega Rápida | Ideart",
    description: "Sellos automáticos, manuales y secos en Quito. Entrega en 24-48 horas. Calidad garantizada.",
    keywords: "sellos Quito, sellos automáticos Quito, sellos notariales Quito, sellos urgentes",
};

export default function SellosQuitoPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="gradient-red text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Sellos en Quito
                    </h1>
                    <p className="text-xl text-gray-100">
                        Entrega rápida en 24-48 horas
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-6">Tipos de Sellos</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="border-2 border-primary-red rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-3 text-primary-red">Sellos Automáticos</h3>
                            <p className="text-gray-700 mb-4">Autoentintables, rápidos y limpios. Ideales para uso frecuente.</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Sin necesidad de tampón</li>
                                <li>• Miles de impresiones</li>
                                <li>• Recarga de tinta fácil</li>
                            </ul>
                        </div>

                        <div className="border-2 border-primary-red rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-3 text-primary-red">Sellos Manuales</h3>
                            <p className="text-gray-700 mb-4">Con tampón separado. Económicos y duraderos.</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Uso intermitente</li>
                                <li>• Bajo costo</li>
                                <li>• Variedad de tamaños</li>
                            </ul>
                        </div>

                        <div className="border-2 border-primary-red rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-3 text-primary-red">Sellos Secos</h3>
                            <p className="text-gray-700 mb-4">Relieve sin tinta. Para documentos oficiales y notarías.</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Efecto relieve</li>
                                <li>• Documentos legales</li>
                                <li>• Elegante y profesional</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl mb-8">
                        <h3 className="text-2xl font-bold mb-4">Servicio Express</h3>
                        <p className="text-lg text-gray-700">
                            ¿Necesitas tu sello urgente? Ofrecemos servicio express con entrega en 24 horas
                            para sellos automáticos estándar en Quito.
                        </p>
                    </div>

                    <div className="bg-primary-red text-white p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Solicita tu Sello</h3>
                        <p className="text-lg mb-6">Envíanos el texto y te cotizamos inmediatamente</p>
                        <a href="https://wa.me/593996097226?text=Hola,%20necesito%20un%20sello%20en%20Quito" target="_blank" rel="noopener noreferrer" className="bg-white text-primary-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl inline-block">
                            Cotizar por WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

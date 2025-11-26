export const metadata = {
    title: "Rotulación Vehicular en Quito - Servicio a Domicilio | Ideart",
    description: "Rotulación de vehículos en Quito con vinilos de alta calidad. Diseño, impresión e instalación. Servicio a domicilio. ¡Cotiza gratis!",
    keywords: "rotulación vehicular Quito, vinilos para vehículos Quito, rotulación de carros Quito",
};

export default function RotulacionVehicularQuitoPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="gradient-red text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Rotulación Vehicular en Quito
                    </h1>
                    <p className="text-xl text-gray-100">
                        Convierte tu vehículo en publicidad móvil con nuestros vinilos de alta calidad
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose max-w-none">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">¿Por qué rotular tu vehículo en Quito?</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            La rotulación vehicular es una de las formas más efectivas y económicas de publicidad en Quito.
                            Tu vehículo se convierte en un anuncio móvil que genera miles de impresiones diarias mientras
                            te desplazas por la ciudad.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary-red">Beneficios</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ Publicidad 24/7 mientras conduces</li>
                                    <li>✓ Protege la pintura original</li>
                                    <li>✓ Fácil remoción sin daños</li>
                                    <li>✓ Diseño personalizado incluido</li>
                                    <li>✓ Instalación profesional</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary-red">Nuestro Proceso</h3>
                                <ol className="space-y-2 text-gray-700">
                                    <li>1. Diseño personalizado gratuito</li>
                                    <li>2. Aprobación del cliente</li>
                                    <li>3. Impresión en vinilo premium</li>
                                    <li>4. Instalación profesional</li>
                                    <li>5. Garantía de calidad</li>
                                </ol>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Tipos de Rotulación Vehicular</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="border border-gray-200 rounded-lg p-6">
                                <h4 className="font-bold text-lg mb-2 text-primary-red">Rotulación Completa</h4>
                                <p className="text-gray-600">Cobertura total del vehículo para máximo impacto visual</p>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-6">
                                <h4 className="font-bold text-lg mb-2 text-primary-red">Rotulación Parcial</h4>
                                <p className="text-gray-600">Puertas, capó o secciones específicas del vehículo</p>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-6">
                                <h4 className="font-bold text-lg mb-2 text-primary-red">Letras y Logos</h4>
                                <p className="text-gray-600">Aplicación de textos y logotipos corporativos</p>
                            </div>
                        </div>

                        <div className="bg-primary-red text-white p-8 rounded-2xl text-center my-12">
                            <h3 className="text-2xl font-bold mb-4">Servicio a Domicilio en Quito</h3>
                            <p className="text-lg mb-6">
                                Nos desplazamos a tu ubicación para tomar medidas e instalar. Sin complicaciones.
                            </p>
                            <a
                                href="https://wa.me/593996097226?text=Hola,%20necesito%20información%20sobre%20rotulación%20vehicular%20en%20Quito"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-primary-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl inline-block"
                            >
                                Solicitar Cotización Gratis
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

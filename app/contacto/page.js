export const metadata = {
    title: "Contacto - Ideart Quito | Cotiza Gratis",
    description: "Contáctanos para cotizar tus proyectos de rotulación, sellos y artículos promocionales en Quito. Servicio a domicilio.",
};

export default function ContactoPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="gradient-red text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Contacto
                    </h1>
                    <p className="text-xl text-gray-100">
                        Estamos listos para atenderte
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Información de Contacto */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                                        <a href="https://wa.me/593996097226" className="text-primary-red hover:underline text-lg">
                                            +593 99 609 7226
                                        </a>
                                        <p className="text-gray-600 text-sm mt-1">Respuesta inmediata</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Ubicación</h3>
                                        <p className="text-gray-700">Quito, Ecuador</p>
                                        <p className="text-gray-600 text-sm mt-1">Servicio a domicilio en toda la ciudad</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Horario de Atención</h3>
                                        <p className="text-gray-700">Lunes a Viernes</p>
                                        <p className="text-gray-700">9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                                <h3 className="font-bold text-lg mb-3">¿Por qué elegirnos?</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ Servicio a domicilio en Quito</li>
                                    <li>✓ Entrega rápida garantizada</li>
                                    <li>✓ Calidad premium</li>
                                    <li>✓ Precios competitivos</li>
                                    <li>✓ Atención personalizada</li>
                                </ul>
                            </div>
                        </div>

                        {/* Formulario de Contacto (redirige a WhatsApp) */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Solicita tu Cotización</h2>
                            <div className="bg-gray-50 p-8 rounded-xl">
                                <p className="text-gray-700 mb-6">
                                    Para brindarte una cotización precisa y rápida, preferimos atenderte directamente
                                    por WhatsApp donde podemos resolver todas tus dudas al instante.
                                </p>

                                <div className="space-y-4">
                                    <a
                                        href="https://wa.me/593996097226?text=Hola,%20necesito%20información%20sobre%20gigantografías"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-white border-2 border-primary-red text-primary-red px-6 py-4 rounded-lg font-semibold hover:bg-primary-red hover:text-white transition-all text-center"
                                    >
                                        Cotizar Gigantografías
                                    </a>

                                    <a
                                        href="https://wa.me/593996097226?text=Hola,%20necesito%20información%20sobre%20sellos"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-white border-2 border-primary-red text-primary-red px-6 py-4 rounded-lg font-semibold hover:bg-primary-red hover:text-white transition-all text-center"
                                    >
                                        Cotizar Sellos
                                    </a>

                                    <a
                                        href="https://wa.me/593996097226?text=Hola,%20necesito%20información%20sobre%20rotulación%20vehicular"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-white border-2 border-primary-red text-primary-red px-6 py-4 rounded-lg font-semibold hover:bg-primary-red hover:text-white transition-all text-center"
                                    >
                                        Cotizar Rotulación Vehicular
                                    </a>

                                    <a
                                        href="https://wa.me/593996097226?text=Hola,%20necesito%20información%20sobre%20artículos%20promocionales"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-white border-2 border-primary-red text-primary-red px-6 py-4 rounded-lg font-semibold hover:bg-primary-red hover:text-white transition-all text-center"
                                    >
                                        Cotizar Artículos Promocionales
                                    </a>

                                    <a
                                        href="https://wa.me/593996097226?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Ideart"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-primary-red text-white px-6 py-4 rounded-lg font-bold hover:bg-accent-darkRed transition-all text-center shadow-lg"
                                    >
                                        Consulta General
                                    </a>
                                </div>

                                <p className="text-sm text-gray-600 mt-6 text-center">
                                    Te responderemos en minutos con toda la información que necesites
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

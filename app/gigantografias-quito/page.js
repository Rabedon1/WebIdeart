export const metadata = {
    title: "Gigantografías en Quito - Impresión Gran Formato | Ideart",
    description: "Gigantografías y pancartas en Quito. Impresión de alta calidad para vallas, eventos y fachadas. Servicio a domicilio.",
    keywords: "gigantografías Quito, impresión gran formato Quito, pancartas Quito, banners Quito",
};

export default function GigantografiasQuitoPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="gradient-red text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Gigantografías en Quito
                    </h1>
                    <p className="text-xl text-gray-100">
                        Impresión de gran formato con la más alta calidad
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-6">Impresión de Alta Resolución</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Nuestras gigantografías son perfectas para vallas publicitarias, fachadas de edificios,
                        eventos y ferias comerciales en Quito. Utilizamos materiales resistentes a la intemperie
                        y tintas de alta durabilidad.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 text-primary-red">Materiales Disponibles</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✓ Lona mesh (para exteriores con viento)</li>
                                <li>✓ Banner vinílico (alta resistencia)</li>
                                <li>✓ Lona blackout (opacidad total)</li>
                                <li>✓ Tela para interiores</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 text-primary-red">Aplicaciones</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✓ Vallas publicitarias</li>
                                <li>✓ Fachadas de edificios</li>
                                <li>✓ Eventos y ferias</li>
                                <li>✓ Stands promocionales</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-primary-red text-white p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">¿Necesitas una gigantografía?</h3>
                        <p className="text-lg mb-6">Cotiza gratis y recibe asesoría personalizada</p>
                        <a href="https://wa.me/593996097226?text=Hola,%20necesito%20una%20gigantografía%20en%20Quito" target="_blank" rel="noopener noreferrer" className="bg-white text-primary-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl inline-block">
                            Cotizar Ahora
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

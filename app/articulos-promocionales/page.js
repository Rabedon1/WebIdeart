export const metadata = {
    title: "Artículos Promocionales Personalizados en Quito | Ideart",
    description: "Jarros, tomatodos, esferos y stickers personalizados en Quito. Regalos corporativos y merchandising con tu logo.",
    keywords: "artículos promocionales Quito, regalos corporativos Quito, merchandising Quito",
};

export default function PromocionalesPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="gradient-red text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Artículos Promocionales y Regalos
                    </h1>
                    <p className="text-xl text-gray-100">
                        Personalización completa para fidelizar y promocionar tu marca
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-4 text-primary-red">Artículos Personalizados</h2>
                            <p className="text-gray-700 mb-4">
                                Jarros, tomatodos, agendas y trofeos con sublimación y grabado láser.
                            </p>
                            <ul className="space-y-2 text-gray-600 mb-6">
                                <li>✓ Sublimación en jarros</li>
                                <li>✓ Grabado láser</li>
                                <li>✓ Agendas personalizadas</li>
                                <li>✓ Trofeos y reconocimientos</li>
                            </ul>
                            <a href="https://wa.me/593996097226?text=Hola,%20necesito%20artículos%20personalizados" target="_blank" rel="noopener noreferrer" className="bg-primary-red text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-darkRed transition-all inline-block">
                                Cotizar Ahora
                            </a>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-4 text-primary-red">Esferográficos</h2>
                            <p className="text-gray-700 mb-4">
                                Grabado láser o tampografía para grandes tiradas de bolígrafos promocionales.
                            </p>
                            <ul className="space-y-2 text-gray-600 mb-6">
                                <li>✓ Grabado láser</li>
                                <li>✓ Tampografía</li>
                                <li>✓ Grandes cantidades</li>
                                <li>✓ Logo de tu empresa</li>
                            </ul>
                            <a href="https://wa.me/593996097226?text=Hola,%20necesito%20esferos%20personalizados" target="_blank" rel="noopener noreferrer" className="bg-primary-red text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-darkRed transition-all inline-block">
                                Cotizar Ahora
                            </a>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-4 text-primary-red">Stickers y Etiquetas</h2>
                            <p className="text-gray-700 mb-4">
                                Adhesivos en vinilo o papel con corte personalizado para productos y empaques.
                            </p>
                            <ul className="space-y-2 text-gray-600 mb-6">
                                <li>✓ Corte personalizado</li>
                                <li>✓ Vinilo o papel</li>
                                <li>✓ Para productos</li>
                                <li>✓ Etiquetado profesional</li>
                            </ul>
                            <a href="https://wa.me/593996097226?text=Hola,%20necesito%20stickers%20personalizados" target="_blank" rel="noopener noreferrer" className="bg-primary-red text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-darkRed transition-all inline-block">
                                Cotizar Ahora
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Regalos corporativos que impactan</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Solicita tu catálogo completo de productos promocionales
                    </p>
                    <a href="https://wa.me/593996097226?text=¡Hola!%20Me%20gustaría%20recibir%20el%20catálogo%20de%20artículos%20promocionales" target="_blank" rel="noopener noreferrer" className="bg-primary-red text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-darkRed transform hover:scale-105 transition-all duration-300 shadow-xl inline-block">
                        Solicitar Catálogo
                    </a>
                </div>
            </section>
        </div>
    );
}

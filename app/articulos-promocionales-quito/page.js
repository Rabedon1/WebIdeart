export const metadata = {
    title: "Artículos Promocionales en Quito | Ideart",
    description: "Artículos promocionales y regalos corporativos en Quito. Jarros, esferos, agendas personalizadas y más.",
    keywords: "artículos promocionales Quito, regalos corporativos Quito, merchandising Quito",
};

export default function ArticulosPromocionalesQuitoPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="gradient-red text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Artículos Promocionales en Quito
                    </h1>
                    <p className="text-xl text-gray-100">
                        Regalos corporativos que fortalecen tu marca
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-6">Catálogo de Productos</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="border border-gray-200 rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-2 text-primary-red">Jarros y Tomatodos</h3>
                            <p className="text-gray-600">Sublimación de alta calidad con tu logo</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-2 text-primary-red">Esferos</h3>
                            <p className="text-gray-600">Grabado láser o tampografía</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-2 text-primary-red">Agendas</h3>
                            <p className="text-gray-600">Personalizadas con tu marca</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-2 text-primary-red">Trofeos</h3>
                            <p className="text-gray-600">Reconocimientos y premiaciones</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-2 text-primary-red">USB Personalizados</h3>
                            <p className="text-gray-600">Con tu logo grabado</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-2 text-primary-red">Llaveros</h3>
                            <p className="text-gray-600">Múltiples materiales disponibles</p>
                        </div>
                    </div>

                    <div className="bg-primary-red text-white p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Solicita Nuestro Catálogo Completo</h3>
                        <p className="text-lg mb-6">Más de 100 productos disponibles para personalizar</p>
                        <a href="https://wa.me/593996097226?text=Hola,%20me%20gustaría%20recibir%20el%20catálogo%20de%20artículos%20promocionales" target="_blank" rel="noopener noreferrer" className="bg-white text-primary-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl inline-block">
                            Solicitar Catálogo
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

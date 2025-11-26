import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo y Descripción */}
                    <div className="col-span-1 md:col-span-2">
                        <Image
                            src="/images/logo.jpg"
                            alt="Ideart Logo"
                            width={200}
                            height={60}
                            className="h-14 w-auto mb-4"
                        />
                        <p className="text-gray-300 mb-4 max-w-md">
                            Soluciones visuales profesionales en Quito. Rotulación, señalética, sellos y artículos promocionales con servicio a domicilio.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-300">
                            <svg className="w-5 h-5 text-primary-red" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>Quito, Ecuador - Servicio a Domicilio</span>
                        </div>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-primary-red">Servicios</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/identidad-visual" className="text-gray-300 hover:text-white transition-colors">
                                    Identidad Visual
                                </Link>
                            </li>
                            <li>
                                <Link href="/oficina-documentacion" className="text-gray-300 hover:text-white transition-colors">
                                    Oficina y Documentación
                                </Link>
                            </li>
                            <li>
                                <Link href="/articulos-promocionales" className="text-gray-300 hover:text-white transition-colors">
                                    Artículos Promocionales
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-primary-red">Contacto</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <a href="https://wa.me/593996097226" className="hover:text-white transition-colors">
                                    +593 99 609 7226
                                </a>
                            </li>
                            <li className="flex items-start space-x-2">
                                <svg className="w-5 h-5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="font-semibold text-white">Horario de Atención:</p>
                                    <p>Lunes a Viernes</p>
                                    <p>9:00 AM - 6:00 PM</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                        <p>&copy; {currentYear} Ideart. Todos los derechos reservados.</p>
                        <p className="mt-2 md:mt-0">
                            Diseñado para impulsar tu marca en Quito
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

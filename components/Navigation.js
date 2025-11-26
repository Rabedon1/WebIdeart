'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Inicio' },
        { href: '/identidad-visual', label: 'Identidad Visual' },
        { href: '/oficina-documentacion', label: 'Oficina' },
        { href: '/articulos-promocionales', label: 'Promocionales' },
        { href: '/contacto', label: 'Contacto' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/images/logo.jpg"
                            alt="Ideart Logo"
                            width={200}
                            height={60}
                            className="h-14 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-primary-red font-medium transition-colors duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/593996097226?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Ideart.%20¿Podrían%20enviarme%20su%20catálogo?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-red text-white px-6 py-2.5 rounded-full font-semibold hover:bg-accent-darkRed transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-glow-red"
                        >
                            Cotizar Ahora
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 animate-slide-up">
                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-700 hover:text-primary-red font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/593996097226?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Ideart.%20¿Podrían%20enviarme%20su%20catálogo?"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-red text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-accent-darkRed transition-all"
                            >
                                Cotizar Ahora
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

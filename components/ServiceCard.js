import Link from 'next/link';
import Image from 'next/image';

export default function ServiceCard({ title, description, icon, link, keywords, imagePath }) {
    return (
        <Link href={link}>
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-primary-red cursor-pointer h-full flex flex-col">

                {/* Image - if provided */}
                {imagePath && (
                    <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                        <Image
                            src={imagePath}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                )}

                {/* Icon - if no image */}
                {!imagePath && icon && (
                    <div className="mb-4 text-primary-red group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-red transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                    {description}
                </p>

                {/* Keywords */}
                {keywords && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {keywords.map((keyword, index) => (
                            <span
                                key={index}
                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                )}

                {/* CTA */}
                <div className="flex items-center text-primary-red font-semibold group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                    <span>Ver más</span>
                    <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </div>
            </div>
        </Link>
    );
}

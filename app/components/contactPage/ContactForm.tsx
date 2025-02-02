'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic here
        console.log(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-100">Əlaqə Məlumatları</h2>
                            <p className="text-gray-300 mb-8">
                                Bizimlə əlaqə saxlamaq üçün aşağıdakı məlumatlardan istifadə edə bilərsiniz
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-gray-100 p-3 rounded-full text-gray-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-200">Telefon</h3>
                                    <a href="tel:+994552824800" className="text-gray-300 hover:text-gray-900">+994 55 282 48 00</a>
                                    <br />

                                    <a href="tel:+994557569099" className="text-gray-300 hover:text-gray-900">+994 55 756 90 99</a>
                                </div>
                            </div>


                            <div className="flex items-center gap-4">
                                <div className="bg-stone-100 p-3 rounded-full text-stone-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-200">E-mail</h3>
                                    <Link href="mailto:info@samramprojects.az" className="text-gray-300 hover:text-gray-900">
                                        info@samramprojects.az
                                    </Link>

                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-stone-100 p-3 rounded-full text-stone-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-200">Ünvan</h3>
                                    <p className="text-gray-300">Bakı şəhəri, Azərbaycan</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-stone-50 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-6 text-stone-900">Mesaj Göndərin</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                                    Ad Soyad
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500 bg-white text-stone-900"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500 bg-white text-stone-900"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
                                    Telefon
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500 bg-white text-stone-900"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                                    Mesajınız
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500 bg-white text-stone-900"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-stone-900 text-white py-3 px-6 rounded-md hover:bg-stone-800 transition-colors duration-200"
                            >
                                Göndər
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
} 
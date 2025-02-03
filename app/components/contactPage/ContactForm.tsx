'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';
import { useFormValidation } from '../../hooks/useFormValidation';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            // Form hatalarını göster
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch('https://formspree.io/f/mnnjvloa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (_) {
            console.log(_)
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const debouncedHandleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const { errors, validateForm } = useFormValidation(formData);

    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-100">
                                Əlaqə Məlumatları
                            </h2>
                            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
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
                                    <p className="text-gray-300">AZ1106  Baki şəhəri Binəqədi rayonu, M.Rəsulzadə ŞTQ, səttar Bəhlulzadə,ev Dön 2,m.16</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-stone-50 p-6 md:p-8 rounded-lg shadow-lg">
                        <h2 className="text-xl md:text-2xl font-bold mb-6 text-stone-900">
                            Mesaj Göndərin
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                                    Ad Soyad
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={debouncedHandleChange}
                                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500 bg-white text-stone-900"
                                    required
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                                    onChange={debouncedHandleChange}
                                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500 bg-white text-stone-900"
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                                    onChange={debouncedHandleChange}
                                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500 bg-white text-stone-900"
                                    required
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                                    Mesajınız
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={debouncedHandleChange}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500 bg-white text-stone-900"
                                    required
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`w-full py-3 px-6 rounded-md transition-colors duration-200 ${status === 'loading'
                                    ? 'bg-stone-400 cursor-not-allowed'
                                    : 'bg-stone-900 hover:bg-stone-800'
                                    } text-white`}
                            >
                                {status === 'loading' ? 'Göndərilir...' : 'Göndər'}
                            </button>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div className="p-4 bg-green-100 text-green-700 rounded-md">
                                    Mesajınız uğurla göndərildi. Tezliklə sizinlə əlaqə saxlanılacaq.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="p-4 bg-red-100 text-red-700 rounded-md">
                                    Xəta baş verdi. Zəhmət olmasa bir az sonra yenidən cəhd edin.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
} 
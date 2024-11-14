// app/register/page.js
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-700 to-cyan-400">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <Image src="/logo-no-background.png" alt="Timeless Haven Logo" width={200} height={100} />
            </div>
            <div className="w-full max-w-md p-5">
                <div className="bg-white/10 p-10 rounded-lg backdrop-blur-md shadow-lg text-white text-center">
                    <h2 className="mb-5 text-2xl font-semibold">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-5">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={handleEmailChange}
                                className="w-full p-3 text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-yellow-500 placeholder-transparent"
                            />
                            <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white transition-all pointer-events-none">
                                Email
                            </label>
                        </div>
                        <div className="relative mb-5">
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={handlePasswordChange}
                                className="w-full p-3 text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-yellow-500 placeholder-transparent"
                            />
                            <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white transition-all pointer-events-none">
                                Password
                            </label>
                        </div>
                        <div className="relative mb-5">
                            <input
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                className="w-full p-3 text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-yellow-500 placeholder-transparent"
                            />
                            <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white transition-all pointer-events-none">
                                Confirm Password
                            </label>
                        </div>
                        <button type="submit" className="w-full py-3 bg-purple-600 hover:bg-purple-800 transition-colors rounded-md text-white font-semibold">
                            Sign Up
                        </button>
                        <p className="mt-5 text-white">
                            Already have an Account?{' '}
                            <Link href="/login" className="text-yellow-500 hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;

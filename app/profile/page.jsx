// app/profile/page.js
"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
    const router = useRouter();
    const isAuthenticated = false; // Replace this with actual authentication check

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return null; // Prevents the page content from rendering while redirecting
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-700 to-blue-400">
            <div className="w-full max-w-md p-5">
                <div className="bg-white/10 p-10 rounded-lg backdrop-blur-md shadow-lg text-white text-center">
                    <h2 className="text-2xl font-semibold mb-5">Welcome to Your Profile</h2>
                    <p className="mb-5">Here’s where you can view and manage your account information.</p>
                    {/* User information and account details would go here */}
                    <div className="mt-5">
                        <button className="w-full py-3 bg-purple-600 hover:bg-purple-800 transition-colors rounded-md text-white font-semibold">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

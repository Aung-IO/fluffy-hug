import Image from 'next/image'
import React from 'react'

export default function Loading() {
    return (
        <div className="w-full h-full fixed inset-0 bg-white flex justify-center items-center">
            <div className="w-[200px] h-[200px] relative">
                <Image src="/assets/loading.webp" alt="Loading" fill />
            </div>
        </div>
    )
}

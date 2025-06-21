import Image from 'next/image'
import React from 'react'

export default function SocialIcons() {
    return (
        <div className="fixed bottom-4 left-10 z-50 flex gap-4 p-2 justify-center items-center">
            {/* Discord */} 
            <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer" 
            >
                <Image src="/assets/discord.svg" alt="Discord" width={40} height={40} />
            </a>
            {/* Twitter */}
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/assets/twitter.svg" alt="Twitter" width={40} height={40} />
            </a>
            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/assets/github.svg" alt="Twitter" width={40} height={40} />
            </a>
        </div>
    )
}

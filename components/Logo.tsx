import Link from "next/link"
import Image from "next/image"

import LogoImage from "@logos/BeardedCashLogo.svg"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const Logo = () => {
    return (
        <Link href="/" prefetch={false} className="overflow-hidden p-2">
            <div className="flex items-center w-16 h-16">
                <AspectRatio 
                    ratio={16 / 16} 
                    className="flex items-center justify-center"
                >
                    <Image 
                        priority
                        src={LogoImage}
                        alt="Bearded Cash Logo"
                        className="rounded-full dark:filter dark:invert"
                    />
                </AspectRatio>
            </div>
        </Link>
    )
}

export default Logo

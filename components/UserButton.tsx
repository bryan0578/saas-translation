import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"

const UserButton = () => {
    //Session...
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <UserAvatar name="Bryan Cash" image="https://github.com/shadcn.png"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserButton

import { useAuth } from "../hooks/useAuth"
import {  Login } from "../screens"
import { AuthNavigation } from "./AuthNavigation"
import { Navigation } from "./Navigation"


export const StartNavigation = () => {
    const {user} = useAuth()
    return user ? <Navigation /> : <AuthNavigation />
}
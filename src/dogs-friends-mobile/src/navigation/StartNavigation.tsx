import { useAuth } from "../hooks/useAuth"
import {  Login } from "../screens"
import { Navigation } from "./Navigation"


export const StartNavigation = () => {
    const {user} = useAuth()
    return user ? <Navigation /> : <Login />
}
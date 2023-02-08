import { useShoppingCart } from "../context/ShoppingCartContext"
import { StoreItem } from "./StoreItem"

type CartItemProps = {
    id : number
    quantity : number
}

export function CartItem ({id, quantity} : CartItemProps){
    const {removeFromCart} = useShoppingCart()
    const item =StoreItem.find(i => i.id === id)
    if(item == null) return null
}
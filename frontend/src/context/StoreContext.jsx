import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const appUrl = import.meta.env.VITE_API_URL;
    const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "");
    const [menuList, setMenuList] = useState([]);
    const [foodList, setFoodList] = useState([]);

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(appUrl + "/api/cart/add", { itemId }, { headers: { token } })
        }
    }

    const removeFromCart = async(itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(appUrl + "/api/cart/remove", { itemId }, { headers: { token } })
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = foodList.find((product) => product._id == item);
                totalAmount += itemInfo?.price * cartItems[item];
            }

        }
        return totalAmount;
    }

    const fetchMenuList = async () => {
        const response = await axios.get(appUrl + "/api/menu/menu-list");
        setMenuList(response?.data?.data);
    }

    const fetchFoodList = async () => {
        const response = await axios.get(appUrl + "/api/food/list");
        setFoodList(response?.data?.data);
    }

    const loadCartData = async()=>{
        if (!token) {
            return;
        }
        const response = await axios.post(appUrl + "/api/cart/get", {}, { headers: { token } });
        setCartItems(response?.data?.cartData)
    };

    useEffect(() => {

        // if (localStorage.getItem("token") !== "") {
        //     setToken(localStorage.getItem("token"));
        // }

        async function loadData() {
            await fetchMenuList();
            await fetchFoodList();
            loadCartData();
        }
        loadData();
    }, []);

    const contextValue = {
        menuList,
        foodList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        appUrl,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
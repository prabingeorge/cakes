import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const [totalCartAmount, setTotalCartAmount] = useState(0);
    const appUrl = import.meta.env.VITE_API_URL;
    const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "");
    const [menuList, setMenuList] = useState([]);
    const [foodList, setFoodList] = useState([]);

    const addToCart = async (itemId, data) => {
        if (!cartItems[itemId]?.length) {
            data.foodId = 1;
            setCartItems((prev) => ({ ...prev, [itemId]: [data] }));
        } else {
            let maxValue = cartItems[itemId]?.reduce((acc, value) => {
                return (acc = acc > value.foodId ? acc : value.foodId);
            }, 0);
            data.foodId = maxValue + 1;
            setCartItems((prev) => ({ ...prev, [itemId]: [...prev[itemId], data] }));
        }
        if (token) {
            await axios.post(appUrl + "/api/cart/add", { itemId, data }, { headers: { token } })
        }
    }

    const removeFromCart = async (itemId, data) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId].filter((cart) => !(cart.weight == data.weight && cart.foodId == data.foodId)) }));
        if (token) {
            await axios.post(appUrl + "/api/cart/remove", { itemId, data }, { headers: { token } })
        }
    }

    const getTotalCartAmount = (cartItemsData) => {
        let totalAmount = 0;
        for (const item in cartItemsData) {
            if (cartItemsData[item].length > 0) {
                let itemInfo = foodList.find((product) => product._id == item);
                const totalWeights = cartItemsData[item].reduce((accumulator, item) => item.weight + accumulator, 0);
                totalAmount += itemInfo?.price * (totalWeights * 2);
            }

        }
        setTotalCartAmount(totalAmount);
    }

    const fetchMenuList = async () => {
        const response = await axios.get(appUrl + "/api/menu/menu-list");
        setMenuList(response?.data?.data);
    }

    const fetchFoodList = async () => {
        const response = await axios.get(appUrl + "/api/food/list");
        setFoodList(response?.data?.data);
    }

    const loadCartData = async () => {
        if (!token) {
            return;
        }
        const response = await axios.post(appUrl + "/api/cart/get", {}, { headers: { token } });
        setCartItems(response?.data?.cartData);
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

    useEffect(() => {
        async function loadData() {
            getTotalCartAmount(cartItems);
        }
        loadData();
    }, [cartItems]);

    const contextValue = {
        menuList,
        foodList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        totalCartAmount,
        setTotalCartAmount,
        getTotalCartAmount,
        appUrl,
        token,
        setToken,
        loadCartData
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
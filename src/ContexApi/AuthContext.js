import { createContext, useContext, useEffect, useState } from "react";
import Home from "../Pages/Home";
export const Authdata = createContext();
export const Authprovider = ({ children }) => {
    const [ProductData, setProductdata] = useState()
    const [Categorey, setcetagore] = useState([])
    const [wishtlistPro, setWishlist] = useState([])
    const [About, setabout] = useState()
    const [Home, sethome] = useState()
    const [Cart,setCart]=useState(JSON.parse(localStorage.getItem('cart'))?JSON.parse(localStorage.getItem('cart')):[])

    const [token,setoken]=useState(JSON.parse(localStorage.getItem('Auth')))
    console.log(token?.user?.token);

    const allProduct = (id) => {
        fetch(`https://alfatimapropertis.com/public/api/products/${id}`)
            .then(res => res.json())
            .then(resp => {
                setProductdata(resp)
            })

    }
    const register = (obj) => {

        fetch('https://alfatimapropertis.com/public/api/user-signup', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(resp => {
                console.log(resp);
                if (resp.status === 200) {
                    alert('Sigup successfully')
                }
            })

    }
    const login = (obj) => {

        fetch('https://alfatimapropertis.com/public/api/user-login', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(resp => {
                console.log(resp);
                if (resp.status === 200) {
                    alert('Sigup successfully')
                    localStorage.setItem('Auth', JSON.stringify(resp))
                }
            })

    }
    const wishlist = (obj) => {

        fetch('https://alfatimapropertis.com/public/api/wishlist', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': 'application/json',
                'Authorization': `Bearer ${token?.user?.token}`
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(resp => {
                console.log(resp);
                if (resp.status === 200) {
                    alert('Wishlist Add successfully')

                }
                else if (resp.message == "Unauthenticated.") {
                    alert("please login first")
                }
            })

    }
    const getwishlist = () => {

        fetch('https://alfatimapropertis.com/public/api/wishlist', {
            headers: {
                'Authorization': `Bearer ${token?.user?.token}`
            },
        })
            .then(res => res.json())
            .then(resp => {
                // console.log(resp?.successData?.wishlist);
                if (resp.status === 200) {
                    setWishlist(resp?.successData?.wishlist)

                }

            })

    }
    const about = () => {
        fetch(`https://alfatimapropertis.com/public/api/web-content/about-us`)
            .then(res => res.json())
            .then(resp => {
                // console.log(resp?.successData?.wishlist);
                if (resp.status === 200) {
                    setabout(resp?.successData)

                }
            })
    }
    const remove = (id) => {

        fetch(`https://alfatimapropertis.com/public/api/wishlist/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token?.user?.token}`
            },
        })
            .then(res => res.json())
            .then(resp => {

                if (resp.status === 200) {

                    alert('Wishlist deleted successfully')
                    const newdata = wishtlistPro.filter((item) => {
                        if (item.id !== id) {
                            return item
                        }
                    })
                    setWishlist(newdata)

                }

            })

    }
    const cetagore = (obj) => {

        fetch('https://alfatimapropertis.com/public/api/categories', {

        })
            .then(res => res.json())
            .then(resp => {
                console.log(resp);
                if (resp.status === 200) {
                    setcetagore(resp.categories)
                }
            })

    }
    const privacypolicy = () => {
        fetch(`https://alfatimapropertis.com/public/api/web-content/privacy-policy`)
        .then(res => res.json())
        .then(resp => {
          
            if (resp.status === 200) {
                setabout(resp?.successData)
            

            }
        })
    }
    const returnpolicy = () => {
        fetch(`https://alfatimapropertis.com/public/api/web-content/return-policy`)
        .then(res => res.json())
        .then(resp => {
            if (resp.status === 200) {
                setabout(resp?.successData)

            }
        })
    }
    const refundpolicy = () => {
        fetch(`https://alfatimapropertis.com/public/api/web-content/refund-policy`)
        .then(res => res.json())
        .then(resp => {
            if (resp.status === 200) {
                setabout(resp?.successData)

            }
        })
    }
    const deliveryinformation = () => {
        fetch(`https://alfatimapropertis.com/public/api/web-content/delivery-information`)
        .then(res => res.json())
        .then(resp => {
            if (resp.status === 200) {
                setabout(resp?.successData)

            }
        })
    }
    const termsconditions = () => {
        fetch(`https://alfatimapropertis.com/public/api/web-content/terms-conditions`)
        .then(res => res.json())
        .then(resp => {
            if (resp.status === 200) {
                setabout(resp?.successData)

            }
        })
    }
    const termsofservices = () => {
        fetch(`https://alfatimapropertis.com/public/api/web-content/terms-of-services`)
        .then(res => res.json())
        .then(resp => {
            if (resp.status === 200) {
                setabout(resp?.successData)

            }
        })
    }
    const paylater = () => {
        fetch(`https://alfatimapropertis.com/public/api/web-content/pay-later`)
        .then(res => res.json())
        .then(resp => {
            if (resp.status === 200) {
                setabout(resp?.successData)

            }
        })
    }
    const faqs = () => {
        fetch(`https://alfatimapropertis.com/public/api/web-content/faqs`)
        .then(res => res.json())
        .then(resp => {
            if (resp.status === 200) {
                setabout(resp?.successData)

            }
        })
    }
    const home = () => {
        fetch(`https://alfatimapropertis.com/public/api/web-content/home`)
        .then(res => res.json())
        .then(resp => {
            if (resp.status === 200) {
                sethome(resp?.successData)

            }
        })
    }
   
    const productDetail = (id) => {
        fetch(`https://alfatimapropertis.com/public/api/product-details/${id}`)
        .then(res => res.json())
        .then(resp => {
            console.log(resp);
            if (resp.status === 200) {
                sethome(resp)

            }
        })
    }
    const addTocart=(obj)=>{
        setCart([...Cart,obj])


    }
    const removecart=(id)=>{
        var newdata=Cart?.filter((item)=>{
            if(item.id!==id){
                return item
            }
        })
        setCart(newdata)
    }
    useEffect(()=>{
        console.log(Cart);
        localStorage.setItem('cart',JSON.stringify(Cart))

    },[Cart])
 

    
    return (
        <Authdata.Provider value={{
            ProductData,
            allProduct,
            register,
            login,
            cetagore,
            Categorey,
            wishlist,
            getwishlist,
            wishtlistPro,
            remove,
            about,
            About,
            privacypolicy,
            refundpolicy,
            faqs,
            termsconditions,
            termsofservices,
            paylater,
            deliveryinformation,
            returnpolicy,
            home,
            Home,
            productDetail,
            addTocart,
            Cart,
            removecart
        }}>
            {children}
        </Authdata.Provider>
    )
}
export const useAuth = () => useContext(Authdata);
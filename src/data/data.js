import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import product4 from "../assets/product4.png"
import product5 from "../assets/product5.png"
import product6 from "../assets/product6.png"
import product7 from "../assets/product7.png"
import product8 from "../assets/product8.png"

import cat1 from "../assets/cat1.png"
import cat2 from "../assets/cat2.png"
import cat3 from "../assets/cat3.png"
import cat4 from "../assets/cat4.png"
import cat5 from "../assets/cat5.png"

export const products = [
    {
        id: 1,
        name: "T-shirt Caro Lines",
        solds: "18 sold in last 8 hours",
        price: "26.00",
        colors: ["#E0A79D", "#332B3E", "#EFEFEF", "#DD621E"],
        discount: "50% Discount",
        size: "S",
        image: product8,
        category: ["Men", "Women"]
    },
    {
        id: 2,
        name: "Classic T-shirt Sleeves",
        solds: "18 sold in last 8 hours",
        price: "66.00",
        colors: ["#E0A79D", "#332B3E", "#EFEFEF", "#DD621E"],
        discount: false,
        size: "M",
        image: product2,
        category: ["Men"]
    },
    {
        id: 3,
        name: "T-shirt Caro Lines",
        solds: "8 sold in last 8 hours",
        price: "40.00",
        colors: ["#E0A79D", "#332B3E", "#EFEFEF", "#DD621E"],
        discount: "50% Discount",
        size: "L",
        image: product3,
        category: ["ON Sale", "New"]
    },
    {
        id: 4,
        name: "Pull Classic Cool",
        solds: "8 sold in last 8 hours",
        price: "30.00",
        colors: ["#E0A79D", "#332B3E", "#EFEFEF", "#DD621E"],
        discount: "50% Discount",
        size: "M",
        image: product4,
        category: ["New", "Men"]
    },
    {
        id: 5,
        name: "Pull Classic Cool",
        solds: "8 sold in last 8 hours",
        price: "30.00",
        colors: ["#E0A79D", "#332B3E", "#EFEFEF", "#DD621E"],
        discount: "50% Discount",
        size: "L",
        image: product5,
        category: ["Women", "New"]
    },
    {
        id: 6,
        name: "Elessi Knit Coats",
        solds: "20 sold in last 8 hours",
        price: "50.00",
        colors: ["#E0A79D", "#332B3E", "#EFEFEF", "#DD621E"],
        discount: "50% Discount",
        size: "S",
        image: product6,
        category: ["ON Sale", "New"]
    },
    {
        id: 7,
        name: "T-shirt Caro Lines",
        solds: "20 sold in last 8 hours",
        price: "50.00",
        colors: ["#E0A79D", "#332B3E", "#EFEFEF", "#DD621E"],
        discount: "50% Discount",
        size: "X",
        image: product7,
        category: ["Women", "Men"]
    },
    {
        id: 8,
        name: "Steady Coats",
        solds: "20 sold in last 8 hours",
        price: "50.00",
        colors: ["#E0A79D", "#332B3E", "#EFEFEF", "#DD621E"],
        discount: false,
        size: "L",
        image: product1,
        category: ["New", "Women"]
    },
]

export const categories = [
    {
        name: "Bag",
        color: "#F3F2ED",
        image: cat1
    },
    {
        name: "Cloth",
        color: "#E6F2EE",
        image: cat2
    },
    {
        name: "Pattern Cover",
        color: "#D8EBF9",
        image: cat3
    },
    {
        name: "Headphone",
        color: "#FCD2D3",
        image: cat4
    },
    {
        name: "Watch",
        color: "#BFECD8",
        image: cat5
    },
]
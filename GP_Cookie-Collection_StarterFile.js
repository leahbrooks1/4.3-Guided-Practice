/*
    Author:
    Date:
    Purpose:
*/

/* =========================================
     GLOBAL VARIABLES
========================================= */

// STEP 4

// Products
const products = [
    {
        name: "Butter Croissant",
        description: "Flaky layers baked with rich European butter.",
        price: 4.50,
        image: "images/croissant.png",
        alt: "Fresh buttery croissant"
    },
    {
        name: "Vanilla Cupcake",
        description: "Classic vanilla cake topped with creamy frosting.",
        price: 3.75,
        image: "images/cupcake.png",
        alt: "Vanilla cupcake with frosting"
    },
    {
        name: "Artisan Bread",
        description: "Handcrafted sourdough with a crispy crust.",
        price: 6.25,
        image: "images/bread.png",
        alt: "Fresh artisan bread loaf"
    },
    {
        name: "Chocolate Chip Cookies",
        description: "Soft baked cookies filled with chocolate chunks.",
        price: 5.00,
        image: "images/cookies.png",
        alt: "Chocolate chip cookies"
    },
    {
        name: "Apple Pie Slice",
        description: "Classic cinnamon apple pie with flaky crust.",
        price: 4.95,
        image: "images/pie.png",
        alt: "Apple pie slice"
    },
    {
        name: "Cinnamon Roll",
        description: "Soft cinnamon pastry drizzled with icing.",
        price: 4.25,
        image: "images/cinnamon-roll.png",
        alt: "Warm cinnamon roll"
    }
];

// Cart array
let cart = [];

// STEP 5


/* =========================================
     LOAD PAGE CONTENT
========================================= */

// STEP 6

/* =========================================
     DYNAMICALLY CREATE PRODUCT CARDS
========================================= */

// STEP 7

/* =========================================
     ADD PRODUCT TO CART
========================================= */

// STEP 8

/* =========================================
     UPDATE CART DISPLAY
========================================= */

// STEP 9

/* =========================================
     REMOVE ITEMS FROM CART
========================================= */

// STEP 10

/* =========================================
     SAVE CART USING COOKIES
========================================= */

// STEP 11

/* =========================================
     LOAD CART FROM COOKIE
========================================= */

// STEP 12

/* =========================================
     COLLAPSIBLE CART WINDOW
========================================= */

let cartOpen = true;

/* =========================================
     TOGGLE CART OPEN/CLOSED
========================================= */
toggleCart.addEventListener("click", () => {

    // Flip cart visibility state on click
    cartOpen = !cartOpen;

    // Display/Hide cart based on visibility state
    if (cartOpen) {
        cartContent.style.display = "block";
    } else {
        cartContent.style.display = "none";
    }
});

/* =========================================
     BOUNCE ANIMATION FUNCTION
========================================= */

// STEP 13
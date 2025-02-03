
// const foodDeliveryService = {
//     serviceName: "TastyBites Delivery",
//     location: "Foodville",
//     restaurants: {
//       italianCorner: {
//         menu: {
//           pizza: { available: 20, price: 12 },
//           pasta: { available: 30, price: 10 },
//           salad: { available: 15, price: 8 },
//         },
//         orders: [
//           { id: 1, items: ["pizza", "pasta"], total: 22 },
//           { id: 2, items: ["salad", "pasta"], total: 18 },
//           { id: 3, items: ["pizza", "pasta"], total: 12 },
//         ],
//         open: false,
//       },
//       burgerJoint: {
//         menu: {
//           burger: { available: 25, price: 8 },
//           fries: { available: 40, price: 4 },
//           drink: { available: 30, price: 2 },
//         },
//         orders: [
//           { id: 1, items: ["burger", "fries"], total: 12 },
//           { id: 2, items: ["drink", "burger", "fries"], total: 14 },
//           { id: 3, items: ["drink"], total: 2 },
//         ],
//         open: true,
//       },
//     },
//     restaurantNames: ["italianCorner", "burgerJoint"],
//     totalRestaurants: 2
//   };

// import { MenuItem } from "@chakra-ui/react";



  


const foodDeliveryService ={
    serviceName: String = "TastyBites Delivery",
    location: String = "Foodville",

    interface MenuItem {
        available: number;
        price: number;
    };

    interface Menu  {
        pizza: MenuItem;
        pasta: MenuItem;
        salad: MenuItem;

    }

    interface Restaurant {
        ItalianCorner : {
            Menu: Menu;
        };
    }

    interface item{
        items : string[]
    }

    interface ArrayItem {
        id: number;
        items: item;
        total: number
    }
    
    interface burgerJoints  {
        burger: MenuItem;
        fries: MenuItem;
        drink: MenuItem;

    }

    const Restaurants : Restaurant = {
        ItalianCorner: {
            Menu: {
                pizza: { available: 20, price: 12 },
                pasta: { available: 30, price: 10 },
                salad: { available: 15, price: 8 },
            },
            const orders : ArrayItem [] = [
                { id: 1, items: ["pizza", "pasta"], total: 22 },
                { id: 2, items: ["salad", "pasta"], total: 18 },
                { id: 3, items: ["pizza", "pasta"], total: 12 },
            ],

            open: boolean = "false",
        }
    }
    

    const burgerJoint : burgerJoints = {
       
        Menu: {
            burger: { available: 25, price: 8 },
            fries: { available: 40, price: 4 },
            drink: { available: 30, price: 2 },
        };
        const orders : ArrayItem[] = [
            { id: 1, items: ["burger", "fries"], total: 12 },
        { id: 2, items: ["drink", "burger", "fries"], total: 14 },
        { id: 3, items: ["drink"], total: 2 },
        ]    
            

        open: boolean = "true";

    }

    interface name {
        restaurantNames: String[]
    }
    restaurantNames:name[]= ["italianCorner", "burgerJoint"],
    totalRestaurants: number = 2
        

    

}
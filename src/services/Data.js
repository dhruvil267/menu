export default class Data {
  menuItemsAppetizer = () => {
    let items = [
      {
        id: "1",
        name: "Samosa",
        subdetails:
          "A popular Indian appetizer with spiced potatoes and peas filled in a crispy pastry shell.",
        price: "15",
      },
      {
        id: "2",
        name: "Paneer Tikka",
        subdetails:
          "Chunks of paneer (Indian cottage cheese) marinated in spices and grilled or baked.",
        price: "20",
      },
      {
        id: "3",
        name: "Pakora",
        subdetails:
          "Vegetables or meat dipped in chickpea flour batter and deep-fried until golden brown.",
        price: "18",
      },
      {
        id: "4",
        name: "Aloo Tikki",
        subdetails:
          "Spiced potato patties served with chutney, a popular street food in India.",
        price: "16",
      },
      {
        id: "5",
        name: "Chicken 65",
        subdetails:
          "Spicy and flavorful deep-fried chicken, a popular appetizer in Indian cuisine.",
        price: "22",
      },
      // Add more Indian appetizers as needed
    ];
    return items;
  };

  menuItemsMainCourse = () => {
    let items = [
      {
        id: "6",
        name: "Butter Chicken",
        subdetails:
          "A rich and creamy chicken curry made with a tomato and cashew nut-based sauce.",
        price: "25",
      },
      {
        id: "7",
        name: "Rajma Chawal",
        subdetails:
          "Kidney beans cooked in a thick tomato-based gravy, served with rice.",
        price: "18",
      },
      {
        id: "8",
        name: "Chicken Biryani",
        subdetails:
          "A flavorful and aromatic rice dish with chicken, spices, and herbs.",
        price: "22",
      },
      {
        id: "9",
        name: "Palak Paneer",
        subdetails:
          "Paneer cubes cooked in a creamy spinach gravy, a popular vegetarian dish.",
        price: "20",
      },
      {
        id: "10",
        name: "Dal Makhani",
        subdetails:
          "Black lentils cooked with kidney beans in a creamy tomato-based sauce.",
        price: "19",
      },
      // Add more Indian main course dishes as needed
    ];
    return items;
  };

  menuItemsDessert = () => {
    let items = [
      {
        id: "11",
        name: "Gulab Jamun",
        subdetails:
          "Soft and spongy dumplings made of milk solids, soaked in sugar syrup.",
        price: "10",
      },
      {
        id: "12",
        name: "Rasgulla",
        subdetails:
          "White, spongy, and syrupy dessert made from chhena (Indian cottage cheese).",
        price: "12",
      },
      {
        id: "13",
        name: "Kheer",
        subdetails:
          "Rice pudding made with milk, rice, and flavored with cardamom and nuts.",
        price: "15",
      },
      {
        id: "14",
        name: "Jalebi",
        subdetails: "Deep-fried pretzel-shaped dessert soaked in sugar syrup.",
        price: "14",
      },
      {
        id: "15",
        name: "Gajar Ka Halwa",
        subdetails: "Carrot-based sweet dessert pudding garnished with nuts.",
        price: "16",
      },
      // Add more Indian desserts as needed
    ];
    return items;
  };
}

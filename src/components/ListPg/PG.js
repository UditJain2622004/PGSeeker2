import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import pic4 from "./images/pic4.png";

export const pgs = [
  {
    id: 1,
    name: "PG1",
    description:
      "The Haven is a mixed-gender PG located in Gachibowli, Hyderabad. It is a spacious and well-maintained property with all the amenities you need for a comfortable stay. The Haven is close to all major landmarks, including Gachibowli Stadium, Inorbit Mall, and Necklace Road. It is also a short walk from the nearest metro station. The Haven is the perfect place for people who are looking for a safe and comfortable place to stay in Hyderabad.",
    image: pic1,
    price: 5000,
    type: "female",
    amenities: ["WiFi", "AC", "Gym"],
    address: {
      locality: "Hooda sector",
      city: "Sirsa",
      state: "Haryana",
      pincode: 125058,
    },
    sharing: [
      {
        occupancy: 2,
        price: 6000,
        ac: true,
      },
      {
        occupancy: 3,
        price: 5500,
        ac: false,
      },
    ],
  },
  {
    id: 2,
    name: "PG2",
    description:
      "The Haven is a mixed-gender PG located in Gachibowli, Hyderabad. It is a spacious and well-maintained property with all the amenities you need for a comfortable stay. The Haven is close to all major landmarks, including Gachibowli Stadium, Inorbit Mall, and Necklace Road. It is also a short walk from the nearest metro station. The Haven is the perfect place for people who are looking for a safe and comfortable place to stay in Hyderabad.",
    image: pic2,
    price: 6000,
    type: "male",
    amenities: ["WiFi", "AC"],
    address: {
      locality: "Hooda sector",
      city: "Sirsa",
      state: "Haryana",
      pincode: 125058,
    },
    sharing: [
      {
        occupancy: 2,
        price: 6500,
        ac: true,
      },
      {
        occupancy: 3,
        price: 6000,
        ac: true,
      },
    ],
  },
  {
    id: 3,
    name: "PG3",
    description:
      "The Haven is a mixed-gender PG located in Gachibowli, Hyderabad. It is a spacious and well-maintained property with all the amenities you need for a comfortable stay. The Haven is close to all major landmarks, including Gachibowli Stadium, Inorbit Mall, and Necklace Road. It is also a short walk from the nearest metro station. The Haven is the perfect place for people who are looking for a safe and comfortable place to stay in Hyderabad.",
    price: 7000,
    image: pic3,
    type: "female",
    amenities: ["WiFi", "AC", "Swimming Pool"],
    address: {
      locality: "Hooda sector",
      city: "Sirsa",
      state: "Haryana",
      pincode: 125058,
    },
    sharing: [
      {
        occupancy: 2,
        price: 6000,
        ac: true,
      },
      {
        occupancy: 3,
        price: 5500,
        ac: false,
      },
    ],
  },
  {
    id: 4,
    name: "PG4",
    description:
      "The Haven is a mixed-gender PG located in Gachibowli, Hyderabad.",
    image: pic4,
    price: 8000,
    type: "co-living",
    amenities: [
      "WiFi",
      "AC",
      "Gym",
      "Swimming Pool",
      "laundry",
      "cleaning",
      "parking",
    ],
    address: {
      locality: "Hooda sector",
      city: "Sirsa",
      state: "Haryana",
      pincode: 125058,
    },
    sharing: [
      {
        occupancy: 2,
        price: 6000,
        ac: true,
      },
      {
        occupancy: 3,
        price: 5500,
        ac: false,
      },
    ],
  },
];

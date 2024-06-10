let products = [
  {
    id: "1",
    images: [
      "/assets/images/product-1.jpg",
      "/assets/images/gallery-1.jpg",
      "/assets/images/gallery-2.jpg",
      "/assets/images/gallery-3.jpg",
      "/assets/images/gallery-4.jpg",
    ],
    title: "Red Printed T-shirt",
    rating: 4,
    price: 50,
    description:
      "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout or denims for an evening out with the guys.",
    category: "T-shirt",
  },
  {
    id: "2",
    images: [
      "/assets/images/product-2.jpg",
      "/assets/images/product-2.1.jpg",
      "/assets/images/product-2.2.jpg",
    ],
    title: "HRX Casual Shoes",
    rating: 3.5,
    price: 75,
    description:
      "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout or denims for an evening out with the guys.",
    category: "Shoes",
  },
  {
    id: "3",
    images: [
      "/assets/images/product-3.jpg",
      "/assets/images/product-3.1.jpg",
      "/assets/images/product-3.2.jpg",
    ],
    title: "Olive Pants",
    rating: 4.5,
    price: 40,
    description:
      "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout or denims for an evening out with the guys.",
    category: "TrackPants",
  },
  {
    id: "4",
    images: [
      "/assets/images/product-4.jpg",
      "/assets/images/product-4.1.jpg",
      "/assets/images/product-4.2.jpg",
    ],
    title: "Puma Blue T-shirt",
    rating: 4,
    price: 80,
    description:
      "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout atau denims for an evening out with the guys.",
    category: "T-shirt",
  },
  {
    id: "5",
    images: [
      "/assets/images/product-5.jpg",
      "/assets/images/product-5.1.jpg",
      "/assets/images/product-5.2.jpg",
    ],
    title: "Canvas Shoes Grey",
    rating: 5,
    price: 100,
    description:
      "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout atau denims for an evening out with the guys.",
    category: "Shoes",
  },
  {
    id: "6",
    images: [
      "/assets/images/product-6.jpg",
      "/assets/images/product-6.1.jpg",
      "/assets/images/product-6.2.jpg",
    ],
    title: "Puma Black T-shirt",
    rating: 3,
    price: 20,
    description:
      "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout atau denims for an evening out with the guys.",
    category: "T-shirt",
  },
  {
    id: "7",
    images: [
      "/assets/images/product-7.jpg",
      "/assets/images/product-7.1.jpg",
      "/assets/images/product-7.2.jpg",
    ],
    title: "Black HRX Sneakers",
    rating: 4,
    price: 85,
    description:
      "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout atau denims for an evening out with the guys.",
    category: "Shoes",
  },
  {
    id: "8",
    images: [
      "/assets/images/product-8.jpg",
      "/assets/images/product-8.1.jpg",
      "/assets/images/product-8.2.jpg",
    ],
    title: "Sleek Comfy Boots",
    rating: 4.5,
    price: 110,
    description:
      "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout atau denims for an evening out with the guys.",
    category: "Shoes",
  },
  {
    id: "9",
    images: [
      "/assets/images/product-9.jpg",
      "/assets/images/product-9.1.jpg",
      "/assets/images/product-9.2.jpg",
    ],
    title: "Blue Nike Trouser",
    rating: 5,
    price: 60,
    description:
      "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout atau denims for an evening out with the guys.",
    category: "TrackPants",
  },
];

// Function untuk add produk
function addProduct(newProduct) {
  products.push(newProduct);
  console.log(`Berhasil untuk menmabhkan product dengan Id ${newProduct.id} `);
  console.log("Product List:", products);
}

// Function untuk remove product berdasarkan ID
function removeProductById(productId) {
  const initialLength = products.length;
  products = products.filter((product) => product.id !== productId);
  if (products.length < initialLength) {
    console.log(`Berhasil untuk menghapus product untuk Id ${productId}`);
  } else {
    console.log(`Terjadi error untuk Id ${productId} tidak ditemukan`);
  }
  console.log("Product Lits:", products);
}

// Function untuk mengedit product berdasarkan ID
function editProductNameById(productId, newTitle) {
  const product = products.find((product) => product.id === productId);
  if (product) {
    product.title = newTitle;
    console.log(`Berhasil mengupdate product untuk Id ${productId} `);
  } else {
    console.log(`Terjadi error untuk Id ${productId} tidak ditemukan`);
  }
  console.log("Product List", products);
}

// Menambahkan produk baru
const newProduct = {
  id: "10",
  images: ["/assets/images/product-10.jpg", "/assets/images/product-10.1.jpg"],
  title: "Shoes A",
  rating: 5,
  price: 150,
  description: "New Shoes",
  category: "Shoes",
};
addProduct(newProduct);

// Menghapus produk berdasarkan ID
removeProductById("1");

// Mengupdate nama produk berdasarkan ID
editProductNameById("2", "Shoes New HRX");

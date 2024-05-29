// Memanggil semua product
const getAllProducts = () => {
  axios
    .get("https://dummyjson.com/products")
    .then((response) => {
      const products = response.data.products;
      console.log("Semua produk:");
      console.log(products);
    })
    .catch((error) => {
      console.error("Error dalam mengambil product:", error);
    });
};

getAllProducts();

// Mengambil product berdasarkan id
const getProductById = async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log("Product dengan ID " + id + ":", response.data);
  } catch (error) {
    console.error("Error dalam mengambil produk:", error);
  }
};

getProductById(3);

//Menagmbil 5 produk pertama
const getFirstFiveProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    const firstFiveProducts = response.data.products.slice(0, 5);
    console.log("Lima produk pertama:");
    console.log(firstFiveProducts);
  } catch (error) {
    console.error("Error dalam mengambil produk:", error);
  }
};

getFirstFiveProducts();

//Memasukan link kepada variabel url
const url = "https://dummyjson.com/products";

//Mmebuat Product baru
const createProduct = async (newProduct) => {
  try {
    const response = await axios.post(url + "/add", newProduct, {
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log("Membuat produk: ", response.data);
  } catch (error) {
    console.error("Error ketika membuat produk:", error);
  }
};

//Mengupdtae Product
const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await axios.put(url + "/" + id, updatedProduct);
    console.log("Update produk: ", response.data);
  } catch (error) {
    console.error("Error ketika update produk:", error);
  }
};

//Mengahapus product
const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(url + "/" + id);
    console.log("Mendelete product: ", response.data);
  } catch (error) {
    console.error("Error ketika menghapus:", error);
  }
};

createProduct({
  title: "Product Baru",
  description: "Deskripsi baru",
  price: 50,
  brand: "Brand Baru",
  category: "category baru",
});

updateProduct(5, {
  title: "Product update",
  price: 100,
});

deleteProduct(5);

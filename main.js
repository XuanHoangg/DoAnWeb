let products = {
    data: [
        {
            productName: "nike air force 1 07",
            category: "LIFESTYLE",
            price: 30,
            image: "./img/stylelife/1.JPG",
            quantity: 1,
        },
        {
            productName: "nike dunk high retro",
            category: "LIFESTYLE",
            price: 49,
            image: "./img/stylelife/2.JPG",
            quantity: 1,
        },
        {
            productName: "nike air vapormax 2021 fk",
            category: "LIFESTYLE",
            price: 99,
            image: "./img/stylelife/3.JPG",
            quantity: 1,
        },
        {
            productName: "nike air max 270",
            category: "LIFESTYLE",
            price: 29,
            image: "./img/stylelife/4.JPG",
            quantity: 1,
        },
        {
            productName: "nike air max 290",
            category: "LIFESTYLE",
            price: 59,
            image: "./img/stylelife/5.JPG",
            quantity: 1,
        },

        /*jordan */

        {
            productName: "air jordan 1 mid",
            category: "JORDAN",
            price: 129,
            image: "./img/air/1.JPG",
            quantity: 1,
        },
        {
            productName: "jordan series ES",
            category: "JORDAN",
            price: 85,
            image: "./img/air/2.JPG",
            quantity: 1,
        },
        {
            productName: "air jordan dub zero",
            category: "JORDAN",
            price: 160,
            image: "./img/air/3.JPG",
            quantity: 1,
        },
        {
            productName: "air jordan XXXVII tatum",
            category: "JORDAN",
            price: 205,
            image: "./img/air/4.JPG",
            quantity: 1,
        },
        {
            productName: "air jordan 7 retro SE",
            category: "JORDAN",
            price: 210,
            image: "./img/air/5.JPG",
            quantity: 1,
        },
        {
            productName: "air jordan zoom cmft",
            category: "JORDAN",
            price: 150,
            image: "./img/air/6.JPG",
            quantity: 1,
        },

        /* BASEKETBALL */

        {
            productName: "Lebron XX trinity ",
            category: "BASEKETBALL",
            price: 200,
            image: "./img/baseketball/1.JPG",
            quantity: 1,
        },
        {
            productName: "nike air zoom g.t. cut 2 ",
            category: "BASEKETBALL",
            price: 170,
            image: "./img/baseketball/2.JPG",
            quantity: 1,
        },
        {
            productName: "zoom freak 4 birthstone ",
            category: "BASEKETBALL",
            price: 130,
            image: "./img/baseketball/3.JPG",
            quantity: 1,
        },
        {
            productName: "kd15 naphessa collier ",
            category: "BASEKETBALL",
            price: 150,
            image: "./img/baseketball/4.JPG",
            quantity: 1,
        },
        {
            productName: "kyrie low 5 ",
            category: "BASEKETBALL",
            price: 109,
            image: "./img/baseketball/5.JPG",
            quantity: 1,
        },
    ],
};

function displayProducts() {
    const items = products.data.reduce((result, product) => {
        return result + `
             <div class="col-sm-4 d-flex my-3 item">
                <div class="overlay">
                     <img class ="sale_img" src="${product.image}" alt="${product.id} width="200px" height="200px"">
                     
                </div>
                 <div class="sale_text">
                    <div>
                         <p class = "sale_decs">${product.productName}</p>
                         <p class = "sale_price">${product.price}$</p>
                         <span>
                            <button class ="btn btn-success" onclick="addToCart('${product.productName}')">
                                <i class="fa-solid fa-bag-shopping"></i> Add Cart
                            </button>
                        </span>
                    </div>
                 </div>
             </div>
        `
    }, "")
    document.querySelector(".product_item").innerHTML = items;
}
// displayProducts()

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const search = () => {
    const input = document.querySelector(".search").value;
    const newList = products.data.filter((item) => item.category === input)
    if (!input) {
        displayProducts()
    }
    else {
        const product = newList.reduce((result, product) => {
            return result + `
            <div class="col-sm-4 d-flex my-3 item">
            <div class="overlay">
                 <img class ="sale_img" src="${product.image}" alt="${product.id} width="200px" height="200px"">
                 
            </div>
             <div class="sale_text">
                <div>
                     <p class = "sale_decs">${product.productName}</p>
                     <p class = "sale_price">${product.price}$</p>
                     <span>
                        <button class ="btn btn-success" onclick="addToCart('${product.productName}')">
                            <i class="fa-solid fa-bag-shopping"></i> Add Cart
                        </button>
                    </span>
                </div>
             </div>
         </div>
            `
        }, "")
        document.querySelector(".product_item").innerHTML = product;
        product();
    }
}
search()
var cart = [];
const addToCart = (productName) => {
    //lấy sản phẩm ra từ object 
    const item = products.data.filter((item) => item.productName === productName);

    //kiểm tra trong giỏ hàng có sp hay chưa

    const index = cart.findIndex((product) => product === item[0])

    // index = -1 => sp đó chưa có trong giở hàng

    if (index === -1) {
        cart.push(...item);
    } else {
        cart[index].quantity += 1;
    }
    displayCart();
}
//hàm giảm số lượng sp
const decrease = (productName) => {
    const index = cart.findIndex((item) => item.productName === productName);

    if (cart[index].quantity !== 1) {
        cart[index].quantity -= 1;
    }
    else {
        cart.splice(index, 1)
    }
    displayCart()
}
//hàm tăng sl sp
const increase = (productName) => {
    const index = cart.findIndex((item) => item.productName === productName);
    cart[index].quantity += 1;
    displayCart()
}

function displayCart() {
    const output = cart.reduce((result, product) => {
        return result + `
        <tr>
             <td>
                  <img src="${product.image}" width="60px" height="60px">
             </td>
             <td class= "phoneName">${product.productName}</td>
             <td>${product.category}</td>
             <td>${product.price * product.quantity}$</td>

             <td>
                <button class ="btn btn-danger" onclick="decrease('${product.productName}')">-</button>
                ${product.quantity}
                <button class ="btn btn-success" onclick="increase('${product.productName}')">+</button>
             </td>
        </tr>
        `
    }, "")
    const tongTien = cart.reduce((result, item) => {
        return result + (item.price * item.quantity);
    }, 0)
    document.getElementById("tongTien").innerHTML = tongTien;
    document.querySelector("#cart-item").innerHTML = output;
}
document.getElementById("btn-purchase").addEventListener("click", () => {
    if (cart.length === 0) {
        false;
    } else {
        document.getElementById("pay-Modal").style.display = "block";
        const tongTien = cart.reduce((result, item) => {
            return result + (item.price * item.quantity);
        }, 0)
        document.getElementById("totalcart").innerHTML = tongTien;
        cart = [];
        displayCart();
    }
});

function end() {
    document.getElementById("pay-Modal").style.display = "none";
}
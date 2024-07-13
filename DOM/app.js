const products = [
    {
      name: "Wireless Mouse",
      price: 25.99,
      category: "Electronics",
    },
    {
      name: "Bluetooth Speaker",
      price: 45.99,
      category: "Electronics",
    },
    {
      name: "Running Shoes",
      price: 65.0,
      category: "Footwear",
    },
    {
      name: "Yoga Mat",
      price: 20.0,
      category: "Fitness",
    },
    {
      name: "Stainless Steel Water Bottle",
      price: 15.5,
      category: "Accessories",
    },
    {
      name: "Noise Cancelling Headphones",
      price: 99.99,
      category: "Electronics",
    },
    {
      name: "Smart Watch",
      price: 199.99,
      category: "Electronics",
    },
    {
      name: "Leather Wallet",
      price: 45.0,
      category: "Accessories",
    },
    {
      name: "Digital Camera",
      price: 399.99,
      category: "Electronics",
    },
    {
      name: "Gaming Keyboard",
      price: 89.99,
      category: "Electronics",
    },
    {
      name: "Sunglasses",
      price: 120.0,
      category: "Accessories",
    },
    {
      name: "Cookware Set",
      price: 250.0,
      category: "Home & Kitchen",
    },
    {
      name: "Electric Toothbrush",
      price: 75.0,
      category: "Personal Care",
    },
    {
      name: "Office Chair",
      price: 150.0,
      category: "Furniture",
    },
    {
      name: "Coffee Maker",
      price: 85.0,
      category: "Home & Kitchen",
    },
    {
      name: "Electric Kettle",
      price: 30.0,
      category: "Home & Kitchen",
    },
    {
      name: "Backpack",
      price: 60.0,
      category: "Accessories",
    },
    {
      name: "Standing Desk",
      price: 300.0,
      category: "Furniture",
    },
    {
      name: "Desk Lamp",
      price: 40.0,
      category: "Furniture",
    },
    {
      name: "Running T-shirt",
      price: 25.0,
      category: "Apparel",
    },
  ];
  
  const wrapper = document.querySelector('#wrapper');
  
  const groupedByCategory = Object.groupBy(products,(item) => item.category);
  console.log(groupedByCategory);
  
  Object.keys(groupedByCategory).forEach((category) => {
    const header = document.createElement("h2");
    header.innerText = category;
    wrapper.append(header);
    const ul = document.createElement('ul')
    groupedByCategory[category].forEach((product) => {
      const { price, name } = product;
      const li = document.createElement("li");
      li.innerHTML = `$(name) <span style="color: green;">$(price)</span>`;
      ul.append(li);
    });
    wrapper.appened(ul);
  });
  
  // task 1
  
  const ulMenu = document.querySelector('ul');
  const secondLi = ulMenu.querySelectorAll('li') [2];
  const fourthLi = ulMenu.querySelectorAll('li') [4];
  ulMenu.removeChild(secondLi);
  ulMenu.removeChild(fourthLi);
  
  //task 2
  
  ulMenu.classList.add('listItem');
  ulMenu.classList.add('list');
  
  
  // task 3
  const newLi = document.createElement('li');
  newLi.textContent = 'Bugatti';
  ulMenu.prepend(newLi);
  
  //task 4
  const lastLi = document.createElement('li');
  lastLi.textContent = 'Ford';
  ulMenu.appendChild(lastLi);
  
  //task 5
  const data = [
    { name: "firstName",placeholder: "Enter your first name",
      type: "text"},
      { name: "lastName", placeholder: "Enter your last name",
        type: "text"},
        { name: "password", placeholder: "Enter your password",
          type: "password"}
          { name: "confirm password", placeholder: "Confirm your password",
            type: "password"
           }
  ];
  const form = document.getElementsByTagName('form');
  data.forEach(field => {
    const input = document.createElement('input');
    input.name = field.name;
    input.placeholder = field.placeholder;
    input.type = field.type;
    form.appendChild(input);
  })
  
  
  //task 6
  const image = document.createElement('img');
  image.src =
  'https://kartinki.pics/uploads/posts/2021-07/thumbs/1626173615_53-kartinkin-com-p-krasivii-fon-priroda-krasivo-64.jpg'
  document.querySelector('body').appendChild(image)
  
  //task 7
  const p = document.querySelector('p');
  p.classList.remove('red', 'italic')
  
  //task 8
  const h1 = document.createElement('h1');
  h1.textContent = 'this is h1 tag';
  const wrapperDiv = document.getElementById('h1Wrapper');
  wrapperDiv.appendChild(h1)
  
  //task 9
  h1.classList.add('h1')
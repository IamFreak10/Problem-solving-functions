const formatValue = (
  value: number | string | boolean
): number | string | boolean | undefined => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = (value: string | any[]): number | undefined => {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

type BookObj = {
  title: string;
  rating: number;
};
const filterByRating = (books: BookObj[]): BookObj[] | undefined => {
  return books.filter((book) => book.rating >= 4);
};
// console.log(filterByRating(books));
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
type User = { id: number; name: string; email: string; isActive: boolean };
const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};
// console.log(filterActiveUsers(users));
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available:${book.isAvailable ? 'Yes' : 'NO'}`
  );
};
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

// printBookDetails(myBook);

// const getUniqueValues=(arr1:(number | string)[],arr2:(number | string)[])=>{
//   const hash
// }

const getUniqueValues=(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] =>{
const uniqueArr: (number | string)[] = [];
const seen: { [key: string]: boolean } = {};
let k = 0;
const hasedTable=(arr:(number | string)[]):void=>{
  for (let i = 0; i < arr.length; i++) {
  const value:(number | string) = arr[i];
  if (!seen[value]) {
    seen[value] = true;
    uniqueArr[k] = value;
    k++;
  } 
}
}
hasedTable(arr1);
hasedTable(arr2);
return uniqueArr

}
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// const array1 = ['a', 'b', 'c', 'd', 'e'];
// const array2 = ['c', 'd', 'e', 'f', 'g'];
// console.log(getUniqueValues(array1, array2));

type Products={
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice=(products:Products[]):number=>{
 return products.reduce((total,product)=>{
    const{price,quantity,discount}=product;
    if(discount){
      return total+=((price-price*(discount/100))*quantity)
    }
    else{
       return total+=(price*quantity)
    }
  },0)
}
const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
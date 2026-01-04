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

type BookObj = {
  title: string;
  rating: number;
};
const filterByRating = (books: BookObj[]): BookObj[] | undefined => {
  return books.filter((book) => book.rating >= 4);
};



type User = { id: number; name: string; email: string; isActive: boolean };
const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};




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

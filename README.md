#  Interview Questions Ans:
# What are some differences between interfaces and types in TypeScript?
Ans:
১.ইন্টারফেস টাইপ ইউনিয়ন বা ইন্টারসেকশন করতে পারে না,অন্যদিকে টাইপ ইউনিয়ন বা ইন্টারসেকশন ব্যাবহার করে আরো ফেলেক্সিবল ভাবে ব্যাবহার করা যায়
২.ইন্টারফেস দিয়ে  Class,Object এর structure এনফোরস করা যায় কিন্তু tupple,aliasunion ইউজ করতে পারে না,যেটা type আরও flexible, union, tuple, primitive alias, function signature সব করতে পারে।
৩.Interface একই নাম দিয়ে একাধিকবার declare করলে TypeScript এগুলোকে merge করে এবং combined structure তৈরি করে।type একবার declare করার পর আর একই নাম দিয়ে declare করলে error দেয়, merge করা যায় না।

# What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Ans:
TypeScript এ enum একটা namedd constant এর সেট,যা কোডকে readable এবং maintainable করে।এখানে আমি কম্পাইলারকে বলে দিবো যে কোন ভ্যালু গুলা এলাউড
Example:
Numeric Enum:
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

let move: Direction = Direction.Left;
console.log(move); // Output: 2

String Enum:
enum Status {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failed = "FAILED"
}

let currentStatus: Status = Status.Success;
console.log(currentStatus); // Output: SUCCESS

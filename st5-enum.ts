
type Usertype = { 
        name: string;
        age: number;
        hobbies: string[];
        role: number;
     };

enum Role { ADMIN = 50, READ_ONLY = 100, AUTHOR = 150 };


const user: Usertype = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};



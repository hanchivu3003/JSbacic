function user(name, id , age){
    this.name = name;
    this.id = id;
    this.age = age;
    this.getName = function(){
        return this.name + " " + this.id + this.age;
    }
}
var svnew = new user('han chi vu', 2022606818, 20)
console.log(svnew)
// sử dụng object prototype giúp thêm thuộc tính và phương thức ngoài hàm tạo
user.prototype.classname = 'khmt2';
console.log(svnew.classname);
user.prototype.getClassName = function(){
    return this.classname;
}
console.log(svnew.getClassName);
/*
Các hàm dựng JavaScript tích hợp
JavaScript có các hàm tạo tích hợp sẵn cho tất cả các đối tượng gốc:

new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object
*/


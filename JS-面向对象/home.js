/**
 * Created by home on 2017/10/12.
 */
// var person = {
//     name:"ye",
//     height:720,
//     age:22,
//     eat:function () {
//         alert(person.name+"和"+person.age)
//     }
// }
//
// // 直接添加对象属性，如果已经声明过的属性，就会修改值
// person.height = 750;
//
// alert(person.eat())

// function people() {
//
// }

// people.prototype = {
//     name:"ye",
//     age:30,
//     eat:function () {
//         alert("吃")
//     }
// }
// var p = new people()
// p.name = "wen"
// p.height = 750
// alert(p.height)



// 继承
// people.prototype.eat = function () {
//     alert("我在吃饭")
// }
// (function () {
//     function people() {
//
//     }
//     people.prototype = {
//         name:"ye",
//         eat:function () {
//             alert("我在吃饭")
//         }
//     }
//     //把 people 赋值给顶级的window 窗口进行外部操作，给外部调用一个接口
//     window.people = people
// }())
//
// var p = new people
// p.name = "wen"
// p.eat()
// alert(p.name)

// function student() {
//
// }
// // student 继承people
// student.prototype = new people();
//
// var stu = new student()
// //
// var superEat = student.prototype.eat;
// student.prototype.eat = function () {
//     // superEat.call(this)
//     alert("我是学生")
//
// }
//
// student.prototype.age = 22

// var p = new people()


// stu.eat()

// alert(stu.name+"和"+stu.age)
// superEat.call()

function person() {
   // 创建空对象
   var  _this = {
       name:"ye",
       age:22,
       height:175
   }
    // 创建属性方法
    _this.eat = function () {
        alert("在吃饭呢")
    }
    // person方法执行 返回内部创建的空对象
    return _this;
}
// 创建对象
var p = person()
p.eat()
// 继承
function teacher() {
    var _this =person();
    //复写父类方法/属性
    _this.eat = function () {
        alert("老师")
    }
    return _this
}

var t = teacher()
t.eat()

alert(t.name)







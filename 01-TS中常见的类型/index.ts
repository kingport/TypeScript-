// 静态类型
let age: number = 12;
let desc: string = "wdk";

// 对象类型
class Person {}
const teacher: {
  name: string;
  age: number;
} = {
  name: "wdk",
  age: 19,
};
const wdk: Person = new Person();

// 函数类型
const getTotal: () => number = () => {
  return 123;
};

// 联合类型
let tem: number | string = 123;
tem = "345";

// 数组
let arrTest: number[] = [1, 2, 3];
let arrTest1: string[] = ["1", "2"];

// 元组
let teacherInfo: [string, string, number] = ["wdk", "18", 23];
// type alias 类型别名
type User = { name: string; age: number };
/-----------------------------------------------------------------------------------------------------------------/;
/**
 * @description TS带来更好的通读性例如如下
 * 我们很容易的看出该函数的作用以及参数类型
 */
// 接口
interface Point {
  x: number;
  y: number;
}
function tsDemo(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
tsDemo({ x: 1, y: 2 });

/**
 * @description 类的定义与继承
 * Teacher类继承Person类的所有属性和方法
 * 在super里调用
 */
class Person {
  name = "wdk";
  getName() {
    return this.name;
  }
}

class Teacher extends Person {
  getTeacherName() {
    return "老师";
  }
  getName() {
    return super.getName() + "lee";
  }
}
const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
/-----------------------------------------------------------------------------------------------------------------/;
/**
 * @description 类中的访问类型和构造器
 * private,protected,public 访问类型
 * public 允许在类的内外中调用
 * private 允许在类的内部使用
 * protected 允许在类内及继承的子类中使用
 *
 */
class Person {
  public name: string;
  public sayHi() {
    console.log("hello");
  }
  private sayWdk() {
    this.name;
  }
}
const person = new Person();
person.name = "qiudefang";
person.sayHi();

class Person {
  constructor(public name: string) {}
}
class Teacher extends Person {
  constructor(public age: number) {
    super("wdk");
  }
}
const teacher = new Teacher(29);
console.log(teacher.age); // 可以访问该属性
console.log(teacher.name); // 也可以访问该属性

/-----------------------------------------------------------------------------------------------------------------/;
/**
 * @description 静态属性，setter getter
 * 例如：不允许外部new一个实例 只能访问该类的方法
 * 此时我们需要将类中的属性和方法私有化
 */
class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo("wdk");
    }
    return this.instance;
  }
}
const demo = Demo.getInstance();
// const demo1 = new Demo()// Erro 不允许在外部调用
console.log(demo.name); // 可以访问该属性

/-----------------------------------------------------------------------------------------------------------------/;
/**
 * @description 抽象类
 * 例子： 例如学生类和老师类都有属性name
 */
interface Person {
  name: string;
}
interface Teacher extends Person {
  teachAge: number;
}
interface Student extends Person {
  age: number;
}

const teacher = {
  name: "wdl",
  techAge: 12,
};
const student = {
  name: "wdk",
  age: 19,
};

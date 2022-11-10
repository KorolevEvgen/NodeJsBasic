// Node.js — платформа з відкритим кодом для виконання високопродуктивних мережевих застосунків,
// написаних мовою JavaScript:
// -- node.js надав можливість виконувати JavaScript-скрипти на сервері;
// -- відправляти користувачеві результат їхнього виконання;
//Для керування модулями використовується пакетний менеджер npm (node package manager).

// require - це щось схоже на імпорт(import) у react!!!
// fs - це FileSystem, він дає змогу працювати з файлами за допомогою своїх методів!!!

const fs = require('node:fs');
const builder = require('./students/createStudent');

// fs.readFile('./text.txt',(err,data)=>{
//     console.log(err,'ERR');
//
//     console.log(data.toString());
// });
// // readFile - метод читання файлу!!!
//
// fs.appendFile('./text.txt', 'HELLO CHAT \n',(err)=>{
//     console.log(err,'ERROR');
// });
// appendFile - метод за допомогою якого можна дописати в кінець якийсь параметр у створений файл!!!
// -- \n - дописання буде з нового рядка

// fs.writeFile('./text.txt','WRITE FILE',(err)=>{
//     console.log(err,'ERR');
// })
// writeFile - метод за допомогою якого в існойочому файлі видаляє все що було і записує своє!!!

// fs.readFile('./text.txt',(err, data)=> {
//     fs.appendFile('./copy.txt',data,(err)=>{})
// })

// fs.mkdir('./students',(err)=>{
//     console.log(err);
// });
// mkdir - метод роботи з директорією!!!

// fs.appendFile('./students/data.json',JSON.stringify({name:'Dima'}),(err)=>{
//     console.log(err);
// });
// створюємо файл з value(name:'Dima') у створеній директорії!!!

// fs.truncate('./text.txt',(err)=>{
//     console.log(err);
// });
// truncate - метод який очищає все у даному файлі за вказаним шляхом(path)!!!

// fs.unlink('./copy.txt',(err)=>{
//     console.log(err);
// });
// unlink - видаляє вказаний файл!!!

// fs.rmdir('./students',{recursive:true},(err)=>{
//     console.log(err);
// });
// rmdir - метод який видаляє цілу директорію!!!
// {recursive:true} - якщо директорія не пуста буде рекурсивно все видаляти.

// fs.rename('./text.txt', './user.txt',(err)=>{
//     console.log(err);
// });
// rename - метод переіменування!!!

// fs.rename('./text.txt','./users/user.txt',(err)=>{
//     console.log(err);
// });
// rename - переіменував файл та переніс у створену директорію!!!

// fs.copyFile('./users/user.txt','./copy.txt',(err)=>{
//     console.log(err);
// });
// copyFile - метод копіювання файл за шляхом!!!

// fs.readdir('./students',(err,files)=>{
//     console.log(files);
//
//     for (const fileName of files) {
//         fs.stat(`./students/${fileName}`,(err1,stats)=>{
//             console.log(`./students/${fileName}`);
//             console.log(stats.isDirectory());
//
//             if (stats.isDirectory()){
//                 fs.readFile(`./students/${fileName}`,(err2,data)=>{
//                     console.log(data.toString());
//                 })
//             }
//         })
//     }
//
// });
// readdir - метод читання директорії!!!

// fs.readdir('./students',{withFileTypes:true},(err,files)=>{
//     console.log(files);
//
//     for (const file of files) {
//         console.log(file.isFile());
//     }
// })

// let studentOne = builder.studentBuilder('Dima',23);
//
// console.log(studentOne);





























function showDialog(){
    var myString = ' '
    for(var param of arguments){
        console.log(param)
         myString +=`${param}`
    }
    console.log(myString)
}
showDialog('han', 'chi', 'vu');
// them key bang 1 bien
var iD = 'ID';

var myInfor = {
    hoTen : 'Han Chi Vu',
    tuoi : 19,
    diaChi : 'Yen Bai',
    [iD] : '2022606818',
    getId : function(){
        return this.iD
    } 
}
//them key
myInfor.email = 'HanChiVu30032005@gmail.com'
myInfor['my-email'] = 'vuchi@gmail.com'
//lay ra key, neu ko co se tra ve undifine
console.log(myInfor)
console.log(myInfor.hoTen)

//xoa key
delete myInfor.hoTen
console.log(myInfor.getId)





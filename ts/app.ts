/// <reference path="./utils.ts"/>
namespace Userkosabaikura {
    
    export class Userkodata extends Parent implements Userkodatakotype {
        //parent xa arko file ma, but tesko name pani same xa as ahile ko

        getName(){
            return this.name;
            // return "nirajan from the class inside the namespace and the class is being export"
        }
    }

}
//agi
// biome-ignore lint/style/useConst: <explanation>
let  u1 = new Userkosabaikura.Userkodata();
u1.setParentkoName("nirajan from the parent ->child ")
console.log(u1.getName());


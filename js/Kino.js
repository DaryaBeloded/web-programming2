export default class Kino {
  constructor(arr, universe, id) {
    this.arr = arr;
    this.universe = universe;
    this.id= id;
  }
  get info(){
    var list="";
    for(var i=0; i<this.arr.length; i++)
    {
      list+=this.arr[i].name+" ";
    }
      univer = this.universe.name
    return `universe: ${univer}, heroes: `+list;
  }
}

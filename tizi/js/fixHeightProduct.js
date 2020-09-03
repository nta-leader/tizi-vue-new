function maxHeight(items,end,start=0){
    if(end==start){
        return items[start].offsetHeight;
    }
    let a = maxHeight(items,end-1,0);
    let b = maxHeight(items,end,end);
    if(a > b){
        return a;
    }else{
        return b;
    }
}
document.addEventListener("DOMContentLoaded",function(){
    let category = document.getElementsByClassName('user-product');
    let max = maxHeight(category,category.length-1);
    console.log(max);
    for(let i=0; i < category.length; i++){
        category[i].style.height = max+"px";
    }
},false);
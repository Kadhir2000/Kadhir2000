orderData={
    "below 500":20,
    "500 To 1000":29,
    "1000 To 1500":29,
    "1500 To 2000":29,
    "Above 2000":29,

};
var sum=0;
var k=0;
for(var i in orderData){
    sum+=orderData[i];
    k++;
}
console.log("Total No of Order Placed in that resturent:" +sum);
console.log("The No Of Order Proportion Option:"+k);
var j=1;
for(var i in orderData){
    console.log("id:"+i);
    console.log("order:"+i);
    var p=(orderData[i]/sum);
    console.log("Order Percentage:"+ p*100);
    console.log("Resturent:Chennai Past Food");
    j++;
}
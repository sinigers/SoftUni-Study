function swimmingRecord(recordSec, widhtMeter, secPerMeter){
let resSec=Number (recordSec);
let widhtM=Number (widhtMeter);
let secMet=Number (secPerMeter);

let slowNum=Math.floor(widhtM/15);
let slowSec=slowNum*12.5;
let time=widhtM*secMet+slowSec;

if (resSec > time){
    console.log( `Yes, he succeeded! The new world record is ${(time).toFixed(2) } seconds.`);
}else if(resSec <= time){
    console.log(`No, he failed! He was ${(time-resSec).toFixed(2)} seconds slower.`);
}


}


swimmingRecord("55555.67","3017","5.03")

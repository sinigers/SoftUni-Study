function fishTank(width, depth, hight, percent) {
    let w = Number(width);
    let d = Number(depth);
    let h = Number(hight);
    let p = Number(percent);
 
    volume=w*d*h;
    volumeLitters=volume*0.001;
    litters=volumeLitters-(volumeLitters*(p/100));


    console.log(litters);
}

fishTank("85","75","47","17");




//length
    //length property, used to know the length of array
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log(arr.length);                        //10
    console.log( arr[0], arr[4], arr[9]);           //10 50 100
    console.log( arr[-1],arr[10] );                 //undefined undefined
    arr.length = 5;
    console.log( arr[0],arr[4],arr[5] );            //10 50 undefined

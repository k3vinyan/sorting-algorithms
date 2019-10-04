const array = [100, 80, 12, 58, 79, 294, 400, 3, 29, 55];

function bubbleSort(array) {
    let arr = array;
    let run = true;

    while(run) {
        run = false;
        
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i + 1], arr[i]]
                run = true;
            }
        }
    }
    console.log(arr)
    return arr;

  
}


bubbleSort(array)
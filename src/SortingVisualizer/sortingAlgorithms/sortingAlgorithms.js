
export const bubbleSort = (array) => {
    const animations = [];
    if (array.length === 1) return [];

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                animations.push([j,j+1]);
            }
        }
    }

    return animations;
}

export const selectionSort = (array) => {
    const animations = [];
    if (array.length === 1) return [];

    for (let i = 0; i < array.length-1; i++) {
        let ind=i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[ind])
                ind=j;
        }
        let temp = array[i];
        array[i] = array[ind];
        array[ind] = temp;
        animations.push([i,ind]);

    }

    return animations;
}
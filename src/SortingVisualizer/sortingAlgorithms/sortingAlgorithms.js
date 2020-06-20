
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
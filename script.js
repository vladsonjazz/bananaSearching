function searchBestPath(matrix){
        let result = 0;
        
        // Get the biggest value of first column
        let rowOne = 0;
        for(let i=0; i<matrix.length; i++){
            if(rowOne === 0 || matrix[i][0] > result){
                result = matrix[i][0];
                rowOne = i;
            }
        }
        console.log('col0 => ' + result);

        // Get the biggest value of next columns
        for(let j=1; j< matrix[0].length; j++){
        	
            let insideTop = rowOne - 1 >= 0;
            let insideBottom = rowOne + 1 < matrix.length;
            let topValue = (insideTop ? matrix[rowOne - 1][j] : 0);
            let middleValue = matrix[rowOne][j];
            let bottomValue = (insideBottom ? matrix[rowOne + 1][j] : 0);
            
            // When topValue is the biggest
            if(topValue > middleValue && topValue > bottomValue){
                result += topValue;
                rowOne = rowOne-1;
                console.log('col' + j + ' => ' + topValue);

            // When bottomValue is the biggest
            } else if (bottomValue > middleValue && bottomValue > topValue) {
                result += bottomValue;
                rowOne = rowOne+1;
                console.log('col' + j + ' => ' + bottomValue);

            // Otherwise middleValue is the biggest
            } else {
                result += middleValue;
                console.log('col' + j + ' => ' + middleValue);
            }
        }

        console.log('result ' + result);
        return result;
    }

//let param = [[1, 3, 3], [2, 1, 4], [0, 6, 4]];
//let param = [[1, 3, 1, 5], [2, 2, 4, 1], [5, 0, 2, 3], [0, 6, 1, 2]];
let param = [[10, 33, 13, 15], [22, 21, 4, 1], [5, 0, 2, 3], [0, 6, 14, 2]];
searchBestPath(param);

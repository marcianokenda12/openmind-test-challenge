function generateParantheses (n){
    const result=[];
    function backtrack(opencount, closecount, current ) {
        if (current.length === n ) {
            result.push(current);
            return;
        }
        if (opencount < n) {
            backtrack(opencount + 1, closecount, current );
        }
        if (closecount < opencount) {
            backtrack(opencount, closecount + 1, current );
        }
    }
    backtrack(0, 0);
    return result;
}

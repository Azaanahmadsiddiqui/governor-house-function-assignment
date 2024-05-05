// Question 3:

function firstRepeatedCharacter(str:any, n:any) {
        const charCount:any = {};
            for (let char of str) {
              charCount[char] = (charCount[char] || 0) + 1;
        
          if (charCount[char] === n) {
            return char;
        }
    }
    
     return null;
}

const str = "hello world";
const n = 2;
console.log("First character repeated", n, "times:", firstRepeatedCharacter(str, n)); // Output: 'l'

//Objective is the same as 'Shortest Word Distance', except a word can now
//repeat multiple times in the array

let words = ["practice", "makes", "perfect", "coding", "makes"]


//O(n) solution where n is the length of 'words'
//Similar solution to 'Shortest Word Distance' with one extra condition

let p1 = -1
let p2 = -1
let result = Infinity

for (let i = 0; i < words.length; i++) {
    if (words[i] == word1) {
        p1 = i
    }
    
    if (words[i] == word2) {
        
        //If we have the same word, then match the indices
        if (word1 == word2) {
            p1 = p2
        }
        
        p2 = i
    }
    
    if (p1 != -1 && p2 != -1) {
        result = Math.min(result, Math.abs(p2 - p1))
    }
}

return result
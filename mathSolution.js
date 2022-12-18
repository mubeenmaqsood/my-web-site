function isPalindrome(string){
    if(string.length > 10){
        document.getElementById('result').innerHTML = "Character is too long";
    }
    else{

    reverseString = "";
    for(let i=string.length-1;i>=0;i--){
        reverseString = reverseString + string[i];
    }
    
    if(reverseString === string ) {
        
        document.getElementById('result').innerHTML = "This is Palindrome";
    }
    else{
        document.getElementById('result').innerHTML = "This is not Palindrome";
    }
    }
}
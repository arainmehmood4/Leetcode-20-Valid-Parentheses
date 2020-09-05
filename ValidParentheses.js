/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s){
     if(s==""){
        return true;
    }
    let Stack=[];
    let dic={
        ')':'(', 
        '}':'{', 
        ']':'[',
    }
    for(let i=0; i<s.length; i++){
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
            Stack.push(s[i]);
        }
        let top=Stack.length-1;
        if(s[i]==')' || s[i]=='}' || s[i]==']'){ 
            if(dic[s[i]]==Stack[top] ){
                Stack.pop();
                top--;
            }       
            else {
                return false;
            }
        }
        if(Stack[0]==undefined && s[i+1]==undefined){
            return true; 
        }
    }
    return false;
};

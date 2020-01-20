Solution:
function str_len(value: string): number{ 
    let num: number = value.length; return num; 
}
function str_len_nospaces(value: string): number{
     let num: number = value.replace(/\s+/, "").length; return num; 
}

console.log("String length with spaces and all is: "+str_len("test 1")); 
console.log("String length with spaces not included in the count: " +str_len_nospaces("test 1"));
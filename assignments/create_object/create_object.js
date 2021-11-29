function CreateObject(arr) {
    // Write your code here
    const object={}
    for (var i=0; i<arr.length-1;i++){
        if(i%2==0){
            object[arr[i]]=arr[i+1]
        }
    }
    return object

}

module.exports = CreateObject;

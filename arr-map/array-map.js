export function toThePowerOf(array, exponent) {
    const newArray = array.map(item => Math.pow(item, exponent));  
    return newArray; 
}
  
export function capitalizeNames(array){
    const newArray = array.map(obj => {
        const newName = obj.name.charAt(0).toUpperCase() + obj.name.substr(1);
        return { ...obj, name: newName }; 
    });
    return newArray; 
}
  
export function printLog(message:any){
    return function(target: Object, propertyName: string, descriptor: PropertyDescriptor) {
 // Store Original Method Implemetation
 const originalMethod = descriptor.value;
    descriptor.value = function(...args:any) {
        const result = originalMethod.apply(this, args);
        const temp = 'Adding custom decorator string '+result+'--'+message;
        // Execute custom logic
        console.log(`-- ${propertyName}() returned: `, result); 
        return temp;
    } 
    return descriptor;
}
}
class Utils {
    static findUniqueElement(array) {
        if (!array instanceof Array) throw new TypeError("Argument mast be array.");
        let obj = {};
        for (let i = 0; i < array.length; i++) {
            let str = array[i];
            obj[str] = true;
        }
        return Object.keys(obj);
    }
}

export default Utils
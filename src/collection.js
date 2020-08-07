module.exports.Collection = class Collection {
    
    constructor(){
        this.collection = {}
    }

    /**
    * Set a new item in a collection or overrides the existing one when override param is true.
    * @param {*} key The key for the new item.
    * @param {*} value The value for the new item.
    * @param {boolean} override Setting this to true will override an existing item with the same key. Defaults to true.
    */
    set(
        key,
        value = false,
        override = true
    ) {
        if(this.has(key) && !override) return;
        this.collection[key] = value;
    }

    /**
    * Delete an item from the collection.
    * @param {*} key The key of the item you want to delete.
    */    
    delete(
        key
    ) {
        delete this.collection[key];
    }

    /**
    * Check if an item is in the collection.
    * @param {string} key
    * @returns {boolean}
    */
    has(
        key
    ) {
        if(Object.keys(this.collection).includes(key)) return true;
        return false;
    }

    /**
    * Get a item from the collection.
    * @param {*} key 
    */    
    get(key){
        return this.collection[key];
    }

    /**
    * Get the array of all the item keys.
    * @returns {Array}
    */    
    array(){
        return Object.keys(this.collection);
    }

    /**
    * Clear or reset the collection.
    */
    clear(){
        this.collection = {}
    }

    /**
    * Get the Collection Object.
    * @returns {object}
    */
    json(){
        return this.collection;
    }

    /**
    * Find a item, returns undefined if none is found.
    * @param {Function} fn The callback function which describes the item you want to find.
    */
    find(fn) {
        if(typeof fn !== 'function') throw new Error(`${fn} is not a valid function!`);

        for (let key of this.array()){
            let item = this.get(key);
            let prop = fn(item);

            if(prop) return item;
        }
    }
    
    /**
     * Run a foreach loop for each of the items in the collection.
     * @param {Function} fn
     */
    forEach(fn) {
        if(typeof fn !== 'function') throw new Error(`${fn} is not a valid function!`);

        this.array().forEach(key => {
            let props = this.get(key);
            fn(props);
        })
    }

    /**
     * Clone the collection.
     * @returns {Collection}
     */
    clone(){
        return this;
    }
}
import { LinkedList } from "./LinkedList.js";

export class HashMap{
    loadFactor = 0.75;
    capacity = 16;
    hashMap = [];

    // takes a key and produces a hash code with it
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    // takes two arguments: the first is a key, and the second is a value that is assigned to this key
    set(key, value){
        let map = this.hashMap;
        const hashCode = this.hash(key);
        const bucketItem = {[key]: value};

        if(map.length === 0){
            const bucket = new LinkedList();
            bucket.append(bucketItem);
            map[hashCode] = bucket;
            return;
        }
        const targetBucket = map[hashCode];
        if(targetBucket){
            if(targetBucket.contains(key)){
                const bucketItemIndex = targetBucket.findIndex(key);
                targetBucket.insertAt(bucketItemIndex, bucketItem);
            } else {
                const entryLimit = this.capacity * this.loadFactor;
                const currentEntryNum = this.length() + 1;
                if(currentEntryNum > entryLimit){
                    this.capacity = this.capacity * 2;
                    const currentEntries = this.entries();
                    this.reset(currentEntries);
                    map = this.hashMap;
                    const hashCode = this.hash(key);
                    const targetBucket = map[hashCode];
                    if(targetBucket){
                        if(targetBucket.contains(key)){
                            const bucketItemIndex = targetBucket.findIndex(key);
                            targetBucket.insertAt(bucketItemIndex, bucketItem);
                        } else{
                            targetBucket.append(bucketItem);
                        }
                    } else{
                        const bucket = new LinkedList();
                        bucket.append(bucketItem);
                        map[hashCode] = bucket;
                    }
                    
                }
                targetBucket.append(bucketItem);
            }    
        } else{
            const bucket = new LinkedList();
            bucket.append(bucketItem);
            map[hashCode] = bucket;
        }
        
        return;
    }

    // Moves entries from old bucket array to new bucket array
    reset(values){
        this.hashMap = [];
        let map = this.hashMap;
        for(const key of values){
            const keyOfKey = Object.keys(key);
            const hashCode = this.hash(keyOfKey[0]);
            const targetBucket = map[hashCode];
            if(targetBucket){
                if(targetBucket.contains(keyOfKey[0])){
                    const bucketItemIndex = targetBucket.findIndex(key);
                    targetBucket.insertAt(bucketItemIndex, key);
                } else {
                    targetBucket.append(key);
                }    
            } else{
                const bucket = new LinkedList();
                bucket.append(key);
                map[hashCode] = bucket;
            }
        }
        return;
    }

    // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null
    get(key){
        let map = this.hashMap;
        const hashCode = this.hash(key);
        const targetBucket = map[hashCode];
        const bucketItemIndex = targetBucket.findIndex(key);
        if(bucketItemIndex === -1){
            return null;
        } else {
            return targetBucket.at(bucketItemIndex)[key];
        }
    }

    // takes a key as an argument and returns true or false based on whether or not the key is in the hash map
    has(key){
        let map = this.hashMap;
        const hashCode = this.hash(key);
        const targetBucket = map[hashCode];
        return targetBucket.contains(key);
    }

    // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false
    remove(key){
        let map = this.hashMap;
        const hashCode = this.hash(key);
        const targetBucket = map[hashCode];
        if(targetBucket.contains(key)){
            const bucketItemIndex = targetBucket.findIndex(key);
            targetBucket.removeAt(bucketItemIndex);
            return true;
        } else {
            return false;
        }
    }

    // returns the number of stored keys in the hash map
    length(){
        let count = 0;
        let map =  this.hashMap;
        for(const bucket of map){
            if(bucket){
                count += bucket.size();
            }
        }
        return count;
    }

    // removes all entries in the hash map
    clear(){
        this.hashMap = [];
        return;
    }

    // returns an array containing all the keys inside the hash map
    keys(){
        let map = this.hashMap;
        let keys = [];
        for(const bucket of map){
            if(bucket){
                const keyArr = bucket.keys();
                for(let i = 0; i < keyArr.length; i++){
                    keys.push(keyArr[i][0]);
                }
                // let newArr = keys.push(keyArr[0][0]);
                // keys = newArr;
            }
        }
        return keys;
    }

    // returns an array containing all the values
    values(){
        let map = this.hashMap;
        let values = [];
        for(const bucket of map){
            if(bucket){
                const valueArr = bucket.values();
                for(let i = 0; i < valueArr.length; i++)
                values.push(valueArr[i][0]);
                // let newArr = ;
                // values = newArr;
            }
        }
        return values;
    }

    // returns an array that contains each key, value pair
    entries(){
        let map = this.hashMap;
        let entries = [];
        for(const bucket of map){
            if(bucket){
                let newArr = entries.concat(bucket.keyValuePairs());
                entries = newArr;
            }
        }
        return entries;
    }
}

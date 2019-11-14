class myEventEmitter {
    constructor() {
        this.eventName = {};
    }

    on(eventName, fn) {
        if(!this.eventName[eventName]) {
            this.eventName[eventName] = []
        }
        this.eventName[eventName].push(fn)
    }

    emit(eventName, ...data) {
        const funInfo = this._findEvent(eventName, data);

        if(!funInfo.fun) return;
        funInfo.fun(...data)
        return  () => {
            this.eventName[eventName].splice(funInfo.id, 1);
        };
    }
  
    _findEvent(eventName, data) {
        const arrFun = this.eventName[eventName];

        for (let i = 0; i <  arrFun.length; i++) {
            if(arrFun[i].length === data.length) 
                return { fun: arrFun[i], id: i}
        }
        return false;
    }
}

module.exports = {
    myEventEmitter
}
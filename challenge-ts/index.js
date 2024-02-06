"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GenericQueue_items;
class GenericQueue {
    constructor() {
        _GenericQueue_items.set(this, []
        // enqueue
        );
    }
    // enqueue
    enqueue(item) {
        __classPrivateFieldGet(this, _GenericQueue_items, "f").push(item);
    }
    // dequeue
    dequeue() {
        return __classPrivateFieldGet(this, _GenericQueue_items, "f").shift();
    }
    // peak
    peak() {
        return __classPrivateFieldGet(this, _GenericQueue_items, "f")[0];
    }
    // size
    size() {
        return __classPrivateFieldGet(this, _GenericQueue_items, "f").length;
    }
}
_GenericQueue_items = new WeakMap();
const strQ = new GenericQueue();
strQ.enqueue('helo');
console.log(strQ.peak());
strQ.dequeue();
strQ.enqueue('type');
console.log(strQ.size());
console.log(strQ.peak());

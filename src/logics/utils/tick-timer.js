export class TickTimer {
  constructor(time = 1000) {
    this.interval = setInterval(() => {
      if (this.isChanged) this.runCallbacks();
    }, time);

    this.callbacks = [];
    this.isChanged = false;
  }

  changed(c = true) {
    this.isChanged = c;
  }

  addCallback(callback) {
    if (typeof callback !== 'function') return false;

    return !!this.callbacks.push(callback);
  }

  runCallbacks() {
    this.changed(false);

    this.callbacks.forEach((callback) => callback());
  }

  clear() {
    if (this.interval) clearInterval(this.interval);
    return !!this.interval;
  }
}

export default TickTimer;

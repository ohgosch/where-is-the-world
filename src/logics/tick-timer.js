export class TickTimer {
  constructor(time = 1000) {
    this.interval = setInterval(() => {
      if (this.isChanged) this.runCallbacks();
    }, time);

    this.callbacks = [];
    this.isChanged = false;
  }

  /**
   * Change the current state
   *
   * @param {Boolean} c default: true
   */
  changed(c = true) {
    this.isChanged = c;
  }

  /**
   * Add callback
   *
   * @param {Function} callback
   */
  addCallback(callback) {
    if (typeof callback !== 'function') return false;

    return !!this.callbacks.push(callback);
  }

  /**
   * Run all callbacks
   */
  runCallbacks() {
    this.changed(false);

    this.callbacks.forEach((callback) => callback());
  }

  /**
   * Clear the interval
   */
  clear() {
    if (this.interval) clearInterval(this.interval);
    return !!this.interval;
  }
}

export default TickTimer;

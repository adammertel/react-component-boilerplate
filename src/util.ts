/**
 * return unique string value used mainly for generating id
 */
export var uuid = () =>
  Math.random()
    .toString(36)
    .substring(2) + Date.now().toString(36);

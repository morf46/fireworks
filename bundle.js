(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * Returns random integer, maximum is exclusive and the minimum is inclusive.
   * 
   * @param {number} min - Minimum - inclusive
   * @param {number} max - Maximum - exclusive
   */
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  /**
   * Return a random float.
   * The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max
   * @param {number} min 
   * @param {number} max 
   */

  function getRandomfloat(min, max) {
    return Math.random() * (max - min) + min;
  }
  /**
   * Returns a random bool
   * @return {Boolean} 
   */

  function getRandomBool() {
    return Math.round(Math.random()) === 1 ? true : false;
  }
  /**
   * Returns a random weighted bool
   *  0.6 returns true 60% of time.
   * @param {Number} weight 0.0 - 1.f 
   * @return {Boolean} 
   */

  function getRandomBoolWithWeight(weight) {
    var w = Clamp(weight, 0, 1);
    return Math.random() < w ? true : false;
  }
  /**
   * Convert Radians to Degrees
   * 
   * @param {Number} radians 
   * @return {Number} Degrees
   */

  function radiansToDegrees(radians) {
    var pi = Math.PI;
    return radians * (180 / pi);
  }
  /**
   * Returns a number whose value is limited to the given range.
   *
   * @param {Number} value The current value
   * @param {Number} min The lower boundary of the output range
   * @param {Number} max The upper boundary of the output range
   * @returns A number in the range [min, max]
    */

  function Clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  /**
   *linear interpolate between two values 
   * @param {number} value2 
   * @param {number} amount 
   * @param {number} value1 
   */

  function lerp(value1, value2, amount) {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return value1 + (value2 - value1) * amount;
  }

  /******************************************************
   ************** Simple ES6 Vector2 Class  **************
   ******************************************************
   * From https://gist.github.com/sbrl/69a8fa588865cacef9c0
   ******************************************************
  	 MORF CHANGES:
  	 Add function - addScaled(v,s)
  	 Add function - Lerp(v,f)
  	 Add function - crossProduct(v)
  	 Add function - setDirection(angle, dist)
  	 add function - findLookAtRotation(v)
  	 add function - findLookatRotationDegrees(v)
  	 add function - Distance(v)
  	 add function - Rotate2d(r)
  	 add fucntion - getAngle()
  	 
   */

  var Vector2 = /*#__PURE__*/function () {
    // Constructor
    function Vector2(inX, inY) {
      _classCallCheck(this, Vector2);

      if (typeof inX != "number") throw new Error("Invalid x value.");
      if (typeof inY != "number") throw new Error("Invalid y value."); // Store the (x, y) coordinates

      this.x = inX;
      this.y = inY;
    }
    /**
     * Add another Vector2 to this Vector2.
     * @param	{Vector2}	v	The Vector2 to add.
     * @return	{Vector2}	The current Vector2. useful for daisy-chaining calls.
     */


    _createClass(Vector2, [{
      key: "add",
      value: function add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
      }
      /**
       * Add another vector2 to this Vector2 scaling it first.
       * @param {Vector2} v  the vector2 to add
       * @param {Number} s  the scalar
       * @return {Vector2} The Current vector2.
       */

    }, {
      key: "addScaled",
      value: function addScaled(v, s) {
        this.x += v.x * s;
        this.y += v.y * s;
        return this;
      }
      /**
       * Take another Vector2 from this Vector2.
       * @param  {Vector2} v The Vector2 to subtrace from this one.
       * @return {Vector2}   The current Vector2. useful for daisy-chaining calls.
       */

    }, {
      key: "subtract",
      value: function subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
      }
      /**
       * Divide the current Vector2 by a given value.
       * @param  {Number|Vector2} value The number (or Vector2) to divide by.
       * @return {Vector2}	   The current Vector2. Useful for daisy-chaining calls.
       */

    }, {
      key: "divide",
      value: function divide(value) {
        if (value instanceof Vector2) {
          this.x /= value.x;
          this.y /= value.y;
        } else if (typeof value == "number") {
          this.x /= value;
          this.y /= value;
        } else throw new Error("Can't divide by non-number value.");

        return this;
      }
      /**
       * Multiply the current Vector2 by a given value.
       * @param  {Number|Vector2} value The number (or Vector2) to multiply the current Vector2 by.
       * @return {Vector2}	   The current Vector2. useful for daisy-chaining calls.
       */

    }, {
      key: "multiply",
      value: function multiply(value) {
        if (value instanceof Vector2) {
          this.x *= value.x;
          this.y *= value.y;
        } else if (typeof value == "number") {
          this.x *= value;
          this.y *= value;
        } else throw new Error("Can't multiply by non-number value.");

        return this;
      }
      /**
       * Sets vectors x and y from direction
       * 
       * @param {*} angle in Degrees
       * @param {*} dist length of the vector
       */

    }, {
      key: "setDirection",
      value: function setDirection(angle, dist) {
        dist = dist || 1;
        this.x = dist * Math.cos(angle / 360 * Math.PI * 2);
        this.y = dist * Math.sin(angle / 360 * Math.PI * 2);
        return this;
      }
    }, {
      key: "Distance",
      value:
      /**
       * Distance to other vector2
       * @param {Vector2} v 
       * @return {Number} distance
       */
      function Distance(v) {
        var dx = v.x - this.x;
        var dy = v.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
      }
    }, {
      key: "findLookAtRotation",
      value:
      /**
       * Find a rotation to point at Target location.
       * @param {Vector2} v Vector2 to look at 
       * @return {Number} Angle in radians
       */
      function findLookAtRotation(v) {
        cross = this.crossProduct(v);
        dot = this.dotProduct(v);
        return Math.atan2(cross, dot);
      }
      /**
       * Find a rotation to point at Target location.
       * @param {Vector2} v Vector2 to look at
       * @return The angle in Degrees
       */

    }, {
      key: "findLookAtRotationDegrees",
      value: function findLookAtRotationDegrees(v) {
        return radiansToDegrees(this.findLookAtRotation(v));
      }
      /**
       * Move the Vector2 towards the given Vector2 by the given amount.
       * @param  {Vector2} v      The Vector2 to move towards.
       * @param  {Number} amount The distance to move towards the given Vector2.
       */

    }, {
      key: "moveTowards",
      value: function moveTowards(v, amount) {
        // From http://stackoverflow.com/a/2625107/1460422
        var dir = new Vector2(v.x - this.x, v.y - this.y).limitTo(amount);
        this.x += dir.x;
        this.y += dir.y;
        return this;
      }
      /**
       * Rounds the x and y components of this Vector2 down to the next integer.
       * @return	{Vector2}	This Vector2 - useful for diasy-chaining.
       */

    }, {
      key: "floor",
      value: function floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
      }
      /**
       * Rounds the x and y components of this Vector2 up to the next integer.
       * @return	{Vector2}	This Vector2 - useful for diasy-chaining.
       */

    }, {
      key: "ceil",
      value: function ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
      }
      /**
       * Rounds the x and y components of this Vector2 to the nearest integer.
       * @return	{Vector2}	This Vector2 - useful for diasy-chaining.
       */

    }, {
      key: "round",
      value: function round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
      }
      /**
       * Calculates the 'area' of this Vector2 and returns the result.
       * In other words, returns x * y. Useful if you're using a Vector2 to store 
       * a size.
       * @return {Number} The 'area' of this Vector2.
       */

    }, {
      key: "area",
      value: function area() {
        return this.x * this.y;
      }
      /**
       * Snaps this Vector2 to an imaginary square grid with the specified sized 
       * squares.
       * @param	{Number}	grid_size	The size of the squares on the imaginary  grid to which to snap.
       * @return	{Vector2}	The current Vector2 - useful for daisy-chaining.
       */

    }, {
      key: "snapTo",
      value: function snapTo(grid_size) {
        this.x = Math.floor(this.x / grid_size) * grid_size;
        this.y = Math.floor(this.y / grid_size) * grid_size;
        return this;
      }
      /**
       * Limit the length of the current Vector2 to value without changing the
       * direction in which the Vector2 is pointing.
       * @param  {Number} value The number to limit the current Vector2's length to.
       * @return {Vector2}	   The current Vector2. Useful for daisy-chaining calls.
       */

    }, {
      key: "limitTo",
      value: function limitTo(value) {
        if (typeof value != "number") throw new Error("Can't limit to non-number value.");

        if (this.length > value) {
          this.divide(this.length);
          this.multiply(value);
        }

        return this;
      }
      /**
       * Like limitTo(), but explicitly sets the length of the Vector2 without changing the direction.
       * In other words, it acts like limitTo, but also scales up small Vector2s to match the specified length.
       * @param	{Number}	value	The length to set the Vector2 to.
       */

    }, {
      key: "setTo",
      value: function setTo(value) {
        if (typeof value != "number") throw new Error("Can't limit to non-number value.");
        this.divide(this.length);
        this.multiply(value);
        return this;
      }
      /**
       * Return the cross product of the current Vector2 and another Vector2.
       * 
       * @param {Vector2} v  The Other Vector2
       * @return {Vector2}	 The current Vector2. Useful for daisy-chaining calls.
       */

    }, {
      key: "crossProduct",
      value: function crossProduct(v) {
        return this.x * v.y - this.y * v.x;
      }
      /**
       * Return the dot product of the current Vector2 and another Vector2.
       * @param  {Vector2} v   The other Vector2 we should calculate the dot product with.
       * @return {Number}	 This schould be an number
       */

    }, {
      key: "dotProduct",
      value: function dotProduct(v) {
        return this.x * v.x + this.y * v.y;
      }
      /**
       * Calculate the angle, in radians, from north to another Vector2.
       * @param	{Vector2}	v	The other Vector2 to which to calculate the angle.
       * @return	{Vector2}	The current Vector2. Useful for daisy-chaining calls.
       */

    }, {
      key: "angleFrom",
      value: function angleFrom(v) {
        // From http://stackoverflow.com/a/16340752/1460422
        var angle = Math.atan2(v.y - this.y, v.x - this.x);
        angle += Math.PI / 2;
        if (angle < 0) angle += Math.PI * 2;
        return angle;
      }
      /**
       * Return Angle in radians
       * 
       * @return {Number} Vector angle in Radians
       */

    }, {
      key: "getAngle",
      value: function getAngle() {
        return Math.atan2(this.y, this.x);
      }
      /**
       * Rotate Vector by radians
       * @param {number} r Magnitude in Radians
       * @return {Vector2}	The current Vector2. Useful for daisy-chaining calls.
       */

    }, {
      key: "rotate2D",
      value: function rotate2D(r) {
        var cos = Math.cos(r);
        var sin = Math.sin(r);
        this.x = cos * this.x - sin * this.y;
        this.y = sin * this.x + cos * this.y;
        return this;
      }
      /**
       * Interpolates between this and another vector by given factor
       * @param {*} v The other Vector2
       * @param {*} f the factor
       * @return The Current Vector2
       */

    }, {
      key: "lerp",
      value: function lerp(v, f) {
        this.x = this.x + (v.x - this.x) * f;
        this.y = this.y + (v.y - this.y) * f;
        return this;
      }
      /**
       * Clones the current Vector2.
       * @return {Vector2} A clone of the current Vector2. Very useful for passing around copies of a Vector2 if you don't want the original to be altered.
       */

    }, {
      key: "clone",
      value: function clone() {
        return new Vector2(this.x, this.y);
      }
      /*
       * Returns a representation of the current Vector2 as a string.
       * @returns {string} A representation of the current Vector2 as a string.
       */

    }, {
      key: "toString",
      value: function toString() {
        return "(".concat(this.x, ", ").concat(this.y, ")");
      }
      /**
       * Whether the Vector2 is equal to another Vector2.
       * @param  {Vector2} v The Vector2 to compare to.
       * @return {boolean}  Whether the current Vector2 is equal to the given Vector2.
       */

    }, {
      key: "equalTo",
      value: function equalTo(v) {
        return this.x == v.x && this.y == v.y;
      }
      /**
       * Get the unit Vector2 of the current Vector2 - that is a Vector2 poiting in the same direction with a length of 1. Note that this does *not* alter the original Vector2.
       * @return {Vector2} The current Vector2's unit form.
       */

    }, {
      key: "unitVector2",
      get: function get() {
        var length = this.length;
        return new Vector2(this.x / length, this.y / length);
      }
      /**
       * Get the length of the current Vector2.
       * @return {Number} The length of the current Vector2.
       */

    }, {
      key: "length",
      get: function get() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
      /**
       * Get the value of the minimum component of the Vector2.
       * @return {Number} The minimum component of the Vector2.
       */

    }, {
      key: "minComponent",
      get: function get() {
        if (Math.abs(this.x) < Math.abs(this.y)) return this.x;
        return this.y;
      }
      /**
       * Get the value of the maximum component of the Vector2.
       * @return {Number} The maximum component of the Vector2.
       */

    }, {
      key: "maxComponent",
      get: function get() {
        if (Math.abs(this.x) > Math.abs(this.y)) return this.x;
        return this.y;
      }
    }]);

    return Vector2;
  }();
  /**
   * Returns a new Vector2 based on an angle and a length.
   * @param	{Number}	angle	The angle, in radians.
   * @param	{Number}	length	The length.
   * @return	{Vector2}	A new Vector2 that represents the (x, y) of the specified angle and length.
   */


  Vector2.fromBearing = function (angle, length) {
    return new Vector2(length * Math.cos(angle), length * Math.sin(angle));
  };

  Vector2.zero = new Vector2(0, 0);
  Vector2.one = new Vector2(1, 1);

  /**
   * @private
   */
  var branch_pool = [];
  /**
   * A branch within a BVH
   * @class
   * @private
   */

  var BVHBranch = /*#__PURE__*/function () {
    /**
     * @constructor
     */
    function BVHBranch() {
      _classCallCheck(this, BVHBranch);

      /** @private */
      this._bvh_parent = null;
      /** @private */

      this._bvh_branch = true;
      /** @private */

      this._bvh_left = null;
      /** @private */

      this._bvh_right = null;
      /** @private */

      this._bvh_sort = 0;
      /** @private */

      this._bvh_min_x = 0;
      /** @private */

      this._bvh_min_y = 0;
      /** @private */

      this._bvh_max_x = 0;
      /** @private */

      this._bvh_max_y = 0;
    }
    /**
     * Returns a branch from the branch pool or creates a new branch
     * @returns {BVHBranch}
     */


    _createClass(BVHBranch, null, [{
      key: "getBranch",
      value: function getBranch() {
        if (branch_pool.length) {
          return branch_pool.pop();
        }

        return new BVHBranch();
      }
      /**
       * Releases a branch back into the branch pool
       * @param {BVHBranch} branch The branch to release
       */

    }, {
      key: "releaseBranch",
      value: function releaseBranch(branch) {
        branch_pool.push(branch);
      }
      /**
       * Sorting callback used to sort branches by deepest first
       * @param {BVHBranch} a The first branch
       * @param {BVHBranch} b The second branch
       * @returns {Number}
       */

    }, {
      key: "sortBranches",
      value: function sortBranches(a, b) {
        return a.sort > b.sort ? -1 : 1;
      }
    }]);

    return BVHBranch;
  }();

  /**
   * A Bounding Volume Hierarchy (BVH) used to find potential collisions quickly
   * @class
   * @private
   */

  var BVH = /*#__PURE__*/function () {
    /**
     * @constructor
     */
    function BVH() {
      _classCallCheck(this, BVH);

      /** @private */
      this._hierarchy = null;
      /** @private */

      this._bodies = [];
      /** @private */

      this._dirty_branches = [];
    }
    /**
     * Inserts a body into the BVH
     * @param {Circle|Polygon|Point} body The body to insert
     * @param {Boolean} [updating = false] Set to true if the body already exists in the BVH (used internally when updating the body's position)
     */


    _createClass(BVH, [{
      key: "insert",
      value: function insert(body) {
        var updating = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (!updating) {
          var bvh = body._bvh;

          if (bvh && bvh !== this) {
            throw new Error('Body belongs to another collision system');
          }

          body._bvh = this;

          this._bodies.push(body);
        }

        var polygon = body._polygon;
        var body_x = body.x;
        var body_y = body.y;

        if (polygon) {
          if (body._dirty_coords || body.x !== body._x || body.y !== body._y || body.angle !== body._angle || body.scale_x !== body._scale_x || body.scale_y !== body._scale_y) {
            body._calculateCoords();
          }
        }

        var padding = body._bvh_padding;
        var radius = polygon ? 0 : body.radius * body.scale;
        var body_min_x = (polygon ? body._min_x : body_x - radius) - padding;
        var body_min_y = (polygon ? body._min_y : body_y - radius) - padding;
        var body_max_x = (polygon ? body._max_x : body_x + radius) + padding;
        var body_max_y = (polygon ? body._max_y : body_y + radius) + padding;
        body._bvh_min_x = body_min_x;
        body._bvh_min_y = body_min_y;
        body._bvh_max_x = body_max_x;
        body._bvh_max_y = body_max_y;
        var current = this._hierarchy;
        var sort = 0;

        if (!current) {
          this._hierarchy = body;
        } else {
          while (true) {
            // Branch
            if (current._bvh_branch) {
              var left = current._bvh_left;
              var left_min_y = left._bvh_min_y;
              var left_max_x = left._bvh_max_x;
              var left_max_y = left._bvh_max_y;
              var left_new_min_x = body_min_x < left._bvh_min_x ? body_min_x : left._bvh_min_x;
              var left_new_min_y = body_min_y < left_min_y ? body_min_y : left_min_y;
              var left_new_max_x = body_max_x > left_max_x ? body_max_x : left_max_x;
              var left_new_max_y = body_max_y > left_max_y ? body_max_y : left_max_y;
              var left_volume = (left_max_x - left._bvh_min_x) * (left_max_y - left_min_y);
              var left_new_volume = (left_new_max_x - left_new_min_x) * (left_new_max_y - left_new_min_y);
              var left_difference = left_new_volume - left_volume;
              var right = current._bvh_right;
              var right_min_x = right._bvh_min_x;
              var right_min_y = right._bvh_min_y;
              var right_max_x = right._bvh_max_x;
              var right_max_y = right._bvh_max_y;
              var right_new_min_x = body_min_x < right_min_x ? body_min_x : right_min_x;
              var right_new_min_y = body_min_y < right_min_y ? body_min_y : right_min_y;
              var right_new_max_x = body_max_x > right_max_x ? body_max_x : right_max_x;
              var right_new_max_y = body_max_y > right_max_y ? body_max_y : right_max_y;
              var right_volume = (right_max_x - right_min_x) * (right_max_y - right_min_y);
              var right_new_volume = (right_new_max_x - right_new_min_x) * (right_new_max_y - right_new_min_y);
              var right_difference = right_new_volume - right_volume;
              current._bvh_sort = sort++;
              current._bvh_min_x = left_new_min_x < right_new_min_x ? left_new_min_x : right_new_min_x;
              current._bvh_min_y = left_new_min_y < right_new_min_y ? left_new_min_y : right_new_min_y;
              current._bvh_max_x = left_new_max_x > right_new_max_x ? left_new_max_x : right_new_max_x;
              current._bvh_max_y = left_new_max_y > right_new_max_y ? left_new_max_y : right_new_max_y;
              current = left_difference <= right_difference ? left : right;
            } // Leaf
            else {
                var grandparent = current._bvh_parent;
                var parent_min_x = current._bvh_min_x;
                var parent_min_y = current._bvh_min_y;
                var parent_max_x = current._bvh_max_x;
                var parent_max_y = current._bvh_max_y;
                var new_parent = current._bvh_parent = body._bvh_parent = BVHBranch.getBranch();
                new_parent._bvh_parent = grandparent;
                new_parent._bvh_left = current;
                new_parent._bvh_right = body;
                new_parent._bvh_sort = sort++;
                new_parent._bvh_min_x = body_min_x < parent_min_x ? body_min_x : parent_min_x;
                new_parent._bvh_min_y = body_min_y < parent_min_y ? body_min_y : parent_min_y;
                new_parent._bvh_max_x = body_max_x > parent_max_x ? body_max_x : parent_max_x;
                new_parent._bvh_max_y = body_max_y > parent_max_y ? body_max_y : parent_max_y;

                if (!grandparent) {
                  this._hierarchy = new_parent;
                } else if (grandparent._bvh_left === current) {
                  grandparent._bvh_left = new_parent;
                } else {
                  grandparent._bvh_right = new_parent;
                }

                break;
              }
          }
        }
      }
      /**
       * Removes a body from the BVH
       * @param {Circle|Polygon|Point} body The body to remove
       * @param {Boolean} [updating = false] Set to true if this is a temporary removal (used internally when updating the body's position)
       */

    }, {
      key: "remove",
      value: function remove(body) {
        var updating = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (!updating) {
          var bvh = body._bvh;

          if (bvh && bvh !== this) {
            throw new Error('Body belongs to another collision system');
          }

          body._bvh = null;

          this._bodies.splice(this._bodies.indexOf(body), 1);
        }

        if (this._hierarchy === body) {
          this._hierarchy = null;
          return;
        }

        var parent = body._bvh_parent;
        var grandparent = parent._bvh_parent;
        var parent_left = parent._bvh_left;
        var sibling = parent_left === body ? parent._bvh_right : parent_left;
        sibling._bvh_parent = grandparent;

        if (sibling._bvh_branch) {
          sibling._bvh_sort = parent._bvh_sort;
        }

        if (grandparent) {
          if (grandparent._bvh_left === parent) {
            grandparent._bvh_left = sibling;
          } else {
            grandparent._bvh_right = sibling;
          }

          var branch = grandparent;

          while (branch) {
            var left = branch._bvh_left;
            var left_min_x = left._bvh_min_x;
            var left_min_y = left._bvh_min_y;
            var left_max_x = left._bvh_max_x;
            var left_max_y = left._bvh_max_y;
            var right = branch._bvh_right;
            var right_min_x = right._bvh_min_x;
            var right_min_y = right._bvh_min_y;
            var right_max_x = right._bvh_max_x;
            var right_max_y = right._bvh_max_y;
            branch._bvh_min_x = left_min_x < right_min_x ? left_min_x : right_min_x;
            branch._bvh_min_y = left_min_y < right_min_y ? left_min_y : right_min_y;
            branch._bvh_max_x = left_max_x > right_max_x ? left_max_x : right_max_x;
            branch._bvh_max_y = left_max_y > right_max_y ? left_max_y : right_max_y;
            branch = branch._bvh_parent;
          }
        } else {
          this._hierarchy = sibling;
        }

        BVHBranch.releaseBranch(parent);
      }
      /**
       * Updates the BVH. Moved bodies are removed/inserted.
       */

    }, {
      key: "update",
      value: function update() {
        var bodies = this._bodies;
        var count = bodies.length;

        for (var i = 0; i < count; ++i) {
          var body = bodies[i];
          var update = false;

          if (!update && body.padding !== body._bvh_padding) {
            body._bvh_padding = body.padding;
            update = true;
          }

          if (!update) {
            var polygon = body._polygon;

            if (polygon) {
              if (body._dirty_coords || body.x !== body._x || body.y !== body._y || body.angle !== body._angle || body.scale_x !== body._scale_x || body.scale_y !== body._scale_y) {
                body._calculateCoords();
              }
            }

            var x = body.x;
            var y = body.y;
            var radius = polygon ? 0 : body.radius * body.scale;
            var min_x = polygon ? body._min_x : x - radius;
            var min_y = polygon ? body._min_y : y - radius;
            var max_x = polygon ? body._max_x : x + radius;
            var max_y = polygon ? body._max_y : y + radius;
            update = min_x < body._bvh_min_x || min_y < body._bvh_min_y || max_x > body._bvh_max_x || max_y > body._bvh_max_y;
          }

          if (update) {
            this.remove(body, true);
            this.insert(body, true);
          }
        }
      }
      /**
       * Returns a list of potential collisions for a body
       * @param {Circle|Polygon|Point} body The body to test
       * @returns {Array<Body>}
       */

    }, {
      key: "potentials",
      value: function potentials(body) {
        var results = [];
        var min_x = body._bvh_min_x;
        var min_y = body._bvh_min_y;
        var max_x = body._bvh_max_x;
        var max_y = body._bvh_max_y;
        var current = this._hierarchy;
        var traverse_left = true;

        if (!current || !current._bvh_branch) {
          return results;
        }

        while (current) {
          if (traverse_left) {
            traverse_left = false;
            var left = current._bvh_branch ? current._bvh_left : null;

            while (left && left._bvh_max_x >= min_x && left._bvh_max_y >= min_y && left._bvh_min_x <= max_x && left._bvh_min_y <= max_y) {
              current = left;
              left = current._bvh_branch ? current._bvh_left : null;
            }
          }

          var branch = current._bvh_branch;
          var right = branch ? current._bvh_right : null;

          if (right && right._bvh_max_x > min_x && right._bvh_max_y > min_y && right._bvh_min_x < max_x && right._bvh_min_y < max_y) {
            current = right;
            traverse_left = true;
          } else {
            if (!branch && current !== body) {
              results.push(current);
            }

            var parent = current._bvh_parent;

            if (parent) {
              while (parent && parent._bvh_right === current) {
                current = parent;
                parent = current._bvh_parent;
              }

              current = parent;
            } else {
              break;
            }
          }
        }

        return results;
      }
      /**
       * Draws the bodies within the BVH to a CanvasRenderingContext2D's current path
       * @param {CanvasRenderingContext2D} context The context to draw to
       */

    }, {
      key: "draw",
      value: function draw(context) {
        var bodies = this._bodies;
        var count = bodies.length;

        for (var i = 0; i < count; ++i) {
          bodies[i].draw(context);
        }
      }
      /**
       * Draws the BVH to a CanvasRenderingContext2D's current path. This is useful for testing out different padding values for bodies.
       * @param {CanvasRenderingContext2D} context The context to draw to
       */

    }, {
      key: "drawBVH",
      value: function drawBVH(context) {
        var current = this._hierarchy;
        var traverse_left = true;

        while (current) {
          if (traverse_left) {
            traverse_left = false;
            var left = current._bvh_branch ? current._bvh_left : null;

            while (left) {
              current = left;
              left = current._bvh_branch ? current._bvh_left : null;
            }
          }

          var branch = current._bvh_branch;
          var min_x = current._bvh_min_x;
          var min_y = current._bvh_min_y;
          var max_x = current._bvh_max_x;
          var max_y = current._bvh_max_y;
          var right = branch ? current._bvh_right : null;
          context.moveTo(min_x, min_y);
          context.lineTo(max_x, min_y);
          context.lineTo(max_x, max_y);
          context.lineTo(min_x, max_y);
          context.lineTo(min_x, min_y);

          if (right) {
            current = right;
            traverse_left = true;
          } else {
            var parent = current._bvh_parent;

            if (parent) {
              while (parent && parent._bvh_right === current) {
                current = parent;
                parent = current._bvh_parent;
              }

              current = parent;
            } else {
              break;
            }
          }
        }
      }
    }]);

    return BVH;
  }();

  /**
   * An object used to collect the detailed results of a collision test
   *
   * > **Note:** It is highly recommended you recycle the same Result object if possible in order to avoid wasting memory
   * @class
   */
  var Result =
  /**
   * @constructor
   */
  function Result() {
    _classCallCheck(this, Result);

    /**
     * @desc True if a collision was detected
     * @type {Boolean}
     */
    this.collision = false;
    /**
     * @desc The source body tested
     * @type {Circle|Polygon|Point}
     */

    this.a = null;
    /**
     * @desc The target body tested against
     * @type {Circle|Polygon|Point}
     */

    this.b = null;
    /**
     * @desc True if A is completely contained within B
     * @type {Boolean}
     */

    this.a_in_b = false;
    /**
     * @desc True if B is completely contained within A
     * @type {Boolean}
     */

    this.a_in_b = false;
    /**
     * @desc The magnitude of the shortest axis of overlap
     * @type {Number}
     */

    this.overlap = 0;
    /**
     * @desc The X direction of the shortest axis of overlap
     * @type {Number}
     */

    this.overlap_x = 0;
    /**
     * @desc The Y direction of the shortest axis of overlap
     * @type {Number}
     */

    this.overlap_y = 0;
  };

  /**
   * Determines if two bodies are colliding using the Separating Axis Theorem
   * @private
   * @param {Circle|Polygon|Point} a The source body to test
   * @param {Circle|Polygon|Point} b The target body to test against
   * @param {Result} [result = null] A Result object on which to store information about the collision
   * @param {Boolean} [aabb = true] Set to false to skip the AABB test (useful if you use your own collision heuristic)
   * @returns {Boolean}
   */
  function SAT(a, b) {
    var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var aabb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var a_polygon = a._polygon;
    var b_polygon = b._polygon;
    var collision = false;

    if (result) {
      result.a = a;
      result.b = b;
      result.a_in_b = true;
      result.b_in_a = true;
      result.overlap = null;
      result.overlap_x = 0;
      result.overlap_y = 0;
    }

    if (a_polygon) {
      if (a._dirty_coords || a.x !== a._x || a.y !== a._y || a.angle !== a._angle || a.scale_x !== a._scale_x || a.scale_y !== a._scale_y) {
        a._calculateCoords();
      }
    }

    if (b_polygon) {
      if (b._dirty_coords || b.x !== b._x || b.y !== b._y || b.angle !== b._angle || b.scale_x !== b._scale_x || b.scale_y !== b._scale_y) {
        b._calculateCoords();
      }
    }

    if (!aabb || aabbAABB(a, b)) {
      if (a_polygon && a._dirty_normals) {
        a._calculateNormals();
      }

      if (b_polygon && b._dirty_normals) {
        b._calculateNormals();
      }

      collision = a_polygon && b_polygon ? polygonPolygon(a, b, result) : a_polygon ? polygonCircle(a, b, result, false) : b_polygon ? polygonCircle(b, a, result, true) : circleCircle(a, b, result);
    }

    if (result) {
      result.collision = collision;
    }

    return collision;
  }
  /**
   * Determines if two bodies' axis aligned bounding boxes are colliding
   * @param {Circle|Polygon|Point} a The source body to test
   * @param {Circle|Polygon|Point} b The target body to test against
   */

  function aabbAABB(a, b) {
    var a_polygon = a._polygon;
    var a_x = a_polygon ? 0 : a.x;
    var a_y = a_polygon ? 0 : a.y;
    var a_radius = a_polygon ? 0 : a.radius * a.scale;
    var a_min_x = a_polygon ? a._min_x : a_x - a_radius;
    var a_min_y = a_polygon ? a._min_y : a_y - a_radius;
    var a_max_x = a_polygon ? a._max_x : a_x + a_radius;
    var a_max_y = a_polygon ? a._max_y : a_y + a_radius;
    var b_polygon = b._polygon;
    var b_x = b_polygon ? 0 : b.x;
    var b_y = b_polygon ? 0 : b.y;
    var b_radius = b_polygon ? 0 : b.radius * b.scale;
    var b_min_x = b_polygon ? b._min_x : b_x - b_radius;
    var b_min_y = b_polygon ? b._min_y : b_y - b_radius;
    var b_max_x = b_polygon ? b._max_x : b_x + b_radius;
    var b_max_y = b_polygon ? b._max_y : b_y + b_radius;
    return a_min_x < b_max_x && a_min_y < b_max_y && a_max_x > b_min_x && a_max_y > b_min_y;
  }
  /**
   * Determines if two polygons are colliding
   * @param {Polygon} a The source polygon to test
   * @param {Polygon} b The target polygon to test against
   * @param {Result} [result = null] A Result object on which to store information about the collision
   * @returns {Boolean}
   */


  function polygonPolygon(a, b) {
    var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var a_count = a._coords.length;
    var b_count = b._coords.length; // Handle points specially

    if (a_count === 2 && b_count === 2) {
      var _a_coords = a._coords;
      var _b_coords = b._coords;

      if (result) {
        result.overlap = 0;
      }

      return _a_coords[0] === _b_coords[0] && _a_coords[1] === _b_coords[1];
    }

    var a_coords = a._coords;
    var b_coords = b._coords;
    var a_normals = a._normals;
    var b_normals = b._normals;

    if (a_count > 2) {
      for (var ix = 0, iy = 1; ix < a_count; ix += 2, iy += 2) {
        if (separatingAxis(a_coords, b_coords, a_normals[ix], a_normals[iy], result)) {
          return false;
        }
      }
    }

    if (b_count > 2) {
      for (var _ix = 0, _iy = 1; _ix < b_count; _ix += 2, _iy += 2) {
        if (separatingAxis(a_coords, b_coords, b_normals[_ix], b_normals[_iy], result)) {
          return false;
        }
      }
    }

    return true;
  }
  /**
   * Determines if a polygon and a circle are colliding
   * @param {Polygon} a The source polygon to test
   * @param {Circle} b The target circle to test against
   * @param {Result} [result = null] A Result object on which to store information about the collision
   * @param {Boolean} [reverse = false] Set to true to reverse a and b in the result parameter when testing circle->polygon instead of polygon->circle
   * @returns {Boolean}
   */


  function polygonCircle(a, b) {
    var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var reverse = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var a_coords = a._coords;
    var a_edges = a._edges;
    var a_normals = a._normals;
    var b_x = b.x;
    var b_y = b.y;
    var b_radius = b.radius * b.scale;
    var b_radius2 = b_radius * 2;
    var radius_squared = b_radius * b_radius;
    var count = a_coords.length;
    var a_in_b = true;
    var b_in_a = true;
    var overlap = null;
    var overlap_x = 0;
    var overlap_y = 0; // Handle points specially

    if (count === 2) {
      var coord_x = b_x - a_coords[0];
      var coord_y = b_y - a_coords[1];
      var length_squared = coord_x * coord_x + coord_y * coord_y;

      if (length_squared > radius_squared) {
        return false;
      }

      if (result) {
        var length = Math.sqrt(length_squared);
        overlap = b_radius - length;
        overlap_x = coord_x / length;
        overlap_y = coord_y / length;
        b_in_a = false;
      }
    } else {
      for (var ix = 0, iy = 1; ix < count; ix += 2, iy += 2) {
        var _coord_x = b_x - a_coords[ix];

        var _coord_y = b_y - a_coords[iy];

        var edge_x = a_edges[ix];
        var edge_y = a_edges[iy];
        var dot = _coord_x * edge_x + _coord_y * edge_y;
        var region = dot < 0 ? -1 : dot > edge_x * edge_x + edge_y * edge_y ? 1 : 0;
        var tmp_overlapping = false;
        var tmp_overlap = 0;
        var tmp_overlap_x = 0;
        var tmp_overlap_y = 0;

        if (result && a_in_b && _coord_x * _coord_x + _coord_y * _coord_y > radius_squared) {
          a_in_b = false;
        }

        if (region) {
          var left = region === -1;
          var other_x = left ? ix === 0 ? count - 2 : ix - 2 : ix === count - 2 ? 0 : ix + 2;
          var other_y = other_x + 1;
          var coord2_x = b_x - a_coords[other_x];
          var coord2_y = b_y - a_coords[other_y];
          var edge2_x = a_edges[other_x];
          var edge2_y = a_edges[other_y];
          var dot2 = coord2_x * edge2_x + coord2_y * edge2_y;
          var region2 = dot2 < 0 ? -1 : dot2 > edge2_x * edge2_x + edge2_y * edge2_y ? 1 : 0;

          if (region2 === -region) {
            var target_x = left ? _coord_x : coord2_x;
            var target_y = left ? _coord_y : coord2_y;

            var _length_squared = target_x * target_x + target_y * target_y;

            if (_length_squared > radius_squared) {
              return false;
            }

            if (result) {
              var _length = Math.sqrt(_length_squared);

              tmp_overlapping = true;
              tmp_overlap = b_radius - _length;
              tmp_overlap_x = target_x / _length;
              tmp_overlap_y = target_y / _length;
              b_in_a = false;
            }
          }
        } else {
          var normal_x = a_normals[ix];
          var normal_y = a_normals[iy];

          var _length2 = _coord_x * normal_x + _coord_y * normal_y;

          var absolute_length = _length2 < 0 ? -_length2 : _length2;

          if (_length2 > 0 && absolute_length > b_radius) {
            return false;
          }

          if (result) {
            tmp_overlapping = true;
            tmp_overlap = b_radius - _length2;
            tmp_overlap_x = normal_x;
            tmp_overlap_y = normal_y;

            if (b_in_a && _length2 >= 0 || tmp_overlap < b_radius2) {
              b_in_a = false;
            }
          }
        }

        if (tmp_overlapping && (overlap === null || overlap > tmp_overlap)) {
          overlap = tmp_overlap;
          overlap_x = tmp_overlap_x;
          overlap_y = tmp_overlap_y;
        }
      }
    }

    if (result) {
      result.a_in_b = reverse ? b_in_a : a_in_b;
      result.b_in_a = reverse ? a_in_b : b_in_a;
      result.overlap = overlap;
      result.overlap_x = reverse ? -overlap_x : overlap_x;
      result.overlap_y = reverse ? -overlap_y : overlap_y;
    }

    return true;
  }
  /**
   * Determines if two circles are colliding
   * @param {Circle} a The source circle to test
   * @param {Circle} b The target circle to test against
   * @param {Result} [result = null] A Result object on which to store information about the collision
   * @returns {Boolean}
   */


  function circleCircle(a, b) {
    var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var a_radius = a.radius * a.scale;
    var b_radius = b.radius * b.scale;
    var difference_x = b.x - a.x;
    var difference_y = b.y - a.y;
    var radius_sum = a_radius + b_radius;
    var length_squared = difference_x * difference_x + difference_y * difference_y;

    if (length_squared > radius_sum * radius_sum) {
      return false;
    }

    if (result) {
      var length = Math.sqrt(length_squared);
      result.a_in_b = a_radius <= b_radius && length <= b_radius - a_radius;
      result.b_in_a = b_radius <= a_radius && length <= a_radius - b_radius;
      result.overlap = radius_sum - length;
      result.overlap_x = difference_x / length;
      result.overlap_y = difference_y / length;
    }

    return true;
  }
  /**
   * Determines if two polygons are separated by an axis
   * @param {Array<Number[]>} a_coords The coordinates of the polygon to test
   * @param {Array<Number[]>} b_coords The coordinates of the polygon to test against
   * @param {Number} x The X direction of the axis
   * @param {Number} y The Y direction of the axis
   * @param {Result} [result = null] A Result object on which to store information about the collision
   * @returns {Boolean}
   */


  function separatingAxis(a_coords, b_coords, x, y) {
    var result = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var a_count = a_coords.length;
    var b_count = b_coords.length;

    if (!a_count || !b_count) {
      return true;
    }

    var a_start = null;
    var a_end = null;
    var b_start = null;
    var b_end = null;

    for (var ix = 0, iy = 1; ix < a_count; ix += 2, iy += 2) {
      var dot = a_coords[ix] * x + a_coords[iy] * y;

      if (a_start === null || a_start > dot) {
        a_start = dot;
      }

      if (a_end === null || a_end < dot) {
        a_end = dot;
      }
    }

    for (var _ix2 = 0, _iy2 = 1; _ix2 < b_count; _ix2 += 2, _iy2 += 2) {
      var _dot = b_coords[_ix2] * x + b_coords[_iy2] * y;

      if (b_start === null || b_start > _dot) {
        b_start = _dot;
      }

      if (b_end === null || b_end < _dot) {
        b_end = _dot;
      }
    }

    if (a_start > b_end || a_end < b_start) {
      return true;
    }

    if (result) {
      var overlap = 0;

      if (a_start < b_start) {
        result.a_in_b = false;

        if (a_end < b_end) {
          overlap = a_end - b_start;
          result.b_in_a = false;
        } else {
          var option1 = a_end - b_start;
          var option2 = b_end - a_start;
          overlap = option1 < option2 ? option1 : -option2;
        }
      } else {
        result.b_in_a = false;

        if (a_end > b_end) {
          overlap = a_start - b_end;
          result.a_in_b = false;
        } else {
          var _option = a_end - b_start;

          var _option2 = b_end - a_start;

          overlap = _option < _option2 ? _option : -_option2;
        }
      }

      var current_overlap = result.overlap;
      var absolute_overlap = overlap < 0 ? -overlap : overlap;

      if (current_overlap === null || current_overlap > absolute_overlap) {
        var sign = overlap < 0 ? -1 : 1;
        result.overlap = absolute_overlap;
        result.overlap_x = x * sign;
        result.overlap_y = y * sign;
      }
    }

    return false;
  }

  /**
   * The base class for bodies used to detect collisions
   * @class
   * @protected
   */

  var Body = /*#__PURE__*/function () {
    /**
     * @constructor
     * @param {Number} [x = 0] The starting X coordinate
     * @param {Number} [y = 0] The starting Y coordinate
     * @param {Number} [padding = 0] The amount to pad the bounding volume when testing for potential collisions
     */
    function Body() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, Body);

      /**
       * @desc The X coordinate of the body
       * @type {Number}
       */
      this.x = x;
      /**
       * @desc The Y coordinate of the body
       * @type {Number}
       */

      this.y = y;
      /**
       * @desc The amount to pad the bounding volume when testing for potential collisions
       * @type {Number}
       */

      this.padding = padding;
      /** @private */

      this._circle = false;
      /** @private */

      this._polygon = false;
      /** @private */

      this._point = false;
      /** @private */

      this._bvh = null;
      /** @private */

      this._bvh_parent = null;
      /** @private */

      this._bvh_branch = false;
      /** @private */

      this._bvh_padding = padding;
      /** @private */

      this._bvh_min_x = 0;
      /** @private */

      this._bvh_min_y = 0;
      /** @private */

      this._bvh_max_x = 0;
      /** @private */

      this._bvh_max_y = 0;
    }
    /**
     * Determines if the body is colliding with another body
     * @param {Circle|Polygon|Point} target The target body to test against
     * @param {Result} [result = null] A Result object on which to store information about the collision
     * @param {Boolean} [aabb = true] Set to false to skip the AABB test (useful if you use your own potential collision heuristic)
     * @returns {Boolean}
     */


    _createClass(Body, [{
      key: "collides",
      value: function collides(target) {
        var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var aabb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        return SAT(this, target, result, aabb);
      }
      /**
       * Returns a list of potential collisions
       * @returns {Array<Body>}
       */

    }, {
      key: "potentials",
      value: function potentials() {
        var bvh = this._bvh;

        if (bvh === null) {
          throw new Error('Body does not belong to a collision system');
        }

        return bvh.potentials(this);
      }
      /**
       * Removes the body from its current collision system
       */

    }, {
      key: "remove",
      value: function remove() {
        var bvh = this._bvh;

        if (bvh) {
          bvh.remove(this, false);
        }
      }
      /**
       * Creates a {@link Result} used to collect the detailed results of a collision test
       */

    }, {
      key: "createResult",
      value: function createResult() {
        return new Result();
      }
      /**
       * Creates a Result used to collect the detailed results of a collision test
       */

    }], [{
      key: "createResult",
      value: function createResult() {
        return new Result();
      }
    }]);

    return Body;
  }();

  /**
   * A circle used to detect collisions
   * @class
   */

  var Circle = /*#__PURE__*/function (_Body) {
    _inherits(Circle, _Body);

    var _super = _createSuper(Circle);

    /**
     * @constructor
     * @param {Number} [x = 0] The starting X coordinate
     * @param {Number} [y = 0] The starting Y coordinate
     * @param {Number} [radius = 0] The radius
     * @param {Number} [scale = 1] The scale
     * @param {Number} [padding = 0] The amount to pad the bounding volume when testing for potential collisions
     */
    function Circle() {
      var _this;

      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var padding = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      _classCallCheck(this, Circle);

      _this = _super.call(this, x, y, padding);
      /**
       * @desc
       * @type {Number}
       */

      _this.radius = radius;
      /**
       * @desc
       * @type {Number}
       */

      _this.scale = scale;
      return _this;
    }
    /**
     * Draws the circle to a CanvasRenderingContext2D's current path
     * @param {CanvasRenderingContext2D} context The context to add the arc to
     */


    _createClass(Circle, [{
      key: "draw",
      value: function draw(context) {
        var x = this.x;
        var y = this.y;
        var radius = this.radius * this.scale;
        context.moveTo(x + radius, y);
        context.arc(x, y, radius, 0, Math.PI * 2);
      }
    }]);

    return Circle;
  }(Body);

  /**
   * A polygon used to detect collisions
   * @class
   */

  var Polygon = /*#__PURE__*/function (_Body) {
    _inherits(Polygon, _Body);

    var _super = _createSuper(Polygon);

    /**
     * @constructor
     * @param {Number} [x = 0] The starting X coordinate
     * @param {Number} [y = 0] The starting Y coordinate
     * @param {Array<Number[]>} [points = []] An array of coordinate pairs making up the polygon - [[x1, y1], [x2, y2], ...]
     * @param {Number} [angle = 0] The starting rotation in radians
     * @param {Number} [scale_x = 1] The starting scale along the X axis
     * @param {Number} [scale_y = 1] The starting scale long the Y axis
     * @param {Number} [padding = 0] The amount to pad the bounding volume when testing for potential collisions
     */
    function Polygon() {
      var _this;

      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var points = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var angle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var scale_x = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var scale_y = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var padding = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

      _classCallCheck(this, Polygon);

      _this = _super.call(this, x, y, padding);
      /**
       * @desc The angle of the body in radians
       * @type {Number}
       */

      _this.angle = angle;
      /**
       * @desc The scale of the body along the X axis
       * @type {Number}
       */

      _this.scale_x = scale_x;
      /**
       * @desc The scale of the body along the Y axis
       * @type {Number}
       */

      _this.scale_y = scale_y;
      /** @private */

      _this._polygon = true;
      /** @private */

      _this._x = x;
      /** @private */

      _this._y = y;
      /** @private */

      _this._angle = angle;
      /** @private */

      _this._scale_x = scale_x;
      /** @private */

      _this._scale_y = scale_y;
      /** @private */

      _this._min_x = 0;
      /** @private */

      _this._min_y = 0;
      /** @private */

      _this._max_x = 0;
      /** @private */

      _this._max_y = 0;
      /** @private */

      _this._points = null;
      /** @private */

      _this._coords = null;
      /** @private */

      _this._edges = null;
      /** @private */

      _this._normals = null;
      /** @private */

      _this._dirty_coords = true;
      /** @private */

      _this._dirty_normals = true;
      Polygon.prototype.setPoints.call(_assertThisInitialized(_this), points);
      return _this;
    }
    /**
     * Draws the polygon to a CanvasRenderingContext2D's current path
     * @param {CanvasRenderingContext2D} context The context to add the shape to
     */


    _createClass(Polygon, [{
      key: "draw",
      value: function draw(context) {
        if (this._dirty_coords || this.x !== this._x || this.y !== this._y || this.angle !== this._angle || this.scale_x !== this._scale_x || this.scale_y !== this._scale_y) {
          this._calculateCoords();
        }

        var coords = this._coords;

        if (coords.length === 2) {
          context.moveTo(coords[0], coords[1]);
          context.arc(coords[0], coords[1], 1, 0, Math.PI * 2);
        } else {
          context.moveTo(coords[0], coords[1]);

          for (var i = 2; i < coords.length; i += 2) {
            context.lineTo(coords[i], coords[i + 1]);
          }

          if (coords.length > 4) {
            context.lineTo(coords[0], coords[1]);
          }
        }
      }
      /**
       * Sets the points making up the polygon. It's important to use this function when changing the polygon's shape to ensure internal data is also updated.
       * @param {Array<Number[]>} new_points An array of coordinate pairs making up the polygon - [[x1, y1], [x2, y2], ...]
       */

    }, {
      key: "setPoints",
      value: function setPoints(new_points) {
        var count = new_points.length;
        this._points = new Float64Array(count * 2);
        this._coords = new Float64Array(count * 2);
        this._edges = new Float64Array(count * 2);
        this._normals = new Float64Array(count * 2);
        var points = this._points;

        for (var i = 0, ix = 0, iy = 1; i < count; ++i, ix += 2, iy += 2) {
          var new_point = new_points[i];
          points[ix] = new_point[0];
          points[iy] = new_point[1];
        }

        this._dirty_coords = true;
      }
      /**
       * Calculates and caches the polygon's world coordinates based on its points, angle, and scale
       */

    }, {
      key: "_calculateCoords",
      value: function _calculateCoords() {
        var x = this.x;
        var y = this.y;
        var angle = this.angle;
        var scale_x = this.scale_x;
        var scale_y = this.scale_y;
        var points = this._points;
        var coords = this._coords;
        var count = points.length;
        var min_x;
        var max_x;
        var min_y;
        var max_y;

        for (var ix = 0, iy = 1; ix < count; ix += 2, iy += 2) {
          var coord_x = points[ix] * scale_x;
          var coord_y = points[iy] * scale_y;

          if (angle) {
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            var tmp_x = coord_x;
            var tmp_y = coord_y;
            coord_x = tmp_x * cos - tmp_y * sin;
            coord_y = tmp_x * sin + tmp_y * cos;
          }

          coord_x += x;
          coord_y += y;
          coords[ix] = coord_x;
          coords[iy] = coord_y;

          if (ix === 0) {
            min_x = max_x = coord_x;
            min_y = max_y = coord_y;
          } else {
            if (coord_x < min_x) {
              min_x = coord_x;
            } else if (coord_x > max_x) {
              max_x = coord_x;
            }

            if (coord_y < min_y) {
              min_y = coord_y;
            } else if (coord_y > max_y) {
              max_y = coord_y;
            }
          }
        }

        this._x = x;
        this._y = y;
        this._angle = angle;
        this._scale_x = scale_x;
        this._scale_y = scale_y;
        this._min_x = min_x;
        this._min_y = min_y;
        this._max_x = max_x;
        this._max_y = max_y;
        this._dirty_coords = false;
        this._dirty_normals = true;
      }
      /**
       * Calculates the normals and edges of the polygon's sides
       */

    }, {
      key: "_calculateNormals",
      value: function _calculateNormals() {
        var coords = this._coords;
        var edges = this._edges;
        var normals = this._normals;
        var count = coords.length;

        for (var ix = 0, iy = 1; ix < count; ix += 2, iy += 2) {
          var next = ix + 2 < count ? ix + 2 : 0;
          var x = coords[next] - coords[ix];
          var y = coords[next + 1] - coords[iy];
          var length = x || y ? Math.sqrt(x * x + y * y) : 0;
          edges[ix] = x;
          edges[iy] = y;
          normals[ix] = length ? y / length : 0;
          normals[iy] = length ? -x / length : 0;
        }

        this._dirty_normals = false;
      }
    }]);

    return Polygon;
  }(Body);

  /**
   * A point used to detect collisions
   * @class
   */

  var Point = /*#__PURE__*/function (_Polygon) {
    _inherits(Point, _Polygon);

    var _super = _createSuper(Point);

    /**
     * @constructor
     * @param {Number} [x = 0] The starting X coordinate
     * @param {Number} [y = 0] The starting Y coordinate
     * @param {Number} [padding = 0] The amount to pad the bounding volume when testing for potential collisions
     */
    function Point() {
      var _this;

      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, Point);

      _this = _super.call(this, x, y, [[0, 0]], 0, 1, 1, padding);
      /** @private */

      _this._point = true;
      return _this;
    }

    return Point;
  }(Polygon);
  Point.prototype.setPoints = undefined;

  /**
   * A collision system used to track bodies in order to improve collision detection performance
   * @class
   */

  var Collisions = /*#__PURE__*/function () {
    /**
     * @constructor
     */
    function Collisions() {
      _classCallCheck(this, Collisions);

      /** @private */
      this._bvh = new BVH();
    }
    /**
     * Creates a {@link Circle} and inserts it into the collision system
     * @param {Number} [x = 0] The starting X coordinate
     * @param {Number} [y = 0] The starting Y coordinate
     * @param {Number} [radius = 0] The radius
     * @param {Number} [scale = 1] The scale
     * @param {Number} [padding = 0] The amount to pad the bounding volume when testing for potential collisions
     * @returns {Circle}
     */


    _createClass(Collisions, [{
      key: "createCircle",
      value: function createCircle() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        var padding = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var body = new Circle(x, y, radius, scale, padding);

        this._bvh.insert(body);

        return body;
      }
      /**
       * Creates a {@link Polygon} and inserts it into the collision system
       * @param {Number} [x = 0] The starting X coordinate
       * @param {Number} [y = 0] The starting Y coordinate
       * @param {Array<Number[]>} [points = []] An array of coordinate pairs making up the polygon - [[x1, y1], [x2, y2], ...]
       * @param {Number} [angle = 0] The starting rotation in radians
       * @param {Number} [scale_x = 1] The starting scale along the X axis
       * @param {Number} [scale_y = 1] The starting scale long the Y axis
       * @param {Number} [padding = 0] The amount to pad the bounding volume when testing for potential collisions
       * @returns {Polygon}
       */

    }, {
      key: "createPolygon",
      value: function createPolygon() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var points = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [[0, 0]];
        var angle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var scale_x = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
        var scale_y = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
        var padding = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
        var body = new Polygon(x, y, points, angle, scale_x, scale_y, padding);

        this._bvh.insert(body);

        return body;
      }
      /**
       * Creates a {@link Point} and inserts it into the collision system
       * @param {Number} [x = 0] The starting X coordinate
       * @param {Number} [y = 0] The starting Y coordinate
       * @param {Number} [padding = 0] The amount to pad the bounding volume when testing for potential collisions
       * @returns {Point}
       */

    }, {
      key: "createPoint",
      value: function createPoint() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var body = new Point(x, y, padding);

        this._bvh.insert(body);

        return body;
      }
      /**
       * Creates a {@link Result} used to collect the detailed results of a collision test
       */

    }, {
      key: "createResult",
      value: function createResult() {
        return new Result();
      }
      /**
       * Creates a Result used to collect the detailed results of a collision test
       */

    }, {
      key: "insert",
      value:
      /**
       * Inserts bodies into the collision system
       * @param {...Circle|...Polygon|...Point} bodies
       */
      function insert() {
        for (var _len = arguments.length, bodies = new Array(_len), _key = 0; _key < _len; _key++) {
          bodies[_key] = arguments[_key];
        }

        for (var _i = 0, _bodies = bodies; _i < _bodies.length; _i++) {
          var body = _bodies[_i];

          this._bvh.insert(body, false);
        }

        return this;
      }
      /**
       * Removes bodies from the collision system
       * @param {...Circle|...Polygon|...Point} bodies
       */

    }, {
      key: "remove",
      value: function remove() {
        for (var _len2 = arguments.length, bodies = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          bodies[_key2] = arguments[_key2];
        }

        for (var _i2 = 0, _bodies2 = bodies; _i2 < _bodies2.length; _i2++) {
          var body = _bodies2[_i2];

          this._bvh.remove(body, false);
        }

        return this;
      }
      /**
       * Updates the collision system. This should be called before any collisions are tested.
       */

    }, {
      key: "update",
      value: function update() {
        this._bvh.update();

        return this;
      }
      /**
       * Draws the bodies within the system to a CanvasRenderingContext2D's current path
       * @param {CanvasRenderingContext2D} context The context to draw to
       */

    }, {
      key: "draw",
      value: function draw(context) {
        return this._bvh.draw(context);
      }
      /**
       * Draws the system's BVH to a CanvasRenderingContext2D's current path. This is useful for testing out different padding values for bodies.
       * @param {CanvasRenderingContext2D} context The context to draw to
       */

    }, {
      key: "drawBVH",
      value: function drawBVH(context) {
        return this._bvh.drawBVH(context);
      }
      /**
       * Returns a list of potential collisions for a body
       * @param {Circle|Polygon|Point} body The body to test for potential collisions against
       * @returns {Array<Body>}
       */

    }, {
      key: "potentials",
      value: function potentials(body) {
        return this._bvh.potentials(body);
      }
      /**
       * Determines if two bodies are colliding
       * @param {Circle|Polygon|Point} target The target body to test against
       * @param {Result} [result = null] A Result object on which to store information about the collision
       * @param {Boolean} [aabb = true] Set to false to skip the AABB test (useful if you use your own potential collision heuristic)
       * @returns {Boolean}
       */

    }, {
      key: "collides",
      value: function collides(source, target) {
        var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var aabb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        return SAT(source, target, result, aabb);
      }
    }], [{
      key: "createResult",
      value: function createResult() {
        return new Result();
      }
    }]);

    return Collisions;
  }();

  var Pool = /*#__PURE__*/function () {
    function Pool() {
      _classCallCheck(this, Pool);

      this.metrics = {};
      this.clearMetrics();
      this.assocPoolList = {};
    }

    _createClass(Pool, [{
      key: "Init",
      value: function Init() {
        for (var i = 0; i < 100; i++) {
          this.alloc(Asteroid, {});
        }

        for (var _i = 0; _i < 100; _i++) {
          this.alloc(ProjectileWeaponBase, {});
        }
      }
      /**
       * Allocate Object 
       * Creates one if list is empty
       * @param {Object} props 
       * @return {Object} Returns Object from pool
       */

    }, {
      key: "alloc",
      value: function alloc(ClassType, props) {
        var Obj;

        if (!this.assocPoolList[ClassType.name] || this.assocPoolList[ClassType.name].length == 0) {
          Obj = new ClassType(props);
          this.metrics.totalalloc++;
        } else {
          Obj = this.assocPoolList[ClassType.name].pop();
          Obj.Init(props);
          Obj.PendingDestroy = false;
          this.metrics.totalfree--;
        }

        this.printDebug();
        return Obj;
      }
      /**
       * Returns object to pool.
       * @param {Object} obj 
       */

    }, {
      key: "free",
      value: function free(obj) {
        if (!this.assocPoolList[obj.constructor.name]) {
          this.assocPoolList[obj.constructor.name] = [];
        }

        this.assocPoolList[obj.constructor.name].push(obj);
        this.metrics.totalfree++;
        this.printDebug();
      }
      /**
       * Clear Pool
       */

    }, {
      key: "collect",
      value: function collect() {
        this.poollist = [];
        var inUse = this.metrics.totalalloc - this.metrics.totalfree;
        this.clearMetrics(inUse);
      }
    }, {
      key: "clearMetrics",
      value: function clearMetrics(allocated) {
        this.metrics.totalalloc = allocated || 0;
        this.metrics.totalfree = 0;
      }
    }, {
      key: "printDebug",
      value: function printDebug() {
        var e = document.getElementById('debug');

        while (e.firstChild) {
          e.removeChild(e.firstChild);
        }

        for (var property in this.assocPoolList) {
          if (this.assocPoolList.hasOwnProperty(property)) {
            var p = document.createElement("p");
            p.innerText = "".concat(property, " : ").concat(this.assocPoolList[property].length);
            e.appendChild(p);
          }
        }
      }
    }]);

    return Pool;
  }();

  var _World = /*#__PURE__*/function () {
    function _World() {
      _classCallCheck(this, _World);

      this.EntityList = [];
      this.CollisionQueryList = [];
      this.PendingSpawns = [];
      this.collisions = new Collisions();
      this.collisionResults = this.collisions.createResult();
      this.GameTime = 0;
      this.EntityPool = new Pool();
      this.GlobalIDIncrement = 0;
    }

    _createClass(_World, [{
      key: "GetNextEntityID",
      value: function GetNextEntityID() {
        return ++this.GlobalIDIncrement;
      }
      /**
       * Spawns entity and registers it ot the world
       * 
       * @param {Class} ClassToSpawn 
       * @param {Object} props 
       * @return Spawned Entity
       */

    }, {
      key: "SpawnEntity",
      value: function SpawnEntity(ClassToSpawn, props) {
        var newEntity = this.EntityPool.alloc(ClassToSpawn, props);
        this.RegisterEntity(newEntity);
        return newEntity;
      }
    }, {
      key: "RegisterEntity",
      value: function RegisterEntity(NewEntity) {
        this.PendingSpawns.push(NewEntity);

        if (NewEntity.RegisterCollisonQuery === true) {
          this.CollisionQueryList.push(NewEntity);
        }
      }
    }, {
      key: "RegisterParticle",
      value: function RegisterParticle(NewParticle) {
        this.RegisterEntity(NewParticle);
      }
    }, {
      key: "InitWorld",
      value: function InitWorld() {
        this.canvas = document.getElementById('mainCanvas');

        if (!this.canvas) {
          this.canvas = document.createElement('canvas');
          this.canvas.width = 800;
          this.canvas.height = 600;
          document.body.appendChild(this.canvas);
        }

        this.ctx = this.canvas.getContext('2d');
        this.EntityPool.Init();
      }
      /**
       * updates game time
       * @param {number} TimeStamp Timestamp from gameloop
       */

    }, {
      key: "UpdateGameTime",
      value: function UpdateGameTime(TimeStamp) {
        this.GameTime = TimeStamp;
      }
    }, {
      key: "Update",
      value: function Update(delta) {
        //push new spawns to list
        for (var i = 0; i < this.PendingSpawns.length; i++) {
          var newEntity = this.PendingSpawns[i];
          this.EntityList.push(newEntity);
          newEntity.BeginPlay();
        } //clear list


        this.PendingSpawns = [];
        this.EntityList = this.EntityList.filter(function (entity) {
          if (!entity.PendingDestroy) {
            entity.update(delta);
            entity.render(delta);
          }

          return entity.PendingDestroy === false;
        });
      }
    }, {
      key: "UpdateCollisions",
      value: function UpdateCollisions(delta) {
        //Update Collision
        this.collisions.update();
        this.CollisionQueryList = this.CollisionQueryList.filter(function (entity) {
          if (!entity.PendingDestroy) {
            entity.QueryCollisions(delta);
          }

          return entity.PendingDestroy === false;
        });
      }
    }]);

    return _World;
  }();

  var World = new _World();

  var Entity = /*#__PURE__*/function () {
    function Entity(props) {
      _classCallCheck(this, Entity);

      this.Init(props);
    }

    _createClass(Entity, [{
      key: "Init",
      value: function Init(props) {
        props = props || {};
        this.World = World;
        this.ID = this.World.GetNextEntityID();
        this.Outer = props.outer || null;
        this.ChildList = [];
        this.SpawnLocation = props.location ? props.location.clone() : new Vector2(0, 0);
        this.Velocity = props.velocity ? props.velocity.clone() : new Vector2(0, 0);
        this.Location = this.SpawnLocation.clone();
        /*Rotation in Radians */

        this.Rotation = 0;
        this.radius = 0;
        this.RootBody = null;
        this.vertexes = [];
        this.PendingDestroy = false;
        this.RegisterCollisonQuery = false;
        this.team = props.team || 0;
        this.maxHealth = props.maxHealth || 0;
        this.health = props.health || this.maxHealth;
        this.TimeToLife = props.timetolife || -1;
        this.spawnTime = World.GameTime;
        this.Age = 0;
        this.BaseColor = "#fff";
        this.StrokeColor = "#fff";
        this.ColorMap = null;
      }
    }, {
      key: "BeginPlay",
      value: function BeginPlay() {}
    }, {
      key: "update",
      value: function update(delta) {
        this.Age = World.GameTime - this.spawnTime;

        if (this.TimeToLife > 0) {
          if (this.Age > this.TimeToLife) {
            this.Destroy();
          }
        }

        if (!this.IsInWorldBounds()) {
          //console.log("Out of Bounds: ", this);
          this.Destroy();
        }
      }
    }, {
      key: "QueryCollisions",
      value: function QueryCollisions(delta) {}
      /**
       * Take damage 
       * @param {number} amount 
       */

    }, {
      key: "takeDamage",
      value: function takeDamage(amount) {}
      /**
       * Prepare Destroy Entity 
       */

    }, {
      key: "Destroy",
      value: function Destroy() {
        this.PendingDestroy = true;

        if (this.ChildList.length > 0) {
          for (var i = 0; i < this.ChildList.length; i++) {
            var child = this.ChildList[i];
            child.Destroy();
          }
        }

        this.World.EntityPool.free(this);
      }
    }, {
      key: "render",
      value: function render(delta) {}
      /**
       * Set Entity Velocity clones the input vector
       * @param {Vector2} velocity the new velocity
       */

    }, {
      key: "SetVelocity",
      value: function SetVelocity(velocity) {
        this.Velocity = velocity.clone();
      }
      /**
       * Checks if entity is relevant in world
       * @returns {Boolean} 
       */

    }, {
      key: "IsInWorldBounds",
      value: function IsInWorldBounds() {
        if (this.Location.x < -2000 || this.Location.x > 2000 || this.Location.y < -2000 || this.Location.y > 2000) {
          return false;
        }

        return true;
      }
    }, {
      key: "OnCheckedOverlap",
      value: function OnCheckedOverlap(OtherEntity) {}
      /**
       * Lerp chroma color by lifetime
       * @param {Number} delta 
       */

    }, {
      key: "lerpChromaColor",
      value: function lerpChromaColor(delta) {
        if (this.ColorMap && this.ColorMap.length > 0) {
          var factor = this.Age / this.TimeToLife;
          this.BaseColor = this.ColorMap[Math.floor(lerp(0, this.ColorMap.length, factor))];
        }
      }
      /**
       * Lerp chroma color with by a sin curve
       * @param {Number} delta 
       * @param {Number} [Frequence] 
       * @param {Number} [Phase] 
       */

    }, {
      key: "lerpChromaColorLoop",
      value: function lerpChromaColorLoop(delta, Frequence, Phase) {
        if (this.ColorMap && this.ColorMap.length > 0) {
          var LocalFreq = Frequence || 200;
          var LocalPhase = Phase || 0;
          var factor = Math.sin(this.Age / LocalFreq + LocalPhase);
          this.BaseColor = this.ColorMap[Math.floor(lerp(0, this.ColorMap.length, factor))];
        }
      }
    }, {
      key: "AttachToParent",
      value: function AttachToParent(NewOuter) {
        this.Outer = NewOuter;
        this.Outer.AttachChild(this);
      }
    }, {
      key: "AttachChild",
      value: function AttachChild(NewChild) {
        this.ChildList.push(NewChild);
      }
      /**
       * Set new lifetime
       * changes this.SpawnTime !
       * @param {Number} NewLifetime The new lifetime in ms
       */

    }, {
      key: "SetLifeTime",
      value: function SetLifeTime(NewLifetime) {
        this.spawnTime = this.World.GameTime;
        this.TimeToLife = NewLifetime;
      }
    }]);

    return Entity;
  }();

  /**
   * Basic Movement Component adds Velocity to Location scaled by delta.
   */
  var MovementComponent = /*#__PURE__*/function () {
    function MovementComponent(props) {
      _classCallCheck(this, MovementComponent);

      this.Outer = props.Outer || null;
    }

    _createClass(MovementComponent, [{
      key: "UpdateMovement",
      value: function UpdateMovement(delta) {
        if (this.Outer) {
          this.Outer.Location.addScaled(this.Outer.Velocity, delta);
        }
      }
    }]);

    return MovementComponent;
  }();

  var Monster = /*#__PURE__*/function (_Entity) {
    _inherits(Monster, _Entity);

    var _super = _createSuper(Monster);

    function Monster() {
      _classCallCheck(this, Monster);

      return _super.apply(this, arguments);
    }

    _createClass(Monster, [{
      key: "Init",
      value: function Init(props) {
        _get(_getPrototypeOf(Monster.prototype), "Init", this).call(this, props);

        this.vertexes = this.CreateRandomPolygon();
        this.RootBody = this.CreateCollionBody();
        this.RootBody.Outer = this;
        this.team = props.team || 8;
        this.maxHealth = props.maxhealth || 30;
        this.health = this.maxHealth;
        this.MovementComponent = this.CreateMovementComponent(props);
      }
    }, {
      key: "CreateMovementComponent",
      value: function CreateMovementComponent(props) {
        if (props.MovementComponent) {
          return new props.MovementComponent(_objectSpread2({
            Outer: this
          }, props.MovementConfig));
        } else {
          return new MovementComponent({
            Outer: this
          });
        }
      }
      /**
       * Create Random Poylgon
       * @return {Number|Array}Vertexes array
       */

    }, {
      key: "CreateRandomPolygon",
      value: function CreateRandomPolygon() {
        return [];
      }
      /**
       * @return Collision Body
       */

    }, {
      key: "CreateCollionBody",
      value: function CreateCollionBody() {
        this.radius = 10;
        return this.World.collisions.createCircle(this.Location.x, this.Location.y, this.radius);
      }
    }, {
      key: "update",
      value: function update(delta) {
        _get(_getPrototypeOf(Monster.prototype), "update", this).call(this, delta);

        this.UpdateMovement(delta);
        this.UpdateRootBody();
      }
    }, {
      key: "UpdateMovement",
      value: function UpdateMovement(delta) {
        this.MovementComponent.UpdateMovement(delta);
      }
    }, {
      key: "UpdateRootBody",
      value: function UpdateRootBody() {
        this.RootBody.x = this.Location.x;
        this.RootBody.y = this.Location.y;
        this.RootBody.angle = this.Rotation;
      }
    }, {
      key: "QueryCollisions",
      value: function QueryCollisions(delta) {}
    }, {
      key: "Destroy",
      value: function Destroy() {
        _get(_getPrototypeOf(Monster.prototype), "Destroy", this).call(this);

        this.RootBody.remove();
      }
    }, {
      key: "render",
      value: function render(delta) {
        var ctx = this.World.ctx;
        ctx.save();
        ctx.translate(this.Location.x, this.Location.y);
        ctx.beginPath();
        ctx.fillStyle = this.BaseColor;
        ctx.arc(0, 0, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
      }
    }, {
      key: "takeDamage",
      value: function takeDamage(amount) {
        this.health -= amount;

        if (this.health <= 0 && !this.PendingDestroy) {
          this.Destroy();
        }
      }
    }, {
      key: "OnOverlap",
      value: function OnOverlap(OtherEntity) {
        if (OtherEntity instanceof Player) {
          OtherEntity.takeDamage(10);
          this.Destroy();
        }
      }
    }]);

    return Monster;
  }(Entity);

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var chroma = createCommonjsModule(function (module, exports) {
  /**
   * chroma.js - JavaScript library for color conversions
   *
   * Copyright (c) 2011-2019, Gregor Aisch
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   * list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. The name Gregor Aisch may not be used to endorse or promote products
   * derived from this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
   * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
   * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
   * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * -------------------------------------------------------
   *
   * chroma.js includes colors from colorbrewer2.org, which are released under
   * the following license:
   *
   * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
   * and The Pennsylvania State University.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   * either express or implied. See the License for the specific
   * language governing permissions and limitations under the License.
   *
   * ------------------------------------------------------
   *
   * Named colors are taken from X11 Color Names.
   * http://www.w3.org/TR/css3-color/#svg-color
   *
   * @preserve
   */

  (function (global, factory) {
       module.exports = factory() ;
  }(commonjsGlobal, (function () {
      var limit = function (x, min, max) {
          if ( min === void 0 ) min=0;
          if ( max === void 0 ) max=1;

          return x < min ? min : x > max ? max : x;
      };

      var clip_rgb = function (rgb) {
          rgb._clipped = false;
          rgb._unclipped = rgb.slice(0);
          for (var i=0; i<=3; i++) {
              if (i < 3) {
                  if (rgb[i] < 0 || rgb[i] > 255) { rgb._clipped = true; }
                  rgb[i] = limit(rgb[i], 0, 255);
              } else if (i === 3) {
                  rgb[i] = limit(rgb[i], 0, 1);
              }
          }
          return rgb;
      };

      // ported from jQuery's $.type
      var classToType = {};
      for (var i = 0, list = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null']; i < list.length; i += 1) {
          var name = list[i];

          classToType[("[object " + name + "]")] = name.toLowerCase();
      }
      var type = function(obj) {
          return classToType[Object.prototype.toString.call(obj)] || "object";
      };

      var unpack = function (args, keyOrder) {
          if ( keyOrder === void 0 ) keyOrder=null;

      	// if called with more than 3 arguments, we return the arguments
          if (args.length >= 3) { return Array.prototype.slice.call(args); }
          // with less than 3 args we check if first arg is object
          // and use the keyOrder string to extract and sort properties
      	if (type(args[0]) == 'object' && keyOrder) {
      		return keyOrder.split('')
      			.filter(function (k) { return args[0][k] !== undefined; })
      			.map(function (k) { return args[0][k]; });
      	}
      	// otherwise we just return the first argument
      	// (which we suppose is an array of args)
          return args[0];
      };

      var last = function (args) {
          if (args.length < 2) { return null; }
          var l = args.length-1;
          if (type(args[l]) == 'string') { return args[l].toLowerCase(); }
          return null;
      };

      var PI = Math.PI;

      var utils = {
      	clip_rgb: clip_rgb,
      	limit: limit,
      	type: type,
      	unpack: unpack,
      	last: last,
      	PI: PI,
      	TWOPI: PI*2,
      	PITHIRD: PI/3,
      	DEG2RAD: PI / 180,
      	RAD2DEG: 180 / PI
      };

      var input = {
      	format: {},
      	autodetect: []
      };

      var last$1 = utils.last;
      var clip_rgb$1 = utils.clip_rgb;
      var type$1 = utils.type;


      var Color = function Color() {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var me = this;
          if (type$1(args[0]) === 'object' &&
              args[0].constructor &&
              args[0].constructor === this.constructor) {
              // the argument is already a Color instance
              return args[0];
          }

          // last argument could be the mode
          var mode = last$1(args);
          var autodetect = false;

          if (!mode) {
              autodetect = true;
              if (!input.sorted) {
                  input.autodetect = input.autodetect.sort(function (a,b) { return b.p - a.p; });
                  input.sorted = true;
              }
              // auto-detect format
              for (var i = 0, list = input.autodetect; i < list.length; i += 1) {
                  var chk = list[i];

                  mode = chk.test.apply(chk, args);
                  if (mode) { break; }
              }
          }

          if (input.format[mode]) {
              var rgb = input.format[mode].apply(null, autodetect ? args : args.slice(0,-1));
              me._rgb = clip_rgb$1(rgb);
          } else {
              throw new Error('unknown format: '+args);
          }

          // add alpha channel
          if (me._rgb.length === 3) { me._rgb.push(1); }
      };

      Color.prototype.toString = function toString () {
          if (type$1(this.hex) == 'function') { return this.hex(); }
          return ("[" + (this._rgb.join(',')) + "]");
      };

      var Color_1 = Color;

      var chroma = function () {
      	var args = [], len = arguments.length;
      	while ( len-- ) args[ len ] = arguments[ len ];

      	return new (Function.prototype.bind.apply( chroma.Color, [ null ].concat( args) ));
      };

      chroma.Color = Color_1;
      chroma.version = '2.1.0';

      var chroma_1 = chroma;

      var unpack$1 = utils.unpack;
      var max = Math.max;

      var rgb2cmyk = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$1(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          r = r / 255;
          g = g / 255;
          b = b / 255;
          var k = 1 - max(r,max(g,b));
          var f = k < 1 ? 1 / (1-k) : 0;
          var c = (1-r-k) * f;
          var m = (1-g-k) * f;
          var y = (1-b-k) * f;
          return [c,m,y,k];
      };

      var rgb2cmyk_1 = rgb2cmyk;

      var unpack$2 = utils.unpack;

      var cmyk2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$2(args, 'cmyk');
          var c = args[0];
          var m = args[1];
          var y = args[2];
          var k = args[3];
          var alpha = args.length > 4 ? args[4] : 1;
          if (k === 1) { return [0,0,0,alpha]; }
          return [
              c >= 1 ? 0 : 255 * (1-c) * (1-k), // r
              m >= 1 ? 0 : 255 * (1-m) * (1-k), // g
              y >= 1 ? 0 : 255 * (1-y) * (1-k), // b
              alpha
          ];
      };

      var cmyk2rgb_1 = cmyk2rgb;

      var unpack$3 = utils.unpack;
      var type$2 = utils.type;



      Color_1.prototype.cmyk = function() {
          return rgb2cmyk_1(this._rgb);
      };

      chroma_1.cmyk = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['cmyk']) ));
      };

      input.format.cmyk = cmyk2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$3(args, 'cmyk');
              if (type$2(args) === 'array' && args.length === 4) {
                  return 'cmyk';
              }
          }
      });

      var unpack$4 = utils.unpack;
      var last$2 = utils.last;
      var rnd = function (a) { return Math.round(a*100)/100; };

      /*
       * supported arguments:
       * - hsl2css(h,s,l)
       * - hsl2css(h,s,l,a)
       * - hsl2css([h,s,l], mode)
       * - hsl2css([h,s,l,a], mode)
       * - hsl2css({h,s,l,a}, mode)
       */
      var hsl2css = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var hsla = unpack$4(args, 'hsla');
          var mode = last$2(args) || 'lsa';
          hsla[0] = rnd(hsla[0] || 0);
          hsla[1] = rnd(hsla[1]*100) + '%';
          hsla[2] = rnd(hsla[2]*100) + '%';
          if (mode === 'hsla' || (hsla.length > 3 && hsla[3]<1)) {
              hsla[3] = hsla.length > 3 ? hsla[3] : 1;
              mode = 'hsla';
          } else {
              hsla.length = 3;
          }
          return (mode + "(" + (hsla.join(',')) + ")");
      };

      var hsl2css_1 = hsl2css;

      var unpack$5 = utils.unpack;

      /*
       * supported arguments:
       * - rgb2hsl(r,g,b)
       * - rgb2hsl(r,g,b,a)
       * - rgb2hsl([r,g,b])
       * - rgb2hsl([r,g,b,a])
       * - rgb2hsl({r,g,b,a})
       */
      var rgb2hsl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$5(args, 'rgba');
          var r = args[0];
          var g = args[1];
          var b = args[2];

          r /= 255;
          g /= 255;
          b /= 255;

          var min = Math.min(r, g, b);
          var max = Math.max(r, g, b);

          var l = (max + min) / 2;
          var s, h;

          if (max === min){
              s = 0;
              h = Number.NaN;
          } else {
              s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
          }

          if (r == max) { h = (g - b) / (max - min); }
          else if (g == max) { h = 2 + (b - r) / (max - min); }
          else if (b == max) { h = 4 + (r - g) / (max - min); }

          h *= 60;
          if (h < 0) { h += 360; }
          if (args.length>3 && args[3]!==undefined) { return [h,s,l,args[3]]; }
          return [h,s,l];
      };

      var rgb2hsl_1 = rgb2hsl;

      var unpack$6 = utils.unpack;
      var last$3 = utils.last;


      var round = Math.round;

      /*
       * supported arguments:
       * - rgb2css(r,g,b)
       * - rgb2css(r,g,b,a)
       * - rgb2css([r,g,b], mode)
       * - rgb2css([r,g,b,a], mode)
       * - rgb2css({r,g,b,a}, mode)
       */
      var rgb2css = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var rgba = unpack$6(args, 'rgba');
          var mode = last$3(args) || 'rgb';
          if (mode.substr(0,3) == 'hsl') {
              return hsl2css_1(rgb2hsl_1(rgba), mode);
          }
          rgba[0] = round(rgba[0]);
          rgba[1] = round(rgba[1]);
          rgba[2] = round(rgba[2]);
          if (mode === 'rgba' || (rgba.length > 3 && rgba[3]<1)) {
              rgba[3] = rgba.length > 3 ? rgba[3] : 1;
              mode = 'rgba';
          }
          return (mode + "(" + (rgba.slice(0,mode==='rgb'?3:4).join(',')) + ")");
      };

      var rgb2css_1 = rgb2css;

      var unpack$7 = utils.unpack;
      var round$1 = Math.round;

      var hsl2rgb = function () {
          var assign;

          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];
          args = unpack$7(args, 'hsl');
          var h = args[0];
          var s = args[1];
          var l = args[2];
          var r,g,b;
          if (s === 0) {
              r = g = b = l*255;
          } else {
              var t3 = [0,0,0];
              var c = [0,0,0];
              var t2 = l < 0.5 ? l * (1+s) : l+s-l*s;
              var t1 = 2 * l - t2;
              var h_ = h / 360;
              t3[0] = h_ + 1/3;
              t3[1] = h_;
              t3[2] = h_ - 1/3;
              for (var i=0; i<3; i++) {
                  if (t3[i] < 0) { t3[i] += 1; }
                  if (t3[i] > 1) { t3[i] -= 1; }
                  if (6 * t3[i] < 1)
                      { c[i] = t1 + (t2 - t1) * 6 * t3[i]; }
                  else if (2 * t3[i] < 1)
                      { c[i] = t2; }
                  else if (3 * t3[i] < 2)
                      { c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6; }
                  else
                      { c[i] = t1; }
              }
              (assign = [round$1(c[0]*255),round$1(c[1]*255),round$1(c[2]*255)], r = assign[0], g = assign[1], b = assign[2]);
          }
          if (args.length > 3) {
              // keep alpha channel
              return [r,g,b,args[3]];
          }
          return [r,g,b,1];
      };

      var hsl2rgb_1 = hsl2rgb;

      var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
      var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
      var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
      var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;

      var round$2 = Math.round;

      var css2rgb = function (css) {
          css = css.toLowerCase().trim();
          var m;

          if (input.format.named) {
              try {
                  return input.format.named(css);
              } catch (e) {
                  // eslint-disable-next-line
              }
          }

          // rgb(250,20,0)
          if ((m = css.match(RE_RGB))) {
              var rgb = m.slice(1,4);
              for (var i=0; i<3; i++) {
                  rgb[i] = +rgb[i];
              }
              rgb[3] = 1;  // default alpha
              return rgb;
          }

          // rgba(250,20,0,0.4)
          if ((m = css.match(RE_RGBA))) {
              var rgb$1 = m.slice(1,5);
              for (var i$1=0; i$1<4; i$1++) {
                  rgb$1[i$1] = +rgb$1[i$1];
              }
              return rgb$1;
          }

          // rgb(100%,0%,0%)
          if ((m = css.match(RE_RGB_PCT))) {
              var rgb$2 = m.slice(1,4);
              for (var i$2=0; i$2<3; i$2++) {
                  rgb$2[i$2] = round$2(rgb$2[i$2] * 2.55);
              }
              rgb$2[3] = 1;  // default alpha
              return rgb$2;
          }

          // rgba(100%,0%,0%,0.4)
          if ((m = css.match(RE_RGBA_PCT))) {
              var rgb$3 = m.slice(1,5);
              for (var i$3=0; i$3<3; i$3++) {
                  rgb$3[i$3] = round$2(rgb$3[i$3] * 2.55);
              }
              rgb$3[3] = +rgb$3[3];
              return rgb$3;
          }

          // hsl(0,100%,50%)
          if ((m = css.match(RE_HSL))) {
              var hsl = m.slice(1,4);
              hsl[1] *= 0.01;
              hsl[2] *= 0.01;
              var rgb$4 = hsl2rgb_1(hsl);
              rgb$4[3] = 1;
              return rgb$4;
          }

          // hsla(0,100%,50%,0.5)
          if ((m = css.match(RE_HSLA))) {
              var hsl$1 = m.slice(1,4);
              hsl$1[1] *= 0.01;
              hsl$1[2] *= 0.01;
              var rgb$5 = hsl2rgb_1(hsl$1);
              rgb$5[3] = +m[4];  // default alpha = 1
              return rgb$5;
          }
      };

      css2rgb.test = function (s) {
          return RE_RGB.test(s) ||
              RE_RGBA.test(s) ||
              RE_RGB_PCT.test(s) ||
              RE_RGBA_PCT.test(s) ||
              RE_HSL.test(s) ||
              RE_HSLA.test(s);
      };

      var css2rgb_1 = css2rgb;

      var type$3 = utils.type;




      Color_1.prototype.css = function(mode) {
          return rgb2css_1(this._rgb, mode);
      };

      chroma_1.css = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['css']) ));
      };

      input.format.css = css2rgb_1;

      input.autodetect.push({
          p: 5,
          test: function (h) {
              var rest = [], len = arguments.length - 1;
              while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

              if (!rest.length && type$3(h) === 'string' && css2rgb_1.test(h)) {
                  return 'css';
              }
          }
      });

      var unpack$8 = utils.unpack;

      input.format.gl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var rgb = unpack$8(args, 'rgba');
          rgb[0] *= 255;
          rgb[1] *= 255;
          rgb[2] *= 255;
          return rgb;
      };

      chroma_1.gl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['gl']) ));
      };

      Color_1.prototype.gl = function() {
          var rgb = this._rgb;
          return [rgb[0]/255, rgb[1]/255, rgb[2]/255, rgb[3]];
      };

      var unpack$9 = utils.unpack;

      var rgb2hcg = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$9(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          var min = Math.min(r, g, b);
          var max = Math.max(r, g, b);
          var delta = max - min;
          var c = delta * 100 / 255;
          var _g = min / (255 - delta) * 100;
          var h;
          if (delta === 0) {
              h = Number.NaN;
          } else {
              if (r === max) { h = (g - b) / delta; }
              if (g === max) { h = 2+(b - r) / delta; }
              if (b === max) { h = 4+(r - g) / delta; }
              h *= 60;
              if (h < 0) { h += 360; }
          }
          return [h, c, _g];
      };

      var rgb2hcg_1 = rgb2hcg;

      var unpack$a = utils.unpack;
      var floor = Math.floor;

      /*
       * this is basically just HSV with some minor tweaks
       *
       * hue.. [0..360]
       * chroma .. [0..1]
       * grayness .. [0..1]
       */

      var hcg2rgb = function () {
          var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];
          args = unpack$a(args, 'hcg');
          var h = args[0];
          var c = args[1];
          var _g = args[2];
          var r,g,b;
          _g = _g * 255;
          var _c = c * 255;
          if (c === 0) {
              r = g = b = _g;
          } else {
              if (h === 360) { h = 0; }
              if (h > 360) { h -= 360; }
              if (h < 0) { h += 360; }
              h /= 60;
              var i = floor(h);
              var f = h - i;
              var p = _g * (1 - c);
              var q = p + _c * (1 - f);
              var t = p + _c * f;
              var v = p + _c;
              switch (i) {
                  case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                  case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                  case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                  case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                  case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                  case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
              }
          }
          return [r, g, b, args.length > 3 ? args[3] : 1];
      };

      var hcg2rgb_1 = hcg2rgb;

      var unpack$b = utils.unpack;
      var type$4 = utils.type;






      Color_1.prototype.hcg = function() {
          return rgb2hcg_1(this._rgb);
      };

      chroma_1.hcg = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcg']) ));
      };

      input.format.hcg = hcg2rgb_1;

      input.autodetect.push({
          p: 1,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$b(args, 'hcg');
              if (type$4(args) === 'array' && args.length === 3) {
                  return 'hcg';
              }
          }
      });

      var unpack$c = utils.unpack;
      var last$4 = utils.last;
      var round$3 = Math.round;

      var rgb2hex = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$c(args, 'rgba');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          var a = ref[3];
          var mode = last$4(args) || 'auto';
          if (a === undefined) { a = 1; }
          if (mode === 'auto') {
              mode = a < 1 ? 'rgba' : 'rgb';
          }
          r = round$3(r);
          g = round$3(g);
          b = round$3(b);
          var u = r << 16 | g << 8 | b;
          var str = "000000" + u.toString(16); //#.toUpperCase();
          str = str.substr(str.length - 6);
          var hxa = '0' + round$3(a * 255).toString(16);
          hxa = hxa.substr(hxa.length - 2);
          switch (mode.toLowerCase()) {
              case 'rgba': return ("#" + str + hxa);
              case 'argb': return ("#" + hxa + str);
              default: return ("#" + str);
          }
      };

      var rgb2hex_1 = rgb2hex;

      var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;

      var hex2rgb = function (hex) {
          if (hex.match(RE_HEX)) {
              // remove optional leading #
              if (hex.length === 4 || hex.length === 7) {
                  hex = hex.substr(1);
              }
              // expand short-notation to full six-digit
              if (hex.length === 3) {
                  hex = hex.split('');
                  hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
              }
              var u = parseInt(hex, 16);
              var r = u >> 16;
              var g = u >> 8 & 0xFF;
              var b = u & 0xFF;
              return [r,g,b,1];
          }

          // match rgba hex format, eg #FF000077
          if (hex.match(RE_HEXA)) {
              if (hex.length === 5 || hex.length === 9) {
                  // remove optional leading #
                  hex = hex.substr(1);
              }
              // expand short-notation to full eight-digit
              if (hex.length === 4) {
                  hex = hex.split('');
                  hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]+hex[3]+hex[3];
              }
              var u$1 = parseInt(hex, 16);
              var r$1 = u$1 >> 24 & 0xFF;
              var g$1 = u$1 >> 16 & 0xFF;
              var b$1 = u$1 >> 8 & 0xFF;
              var a = Math.round((u$1 & 0xFF) / 0xFF * 100) / 100;
              return [r$1,g$1,b$1,a];
          }

          // we used to check for css colors here
          // if _input.css? and rgb = _input.css hex
          //     return rgb

          throw new Error(("unknown hex color: " + hex));
      };

      var hex2rgb_1 = hex2rgb;

      var type$5 = utils.type;




      Color_1.prototype.hex = function(mode) {
          return rgb2hex_1(this._rgb, mode);
      };

      chroma_1.hex = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hex']) ));
      };

      input.format.hex = hex2rgb_1;
      input.autodetect.push({
          p: 4,
          test: function (h) {
              var rest = [], len = arguments.length - 1;
              while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

              if (!rest.length && type$5(h) === 'string' && [3,4,5,6,7,8,9].indexOf(h.length) >= 0) {
                  return 'hex';
              }
          }
      });

      var unpack$d = utils.unpack;
      var TWOPI = utils.TWOPI;
      var min = Math.min;
      var sqrt = Math.sqrt;
      var acos = Math.acos;

      var rgb2hsi = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          /*
          borrowed from here:
          http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
          */
          var ref = unpack$d(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          r /= 255;
          g /= 255;
          b /= 255;
          var h;
          var min_ = min(r,g,b);
          var i = (r+g+b) / 3;
          var s = i > 0 ? 1 - min_/i : 0;
          if (s === 0) {
              h = NaN;
          } else {
              h = ((r-g)+(r-b)) / 2;
              h /= sqrt((r-g)*(r-g) + (r-b)*(g-b));
              h = acos(h);
              if (b > g) {
                  h = TWOPI - h;
              }
              h /= TWOPI;
          }
          return [h*360,s,i];
      };

      var rgb2hsi_1 = rgb2hsi;

      var unpack$e = utils.unpack;
      var limit$1 = utils.limit;
      var TWOPI$1 = utils.TWOPI;
      var PITHIRD = utils.PITHIRD;
      var cos = Math.cos;

      /*
       * hue [0..360]
       * saturation [0..1]
       * intensity [0..1]
       */
      var hsi2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          /*
          borrowed from here:
          http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
          */
          args = unpack$e(args, 'hsi');
          var h = args[0];
          var s = args[1];
          var i = args[2];
          var r,g,b;

          if (isNaN(h)) { h = 0; }
          if (isNaN(s)) { s = 0; }
          // normalize hue
          if (h > 360) { h -= 360; }
          if (h < 0) { h += 360; }
          h /= 360;
          if (h < 1/3) {
              b = (1-s)/3;
              r = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
              g = 1 - (b+r);
          } else if (h < 2/3) {
              h -= 1/3;
              r = (1-s)/3;
              g = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
              b = 1 - (r+g);
          } else {
              h -= 2/3;
              g = (1-s)/3;
              b = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
              r = 1 - (g+b);
          }
          r = limit$1(i*r*3);
          g = limit$1(i*g*3);
          b = limit$1(i*b*3);
          return [r*255, g*255, b*255, args.length > 3 ? args[3] : 1];
      };

      var hsi2rgb_1 = hsi2rgb;

      var unpack$f = utils.unpack;
      var type$6 = utils.type;






      Color_1.prototype.hsi = function() {
          return rgb2hsi_1(this._rgb);
      };

      chroma_1.hsi = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsi']) ));
      };

      input.format.hsi = hsi2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$f(args, 'hsi');
              if (type$6(args) === 'array' && args.length === 3) {
                  return 'hsi';
              }
          }
      });

      var unpack$g = utils.unpack;
      var type$7 = utils.type;






      Color_1.prototype.hsl = function() {
          return rgb2hsl_1(this._rgb);
      };

      chroma_1.hsl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsl']) ));
      };

      input.format.hsl = hsl2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$g(args, 'hsl');
              if (type$7(args) === 'array' && args.length === 3) {
                  return 'hsl';
              }
          }
      });

      var unpack$h = utils.unpack;
      var min$1 = Math.min;
      var max$1 = Math.max;

      /*
       * supported arguments:
       * - rgb2hsv(r,g,b)
       * - rgb2hsv([r,g,b])
       * - rgb2hsv({r,g,b})
       */
      var rgb2hsl$1 = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$h(args, 'rgb');
          var r = args[0];
          var g = args[1];
          var b = args[2];
          var min_ = min$1(r, g, b);
          var max_ = max$1(r, g, b);
          var delta = max_ - min_;
          var h,s,v;
          v = max_ / 255.0;
          if (max_ === 0) {
              h = Number.NaN;
              s = 0;
          } else {
              s = delta / max_;
              if (r === max_) { h = (g - b) / delta; }
              if (g === max_) { h = 2+(b - r) / delta; }
              if (b === max_) { h = 4+(r - g) / delta; }
              h *= 60;
              if (h < 0) { h += 360; }
          }
          return [h, s, v]
      };

      var rgb2hsv = rgb2hsl$1;

      var unpack$i = utils.unpack;
      var floor$1 = Math.floor;

      var hsv2rgb = function () {
          var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];
          args = unpack$i(args, 'hsv');
          var h = args[0];
          var s = args[1];
          var v = args[2];
          var r,g,b;
          v *= 255;
          if (s === 0) {
              r = g = b = v;
          } else {
              if (h === 360) { h = 0; }
              if (h > 360) { h -= 360; }
              if (h < 0) { h += 360; }
              h /= 60;

              var i = floor$1(h);
              var f = h - i;
              var p = v * (1 - s);
              var q = v * (1 - s * f);
              var t = v * (1 - s * (1 - f));

              switch (i) {
                  case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                  case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                  case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                  case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                  case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                  case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
              }
          }
          return [r,g,b,args.length > 3?args[3]:1];
      };

      var hsv2rgb_1 = hsv2rgb;

      var unpack$j = utils.unpack;
      var type$8 = utils.type;






      Color_1.prototype.hsv = function() {
          return rgb2hsv(this._rgb);
      };

      chroma_1.hsv = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsv']) ));
      };

      input.format.hsv = hsv2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$j(args, 'hsv');
              if (type$8(args) === 'array' && args.length === 3) {
                  return 'hsv';
              }
          }
      });

      var labConstants = {
          // Corresponds roughly to RGB brighter/darker
          Kn: 18,

          // D65 standard referent
          Xn: 0.950470,
          Yn: 1,
          Zn: 1.088830,

          t0: 0.137931034,  // 4 / 29
          t1: 0.206896552,  // 6 / 29
          t2: 0.12841855,   // 3 * t1 * t1
          t3: 0.008856452,  // t1 * t1 * t1
      };

      var unpack$k = utils.unpack;
      var pow = Math.pow;

      var rgb2lab = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$k(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          var ref$1 = rgb2xyz(r,g,b);
          var x = ref$1[0];
          var y = ref$1[1];
          var z = ref$1[2];
          var l = 116 * y - 16;
          return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
      };

      var rgb_xyz = function (r) {
          if ((r /= 255) <= 0.04045) { return r / 12.92; }
          return pow((r + 0.055) / 1.055, 2.4);
      };

      var xyz_lab = function (t) {
          if (t > labConstants.t3) { return pow(t, 1 / 3); }
          return t / labConstants.t2 + labConstants.t0;
      };

      var rgb2xyz = function (r,g,b) {
          r = rgb_xyz(r);
          g = rgb_xyz(g);
          b = rgb_xyz(b);
          var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / labConstants.Xn);
          var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / labConstants.Yn);
          var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / labConstants.Zn);
          return [x,y,z];
      };

      var rgb2lab_1 = rgb2lab;

      var unpack$l = utils.unpack;
      var pow$1 = Math.pow;

      /*
       * L* [0..100]
       * a [-100..100]
       * b [-100..100]
       */
      var lab2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$l(args, 'lab');
          var l = args[0];
          var a = args[1];
          var b = args[2];
          var x,y,z, r,g,b_;

          y = (l + 16) / 116;
          x = isNaN(a) ? y : y + a / 500;
          z = isNaN(b) ? y : y - b / 200;

          y = labConstants.Yn * lab_xyz(y);
          x = labConstants.Xn * lab_xyz(x);
          z = labConstants.Zn * lab_xyz(z);

          r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);  // D65 -> sRGB
          g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
          b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

          return [r,g,b_,args.length > 3 ? args[3] : 1];
      };

      var xyz_rgb = function (r) {
          return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow$1(r, 1 / 2.4) - 0.055)
      };

      var lab_xyz = function (t) {
          return t > labConstants.t1 ? t * t * t : labConstants.t2 * (t - labConstants.t0)
      };

      var lab2rgb_1 = lab2rgb;

      var unpack$m = utils.unpack;
      var type$9 = utils.type;






      Color_1.prototype.lab = function() {
          return rgb2lab_1(this._rgb);
      };

      chroma_1.lab = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lab']) ));
      };

      input.format.lab = lab2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$m(args, 'lab');
              if (type$9(args) === 'array' && args.length === 3) {
                  return 'lab';
              }
          }
      });

      var unpack$n = utils.unpack;
      var RAD2DEG = utils.RAD2DEG;
      var sqrt$1 = Math.sqrt;
      var atan2 = Math.atan2;
      var round$4 = Math.round;

      var lab2lch = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$n(args, 'lab');
          var l = ref[0];
          var a = ref[1];
          var b = ref[2];
          var c = sqrt$1(a * a + b * b);
          var h = (atan2(b, a) * RAD2DEG + 360) % 360;
          if (round$4(c*10000) === 0) { h = Number.NaN; }
          return [l, c, h];
      };

      var lab2lch_1 = lab2lch;

      var unpack$o = utils.unpack;



      var rgb2lch = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$o(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          var ref$1 = rgb2lab_1(r,g,b);
          var l = ref$1[0];
          var a = ref$1[1];
          var b_ = ref$1[2];
          return lab2lch_1(l,a,b_);
      };

      var rgb2lch_1 = rgb2lch;

      var unpack$p = utils.unpack;
      var DEG2RAD = utils.DEG2RAD;
      var sin = Math.sin;
      var cos$1 = Math.cos;

      var lch2lab = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          /*
          Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
          These formulas were invented by David Dalrymple to obtain maximum contrast without going
          out of gamut if the parameters are in the range 0-1.

          A saturation multiplier was added by Gregor Aisch
          */
          var ref = unpack$p(args, 'lch');
          var l = ref[0];
          var c = ref[1];
          var h = ref[2];
          if (isNaN(h)) { h = 0; }
          h = h * DEG2RAD;
          return [l, cos$1(h) * c, sin(h) * c]
      };

      var lch2lab_1 = lch2lab;

      var unpack$q = utils.unpack;



      var lch2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$q(args, 'lch');
          var l = args[0];
          var c = args[1];
          var h = args[2];
          var ref = lch2lab_1 (l,c,h);
          var L = ref[0];
          var a = ref[1];
          var b_ = ref[2];
          var ref$1 = lab2rgb_1 (L,a,b_);
          var r = ref$1[0];
          var g = ref$1[1];
          var b = ref$1[2];
          return [r, g, b, args.length > 3 ? args[3] : 1];
      };

      var lch2rgb_1 = lch2rgb;

      var unpack$r = utils.unpack;


      var hcl2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var hcl = unpack$r(args, 'hcl').reverse();
          return lch2rgb_1.apply(void 0, hcl);
      };

      var hcl2rgb_1 = hcl2rgb;

      var unpack$s = utils.unpack;
      var type$a = utils.type;






      Color_1.prototype.lch = function() { return rgb2lch_1(this._rgb); };
      Color_1.prototype.hcl = function() { return rgb2lch_1(this._rgb).reverse(); };

      chroma_1.lch = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lch']) ));
      };
      chroma_1.hcl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcl']) ));
      };

      input.format.lch = lch2rgb_1;
      input.format.hcl = hcl2rgb_1;

      ['lch','hcl'].forEach(function (m) { return input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$s(args, m);
              if (type$a(args) === 'array' && args.length === 3) {
                  return m;
              }
          }
      }); });

      /**
      	X11 color names

      	http://www.w3.org/TR/css3-color/#svg-color
      */

      var w3cx11 = {
          aliceblue: '#f0f8ff',
          antiquewhite: '#faebd7',
          aqua: '#00ffff',
          aquamarine: '#7fffd4',
          azure: '#f0ffff',
          beige: '#f5f5dc',
          bisque: '#ffe4c4',
          black: '#000000',
          blanchedalmond: '#ffebcd',
          blue: '#0000ff',
          blueviolet: '#8a2be2',
          brown: '#a52a2a',
          burlywood: '#deb887',
          cadetblue: '#5f9ea0',
          chartreuse: '#7fff00',
          chocolate: '#d2691e',
          coral: '#ff7f50',
          cornflower: '#6495ed',
          cornflowerblue: '#6495ed',
          cornsilk: '#fff8dc',
          crimson: '#dc143c',
          cyan: '#00ffff',
          darkblue: '#00008b',
          darkcyan: '#008b8b',
          darkgoldenrod: '#b8860b',
          darkgray: '#a9a9a9',
          darkgreen: '#006400',
          darkgrey: '#a9a9a9',
          darkkhaki: '#bdb76b',
          darkmagenta: '#8b008b',
          darkolivegreen: '#556b2f',
          darkorange: '#ff8c00',
          darkorchid: '#9932cc',
          darkred: '#8b0000',
          darksalmon: '#e9967a',
          darkseagreen: '#8fbc8f',
          darkslateblue: '#483d8b',
          darkslategray: '#2f4f4f',
          darkslategrey: '#2f4f4f',
          darkturquoise: '#00ced1',
          darkviolet: '#9400d3',
          deeppink: '#ff1493',
          deepskyblue: '#00bfff',
          dimgray: '#696969',
          dimgrey: '#696969',
          dodgerblue: '#1e90ff',
          firebrick: '#b22222',
          floralwhite: '#fffaf0',
          forestgreen: '#228b22',
          fuchsia: '#ff00ff',
          gainsboro: '#dcdcdc',
          ghostwhite: '#f8f8ff',
          gold: '#ffd700',
          goldenrod: '#daa520',
          gray: '#808080',
          green: '#008000',
          greenyellow: '#adff2f',
          grey: '#808080',
          honeydew: '#f0fff0',
          hotpink: '#ff69b4',
          indianred: '#cd5c5c',
          indigo: '#4b0082',
          ivory: '#fffff0',
          khaki: '#f0e68c',
          laserlemon: '#ffff54',
          lavender: '#e6e6fa',
          lavenderblush: '#fff0f5',
          lawngreen: '#7cfc00',
          lemonchiffon: '#fffacd',
          lightblue: '#add8e6',
          lightcoral: '#f08080',
          lightcyan: '#e0ffff',
          lightgoldenrod: '#fafad2',
          lightgoldenrodyellow: '#fafad2',
          lightgray: '#d3d3d3',
          lightgreen: '#90ee90',
          lightgrey: '#d3d3d3',
          lightpink: '#ffb6c1',
          lightsalmon: '#ffa07a',
          lightseagreen: '#20b2aa',
          lightskyblue: '#87cefa',
          lightslategray: '#778899',
          lightslategrey: '#778899',
          lightsteelblue: '#b0c4de',
          lightyellow: '#ffffe0',
          lime: '#00ff00',
          limegreen: '#32cd32',
          linen: '#faf0e6',
          magenta: '#ff00ff',
          maroon: '#800000',
          maroon2: '#7f0000',
          maroon3: '#b03060',
          mediumaquamarine: '#66cdaa',
          mediumblue: '#0000cd',
          mediumorchid: '#ba55d3',
          mediumpurple: '#9370db',
          mediumseagreen: '#3cb371',
          mediumslateblue: '#7b68ee',
          mediumspringgreen: '#00fa9a',
          mediumturquoise: '#48d1cc',
          mediumvioletred: '#c71585',
          midnightblue: '#191970',
          mintcream: '#f5fffa',
          mistyrose: '#ffe4e1',
          moccasin: '#ffe4b5',
          navajowhite: '#ffdead',
          navy: '#000080',
          oldlace: '#fdf5e6',
          olive: '#808000',
          olivedrab: '#6b8e23',
          orange: '#ffa500',
          orangered: '#ff4500',
          orchid: '#da70d6',
          palegoldenrod: '#eee8aa',
          palegreen: '#98fb98',
          paleturquoise: '#afeeee',
          palevioletred: '#db7093',
          papayawhip: '#ffefd5',
          peachpuff: '#ffdab9',
          peru: '#cd853f',
          pink: '#ffc0cb',
          plum: '#dda0dd',
          powderblue: '#b0e0e6',
          purple: '#800080',
          purple2: '#7f007f',
          purple3: '#a020f0',
          rebeccapurple: '#663399',
          red: '#ff0000',
          rosybrown: '#bc8f8f',
          royalblue: '#4169e1',
          saddlebrown: '#8b4513',
          salmon: '#fa8072',
          sandybrown: '#f4a460',
          seagreen: '#2e8b57',
          seashell: '#fff5ee',
          sienna: '#a0522d',
          silver: '#c0c0c0',
          skyblue: '#87ceeb',
          slateblue: '#6a5acd',
          slategray: '#708090',
          slategrey: '#708090',
          snow: '#fffafa',
          springgreen: '#00ff7f',
          steelblue: '#4682b4',
          tan: '#d2b48c',
          teal: '#008080',
          thistle: '#d8bfd8',
          tomato: '#ff6347',
          turquoise: '#40e0d0',
          violet: '#ee82ee',
          wheat: '#f5deb3',
          white: '#ffffff',
          whitesmoke: '#f5f5f5',
          yellow: '#ffff00',
          yellowgreen: '#9acd32'
      };

      var w3cx11_1 = w3cx11;

      var type$b = utils.type;





      Color_1.prototype.name = function() {
          var hex = rgb2hex_1(this._rgb, 'rgb');
          for (var i = 0, list = Object.keys(w3cx11_1); i < list.length; i += 1) {
              var n = list[i];

              if (w3cx11_1[n] === hex) { return n.toLowerCase(); }
          }
          return hex;
      };

      input.format.named = function (name) {
          name = name.toLowerCase();
          if (w3cx11_1[name]) { return hex2rgb_1(w3cx11_1[name]); }
          throw new Error('unknown color name: '+name);
      };

      input.autodetect.push({
          p: 5,
          test: function (h) {
              var rest = [], len = arguments.length - 1;
              while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

              if (!rest.length && type$b(h) === 'string' && w3cx11_1[h.toLowerCase()]) {
                  return 'named';
              }
          }
      });

      var unpack$t = utils.unpack;

      var rgb2num = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$t(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          return (r << 16) + (g << 8) + b;
      };

      var rgb2num_1 = rgb2num;

      var type$c = utils.type;

      var num2rgb = function (num) {
          if (type$c(num) == "number" && num >= 0 && num <= 0xFFFFFF) {
              var r = num >> 16;
              var g = (num >> 8) & 0xFF;
              var b = num & 0xFF;
              return [r,g,b,1];
          }
          throw new Error("unknown num color: "+num);
      };

      var num2rgb_1 = num2rgb;

      var type$d = utils.type;



      Color_1.prototype.num = function() {
          return rgb2num_1(this._rgb);
      };

      chroma_1.num = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['num']) ));
      };

      input.format.num = num2rgb_1;

      input.autodetect.push({
          p: 5,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              if (args.length === 1 && type$d(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xFFFFFF) {
                  return 'num';
              }
          }
      });

      var unpack$u = utils.unpack;
      var type$e = utils.type;
      var round$5 = Math.round;

      Color_1.prototype.rgb = function(rnd) {
          if ( rnd === void 0 ) rnd=true;

          if (rnd === false) { return this._rgb.slice(0,3); }
          return this._rgb.slice(0,3).map(round$5);
      };

      Color_1.prototype.rgba = function(rnd) {
          if ( rnd === void 0 ) rnd=true;

          return this._rgb.slice(0,4).map(function (v,i) {
              return i<3 ? (rnd === false ? v : round$5(v)) : v;
          });
      };

      chroma_1.rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['rgb']) ));
      };

      input.format.rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var rgba = unpack$u(args, 'rgba');
          if (rgba[3] === undefined) { rgba[3] = 1; }
          return rgba;
      };

      input.autodetect.push({
          p: 3,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$u(args, 'rgba');
              if (type$e(args) === 'array' && (args.length === 3 ||
                  args.length === 4 && type$e(args[3]) == 'number' && args[3] >= 0 && args[3] <= 1)) {
                  return 'rgb';
              }
          }
      });

      /*
       * Based on implementation by Neil Bartlett
       * https://github.com/neilbartlett/color-temperature
       */

      var log = Math.log;

      var temperature2rgb = function (kelvin) {
          var temp = kelvin / 100;
          var r,g,b;
          if (temp < 66) {
              r = 255;
              g = -155.25485562709179 - 0.44596950469579133 * (g = temp-2) + 104.49216199393888 * log(g);
              b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp-10) + 115.67994401066147 * log(b);
          } else {
              r = 351.97690566805693 + 0.114206453784165 * (r = temp-55) - 40.25366309332127 * log(r);
              g = 325.4494125711974 + 0.07943456536662342 * (g = temp-50) - 28.0852963507957 * log(g);
              b = 255;
          }
          return [r,g,b,1];
      };

      var temperature2rgb_1 = temperature2rgb;

      /*
       * Based on implementation by Neil Bartlett
       * https://github.com/neilbartlett/color-temperature
       **/


      var unpack$v = utils.unpack;
      var round$6 = Math.round;

      var rgb2temperature = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var rgb = unpack$v(args, 'rgb');
          var r = rgb[0], b = rgb[2];
          var minTemp = 1000;
          var maxTemp = 40000;
          var eps = 0.4;
          var temp;
          while (maxTemp - minTemp > eps) {
              temp = (maxTemp + minTemp) * 0.5;
              var rgb$1 = temperature2rgb_1(temp);
              if ((rgb$1[2] / rgb$1[0]) >= (b / r)) {
                  maxTemp = temp;
              } else {
                  minTemp = temp;
              }
          }
          return round$6(temp);
      };

      var rgb2temperature_1 = rgb2temperature;

      Color_1.prototype.temp =
      Color_1.prototype.kelvin =
      Color_1.prototype.temperature = function() {
          return rgb2temperature_1(this._rgb);
      };

      chroma_1.temp =
      chroma_1.kelvin =
      chroma_1.temperature = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['temp']) ));
      };

      input.format.temp =
      input.format.kelvin =
      input.format.temperature = temperature2rgb_1;

      var type$f = utils.type;

      Color_1.prototype.alpha = function(a, mutate) {
          if ( mutate === void 0 ) mutate=false;

          if (a !== undefined && type$f(a) === 'number') {
              if (mutate) {
                  this._rgb[3] = a;
                  return this;
              }
              return new Color_1([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
          }
          return this._rgb[3];
      };

      Color_1.prototype.clipped = function() {
          return this._rgb._clipped || false;
      };

      Color_1.prototype.darken = function(amount) {
      	if ( amount === void 0 ) amount=1;

      	var me = this;
      	var lab = me.lab();
      	lab[0] -= labConstants.Kn * amount;
      	return new Color_1(lab, 'lab').alpha(me.alpha(), true);
      };

      Color_1.prototype.brighten = function(amount) {
      	if ( amount === void 0 ) amount=1;

      	return this.darken(-amount);
      };

      Color_1.prototype.darker = Color_1.prototype.darken;
      Color_1.prototype.brighter = Color_1.prototype.brighten;

      Color_1.prototype.get = function(mc) {
          var ref = mc.split('.');
          var mode = ref[0];
          var channel = ref[1];
          var src = this[mode]();
          if (channel) {
              var i = mode.indexOf(channel);
              if (i > -1) { return src[i]; }
              throw new Error(("unknown channel " + channel + " in mode " + mode));
          } else {
              return src;
          }
      };

      var type$g = utils.type;
      var pow$2 = Math.pow;

      var EPS = 1e-7;
      var MAX_ITER = 20;

      Color_1.prototype.luminance = function(lum) {
          if (lum !== undefined && type$g(lum) === 'number') {
              if (lum === 0) {
                  // return pure black
                  return new Color_1([0,0,0,this._rgb[3]], 'rgb');
              }
              if (lum === 1) {
                  // return pure white
                  return new Color_1([255,255,255,this._rgb[3]], 'rgb');
              }
              // compute new color using...
              var cur_lum = this.luminance();
              var mode = 'rgb';
              var max_iter = MAX_ITER;

              var test = function (low, high) {
                  var mid = low.interpolate(high, 0.5, mode);
                  var lm = mid.luminance();
                  if (Math.abs(lum - lm) < EPS || !max_iter--) {
                      // close enough
                      return mid;
                  }
                  return lm > lum ? test(low, mid) : test(mid, high);
              };

              var rgb = (cur_lum > lum ? test(new Color_1([0,0,0]), this) : test(this, new Color_1([255,255,255]))).rgb();
              return new Color_1(rgb.concat( [this._rgb[3]]));
          }
          return rgb2luminance.apply(void 0, (this._rgb).slice(0,3));
      };


      var rgb2luminance = function (r,g,b) {
          // relative luminance
          // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
          r = luminance_x(r);
          g = luminance_x(g);
          b = luminance_x(b);
          return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };

      var luminance_x = function (x) {
          x /= 255;
          return x <= 0.03928 ? x/12.92 : pow$2((x+0.055)/1.055, 2.4);
      };

      var interpolator = {};

      var type$h = utils.type;


      var mix = function (col1, col2, f) {
          if ( f === void 0 ) f=0.5;
          var rest = [], len = arguments.length - 3;
          while ( len-- > 0 ) rest[ len ] = arguments[ len + 3 ];

          var mode = rest[0] || 'lrgb';
          if (!interpolator[mode] && !rest.length) {
              // fall back to the first supported mode
              mode = Object.keys(interpolator)[0];
          }
          if (!interpolator[mode]) {
              throw new Error(("interpolation mode " + mode + " is not defined"));
          }
          if (type$h(col1) !== 'object') { col1 = new Color_1(col1); }
          if (type$h(col2) !== 'object') { col2 = new Color_1(col2); }
          return interpolator[mode](col1, col2, f)
              .alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
      };

      Color_1.prototype.mix =
      Color_1.prototype.interpolate = function(col2, f) {
      	if ( f === void 0 ) f=0.5;
      	var rest = [], len = arguments.length - 2;
      	while ( len-- > 0 ) rest[ len ] = arguments[ len + 2 ];

      	return mix.apply(void 0, [ this, col2, f ].concat( rest ));
      };

      Color_1.prototype.premultiply = function(mutate) {
      	if ( mutate === void 0 ) mutate=false;

      	var rgb = this._rgb;
      	var a = rgb[3];
      	if (mutate) {
      		this._rgb = [rgb[0]*a, rgb[1]*a, rgb[2]*a, a];
      		return this;
      	} else {
      		return new Color_1([rgb[0]*a, rgb[1]*a, rgb[2]*a, a], 'rgb');
      	}
      };

      Color_1.prototype.saturate = function(amount) {
      	if ( amount === void 0 ) amount=1;

      	var me = this;
      	var lch = me.lch();
      	lch[1] += labConstants.Kn * amount;
      	if (lch[1] < 0) { lch[1] = 0; }
      	return new Color_1(lch, 'lch').alpha(me.alpha(), true);
      };

      Color_1.prototype.desaturate = function(amount) {
      	if ( amount === void 0 ) amount=1;

      	return this.saturate(-amount);
      };

      var type$i = utils.type;

      Color_1.prototype.set = function(mc, value, mutate) {
          if ( mutate === void 0 ) mutate=false;

          var ref = mc.split('.');
          var mode = ref[0];
          var channel = ref[1];
          var src = this[mode]();
          if (channel) {
              var i = mode.indexOf(channel);
              if (i > -1) {
                  if (type$i(value) == 'string') {
                      switch(value.charAt(0)) {
                          case '+': src[i] += +value; break;
                          case '-': src[i] += +value; break;
                          case '*': src[i] *= +(value.substr(1)); break;
                          case '/': src[i] /= +(value.substr(1)); break;
                          default: src[i] = +value;
                      }
                  } else if (type$i(value) === 'number') {
                      src[i] = value;
                  } else {
                      throw new Error("unsupported value for Color.set");
                  }
                  var out = new Color_1(src, mode);
                  if (mutate) {
                      this._rgb = out._rgb;
                      return this;
                  }
                  return out;
              }
              throw new Error(("unknown channel " + channel + " in mode " + mode));
          } else {
              return src;
          }
      };

      var rgb$1 = function (col1, col2, f) {
          var xyz0 = col1._rgb;
          var xyz1 = col2._rgb;
          return new Color_1(
              xyz0[0] + f * (xyz1[0]-xyz0[0]),
              xyz0[1] + f * (xyz1[1]-xyz0[1]),
              xyz0[2] + f * (xyz1[2]-xyz0[2]),
              'rgb'
          )
      };

      // register interpolator
      interpolator.rgb = rgb$1;

      var sqrt$2 = Math.sqrt;
      var pow$3 = Math.pow;

      var lrgb = function (col1, col2, f) {
          var ref = col1._rgb;
          var x1 = ref[0];
          var y1 = ref[1];
          var z1 = ref[2];
          var ref$1 = col2._rgb;
          var x2 = ref$1[0];
          var y2 = ref$1[1];
          var z2 = ref$1[2];
          return new Color_1(
              sqrt$2(pow$3(x1,2) * (1-f) + pow$3(x2,2) * f),
              sqrt$2(pow$3(y1,2) * (1-f) + pow$3(y2,2) * f),
              sqrt$2(pow$3(z1,2) * (1-f) + pow$3(z2,2) * f),
              'rgb'
          )
      };

      // register interpolator
      interpolator.lrgb = lrgb;

      var lab$1 = function (col1, col2, f) {
          var xyz0 = col1.lab();
          var xyz1 = col2.lab();
          return new Color_1(
              xyz0[0] + f * (xyz1[0]-xyz0[0]),
              xyz0[1] + f * (xyz1[1]-xyz0[1]),
              xyz0[2] + f * (xyz1[2]-xyz0[2]),
              'lab'
          )
      };

      // register interpolator
      interpolator.lab = lab$1;

      var _hsx = function (col1, col2, f, m) {
          var assign, assign$1;

          var xyz0, xyz1;
          if (m === 'hsl') {
              xyz0 = col1.hsl();
              xyz1 = col2.hsl();
          } else if (m === 'hsv') {
              xyz0 = col1.hsv();
              xyz1 = col2.hsv();
          } else if (m === 'hcg') {
              xyz0 = col1.hcg();
              xyz1 = col2.hcg();
          } else if (m === 'hsi') {
              xyz0 = col1.hsi();
              xyz1 = col2.hsi();
          } else if (m === 'lch' || m === 'hcl') {
              m = 'hcl';
              xyz0 = col1.hcl();
              xyz1 = col2.hcl();
          }

          var hue0, hue1, sat0, sat1, lbv0, lbv1;
          if (m.substr(0, 1) === 'h') {
              (assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2]);
              (assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2]);
          }

          var sat, hue, lbv, dh;

          if (!isNaN(hue0) && !isNaN(hue1)) {
              // both colors have hue
              if (hue1 > hue0 && hue1 - hue0 > 180) {
                  dh = hue1-(hue0+360);
              } else if (hue1 < hue0 && hue0 - hue1 > 180) {
                  dh = hue1+360-hue0;
              } else {
                  dh = hue1 - hue0;
              }
              hue = hue0 + f * dh;
          } else if (!isNaN(hue0)) {
              hue = hue0;
              if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') { sat = sat0; }
          } else if (!isNaN(hue1)) {
              hue = hue1;
              if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') { sat = sat1; }
          } else {
              hue = Number.NaN;
          }

          if (sat === undefined) { sat = sat0 + f * (sat1 - sat0); }
          lbv = lbv0 + f * (lbv1-lbv0);
          return new Color_1([hue, sat, lbv], m);
      };

      var lch$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'lch');
      };

      // register interpolator
      interpolator.lch = lch$1;
      interpolator.hcl = lch$1;

      var num$1 = function (col1, col2, f) {
          var c1 = col1.num();
          var c2 = col2.num();
          return new Color_1(c1 + f * (c2-c1), 'num')
      };

      // register interpolator
      interpolator.num = num$1;

      var hcg$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'hcg');
      };

      // register interpolator
      interpolator.hcg = hcg$1;

      var hsi$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'hsi');
      };

      // register interpolator
      interpolator.hsi = hsi$1;

      var hsl$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'hsl');
      };

      // register interpolator
      interpolator.hsl = hsl$1;

      var hsv$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'hsv');
      };

      // register interpolator
      interpolator.hsv = hsv$1;

      var clip_rgb$2 = utils.clip_rgb;
      var pow$4 = Math.pow;
      var sqrt$3 = Math.sqrt;
      var PI$1 = Math.PI;
      var cos$2 = Math.cos;
      var sin$1 = Math.sin;
      var atan2$1 = Math.atan2;

      var average = function (colors, mode, weights) {
          if ( mode === void 0 ) mode='lrgb';
          if ( weights === void 0 ) weights=null;

          var l = colors.length;
          if (!weights) { weights = Array.from(new Array(l)).map(function () { return 1; }); }
          // normalize weights
          var k = l / weights.reduce(function(a, b) { return a + b; });
          weights.forEach(function (w,i) { weights[i] *= k; });
          // convert colors to Color objects
          colors = colors.map(function (c) { return new Color_1(c); });
          if (mode === 'lrgb') {
              return _average_lrgb(colors, weights)
          }
          var first = colors.shift();
          var xyz = first.get(mode);
          var cnt = [];
          var dx = 0;
          var dy = 0;
          // initial color
          for (var i=0; i<xyz.length; i++) {
              xyz[i] = (xyz[i] || 0) * weights[0];
              cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
              if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
                  var A = xyz[i] / 180 * PI$1;
                  dx += cos$2(A) * weights[0];
                  dy += sin$1(A) * weights[0];
              }
          }

          var alpha = first.alpha() * weights[0];
          colors.forEach(function (c,ci) {
              var xyz2 = c.get(mode);
              alpha += c.alpha() * weights[ci+1];
              for (var i=0; i<xyz.length; i++) {
                  if (!isNaN(xyz2[i])) {
                      cnt[i] += weights[ci+1];
                      if (mode.charAt(i) === 'h') {
                          var A = xyz2[i] / 180 * PI$1;
                          dx += cos$2(A) * weights[ci+1];
                          dy += sin$1(A) * weights[ci+1];
                      } else {
                          xyz[i] += xyz2[i] * weights[ci+1];
                      }
                  }
              }
          });

          for (var i$1=0; i$1<xyz.length; i$1++) {
              if (mode.charAt(i$1) === 'h') {
                  var A$1 = atan2$1(dy / cnt[i$1], dx / cnt[i$1]) / PI$1 * 180;
                  while (A$1 < 0) { A$1 += 360; }
                  while (A$1 >= 360) { A$1 -= 360; }
                  xyz[i$1] = A$1;
              } else {
                  xyz[i$1] = xyz[i$1]/cnt[i$1];
              }
          }
          alpha /= l;
          return (new Color_1(xyz, mode)).alpha(alpha > 0.99999 ? 1 : alpha, true);
      };


      var _average_lrgb = function (colors, weights) {
          var l = colors.length;
          var xyz = [0,0,0,0];
          for (var i=0; i < colors.length; i++) {
              var col = colors[i];
              var f = weights[i] / l;
              var rgb = col._rgb;
              xyz[0] += pow$4(rgb[0],2) * f;
              xyz[1] += pow$4(rgb[1],2) * f;
              xyz[2] += pow$4(rgb[2],2) * f;
              xyz[3] += rgb[3] * f;
          }
          xyz[0] = sqrt$3(xyz[0]);
          xyz[1] = sqrt$3(xyz[1]);
          xyz[2] = sqrt$3(xyz[2]);
          if (xyz[3] > 0.9999999) { xyz[3] = 1; }
          return new Color_1(clip_rgb$2(xyz));
      };

      // minimal multi-purpose interface

      // @requires utils color analyze


      var type$j = utils.type;

      var pow$5 = Math.pow;

      var scale = function(colors) {

          // constructor
          var _mode = 'rgb';
          var _nacol = chroma_1('#ccc');
          var _spread = 0;
          // const _fixed = false;
          var _domain = [0, 1];
          var _pos = [];
          var _padding = [0,0];
          var _classes = false;
          var _colors = [];
          var _out = false;
          var _min = 0;
          var _max = 1;
          var _correctLightness = false;
          var _colorCache = {};
          var _useCache = true;
          var _gamma = 1;

          // private methods

          var setColors = function(colors) {
              colors = colors || ['#fff', '#000'];
              if (colors && type$j(colors) === 'string' && chroma_1.brewer &&
                  chroma_1.brewer[colors.toLowerCase()]) {
                  colors = chroma_1.brewer[colors.toLowerCase()];
              }
              if (type$j(colors) === 'array') {
                  // handle single color
                  if (colors.length === 1) {
                      colors = [colors[0], colors[0]];
                  }
                  // make a copy of the colors
                  colors = colors.slice(0);
                  // convert to chroma classes
                  for (var c=0; c<colors.length; c++) {
                      colors[c] = chroma_1(colors[c]);
                  }
                  // auto-fill color position
                  _pos.length = 0;
                  for (var c$1=0; c$1<colors.length; c$1++) {
                      _pos.push(c$1/(colors.length-1));
                  }
              }
              resetCache();
              return _colors = colors;
          };

          var getClass = function(value) {
              if (_classes != null) {
                  var n = _classes.length-1;
                  var i = 0;
                  while (i < n && value >= _classes[i]) {
                      i++;
                  }
                  return i-1;
              }
              return 0;
          };

          var tMapLightness = function (t) { return t; };
          var tMapDomain = function (t) { return t; };

          // const classifyValue = function(value) {
          //     let val = value;
          //     if (_classes.length > 2) {
          //         const n = _classes.length-1;
          //         const i = getClass(value);
          //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
          //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
          //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
          //     }
          //     return val;
          // };

          var getColor = function(val, bypassMap) {
              var col, t;
              if (bypassMap == null) { bypassMap = false; }
              if (isNaN(val) || (val === null)) { return _nacol; }
              if (!bypassMap) {
                  if (_classes && (_classes.length > 2)) {
                      // find the class
                      var c = getClass(val);
                      t = c / (_classes.length-2);
                  } else if (_max !== _min) {
                      // just interpolate between min/max
                      t = (val - _min) / (_max - _min);
                  } else {
                      t = 1;
                  }
              } else {
                  t = val;
              }

              // domain map
              t = tMapDomain(t);

              if (!bypassMap) {
                  t = tMapLightness(t);  // lightness correction
              }

              if (_gamma !== 1) { t = pow$5(t, _gamma); }

              t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));

              t = Math.min(1, Math.max(0, t));

              var k = Math.floor(t * 10000);

              if (_useCache && _colorCache[k]) {
                  col = _colorCache[k];
              } else {
                  if (type$j(_colors) === 'array') {
                      //for i in [0.._pos.length-1]
                      for (var i=0; i<_pos.length; i++) {
                          var p = _pos[i];
                          if (t <= p) {
                              col = _colors[i];
                              break;
                          }
                          if ((t >= p) && (i === (_pos.length-1))) {
                              col = _colors[i];
                              break;
                          }
                          if (t > p && t < _pos[i+1]) {
                              t = (t-p)/(_pos[i+1]-p);
                              col = chroma_1.interpolate(_colors[i], _colors[i+1], t, _mode);
                              break;
                          }
                      }
                  } else if (type$j(_colors) === 'function') {
                      col = _colors(t);
                  }
                  if (_useCache) { _colorCache[k] = col; }
              }
              return col;
          };

          var resetCache = function () { return _colorCache = {}; };

          setColors(colors);

          // public interface

          var f = function(v) {
              var c = chroma_1(getColor(v));
              if (_out && c[_out]) { return c[_out](); } else { return c; }
          };

          f.classes = function(classes) {
              if (classes != null) {
                  if (type$j(classes) === 'array') {
                      _classes = classes;
                      _domain = [classes[0], classes[classes.length-1]];
                  } else {
                      var d = chroma_1.analyze(_domain);
                      if (classes === 0) {
                          _classes = [d.min, d.max];
                      } else {
                          _classes = chroma_1.limits(d, 'e', classes);
                      }
                  }
                  return f;
              }
              return _classes;
          };


          f.domain = function(domain) {
              if (!arguments.length) {
                  return _domain;
              }
              _min = domain[0];
              _max = domain[domain.length-1];
              _pos = [];
              var k = _colors.length;
              if ((domain.length === k) && (_min !== _max)) {
                  // update positions
                  for (var i = 0, list = Array.from(domain); i < list.length; i += 1) {
                      var d = list[i];

                    _pos.push((d-_min) / (_max-_min));
                  }
              } else {
                  for (var c=0; c<k; c++) {
                      _pos.push(c/(k-1));
                  }
                  if (domain.length > 2) {
                      // set domain map
                      var tOut = domain.map(function (d,i) { return i/(domain.length-1); });
                      var tBreaks = domain.map(function (d) { return (d - _min) / (_max - _min); });
                      if (!tBreaks.every(function (val, i) { return tOut[i] === val; })) {
                          tMapDomain = function (t) {
                              if (t <= 0 || t >= 1) { return t; }
                              var i = 0;
                              while (t >= tBreaks[i+1]) { i++; }
                              var f = (t - tBreaks[i]) / (tBreaks[i+1] - tBreaks[i]);
                              var out = tOut[i] + f * (tOut[i+1] - tOut[i]);
                              return out;
                          };
                      }

                  }
              }
              _domain = [_min, _max];
              return f;
          };

          f.mode = function(_m) {
              if (!arguments.length) {
                  return _mode;
              }
              _mode = _m;
              resetCache();
              return f;
          };

          f.range = function(colors, _pos) {
              setColors(colors);
              return f;
          };

          f.out = function(_o) {
              _out = _o;
              return f;
          };

          f.spread = function(val) {
              if (!arguments.length) {
                  return _spread;
              }
              _spread = val;
              return f;
          };

          f.correctLightness = function(v) {
              if (v == null) { v = true; }
              _correctLightness = v;
              resetCache();
              if (_correctLightness) {
                  tMapLightness = function(t) {
                      var L0 = getColor(0, true).lab()[0];
                      var L1 = getColor(1, true).lab()[0];
                      var pol = L0 > L1;
                      var L_actual = getColor(t, true).lab()[0];
                      var L_ideal = L0 + ((L1 - L0) * t);
                      var L_diff = L_actual - L_ideal;
                      var t0 = 0;
                      var t1 = 1;
                      var max_iter = 20;
                      while ((Math.abs(L_diff) > 1e-2) && (max_iter-- > 0)) {
                          (function() {
                              if (pol) { L_diff *= -1; }
                              if (L_diff < 0) {
                                  t0 = t;
                                  t += (t1 - t) * 0.5;
                              } else {
                                  t1 = t;
                                  t += (t0 - t) * 0.5;
                              }
                              L_actual = getColor(t, true).lab()[0];
                              return L_diff = L_actual - L_ideal;
                          })();
                      }
                      return t;
                  };
              } else {
                  tMapLightness = function (t) { return t; };
              }
              return f;
          };

          f.padding = function(p) {
              if (p != null) {
                  if (type$j(p) === 'number') {
                      p = [p,p];
                  }
                  _padding = p;
                  return f;
              } else {
                  return _padding;
              }
          };

          f.colors = function(numColors, out) {
              // If no arguments are given, return the original colors that were provided
              if (arguments.length < 2) { out = 'hex'; }
              var result = [];

              if (arguments.length === 0) {
                  result = _colors.slice(0);

              } else if (numColors === 1) {
                  result = [f(0.5)];

              } else if (numColors > 1) {
                  var dm = _domain[0];
                  var dd = _domain[1] - dm;
                  result = __range__(0, numColors, false).map(function (i) { return f( dm + ((i/(numColors-1)) * dd) ); });

              } else { // returns all colors based on the defined classes
                  colors = [];
                  var samples = [];
                  if (_classes && (_classes.length > 2)) {
                      for (var i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                          samples.push((_classes[i-1]+_classes[i])*0.5);
                      }
                  } else {
                      samples = _domain;
                  }
                  result = samples.map(function (v) { return f(v); });
              }

              if (chroma_1[out]) {
                  result = result.map(function (c) { return c[out](); });
              }
              return result;
          };

          f.cache = function(c) {
              if (c != null) {
                  _useCache = c;
                  return f;
              } else {
                  return _useCache;
              }
          };

          f.gamma = function(g) {
              if (g != null) {
                  _gamma = g;
                  return f;
              } else {
                  return _gamma;
              }
          };

          f.nodata = function(d) {
              if (d != null) {
                  _nacol = chroma_1(d);
                  return f;
              } else {
                  return _nacol;
              }
          };

          return f;
      };

      function __range__(left, right, inclusive) {
        var range = [];
        var ascending = left < right;
        var end = !inclusive ? right : ascending ? right + 1 : right - 1;
        for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
          range.push(i);
        }
        return range;
      }

      //
      // interpolates between a set of colors uzing a bezier spline
      //

      // @requires utils lab




      var bezier = function(colors) {
          var assign, assign$1, assign$2;

          var I, lab0, lab1, lab2;
          colors = colors.map(function (c) { return new Color_1(c); });
          if (colors.length === 2) {
              // linear interpolation
              (assign = colors.map(function (c) { return c.lab(); }), lab0 = assign[0], lab1 = assign[1]);
              I = function(t) {
                  var lab = ([0, 1, 2].map(function (i) { return lab0[i] + (t * (lab1[i] - lab0[i])); }));
                  return new Color_1(lab, 'lab');
              };
          } else if (colors.length === 3) {
              // quadratic bezier interpolation
              (assign$1 = colors.map(function (c) { return c.lab(); }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2]);
              I = function(t) {
                  var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t) * lab0[i]) + (2 * (1-t) * t * lab1[i]) + (t * t * lab2[i]); }));
                  return new Color_1(lab, 'lab');
              };
          } else if (colors.length === 4) {
              // cubic bezier interpolation
              var lab3;
              (assign$2 = colors.map(function (c) { return c.lab(); }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3]);
              I = function(t) {
                  var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t)*(1-t) * lab0[i]) + (3 * (1-t) * (1-t) * t * lab1[i]) + (3 * (1-t) * t * t * lab2[i]) + (t*t*t * lab3[i]); }));
                  return new Color_1(lab, 'lab');
              };
          } else if (colors.length === 5) {
              var I0 = bezier(colors.slice(0, 3));
              var I1 = bezier(colors.slice(2, 5));
              I = function(t) {
                  if (t < 0.5) {
                      return I0(t*2);
                  } else {
                      return I1((t-0.5)*2);
                  }
              };
          }
          return I;
      };

      var bezier_1 = function (colors) {
          var f = bezier(colors);
          f.scale = function () { return scale(f); };
          return f;
      };

      /*
       * interpolates between a set of colors uzing a bezier spline
       * blend mode formulas taken from http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
       */




      var blend = function (bottom, top, mode) {
          if (!blend[mode]) {
              throw new Error('unknown blend mode ' + mode);
          }
          return blend[mode](bottom, top);
      };

      var blend_f = function (f) { return function (bottom,top) {
              var c0 = chroma_1(top).rgb();
              var c1 = chroma_1(bottom).rgb();
              return chroma_1.rgb(f(c0, c1));
          }; };

      var each = function (f) { return function (c0, c1) {
              var out = [];
              out[0] = f(c0[0], c1[0]);
              out[1] = f(c0[1], c1[1]);
              out[2] = f(c0[2], c1[2]);
              return out;
          }; };

      var normal = function (a) { return a; };
      var multiply = function (a,b) { return a * b / 255; };
      var darken$1 = function (a,b) { return a > b ? b : a; };
      var lighten = function (a,b) { return a > b ? a : b; };
      var screen = function (a,b) { return 255 * (1 - (1-a/255) * (1-b/255)); };
      var overlay = function (a,b) { return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255 ) * ( 1 - b / 255 )); };
      var burn = function (a,b) { return 255 * (1 - (1 - b / 255) / (a/255)); };
      var dodge = function (a,b) {
          if (a === 255) { return 255; }
          a = 255 * (b / 255) / (1 - a / 255);
          return a > 255 ? 255 : a
      };

      // # add = (a,b) ->
      // #     if (a + b > 255) then 255 else a + b

      blend.normal = blend_f(each(normal));
      blend.multiply = blend_f(each(multiply));
      blend.screen = blend_f(each(screen));
      blend.overlay = blend_f(each(overlay));
      blend.darken = blend_f(each(darken$1));
      blend.lighten = blend_f(each(lighten));
      blend.dodge = blend_f(each(dodge));
      blend.burn = blend_f(each(burn));
      // blend.add = blend_f(each(add));

      var blend_1 = blend;

      // cubehelix interpolation
      // based on D.A. Green "A colour scheme for the display of astronomical intensity images"
      // http://astron-soc.in/bulletin/11June/289392011.pdf

      var type$k = utils.type;
      var clip_rgb$3 = utils.clip_rgb;
      var TWOPI$2 = utils.TWOPI;
      var pow$6 = Math.pow;
      var sin$2 = Math.sin;
      var cos$3 = Math.cos;


      var cubehelix = function(start, rotations, hue, gamma, lightness) {
          if ( start === void 0 ) start=300;
          if ( rotations === void 0 ) rotations=-1.5;
          if ( hue === void 0 ) hue=1;
          if ( gamma === void 0 ) gamma=1;
          if ( lightness === void 0 ) lightness=[0,1];

          var dh = 0, dl;
          if (type$k(lightness) === 'array') {
              dl = lightness[1] - lightness[0];
          } else {
              dl = 0;
              lightness = [lightness, lightness];
          }

          var f = function(fract) {
              var a = TWOPI$2 * (((start+120)/360) + (rotations * fract));
              var l = pow$6(lightness[0] + (dl * fract), gamma);
              var h = dh !== 0 ? hue[0] + (fract * dh) : hue;
              var amp = (h * l * (1-l)) / 2;
              var cos_a = cos$3(a);
              var sin_a = sin$2(a);
              var r = l + (amp * ((-0.14861 * cos_a) + (1.78277* sin_a)));
              var g = l + (amp * ((-0.29227 * cos_a) - (0.90649* sin_a)));
              var b = l + (amp * (+1.97294 * cos_a));
              return chroma_1(clip_rgb$3([r*255,g*255,b*255,1]));
          };

          f.start = function(s) {
              if ((s == null)) { return start; }
              start = s;
              return f;
          };

          f.rotations = function(r) {
              if ((r == null)) { return rotations; }
              rotations = r;
              return f;
          };

          f.gamma = function(g) {
              if ((g == null)) { return gamma; }
              gamma = g;
              return f;
          };

          f.hue = function(h) {
              if ((h == null)) { return hue; }
              hue = h;
              if (type$k(hue) === 'array') {
                  dh = hue[1] - hue[0];
                  if (dh === 0) { hue = hue[1]; }
              } else {
                  dh = 0;
              }
              return f;
          };

          f.lightness = function(h) {
              if ((h == null)) { return lightness; }
              if (type$k(h) === 'array') {
                  lightness = h;
                  dl = h[1] - h[0];
              } else {
                  lightness = [h,h];
                  dl = 0;
              }
              return f;
          };

          f.scale = function () { return chroma_1.scale(f); };

          f.hue(hue);

          return f;
      };

      var digits = '0123456789abcdef';

      var floor$2 = Math.floor;
      var random = Math.random;

      var random_1 = function () {
          var code = '#';
          for (var i=0; i<6; i++) {
              code += digits.charAt(floor$2(random() * 16));
          }
          return new Color_1(code, 'hex');
      };

      var log$1 = Math.log;
      var pow$7 = Math.pow;
      var floor$3 = Math.floor;
      var abs = Math.abs;


      var analyze = function (data, key) {
          if ( key === void 0 ) key=null;

          var r = {
              min: Number.MAX_VALUE,
              max: Number.MAX_VALUE*-1,
              sum: 0,
              values: [],
              count: 0
          };
          if (type(data) === 'object') {
              data = Object.values(data);
          }
          data.forEach(function (val) {
              if (key && type(val) === 'object') { val = val[key]; }
              if (val !== undefined && val !== null && !isNaN(val)) {
                  r.values.push(val);
                  r.sum += val;
                  if (val < r.min) { r.min = val; }
                  if (val > r.max) { r.max = val; }
                  r.count += 1;
              }
          });

          r.domain = [r.min, r.max];

          r.limits = function (mode, num) { return limits(r, mode, num); };

          return r;
      };


      var limits = function (data, mode, num) {
          if ( mode === void 0 ) mode='equal';
          if ( num === void 0 ) num=7;

          if (type(data) == 'array') {
              data = analyze(data);
          }
          var min = data.min;
          var max = data.max;
          var values = data.values.sort(function (a,b) { return a-b; });

          if (num === 1) { return [min,max]; }

          var limits = [];

          if (mode.substr(0,1) === 'c') { // continuous
              limits.push(min);
              limits.push(max);
          }

          if (mode.substr(0,1) === 'e') { // equal interval
              limits.push(min);
              for (var i=1; i<num; i++) {
                  limits.push(min+((i/num)*(max-min)));
              }
              limits.push(max);
          }

          else if (mode.substr(0,1) === 'l') { // log scale
              if (min <= 0) {
                  throw new Error('Logarithmic scales are only possible for values > 0');
              }
              var min_log = Math.LOG10E * log$1(min);
              var max_log = Math.LOG10E * log$1(max);
              limits.push(min);
              for (var i$1=1; i$1<num; i$1++) {
                  limits.push(pow$7(10, min_log + ((i$1/num) * (max_log - min_log))));
              }
              limits.push(max);
          }

          else if (mode.substr(0,1) === 'q') { // quantile scale
              limits.push(min);
              for (var i$2=1; i$2<num; i$2++) {
                  var p = ((values.length-1) * i$2)/num;
                  var pb = floor$3(p);
                  if (pb === p) {
                      limits.push(values[pb]);
                  } else { // p > pb
                      var pr = p - pb;
                      limits.push((values[pb]*(1-pr)) + (values[pb+1]*pr));
                  }
              }
              limits.push(max);

          }

          else if (mode.substr(0,1) === 'k') { // k-means clustering
              /*
              implementation based on
              http://code.google.com/p/figue/source/browse/trunk/figue.js#336
              simplified for 1-d input values
              */
              var cluster;
              var n = values.length;
              var assignments = new Array(n);
              var clusterSizes = new Array(num);
              var repeat = true;
              var nb_iters = 0;
              var centroids = null;

              // get seed values
              centroids = [];
              centroids.push(min);
              for (var i$3=1; i$3<num; i$3++) {
                  centroids.push(min + ((i$3/num) * (max-min)));
              }
              centroids.push(max);

              while (repeat) {
                  // assignment step
                  for (var j=0; j<num; j++) {
                      clusterSizes[j] = 0;
                  }
                  for (var i$4=0; i$4<n; i$4++) {
                      var value = values[i$4];
                      var mindist = Number.MAX_VALUE;
                      var best = (void 0);
                      for (var j$1=0; j$1<num; j$1++) {
                          var dist = abs(centroids[j$1]-value);
                          if (dist < mindist) {
                              mindist = dist;
                              best = j$1;
                          }
                          clusterSizes[best]++;
                          assignments[i$4] = best;
                      }
                  }

                  // update centroids step
                  var newCentroids = new Array(num);
                  for (var j$2=0; j$2<num; j$2++) {
                      newCentroids[j$2] = null;
                  }
                  for (var i$5=0; i$5<n; i$5++) {
                      cluster = assignments[i$5];
                      if (newCentroids[cluster] === null) {
                          newCentroids[cluster] = values[i$5];
                      } else {
                          newCentroids[cluster] += values[i$5];
                      }
                  }
                  for (var j$3=0; j$3<num; j$3++) {
                      newCentroids[j$3] *= 1/clusterSizes[j$3];
                  }

                  // check convergence
                  repeat = false;
                  for (var j$4=0; j$4<num; j$4++) {
                      if (newCentroids[j$4] !== centroids[j$4]) {
                          repeat = true;
                          break;
                      }
                  }

                  centroids = newCentroids;
                  nb_iters++;

                  if (nb_iters > 200) {
                      repeat = false;
                  }
              }

              // finished k-means clustering
              // the next part is borrowed from gabrielflor.it
              var kClusters = {};
              for (var j$5=0; j$5<num; j$5++) {
                  kClusters[j$5] = [];
              }
              for (var i$6=0; i$6<n; i$6++) {
                  cluster = assignments[i$6];
                  kClusters[cluster].push(values[i$6]);
              }
              var tmpKMeansBreaks = [];
              for (var j$6=0; j$6<num; j$6++) {
                  tmpKMeansBreaks.push(kClusters[j$6][0]);
                  tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length-1]);
              }
              tmpKMeansBreaks = tmpKMeansBreaks.sort(function (a,b){ return a-b; });
              limits.push(tmpKMeansBreaks[0]);
              for (var i$7=1; i$7 < tmpKMeansBreaks.length; i$7+= 2) {
                  var v = tmpKMeansBreaks[i$7];
                  if (!isNaN(v) && (limits.indexOf(v) === -1)) {
                      limits.push(v);
                  }
              }
          }
          return limits;
      };

      var analyze_1 = {analyze: analyze, limits: limits};

      var contrast = function (a, b) {
          // WCAG contrast ratio
          // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
          a = new Color_1(a);
          b = new Color_1(b);
          var l1 = a.luminance();
          var l2 = b.luminance();
          return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
      };

      var sqrt$4 = Math.sqrt;
      var atan2$2 = Math.atan2;
      var abs$1 = Math.abs;
      var cos$4 = Math.cos;
      var PI$2 = Math.PI;

      var deltaE = function(a, b, L, C) {
          if ( L === void 0 ) L=1;
          if ( C === void 0 ) C=1;

          // Delta E (CMC)
          // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html
          a = new Color_1(a);
          b = new Color_1(b);
          var ref = Array.from(a.lab());
          var L1 = ref[0];
          var a1 = ref[1];
          var b1 = ref[2];
          var ref$1 = Array.from(b.lab());
          var L2 = ref$1[0];
          var a2 = ref$1[1];
          var b2 = ref$1[2];
          var c1 = sqrt$4((a1 * a1) + (b1 * b1));
          var c2 = sqrt$4((a2 * a2) + (b2 * b2));
          var sl = L1 < 16.0 ? 0.511 : (0.040975 * L1) / (1.0 + (0.01765 * L1));
          var sc = ((0.0638 * c1) / (1.0 + (0.0131 * c1))) + 0.638;
          var h1 = c1 < 0.000001 ? 0.0 : (atan2$2(b1, a1) * 180.0) / PI$2;
          while (h1 < 0) { h1 += 360; }
          while (h1 >= 360) { h1 -= 360; }
          var t = (h1 >= 164.0) && (h1 <= 345.0) ? (0.56 + abs$1(0.2 * cos$4((PI$2 * (h1 + 168.0)) / 180.0))) : (0.36 + abs$1(0.4 * cos$4((PI$2 * (h1 + 35.0)) / 180.0)));
          var c4 = c1 * c1 * c1 * c1;
          var f = sqrt$4(c4 / (c4 + 1900.0));
          var sh = sc * (((f * t) + 1.0) - f);
          var delL = L1 - L2;
          var delC = c1 - c2;
          var delA = a1 - a2;
          var delB = b1 - b2;
          var dH2 = ((delA * delA) + (delB * delB)) - (delC * delC);
          var v1 = delL / (L * sl);
          var v2 = delC / (C * sc);
          var v3 = sh;
          return sqrt$4((v1 * v1) + (v2 * v2) + (dH2 / (v3 * v3)));
      };

      // simple Euclidean distance
      var distance = function(a, b, mode) {
          if ( mode === void 0 ) mode='lab';

          // Delta E (CIE 1976)
          // see http://www.brucelindbloom.com/index.html?Equations.html
          a = new Color_1(a);
          b = new Color_1(b);
          var l1 = a.get(mode);
          var l2 = b.get(mode);
          var sum_sq = 0;
          for (var i in l1) {
              var d = (l1[i] || 0) - (l2[i] || 0);
              sum_sq += d*d;
          }
          return Math.sqrt(sum_sq);
      };

      var valid = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          try {
              new (Function.prototype.bind.apply( Color_1, [ null ].concat( args) ));
              return true;
          } catch (e) {
              return false;
          }
      };

      // some pre-defined color scales:




      var scales = {
      	cool: function cool() { return scale([chroma_1.hsl(180,1,.9), chroma_1.hsl(250,.7,.4)]) },
      	hot: function hot() { return scale(['#000','#f00','#ff0','#fff']).mode('rgb') }
      };

      /**
          ColorBrewer colors for chroma.js

          Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
          Pennsylvania State University.

          Licensed under the Apache License, Version 2.0 (the "License");
          you may not use this file except in compliance with the License.
          You may obtain a copy of the License at
          http://www.apache.org/licenses/LICENSE-2.0

          Unless required by applicable law or agreed to in writing, software distributed
          under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
          CONDITIONS OF ANY KIND, either express or implied. See the License for the
          specific language governing permissions and limitations under the License.
      */

      var colorbrewer = {
          // sequential
          OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
          PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
          BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
          Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
          BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
          YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
          YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
          Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
          RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
          Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
          YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
          Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
          GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
          Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
          YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
          PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
          Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
          PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
          Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],

          // diverging

          Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
          RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
          RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
          PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
          PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
          RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
          BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
          RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
          PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],

          // qualitative

          Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
          Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
          Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
          Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
          Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
          Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
          Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
          Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2'],
      };

      // add lowercase aliases for case-insensitive matches
      for (var i$1 = 0, list$1 = Object.keys(colorbrewer); i$1 < list$1.length; i$1 += 1) {
          var key = list$1[i$1];

          colorbrewer[key.toLowerCase()] = colorbrewer[key];
      }

      var colorbrewer_1 = colorbrewer;

      // feel free to comment out anything to rollup
      // a smaller chroma.js built

      // io --> convert colors















      // operators --> modify existing Colors










      // interpolators










      // generators -- > create new colors
      chroma_1.average = average;
      chroma_1.bezier = bezier_1;
      chroma_1.blend = blend_1;
      chroma_1.cubehelix = cubehelix;
      chroma_1.mix = chroma_1.interpolate = mix;
      chroma_1.random = random_1;
      chroma_1.scale = scale;

      // other utility methods
      chroma_1.analyze = analyze_1.analyze;
      chroma_1.contrast = contrast;
      chroma_1.deltaE = deltaE;
      chroma_1.distance = distance;
      chroma_1.limits = analyze_1.limits;
      chroma_1.valid = valid;

      // scale
      chroma_1.scales = scales;

      // colors
      chroma_1.colors = w3cx11_1;
      chroma_1.brewer = colorbrewer_1;

      var chroma_js = chroma_1;

      return chroma_js;

  })));
  });
  var chroma_1 = chroma.chroma;

  var PowerUpBase = /*#__PURE__*/function (_Monster) {
    _inherits(PowerUpBase, _Monster);

    var _super = _createSuper(PowerUpBase);

    function PowerUpBase() {
      _classCallCheck(this, PowerUpBase);

      return _super.apply(this, arguments);
    }

    _createClass(PowerUpBase, [{
      key: "Init",
      value: function Init(props) {
        _get(_getPrototypeOf(PowerUpBase.prototype), "Init", this).call(this, props);

        this.TimeToLife = 60000;
        this.Velocity = new Vector2(0, 0);
        this.BaseColor = "#ffa500";
      }
    }, {
      key: "CreateCollionBody",
      value: function CreateCollionBody() {
        this.radius = 10;
        return this.World.collisions.createCircle(this.Location.x, this.Location.y, this.radius);
      }
    }, {
      key: "update",
      value: function update(delta) {
        _get(_getPrototypeOf(PowerUpBase.prototype), "update", this).call(this, delta);

        this.BaseColor = chroma('#ffa500').darken(Math.sin(this.Age / 500)).hex();
      }
    }, {
      key: "OnOverlap",
      value: function OnOverlap(OtherEntity) {
        if (OtherEntity instanceof Player) {
          OtherEntity.PickupItem(WPN_TPattern);
          this.Destroy();
        }
      }
    }]);

    return PowerUpBase;
  }(Monster);

  /**
   * Y Axis Sinus Movement, Spawn x axis keept as offset
   */

  var SinusCurveMovementComponent = /*#__PURE__*/function (_MovementComponent) {
    _inherits(SinusCurveMovementComponent, _MovementComponent);

    var _super = _createSuper(SinusCurveMovementComponent);

    function SinusCurveMovementComponent(props) {
      var _this;

      _classCallCheck(this, SinusCurveMovementComponent);

      _this = _super.call(this, props);
      _this.frequency = props.frequency || 100;
      _this.magnitude = props.magnitude || 90;
      _this.OffsetX = _this.Outer.Location.x;
      _this.UseSpawnLocationDiff = props.usespawnlocationdiff || false;
      return _this;
    }

    _createClass(SinusCurveMovementComponent, [{
      key: "UpdateMovement",
      value: function UpdateMovement(delta) {
        var LocalLocation = this.Outer.Location.clone();
        LocalLocation.addScaled(this.Outer.Velocity, delta);
        var DiffY = this.UseSpawnLocationDiff ? LocalLocation.clone().subtract(this.Outer.SpawnLocation) : LocalLocation; //use y axis for sinus

        this.Outer.Location = new Vector2(Math.sin(DiffY.y / this.frequency) * this.magnitude + this.OffsetX, LocalLocation.y);
      }
    }]);

    return SinusCurveMovementComponent;
  }(MovementComponent);

  var colorScale={
  	"jet":[{"index":0,"rgb":[0,0,131]},{"index":0.125,"rgb":[0,60,170]},{"index":0.375,"rgb":[5,255,255]},{"index":0.625,"rgb":[255,255,0]},{"index":0.875,"rgb":[250,0,0]},{"index":1,"rgb":[128,0,0]}],

  	"hsv":[{"index":0,"rgb":[255,0,0]},{"index":0.169,"rgb":[253,255,2]},{"index":0.173,"rgb":[247,255,2]},{"index":0.337,"rgb":[0,252,4]},{"index":0.341,"rgb":[0,252,10]},{"index":0.506,"rgb":[1,249,255]},{"index":0.671,"rgb":[2,0,253]},{"index":0.675,"rgb":[8,0,253]},{"index":0.839,"rgb":[255,0,251]},{"index":0.843,"rgb":[255,0,245]},{"index":1,"rgb":[255,0,6]}],

  	"hot":[{"index":0,"rgb":[0,0,0]},{"index":0.3,"rgb":[230,0,0]},{"index":0.6,"rgb":[255,210,0]},{"index":1,"rgb":[255,255,255]}],

  	"spring":[{"index":0,"rgb":[255,0,255]},{"index":1,"rgb":[255,255,0]}],

  	"summer":[{"index":0,"rgb":[0,128,102]},{"index":1,"rgb":[255,255,102]}],

  	"autumn":[{"index":0,"rgb":[255,0,0]},{"index":1,"rgb":[255,255,0]}],

  	"winter":[{"index":0,"rgb":[0,0,255]},{"index":1,"rgb":[0,255,128]}],

  	"bone":[{"index":0,"rgb":[0,0,0]},{"index":0.376,"rgb":[84,84,116]},{"index":0.753,"rgb":[169,200,200]},{"index":1,"rgb":[255,255,255]}],

  	"copper":[{"index":0,"rgb":[0,0,0]},{"index":0.804,"rgb":[255,160,102]},{"index":1,"rgb":[255,199,127]}],

  	"greys":[{"index":0,"rgb":[0,0,0]},{"index":1,"rgb":[255,255,255]}],

  	"yignbu":[{"index":0,"rgb":[8,29,88]},{"index":0.125,"rgb":[37,52,148]},{"index":0.25,"rgb":[34,94,168]},{"index":0.375,"rgb":[29,145,192]},{"index":0.5,"rgb":[65,182,196]},{"index":0.625,"rgb":[127,205,187]},{"index":0.75,"rgb":[199,233,180]},{"index":0.875,"rgb":[237,248,217]},{"index":1,"rgb":[255,255,217]}],

  	"greens":[{"index":0,"rgb":[0,68,27]},{"index":0.125,"rgb":[0,109,44]},{"index":0.25,"rgb":[35,139,69]},{"index":0.375,"rgb":[65,171,93]},{"index":0.5,"rgb":[116,196,118]},{"index":0.625,"rgb":[161,217,155]},{"index":0.75,"rgb":[199,233,192]},{"index":0.875,"rgb":[229,245,224]},{"index":1,"rgb":[247,252,245]}],

  	"yiorrd":[{"index":0,"rgb":[128,0,38]},{"index":0.125,"rgb":[189,0,38]},{"index":0.25,"rgb":[227,26,28]},{"index":0.375,"rgb":[252,78,42]},{"index":0.5,"rgb":[253,141,60]},{"index":0.625,"rgb":[254,178,76]},{"index":0.75,"rgb":[254,217,118]},{"index":0.875,"rgb":[255,237,160]},{"index":1,"rgb":[255,255,204]}],

  	"bluered":[{"index":0,"rgb":[0,0,255]},{"index":1,"rgb":[255,0,0]}],

  	"rdbu":[{"index":0,"rgb":[5,10,172]},{"index":0.35,"rgb":[106,137,247]},{"index":0.5,"rgb":[190,190,190]},{"index":0.6,"rgb":[220,170,132]},{"index":0.7,"rgb":[230,145,90]},{"index":1,"rgb":[178,10,28]}],

  	"picnic":[{"index":0,"rgb":[0,0,255]},{"index":0.1,"rgb":[51,153,255]},{"index":0.2,"rgb":[102,204,255]},{"index":0.3,"rgb":[153,204,255]},{"index":0.4,"rgb":[204,204,255]},{"index":0.5,"rgb":[255,255,255]},{"index":0.6,"rgb":[255,204,255]},{"index":0.7,"rgb":[255,153,255]},{"index":0.8,"rgb":[255,102,204]},{"index":0.9,"rgb":[255,102,102]},{"index":1,"rgb":[255,0,0]}],

  	"rainbow":[{"index":0,"rgb":[150,0,90]},{"index":0.125,"rgb":[0,0,200]},{"index":0.25,"rgb":[0,25,255]},{"index":0.375,"rgb":[0,152,255]},{"index":0.5,"rgb":[44,255,150]},{"index":0.625,"rgb":[151,255,0]},{"index":0.75,"rgb":[255,234,0]},{"index":0.875,"rgb":[255,111,0]},{"index":1,"rgb":[255,0,0]}],

  	"portland":[{"index":0,"rgb":[12,51,131]},{"index":0.25,"rgb":[10,136,186]},{"index":0.5,"rgb":[242,211,56]},{"index":0.75,"rgb":[242,143,56]},{"index":1,"rgb":[217,30,30]}],

  	"blackbody":[{"index":0,"rgb":[0,0,0]},{"index":0.2,"rgb":[230,0,0]},{"index":0.4,"rgb":[230,210,0]},{"index":0.7,"rgb":[255,255,255]},{"index":1,"rgb":[160,200,255]}],

  	"earth":[{"index":0,"rgb":[0,0,130]},{"index":0.1,"rgb":[0,180,180]},{"index":0.2,"rgb":[40,210,40]},{"index":0.4,"rgb":[230,230,50]},{"index":0.6,"rgb":[120,70,20]},{"index":1,"rgb":[255,255,255]}],

  	"electric":[{"index":0,"rgb":[0,0,0]},{"index":0.15,"rgb":[30,0,100]},{"index":0.4,"rgb":[120,0,100]},{"index":0.6,"rgb":[160,90,0]},{"index":0.8,"rgb":[230,200,0]},{"index":1,"rgb":[255,250,220]}],

  	"alpha": [{"index":0, "rgb": [255,255,255,0]},{"index":1, "rgb": [255,255,255,1]}],

  	"viridis": [{"index":0,"rgb":[68,1,84]},{"index":0.13,"rgb":[71,44,122]},{"index":0.25,"rgb":[59,81,139]},{"index":0.38,"rgb":[44,113,142]},{"index":0.5,"rgb":[33,144,141]},{"index":0.63,"rgb":[39,173,129]},{"index":0.75,"rgb":[92,200,99]},{"index":0.88,"rgb":[170,220,50]},{"index":1,"rgb":[253,231,37]}],

  	"inferno": [{"index":0,"rgb":[0,0,4]},{"index":0.13,"rgb":[31,12,72]},{"index":0.25,"rgb":[85,15,109]},{"index":0.38,"rgb":[136,34,106]},{"index":0.5,"rgb":[186,54,85]},{"index":0.63,"rgb":[227,89,51]},{"index":0.75,"rgb":[249,140,10]},{"index":0.88,"rgb":[249,201,50]},{"index":1,"rgb":[252,255,164]}],

  	"magma": [{"index":0,"rgb":[0,0,4]},{"index":0.13,"rgb":[28,16,68]},{"index":0.25,"rgb":[79,18,123]},{"index":0.38,"rgb":[129,37,129]},{"index":0.5,"rgb":[181,54,122]},{"index":0.63,"rgb":[229,80,100]},{"index":0.75,"rgb":[251,135,97]},{"index":0.88,"rgb":[254,194,135]},{"index":1,"rgb":[252,253,191]}],

  	"plasma": [{"index":0,"rgb":[13,8,135]},{"index":0.13,"rgb":[75,3,161]},{"index":0.25,"rgb":[125,3,168]},{"index":0.38,"rgb":[168,34,150]},{"index":0.5,"rgb":[203,70,121]},{"index":0.63,"rgb":[229,107,93]},{"index":0.75,"rgb":[248,148,65]},{"index":0.88,"rgb":[253,195,40]},{"index":1,"rgb":[240,249,33]}],

  	"warm": [{"index":0,"rgb":[125,0,179]},{"index":0.13,"rgb":[172,0,187]},{"index":0.25,"rgb":[219,0,170]},{"index":0.38,"rgb":[255,0,130]},{"index":0.5,"rgb":[255,63,74]},{"index":0.63,"rgb":[255,123,0]},{"index":0.75,"rgb":[234,176,0]},{"index":0.88,"rgb":[190,228,0]},{"index":1,"rgb":[147,255,0]}],

  	"cool": [{"index":0,"rgb":[125,0,179]},{"index":0.13,"rgb":[116,0,218]},{"index":0.25,"rgb":[98,74,237]},{"index":0.38,"rgb":[68,146,231]},{"index":0.5,"rgb":[0,204,197]},{"index":0.63,"rgb":[0,247,146]},{"index":0.75,"rgb":[0,255,88]},{"index":0.88,"rgb":[40,255,8]},{"index":1,"rgb":[147,255,0]}],

  	"rainbow-soft": [{"index":0,"rgb":[125,0,179]},{"index":0.1,"rgb":[199,0,180]},{"index":0.2,"rgb":[255,0,121]},{"index":0.3,"rgb":[255,108,0]},{"index":0.4,"rgb":[222,194,0]},{"index":0.5,"rgb":[150,255,0]},{"index":0.6,"rgb":[0,255,55]},{"index":0.7,"rgb":[0,246,150]},{"index":0.8,"rgb":[50,167,222]},{"index":0.9,"rgb":[103,51,235]},{"index":1,"rgb":[124,0,186]}],

  	"bathymetry": [{"index":0,"rgb":[40,26,44]},{"index":0.13,"rgb":[59,49,90]},{"index":0.25,"rgb":[64,76,139]},{"index":0.38,"rgb":[63,110,151]},{"index":0.5,"rgb":[72,142,158]},{"index":0.63,"rgb":[85,174,163]},{"index":0.75,"rgb":[120,206,163]},{"index":0.88,"rgb":[187,230,172]},{"index":1,"rgb":[253,254,204]}],

  	"cdom": [{"index":0,"rgb":[47,15,62]},{"index":0.13,"rgb":[87,23,86]},{"index":0.25,"rgb":[130,28,99]},{"index":0.38,"rgb":[171,41,96]},{"index":0.5,"rgb":[206,67,86]},{"index":0.63,"rgb":[230,106,84]},{"index":0.75,"rgb":[242,149,103]},{"index":0.88,"rgb":[249,193,135]},{"index":1,"rgb":[254,237,176]}],

  	"chlorophyll": [{"index":0,"rgb":[18,36,20]},{"index":0.13,"rgb":[25,63,41]},{"index":0.25,"rgb":[24,91,59]},{"index":0.38,"rgb":[13,119,72]},{"index":0.5,"rgb":[18,148,80]},{"index":0.63,"rgb":[80,173,89]},{"index":0.75,"rgb":[132,196,122]},{"index":0.88,"rgb":[175,221,162]},{"index":1,"rgb":[215,249,208]}],

  	"density": [{"index":0,"rgb":[54,14,36]},{"index":0.13,"rgb":[89,23,80]},{"index":0.25,"rgb":[110,45,132]},{"index":0.38,"rgb":[120,77,178]},{"index":0.5,"rgb":[120,113,213]},{"index":0.63,"rgb":[115,151,228]},{"index":0.75,"rgb":[134,185,227]},{"index":0.88,"rgb":[177,214,227]},{"index":1,"rgb":[230,241,241]}],

  	"freesurface-blue": [{"index":0,"rgb":[30,4,110]},{"index":0.13,"rgb":[47,14,176]},{"index":0.25,"rgb":[41,45,236]},{"index":0.38,"rgb":[25,99,212]},{"index":0.5,"rgb":[68,131,200]},{"index":0.63,"rgb":[114,156,197]},{"index":0.75,"rgb":[157,181,203]},{"index":0.88,"rgb":[200,208,216]},{"index":1,"rgb":[241,237,236]}],

  	"freesurface-red": [{"index":0,"rgb":[60,9,18]},{"index":0.13,"rgb":[100,17,27]},{"index":0.25,"rgb":[142,20,29]},{"index":0.38,"rgb":[177,43,27]},{"index":0.5,"rgb":[192,87,63]},{"index":0.63,"rgb":[205,125,105]},{"index":0.75,"rgb":[216,162,148]},{"index":0.88,"rgb":[227,199,193]},{"index":1,"rgb":[241,237,236]}],

  	"oxygen": [{"index":0,"rgb":[64,5,5]},{"index":0.13,"rgb":[106,6,15]},{"index":0.25,"rgb":[144,26,7]},{"index":0.38,"rgb":[168,64,3]},{"index":0.5,"rgb":[188,100,4]},{"index":0.63,"rgb":[206,136,11]},{"index":0.75,"rgb":[220,174,25]},{"index":0.88,"rgb":[231,215,44]},{"index":1,"rgb":[248,254,105]}],

  	"par": [{"index":0,"rgb":[51,20,24]},{"index":0.13,"rgb":[90,32,35]},{"index":0.25,"rgb":[129,44,34]},{"index":0.38,"rgb":[159,68,25]},{"index":0.5,"rgb":[182,99,19]},{"index":0.63,"rgb":[199,134,22]},{"index":0.75,"rgb":[212,171,35]},{"index":0.88,"rgb":[221,210,54]},{"index":1,"rgb":[225,253,75]}],

  	"phase": [{"index":0,"rgb":[145,105,18]},{"index":0.13,"rgb":[184,71,38]},{"index":0.25,"rgb":[186,58,115]},{"index":0.38,"rgb":[160,71,185]},{"index":0.5,"rgb":[110,97,218]},{"index":0.63,"rgb":[50,123,164]},{"index":0.75,"rgb":[31,131,110]},{"index":0.88,"rgb":[77,129,34]},{"index":1,"rgb":[145,105,18]}],

  	"salinity": [{"index":0,"rgb":[42,24,108]},{"index":0.13,"rgb":[33,50,162]},{"index":0.25,"rgb":[15,90,145]},{"index":0.38,"rgb":[40,118,137]},{"index":0.5,"rgb":[59,146,135]},{"index":0.63,"rgb":[79,175,126]},{"index":0.75,"rgb":[120,203,104]},{"index":0.88,"rgb":[193,221,100]},{"index":1,"rgb":[253,239,154]}],

  	"temperature": [{"index":0,"rgb":[4,35,51]},{"index":0.13,"rgb":[23,51,122]},{"index":0.25,"rgb":[85,59,157]},{"index":0.38,"rgb":[129,79,143]},{"index":0.5,"rgb":[175,95,130]},{"index":0.63,"rgb":[222,112,101]},{"index":0.75,"rgb":[249,146,66]},{"index":0.88,"rgb":[249,196,65]},{"index":1,"rgb":[232,250,91]}],

  	"turbidity": [{"index":0,"rgb":[34,31,27]},{"index":0.13,"rgb":[65,50,41]},{"index":0.25,"rgb":[98,69,52]},{"index":0.38,"rgb":[131,89,57]},{"index":0.5,"rgb":[161,112,59]},{"index":0.63,"rgb":[185,140,66]},{"index":0.75,"rgb":[202,174,88]},{"index":0.88,"rgb":[216,209,126]},{"index":1,"rgb":[233,246,171]}],

  	"velocity-blue": [{"index":0,"rgb":[17,32,64]},{"index":0.13,"rgb":[35,52,116]},{"index":0.25,"rgb":[29,81,156]},{"index":0.38,"rgb":[31,113,162]},{"index":0.5,"rgb":[50,144,169]},{"index":0.63,"rgb":[87,173,176]},{"index":0.75,"rgb":[149,196,189]},{"index":0.88,"rgb":[203,221,211]},{"index":1,"rgb":[254,251,230]}],

  	"velocity-green": [{"index":0,"rgb":[23,35,19]},{"index":0.13,"rgb":[24,64,38]},{"index":0.25,"rgb":[11,95,45]},{"index":0.38,"rgb":[39,123,35]},{"index":0.5,"rgb":[95,146,12]},{"index":0.63,"rgb":[152,165,18]},{"index":0.75,"rgb":[201,186,69]},{"index":0.88,"rgb":[233,216,137]},{"index":1,"rgb":[255,253,205]}],

  	"cubehelix": [{"index":0,"rgb":[0,0,0]},{"index":0.07,"rgb":[22,5,59]},{"index":0.13,"rgb":[60,4,105]},{"index":0.2,"rgb":[109,1,135]},{"index":0.27,"rgb":[161,0,147]},{"index":0.33,"rgb":[210,2,142]},{"index":0.4,"rgb":[251,11,123]},{"index":0.47,"rgb":[255,29,97]},{"index":0.53,"rgb":[255,54,69]},{"index":0.6,"rgb":[255,85,46]},{"index":0.67,"rgb":[255,120,34]},{"index":0.73,"rgb":[255,157,37]},{"index":0.8,"rgb":[241,191,57]},{"index":0.87,"rgb":[224,220,93]},{"index":0.93,"rgb":[218,241,142]},{"index":1,"rgb":[227,253,198]}]
  };

  function lerp$1(v0, v1, t) {
      return v0*(1-t)+v1*t
  }
  var lerp_1 = lerp$1;

  var colormap = createColormap;

  function createColormap (spec) {
      /*
       * Default Options
       */
      var indicies, fromrgba, torgba,
          nsteps, cmap, colormap, format,
          nshades, colors, alpha, i;

      if ( !spec ) spec = {};

      nshades = (spec.nshades || 72) - 1;
      format = spec.format || 'hex';

      colormap = spec.colormap;
      if (!colormap) colormap = 'jet';

      if (typeof colormap === 'string') {
          colormap = colormap.toLowerCase();

          if (!colorScale[colormap]) {
              throw Error(colormap + ' not a supported colorscale');
          }

          cmap = colorScale[colormap];

      } else if (Array.isArray(colormap)) {
          cmap = colormap.slice();

      } else {
          throw Error('unsupported colormap option', colormap);
      }

      if (cmap.length > nshades + 1) {
          throw new Error(
              colormap+' map requires nshades to be at least size '+cmap.length
          );
      }

      if (!Array.isArray(spec.alpha)) {

          if (typeof spec.alpha === 'number') {
              alpha = [spec.alpha, spec.alpha];

          } else {
              alpha = [1, 1];
          }

      } else if (spec.alpha.length !== 2) {
          alpha = [1, 1];

      } else {
          alpha = spec.alpha.slice();
      }

      // map index points from 0..1 to 0..n-1
      indicies = cmap.map(function(c) {
          return Math.round(c.index * nshades);
      });

      // Add alpha channel to the map
      alpha[0] = Math.min(Math.max(alpha[0], 0), 1);
      alpha[1] = Math.min(Math.max(alpha[1], 0), 1);

      var steps = cmap.map(function(c, i) {
          var index = cmap[i].index;

          var rgba = cmap[i].rgb.slice();

          // if user supplies their own map use it
          if (rgba.length === 4 && rgba[3] >= 0 && rgba[3] <= 1) {
              return rgba
          }
          rgba[3] = alpha[0] + (alpha[1] - alpha[0])*index;

          return rgba
      });


      /*
       * map increasing linear values between indicies to
       * linear steps in colorvalues
       */
      var colors = [];
      for (i = 0; i < indicies.length-1; ++i) {
          nsteps = indicies[i+1] - indicies[i];
          fromrgba = steps[i];
          torgba = steps[i+1];

          for (var j = 0; j < nsteps; j++) {
              var amt = j / nsteps;
              colors.push([
                  Math.round(lerp_1(fromrgba[0], torgba[0], amt)),
                  Math.round(lerp_1(fromrgba[1], torgba[1], amt)),
                  Math.round(lerp_1(fromrgba[2], torgba[2], amt)),
                  lerp_1(fromrgba[3], torgba[3], amt)
              ]);
          }
      }

      //add 1 step as last value
      colors.push(cmap[cmap.length - 1].rgb.concat(alpha[1]));

      if (format === 'hex') colors = colors.map( rgb2hex );
      else if (format === 'rgbaString') colors = colors.map( rgbaStr );
      else if (format === 'float') colors = colors.map( rgb2float );

      return colors;
  }
  function rgb2float (rgba) {
      return [
          rgba[0] / 255,
          rgba[1] / 255,
          rgba[2] / 255,
          rgba[3]
      ]
  }

  function rgb2hex (rgba) {
      var dig, hex = '#';
      for (var i = 0; i < 3; ++i) {
          dig = rgba[i];
          dig = dig.toString(16);
          hex += ('00' + dig).substr( dig.length );
      }
      return hex;
  }

  function rgbaStr (rgba) {
      return 'rgba(' + rgba.join(',') + ')';
  }

  var SCREEN_W = 800;
  var SCREEN_H = 600;
  var DefaultEnemyProps = {
    velocity: new Vector2(0, 150)
  };
  var SinusCurveDefaultProps = {
    MovementComponent: SinusCurveMovementComponent,
    velocity: new Vector2(0, 200)
  };
  var AsteroidColormap = colormap({
    colormap: 'turbidity',
    nshades: 40,
    format: 'hex',
    alpha: 1
  });
  var SuicideColormap = colormap({
    colormap: 'bluered',
    nshades: 40,
    format: 'hex',
    alpha: 1
  });
  var ParticleBaseColormap = colormap({
    colormap: 'winter',
    nshades: 20,
    format: 'hex',
    alpha: 1
  });
  /**
   * Spawns Enemys in a Line
   * 
   * @param {Vector2} Location Origin location
   * @param {Vector2} TargetLocation Direction vector 
   * @param {Number} Padding Distance betweens spawns.
   * @param {Class} ClassToSpawn The Class to Spawn. Defaults to Monster 
   * @param {Object} InProps Properties passed to constructor
   */

  function SpawnEnemyLine(Location, TargetLocation, Padding) {
    var ClassToSpawn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Monster;
    var InProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var Dist = Location.Distance(TargetLocation);
    var Count = Math.round(Dist / Padding);
    var LocalLocation = Location.clone();

    for (var i = 0; i < Count; i++) {
      var LocalProps = {
        location: LocalLocation
      };
      LocalProps = _objectSpread2(_objectSpread2({}, LocalProps), InProps);
      World.SpawnEntity(ClassToSpawn, LocalProps);
      LocalLocation.moveTowards(TargetLocation, Padding);
    }
  }

  /**
   * X Axis Cosine Movement, Spawn y axis keept as offset
   */

  var CosineCurveMovementComponent = /*#__PURE__*/function (_MovementComponent) {
    _inherits(CosineCurveMovementComponent, _MovementComponent);

    var _super = _createSuper(CosineCurveMovementComponent);

    function CosineCurveMovementComponent(props) {
      var _this;

      _classCallCheck(this, CosineCurveMovementComponent);

      _this = _super.call(this, props);
      _this.frequency = 100;
      _this.magnitude = 90;
      _this.OffsetY = _this.Outer.Location.y;
      return _this;
    }

    _createClass(CosineCurveMovementComponent, [{
      key: "UpdateMovement",
      value: function UpdateMovement(delta) {
        var LocalLocation = this.Outer.Location.clone();
        LocalLocation.addScaled(this.Outer.Velocity, delta); //use y axis for sinus

        this.Outer.Location = new Vector2(LocalLocation.x, Math.cos(LocalLocation.x / this.frequency) * this.magnitude + this.OffsetY);
      }
    }]);

    return CosineCurveMovementComponent;
  }(MovementComponent);

  var SINE_VERCTICAL_DOWN = 1;
  var SINE_HORIZONTAL = 2;
  var LINE_X = 3;
  var LINE_HORIZONTAL = 4;
  var SUICIDE_SPAWN = 5;

  var _GameMode = /*#__PURE__*/function () {
    function _GameMode() {
      _classCallCheck(this, _GameMode);

      this.PlayerPawn = null;
    }

    _createClass(_GameMode, [{
      key: "RegisterPlayerPawn",
      value: function RegisterPlayerPawn(InPlayerPawn) {
        this.PlayerPawn = InPlayerPawn;
      }
    }, {
      key: "RespawnDEV",
      value: function RespawnDEV() {
        var newPlayer = World.SpawnEntity(Player, {
          location: new Vector2(400, 500)
        });
        this.RegisterPlayerPawn(newPlayer);
      }
    }, {
      key: "Update",
      value: function Update(delta) {
        if (this.PlayerPawn) {
          this.PlayerPawn.PositionLevel += 1 * delta;

          if (Math.floor(this.PlayerPawn.PositionLevel) % 6 === 0) {
            //add 1 to avoid modulus 0
            this.PlayerPawn.PositionLevel += 1;
            this.SpawnNextEnemySet();
          }
        }
      }
    }, {
      key: "SpawnNextEnemySet",
      value: function SpawnNextEnemySet() {
        var EnemyClass = Asteroid;
        var SetID = getRandomInt(1, 5);

        switch (SetID) {
          case SINE_VERCTICAL_DOWN:
            {
              var OriginLocation = new Vector2(getRandomfloat(100, 700), -400);
              var TargetLocation = new Vector2(OriginLocation.x, 0);
              SpawnEnemyLine(OriginLocation, TargetLocation, 40, EnemyClass, SinusCurveDefaultProps);
            }
            break;

          case SINE_HORIZONTAL:
            {
              var IsSpawnLeft = getRandomBool();
              var randomY = getRandomfloat(100, 500);

              var _OriginLocation = IsSpawnLeft ? new Vector2(-400, randomY) : new Vector2(1200, randomY);

              var _TargetLocation = IsSpawnLeft ? new Vector2(0, randomY) : new Vector2(800, randomY);

              var LocalVelocity = IsSpawnLeft ? new Vector2(200, 0) : new Vector2(-200, 0);
              SpawnEnemyLine(_OriginLocation, _TargetLocation, 40, EnemyClass, {
                MovementComponent: CosineCurveMovementComponent,
                velocity: LocalVelocity
              });
            }
            break;

          case LINE_X:
            {
              var _IsSpawnLeft = getRandomBool();

              var _randomY = getRandomfloat(-100, -400);

              var _OriginLocation2, _TargetLocation2, _LocalVelocity;

              var magnitudeX = getRandomfloat(100, 200);
              var magnitudeY = getRandomfloat(100, 200);

              if (_IsSpawnLeft) {
                _OriginLocation2 = new Vector2(1200, _randomY);
                _TargetLocation2 = new Vector2(_OriginLocation2.x - getRandomfloat(100, 400), _randomY + getRandomfloat(100, 300));
                _LocalVelocity = new Vector2(magnitudeX * -1, magnitudeY);
              } else {
                _OriginLocation2 = new Vector2(-400, _randomY);
                _TargetLocation2 = new Vector2(_OriginLocation2.x + getRandomfloat(100, 400), _randomY + getRandomfloat(100, 300));
                _LocalVelocity = new Vector2(magnitudeX, magnitudeY);
              }

              SpawnEnemyLine(_OriginLocation2, _TargetLocation2, 40, EnemyClass, {
                velocity: _LocalVelocity
              });
            }
            break;

          case LINE_HORIZONTAL:
            {
              var _OriginLocation3 = new Vector2(0, 0);

              var _TargetLocation3 = new Vector2(800, 0);

              var _LocalVelocity2 = new Vector2(0, 200);

              SpawnEnemyLine(_OriginLocation3, _TargetLocation3, 80, EnemyClass, {
                velocity: _LocalVelocity2
              });
            }
            break;

          case SUICIDE_SPAWN:
            {
              var _OriginLocation4 = new Vector2(0, 0);

              var _TargetLocation4 = new Vector2(800, 0);

              var _LocalVelocity3 = new Vector2(0, 200);

              SpawnEnemyLine(_OriginLocation4, _TargetLocation4, 300, SuicideMonster, {
                velocity: _LocalVelocity3
              });
            }
            break;

          default:
            {
              var _TargetLocation5 = new Vector2(400, 0);

              _TargetLocation5.setDirection(getRandomInt(360, 180), 2000);

              var b = getRandomBool();
              console.log(b);
              var LocalProps = b ? DefaultEnemyProps : SinusCurveDefaultProps;
              SpawnEnemyLine(new Vector2(400, 0), _TargetLocation5, 20, Monster, LocalProps);
            }
            break;
        }
      }
    }]);

    return _GameMode;
  }();

  var GameMode = new _GameMode();

  var Asteroid = /*#__PURE__*/function (_Monster) {
    _inherits(Asteroid, _Monster);

    var _super = _createSuper(Asteroid);

    function Asteroid() {
      _classCallCheck(this, Asteroid);

      return _super.apply(this, arguments);
    }

    _createClass(Asteroid, [{
      key: "Init",
      value: function Init(props) {
        _get(_getPrototypeOf(Asteroid.prototype), "Init", this).call(this, props); //inverse rotation


        var inverse = getRandomBool() ? 1 : -1;
        this.rotationSpeed = getRandomfloat(0.01, 0.05) * inverse;
        this.BaseChroma = chroma('saddlebrown').darken(getRandomfloat(0, 0.8));
        this.BaseColor = this.BaseChroma.hex();
        this.LowHealthColor = "#F00";
        this.HealthChromaScale = chroma.scale(["#fff", this.LowHealthColor]).mode('lab');
        this.ColorMap = AsteroidColormap;
        this.BaseColor = this.ColorMap[0];
        this.maxHealth = props.maxhealth || 15;
        this.health = this.maxHealth;
      }
    }, {
      key: "update",
      value: function update(delta) {
        this.Rotation += this.rotationSpeed;

        _get(_getPrototypeOf(Asteroid.prototype), "update", this).call(this, delta);

        this.lerpChromaColorLoop(delta, 350, this.ID / 2);
      }
    }, {
      key: "CreateRandomPolygon",
      value: function CreateRandomPolygon() {
        this.radius = getRandomfloat(15, 40);
        var Center = new Vector2(0, 0);
        var ArrayVertexes = [];
        var RandomAngles = [];
        var numVertexes = getRandomInt(8, 16);

        for (var i = 0; i < numVertexes; i++) {
          RandomAngles.push(getRandomfloat(0, Math.PI * 2));
        } //sort random angels direction dont matter


        RandomAngles.sort();

        for (var _i = 0; _i < numVertexes; _i++) {
          var x = Center.x + this.radius * Math.cos(RandomAngles[_i]);
          var y = Center.y + this.radius * Math.sin(RandomAngles[_i]);
          ArrayVertexes.push([x, y]);
        }

        return ArrayVertexes;
      }
    }, {
      key: "CreateCollionBody",
      value: function CreateCollionBody() {
        return this.World.collisions.createPolygon(this.Location.x, this.Location.y, this.vertexes);
      }
    }, {
      key: "takeDamage",
      value: function takeDamage(amount) {
        _get(_getPrototypeOf(Asteroid.prototype), "takeDamage", this).call(this, amount); //update with damage amount variable TODO
        //this.BaseColor = chroma.blend(this.BaseChroma.hex(), this.HealthChromaScale(this.health / this.maxHealth).hex(), 'multiply');

      }
    }, {
      key: "Destroy",
      value: function Destroy() {
        _get(_getPrototypeOf(Asteroid.prototype), "Destroy", this).call(this);

        var drop = getRandomBoolWithWeight(0.1);

        if (drop) {
          this.World.SpawnEntity(PowerUpBase, {
            location: this.Location.clone(),
            team: GameMode.PlayerPawn.team
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var ctx = this.World.ctx;
        ctx.save();
        ctx.fillStyle = this.BaseColor;
        ctx.strokeStyle = this.StrokeColor;
        ctx.translate(this.Location.x, this.Location.y);
        ctx.rotate(this.Rotation);
        ctx.beginPath(); //draw polygon

        for (var i = 0; i < this.vertexes.length; i++) {
          ctx.lineTo(this.vertexes[i][0], this.vertexes[i][1]);
        }

        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }]);

    return Asteroid;
  }(Monster);

  var HomingMovement = /*#__PURE__*/function (_MovementComponent) {
    _inherits(HomingMovement, _MovementComponent);

    var _super = _createSuper(HomingMovement);

    function HomingMovement(props) {
      var _this;

      _classCallCheck(this, HomingMovement);

      _this = _super.call(this, props);
      _this.target = props.target || null;
      _this.HomingAccelerationMagnitude = 400;
      _this.MaxVelocity = 200;
      return _this;
    }

    _createClass(HomingMovement, [{
      key: "UpdateMovement",
      value: function UpdateMovement(delta) {
        if (this.Outer) {
          if (this.target) {
            var OldVelocity = this.Outer.Velocity.clone();
            var HomingAcceleration = this.target.Location.clone().subtract(this.Outer.Location).unitVector2.multiply(this.HomingAccelerationMagnitude);
            this.Outer.Velocity = HomingAcceleration.multiply(delta).add(OldVelocity);
            this.Outer.Location.addScaled(this.Outer.Velocity.limitTo(this.MaxVelocity), delta);
          } else {
            this.Outer.Location.addScaled(this.Outer.Velocity, delta);
          }
        }
      }
    }]);

    return HomingMovement;
  }(MovementComponent);

  var SuicideMonster = /*#__PURE__*/function (_Monster) {
    _inherits(SuicideMonster, _Monster);

    var _super = _createSuper(SuicideMonster);

    function SuicideMonster() {
      _classCallCheck(this, SuicideMonster);

      return _super.apply(this, arguments);
    }

    _createClass(SuicideMonster, [{
      key: "Init",
      value: function Init(props) {
        _get(_getPrototypeOf(SuicideMonster.prototype), "Init", this).call(this, props);

        this.ColorMap = SuicideColormap;
        this.BaseColor = this.ColorMap[0];
        this.target = GameMode.PlayerPawn;
        this.TimeToLife = 15000;
      }
    }, {
      key: "CreateMovementComponent",
      value: function CreateMovementComponent() {
        return new HomingMovement({
          Outer: this,
          target: GameMode.PlayerPawn
        });
      }
    }, {
      key: "CreateCollionBody",
      value: function CreateCollionBody() {
        this.radius = 20;
        return this.World.collisions.createCircle(this.Location.x, this.Location.y, this.radius);
      }
    }, {
      key: "update",
      value: function update(delta) {
        _get(_getPrototypeOf(SuicideMonster.prototype), "update", this).call(this, delta);

        this.lerpChromaColorLoop(delta, 200, this.ID);
      }
    }]);

    return SuicideMonster;
  }(Monster);

  var _Key = /*#__PURE__*/function () {
    function _Key() {
      _classCallCheck(this, _Key);

      this._pressed = {};
      this.LEFT = 37;
      this.UP = 38;
      this.RIGHT = 39;
      this.DOWN = 40;
      this.CTRL = 17;
      this.SHIFT = 16;
    }

    _createClass(_Key, [{
      key: "isDown",
      value: function isDown(keyCode) {
        return this._pressed[keyCode];
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(event) {
        this._pressed[event.keyCode] = true;
      }
    }, {
      key: "onKeyup",
      value: function onKeyup(event) {
        delete this._pressed[event.keyCode];
      }
    }]);

    return _Key;
  }();

  var Key = new _Key();

  var Player = /*#__PURE__*/function (_Monster) {
    _inherits(Player, _Monster);

    var _super = _createSuper(Player);

    function Player() {
      _classCallCheck(this, Player);

      return _super.apply(this, arguments);
    }

    _createClass(Player, [{
      key: "Init",
      value: function Init(props) {
        _get(_getPrototypeOf(Player.prototype), "Init", this).call(this, props);

        this.RegisterCollisonQuery = true;
        this.team = 0;
        this.maxHealth = 100;
        this.health = this.maxHealth;
        this.InputStrength = 250;
        this.weapon = null;
        this.Inventory = []; //start with 1 to avoid modulus 0

        this.PositionLevel = 1;
      }
    }, {
      key: "BeginPlay",
      value: function BeginPlay() {
        //let BaseWeapon = new ProjectileWeaponBase();
        //let BaseWeapon = new WPN_TPattern();
        // let BaseWeapon = new RainbowGun();
        this.PickupItem(ProjectileWeaponBase); //     this.PickupItem(RainbowGun);
      }
    }, {
      key: "update",
      value: function update(delta) {
        this.Velocity = new Vector2(0, 0);

        if (Key.isDown(Key.UP)) {
          this.Velocity.addScaled(new Vector2(0, -1), this.InputStrength);
        }

        if (Key.isDown(Key.DOWN)) {
          this.Velocity.addScaled(new Vector2(0, 1), this.InputStrength);
        }

        if (Key.isDown(Key.LEFT)) {
          this.Velocity.addScaled(new Vector2(-1, 0), this.InputStrength);
        }

        if (Key.isDown(Key.RIGHT)) {
          this.Velocity.addScaled(new Vector2(1, 0), this.InputStrength);
        }

        _get(_getPrototypeOf(Player.prototype), "update", this).call(this, delta);

        if (Key.isDown(Key.CTRL)) {
          if (this.weapon) {
            this.weapon.FireWeapon();
          }
        }
      }
    }, {
      key: "QueryCollisions",
      value: function QueryCollisions(delta) {
        if (!this.PendingDestroy) {
          var potentials = this.RootBody.potentials();

          var _iterator = _createForOfIteratorHelper(potentials),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var otherBody = _step.value;

              if (this.RootBody.collides(otherBody, this.World.collisionResults)) {
                if (this.team !== otherBody.Outer.team) {
                  otherBody.Outer.OnOverlap(this);
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    }, {
      key: "PickupItem",
      value: function PickupItem(newItemClass) {
        var newItem = this.World.SpawnEntity(newItemClass, {});
        var FoundItem = this.Inventory.find(function (item) {
          return item.constructor.name === newItem.constructor.name;
        });

        if (FoundItem) {
          FoundItem.onStackInventory();
          newItem.Destroy();
        } else {
          this.Inventory.push(newItem);
          newItem.SetOwner(this);
        }

        this.OnPickupInventory();
      }
    }, {
      key: "DropItem",
      value: function DropItem(itemToDrop) {
        this.Inventory = this.Inventory.filter(function (item) {
          return item.ID !== itemToDrop.ID;
        });
        this.OnDropInventory();
      }
    }, {
      key: "OnPickupInventory",
      value: function OnPickupInventory() {
        this.OnWeaponPickup();
      }
    }, {
      key: "OnDropInventory",
      value: function OnDropInventory() {
        this.OnWeaponPickup();
      }
    }, {
      key: "OnWeaponPickup",
      value: function OnWeaponPickup() {
        //just pickup latest weapon
        this.weapon = this.Inventory[this.Inventory.length - 1];
      }
    }, {
      key: "takeDamage",
      value: function takeDamage(amount) {
        _get(_getPrototypeOf(Player.prototype), "takeDamage", this).call(this, amount);
      }
    }, {
      key: "CreateCollionBody",
      value: function CreateCollionBody() {
        return this.World.collisions.createPolygon(this.Location.x, this.Location.y, [[0, 0], [16, 32], [-16, 32]]);
      }
    }, {
      key: "render",
      value: function render(delta) {
        var ctx = this.World.ctx;
        ctx.save(); //module import for rollup

        ctx.fillStyle = chroma('green').darken(Math.sin(this.Age * 0.002)).hex();
        ctx.strokeStyle = '#f0f';
        ctx.beginPath();
        ctx.translate(this.Location.x, this.Location.y);
        ctx.lineTo(16, 32);
        ctx.lineTo(-16, 32);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }]);

    return Player;
  }(Monster);

  var Weapon = /*#__PURE__*/function (_Entity) {
    _inherits(Weapon, _Entity);

    var _super = _createSuper(Weapon);

    function Weapon() {
      _classCallCheck(this, Weapon);

      return _super.apply(this, arguments);
    }

    _createClass(Weapon, [{
      key: "Init",
      value: function Init(props) {
        _get(_getPrototypeOf(Weapon.prototype), "Init", this).call(this, props);

        this.Period = 250;
        this.lastTimeFired = 0;
        this.Outer = null;
        this.Ammunition = 0;
        this.MaxAmmunition = 0;
        this.MaxTimeToLife = 0; //DrainAmmoPerUpdate

        this.AmmunitionDrain = 0;
      }
      /**
       * Set the new owner of this weapon.
      * @param {Entity} NewOwner 
      */

    }, {
      key: "SetOwner",
      value: function SetOwner(NewOwner) {
        this.AttachToParent(NewOwner);
      }
      /**
       * basic pre weapon fire logic
       * can the weapon fire?
       */

    }, {
      key: "FireWeapon",
      value: function FireWeapon() {
        if (this.lastTimeFired + this.Period < World.GameTime) {
          this.HandleFireWeapon();
          this.lastTimeFired = World.GameTime;
        }
      }
      /**
       * weapon fire logic 
       * creates projectiles etc.
       */

    }, {
      key: "HandleFireWeapon",
      value: function HandleFireWeapon() {}
    }, {
      key: "Destroy",
      value: function Destroy() {
        _get(_getPrototypeOf(Weapon.prototype), "Destroy", this).call(this);

        if (this.Outer) {
          this.Outer.DropItem(this);
        }
      }
    }, {
      key: "onStackInventory",
      value: function onStackInventory() {
        this.Ammunition = this.MaxAmmunition;
      }
    }, {
      key: "update",
      value: function update(delta) {
        _get(_getPrototypeOf(Weapon.prototype), "update", this).call(this, delta);

        if (this.AmmunitionDrain > 0) {
          this.Ammunition -= this.AmmunitionDrain * delta;
        }

        if (this.MaxAmmunition > 0 && this.Ammunition <= 0) {
          this.Destroy();
        }
      }
    }]);

    return Weapon;
  }(Entity);

  /**
   * Projectile shoots "Upwards"
   */

  var ProjectileWeaponBase = /*#__PURE__*/function (_Weapon) {
    _inherits(ProjectileWeaponBase, _Weapon);

    var _super = _createSuper(ProjectileWeaponBase);

    function ProjectileWeaponBase() {
      _classCallCheck(this, ProjectileWeaponBase);

      return _super.apply(this, arguments);
    }

    _createClass(ProjectileWeaponBase, [{
      key: "Init",
      value: function Init(props) {
        _get(_getPrototypeOf(ProjectileWeaponBase.prototype), "Init", this).call(this, props);

        this.ProjectileClass = Projectile; //Private shoot count

        this.InternalShootCount = 0;
        this.Period = 100;
      }
    }, {
      key: "HandleFireWeapon",
      value: function HandleFireWeapon() {
        if (this.ProjectileClass) {
          var P = World.SpawnEntity(this.ProjectileClass, {
            location: this.Outer.Location,
            velocity: new Vector2(0, getRandomfloat(-550, -450)).add(this.Outer.Velocity.clone().multiply(0.16)),
            team: this.Outer.team
          });
          P.team = this.Outer.team;
          this.InternalShootCount++;
        }
      }
    }]);

    return ProjectileWeaponBase;
  }(Weapon);

  var WPN_TPattern = /*#__PURE__*/function (_ProjectileWeaponBase) {
    _inherits(WPN_TPattern, _ProjectileWeaponBase);

    var _super = _createSuper(WPN_TPattern);

    function WPN_TPattern() {
      _classCallCheck(this, WPN_TPattern);

      return _super.apply(this, arguments);
    }

    _createClass(WPN_TPattern, [{
      key: "Init",
      value: function Init(props) {
        _get(_getPrototypeOf(WPN_TPattern.prototype), "Init", this).call(this, props);

        this.AmmunitionDrain = 1;
        this.MaxAmmunition = 15;
        this.Ammunition = this.MaxAmmunition;
      }
    }, {
      key: "HandleFireWeapon",
      value: function HandleFireWeapon() {
        if (this.ProjectileClass) {
          for (var i = 0; i < 3; i++) {
            var xMagnitude = 0;
            var yMagnitude = -1;

            switch (i) {
              case 1:
                xMagnitude = 1;
                yMagnitude = 0;
                break;

              case 2:
                xMagnitude = -1;
                yMagnitude = 0;
                break;
            }

            var P = this.World.SpawnEntity(this.ProjectileClass, {
              location: this.Outer.Location,
              velocity: new Vector2(getRandomfloat(450, 550) * xMagnitude, getRandomfloat(450, 550) * yMagnitude).add(this.Outer.Velocity.clone().multiply(0.16)),
              team: this.Outer.team
            });
            P.team = this.Outer.team;
            this.InternalShootCount++;
          }
        }
      }
    }]);

    return WPN_TPattern;
  }(ProjectileWeaponBase);

  var Projectile = /*#__PURE__*/function (_Monster) {
    _inherits(Projectile, _Monster);

    var _super = _createSuper(Projectile);

    function Projectile() {
      _classCallCheck(this, Projectile);

      return _super.apply(this, arguments);
    }

    _createClass(Projectile, [{
      key: "Init",
      value: function Init(props) {
        _get(_getPrototypeOf(Projectile.prototype), "Init", this).call(this, props);

        this.RegisterCollisonQuery = true;
        this.TimeToLife = 1200;
        this.ColorMap = colormap({
          colormap: 'summer',
          nshades: 20,
          format: 'hex',
          alpha: 1
        });
        this.BaseColor = this.ColorMap[0];
        this.ImpactFX = ParticleEmitter;
        this.DamageDealt = 5;
      }
    }, {
      key: "CreateCollionBody",
      value: function CreateCollionBody() {
        return this.World.collisions.createCircle(this.Location.x, this.Location.y, 2);
      }
    }, {
      key: "update",
      value: function update(delta) {
        _get(_getPrototypeOf(Projectile.prototype), "update", this).call(this, delta);

        this.lerpChromaColor();
      }
    }, {
      key: "QueryCollisions",
      value: function QueryCollisions(delta) {
        if (!this.PendingDestroy) {
          var potentials = this.RootBody.potentials();

          var _iterator = _createForOfIteratorHelper(potentials),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var otherBody = _step.value;

              if (this.RootBody.collides(otherBody, this.World.collisionResults)) {
                if (this.team !== otherBody.Outer.team) {
                  otherBody.Outer.takeDamage(this.DamageDealt);
                  var Direction = new Vector2(this.World.collisionResults.overlap_x, this.World.collisionResults.overlap_y).multiply(-1);
                  this.SpawnImpactFX({
                    direction: Direction
                  });
                  this.Destroy();
                  break;
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    }, {
      key: "SpawnImpactFX",
      value: function SpawnImpactFX(data) {
        var FX = this.World.SpawnEntity(ParticleEmitter, {
          location: this.Location,
          direction: data.direction
        });
        FX.Activate();
      }
    }, {
      key: "render",
      value: function render(delta) {
        var ctx = this.World.ctx;
        ctx.save();
        ctx.translate(this.Location.x, this.Location.y);
        ctx.beginPath();
        ctx.fillStyle = this.BaseColor;
        ctx.arc(0, 0, 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
      }
    }]);

    return Projectile;
  }(Monster);

  var ParticleEmitter = /*#__PURE__*/function (_Entity) {
    _inherits(ParticleEmitter, _Entity);

    var _super = _createSuper(ParticleEmitter);

    function ParticleEmitter() {
      _classCallCheck(this, ParticleEmitter);

      return _super.apply(this, arguments);
    }

    _createClass(ParticleEmitter, [{
      key: "Init",
      value: function Init(props) {
        _get(_getPrototypeOf(ParticleEmitter.prototype), "Init", this).call(this, props);

        this.SpawnCount = 5;
        this.Direction = props.direction || new Vector2(0, 0);
        this.Location = props.location || new Vector2(0, 0);
        this.ParticleClass = props.ParticleClass || Particle; //BurstList [Time, Count], pre ordered by time ASC

        this.BurstList = [[0, 5]]; //Stored Burst list index

        this.BurstListIndex = 0;
        this.TimeToLife = props.timetolife || 1000;
        this.IsActive = false;
        this.Period = 0;
        this.LastTimeEmitted = 0;
      }
    }, {
      key: "Activate",
      value: function Activate() {
        this.IsActive = true;
      }
    }, {
      key: "Deactivate",
      value: function Deactivate() {
        this.IsActive = false;
      }
    }, {
      key: "SpawnParticle",
      value: function SpawnParticle() {
        if (this.ParticleClass) {
          for (var i = 0; i < this.SpawnCount; i++) {
            var randomDirection = getRandomfloat(-0.2, 0.2);
            var localVelocity = this.Direction.clone().rotate2D(randomDirection).multiply(getRandomfloat(200, 400));
            this.World.SpawnEntity(this.ParticleClass, {
              location: this.Location,
              velocity: localVelocity
            });
          }
        }
      }
    }, {
      key: "update",
      value: function update(delta) {
        _get(_getPrototypeOf(ParticleEmitter.prototype), "update", this).call(this, delta);

        if (this.IsActive) {
          if (this.Period > 0) {
            if (this.LastTimeEmitted + this.Period < this.World.GameTime) {
              this.SpawnParticle();
              this.LastTimeEmitted = this.World.GameTime;
            }
          }

          if (this.BurstListHasValidEntry()) {
            this.SpawnParticle();
            this.BurstListIndex++;
          }
        }
      }
    }, {
      key: "BurstListHasValidEntry",
      value: function BurstListHasValidEntry() {
        var TIME_INDEX = 0;
        return this.BurstList.length > 0 && this.BurstListIndex < this.BurstList.length && this.Age > this.BurstList[this.BurstListIndex][TIME_INDEX];
      }
    }]);

    return ParticleEmitter;
  }(Entity);

  var Particle = /*#__PURE__*/function (_Entity) {
    _inherits(Particle, _Entity);

    var _super = _createSuper(Particle);

    function Particle() {
      _classCallCheck(this, Particle);

      return _super.apply(this, arguments);
    }

    _createClass(Particle, [{
      key: "Init",
      value: function Init(props) {
        _get(_getPrototypeOf(Particle.prototype), "Init", this).call(this, props);

        this.TimeToLife = getRandomfloat(250, 700);
        this.ColorMap = ParticleBaseColormap;
        this.BaseColor = this.ColorMap[0];
      }
    }, {
      key: "update",
      value: function update(delta) {
        _get(_getPrototypeOf(Particle.prototype), "update", this).call(this, delta);

        this.Location.addScaled(this.Velocity, delta);
        this.lerpChromaColor();
      }
    }, {
      key: "render",
      value: function render(delta) {
        var ctx = this.World.ctx;
        ctx.save();
        ctx.translate(this.Location.x, this.Location.y);
        ctx.beginPath();
        ctx.fillStyle = this.BaseColor;
        ctx.arc(0, 0, 1, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
      }
    }]);

    return Particle;
  }(Entity);

  /**
   * Background star 
   * extra props size
   */

  var StarBackGround = /*#__PURE__*/function (_Entity) {
    _inherits(StarBackGround, _Entity);

    var _super = _createSuper(StarBackGround);

    function StarBackGround() {
      _classCallCheck(this, StarBackGround);

      return _super.apply(this, arguments);
    }

    _createClass(StarBackGround, [{
      key: "Init",
      value: function Init(props) {
        _get(_getPrototypeOf(StarBackGround.prototype), "Init", this).call(this, props);

        this.width = props.size;
        this.height = props.size;
      }
    }, {
      key: "BeginPlay",
      value: function BeginPlay() {
        _get(_getPrototypeOf(StarBackGround.prototype), "BeginPlay", this).call(this);

        var factor = this.width / 5;
        var lerpValue = lerp(0, 0.5, factor);
        this.BaseColor = chroma('#fff').darken(lerpValue).hex();
      }
    }, {
      key: "update",
      value: function update(delta) {
        this.Location.addScaled(this.Velocity, delta);

        if (this.Location.y > 900) {
          this.Location = new Vector2(getRandomfloat(0, 800), getRandomfloat(-120, -250));
        }
      }
    }, {
      key: "render",
      value: function render(delta) {
        var ctx = this.World.ctx;
        ctx.save();
        ctx.fillStyle = this.BaseColor;
        ctx.translate(this.Location.x, this.Location.y);
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
      }
    }]);

    return StarBackGround;
  }(Entity);

  var lastFrameTimeMs = 0;
  var maxFPS = 60;
  var delta = 0;

  function GameLoop(TimeStamp) {
    World.UpdateGameTime(TimeStamp);

    if (TimeStamp < lastFrameTimeMs + 1000 / maxFPS) {
      requestAnimationFrame(GameLoop);
      return;
    }

    delta = (TimeStamp - lastFrameTimeMs) / 1000;
    lastFrameTimeMs = TimeStamp; //Draw
    //clear screen  CLS

    World.ctx.fillStyle = "#000";
    World.ctx.fillRect(0, 0, 800, 600); //Update Collisions

    World.UpdateCollisions(delta); //Update

    GameMode.Update(delta);
    World.Update(delta); // UI render #TEMP TODO #

    if (GameMode.PlayerPawn) {
      var weapon = GameMode.PlayerPawn.weapon;

      if (weapon && weapon.MaxAmmunition > 0) {
        var ctx = World.ctx;
        ctx.save(); //module import for rollup

        ctx.fillStyle = "#ff8000";
        ctx.strokeStyle = '#f00';
        ctx.translate(20, 532);
        ctx.fillRect(0, 0, weapon.Ammunition / weapon.MaxAmmunition * 120, 16);
        ctx.restore();
      }

      var Pawn = GameMode.PlayerPawn;

      if (Pawn && Pawn.health > 0) {
        var _ctx = World.ctx;

        _ctx.save(); //module import for rollup


        _ctx.fillStyle = "#009933";
        _ctx.strokeStyle = '#f00';

        _ctx.translate(20, 500);

        _ctx.fillRect(0, 0, Pawn.health / Pawn.maxHealth * 120, 16);

        _ctx.restore();
      }
    } // Draw Debug collisons

    requestAnimationFrame(GameLoop);
  }

  function InitGame() {
    InitStars(); //  World.SpawnEntity(Asteroid, { location: new Vector2(400, 300), maxhealth:10000500 })

    var newPlayer = World.SpawnEntity(Player, {
      location: new Vector2(400, 500)
    });
    GameMode.RegisterPlayerPawn(newPlayer);

    function InitStars() {
      for (var i = 0; i < 60; i++) {
        var size = getRandomInt(1, 5);
        var x = getRandomfloat(0, SCREEN_W);
        var y = getRandomfloat(0, SCREEN_H);
        var speed = getRandomfloat(150, 180) / size;

        if (i > 45) {
          size = getRandomInt(4, 8);
          speed = getRandomfloat(50, 80) / size;
        }

        World.SpawnEntity(StarBackGround, {
          location: new Vector2(x, y),
          velocity: new Vector2(0, speed),
          size: size
        });
      }
    }
  }

  window.addEventListener('keyup', function (event) {
    Key.onKeyup(event);
  }, false);
  window.addEventListener('keydown', function (event) {
    Key.onKeydown(event);
  }, false); //window.addEventListener('mousemove', MouseMove, false);

  document.addEventListener('DOMContentLoaded', function (event) {
    World.InitWorld();
    WorldGlobal = World;
    RespawnHandle = GameMode.RespawnDEV;
    InitGame();
    requestAnimationFrame(GameLoop);
  });

}());

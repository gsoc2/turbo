"use strict";
var hv = Object.create;
var ss = Object.defineProperty;
var pv = Object.getOwnPropertyDescriptor;
var gv = Object.getOwnPropertyNames;
var mv = Object.getPrototypeOf,
  yv = Object.prototype.hasOwnProperty;
var x = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
  vv = (t, e) => {
    for (var n in e) ss(t, n, { get: e[n], enumerable: !0 });
  },
  xd = (t, e, n, r) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let i of gv(e))
        !yv.call(t, i) &&
          i !== n &&
          ss(t, i, {
            get: () => e[i],
            enumerable: !(r = pv(e, i)) || r.enumerable,
          });
    return t;
  };
var Zo = (t, e, n) => (
    (n = t != null ? hv(mv(t)) : {}),
    xd(
      e || !t || !t.__esModule
        ? ss(n, "default", { value: t, enumerable: !0 })
        : n,
      t
    )
  ),
  bv = (t) => xd(ss({}, "__esModule", { value: !0 }), t);
var Od = (t, e, n) =>
  new Promise((r, i) => {
    var s = (u) => {
        try {
          a(n.next(u));
        } catch (h) {
          i(h);
        }
      },
      o = (u) => {
        try {
          a(n.throw(u));
        } catch (h) {
          i(h);
        }
      },
      a = (u) => (u.done ? r(u.value) : Promise.resolve(u.value).then(s, o));
    a((n = n.apply(t, e)).next());
  });
var Yt = x((Xe) => {
  "use strict";
  Object.defineProperty(Xe, "__esModule", { value: !0 });
  Xe.asPromise =
    Xe.thenable =
    Xe.typedArray =
    Xe.stringArray =
    Xe.array =
    Xe.func =
    Xe.error =
    Xe.number =
    Xe.string =
    Xe.boolean =
      void 0;
  function _v(t) {
    return t === !0 || t === !1;
  }
  Xe.boolean = _v;
  function Id(t) {
    return typeof t == "string" || t instanceof String;
  }
  Xe.string = Id;
  function wv(t) {
    return typeof t == "number" || t instanceof Number;
  }
  Xe.number = wv;
  function Cv(t) {
    return t instanceof Error;
  }
  Xe.error = Cv;
  function Fd(t) {
    return typeof t == "function";
  }
  Xe.func = Fd;
  function Nd(t) {
    return Array.isArray(t);
  }
  Xe.array = Nd;
  function Dv(t) {
    return Nd(t) && t.every((e) => Id(e));
  }
  Xe.stringArray = Dv;
  function Rv(t, e) {
    return Array.isArray(t) && t.every(e);
  }
  Xe.typedArray = Rv;
  function Ld(t) {
    return t && Fd(t.then);
  }
  Xe.thenable = Ld;
  function Sv(t) {
    return t instanceof Promise
      ? t
      : Ld(t)
      ? new Promise((e, n) => {
          t.then(
            (r) => e(r),
            (r) => n(r)
          );
        })
      : Promise.resolve(t);
  }
  Xe.asPromise = Sv;
});
var Mr = x((bt) => {
  "use strict";
  Object.defineProperty(bt, "__esModule", { value: !0 });
  bt.stringArray =
    bt.array =
    bt.func =
    bt.error =
    bt.number =
    bt.string =
    bt.boolean =
      void 0;
  function Tv(t) {
    return t === !0 || t === !1;
  }
  bt.boolean = Tv;
  function Md(t) {
    return typeof t == "string" || t instanceof String;
  }
  bt.string = Md;
  function Pv(t) {
    return typeof t == "number" || t instanceof Number;
  }
  bt.number = Pv;
  function Ev(t) {
    return t instanceof Error;
  }
  bt.error = Ev;
  function kv(t) {
    return typeof t == "function";
  }
  bt.func = kv;
  function Ad(t) {
    return Array.isArray(t);
  }
  bt.array = Ad;
  function qv(t) {
    return Ad(t) && t.every((e) => Md(e));
  }
  bt.stringArray = qv;
});
var Da = x((J) => {
  "use strict";
  Object.defineProperty(J, "__esModule", { value: !0 });
  J.Message =
    J.NotificationType9 =
    J.NotificationType8 =
    J.NotificationType7 =
    J.NotificationType6 =
    J.NotificationType5 =
    J.NotificationType4 =
    J.NotificationType3 =
    J.NotificationType2 =
    J.NotificationType1 =
    J.NotificationType0 =
    J.NotificationType =
    J.RequestType9 =
    J.RequestType8 =
    J.RequestType7 =
    J.RequestType6 =
    J.RequestType5 =
    J.RequestType4 =
    J.RequestType3 =
    J.RequestType2 =
    J.RequestType1 =
    J.RequestType =
    J.RequestType0 =
    J.AbstractMessageSignature =
    J.ParameterStructures =
    J.ResponseError =
    J.ErrorCodes =
      void 0;
  var yr = Mr(),
    ea;
  (function (t) {
    (t.ParseError = -32700),
      (t.InvalidRequest = -32600),
      (t.MethodNotFound = -32601),
      (t.InvalidParams = -32602),
      (t.InternalError = -32603),
      (t.jsonrpcReservedErrorRangeStart = -32099),
      (t.serverErrorStart = -32099),
      (t.MessageWriteError = -32099),
      (t.MessageReadError = -32098),
      (t.PendingResponseRejected = -32097),
      (t.ConnectionInactive = -32096),
      (t.ServerNotInitialized = -32002),
      (t.UnknownErrorCode = -32001),
      (t.jsonrpcReservedErrorRangeEnd = -32e3),
      (t.serverErrorEnd = -32e3);
  })(ea || (J.ErrorCodes = ea = {}));
  var wi = class extends Error {
    constructor(e, n, r) {
      super(n),
        (this.code = yr.number(e) ? e : ea.UnknownErrorCode),
        (this.data = r),
        Object.setPrototypeOf(this, wi.prototype);
    }
    toJson() {
      let e = { code: this.code, message: this.message };
      return this.data !== void 0 && (e.data = this.data), e;
    }
  };
  J.ResponseError = wi;
  var ct = class {
    constructor(e) {
      this.kind = e;
    }
    static is(e) {
      return e === ct.auto || e === ct.byName || e === ct.byPosition;
    }
    toString() {
      return this.kind;
    }
  };
  J.ParameterStructures = ct;
  ct.auto = new ct("auto");
  ct.byPosition = new ct("byPosition");
  ct.byName = new ct("byName");
  var Me = class {
    constructor(e, n) {
      (this.method = e), (this.numberOfParams = n);
    }
    get parameterStructures() {
      return ct.auto;
    }
  };
  J.AbstractMessageSignature = Me;
  var ta = class extends Me {
    constructor(e) {
      super(e, 0);
    }
  };
  J.RequestType0 = ta;
  var na = class extends Me {
    constructor(e, n = ct.auto) {
      super(e, 1), (this._parameterStructures = n);
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  J.RequestType = na;
  var ra = class extends Me {
    constructor(e, n = ct.auto) {
      super(e, 1), (this._parameterStructures = n);
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  J.RequestType1 = ra;
  var ia = class extends Me {
    constructor(e) {
      super(e, 2);
    }
  };
  J.RequestType2 = ia;
  var sa = class extends Me {
    constructor(e) {
      super(e, 3);
    }
  };
  J.RequestType3 = sa;
  var oa = class extends Me {
    constructor(e) {
      super(e, 4);
    }
  };
  J.RequestType4 = oa;
  var aa = class extends Me {
    constructor(e) {
      super(e, 5);
    }
  };
  J.RequestType5 = aa;
  var ca = class extends Me {
    constructor(e) {
      super(e, 6);
    }
  };
  J.RequestType6 = ca;
  var ua = class extends Me {
    constructor(e) {
      super(e, 7);
    }
  };
  J.RequestType7 = ua;
  var la = class extends Me {
    constructor(e) {
      super(e, 8);
    }
  };
  J.RequestType8 = la;
  var da = class extends Me {
    constructor(e) {
      super(e, 9);
    }
  };
  J.RequestType9 = da;
  var fa = class extends Me {
    constructor(e, n = ct.auto) {
      super(e, 1), (this._parameterStructures = n);
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  J.NotificationType = fa;
  var ha = class extends Me {
    constructor(e) {
      super(e, 0);
    }
  };
  J.NotificationType0 = ha;
  var pa = class extends Me {
    constructor(e, n = ct.auto) {
      super(e, 1), (this._parameterStructures = n);
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  J.NotificationType1 = pa;
  var ga = class extends Me {
    constructor(e) {
      super(e, 2);
    }
  };
  J.NotificationType2 = ga;
  var ma = class extends Me {
    constructor(e) {
      super(e, 3);
    }
  };
  J.NotificationType3 = ma;
  var ya = class extends Me {
    constructor(e) {
      super(e, 4);
    }
  };
  J.NotificationType4 = ya;
  var va = class extends Me {
    constructor(e) {
      super(e, 5);
    }
  };
  J.NotificationType5 = va;
  var ba = class extends Me {
    constructor(e) {
      super(e, 6);
    }
  };
  J.NotificationType6 = ba;
  var _a = class extends Me {
    constructor(e) {
      super(e, 7);
    }
  };
  J.NotificationType7 = _a;
  var wa = class extends Me {
    constructor(e) {
      super(e, 8);
    }
  };
  J.NotificationType8 = wa;
  var Ca = class extends Me {
    constructor(e) {
      super(e, 9);
    }
  };
  J.NotificationType9 = Ca;
  var jd;
  (function (t) {
    function e(i) {
      let s = i;
      return s && yr.string(s.method) && (yr.string(s.id) || yr.number(s.id));
    }
    t.isRequest = e;
    function n(i) {
      let s = i;
      return s && yr.string(s.method) && i.id === void 0;
    }
    t.isNotification = n;
    function r(i) {
      let s = i;
      return (
        s &&
        (s.result !== void 0 || !!s.error) &&
        (yr.string(s.id) || yr.number(s.id) || s.id === null)
      );
    }
    t.isResponse = r;
  })(jd || (J.Message = jd = {}));
});
var Sa = x((er) => {
  "use strict";
  var $d;
  Object.defineProperty(er, "__esModule", { value: !0 });
  er.LRUCache = er.LinkedMap = er.Touch = void 0;
  var _t;
  (function (t) {
    (t.None = 0),
      (t.First = 1),
      (t.AsOld = t.First),
      (t.Last = 2),
      (t.AsNew = t.Last);
  })(_t || (er.Touch = _t = {}));
  var os = class {
    constructor() {
      (this[$d] = "LinkedMap"),
        (this._map = new Map()),
        (this._head = void 0),
        (this._tail = void 0),
        (this._size = 0),
        (this._state = 0);
    }
    clear() {
      this._map.clear(),
        (this._head = void 0),
        (this._tail = void 0),
        (this._size = 0),
        this._state++;
    }
    isEmpty() {
      return !this._head && !this._tail;
    }
    get size() {
      return this._size;
    }
    get first() {
      return this._head?.value;
    }
    get last() {
      return this._tail?.value;
    }
    has(e) {
      return this._map.has(e);
    }
    get(e, n = _t.None) {
      let r = this._map.get(e);
      if (!!r) return n !== _t.None && this.touch(r, n), r.value;
    }
    set(e, n, r = _t.None) {
      let i = this._map.get(e);
      if (i) (i.value = n), r !== _t.None && this.touch(i, r);
      else {
        switch (
          ((i = { key: e, value: n, next: void 0, previous: void 0 }), r)
        ) {
          case _t.None:
            this.addItemLast(i);
            break;
          case _t.First:
            this.addItemFirst(i);
            break;
          case _t.Last:
            this.addItemLast(i);
            break;
          default:
            this.addItemLast(i);
            break;
        }
        this._map.set(e, i), this._size++;
      }
      return this;
    }
    delete(e) {
      return !!this.remove(e);
    }
    remove(e) {
      let n = this._map.get(e);
      if (!!n)
        return this._map.delete(e), this.removeItem(n), this._size--, n.value;
    }
    shift() {
      if (!this._head && !this._tail) return;
      if (!this._head || !this._tail) throw new Error("Invalid list");
      let e = this._head;
      return this._map.delete(e.key), this.removeItem(e), this._size--, e.value;
    }
    forEach(e, n) {
      let r = this._state,
        i = this._head;
      for (; i; ) {
        if (
          (n ? e.bind(n)(i.value, i.key, this) : e(i.value, i.key, this),
          this._state !== r)
        )
          throw new Error("LinkedMap got modified during iteration.");
        i = i.next;
      }
    }
    keys() {
      let e = this._state,
        n = this._head,
        r = {
          [Symbol.iterator]: () => r,
          next: () => {
            if (this._state !== e)
              throw new Error("LinkedMap got modified during iteration.");
            if (n) {
              let i = { value: n.key, done: !1 };
              return (n = n.next), i;
            } else return { value: void 0, done: !0 };
          },
        };
      return r;
    }
    values() {
      let e = this._state,
        n = this._head,
        r = {
          [Symbol.iterator]: () => r,
          next: () => {
            if (this._state !== e)
              throw new Error("LinkedMap got modified during iteration.");
            if (n) {
              let i = { value: n.value, done: !1 };
              return (n = n.next), i;
            } else return { value: void 0, done: !0 };
          },
        };
      return r;
    }
    entries() {
      let e = this._state,
        n = this._head,
        r = {
          [Symbol.iterator]: () => r,
          next: () => {
            if (this._state !== e)
              throw new Error("LinkedMap got modified during iteration.");
            if (n) {
              let i = { value: [n.key, n.value], done: !1 };
              return (n = n.next), i;
            } else return { value: void 0, done: !0 };
          },
        };
      return r;
    }
    [(($d = Symbol.toStringTag), Symbol.iterator)]() {
      return this.entries();
    }
    trimOld(e) {
      if (e >= this.size) return;
      if (e === 0) {
        this.clear();
        return;
      }
      let n = this._head,
        r = this.size;
      for (; n && r > e; ) this._map.delete(n.key), (n = n.next), r--;
      (this._head = n),
        (this._size = r),
        n && (n.previous = void 0),
        this._state++;
    }
    addItemFirst(e) {
      if (!this._head && !this._tail) this._tail = e;
      else if (this._head) (e.next = this._head), (this._head.previous = e);
      else throw new Error("Invalid list");
      (this._head = e), this._state++;
    }
    addItemLast(e) {
      if (!this._head && !this._tail) this._head = e;
      else if (this._tail) (e.previous = this._tail), (this._tail.next = e);
      else throw new Error("Invalid list");
      (this._tail = e), this._state++;
    }
    removeItem(e) {
      if (e === this._head && e === this._tail)
        (this._head = void 0), (this._tail = void 0);
      else if (e === this._head) {
        if (!e.next) throw new Error("Invalid list");
        (e.next.previous = void 0), (this._head = e.next);
      } else if (e === this._tail) {
        if (!e.previous) throw new Error("Invalid list");
        (e.previous.next = void 0), (this._tail = e.previous);
      } else {
        let n = e.next,
          r = e.previous;
        if (!n || !r) throw new Error("Invalid list");
        (n.previous = r), (r.next = n);
      }
      (e.next = void 0), (e.previous = void 0), this._state++;
    }
    touch(e, n) {
      if (!this._head || !this._tail) throw new Error("Invalid list");
      if (!(n !== _t.First && n !== _t.Last)) {
        if (n === _t.First) {
          if (e === this._head) return;
          let r = e.next,
            i = e.previous;
          e === this._tail
            ? ((i.next = void 0), (this._tail = i))
            : ((r.previous = i), (i.next = r)),
            (e.previous = void 0),
            (e.next = this._head),
            (this._head.previous = e),
            (this._head = e),
            this._state++;
        } else if (n === _t.Last) {
          if (e === this._tail) return;
          let r = e.next,
            i = e.previous;
          e === this._head
            ? ((r.previous = void 0), (this._head = r))
            : ((r.previous = i), (i.next = r)),
            (e.next = void 0),
            (e.previous = this._tail),
            (this._tail.next = e),
            (this._tail = e),
            this._state++;
        }
      }
    }
    toJSON() {
      let e = [];
      return (
        this.forEach((n, r) => {
          e.push([r, n]);
        }),
        e
      );
    }
    fromJSON(e) {
      this.clear();
      for (let [n, r] of e) this.set(n, r);
    }
  };
  er.LinkedMap = os;
  var Ra = class extends os {
    constructor(e, n = 1) {
      super(), (this._limit = e), (this._ratio = Math.min(Math.max(0, n), 1));
    }
    get limit() {
      return this._limit;
    }
    set limit(e) {
      (this._limit = e), this.checkTrim();
    }
    get ratio() {
      return this._ratio;
    }
    set ratio(e) {
      (this._ratio = Math.min(Math.max(0, e), 1)), this.checkTrim();
    }
    get(e, n = _t.AsNew) {
      return super.get(e, n);
    }
    peek(e) {
      return super.get(e, _t.None);
    }
    set(e, n) {
      return super.set(e, n, _t.Last), this.checkTrim(), this;
    }
    checkTrim() {
      this.size > this._limit &&
        this.trimOld(Math.round(this._limit * this._ratio));
    }
  };
  er.LRUCache = Ra;
});
var Ud = x((as) => {
  "use strict";
  Object.defineProperty(as, "__esModule", { value: !0 });
  as.Disposable = void 0;
  var Hd;
  (function (t) {
    function e(n) {
      return { dispose: n };
    }
    t.create = e;
  })(Hd || (as.Disposable = Hd = {}));
});
var tr = x((Ea) => {
  "use strict";
  Object.defineProperty(Ea, "__esModule", { value: !0 });
  var Ta;
  function Pa() {
    if (Ta === void 0)
      throw new Error("No runtime abstraction layer installed");
    return Ta;
  }
  (function (t) {
    function e(n) {
      if (n === void 0)
        throw new Error("No runtime abstraction layer provided");
      Ta = n;
    }
    t.install = e;
  })(Pa || (Pa = {}));
  Ea.default = Pa;
});
var $r = x((jr) => {
  "use strict";
  Object.defineProperty(jr, "__esModule", { value: !0 });
  jr.Emitter = jr.Event = void 0;
  var xv = tr(),
    Wd;
  (function (t) {
    let e = { dispose() {} };
    t.None = function () {
      return e;
    };
  })(Wd || (jr.Event = Wd = {}));
  var ka = class {
      add(e, n = null, r) {
        this._callbacks || ((this._callbacks = []), (this._contexts = [])),
          this._callbacks.push(e),
          this._contexts.push(n),
          Array.isArray(r) && r.push({ dispose: () => this.remove(e, n) });
      }
      remove(e, n = null) {
        if (!this._callbacks) return;
        let r = !1;
        for (let i = 0, s = this._callbacks.length; i < s; i++)
          if (this._callbacks[i] === e)
            if (this._contexts[i] === n) {
              this._callbacks.splice(i, 1), this._contexts.splice(i, 1);
              return;
            } else r = !0;
        if (r)
          throw new Error(
            "When adding a listener with a context, you should remove it with the same context"
          );
      }
      invoke(...e) {
        if (!this._callbacks) return [];
        let n = [],
          r = this._callbacks.slice(0),
          i = this._contexts.slice(0);
        for (let s = 0, o = r.length; s < o; s++)
          try {
            n.push(r[s].apply(i[s], e));
          } catch (a) {
            (0, xv.default)().console.error(a);
          }
        return n;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        (this._callbacks = void 0), (this._contexts = void 0);
      }
    },
    Ar = class {
      constructor(e) {
        this._options = e;
      }
      get event() {
        return (
          this._event ||
            (this._event = (e, n, r) => {
              this._callbacks || (this._callbacks = new ka()),
                this._options &&
                  this._options.onFirstListenerAdd &&
                  this._callbacks.isEmpty() &&
                  this._options.onFirstListenerAdd(this),
                this._callbacks.add(e, n);
              let i = {
                dispose: () => {
                  !this._callbacks ||
                    (this._callbacks.remove(e, n),
                    (i.dispose = Ar._noop),
                    this._options &&
                      this._options.onLastListenerRemove &&
                      this._callbacks.isEmpty() &&
                      this._options.onLastListenerRemove(this));
                },
              };
              return Array.isArray(r) && r.push(i), i;
            }),
          this._event
        );
      }
      fire(e) {
        this._callbacks && this._callbacks.invoke.call(this._callbacks, e);
      }
      dispose() {
        this._callbacks &&
          (this._callbacks.dispose(), (this._callbacks = void 0));
      }
    };
  jr.Emitter = Ar;
  Ar._noop = function () {};
});
var ls = x((Hr) => {
  "use strict";
  Object.defineProperty(Hr, "__esModule", { value: !0 });
  Hr.CancellationTokenSource = Hr.CancellationToken = void 0;
  var Ov = tr(),
    Iv = Mr(),
    qa = $r(),
    cs;
  (function (t) {
    (t.None = Object.freeze({
      isCancellationRequested: !1,
      onCancellationRequested: qa.Event.None,
    })),
      (t.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: qa.Event.None,
      }));
    function e(n) {
      let r = n;
      return (
        r &&
        (r === t.None ||
          r === t.Cancelled ||
          (Iv.boolean(r.isCancellationRequested) &&
            !!r.onCancellationRequested))
      );
    }
    t.is = e;
  })(cs || (Hr.CancellationToken = cs = {}));
  var Fv = Object.freeze(function (t, e) {
      let n = (0, Ov.default)().timer.setTimeout(t.bind(e), 0);
      return {
        dispose() {
          n.dispose();
        },
      };
    }),
    us = class {
      constructor() {
        this._isCancelled = !1;
      }
      cancel() {
        this._isCancelled ||
          ((this._isCancelled = !0),
          this._emitter && (this._emitter.fire(void 0), this.dispose()));
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        return this._isCancelled
          ? Fv
          : (this._emitter || (this._emitter = new qa.Emitter()),
            this._emitter.event);
      }
      dispose() {
        this._emitter && (this._emitter.dispose(), (this._emitter = void 0));
      }
    },
    xa = class {
      get token() {
        return this._token || (this._token = new us()), this._token;
      }
      cancel() {
        this._token ? this._token.cancel() : (this._token = cs.Cancelled);
      }
      dispose() {
        this._token
          ? this._token instanceof us && this._token.dispose()
          : (this._token = cs.None);
      }
    };
  Hr.CancellationTokenSource = xa;
});
var Kd = x((Ur) => {
  "use strict";
  Object.defineProperty(Ur, "__esModule", { value: !0 });
  Ur.SharedArrayReceiverStrategy = Ur.SharedArraySenderStrategy = void 0;
  var Nv = ls(),
    Ci;
  (function (t) {
    (t.Continue = 0), (t.Cancelled = 1);
  })(Ci || (Ci = {}));
  var Oa = class {
    constructor() {
      this.buffers = new Map();
    }
    enableCancellation(e) {
      if (e.id === null) return;
      let n = new SharedArrayBuffer(4),
        r = new Int32Array(n, 0, 1);
      (r[0] = Ci.Continue),
        this.buffers.set(e.id, n),
        (e.$cancellationData = n);
    }
    async sendCancellation(e, n) {
      let r = this.buffers.get(n);
      if (r === void 0) return;
      let i = new Int32Array(r, 0, 1);
      Atomics.store(i, 0, Ci.Cancelled);
    }
    cleanup(e) {
      this.buffers.delete(e);
    }
    dispose() {
      this.buffers.clear();
    }
  };
  Ur.SharedArraySenderStrategy = Oa;
  var Ia = class {
      constructor(e) {
        this.data = new Int32Array(e, 0, 1);
      }
      get isCancellationRequested() {
        return Atomics.load(this.data, 0) === Ci.Cancelled;
      }
      get onCancellationRequested() {
        throw new Error(
          "Cancellation over SharedArrayBuffer doesn't support cancellation events"
        );
      }
    },
    Fa = class {
      constructor(e) {
        this.token = new Ia(e);
      }
      cancel() {}
      dispose() {}
    },
    Na = class {
      constructor() {
        this.kind = "request";
      }
      createCancellationTokenSource(e) {
        let n = e.$cancellationData;
        return n === void 0 ? new Nv.CancellationTokenSource() : new Fa(n);
      }
    };
  Ur.SharedArrayReceiverStrategy = Na;
});
var Ma = x((ds) => {
  "use strict";
  Object.defineProperty(ds, "__esModule", { value: !0 });
  ds.Semaphore = void 0;
  var Lv = tr(),
    La = class {
      constructor(e = 1) {
        if (e <= 0) throw new Error("Capacity must be greater than 0");
        (this._capacity = e), (this._active = 0), (this._waiting = []);
      }
      lock(e) {
        return new Promise((n, r) => {
          this._waiting.push({ thunk: e, resolve: n, reject: r }),
            this.runNext();
        });
      }
      get active() {
        return this._active;
      }
      runNext() {
        this._waiting.length === 0 ||
          this._active === this._capacity ||
          (0, Lv.default)().timer.setImmediate(() => this.doRunNext());
      }
      doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity)
          return;
        let e = this._waiting.shift();
        if ((this._active++, this._active > this._capacity))
          throw new Error("To many thunks active");
        try {
          let n = e.thunk();
          n instanceof Promise
            ? n.then(
                (r) => {
                  this._active--, e.resolve(r), this.runNext();
                },
                (r) => {
                  this._active--, e.reject(r), this.runNext();
                }
              )
            : (this._active--, e.resolve(n), this.runNext());
        } catch (n) {
          this._active--, e.reject(n), this.runNext();
        }
      }
    };
  ds.Semaphore = La;
});
var Bd = x((nr) => {
  "use strict";
  Object.defineProperty(nr, "__esModule", { value: !0 });
  nr.ReadableStreamMessageReader =
    nr.AbstractMessageReader =
    nr.MessageReader =
      void 0;
  var ja = tr(),
    Wr = Mr(),
    Aa = $r(),
    Mv = Ma(),
    zd;
  (function (t) {
    function e(n) {
      let r = n;
      return (
        r &&
        Wr.func(r.listen) &&
        Wr.func(r.dispose) &&
        Wr.func(r.onError) &&
        Wr.func(r.onClose) &&
        Wr.func(r.onPartialMessage)
      );
    }
    t.is = e;
  })(zd || (nr.MessageReader = zd = {}));
  var fs = class {
    constructor() {
      (this.errorEmitter = new Aa.Emitter()),
        (this.closeEmitter = new Aa.Emitter()),
        (this.partialMessageEmitter = new Aa.Emitter());
    }
    dispose() {
      this.errorEmitter.dispose(), this.closeEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(e) {
      this.errorEmitter.fire(this.asError(e));
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(void 0);
    }
    get onPartialMessage() {
      return this.partialMessageEmitter.event;
    }
    firePartialMessage(e) {
      this.partialMessageEmitter.fire(e);
    }
    asError(e) {
      return e instanceof Error
        ? e
        : new Error(
            `Reader received error. Reason: ${
              Wr.string(e.message) ? e.message : "unknown"
            }`
          );
    }
  };
  nr.AbstractMessageReader = fs;
  var $a;
  (function (t) {
    function e(n) {
      let r,
        i,
        s,
        o = new Map(),
        a,
        u = new Map();
      if (n === void 0 || typeof n == "string") r = n ?? "utf-8";
      else {
        if (
          ((r = n.charset ?? "utf-8"),
          n.contentDecoder !== void 0 &&
            ((s = n.contentDecoder), o.set(s.name, s)),
          n.contentDecoders !== void 0)
        )
          for (let h of n.contentDecoders) o.set(h.name, h);
        if (
          (n.contentTypeDecoder !== void 0 &&
            ((a = n.contentTypeDecoder), u.set(a.name, a)),
          n.contentTypeDecoders !== void 0)
        )
          for (let h of n.contentTypeDecoders) u.set(h.name, h);
      }
      return (
        a === void 0 &&
          ((a = (0, ja.default)().applicationJson.decoder), u.set(a.name, a)),
        {
          charset: r,
          contentDecoder: s,
          contentDecoders: o,
          contentTypeDecoder: a,
          contentTypeDecoders: u,
        }
      );
    }
    t.fromOptions = e;
  })($a || ($a = {}));
  var Ha = class extends fs {
    constructor(e, n) {
      super(),
        (this.readable = e),
        (this.options = $a.fromOptions(n)),
        (this.buffer = (0, ja.default)().messageBuffer.create(
          this.options.charset
        )),
        (this._partialMessageTimeout = 1e4),
        (this.nextMessageLength = -1),
        (this.messageToken = 0),
        (this.readSemaphore = new Mv.Semaphore(1));
    }
    set partialMessageTimeout(e) {
      this._partialMessageTimeout = e;
    }
    get partialMessageTimeout() {
      return this._partialMessageTimeout;
    }
    listen(e) {
      (this.nextMessageLength = -1),
        (this.messageToken = 0),
        (this.partialMessageTimer = void 0),
        (this.callback = e);
      let n = this.readable.onData((r) => {
        this.onData(r);
      });
      return (
        this.readable.onError((r) => this.fireError(r)),
        this.readable.onClose(() => this.fireClose()),
        n
      );
    }
    onData(e) {
      try {
        for (this.buffer.append(e); ; ) {
          if (this.nextMessageLength === -1) {
            let r = this.buffer.tryReadHeaders(!0);
            if (!r) return;
            let i = r.get("content-length");
            if (!i) {
              this.fireError(
                new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(r))}`)
              );
              return;
            }
            let s = parseInt(i);
            if (isNaN(s)) {
              this.fireError(
                new Error(`Content-Length value must be a number. Got ${i}`)
              );
              return;
            }
            this.nextMessageLength = s;
          }
          let n = this.buffer.tryReadBody(this.nextMessageLength);
          if (n === void 0) {
            this.setPartialMessageTimer();
            return;
          }
          this.clearPartialMessageTimer(),
            (this.nextMessageLength = -1),
            this.readSemaphore
              .lock(async () => {
                let r =
                    this.options.contentDecoder !== void 0
                      ? await this.options.contentDecoder.decode(n)
                      : n,
                  i = await this.options.contentTypeDecoder.decode(
                    r,
                    this.options
                  );
                this.callback(i);
              })
              .catch((r) => {
                this.fireError(r);
              });
        }
      } catch (n) {
        this.fireError(n);
      }
    }
    clearPartialMessageTimer() {
      this.partialMessageTimer &&
        (this.partialMessageTimer.dispose(),
        (this.partialMessageTimer = void 0));
    }
    setPartialMessageTimer() {
      this.clearPartialMessageTimer(),
        !(this._partialMessageTimeout <= 0) &&
          (this.partialMessageTimer = (0, ja.default)().timer.setTimeout(
            (e, n) => {
              (this.partialMessageTimer = void 0),
                e === this.messageToken &&
                  (this.firePartialMessage({ messageToken: e, waitingTime: n }),
                  this.setPartialMessageTimer());
            },
            this._partialMessageTimeout,
            this.messageToken,
            this._partialMessageTimeout
          ));
    }
  };
  nr.ReadableStreamMessageReader = Ha;
});
var Qd = x((rr) => {
  "use strict";
  Object.defineProperty(rr, "__esModule", { value: !0 });
  rr.WriteableStreamMessageWriter =
    rr.AbstractMessageWriter =
    rr.MessageWriter =
      void 0;
  var Vd = tr(),
    Di = Mr(),
    Av = Ma(),
    Gd = $r(),
    jv = "Content-Length: ",
    Xd = `\r
`,
    Jd;
  (function (t) {
    function e(n) {
      let r = n;
      return (
        r &&
        Di.func(r.dispose) &&
        Di.func(r.onClose) &&
        Di.func(r.onError) &&
        Di.func(r.write)
      );
    }
    t.is = e;
  })(Jd || (rr.MessageWriter = Jd = {}));
  var hs = class {
    constructor() {
      (this.errorEmitter = new Gd.Emitter()),
        (this.closeEmitter = new Gd.Emitter());
    }
    dispose() {
      this.errorEmitter.dispose(), this.closeEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(e, n, r) {
      this.errorEmitter.fire([this.asError(e), n, r]);
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(void 0);
    }
    asError(e) {
      return e instanceof Error
        ? e
        : new Error(
            `Writer received error. Reason: ${
              Di.string(e.message) ? e.message : "unknown"
            }`
          );
    }
  };
  rr.AbstractMessageWriter = hs;
  var Ua;
  (function (t) {
    function e(n) {
      return n === void 0 || typeof n == "string"
        ? {
            charset: n ?? "utf-8",
            contentTypeEncoder: (0, Vd.default)().applicationJson.encoder,
          }
        : {
            charset: n.charset ?? "utf-8",
            contentEncoder: n.contentEncoder,
            contentTypeEncoder:
              n.contentTypeEncoder ?? (0, Vd.default)().applicationJson.encoder,
          };
    }
    t.fromOptions = e;
  })(Ua || (Ua = {}));
  var Wa = class extends hs {
    constructor(e, n) {
      super(),
        (this.writable = e),
        (this.options = Ua.fromOptions(n)),
        (this.errorCount = 0),
        (this.writeSemaphore = new Av.Semaphore(1)),
        this.writable.onError((r) => this.fireError(r)),
        this.writable.onClose(() => this.fireClose());
    }
    async write(e) {
      return this.writeSemaphore.lock(async () =>
        this.options.contentTypeEncoder
          .encode(e, this.options)
          .then((r) =>
            this.options.contentEncoder !== void 0
              ? this.options.contentEncoder.encode(r)
              : r
          )
          .then(
            (r) => {
              let i = [];
              return (
                i.push(jv, r.byteLength.toString(), Xd),
                i.push(Xd),
                this.doWrite(e, i, r)
              );
            },
            (r) => {
              throw (this.fireError(r), r);
            }
          )
      );
    }
    async doWrite(e, n, r) {
      try {
        return (
          await this.writable.write(n.join(""), "ascii"), this.writable.write(r)
        );
      } catch (i) {
        return this.handleError(i, e), Promise.reject(i);
      }
    }
    handleError(e, n) {
      this.errorCount++, this.fireError(e, n, this.errorCount);
    }
    end() {
      this.writable.end();
    }
  };
  rr.WriteableStreamMessageWriter = Wa;
});
var Yd = x((ps) => {
  "use strict";
  Object.defineProperty(ps, "__esModule", { value: !0 });
  ps.AbstractMessageBuffer = void 0;
  var $v = 13,
    Hv = 10,
    Uv = `\r
`,
    Ka = class {
      constructor(e = "utf-8") {
        (this._encoding = e), (this._chunks = []), (this._totalLength = 0);
      }
      get encoding() {
        return this._encoding;
      }
      append(e) {
        let n = typeof e == "string" ? this.fromString(e, this._encoding) : e;
        this._chunks.push(n), (this._totalLength += n.byteLength);
      }
      tryReadHeaders(e = !1) {
        if (this._chunks.length === 0) return;
        let n = 0,
          r = 0,
          i = 0,
          s = 0;
        e: for (; r < this._chunks.length; ) {
          let h = this._chunks[r];
          i = 0;
          t: for (; i < h.length; ) {
            switch (h[i]) {
              case $v:
                switch (n) {
                  case 0:
                    n = 1;
                    break;
                  case 2:
                    n = 3;
                    break;
                  default:
                    n = 0;
                }
                break;
              case Hv:
                switch (n) {
                  case 1:
                    n = 2;
                    break;
                  case 3:
                    (n = 4), i++;
                    break e;
                  default:
                    n = 0;
                }
                break;
              default:
                n = 0;
            }
            i++;
          }
          (s += h.byteLength), r++;
        }
        if (n !== 4) return;
        let o = this._read(s + i),
          a = new Map(),
          u = this.toString(o, "ascii").split(Uv);
        if (u.length < 2) return a;
        for (let h = 0; h < u.length - 2; h++) {
          let p = u[h],
            v = p.indexOf(":");
          if (v === -1)
            throw new Error(`Message header must separate key and value using ':'
${p}`);
          let m = p.substr(0, v),
            R = p.substr(v + 1).trim();
          a.set(e ? m.toLowerCase() : m, R);
        }
        return a;
      }
      tryReadBody(e) {
        if (!(this._totalLength < e)) return this._read(e);
      }
      get numberOfBytes() {
        return this._totalLength;
      }
      _read(e) {
        if (e === 0) return this.emptyBuffer();
        if (e > this._totalLength)
          throw new Error("Cannot read so many bytes!");
        if (this._chunks[0].byteLength === e) {
          let s = this._chunks[0];
          return (
            this._chunks.shift(), (this._totalLength -= e), this.asNative(s)
          );
        }
        if (this._chunks[0].byteLength > e) {
          let s = this._chunks[0],
            o = this.asNative(s, e);
          return (this._chunks[0] = s.slice(e)), (this._totalLength -= e), o;
        }
        let n = this.allocNative(e),
          r = 0,
          i = 0;
        for (; e > 0; ) {
          let s = this._chunks[i];
          if (s.byteLength > e) {
            let o = s.slice(0, e);
            n.set(o, r),
              (r += e),
              (this._chunks[i] = s.slice(e)),
              (this._totalLength -= e),
              (e -= e);
          } else
            n.set(s, r),
              (r += s.byteLength),
              this._chunks.shift(),
              (this._totalLength -= s.byteLength),
              (e -= s.byteLength);
        }
        return n;
      }
    };
  ps.AbstractMessageBuffer = Ka;
});
var rf = x((se) => {
  "use strict";
  Object.defineProperty(se, "__esModule", { value: !0 });
  se.createMessageConnection =
    se.ConnectionOptions =
    se.MessageStrategy =
    se.CancellationStrategy =
    se.CancellationSenderStrategy =
    se.CancellationReceiverStrategy =
    se.RequestCancellationReceiverStrategy =
    se.IdCancellationReceiverStrategy =
    se.ConnectionStrategy =
    se.ConnectionError =
    se.ConnectionErrors =
    se.LogTraceNotification =
    se.SetTraceNotification =
    se.TraceFormat =
    se.TraceValues =
    se.Trace =
    se.NullLogger =
    se.ProgressType =
    se.ProgressToken =
      void 0;
  var Zd = tr(),
    Ke = Mr(),
    Z = Da(),
    ef = Sa(),
    Ri = $r(),
    za = ls(),
    Pi;
  (function (t) {
    t.type = new Z.NotificationType("$/cancelRequest");
  })(Pi || (Pi = {}));
  var Ba;
  (function (t) {
    function e(n) {
      return typeof n == "string" || typeof n == "number";
    }
    t.is = e;
  })(Ba || (se.ProgressToken = Ba = {}));
  var Si;
  (function (t) {
    t.type = new Z.NotificationType("$/progress");
  })(Si || (Si = {}));
  var Va = class {
    constructor() {}
  };
  se.ProgressType = Va;
  var Ga;
  (function (t) {
    function e(n) {
      return Ke.func(n);
    }
    t.is = e;
  })(Ga || (Ga = {}));
  se.NullLogger = Object.freeze({
    error: () => {},
    warn: () => {},
    info: () => {},
    log: () => {},
  });
  var Re;
  (function (t) {
    (t[(t.Off = 0)] = "Off"),
      (t[(t.Messages = 1)] = "Messages"),
      (t[(t.Compact = 2)] = "Compact"),
      (t[(t.Verbose = 3)] = "Verbose");
  })(Re || (se.Trace = Re = {}));
  var tf;
  (function (t) {
    (t.Off = "off"),
      (t.Messages = "messages"),
      (t.Compact = "compact"),
      (t.Verbose = "verbose");
  })(tf || (se.TraceValues = tf = {}));
  (function (t) {
    function e(r) {
      if (!Ke.string(r)) return t.Off;
      switch (((r = r.toLowerCase()), r)) {
        case "off":
          return t.Off;
        case "messages":
          return t.Messages;
        case "compact":
          return t.Compact;
        case "verbose":
          return t.Verbose;
        default:
          return t.Off;
      }
    }
    t.fromString = e;
    function n(r) {
      switch (r) {
        case t.Off:
          return "off";
        case t.Messages:
          return "messages";
        case t.Compact:
          return "compact";
        case t.Verbose:
          return "verbose";
        default:
          return "off";
      }
    }
    t.toString = n;
  })(Re || (se.Trace = Re = {}));
  var Wt;
  (function (t) {
    (t.Text = "text"), (t.JSON = "json");
  })(Wt || (se.TraceFormat = Wt = {}));
  (function (t) {
    function e(n) {
      return Ke.string(n)
        ? ((n = n.toLowerCase()), n === "json" ? t.JSON : t.Text)
        : t.Text;
    }
    t.fromString = e;
  })(Wt || (se.TraceFormat = Wt = {}));
  var Xa;
  (function (t) {
    t.type = new Z.NotificationType("$/setTrace");
  })(Xa || (se.SetTraceNotification = Xa = {}));
  var gs;
  (function (t) {
    t.type = new Z.NotificationType("$/logTrace");
  })(gs || (se.LogTraceNotification = gs = {}));
  var Ti;
  (function (t) {
    (t[(t.Closed = 1)] = "Closed"),
      (t[(t.Disposed = 2)] = "Disposed"),
      (t[(t.AlreadyListening = 3)] = "AlreadyListening");
  })(Ti || (se.ConnectionErrors = Ti = {}));
  var ir = class extends Error {
    constructor(e, n) {
      super(n), (this.code = e), Object.setPrototypeOf(this, ir.prototype);
    }
  };
  se.ConnectionError = ir;
  var Ja;
  (function (t) {
    function e(n) {
      let r = n;
      return r && Ke.func(r.cancelUndispatched);
    }
    t.is = e;
  })(Ja || (se.ConnectionStrategy = Ja = {}));
  var ms;
  (function (t) {
    function e(n) {
      let r = n;
      return (
        r &&
        (r.kind === void 0 || r.kind === "id") &&
        Ke.func(r.createCancellationTokenSource) &&
        (r.dispose === void 0 || Ke.func(r.dispose))
      );
    }
    t.is = e;
  })(ms || (se.IdCancellationReceiverStrategy = ms = {}));
  var Qa;
  (function (t) {
    function e(n) {
      let r = n;
      return (
        r &&
        r.kind === "request" &&
        Ke.func(r.createCancellationTokenSource) &&
        (r.dispose === void 0 || Ke.func(r.dispose))
      );
    }
    t.is = e;
  })(Qa || (se.RequestCancellationReceiverStrategy = Qa = {}));
  var ys;
  (function (t) {
    t.Message = Object.freeze({
      createCancellationTokenSource(n) {
        return new za.CancellationTokenSource();
      },
    });
    function e(n) {
      return ms.is(n) || Qa.is(n);
    }
    t.is = e;
  })(ys || (se.CancellationReceiverStrategy = ys = {}));
  var vs;
  (function (t) {
    t.Message = Object.freeze({
      sendCancellation(n, r) {
        return n.sendNotification(Pi.type, { id: r });
      },
      cleanup(n) {},
    });
    function e(n) {
      let r = n;
      return r && Ke.func(r.sendCancellation) && Ke.func(r.cleanup);
    }
    t.is = e;
  })(vs || (se.CancellationSenderStrategy = vs = {}));
  var bs;
  (function (t) {
    t.Message = Object.freeze({ receiver: ys.Message, sender: vs.Message });
    function e(n) {
      let r = n;
      return r && ys.is(r.receiver) && vs.is(r.sender);
    }
    t.is = e;
  })(bs || (se.CancellationStrategy = bs = {}));
  var _s;
  (function (t) {
    function e(n) {
      let r = n;
      return r && Ke.func(r.handleMessage);
    }
    t.is = e;
  })(_s || (se.MessageStrategy = _s = {}));
  var nf;
  (function (t) {
    function e(n) {
      let r = n;
      return (
        r &&
        (bs.is(r.cancellationStrategy) ||
          Ja.is(r.connectionStrategy) ||
          _s.is(r.messageStrategy))
      );
    }
    t.is = e;
  })(nf || (se.ConnectionOptions = nf = {}));
  var dn;
  (function (t) {
    (t[(t.New = 1)] = "New"),
      (t[(t.Listening = 2)] = "Listening"),
      (t[(t.Closed = 3)] = "Closed"),
      (t[(t.Disposed = 4)] = "Disposed");
  })(dn || (dn = {}));
  function Wv(t, e, n, r) {
    let i = n !== void 0 ? n : se.NullLogger,
      s = 0,
      o = 0,
      a = 0,
      u = "2.0",
      h,
      p = new Map(),
      v,
      m = new Map(),
      R = new Map(),
      y,
      P = new ef.LinkedMap(),
      q = new Map(),
      A = new Set(),
      j = new Map(),
      E = Re.Off,
      I = Wt.Text,
      N,
      Q = dn.New,
      X = new Ri.Emitter(),
      Te = new Ri.Emitter(),
      We = new Ri.Emitter(),
      Ze = new Ri.Emitter(),
      et = new Ri.Emitter(),
      Y = r && r.cancellationStrategy ? r.cancellationStrategy : bs.Message;
    function _e(_) {
      if (_ === null)
        throw new Error(
          "Can't send requests with id null since the response can't be correlated."
        );
      return "req-" + _.toString();
    }
    function yt(_) {
      return _ === null
        ? "res-unknown-" + (++a).toString()
        : "res-" + _.toString();
    }
    function st() {
      return "not-" + (++o).toString();
    }
    function St(_, F) {
      Z.Message.isRequest(F)
        ? _.set(_e(F.id), F)
        : Z.Message.isResponse(F)
        ? _.set(yt(F.id), F)
        : _.set(st(), F);
    }
    function Gn(_) {}
    function vn() {
      return Q === dn.Listening;
    }
    function Ne() {
      return Q === dn.Closed;
    }
    function xt() {
      return Q === dn.Disposed;
    }
    function Tt() {
      (Q === dn.New || Q === dn.Listening) &&
        ((Q = dn.Closed), Te.fire(void 0));
    }
    function ht(_) {
      X.fire([_, void 0, void 0]);
    }
    function Xn(_) {
      X.fire(_);
    }
    t.onClose(Tt), t.onError(ht), e.onClose(Tt), e.onError(Xn);
    function bn() {
      y ||
        P.size === 0 ||
        (y = (0, Zd.default)().timer.setImmediate(() => {
          (y = void 0), xn();
        }));
    }
    function _n(_) {
      Z.Message.isRequest(_)
        ? wn(_)
        : Z.Message.isNotification(_)
        ? an(_)
        : Z.Message.isResponse(_)
        ? on(_)
        : Cn(_);
    }
    function xn() {
      if (P.size === 0) return;
      let _ = P.shift();
      try {
        let F = r?.messageStrategy;
        _s.is(F) ? F.handleMessage(_, _n) : _n(_);
      } finally {
        bn();
      }
    }
    let Jn = (_) => {
      try {
        if (Z.Message.isNotification(_) && _.method === Pi.type.method) {
          let F = _.params.id,
            U = _e(F),
            K = P.get(U);
          if (Z.Message.isRequest(K)) {
            let me = r?.connectionStrategy,
              Pe =
                me && me.cancelUndispatched
                  ? me.cancelUndispatched(K, Gn)
                  : void 0;
            if (Pe && (Pe.error !== void 0 || Pe.result !== void 0)) {
              P.delete(U),
                j.delete(F),
                (Pe.id = K.id),
                Jt(Pe, _.method, Date.now()),
                e
                  .write(Pe)
                  .catch(() =>
                    i.error("Sending response for canceled message failed.")
                  );
              return;
            }
          }
          let ve = j.get(F);
          if (ve !== void 0) {
            ve.cancel(), Qt(_);
            return;
          } else A.add(F);
        }
        St(P, _);
      } finally {
        bn();
      }
    };
    function wn(_) {
      if (xt()) return;
      function F(ae, we, fe) {
        let xe = { jsonrpc: u, id: _.id };
        ae instanceof Z.ResponseError
          ? (xe.error = ae.toJson())
          : (xe.result = ae === void 0 ? null : ae),
          Jt(xe, we, fe),
          e.write(xe).catch(() => i.error("Sending response failed."));
      }
      function U(ae, we, fe) {
        let xe = { jsonrpc: u, id: _.id, error: ae.toJson() };
        Jt(xe, we, fe),
          e.write(xe).catch(() => i.error("Sending response failed."));
      }
      function K(ae, we, fe) {
        ae === void 0 && (ae = null);
        let xe = { jsonrpc: u, id: _.id, result: ae };
        Jt(xe, we, fe),
          e.write(xe).catch(() => i.error("Sending response failed."));
      }
      Qn(_);
      let ve = p.get(_.method),
        me,
        Pe;
      ve && ((me = ve.type), (Pe = ve.handler));
      let qe = Date.now();
      if (Pe || h) {
        let ae = _.id ?? String(Date.now()),
          we = ms.is(Y.receiver)
            ? Y.receiver.createCancellationTokenSource(ae)
            : Y.receiver.createCancellationTokenSource(_);
        _.id !== null && A.has(_.id) && we.cancel(),
          _.id !== null && j.set(ae, we);
        try {
          let fe;
          if (Pe)
            if (_.params === void 0) {
              if (me !== void 0 && me.numberOfParams !== 0) {
                U(
                  new Z.ResponseError(
                    Z.ErrorCodes.InvalidParams,
                    `Request ${_.method} defines ${me.numberOfParams} params but received none.`
                  ),
                  _.method,
                  qe
                );
                return;
              }
              fe = Pe(we.token);
            } else if (Array.isArray(_.params)) {
              if (
                me !== void 0 &&
                me.parameterStructures === Z.ParameterStructures.byName
              ) {
                U(
                  new Z.ResponseError(
                    Z.ErrorCodes.InvalidParams,
                    `Request ${_.method} defines parameters by name but received parameters by position`
                  ),
                  _.method,
                  qe
                );
                return;
              }
              fe = Pe(..._.params, we.token);
            } else {
              if (
                me !== void 0 &&
                me.parameterStructures === Z.ParameterStructures.byPosition
              ) {
                U(
                  new Z.ResponseError(
                    Z.ErrorCodes.InvalidParams,
                    `Request ${_.method} defines parameters by position but received parameters by name`
                  ),
                  _.method,
                  qe
                );
                return;
              }
              fe = Pe(_.params, we.token);
            }
          else h && (fe = h(_.method, _.params, we.token));
          let xe = fe;
          fe
            ? xe.then
              ? xe.then(
                  (Ge) => {
                    j.delete(ae), F(Ge, _.method, qe);
                  },
                  (Ge) => {
                    j.delete(ae),
                      Ge instanceof Z.ResponseError
                        ? U(Ge, _.method, qe)
                        : Ge && Ke.string(Ge.message)
                        ? U(
                            new Z.ResponseError(
                              Z.ErrorCodes.InternalError,
                              `Request ${_.method} failed with message: ${Ge.message}`
                            ),
                            _.method,
                            qe
                          )
                        : U(
                            new Z.ResponseError(
                              Z.ErrorCodes.InternalError,
                              `Request ${_.method} failed unexpectedly without providing any details.`
                            ),
                            _.method,
                            qe
                          );
                  }
                )
              : (j.delete(ae), F(fe, _.method, qe))
            : (j.delete(ae), K(fe, _.method, qe));
        } catch (fe) {
          j.delete(ae),
            fe instanceof Z.ResponseError
              ? F(fe, _.method, qe)
              : fe && Ke.string(fe.message)
              ? U(
                  new Z.ResponseError(
                    Z.ErrorCodes.InternalError,
                    `Request ${_.method} failed with message: ${fe.message}`
                  ),
                  _.method,
                  qe
                )
              : U(
                  new Z.ResponseError(
                    Z.ErrorCodes.InternalError,
                    `Request ${_.method} failed unexpectedly without providing any details.`
                  ),
                  _.method,
                  qe
                );
        }
      } else
        U(
          new Z.ResponseError(
            Z.ErrorCodes.MethodNotFound,
            `Unhandled method ${_.method}`
          ),
          _.method,
          qe
        );
    }
    function on(_) {
      if (!xt())
        if (_.id === null)
          _.error
            ? i.error(`Received response message without id: Error is: 
${JSON.stringify(_.error, void 0, 4)}`)
            : i.error(
                "Received response message without id. No further error information provided."
              );
        else {
          let F = _.id,
            U = q.get(F);
          if ((Dn(_, U), U !== void 0)) {
            q.delete(F);
            try {
              if (_.error) {
                let K = _.error;
                U.reject(new Z.ResponseError(K.code, K.message, K.data));
              } else if (_.result !== void 0) U.resolve(_.result);
              else throw new Error("Should never happen.");
            } catch (K) {
              K.message
                ? i.error(
                    `Response handler '${U.method}' failed with message: ${K.message}`
                  )
                : i.error(
                    `Response handler '${U.method}' failed unexpectedly.`
                  );
            }
          }
        }
    }
    function an(_) {
      if (xt()) return;
      let F, U;
      if (_.method === Pi.type.method) {
        let K = _.params.id;
        A.delete(K), Qt(_);
        return;
      } else {
        let K = m.get(_.method);
        K && ((U = K.handler), (F = K.type));
      }
      if (U || v)
        try {
          if ((Qt(_), U))
            if (_.params === void 0)
              F !== void 0 &&
                F.numberOfParams !== 0 &&
                F.parameterStructures !== Z.ParameterStructures.byName &&
                i.error(
                  `Notification ${_.method} defines ${F.numberOfParams} params but received none.`
                ),
                U();
            else if (Array.isArray(_.params)) {
              let K = _.params;
              _.method === Si.type.method && K.length === 2 && Ba.is(K[0])
                ? U({ token: K[0], value: K[1] })
                : (F !== void 0 &&
                    (F.parameterStructures === Z.ParameterStructures.byName &&
                      i.error(
                        `Notification ${_.method} defines parameters by name but received parameters by position`
                      ),
                    F.numberOfParams !== _.params.length &&
                      i.error(
                        `Notification ${_.method} defines ${F.numberOfParams} params but received ${K.length} arguments`
                      )),
                  U(...K));
            } else
              F !== void 0 &&
                F.parameterStructures === Z.ParameterStructures.byPosition &&
                i.error(
                  `Notification ${_.method} defines parameters by position but received parameters by name`
                ),
                U(_.params);
          else v && v(_.method, _.params);
        } catch (K) {
          K.message
            ? i.error(
                `Notification handler '${_.method}' failed with message: ${K.message}`
              )
            : i.error(
                `Notification handler '${_.method}' failed unexpectedly.`
              );
        }
      else We.fire(_);
    }
    function Cn(_) {
      if (!_) {
        i.error("Received empty message.");
        return;
      }
      i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(_, null, 4)}`);
      let F = _;
      if (Ke.string(F.id) || Ke.number(F.id)) {
        let U = F.id,
          K = q.get(U);
        K &&
          K.reject(
            new Error(
              "The received response has neither a result nor an error property."
            )
          );
      }
    }
    function tt(_) {
      if (_ != null)
        switch (E) {
          case Re.Verbose:
            return JSON.stringify(_, null, 4);
          case Re.Compact:
            return JSON.stringify(_);
          default:
            return;
        }
    }
    function On(_) {
      if (!(E === Re.Off || !N))
        if (I === Wt.Text) {
          let F;
          (E === Re.Verbose || E === Re.Compact) &&
            _.params &&
            (F = `Params: ${tt(_.params)}

`),
            N.log(`Sending request '${_.method} - (${_.id})'.`, F);
        } else Ye("send-request", _);
    }
    function cn(_) {
      if (!(E === Re.Off || !N))
        if (I === Wt.Text) {
          let F;
          (E === Re.Verbose || E === Re.Compact) &&
            (_.params
              ? (F = `Params: ${tt(_.params)}

`)
              : (F = `No parameters provided.

`)),
            N.log(`Sending notification '${_.method}'.`, F);
        } else Ye("send-notification", _);
    }
    function Jt(_, F, U) {
      if (!(E === Re.Off || !N))
        if (I === Wt.Text) {
          let K;
          (E === Re.Verbose || E === Re.Compact) &&
            (_.error && _.error.data
              ? (K = `Error data: ${tt(_.error.data)}

`)
              : _.result
              ? (K = `Result: ${tt(_.result)}

`)
              : _.error === void 0 &&
                (K = `No result returned.

`)),
            N.log(
              `Sending response '${F} - (${_.id})'. Processing request took ${
                Date.now() - U
              }ms`,
              K
            );
        } else Ye("send-response", _);
    }
    function Qn(_) {
      if (!(E === Re.Off || !N))
        if (I === Wt.Text) {
          let F;
          (E === Re.Verbose || E === Re.Compact) &&
            _.params &&
            (F = `Params: ${tt(_.params)}

`),
            N.log(`Received request '${_.method} - (${_.id})'.`, F);
        } else Ye("receive-request", _);
    }
    function Qt(_) {
      if (!(E === Re.Off || !N || _.method === gs.type.method))
        if (I === Wt.Text) {
          let F;
          (E === Re.Verbose || E === Re.Compact) &&
            (_.params
              ? (F = `Params: ${tt(_.params)}

`)
              : (F = `No parameters provided.

`)),
            N.log(`Received notification '${_.method}'.`, F);
        } else Ye("receive-notification", _);
    }
    function Dn(_, F) {
      if (!(E === Re.Off || !N))
        if (I === Wt.Text) {
          let U;
          if (
            ((E === Re.Verbose || E === Re.Compact) &&
              (_.error && _.error.data
                ? (U = `Error data: ${tt(_.error.data)}

`)
                : _.result
                ? (U = `Result: ${tt(_.result)}

`)
                : _.error === void 0 &&
                  (U = `No result returned.

`)),
            F)
          ) {
            let K = _.error
              ? ` Request failed: ${_.error.message} (${_.error.code}).`
              : "";
            N.log(
              `Received response '${F.method} - (${_.id})' in ${
                Date.now() - F.timerStart
              }ms.${K}`,
              U
            );
          } else
            N.log(
              `Received response ${_.id} without active response promise.`,
              U
            );
        } else Ye("receive-response", _);
    }
    function Ye(_, F) {
      if (!N || E === Re.Off) return;
      let U = { isLSPMessage: !0, type: _, message: F, timestamp: Date.now() };
      N.log(U);
    }
    function vt() {
      if (Ne()) throw new ir(Ti.Closed, "Connection is closed.");
      if (xt()) throw new ir(Ti.Disposed, "Connection is disposed.");
    }
    function pt() {
      if (vn())
        throw new ir(Ti.AlreadyListening, "Connection is already listening");
    }
    function Ht() {
      if (!vn()) throw new Error("Call listen() first.");
    }
    function Ot(_) {
      return _ === void 0 ? null : _;
    }
    function Rn(_) {
      if (_ !== null) return _;
    }
    function In(_) {
      return _ != null && !Array.isArray(_) && typeof _ == "object";
    }
    function un(_, F) {
      switch (_) {
        case Z.ParameterStructures.auto:
          return In(F) ? Rn(F) : [Ot(F)];
        case Z.ParameterStructures.byName:
          if (!In(F))
            throw new Error(
              "Received parameters by name but param is not an object literal."
            );
          return Rn(F);
        case Z.ParameterStructures.byPosition:
          return [Ot(F)];
        default:
          throw new Error(`Unknown parameter structure ${_.toString()}`);
      }
    }
    function Fn(_, F) {
      let U,
        K = _.numberOfParams;
      switch (K) {
        case 0:
          U = void 0;
          break;
        case 1:
          U = un(_.parameterStructures, F[0]);
          break;
        default:
          U = [];
          for (let ve = 0; ve < F.length && ve < K; ve++) U.push(Ot(F[ve]));
          if (F.length < K) for (let ve = F.length; ve < K; ve++) U.push(null);
          break;
      }
      return U;
    }
    let Pt = {
      sendNotification: (_, ...F) => {
        vt();
        let U, K;
        if (Ke.string(_)) {
          U = _;
          let me = F[0],
            Pe = 0,
            qe = Z.ParameterStructures.auto;
          Z.ParameterStructures.is(me) && ((Pe = 1), (qe = me));
          let ae = F.length,
            we = ae - Pe;
          switch (we) {
            case 0:
              K = void 0;
              break;
            case 1:
              K = un(qe, F[Pe]);
              break;
            default:
              if (qe === Z.ParameterStructures.byName)
                throw new Error(
                  `Received ${we} parameters for 'by Name' notification parameter structure.`
                );
              K = F.slice(Pe, ae).map((fe) => Ot(fe));
              break;
          }
        } else {
          let me = F;
          (U = _.method), (K = Fn(_, me));
        }
        let ve = { jsonrpc: u, method: U, params: K };
        return (
          cn(ve),
          e.write(ve).catch((me) => {
            throw (i.error("Sending notification failed."), me);
          })
        );
      },
      onNotification: (_, F) => {
        vt();
        let U;
        return (
          Ke.func(_)
            ? (v = _)
            : F &&
              (Ke.string(_)
                ? ((U = _), m.set(_, { type: void 0, handler: F }))
                : ((U = _.method), m.set(_.method, { type: _, handler: F }))),
          {
            dispose: () => {
              U !== void 0 ? m.delete(U) : (v = void 0);
            },
          }
        );
      },
      onProgress: (_, F, U) => {
        if (R.has(F))
          throw new Error(`Progress handler for token ${F} already registered`);
        return (
          R.set(F, U),
          {
            dispose: () => {
              R.delete(F);
            },
          }
        );
      },
      sendProgress: (_, F, U) =>
        Pt.sendNotification(Si.type, { token: F, value: U }),
      onUnhandledProgress: Ze.event,
      sendRequest: (_, ...F) => {
        vt(), Ht();
        let U, K, ve;
        if (Ke.string(_)) {
          U = _;
          let ae = F[0],
            we = F[F.length - 1],
            fe = 0,
            xe = Z.ParameterStructures.auto;
          Z.ParameterStructures.is(ae) && ((fe = 1), (xe = ae));
          let Ge = F.length;
          za.CancellationToken.is(we) && ((Ge = Ge - 1), (ve = we));
          let ot = Ge - fe;
          switch (ot) {
            case 0:
              K = void 0;
              break;
            case 1:
              K = un(xe, F[fe]);
              break;
            default:
              if (xe === Z.ParameterStructures.byName)
                throw new Error(
                  `Received ${ot} parameters for 'by Name' request parameter structure.`
                );
              K = F.slice(fe, Ge).map((Yn) => Ot(Yn));
              break;
          }
        } else {
          let ae = F;
          (U = _.method), (K = Fn(_, ae));
          let we = _.numberOfParams;
          ve = za.CancellationToken.is(ae[we]) ? ae[we] : void 0;
        }
        let me = s++,
          Pe;
        ve &&
          (Pe = ve.onCancellationRequested(() => {
            let ae = Y.sender.sendCancellation(Pt, me);
            return ae === void 0
              ? (i.log(
                  `Received no promise from cancellation strategy when cancelling id ${me}`
                ),
                Promise.resolve())
              : ae.catch(() => {
                  i.log(`Sending cancellation messages for id ${me} failed`);
                });
          }));
        let qe = { jsonrpc: u, id: me, method: U, params: K };
        return (
          On(qe),
          typeof Y.sender.enableCancellation == "function" &&
            Y.sender.enableCancellation(qe),
          new Promise(async (ae, we) => {
            let fe = (ot) => {
                ae(ot), Y.sender.cleanup(me), Pe?.dispose();
              },
              xe = (ot) => {
                we(ot), Y.sender.cleanup(me), Pe?.dispose();
              },
              Ge = {
                method: U,
                timerStart: Date.now(),
                resolve: fe,
                reject: xe,
              };
            try {
              await e.write(qe), q.set(me, Ge);
            } catch (ot) {
              throw (
                (i.error("Sending request failed."),
                Ge.reject(
                  new Z.ResponseError(
                    Z.ErrorCodes.MessageWriteError,
                    ot.message ? ot.message : "Unknown reason"
                  )
                ),
                ot)
              );
            }
          })
        );
      },
      onRequest: (_, F) => {
        vt();
        let U = null;
        return (
          Ga.is(_)
            ? ((U = void 0), (h = _))
            : Ke.string(_)
            ? ((U = null),
              F !== void 0 && ((U = _), p.set(_, { handler: F, type: void 0 })))
            : F !== void 0 &&
              ((U = _.method), p.set(_.method, { type: _, handler: F })),
          {
            dispose: () => {
              U !== null && (U !== void 0 ? p.delete(U) : (h = void 0));
            },
          }
        );
      },
      hasPendingResponse: () => q.size > 0,
      trace: async (_, F, U) => {
        let K = !1,
          ve = Wt.Text;
        U !== void 0 &&
          (Ke.boolean(U)
            ? (K = U)
            : ((K = U.sendNotification || !1),
              (ve = U.traceFormat || Wt.Text))),
          (E = _),
          (I = ve),
          E === Re.Off ? (N = void 0) : (N = F),
          K &&
            !Ne() &&
            !xt() &&
            (await Pt.sendNotification(Xa.type, { value: Re.toString(_) }));
      },
      onError: X.event,
      onClose: Te.event,
      onUnhandledNotification: We.event,
      onDispose: et.event,
      end: () => {
        e.end();
      },
      dispose: () => {
        if (xt()) return;
        (Q = dn.Disposed), et.fire(void 0);
        let _ = new Z.ResponseError(
          Z.ErrorCodes.PendingResponseRejected,
          "Pending response rejected since connection got disposed"
        );
        for (let F of q.values()) F.reject(_);
        (q = new Map()),
          (j = new Map()),
          (A = new Set()),
          (P = new ef.LinkedMap()),
          Ke.func(e.dispose) && e.dispose(),
          Ke.func(t.dispose) && t.dispose();
      },
      listen: () => {
        vt(), pt(), (Q = dn.Listening), t.listen(Jn);
      },
      inspect: () => {
        (0, Zd.default)().console.log("inspect");
      },
    };
    return (
      Pt.onNotification(gs.type, (_) => {
        if (E === Re.Off || !N) return;
        let F = E === Re.Verbose || E === Re.Compact;
        N.log(_.message, F ? _.verbose : void 0);
      }),
      Pt.onNotification(Si.type, (_) => {
        let F = R.get(_.token);
        F ? F(_.value) : Ze.fire(_);
      }),
      Pt
    );
  }
  se.createMessageConnection = Wv;
});
var ws = x((O) => {
  "use strict";
  Object.defineProperty(O, "__esModule", { value: !0 });
  O.ProgressType =
    O.ProgressToken =
    O.createMessageConnection =
    O.NullLogger =
    O.ConnectionOptions =
    O.ConnectionStrategy =
    O.AbstractMessageBuffer =
    O.WriteableStreamMessageWriter =
    O.AbstractMessageWriter =
    O.MessageWriter =
    O.ReadableStreamMessageReader =
    O.AbstractMessageReader =
    O.MessageReader =
    O.SharedArrayReceiverStrategy =
    O.SharedArraySenderStrategy =
    O.CancellationToken =
    O.CancellationTokenSource =
    O.Emitter =
    O.Event =
    O.Disposable =
    O.LRUCache =
    O.Touch =
    O.LinkedMap =
    O.ParameterStructures =
    O.NotificationType9 =
    O.NotificationType8 =
    O.NotificationType7 =
    O.NotificationType6 =
    O.NotificationType5 =
    O.NotificationType4 =
    O.NotificationType3 =
    O.NotificationType2 =
    O.NotificationType1 =
    O.NotificationType0 =
    O.NotificationType =
    O.ErrorCodes =
    O.ResponseError =
    O.RequestType9 =
    O.RequestType8 =
    O.RequestType7 =
    O.RequestType6 =
    O.RequestType5 =
    O.RequestType4 =
    O.RequestType3 =
    O.RequestType2 =
    O.RequestType1 =
    O.RequestType0 =
    O.RequestType =
    O.Message =
    O.RAL =
      void 0;
  O.MessageStrategy =
    O.CancellationStrategy =
    O.CancellationSenderStrategy =
    O.CancellationReceiverStrategy =
    O.ConnectionError =
    O.ConnectionErrors =
    O.LogTraceNotification =
    O.SetTraceNotification =
    O.TraceFormat =
    O.TraceValues =
    O.Trace =
      void 0;
  var Le = Da();
  Object.defineProperty(O, "Message", {
    enumerable: !0,
    get: function () {
      return Le.Message;
    },
  });
  Object.defineProperty(O, "RequestType", {
    enumerable: !0,
    get: function () {
      return Le.RequestType;
    },
  });
  Object.defineProperty(O, "RequestType0", {
    enumerable: !0,
    get: function () {
      return Le.RequestType0;
    },
  });
  Object.defineProperty(O, "RequestType1", {
    enumerable: !0,
    get: function () {
      return Le.RequestType1;
    },
  });
  Object.defineProperty(O, "RequestType2", {
    enumerable: !0,
    get: function () {
      return Le.RequestType2;
    },
  });
  Object.defineProperty(O, "RequestType3", {
    enumerable: !0,
    get: function () {
      return Le.RequestType3;
    },
  });
  Object.defineProperty(O, "RequestType4", {
    enumerable: !0,
    get: function () {
      return Le.RequestType4;
    },
  });
  Object.defineProperty(O, "RequestType5", {
    enumerable: !0,
    get: function () {
      return Le.RequestType5;
    },
  });
  Object.defineProperty(O, "RequestType6", {
    enumerable: !0,
    get: function () {
      return Le.RequestType6;
    },
  });
  Object.defineProperty(O, "RequestType7", {
    enumerable: !0,
    get: function () {
      return Le.RequestType7;
    },
  });
  Object.defineProperty(O, "RequestType8", {
    enumerable: !0,
    get: function () {
      return Le.RequestType8;
    },
  });
  Object.defineProperty(O, "RequestType9", {
    enumerable: !0,
    get: function () {
      return Le.RequestType9;
    },
  });
  Object.defineProperty(O, "ResponseError", {
    enumerable: !0,
    get: function () {
      return Le.ResponseError;
    },
  });
  Object.defineProperty(O, "ErrorCodes", {
    enumerable: !0,
    get: function () {
      return Le.ErrorCodes;
    },
  });
  Object.defineProperty(O, "NotificationType", {
    enumerable: !0,
    get: function () {
      return Le.NotificationType;
    },
  });
  Object.defineProperty(O, "NotificationType0", {
    enumerable: !0,
    get: function () {
      return Le.NotificationType0;
    },
  });
  Object.defineProperty(O, "NotificationType1", {
    enumerable: !0,
    get: function () {
      return Le.NotificationType1;
    },
  });
  Object.defineProperty(O, "NotificationType2", {
    enumerable: !0,
    get: function () {
      return Le.NotificationType2;
    },
  });
  Object.defineProperty(O, "NotificationType3", {
    enumerable: !0,
    get: function () {
      return Le.NotificationType3;
    },
  });
  Object.defineProperty(O, "NotificationType4", {
    enumerable: !0,
    get: function () {
      return Le.NotificationType4;
    },
  });
  Object.defineProperty(O, "NotificationType5", {
    enumerable: !0,
    get: function () {
      return Le.NotificationType5;
    },
  });
  Object.defineProperty(O, "NotificationType6", {
    enumerable: !0,
    get: function () {
      return Le.NotificationType6;
    },
  });
  Object.defineProperty(O, "NotificationType7", {
    enumerable: !0,
    get: function () {
      return Le.NotificationType7;
    },
  });
  Object.defineProperty(O, "NotificationType8", {
    enumerable: !0,
    get: function () {
      return Le.NotificationType8;
    },
  });
  Object.defineProperty(O, "NotificationType9", {
    enumerable: !0,
    get: function () {
      return Le.NotificationType9;
    },
  });
  Object.defineProperty(O, "ParameterStructures", {
    enumerable: !0,
    get: function () {
      return Le.ParameterStructures;
    },
  });
  var Ya = Sa();
  Object.defineProperty(O, "LinkedMap", {
    enumerable: !0,
    get: function () {
      return Ya.LinkedMap;
    },
  });
  Object.defineProperty(O, "LRUCache", {
    enumerable: !0,
    get: function () {
      return Ya.LRUCache;
    },
  });
  Object.defineProperty(O, "Touch", {
    enumerable: !0,
    get: function () {
      return Ya.Touch;
    },
  });
  var Kv = Ud();
  Object.defineProperty(O, "Disposable", {
    enumerable: !0,
    get: function () {
      return Kv.Disposable;
    },
  });
  var sf = $r();
  Object.defineProperty(O, "Event", {
    enumerable: !0,
    get: function () {
      return sf.Event;
    },
  });
  Object.defineProperty(O, "Emitter", {
    enumerable: !0,
    get: function () {
      return sf.Emitter;
    },
  });
  var of = ls();
  Object.defineProperty(O, "CancellationTokenSource", {
    enumerable: !0,
    get: function () {
      return of.CancellationTokenSource;
    },
  });
  Object.defineProperty(O, "CancellationToken", {
    enumerable: !0,
    get: function () {
      return of.CancellationToken;
    },
  });
  var af = Kd();
  Object.defineProperty(O, "SharedArraySenderStrategy", {
    enumerable: !0,
    get: function () {
      return af.SharedArraySenderStrategy;
    },
  });
  Object.defineProperty(O, "SharedArrayReceiverStrategy", {
    enumerable: !0,
    get: function () {
      return af.SharedArrayReceiverStrategy;
    },
  });
  var Za = Bd();
  Object.defineProperty(O, "MessageReader", {
    enumerable: !0,
    get: function () {
      return Za.MessageReader;
    },
  });
  Object.defineProperty(O, "AbstractMessageReader", {
    enumerable: !0,
    get: function () {
      return Za.AbstractMessageReader;
    },
  });
  Object.defineProperty(O, "ReadableStreamMessageReader", {
    enumerable: !0,
    get: function () {
      return Za.ReadableStreamMessageReader;
    },
  });
  var ec = Qd();
  Object.defineProperty(O, "MessageWriter", {
    enumerable: !0,
    get: function () {
      return ec.MessageWriter;
    },
  });
  Object.defineProperty(O, "AbstractMessageWriter", {
    enumerable: !0,
    get: function () {
      return ec.AbstractMessageWriter;
    },
  });
  Object.defineProperty(O, "WriteableStreamMessageWriter", {
    enumerable: !0,
    get: function () {
      return ec.WriteableStreamMessageWriter;
    },
  });
  var zv = Yd();
  Object.defineProperty(O, "AbstractMessageBuffer", {
    enumerable: !0,
    get: function () {
      return zv.AbstractMessageBuffer;
    },
  });
  var mt = rf();
  Object.defineProperty(O, "ConnectionStrategy", {
    enumerable: !0,
    get: function () {
      return mt.ConnectionStrategy;
    },
  });
  Object.defineProperty(O, "ConnectionOptions", {
    enumerable: !0,
    get: function () {
      return mt.ConnectionOptions;
    },
  });
  Object.defineProperty(O, "NullLogger", {
    enumerable: !0,
    get: function () {
      return mt.NullLogger;
    },
  });
  Object.defineProperty(O, "createMessageConnection", {
    enumerable: !0,
    get: function () {
      return mt.createMessageConnection;
    },
  });
  Object.defineProperty(O, "ProgressToken", {
    enumerable: !0,
    get: function () {
      return mt.ProgressToken;
    },
  });
  Object.defineProperty(O, "ProgressType", {
    enumerable: !0,
    get: function () {
      return mt.ProgressType;
    },
  });
  Object.defineProperty(O, "Trace", {
    enumerable: !0,
    get: function () {
      return mt.Trace;
    },
  });
  Object.defineProperty(O, "TraceValues", {
    enumerable: !0,
    get: function () {
      return mt.TraceValues;
    },
  });
  Object.defineProperty(O, "TraceFormat", {
    enumerable: !0,
    get: function () {
      return mt.TraceFormat;
    },
  });
  Object.defineProperty(O, "SetTraceNotification", {
    enumerable: !0,
    get: function () {
      return mt.SetTraceNotification;
    },
  });
  Object.defineProperty(O, "LogTraceNotification", {
    enumerable: !0,
    get: function () {
      return mt.LogTraceNotification;
    },
  });
  Object.defineProperty(O, "ConnectionErrors", {
    enumerable: !0,
    get: function () {
      return mt.ConnectionErrors;
    },
  });
  Object.defineProperty(O, "ConnectionError", {
    enumerable: !0,
    get: function () {
      return mt.ConnectionError;
    },
  });
  Object.defineProperty(O, "CancellationReceiverStrategy", {
    enumerable: !0,
    get: function () {
      return mt.CancellationReceiverStrategy;
    },
  });
  Object.defineProperty(O, "CancellationSenderStrategy", {
    enumerable: !0,
    get: function () {
      return mt.CancellationSenderStrategy;
    },
  });
  Object.defineProperty(O, "CancellationStrategy", {
    enumerable: !0,
    get: function () {
      return mt.CancellationStrategy;
    },
  });
  Object.defineProperty(O, "MessageStrategy", {
    enumerable: !0,
    get: function () {
      return mt.MessageStrategy;
    },
  });
  var Bv = tr();
  O.RAL = Bv.default;
});
var lf = x((ic) => {
  "use strict";
  Object.defineProperty(ic, "__esModule", { value: !0 });
  var cf = require("util"),
    Nn = ws(),
    Kr = class extends Nn.AbstractMessageBuffer {
      constructor(e = "utf-8") {
        super(e);
      }
      emptyBuffer() {
        return Kr.emptyBuffer;
      }
      fromString(e, n) {
        return Buffer.from(e, n);
      }
      toString(e, n) {
        return e instanceof Buffer
          ? e.toString(n)
          : new cf.TextDecoder(n).decode(e);
      }
      asNative(e, n) {
        return n === void 0
          ? e instanceof Buffer
            ? e
            : Buffer.from(e)
          : e instanceof Buffer
          ? e.slice(0, n)
          : Buffer.from(e, 0, n);
      }
      allocNative(e) {
        return Buffer.allocUnsafe(e);
      }
    };
  Kr.emptyBuffer = Buffer.allocUnsafe(0);
  var tc = class {
      constructor(e) {
        this.stream = e;
      }
      onClose(e) {
        return (
          this.stream.on("close", e),
          Nn.Disposable.create(() => this.stream.off("close", e))
        );
      }
      onError(e) {
        return (
          this.stream.on("error", e),
          Nn.Disposable.create(() => this.stream.off("error", e))
        );
      }
      onEnd(e) {
        return (
          this.stream.on("end", e),
          Nn.Disposable.create(() => this.stream.off("end", e))
        );
      }
      onData(e) {
        return (
          this.stream.on("data", e),
          Nn.Disposable.create(() => this.stream.off("data", e))
        );
      }
    },
    nc = class {
      constructor(e) {
        this.stream = e;
      }
      onClose(e) {
        return (
          this.stream.on("close", e),
          Nn.Disposable.create(() => this.stream.off("close", e))
        );
      }
      onError(e) {
        return (
          this.stream.on("error", e),
          Nn.Disposable.create(() => this.stream.off("error", e))
        );
      }
      onEnd(e) {
        return (
          this.stream.on("end", e),
          Nn.Disposable.create(() => this.stream.off("end", e))
        );
      }
      write(e, n) {
        return new Promise((r, i) => {
          let s = (o) => {
            o == null ? r() : i(o);
          };
          typeof e == "string"
            ? this.stream.write(e, n, s)
            : this.stream.write(e, s);
        });
      }
      end() {
        this.stream.end();
      }
    },
    uf = Object.freeze({
      messageBuffer: Object.freeze({ create: (t) => new Kr(t) }),
      applicationJson: Object.freeze({
        encoder: Object.freeze({
          name: "application/json",
          encode: (t, e) => {
            try {
              return Promise.resolve(
                Buffer.from(JSON.stringify(t, void 0, 0), e.charset)
              );
            } catch (n) {
              return Promise.reject(n);
            }
          },
        }),
        decoder: Object.freeze({
          name: "application/json",
          decode: (t, e) => {
            try {
              return t instanceof Buffer
                ? Promise.resolve(JSON.parse(t.toString(e.charset)))
                : Promise.resolve(
                    JSON.parse(new cf.TextDecoder(e.charset).decode(t))
                  );
            } catch (n) {
              return Promise.reject(n);
            }
          },
        }),
      }),
      stream: Object.freeze({
        asReadableStream: (t) => new tc(t),
        asWritableStream: (t) => new nc(t),
      }),
      console,
      timer: Object.freeze({
        setTimeout(t, e, ...n) {
          let r = setTimeout(t, e, ...n);
          return { dispose: () => clearTimeout(r) };
        },
        setImmediate(t, ...e) {
          let n = setImmediate(t, ...e);
          return { dispose: () => clearImmediate(n) };
        },
        setInterval(t, e, ...n) {
          let r = setInterval(t, e, ...n);
          return { dispose: () => clearInterval(r) };
        },
      }),
    });
  function rc() {
    return uf;
  }
  (function (t) {
    function e() {
      Nn.RAL.install(uf);
    }
    t.install = e;
  })(rc || (rc = {}));
  ic.default = rc;
});
var _r = x((ge) => {
  "use strict";
  var Vv =
      (ge && ge.__createBinding) ||
      (Object.create
        ? function (t, e, n, r) {
            r === void 0 && (r = n);
            var i = Object.getOwnPropertyDescriptor(e, n);
            (!i ||
              ("get" in i ? !e.__esModule : i.writable || i.configurable)) &&
              (i = {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              }),
              Object.defineProperty(t, r, i);
          }
        : function (t, e, n, r) {
            r === void 0 && (r = n), (t[r] = e[n]);
          }),
    Gv =
      (ge && ge.__exportStar) ||
      function (t, e) {
        for (var n in t)
          n !== "default" &&
            !Object.prototype.hasOwnProperty.call(e, n) &&
            Vv(e, t, n);
      };
  Object.defineProperty(ge, "__esModule", { value: !0 });
  ge.createMessageConnection =
    ge.createServerSocketTransport =
    ge.createClientSocketTransport =
    ge.createServerPipeTransport =
    ge.createClientPipeTransport =
    ge.generateRandomPipeName =
    ge.StreamMessageWriter =
    ge.StreamMessageReader =
    ge.SocketMessageWriter =
    ge.SocketMessageReader =
    ge.PortMessageWriter =
    ge.PortMessageReader =
    ge.IPCMessageWriter =
    ge.IPCMessageReader =
      void 0;
  var zr = lf();
  zr.default.install();
  var df = require("path"),
    Xv = require("os"),
    Jv = require("crypto"),
    Rs = require("net"),
    Kt = ws();
  Gv(ws(), ge);
  var sc = class extends Kt.AbstractMessageReader {
    constructor(e) {
      super(), (this.process = e);
      let n = this.process;
      n.on("error", (r) => this.fireError(r)),
        n.on("close", () => this.fireClose());
    }
    listen(e) {
      return (
        this.process.on("message", e),
        Kt.Disposable.create(() => this.process.off("message", e))
      );
    }
  };
  ge.IPCMessageReader = sc;
  var oc = class extends Kt.AbstractMessageWriter {
    constructor(e) {
      super(), (this.process = e), (this.errorCount = 0);
      let n = this.process;
      n.on("error", (r) => this.fireError(r)),
        n.on("close", () => this.fireClose);
    }
    write(e) {
      try {
        return (
          typeof this.process.send == "function" &&
            this.process.send(e, void 0, void 0, (n) => {
              n
                ? (this.errorCount++, this.handleError(n, e))
                : (this.errorCount = 0);
            }),
          Promise.resolve()
        );
      } catch (n) {
        return this.handleError(n, e), Promise.reject(n);
      }
    }
    handleError(e, n) {
      this.errorCount++, this.fireError(e, n, this.errorCount);
    }
    end() {}
  };
  ge.IPCMessageWriter = oc;
  var ac = class extends Kt.AbstractMessageReader {
    constructor(e) {
      super(),
        (this.onData = new Kt.Emitter()),
        e.on("close", () => this.fireClose),
        e.on("error", (n) => this.fireError(n)),
        e.on("message", (n) => {
          this.onData.fire(n);
        });
    }
    listen(e) {
      return this.onData.event(e);
    }
  };
  ge.PortMessageReader = ac;
  var cc = class extends Kt.AbstractMessageWriter {
    constructor(e) {
      super(),
        (this.port = e),
        (this.errorCount = 0),
        e.on("close", () => this.fireClose()),
        e.on("error", (n) => this.fireError(n));
    }
    write(e) {
      try {
        return this.port.postMessage(e), Promise.resolve();
      } catch (n) {
        return this.handleError(n, e), Promise.reject(n);
      }
    }
    handleError(e, n) {
      this.errorCount++, this.fireError(e, n, this.errorCount);
    }
    end() {}
  };
  ge.PortMessageWriter = cc;
  var vr = class extends Kt.ReadableStreamMessageReader {
    constructor(e, n = "utf-8") {
      super((0, zr.default)().stream.asReadableStream(e), n);
    }
  };
  ge.SocketMessageReader = vr;
  var br = class extends Kt.WriteableStreamMessageWriter {
    constructor(e, n) {
      super((0, zr.default)().stream.asWritableStream(e), n), (this.socket = e);
    }
    dispose() {
      super.dispose(), this.socket.destroy();
    }
  };
  ge.SocketMessageWriter = br;
  var Cs = class extends Kt.ReadableStreamMessageReader {
    constructor(e, n) {
      super((0, zr.default)().stream.asReadableStream(e), n);
    }
  };
  ge.StreamMessageReader = Cs;
  var Ds = class extends Kt.WriteableStreamMessageWriter {
    constructor(e, n) {
      super((0, zr.default)().stream.asWritableStream(e), n);
    }
  };
  ge.StreamMessageWriter = Ds;
  var ff = process.env.XDG_RUNTIME_DIR,
    Qv = new Map([
      ["linux", 107],
      ["darwin", 103],
    ]);
  function Yv() {
    let t = (0, Jv.randomBytes)(21).toString("hex");
    if (process.platform === "win32")
      return `\\\\.\\pipe\\vscode-jsonrpc-${t}-sock`;
    let e;
    ff
      ? (e = df.join(ff, `vscode-ipc-${t}.sock`))
      : (e = df.join(Xv.tmpdir(), `vscode-${t}.sock`));
    let n = Qv.get(process.platform);
    return (
      n !== void 0 &&
        e.length > n &&
        (0, zr.default)().console.warn(
          `WARNING: IPC handle "${e}" is longer than ${n} characters.`
        ),
      e
    );
  }
  ge.generateRandomPipeName = Yv;
  function Zv(t, e = "utf-8") {
    let n,
      r = new Promise((i, s) => {
        n = i;
      });
    return new Promise((i, s) => {
      let o = (0, Rs.createServer)((a) => {
        o.close(), n([new vr(a, e), new br(a, e)]);
      });
      o.on("error", s),
        o.listen(t, () => {
          o.removeListener("error", s), i({ onConnected: () => r });
        });
    });
  }
  ge.createClientPipeTransport = Zv;
  function eb(t, e = "utf-8") {
    let n = (0, Rs.createConnection)(t);
    return [new vr(n, e), new br(n, e)];
  }
  ge.createServerPipeTransport = eb;
  function tb(t, e = "utf-8") {
    let n,
      r = new Promise((i, s) => {
        n = i;
      });
    return new Promise((i, s) => {
      let o = (0, Rs.createServer)((a) => {
        o.close(), n([new vr(a, e), new br(a, e)]);
      });
      o.on("error", s),
        o.listen(t, "127.0.0.1", () => {
          o.removeListener("error", s), i({ onConnected: () => r });
        });
    });
  }
  ge.createClientSocketTransport = tb;
  function nb(t, e = "utf-8") {
    let n = (0, Rs.createConnection)(t, "127.0.0.1");
    return [new vr(n, e), new br(n, e)];
  }
  ge.createServerSocketTransport = nb;
  function rb(t) {
    let e = t;
    return e.read !== void 0 && e.addListener !== void 0;
  }
  function ib(t) {
    let e = t;
    return e.write !== void 0 && e.addListener !== void 0;
  }
  function sb(t, e, n, r) {
    n || (n = Kt.NullLogger);
    let i = rb(t) ? new Cs(t) : t,
      s = ib(e) ? new Ds(e) : e;
    return (
      Kt.ConnectionStrategy.is(r) && (r = { connectionStrategy: r }),
      (0, Kt.createMessageConnection)(i, s, n, r)
    );
  }
  ge.createMessageConnection = sb;
});
var uc = x((ZD, hf) => {
  "use strict";
  hf.exports = _r();
});
var Ts = x((pf, Ss) => {
  (function (t) {
    if (typeof Ss == "object" && typeof Ss.exports == "object") {
      var e = t(require, pf);
      e !== void 0 && (Ss.exports = e);
    } else
      typeof define == "function" &&
        define.amd &&
        define(["require", "exports"], t);
  })(function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.TextDocument =
        e.EOL =
        e.WorkspaceFolder =
        e.InlineCompletionContext =
        e.SelectedCompletionInfo =
        e.InlineCompletionTriggerKind =
        e.InlineCompletionList =
        e.InlineCompletionItem =
        e.StringValue =
        e.InlayHint =
        e.InlayHintLabelPart =
        e.InlayHintKind =
        e.InlineValueContext =
        e.InlineValueEvaluatableExpression =
        e.InlineValueVariableLookup =
        e.InlineValueText =
        e.SemanticTokens =
        e.SemanticTokenModifiers =
        e.SemanticTokenTypes =
        e.SelectionRange =
        e.DocumentLink =
        e.FormattingOptions =
        e.CodeLens =
        e.CodeAction =
        e.CodeActionContext =
        e.CodeActionTriggerKind =
        e.CodeActionKind =
        e.DocumentSymbol =
        e.WorkspaceSymbol =
        e.SymbolInformation =
        e.SymbolTag =
        e.SymbolKind =
        e.DocumentHighlight =
        e.DocumentHighlightKind =
        e.SignatureInformation =
        e.ParameterInformation =
        e.Hover =
        e.MarkedString =
        e.CompletionList =
        e.CompletionItem =
        e.CompletionItemLabelDetails =
        e.InsertTextMode =
        e.InsertReplaceEdit =
        e.CompletionItemTag =
        e.InsertTextFormat =
        e.CompletionItemKind =
        e.MarkupContent =
        e.MarkupKind =
        e.TextDocumentItem =
        e.OptionalVersionedTextDocumentIdentifier =
        e.VersionedTextDocumentIdentifier =
        e.TextDocumentIdentifier =
        e.WorkspaceChange =
        e.WorkspaceEdit =
        e.DeleteFile =
        e.RenameFile =
        e.CreateFile =
        e.TextDocumentEdit =
        e.AnnotatedTextEdit =
        e.ChangeAnnotationIdentifier =
        e.ChangeAnnotation =
        e.TextEdit =
        e.Command =
        e.Diagnostic =
        e.CodeDescription =
        e.DiagnosticTag =
        e.DiagnosticSeverity =
        e.DiagnosticRelatedInformation =
        e.FoldingRange =
        e.FoldingRangeKind =
        e.ColorPresentation =
        e.ColorInformation =
        e.Color =
        e.LocationLink =
        e.Location =
        e.Range =
        e.Position =
        e.uinteger =
        e.integer =
        e.URI =
        e.DocumentUri =
          void 0);
    var n;
    (function (f) {
      function w(C) {
        return typeof C == "string";
      }
      f.is = w;
    })(n || (e.DocumentUri = n = {}));
    var r;
    (function (f) {
      function w(C) {
        return typeof C == "string";
      }
      f.is = w;
    })(r || (e.URI = r = {}));
    var i;
    (function (f) {
      (f.MIN_VALUE = -2147483648), (f.MAX_VALUE = 2147483647);
      function w(C) {
        return typeof C == "number" && f.MIN_VALUE <= C && C <= f.MAX_VALUE;
      }
      f.is = w;
    })(i || (e.integer = i = {}));
    var s;
    (function (f) {
      (f.MIN_VALUE = 0), (f.MAX_VALUE = 2147483647);
      function w(C) {
        return typeof C == "number" && f.MIN_VALUE <= C && C <= f.MAX_VALUE;
      }
      f.is = w;
    })(s || (e.uinteger = s = {}));
    var o;
    (function (f) {
      function w(g, l) {
        return (
          g === Number.MAX_VALUE && (g = s.MAX_VALUE),
          l === Number.MAX_VALUE && (l = s.MAX_VALUE),
          { line: g, character: l }
        );
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.objectLiteral(l) && S.uinteger(l.line) && S.uinteger(l.character)
        );
      }
      f.is = C;
    })(o || (e.Position = o = {}));
    var a;
    (function (f) {
      function w(g, l, T, L) {
        if (S.uinteger(g) && S.uinteger(l) && S.uinteger(T) && S.uinteger(L))
          return { start: o.create(g, l), end: o.create(T, L) };
        if (o.is(g) && o.is(l)) return { start: g, end: l };
        throw new Error(
          "Range#create called with invalid arguments["
            .concat(g, ", ")
            .concat(l, ", ")
            .concat(T, ", ")
            .concat(L, "]")
        );
      }
      f.create = w;
      function C(g) {
        var l = g;
        return S.objectLiteral(l) && o.is(l.start) && o.is(l.end);
      }
      f.is = C;
    })(a || (e.Range = a = {}));
    var u;
    (function (f) {
      function w(g, l) {
        return { uri: g, range: l };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.objectLiteral(l) &&
          a.is(l.range) &&
          (S.string(l.uri) || S.undefined(l.uri))
        );
      }
      f.is = C;
    })(u || (e.Location = u = {}));
    var h;
    (function (f) {
      function w(g, l, T, L) {
        return {
          targetUri: g,
          targetRange: l,
          targetSelectionRange: T,
          originSelectionRange: L,
        };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.objectLiteral(l) &&
          a.is(l.targetRange) &&
          S.string(l.targetUri) &&
          a.is(l.targetSelectionRange) &&
          (a.is(l.originSelectionRange) || S.undefined(l.originSelectionRange))
        );
      }
      f.is = C;
    })(h || (e.LocationLink = h = {}));
    var p;
    (function (f) {
      function w(g, l, T, L) {
        return { red: g, green: l, blue: T, alpha: L };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.objectLiteral(l) &&
          S.numberRange(l.red, 0, 1) &&
          S.numberRange(l.green, 0, 1) &&
          S.numberRange(l.blue, 0, 1) &&
          S.numberRange(l.alpha, 0, 1)
        );
      }
      f.is = C;
    })(p || (e.Color = p = {}));
    var v;
    (function (f) {
      function w(g, l) {
        return { range: g, color: l };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return S.objectLiteral(l) && a.is(l.range) && p.is(l.color);
      }
      f.is = C;
    })(v || (e.ColorInformation = v = {}));
    var m;
    (function (f) {
      function w(g, l, T) {
        return { label: g, textEdit: l, additionalTextEdits: T };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.objectLiteral(l) &&
          S.string(l.label) &&
          (S.undefined(l.textEdit) || N.is(l)) &&
          (S.undefined(l.additionalTextEdits) ||
            S.typedArray(l.additionalTextEdits, N.is))
        );
      }
      f.is = C;
    })(m || (e.ColorPresentation = m = {}));
    var R;
    (function (f) {
      (f.Comment = "comment"), (f.Imports = "imports"), (f.Region = "region");
    })(R || (e.FoldingRangeKind = R = {}));
    var y;
    (function (f) {
      function w(g, l, T, L, ne, je) {
        var Oe = { startLine: g, endLine: l };
        return (
          S.defined(T) && (Oe.startCharacter = T),
          S.defined(L) && (Oe.endCharacter = L),
          S.defined(ne) && (Oe.kind = ne),
          S.defined(je) && (Oe.collapsedText = je),
          Oe
        );
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.objectLiteral(l) &&
          S.uinteger(l.startLine) &&
          S.uinteger(l.startLine) &&
          (S.undefined(l.startCharacter) || S.uinteger(l.startCharacter)) &&
          (S.undefined(l.endCharacter) || S.uinteger(l.endCharacter)) &&
          (S.undefined(l.kind) || S.string(l.kind))
        );
      }
      f.is = C;
    })(y || (e.FoldingRange = y = {}));
    var P;
    (function (f) {
      function w(g, l) {
        return { location: g, message: l };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return S.defined(l) && u.is(l.location) && S.string(l.message);
      }
      f.is = C;
    })(P || (e.DiagnosticRelatedInformation = P = {}));
    var q;
    (function (f) {
      (f.Error = 1), (f.Warning = 2), (f.Information = 3), (f.Hint = 4);
    })(q || (e.DiagnosticSeverity = q = {}));
    var A;
    (function (f) {
      (f.Unnecessary = 1), (f.Deprecated = 2);
    })(A || (e.DiagnosticTag = A = {}));
    var j;
    (function (f) {
      function w(C) {
        var g = C;
        return S.objectLiteral(g) && S.string(g.href);
      }
      f.is = w;
    })(j || (e.CodeDescription = j = {}));
    var E;
    (function (f) {
      function w(g, l, T, L, ne, je) {
        var Oe = { range: g, message: l };
        return (
          S.defined(T) && (Oe.severity = T),
          S.defined(L) && (Oe.code = L),
          S.defined(ne) && (Oe.source = ne),
          S.defined(je) && (Oe.relatedInformation = je),
          Oe
        );
      }
      f.create = w;
      function C(g) {
        var l,
          T = g;
        return (
          S.defined(T) &&
          a.is(T.range) &&
          S.string(T.message) &&
          (S.number(T.severity) || S.undefined(T.severity)) &&
          (S.integer(T.code) || S.string(T.code) || S.undefined(T.code)) &&
          (S.undefined(T.codeDescription) ||
            S.string(
              (l = T.codeDescription) === null || l === void 0 ? void 0 : l.href
            )) &&
          (S.string(T.source) || S.undefined(T.source)) &&
          (S.undefined(T.relatedInformation) ||
            S.typedArray(T.relatedInformation, P.is))
        );
      }
      f.is = C;
    })(E || (e.Diagnostic = E = {}));
    var I;
    (function (f) {
      function w(g, l) {
        for (var T = [], L = 2; L < arguments.length; L++)
          T[L - 2] = arguments[L];
        var ne = { title: g, command: l };
        return S.defined(T) && T.length > 0 && (ne.arguments = T), ne;
      }
      f.create = w;
      function C(g) {
        var l = g;
        return S.defined(l) && S.string(l.title) && S.string(l.command);
      }
      f.is = C;
    })(I || (e.Command = I = {}));
    var N;
    (function (f) {
      function w(T, L) {
        return { range: T, newText: L };
      }
      f.replace = w;
      function C(T, L) {
        return { range: { start: T, end: T }, newText: L };
      }
      f.insert = C;
      function g(T) {
        return { range: T, newText: "" };
      }
      f.del = g;
      function l(T) {
        var L = T;
        return S.objectLiteral(L) && S.string(L.newText) && a.is(L.range);
      }
      f.is = l;
    })(N || (e.TextEdit = N = {}));
    var Q;
    (function (f) {
      function w(g, l, T) {
        var L = { label: g };
        return (
          l !== void 0 && (L.needsConfirmation = l),
          T !== void 0 && (L.description = T),
          L
        );
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.objectLiteral(l) &&
          S.string(l.label) &&
          (S.boolean(l.needsConfirmation) || l.needsConfirmation === void 0) &&
          (S.string(l.description) || l.description === void 0)
        );
      }
      f.is = C;
    })(Q || (e.ChangeAnnotation = Q = {}));
    var X;
    (function (f) {
      function w(C) {
        var g = C;
        return S.string(g);
      }
      f.is = w;
    })(X || (e.ChangeAnnotationIdentifier = X = {}));
    var Te;
    (function (f) {
      function w(T, L, ne) {
        return { range: T, newText: L, annotationId: ne };
      }
      f.replace = w;
      function C(T, L, ne) {
        return { range: { start: T, end: T }, newText: L, annotationId: ne };
      }
      f.insert = C;
      function g(T, L) {
        return { range: T, newText: "", annotationId: L };
      }
      f.del = g;
      function l(T) {
        var L = T;
        return N.is(L) && (Q.is(L.annotationId) || X.is(L.annotationId));
      }
      f.is = l;
    })(Te || (e.AnnotatedTextEdit = Te = {}));
    var We;
    (function (f) {
      function w(g, l) {
        return { textDocument: g, edits: l };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return S.defined(l) && Ne.is(l.textDocument) && Array.isArray(l.edits);
      }
      f.is = C;
    })(We || (e.TextDocumentEdit = We = {}));
    var Ze;
    (function (f) {
      function w(g, l, T) {
        var L = { kind: "create", uri: g };
        return (
          l !== void 0 &&
            (l.overwrite !== void 0 || l.ignoreIfExists !== void 0) &&
            (L.options = l),
          T !== void 0 && (L.annotationId = T),
          L
        );
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          l &&
          l.kind === "create" &&
          S.string(l.uri) &&
          (l.options === void 0 ||
            ((l.options.overwrite === void 0 ||
              S.boolean(l.options.overwrite)) &&
              (l.options.ignoreIfExists === void 0 ||
                S.boolean(l.options.ignoreIfExists)))) &&
          (l.annotationId === void 0 || X.is(l.annotationId))
        );
      }
      f.is = C;
    })(Ze || (e.CreateFile = Ze = {}));
    var et;
    (function (f) {
      function w(g, l, T, L) {
        var ne = { kind: "rename", oldUri: g, newUri: l };
        return (
          T !== void 0 &&
            (T.overwrite !== void 0 || T.ignoreIfExists !== void 0) &&
            (ne.options = T),
          L !== void 0 && (ne.annotationId = L),
          ne
        );
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          l &&
          l.kind === "rename" &&
          S.string(l.oldUri) &&
          S.string(l.newUri) &&
          (l.options === void 0 ||
            ((l.options.overwrite === void 0 ||
              S.boolean(l.options.overwrite)) &&
              (l.options.ignoreIfExists === void 0 ||
                S.boolean(l.options.ignoreIfExists)))) &&
          (l.annotationId === void 0 || X.is(l.annotationId))
        );
      }
      f.is = C;
    })(et || (e.RenameFile = et = {}));
    var Y;
    (function (f) {
      function w(g, l, T) {
        var L = { kind: "delete", uri: g };
        return (
          l !== void 0 &&
            (l.recursive !== void 0 || l.ignoreIfNotExists !== void 0) &&
            (L.options = l),
          T !== void 0 && (L.annotationId = T),
          L
        );
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          l &&
          l.kind === "delete" &&
          S.string(l.uri) &&
          (l.options === void 0 ||
            ((l.options.recursive === void 0 ||
              S.boolean(l.options.recursive)) &&
              (l.options.ignoreIfNotExists === void 0 ||
                S.boolean(l.options.ignoreIfNotExists)))) &&
          (l.annotationId === void 0 || X.is(l.annotationId))
        );
      }
      f.is = C;
    })(Y || (e.DeleteFile = Y = {}));
    var _e;
    (function (f) {
      function w(C) {
        var g = C;
        return (
          g &&
          (g.changes !== void 0 || g.documentChanges !== void 0) &&
          (g.documentChanges === void 0 ||
            g.documentChanges.every(function (l) {
              return S.string(l.kind)
                ? Ze.is(l) || et.is(l) || Y.is(l)
                : We.is(l);
            }))
        );
      }
      f.is = w;
    })(_e || (e.WorkspaceEdit = _e = {}));
    var yt = (function () {
        function f(w, C) {
          (this.edits = w), (this.changeAnnotations = C);
        }
        return (
          (f.prototype.insert = function (w, C, g) {
            var l, T;
            if (
              (g === void 0
                ? (l = N.insert(w, C))
                : X.is(g)
                ? ((T = g), (l = Te.insert(w, C, g)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (T = this.changeAnnotations.manage(g)),
                  (l = Te.insert(w, C, T))),
              this.edits.push(l),
              T !== void 0)
            )
              return T;
          }),
          (f.prototype.replace = function (w, C, g) {
            var l, T;
            if (
              (g === void 0
                ? (l = N.replace(w, C))
                : X.is(g)
                ? ((T = g), (l = Te.replace(w, C, g)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (T = this.changeAnnotations.manage(g)),
                  (l = Te.replace(w, C, T))),
              this.edits.push(l),
              T !== void 0)
            )
              return T;
          }),
          (f.prototype.delete = function (w, C) {
            var g, l;
            if (
              (C === void 0
                ? (g = N.del(w))
                : X.is(C)
                ? ((l = C), (g = Te.del(w, C)))
                : (this.assertChangeAnnotations(this.changeAnnotations),
                  (l = this.changeAnnotations.manage(C)),
                  (g = Te.del(w, l))),
              this.edits.push(g),
              l !== void 0)
            )
              return l;
          }),
          (f.prototype.add = function (w) {
            this.edits.push(w);
          }),
          (f.prototype.all = function () {
            return this.edits;
          }),
          (f.prototype.clear = function () {
            this.edits.splice(0, this.edits.length);
          }),
          (f.prototype.assertChangeAnnotations = function (w) {
            if (w === void 0)
              throw new Error(
                "Text edit change is not configured to manage change annotations."
              );
          }),
          f
        );
      })(),
      st = (function () {
        function f(w) {
          (this._annotations = w === void 0 ? Object.create(null) : w),
            (this._counter = 0),
            (this._size = 0);
        }
        return (
          (f.prototype.all = function () {
            return this._annotations;
          }),
          Object.defineProperty(f.prototype, "size", {
            get: function () {
              return this._size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (f.prototype.manage = function (w, C) {
            var g;
            if (
              (X.is(w) ? (g = w) : ((g = this.nextId()), (C = w)),
              this._annotations[g] !== void 0)
            )
              throw new Error("Id ".concat(g, " is already in use."));
            if (C === void 0)
              throw new Error("No annotation provided for id ".concat(g));
            return (this._annotations[g] = C), this._size++, g;
          }),
          (f.prototype.nextId = function () {
            return this._counter++, this._counter.toString();
          }),
          f
        );
      })(),
      St = (function () {
        function f(w) {
          var C = this;
          (this._textEditChanges = Object.create(null)),
            w !== void 0
              ? ((this._workspaceEdit = w),
                w.documentChanges
                  ? ((this._changeAnnotations = new st(w.changeAnnotations)),
                    (w.changeAnnotations = this._changeAnnotations.all()),
                    w.documentChanges.forEach(function (g) {
                      if (We.is(g)) {
                        var l = new yt(g.edits, C._changeAnnotations);
                        C._textEditChanges[g.textDocument.uri] = l;
                      }
                    }))
                  : w.changes &&
                    Object.keys(w.changes).forEach(function (g) {
                      var l = new yt(w.changes[g]);
                      C._textEditChanges[g] = l;
                    }))
              : (this._workspaceEdit = {});
        }
        return (
          Object.defineProperty(f.prototype, "edit", {
            get: function () {
              return (
                this.initDocumentChanges(),
                this._changeAnnotations !== void 0 &&
                  (this._changeAnnotations.size === 0
                    ? (this._workspaceEdit.changeAnnotations = void 0)
                    : (this._workspaceEdit.changeAnnotations =
                        this._changeAnnotations.all())),
                this._workspaceEdit
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (f.prototype.getTextEditChange = function (w) {
            if (Ne.is(w)) {
              if (
                (this.initDocumentChanges(),
                this._workspaceEdit.documentChanges === void 0)
              )
                throw new Error(
                  "Workspace edit is not configured for document changes."
                );
              var C = { uri: w.uri, version: w.version },
                g = this._textEditChanges[C.uri];
              if (!g) {
                var l = [],
                  T = { textDocument: C, edits: l };
                this._workspaceEdit.documentChanges.push(T),
                  (g = new yt(l, this._changeAnnotations)),
                  (this._textEditChanges[C.uri] = g);
              }
              return g;
            } else {
              if ((this.initChanges(), this._workspaceEdit.changes === void 0))
                throw new Error(
                  "Workspace edit is not configured for normal text edit changes."
                );
              var g = this._textEditChanges[w];
              if (!g) {
                var l = [];
                (this._workspaceEdit.changes[w] = l),
                  (g = new yt(l)),
                  (this._textEditChanges[w] = g);
              }
              return g;
            }
          }),
          (f.prototype.initDocumentChanges = function () {
            this._workspaceEdit.documentChanges === void 0 &&
              this._workspaceEdit.changes === void 0 &&
              ((this._changeAnnotations = new st()),
              (this._workspaceEdit.documentChanges = []),
              (this._workspaceEdit.changeAnnotations =
                this._changeAnnotations.all()));
          }),
          (f.prototype.initChanges = function () {
            this._workspaceEdit.documentChanges === void 0 &&
              this._workspaceEdit.changes === void 0 &&
              (this._workspaceEdit.changes = Object.create(null));
          }),
          (f.prototype.createFile = function (w, C, g) {
            if (
              (this.initDocumentChanges(),
              this._workspaceEdit.documentChanges === void 0)
            )
              throw new Error(
                "Workspace edit is not configured for document changes."
              );
            var l;
            Q.is(C) || X.is(C) ? (l = C) : (g = C);
            var T, L;
            if (
              (l === void 0
                ? (T = Ze.create(w, g))
                : ((L = X.is(l) ? l : this._changeAnnotations.manage(l)),
                  (T = Ze.create(w, g, L))),
              this._workspaceEdit.documentChanges.push(T),
              L !== void 0)
            )
              return L;
          }),
          (f.prototype.renameFile = function (w, C, g, l) {
            if (
              (this.initDocumentChanges(),
              this._workspaceEdit.documentChanges === void 0)
            )
              throw new Error(
                "Workspace edit is not configured for document changes."
              );
            var T;
            Q.is(g) || X.is(g) ? (T = g) : (l = g);
            var L, ne;
            if (
              (T === void 0
                ? (L = et.create(w, C, l))
                : ((ne = X.is(T) ? T : this._changeAnnotations.manage(T)),
                  (L = et.create(w, C, l, ne))),
              this._workspaceEdit.documentChanges.push(L),
              ne !== void 0)
            )
              return ne;
          }),
          (f.prototype.deleteFile = function (w, C, g) {
            if (
              (this.initDocumentChanges(),
              this._workspaceEdit.documentChanges === void 0)
            )
              throw new Error(
                "Workspace edit is not configured for document changes."
              );
            var l;
            Q.is(C) || X.is(C) ? (l = C) : (g = C);
            var T, L;
            if (
              (l === void 0
                ? (T = Y.create(w, g))
                : ((L = X.is(l) ? l : this._changeAnnotations.manage(l)),
                  (T = Y.create(w, g, L))),
              this._workspaceEdit.documentChanges.push(T),
              L !== void 0)
            )
              return L;
          }),
          f
        );
      })();
    e.WorkspaceChange = St;
    var Gn;
    (function (f) {
      function w(g) {
        return { uri: g };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return S.defined(l) && S.string(l.uri);
      }
      f.is = C;
    })(Gn || (e.TextDocumentIdentifier = Gn = {}));
    var vn;
    (function (f) {
      function w(g, l) {
        return { uri: g, version: l };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return S.defined(l) && S.string(l.uri) && S.integer(l.version);
      }
      f.is = C;
    })(vn || (e.VersionedTextDocumentIdentifier = vn = {}));
    var Ne;
    (function (f) {
      function w(g, l) {
        return { uri: g, version: l };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.defined(l) &&
          S.string(l.uri) &&
          (l.version === null || S.integer(l.version))
        );
      }
      f.is = C;
    })(Ne || (e.OptionalVersionedTextDocumentIdentifier = Ne = {}));
    var xt;
    (function (f) {
      function w(g, l, T, L) {
        return { uri: g, languageId: l, version: T, text: L };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.defined(l) &&
          S.string(l.uri) &&
          S.string(l.languageId) &&
          S.integer(l.version) &&
          S.string(l.text)
        );
      }
      f.is = C;
    })(xt || (e.TextDocumentItem = xt = {}));
    var Tt;
    (function (f) {
      (f.PlainText = "plaintext"), (f.Markdown = "markdown");
      function w(C) {
        var g = C;
        return g === f.PlainText || g === f.Markdown;
      }
      f.is = w;
    })(Tt || (e.MarkupKind = Tt = {}));
    var ht;
    (function (f) {
      function w(C) {
        var g = C;
        return S.objectLiteral(C) && Tt.is(g.kind) && S.string(g.value);
      }
      f.is = w;
    })(ht || (e.MarkupContent = ht = {}));
    var Xn;
    (function (f) {
      (f.Text = 1),
        (f.Method = 2),
        (f.Function = 3),
        (f.Constructor = 4),
        (f.Field = 5),
        (f.Variable = 6),
        (f.Class = 7),
        (f.Interface = 8),
        (f.Module = 9),
        (f.Property = 10),
        (f.Unit = 11),
        (f.Value = 12),
        (f.Enum = 13),
        (f.Keyword = 14),
        (f.Snippet = 15),
        (f.Color = 16),
        (f.File = 17),
        (f.Reference = 18),
        (f.Folder = 19),
        (f.EnumMember = 20),
        (f.Constant = 21),
        (f.Struct = 22),
        (f.Event = 23),
        (f.Operator = 24),
        (f.TypeParameter = 25);
    })(Xn || (e.CompletionItemKind = Xn = {}));
    var bn;
    (function (f) {
      (f.PlainText = 1), (f.Snippet = 2);
    })(bn || (e.InsertTextFormat = bn = {}));
    var _n;
    (function (f) {
      f.Deprecated = 1;
    })(_n || (e.CompletionItemTag = _n = {}));
    var xn;
    (function (f) {
      function w(g, l, T) {
        return { newText: g, insert: l, replace: T };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return l && S.string(l.newText) && a.is(l.insert) && a.is(l.replace);
      }
      f.is = C;
    })(xn || (e.InsertReplaceEdit = xn = {}));
    var Jn;
    (function (f) {
      (f.asIs = 1), (f.adjustIndentation = 2);
    })(Jn || (e.InsertTextMode = Jn = {}));
    var wn;
    (function (f) {
      function w(C) {
        var g = C;
        return (
          g &&
          (S.string(g.detail) || g.detail === void 0) &&
          (S.string(g.description) || g.description === void 0)
        );
      }
      f.is = w;
    })(wn || (e.CompletionItemLabelDetails = wn = {}));
    var on;
    (function (f) {
      function w(C) {
        return { label: C };
      }
      f.create = w;
    })(on || (e.CompletionItem = on = {}));
    var an;
    (function (f) {
      function w(C, g) {
        return { items: C || [], isIncomplete: !!g };
      }
      f.create = w;
    })(an || (e.CompletionList = an = {}));
    var Cn;
    (function (f) {
      function w(g) {
        return g.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
      }
      f.fromPlainText = w;
      function C(g) {
        var l = g;
        return (
          S.string(l) ||
          (S.objectLiteral(l) && S.string(l.language) && S.string(l.value))
        );
      }
      f.is = C;
    })(Cn || (e.MarkedString = Cn = {}));
    var tt;
    (function (f) {
      function w(C) {
        var g = C;
        return (
          !!g &&
          S.objectLiteral(g) &&
          (ht.is(g.contents) ||
            Cn.is(g.contents) ||
            S.typedArray(g.contents, Cn.is)) &&
          (C.range === void 0 || a.is(C.range))
        );
      }
      f.is = w;
    })(tt || (e.Hover = tt = {}));
    var On;
    (function (f) {
      function w(C, g) {
        return g ? { label: C, documentation: g } : { label: C };
      }
      f.create = w;
    })(On || (e.ParameterInformation = On = {}));
    var cn;
    (function (f) {
      function w(C, g) {
        for (var l = [], T = 2; T < arguments.length; T++)
          l[T - 2] = arguments[T];
        var L = { label: C };
        return (
          S.defined(g) && (L.documentation = g),
          S.defined(l) ? (L.parameters = l) : (L.parameters = []),
          L
        );
      }
      f.create = w;
    })(cn || (e.SignatureInformation = cn = {}));
    var Jt;
    (function (f) {
      (f.Text = 1), (f.Read = 2), (f.Write = 3);
    })(Jt || (e.DocumentHighlightKind = Jt = {}));
    var Qn;
    (function (f) {
      function w(C, g) {
        var l = { range: C };
        return S.number(g) && (l.kind = g), l;
      }
      f.create = w;
    })(Qn || (e.DocumentHighlight = Qn = {}));
    var Qt;
    (function (f) {
      (f.File = 1),
        (f.Module = 2),
        (f.Namespace = 3),
        (f.Package = 4),
        (f.Class = 5),
        (f.Method = 6),
        (f.Property = 7),
        (f.Field = 8),
        (f.Constructor = 9),
        (f.Enum = 10),
        (f.Interface = 11),
        (f.Function = 12),
        (f.Variable = 13),
        (f.Constant = 14),
        (f.String = 15),
        (f.Number = 16),
        (f.Boolean = 17),
        (f.Array = 18),
        (f.Object = 19),
        (f.Key = 20),
        (f.Null = 21),
        (f.EnumMember = 22),
        (f.Struct = 23),
        (f.Event = 24),
        (f.Operator = 25),
        (f.TypeParameter = 26);
    })(Qt || (e.SymbolKind = Qt = {}));
    var Dn;
    (function (f) {
      f.Deprecated = 1;
    })(Dn || (e.SymbolTag = Dn = {}));
    var Ye;
    (function (f) {
      function w(C, g, l, T, L) {
        var ne = { name: C, kind: g, location: { uri: T, range: l } };
        return L && (ne.containerName = L), ne;
      }
      f.create = w;
    })(Ye || (e.SymbolInformation = Ye = {}));
    var vt;
    (function (f) {
      function w(C, g, l, T) {
        return T !== void 0
          ? { name: C, kind: g, location: { uri: l, range: T } }
          : { name: C, kind: g, location: { uri: l } };
      }
      f.create = w;
    })(vt || (e.WorkspaceSymbol = vt = {}));
    var pt;
    (function (f) {
      function w(g, l, T, L, ne, je) {
        var Oe = { name: g, detail: l, kind: T, range: L, selectionRange: ne };
        return je !== void 0 && (Oe.children = je), Oe;
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          l &&
          S.string(l.name) &&
          S.number(l.kind) &&
          a.is(l.range) &&
          a.is(l.selectionRange) &&
          (l.detail === void 0 || S.string(l.detail)) &&
          (l.deprecated === void 0 || S.boolean(l.deprecated)) &&
          (l.children === void 0 || Array.isArray(l.children)) &&
          (l.tags === void 0 || Array.isArray(l.tags))
        );
      }
      f.is = C;
    })(pt || (e.DocumentSymbol = pt = {}));
    var Ht;
    (function (f) {
      (f.Empty = ""),
        (f.QuickFix = "quickfix"),
        (f.Refactor = "refactor"),
        (f.RefactorExtract = "refactor.extract"),
        (f.RefactorInline = "refactor.inline"),
        (f.RefactorRewrite = "refactor.rewrite"),
        (f.Source = "source"),
        (f.SourceOrganizeImports = "source.organizeImports"),
        (f.SourceFixAll = "source.fixAll");
    })(Ht || (e.CodeActionKind = Ht = {}));
    var Ot;
    (function (f) {
      (f.Invoked = 1), (f.Automatic = 2);
    })(Ot || (e.CodeActionTriggerKind = Ot = {}));
    var Rn;
    (function (f) {
      function w(g, l, T) {
        var L = { diagnostics: g };
        return l != null && (L.only = l), T != null && (L.triggerKind = T), L;
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.defined(l) &&
          S.typedArray(l.diagnostics, E.is) &&
          (l.only === void 0 || S.typedArray(l.only, S.string)) &&
          (l.triggerKind === void 0 ||
            l.triggerKind === Ot.Invoked ||
            l.triggerKind === Ot.Automatic)
        );
      }
      f.is = C;
    })(Rn || (e.CodeActionContext = Rn = {}));
    var In;
    (function (f) {
      function w(g, l, T) {
        var L = { title: g },
          ne = !0;
        return (
          typeof l == "string"
            ? ((ne = !1), (L.kind = l))
            : I.is(l)
            ? (L.command = l)
            : (L.edit = l),
          ne && T !== void 0 && (L.kind = T),
          L
        );
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          l &&
          S.string(l.title) &&
          (l.diagnostics === void 0 || S.typedArray(l.diagnostics, E.is)) &&
          (l.kind === void 0 || S.string(l.kind)) &&
          (l.edit !== void 0 || l.command !== void 0) &&
          (l.command === void 0 || I.is(l.command)) &&
          (l.isPreferred === void 0 || S.boolean(l.isPreferred)) &&
          (l.edit === void 0 || _e.is(l.edit))
        );
      }
      f.is = C;
    })(In || (e.CodeAction = In = {}));
    var un;
    (function (f) {
      function w(g, l) {
        var T = { range: g };
        return S.defined(l) && (T.data = l), T;
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.defined(l) &&
          a.is(l.range) &&
          (S.undefined(l.command) || I.is(l.command))
        );
      }
      f.is = C;
    })(un || (e.CodeLens = un = {}));
    var Fn;
    (function (f) {
      function w(g, l) {
        return { tabSize: g, insertSpaces: l };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.defined(l) && S.uinteger(l.tabSize) && S.boolean(l.insertSpaces)
        );
      }
      f.is = C;
    })(Fn || (e.FormattingOptions = Fn = {}));
    var Pt;
    (function (f) {
      function w(g, l, T) {
        return { range: g, target: l, data: T };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.defined(l) &&
          a.is(l.range) &&
          (S.undefined(l.target) || S.string(l.target))
        );
      }
      f.is = C;
    })(Pt || (e.DocumentLink = Pt = {}));
    var _;
    (function (f) {
      function w(g, l) {
        return { range: g, parent: l };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.objectLiteral(l) &&
          a.is(l.range) &&
          (l.parent === void 0 || f.is(l.parent))
        );
      }
      f.is = C;
    })(_ || (e.SelectionRange = _ = {}));
    var F;
    (function (f) {
      (f.namespace = "namespace"),
        (f.type = "type"),
        (f.class = "class"),
        (f.enum = "enum"),
        (f.interface = "interface"),
        (f.struct = "struct"),
        (f.typeParameter = "typeParameter"),
        (f.parameter = "parameter"),
        (f.variable = "variable"),
        (f.property = "property"),
        (f.enumMember = "enumMember"),
        (f.event = "event"),
        (f.function = "function"),
        (f.method = "method"),
        (f.macro = "macro"),
        (f.keyword = "keyword"),
        (f.modifier = "modifier"),
        (f.comment = "comment"),
        (f.string = "string"),
        (f.number = "number"),
        (f.regexp = "regexp"),
        (f.operator = "operator"),
        (f.decorator = "decorator");
    })(F || (e.SemanticTokenTypes = F = {}));
    var U;
    (function (f) {
      (f.declaration = "declaration"),
        (f.definition = "definition"),
        (f.readonly = "readonly"),
        (f.static = "static"),
        (f.deprecated = "deprecated"),
        (f.abstract = "abstract"),
        (f.async = "async"),
        (f.modification = "modification"),
        (f.documentation = "documentation"),
        (f.defaultLibrary = "defaultLibrary");
    })(U || (e.SemanticTokenModifiers = U = {}));
    var K;
    (function (f) {
      function w(C) {
        var g = C;
        return (
          S.objectLiteral(g) &&
          (g.resultId === void 0 || typeof g.resultId == "string") &&
          Array.isArray(g.data) &&
          (g.data.length === 0 || typeof g.data[0] == "number")
        );
      }
      f.is = w;
    })(K || (e.SemanticTokens = K = {}));
    var ve;
    (function (f) {
      function w(g, l) {
        return { range: g, text: l };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return l != null && a.is(l.range) && S.string(l.text);
      }
      f.is = C;
    })(ve || (e.InlineValueText = ve = {}));
    var me;
    (function (f) {
      function w(g, l, T) {
        return { range: g, variableName: l, caseSensitiveLookup: T };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          l != null &&
          a.is(l.range) &&
          S.boolean(l.caseSensitiveLookup) &&
          (S.string(l.variableName) || l.variableName === void 0)
        );
      }
      f.is = C;
    })(me || (e.InlineValueVariableLookup = me = {}));
    var Pe;
    (function (f) {
      function w(g, l) {
        return { range: g, expression: l };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          l != null &&
          a.is(l.range) &&
          (S.string(l.expression) || l.expression === void 0)
        );
      }
      f.is = C;
    })(Pe || (e.InlineValueEvaluatableExpression = Pe = {}));
    var qe;
    (function (f) {
      function w(g, l) {
        return { frameId: g, stoppedLocation: l };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return S.defined(l) && a.is(g.stoppedLocation);
      }
      f.is = C;
    })(qe || (e.InlineValueContext = qe = {}));
    var ae;
    (function (f) {
      (f.Type = 1), (f.Parameter = 2);
      function w(C) {
        return C === 1 || C === 2;
      }
      f.is = w;
    })(ae || (e.InlayHintKind = ae = {}));
    var we;
    (function (f) {
      function w(g) {
        return { value: g };
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          S.objectLiteral(l) &&
          (l.tooltip === void 0 || S.string(l.tooltip) || ht.is(l.tooltip)) &&
          (l.location === void 0 || u.is(l.location)) &&
          (l.command === void 0 || I.is(l.command))
        );
      }
      f.is = C;
    })(we || (e.InlayHintLabelPart = we = {}));
    var fe;
    (function (f) {
      function w(g, l, T) {
        var L = { position: g, label: l };
        return T !== void 0 && (L.kind = T), L;
      }
      f.create = w;
      function C(g) {
        var l = g;
        return (
          (S.objectLiteral(l) &&
            o.is(l.position) &&
            (S.string(l.label) || S.typedArray(l.label, we.is)) &&
            (l.kind === void 0 || ae.is(l.kind)) &&
            l.textEdits === void 0) ||
          (S.typedArray(l.textEdits, N.is) &&
            (l.tooltip === void 0 || S.string(l.tooltip) || ht.is(l.tooltip)) &&
            (l.paddingLeft === void 0 || S.boolean(l.paddingLeft)) &&
            (l.paddingRight === void 0 || S.boolean(l.paddingRight)))
        );
      }
      f.is = C;
    })(fe || (e.InlayHint = fe = {}));
    var xe;
    (function (f) {
      function w(C) {
        return { kind: "snippet", value: C };
      }
      f.createSnippet = w;
    })(xe || (e.StringValue = xe = {}));
    var Ge;
    (function (f) {
      function w(C, g, l, T) {
        return { insertText: C, filterText: g, range: l, command: T };
      }
      f.create = w;
    })(Ge || (e.InlineCompletionItem = Ge = {}));
    var ot;
    (function (f) {
      function w(C) {
        return { items: C };
      }
      f.create = w;
    })(ot || (e.InlineCompletionList = ot = {}));
    var Yn;
    (function (f) {
      (f.Invoked = 0), (f.Automatic = 1);
    })(Yn || (e.InlineCompletionTriggerKind = Yn = {}));
    var Zn;
    (function (f) {
      function w(C, g) {
        return { range: C, text: g };
      }
      f.create = w;
    })(Zn || (e.SelectedCompletionInfo = Zn = {}));
    var d;
    (function (f) {
      function w(C, g) {
        return { triggerKind: C, selectedCompletionInfo: g };
      }
      f.create = w;
    })(d || (e.InlineCompletionContext = d = {}));
    var k;
    (function (f) {
      function w(C) {
        var g = C;
        return S.objectLiteral(g) && r.is(g.uri) && S.string(g.name);
      }
      f.is = w;
    })(k || (e.WorkspaceFolder = k = {})),
      (e.EOL = [
        `
`,
        `\r
`,
        "\r",
      ]);
    var z;
    (function (f) {
      function w(T, L, ne, je) {
        return new Ce(T, L, ne, je);
      }
      f.create = w;
      function C(T) {
        var L = T;
        return !!(
          S.defined(L) &&
          S.string(L.uri) &&
          (S.undefined(L.languageId) || S.string(L.languageId)) &&
          S.uinteger(L.lineCount) &&
          S.func(L.getText) &&
          S.func(L.positionAt) &&
          S.func(L.offsetAt)
        );
      }
      f.is = C;
      function g(T, L) {
        for (
          var ne = T.getText(),
            je = l(L, function (Sn, c) {
              var D = Sn.range.start.line - c.range.start.line;
              return D === 0
                ? Sn.range.start.character - c.range.start.character
                : D;
            }),
            Oe = ne.length,
            It = je.length - 1;
          It >= 0;
          It--
        ) {
          var Ut = je[It],
            ln = T.offsetAt(Ut.range.start),
            de = T.offsetAt(Ut.range.end);
          if (de <= Oe)
            ne = ne.substring(0, ln) + Ut.newText + ne.substring(de, ne.length);
          else throw new Error("Overlapping edit");
          Oe = ln;
        }
        return ne;
      }
      f.applyEdits = g;
      function l(T, L) {
        if (T.length <= 1) return T;
        var ne = (T.length / 2) | 0,
          je = T.slice(0, ne),
          Oe = T.slice(ne);
        l(je, L), l(Oe, L);
        for (var It = 0, Ut = 0, ln = 0; It < je.length && Ut < Oe.length; ) {
          var de = L(je[It], Oe[Ut]);
          de <= 0 ? (T[ln++] = je[It++]) : (T[ln++] = Oe[Ut++]);
        }
        for (; It < je.length; ) T[ln++] = je[It++];
        for (; Ut < Oe.length; ) T[ln++] = Oe[Ut++];
        return T;
      }
    })(z || (e.TextDocument = z = {}));
    var Ce = (function () {
        function f(w, C, g, l) {
          (this._uri = w),
            (this._languageId = C),
            (this._version = g),
            (this._content = l),
            (this._lineOffsets = void 0);
        }
        return (
          Object.defineProperty(f.prototype, "uri", {
            get: function () {
              return this._uri;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(f.prototype, "languageId", {
            get: function () {
              return this._languageId;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(f.prototype, "version", {
            get: function () {
              return this._version;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (f.prototype.getText = function (w) {
            if (w) {
              var C = this.offsetAt(w.start),
                g = this.offsetAt(w.end);
              return this._content.substring(C, g);
            }
            return this._content;
          }),
          (f.prototype.update = function (w, C) {
            (this._content = w.text),
              (this._version = C),
              (this._lineOffsets = void 0);
          }),
          (f.prototype.getLineOffsets = function () {
            if (this._lineOffsets === void 0) {
              for (
                var w = [], C = this._content, g = !0, l = 0;
                l < C.length;
                l++
              ) {
                g && (w.push(l), (g = !1));
                var T = C.charAt(l);
                (g =
                  T === "\r" ||
                  T ===
                    `
`),
                  T === "\r" &&
                    l + 1 < C.length &&
                    C.charAt(l + 1) ===
                      `
` &&
                    l++;
              }
              g && C.length > 0 && w.push(C.length), (this._lineOffsets = w);
            }
            return this._lineOffsets;
          }),
          (f.prototype.positionAt = function (w) {
            w = Math.max(Math.min(w, this._content.length), 0);
            var C = this.getLineOffsets(),
              g = 0,
              l = C.length;
            if (l === 0) return o.create(0, w);
            for (; g < l; ) {
              var T = Math.floor((g + l) / 2);
              C[T] > w ? (l = T) : (g = T + 1);
            }
            var L = g - 1;
            return o.create(L, w - C[L]);
          }),
          (f.prototype.offsetAt = function (w) {
            var C = this.getLineOffsets();
            if (w.line >= C.length) return this._content.length;
            if (w.line < 0) return 0;
            var g = C[w.line],
              l = w.line + 1 < C.length ? C[w.line + 1] : this._content.length;
            return Math.max(Math.min(g + w.character, l), g);
          }),
          Object.defineProperty(f.prototype, "lineCount", {
            get: function () {
              return this.getLineOffsets().length;
            },
            enumerable: !1,
            configurable: !0,
          }),
          f
        );
      })(),
      S;
    (function (f) {
      var w = Object.prototype.toString;
      function C(de) {
        return typeof de < "u";
      }
      f.defined = C;
      function g(de) {
        return typeof de > "u";
      }
      f.undefined = g;
      function l(de) {
        return de === !0 || de === !1;
      }
      f.boolean = l;
      function T(de) {
        return w.call(de) === "[object String]";
      }
      f.string = T;
      function L(de) {
        return w.call(de) === "[object Number]";
      }
      f.number = L;
      function ne(de, Sn, c) {
        return w.call(de) === "[object Number]" && Sn <= de && de <= c;
      }
      f.numberRange = ne;
      function je(de) {
        return (
          w.call(de) === "[object Number]" &&
          -2147483648 <= de &&
          de <= 2147483647
        );
      }
      f.integer = je;
      function Oe(de) {
        return w.call(de) === "[object Number]" && 0 <= de && de <= 2147483647;
      }
      f.uinteger = Oe;
      function It(de) {
        return w.call(de) === "[object Function]";
      }
      f.func = It;
      function Ut(de) {
        return de !== null && typeof de == "object";
      }
      f.objectLiteral = Ut;
      function ln(de, Sn) {
        return Array.isArray(de) && de.every(Sn);
      }
      f.typedArray = ln;
    })(S || (S = {}));
  });
});
var $e = x((Ft) => {
  "use strict";
  Object.defineProperty(Ft, "__esModule", { value: !0 });
  Ft.ProtocolNotificationType =
    Ft.ProtocolNotificationType0 =
    Ft.ProtocolRequestType =
    Ft.ProtocolRequestType0 =
    Ft.RegistrationType =
    Ft.MessageDirection =
      void 0;
  var Br = _r(),
    gf;
  (function (t) {
    (t.clientToServer = "clientToServer"),
      (t.serverToClient = "serverToClient"),
      (t.both = "both");
  })(gf || (Ft.MessageDirection = gf = {}));
  var lc = class {
    constructor(e) {
      this.method = e;
    }
  };
  Ft.RegistrationType = lc;
  var dc = class extends Br.RequestType0 {
    constructor(e) {
      super(e);
    }
  };
  Ft.ProtocolRequestType0 = dc;
  var fc = class extends Br.RequestType {
    constructor(e) {
      super(e, Br.ParameterStructures.byName);
    }
  };
  Ft.ProtocolRequestType = fc;
  var hc = class extends Br.NotificationType0 {
    constructor(e) {
      super(e);
    }
  };
  Ft.ProtocolNotificationType0 = hc;
  var pc = class extends Br.NotificationType {
    constructor(e) {
      super(e, Br.ParameterStructures.byName);
    }
  };
  Ft.ProtocolNotificationType = pc;
});
var Ps = x((nt) => {
  "use strict";
  Object.defineProperty(nt, "__esModule", { value: !0 });
  nt.objectLiteral =
    nt.typedArray =
    nt.stringArray =
    nt.array =
    nt.func =
    nt.error =
    nt.number =
    nt.string =
    nt.boolean =
      void 0;
  function ob(t) {
    return t === !0 || t === !1;
  }
  nt.boolean = ob;
  function mf(t) {
    return typeof t == "string" || t instanceof String;
  }
  nt.string = mf;
  function ab(t) {
    return typeof t == "number" || t instanceof Number;
  }
  nt.number = ab;
  function cb(t) {
    return t instanceof Error;
  }
  nt.error = cb;
  function ub(t) {
    return typeof t == "function";
  }
  nt.func = ub;
  function yf(t) {
    return Array.isArray(t);
  }
  nt.array = yf;
  function lb(t) {
    return yf(t) && t.every((e) => mf(e));
  }
  nt.stringArray = lb;
  function db(t, e) {
    return Array.isArray(t) && t.every(e);
  }
  nt.typedArray = db;
  function fb(t) {
    return t !== null && typeof t == "object";
  }
  nt.objectLiteral = fb;
});
var _f = x((Es) => {
  "use strict";
  Object.defineProperty(Es, "__esModule", { value: !0 });
  Es.ImplementationRequest = void 0;
  var vf = $e(),
    bf;
  (function (t) {
    (t.method = "textDocument/implementation"),
      (t.messageDirection = vf.MessageDirection.clientToServer),
      (t.type = new vf.ProtocolRequestType(t.method));
  })(bf || (Es.ImplementationRequest = bf = {}));
});
var Df = x((ks) => {
  "use strict";
  Object.defineProperty(ks, "__esModule", { value: !0 });
  ks.TypeDefinitionRequest = void 0;
  var wf = $e(),
    Cf;
  (function (t) {
    (t.method = "textDocument/typeDefinition"),
      (t.messageDirection = wf.MessageDirection.clientToServer),
      (t.type = new wf.ProtocolRequestType(t.method));
  })(Cf || (ks.TypeDefinitionRequest = Cf = {}));
});
var Tf = x((Vr) => {
  "use strict";
  Object.defineProperty(Vr, "__esModule", { value: !0 });
  Vr.DidChangeWorkspaceFoldersNotification = Vr.WorkspaceFoldersRequest =
    void 0;
  var qs = $e(),
    Rf;
  (function (t) {
    (t.method = "workspace/workspaceFolders"),
      (t.messageDirection = qs.MessageDirection.serverToClient),
      (t.type = new qs.ProtocolRequestType0(t.method));
  })(Rf || (Vr.WorkspaceFoldersRequest = Rf = {}));
  var Sf;
  (function (t) {
    (t.method = "workspace/didChangeWorkspaceFolders"),
      (t.messageDirection = qs.MessageDirection.clientToServer),
      (t.type = new qs.ProtocolNotificationType(t.method));
  })(Sf || (Vr.DidChangeWorkspaceFoldersNotification = Sf = {}));
});
var kf = x((xs) => {
  "use strict";
  Object.defineProperty(xs, "__esModule", { value: !0 });
  xs.ConfigurationRequest = void 0;
  var Pf = $e(),
    Ef;
  (function (t) {
    (t.method = "workspace/configuration"),
      (t.messageDirection = Pf.MessageDirection.serverToClient),
      (t.type = new Pf.ProtocolRequestType(t.method));
  })(Ef || (xs.ConfigurationRequest = Ef = {}));
});
var Of = x((Gr) => {
  "use strict";
  Object.defineProperty(Gr, "__esModule", { value: !0 });
  Gr.ColorPresentationRequest = Gr.DocumentColorRequest = void 0;
  var Os = $e(),
    qf;
  (function (t) {
    (t.method = "textDocument/documentColor"),
      (t.messageDirection = Os.MessageDirection.clientToServer),
      (t.type = new Os.ProtocolRequestType(t.method));
  })(qf || (Gr.DocumentColorRequest = qf = {}));
  var xf;
  (function (t) {
    (t.method = "textDocument/colorPresentation"),
      (t.messageDirection = Os.MessageDirection.clientToServer),
      (t.type = new Os.ProtocolRequestType(t.method));
  })(xf || (Gr.ColorPresentationRequest = xf = {}));
});
var Nf = x((Xr) => {
  "use strict";
  Object.defineProperty(Xr, "__esModule", { value: !0 });
  Xr.FoldingRangeRefreshRequest = Xr.FoldingRangeRequest = void 0;
  var Is = $e(),
    If;
  (function (t) {
    (t.method = "textDocument/foldingRange"),
      (t.messageDirection = Is.MessageDirection.clientToServer),
      (t.type = new Is.ProtocolRequestType(t.method));
  })(If || (Xr.FoldingRangeRequest = If = {}));
  var Ff;
  (function (t) {
    (t.method = "workspace/foldingRange/refresh"),
      (t.messageDirection = Is.MessageDirection.serverToClient),
      (t.type = new Is.ProtocolRequestType0(t.method));
  })(Ff || (Xr.FoldingRangeRefreshRequest = Ff = {}));
});
var Af = x((Fs) => {
  "use strict";
  Object.defineProperty(Fs, "__esModule", { value: !0 });
  Fs.DeclarationRequest = void 0;
  var Lf = $e(),
    Mf;
  (function (t) {
    (t.method = "textDocument/declaration"),
      (t.messageDirection = Lf.MessageDirection.clientToServer),
      (t.type = new Lf.ProtocolRequestType(t.method));
  })(Mf || (Fs.DeclarationRequest = Mf = {}));
});
var Hf = x((Ns) => {
  "use strict";
  Object.defineProperty(Ns, "__esModule", { value: !0 });
  Ns.SelectionRangeRequest = void 0;
  var jf = $e(),
    $f;
  (function (t) {
    (t.method = "textDocument/selectionRange"),
      (t.messageDirection = jf.MessageDirection.clientToServer),
      (t.type = new jf.ProtocolRequestType(t.method));
  })($f || (Ns.SelectionRangeRequest = $f = {}));
});
var zf = x((sr) => {
  "use strict";
  Object.defineProperty(sr, "__esModule", { value: !0 });
  sr.WorkDoneProgressCancelNotification =
    sr.WorkDoneProgressCreateRequest =
    sr.WorkDoneProgress =
      void 0;
  var hb = _r(),
    Ls = $e(),
    Uf;
  (function (t) {
    t.type = new hb.ProgressType();
    function e(n) {
      return n === t.type;
    }
    t.is = e;
  })(Uf || (sr.WorkDoneProgress = Uf = {}));
  var Wf;
  (function (t) {
    (t.method = "window/workDoneProgress/create"),
      (t.messageDirection = Ls.MessageDirection.serverToClient),
      (t.type = new Ls.ProtocolRequestType(t.method));
  })(Wf || (sr.WorkDoneProgressCreateRequest = Wf = {}));
  var Kf;
  (function (t) {
    (t.method = "window/workDoneProgress/cancel"),
      (t.messageDirection = Ls.MessageDirection.clientToServer),
      (t.type = new Ls.ProtocolNotificationType(t.method));
  })(Kf || (sr.WorkDoneProgressCancelNotification = Kf = {}));
});
var Xf = x((or) => {
  "use strict";
  Object.defineProperty(or, "__esModule", { value: !0 });
  or.CallHierarchyOutgoingCallsRequest =
    or.CallHierarchyIncomingCallsRequest =
    or.CallHierarchyPrepareRequest =
      void 0;
  var Jr = $e(),
    Bf;
  (function (t) {
    (t.method = "textDocument/prepareCallHierarchy"),
      (t.messageDirection = Jr.MessageDirection.clientToServer),
      (t.type = new Jr.ProtocolRequestType(t.method));
  })(Bf || (or.CallHierarchyPrepareRequest = Bf = {}));
  var Vf;
  (function (t) {
    (t.method = "callHierarchy/incomingCalls"),
      (t.messageDirection = Jr.MessageDirection.clientToServer),
      (t.type = new Jr.ProtocolRequestType(t.method));
  })(Vf || (or.CallHierarchyIncomingCallsRequest = Vf = {}));
  var Gf;
  (function (t) {
    (t.method = "callHierarchy/outgoingCalls"),
      (t.messageDirection = Jr.MessageDirection.clientToServer),
      (t.type = new Jr.ProtocolRequestType(t.method));
  })(Gf || (or.CallHierarchyOutgoingCallsRequest = Gf = {}));
});
var th = x((Nt) => {
  "use strict";
  Object.defineProperty(Nt, "__esModule", { value: !0 });
  Nt.SemanticTokensRefreshRequest =
    Nt.SemanticTokensRangeRequest =
    Nt.SemanticTokensDeltaRequest =
    Nt.SemanticTokensRequest =
    Nt.SemanticTokensRegistrationType =
    Nt.TokenFormat =
      void 0;
  var Ln = $e(),
    Jf;
  (function (t) {
    t.Relative = "relative";
  })(Jf || (Nt.TokenFormat = Jf = {}));
  var Ei;
  (function (t) {
    (t.method = "textDocument/semanticTokens"),
      (t.type = new Ln.RegistrationType(t.method));
  })(Ei || (Nt.SemanticTokensRegistrationType = Ei = {}));
  var Qf;
  (function (t) {
    (t.method = "textDocument/semanticTokens/full"),
      (t.messageDirection = Ln.MessageDirection.clientToServer),
      (t.type = new Ln.ProtocolRequestType(t.method)),
      (t.registrationMethod = Ei.method);
  })(Qf || (Nt.SemanticTokensRequest = Qf = {}));
  var Yf;
  (function (t) {
    (t.method = "textDocument/semanticTokens/full/delta"),
      (t.messageDirection = Ln.MessageDirection.clientToServer),
      (t.type = new Ln.ProtocolRequestType(t.method)),
      (t.registrationMethod = Ei.method);
  })(Yf || (Nt.SemanticTokensDeltaRequest = Yf = {}));
  var Zf;
  (function (t) {
    (t.method = "textDocument/semanticTokens/range"),
      (t.messageDirection = Ln.MessageDirection.clientToServer),
      (t.type = new Ln.ProtocolRequestType(t.method)),
      (t.registrationMethod = Ei.method);
  })(Zf || (Nt.SemanticTokensRangeRequest = Zf = {}));
  var eh;
  (function (t) {
    (t.method = "workspace/semanticTokens/refresh"),
      (t.messageDirection = Ln.MessageDirection.serverToClient),
      (t.type = new Ln.ProtocolRequestType0(t.method));
  })(eh || (Nt.SemanticTokensRefreshRequest = eh = {}));
});
var ih = x((Ms) => {
  "use strict";
  Object.defineProperty(Ms, "__esModule", { value: !0 });
  Ms.ShowDocumentRequest = void 0;
  var nh = $e(),
    rh;
  (function (t) {
    (t.method = "window/showDocument"),
      (t.messageDirection = nh.MessageDirection.serverToClient),
      (t.type = new nh.ProtocolRequestType(t.method));
  })(rh || (Ms.ShowDocumentRequest = rh = {}));
});
var ah = x((As) => {
  "use strict";
  Object.defineProperty(As, "__esModule", { value: !0 });
  As.LinkedEditingRangeRequest = void 0;
  var sh = $e(),
    oh;
  (function (t) {
    (t.method = "textDocument/linkedEditingRange"),
      (t.messageDirection = sh.MessageDirection.clientToServer),
      (t.type = new sh.ProtocolRequestType(t.method));
  })(oh || (As.LinkedEditingRangeRequest = oh = {}));
});
var gh = x((wt) => {
  "use strict";
  Object.defineProperty(wt, "__esModule", { value: !0 });
  wt.WillDeleteFilesRequest =
    wt.DidDeleteFilesNotification =
    wt.DidRenameFilesNotification =
    wt.WillRenameFilesRequest =
    wt.DidCreateFilesNotification =
    wt.WillCreateFilesRequest =
    wt.FileOperationPatternKind =
      void 0;
  var Zt = $e(),
    ch;
  (function (t) {
    (t.file = "file"), (t.folder = "folder");
  })(ch || (wt.FileOperationPatternKind = ch = {}));
  var uh;
  (function (t) {
    (t.method = "workspace/willCreateFiles"),
      (t.messageDirection = Zt.MessageDirection.clientToServer),
      (t.type = new Zt.ProtocolRequestType(t.method));
  })(uh || (wt.WillCreateFilesRequest = uh = {}));
  var lh;
  (function (t) {
    (t.method = "workspace/didCreateFiles"),
      (t.messageDirection = Zt.MessageDirection.clientToServer),
      (t.type = new Zt.ProtocolNotificationType(t.method));
  })(lh || (wt.DidCreateFilesNotification = lh = {}));
  var dh;
  (function (t) {
    (t.method = "workspace/willRenameFiles"),
      (t.messageDirection = Zt.MessageDirection.clientToServer),
      (t.type = new Zt.ProtocolRequestType(t.method));
  })(dh || (wt.WillRenameFilesRequest = dh = {}));
  var fh;
  (function (t) {
    (t.method = "workspace/didRenameFiles"),
      (t.messageDirection = Zt.MessageDirection.clientToServer),
      (t.type = new Zt.ProtocolNotificationType(t.method));
  })(fh || (wt.DidRenameFilesNotification = fh = {}));
  var hh;
  (function (t) {
    (t.method = "workspace/didDeleteFiles"),
      (t.messageDirection = Zt.MessageDirection.clientToServer),
      (t.type = new Zt.ProtocolNotificationType(t.method));
  })(hh || (wt.DidDeleteFilesNotification = hh = {}));
  var ph;
  (function (t) {
    (t.method = "workspace/willDeleteFiles"),
      (t.messageDirection = Zt.MessageDirection.clientToServer),
      (t.type = new Zt.ProtocolRequestType(t.method));
  })(ph || (wt.WillDeleteFilesRequest = ph = {}));
});
var _h = x((ar) => {
  "use strict";
  Object.defineProperty(ar, "__esModule", { value: !0 });
  ar.MonikerRequest = ar.MonikerKind = ar.UniquenessLevel = void 0;
  var mh = $e(),
    yh;
  (function (t) {
    (t.document = "document"),
      (t.project = "project"),
      (t.group = "group"),
      (t.scheme = "scheme"),
      (t.global = "global");
  })(yh || (ar.UniquenessLevel = yh = {}));
  var vh;
  (function (t) {
    (t.$import = "import"), (t.$export = "export"), (t.local = "local");
  })(vh || (ar.MonikerKind = vh = {}));
  var bh;
  (function (t) {
    (t.method = "textDocument/moniker"),
      (t.messageDirection = mh.MessageDirection.clientToServer),
      (t.type = new mh.ProtocolRequestType(t.method));
  })(bh || (ar.MonikerRequest = bh = {}));
});
var Rh = x((cr) => {
  "use strict";
  Object.defineProperty(cr, "__esModule", { value: !0 });
  cr.TypeHierarchySubtypesRequest =
    cr.TypeHierarchySupertypesRequest =
    cr.TypeHierarchyPrepareRequest =
      void 0;
  var Qr = $e(),
    wh;
  (function (t) {
    (t.method = "textDocument/prepareTypeHierarchy"),
      (t.messageDirection = Qr.MessageDirection.clientToServer),
      (t.type = new Qr.ProtocolRequestType(t.method));
  })(wh || (cr.TypeHierarchyPrepareRequest = wh = {}));
  var Ch;
  (function (t) {
    (t.method = "typeHierarchy/supertypes"),
      (t.messageDirection = Qr.MessageDirection.clientToServer),
      (t.type = new Qr.ProtocolRequestType(t.method));
  })(Ch || (cr.TypeHierarchySupertypesRequest = Ch = {}));
  var Dh;
  (function (t) {
    (t.method = "typeHierarchy/subtypes"),
      (t.messageDirection = Qr.MessageDirection.clientToServer),
      (t.type = new Qr.ProtocolRequestType(t.method));
  })(Dh || (cr.TypeHierarchySubtypesRequest = Dh = {}));
});
var Ph = x((Yr) => {
  "use strict";
  Object.defineProperty(Yr, "__esModule", { value: !0 });
  Yr.InlineValueRefreshRequest = Yr.InlineValueRequest = void 0;
  var js = $e(),
    Sh;
  (function (t) {
    (t.method = "textDocument/inlineValue"),
      (t.messageDirection = js.MessageDirection.clientToServer),
      (t.type = new js.ProtocolRequestType(t.method));
  })(Sh || (Yr.InlineValueRequest = Sh = {}));
  var Th;
  (function (t) {
    (t.method = "workspace/inlineValue/refresh"),
      (t.messageDirection = js.MessageDirection.serverToClient),
      (t.type = new js.ProtocolRequestType0(t.method));
  })(Th || (Yr.InlineValueRefreshRequest = Th = {}));
});
var xh = x((ur) => {
  "use strict";
  Object.defineProperty(ur, "__esModule", { value: !0 });
  ur.InlayHintRefreshRequest =
    ur.InlayHintResolveRequest =
    ur.InlayHintRequest =
      void 0;
  var Zr = $e(),
    Eh;
  (function (t) {
    (t.method = "textDocument/inlayHint"),
      (t.messageDirection = Zr.MessageDirection.clientToServer),
      (t.type = new Zr.ProtocolRequestType(t.method));
  })(Eh || (ur.InlayHintRequest = Eh = {}));
  var kh;
  (function (t) {
    (t.method = "inlayHint/resolve"),
      (t.messageDirection = Zr.MessageDirection.clientToServer),
      (t.type = new Zr.ProtocolRequestType(t.method));
  })(kh || (ur.InlayHintResolveRequest = kh = {}));
  var qh;
  (function (t) {
    (t.method = "workspace/inlayHint/refresh"),
      (t.messageDirection = Zr.MessageDirection.serverToClient),
      (t.type = new Zr.ProtocolRequestType0(t.method));
  })(qh || (ur.InlayHintRefreshRequest = qh = {}));
});
var Ah = x((en) => {
  "use strict";
  Object.defineProperty(en, "__esModule", { value: !0 });
  en.DiagnosticRefreshRequest =
    en.WorkspaceDiagnosticRequest =
    en.DocumentDiagnosticRequest =
    en.DocumentDiagnosticReportKind =
    en.DiagnosticServerCancellationData =
      void 0;
  var Mh = _r(),
    pb = Ps(),
    ei = $e(),
    Oh;
  (function (t) {
    function e(n) {
      let r = n;
      return r && pb.boolean(r.retriggerRequest);
    }
    t.is = e;
  })(Oh || (en.DiagnosticServerCancellationData = Oh = {}));
  var Ih;
  (function (t) {
    (t.Full = "full"), (t.Unchanged = "unchanged");
  })(Ih || (en.DocumentDiagnosticReportKind = Ih = {}));
  var Fh;
  (function (t) {
    (t.method = "textDocument/diagnostic"),
      (t.messageDirection = ei.MessageDirection.clientToServer),
      (t.type = new ei.ProtocolRequestType(t.method)),
      (t.partialResult = new Mh.ProgressType());
  })(Fh || (en.DocumentDiagnosticRequest = Fh = {}));
  var Nh;
  (function (t) {
    (t.method = "workspace/diagnostic"),
      (t.messageDirection = ei.MessageDirection.clientToServer),
      (t.type = new ei.ProtocolRequestType(t.method)),
      (t.partialResult = new Mh.ProgressType());
  })(Nh || (en.WorkspaceDiagnosticRequest = Nh = {}));
  var Lh;
  (function (t) {
    (t.method = "workspace/diagnostic/refresh"),
      (t.messageDirection = ei.MessageDirection.serverToClient),
      (t.type = new ei.ProtocolRequestType0(t.method));
  })(Lh || (en.DiagnosticRefreshRequest = Lh = {}));
});
var zh = x((Je) => {
  "use strict";
  Object.defineProperty(Je, "__esModule", { value: !0 });
  Je.DidCloseNotebookDocumentNotification =
    Je.DidSaveNotebookDocumentNotification =
    Je.DidChangeNotebookDocumentNotification =
    Je.NotebookCellArrayChange =
    Je.DidOpenNotebookDocumentNotification =
    Je.NotebookDocumentSyncRegistrationType =
    Je.NotebookDocument =
    Je.NotebookCell =
    Je.ExecutionSummary =
    Je.NotebookCellKind =
      void 0;
  var ki = Ts(),
    fn = Ps(),
    Pn = $e(),
    gc;
  (function (t) {
    (t.Markup = 1), (t.Code = 2);
    function e(n) {
      return n === 1 || n === 2;
    }
    t.is = e;
  })(gc || (Je.NotebookCellKind = gc = {}));
  var mc;
  (function (t) {
    function e(i, s) {
      let o = { executionOrder: i };
      return (s === !0 || s === !1) && (o.success = s), o;
    }
    t.create = e;
    function n(i) {
      let s = i;
      return (
        fn.objectLiteral(s) &&
        ki.uinteger.is(s.executionOrder) &&
        (s.success === void 0 || fn.boolean(s.success))
      );
    }
    t.is = n;
    function r(i, s) {
      return i === s
        ? !0
        : i == null || s === null || s === void 0
        ? !1
        : i.executionOrder === s.executionOrder && i.success === s.success;
    }
    t.equals = r;
  })(mc || (Je.ExecutionSummary = mc = {}));
  var $s;
  (function (t) {
    function e(s, o) {
      return { kind: s, document: o };
    }
    t.create = e;
    function n(s) {
      let o = s;
      return (
        fn.objectLiteral(o) &&
        gc.is(o.kind) &&
        ki.DocumentUri.is(o.document) &&
        (o.metadata === void 0 || fn.objectLiteral(o.metadata))
      );
    }
    t.is = n;
    function r(s, o) {
      let a = new Set();
      return (
        s.document !== o.document && a.add("document"),
        s.kind !== o.kind && a.add("kind"),
        s.executionSummary !== o.executionSummary && a.add("executionSummary"),
        (s.metadata !== void 0 || o.metadata !== void 0) &&
          !i(s.metadata, o.metadata) &&
          a.add("metadata"),
        (s.executionSummary !== void 0 || o.executionSummary !== void 0) &&
          !mc.equals(s.executionSummary, o.executionSummary) &&
          a.add("executionSummary"),
        a
      );
    }
    t.diff = r;
    function i(s, o) {
      if (s === o) return !0;
      if (
        s == null ||
        o === null ||
        o === void 0 ||
        typeof s != typeof o ||
        typeof s != "object"
      )
        return !1;
      let a = Array.isArray(s),
        u = Array.isArray(o);
      if (a !== u) return !1;
      if (a && u) {
        if (s.length !== o.length) return !1;
        for (let h = 0; h < s.length; h++) if (!i(s[h], o[h])) return !1;
      }
      if (fn.objectLiteral(s) && fn.objectLiteral(o)) {
        let h = Object.keys(s),
          p = Object.keys(o);
        if (h.length !== p.length || (h.sort(), p.sort(), !i(h, p))) return !1;
        for (let v = 0; v < h.length; v++) {
          let m = h[v];
          if (!i(s[m], o[m])) return !1;
        }
      }
      return !0;
    }
  })($s || (Je.NotebookCell = $s = {}));
  var jh;
  (function (t) {
    function e(r, i, s, o) {
      return { uri: r, notebookType: i, version: s, cells: o };
    }
    t.create = e;
    function n(r) {
      let i = r;
      return (
        fn.objectLiteral(i) &&
        fn.string(i.uri) &&
        ki.integer.is(i.version) &&
        fn.typedArray(i.cells, $s.is)
      );
    }
    t.is = n;
  })(jh || (Je.NotebookDocument = jh = {}));
  var ti;
  (function (t) {
    (t.method = "notebookDocument/sync"),
      (t.messageDirection = Pn.MessageDirection.clientToServer),
      (t.type = new Pn.RegistrationType(t.method));
  })(ti || (Je.NotebookDocumentSyncRegistrationType = ti = {}));
  var $h;
  (function (t) {
    (t.method = "notebookDocument/didOpen"),
      (t.messageDirection = Pn.MessageDirection.clientToServer),
      (t.type = new Pn.ProtocolNotificationType(t.method)),
      (t.registrationMethod = ti.method);
  })($h || (Je.DidOpenNotebookDocumentNotification = $h = {}));
  var Hh;
  (function (t) {
    function e(r) {
      let i = r;
      return (
        fn.objectLiteral(i) &&
        ki.uinteger.is(i.start) &&
        ki.uinteger.is(i.deleteCount) &&
        (i.cells === void 0 || fn.typedArray(i.cells, $s.is))
      );
    }
    t.is = e;
    function n(r, i, s) {
      let o = { start: r, deleteCount: i };
      return s !== void 0 && (o.cells = s), o;
    }
    t.create = n;
  })(Hh || (Je.NotebookCellArrayChange = Hh = {}));
  var Uh;
  (function (t) {
    (t.method = "notebookDocument/didChange"),
      (t.messageDirection = Pn.MessageDirection.clientToServer),
      (t.type = new Pn.ProtocolNotificationType(t.method)),
      (t.registrationMethod = ti.method);
  })(Uh || (Je.DidChangeNotebookDocumentNotification = Uh = {}));
  var Wh;
  (function (t) {
    (t.method = "notebookDocument/didSave"),
      (t.messageDirection = Pn.MessageDirection.clientToServer),
      (t.type = new Pn.ProtocolNotificationType(t.method)),
      (t.registrationMethod = ti.method);
  })(Wh || (Je.DidSaveNotebookDocumentNotification = Wh = {}));
  var Kh;
  (function (t) {
    (t.method = "notebookDocument/didClose"),
      (t.messageDirection = Pn.MessageDirection.clientToServer),
      (t.type = new Pn.ProtocolNotificationType(t.method)),
      (t.registrationMethod = ti.method);
  })(Kh || (Je.DidCloseNotebookDocumentNotification = Kh = {}));
});
var Gh = x((Hs) => {
  "use strict";
  Object.defineProperty(Hs, "__esModule", { value: !0 });
  Hs.InlineCompletionRequest = void 0;
  var Bh = $e(),
    Vh;
  (function (t) {
    (t.method = "textDocument/inlineCompletion"),
      (t.messageDirection = Bh.MessageDirection.clientToServer),
      (t.type = new Bh.ProtocolRequestType(t.method));
  })(Vh || (Hs.InlineCompletionRequest = Vh = {}));
});
var ag = x((b) => {
  "use strict";
  Object.defineProperty(b, "__esModule", { value: !0 });
  b.WorkspaceSymbolRequest =
    b.CodeActionResolveRequest =
    b.CodeActionRequest =
    b.DocumentSymbolRequest =
    b.DocumentHighlightRequest =
    b.ReferencesRequest =
    b.DefinitionRequest =
    b.SignatureHelpRequest =
    b.SignatureHelpTriggerKind =
    b.HoverRequest =
    b.CompletionResolveRequest =
    b.CompletionRequest =
    b.CompletionTriggerKind =
    b.PublishDiagnosticsNotification =
    b.WatchKind =
    b.RelativePattern =
    b.FileChangeType =
    b.DidChangeWatchedFilesNotification =
    b.WillSaveTextDocumentWaitUntilRequest =
    b.WillSaveTextDocumentNotification =
    b.TextDocumentSaveReason =
    b.DidSaveTextDocumentNotification =
    b.DidCloseTextDocumentNotification =
    b.DidChangeTextDocumentNotification =
    b.TextDocumentContentChangeEvent =
    b.DidOpenTextDocumentNotification =
    b.TextDocumentSyncKind =
    b.TelemetryEventNotification =
    b.LogMessageNotification =
    b.ShowMessageRequest =
    b.ShowMessageNotification =
    b.MessageType =
    b.DidChangeConfigurationNotification =
    b.ExitNotification =
    b.ShutdownRequest =
    b.InitializedNotification =
    b.InitializeErrorCodes =
    b.InitializeRequest =
    b.WorkDoneProgressOptions =
    b.TextDocumentRegistrationOptions =
    b.StaticRegistrationOptions =
    b.PositionEncodingKind =
    b.FailureHandlingKind =
    b.ResourceOperationKind =
    b.UnregistrationRequest =
    b.RegistrationRequest =
    b.DocumentSelector =
    b.NotebookCellTextDocumentFilter =
    b.NotebookDocumentFilter =
    b.TextDocumentFilter =
      void 0;
  b.MonikerRequest =
    b.MonikerKind =
    b.UniquenessLevel =
    b.WillDeleteFilesRequest =
    b.DidDeleteFilesNotification =
    b.WillRenameFilesRequest =
    b.DidRenameFilesNotification =
    b.WillCreateFilesRequest =
    b.DidCreateFilesNotification =
    b.FileOperationPatternKind =
    b.LinkedEditingRangeRequest =
    b.ShowDocumentRequest =
    b.SemanticTokensRegistrationType =
    b.SemanticTokensRefreshRequest =
    b.SemanticTokensRangeRequest =
    b.SemanticTokensDeltaRequest =
    b.SemanticTokensRequest =
    b.TokenFormat =
    b.CallHierarchyPrepareRequest =
    b.CallHierarchyOutgoingCallsRequest =
    b.CallHierarchyIncomingCallsRequest =
    b.WorkDoneProgressCancelNotification =
    b.WorkDoneProgressCreateRequest =
    b.WorkDoneProgress =
    b.SelectionRangeRequest =
    b.DeclarationRequest =
    b.FoldingRangeRefreshRequest =
    b.FoldingRangeRequest =
    b.ColorPresentationRequest =
    b.DocumentColorRequest =
    b.ConfigurationRequest =
    b.DidChangeWorkspaceFoldersNotification =
    b.WorkspaceFoldersRequest =
    b.TypeDefinitionRequest =
    b.ImplementationRequest =
    b.ApplyWorkspaceEditRequest =
    b.ExecuteCommandRequest =
    b.PrepareRenameRequest =
    b.RenameRequest =
    b.PrepareSupportDefaultBehavior =
    b.DocumentOnTypeFormattingRequest =
    b.DocumentRangesFormattingRequest =
    b.DocumentRangeFormattingRequest =
    b.DocumentFormattingRequest =
    b.DocumentLinkResolveRequest =
    b.DocumentLinkRequest =
    b.CodeLensRefreshRequest =
    b.CodeLensResolveRequest =
    b.CodeLensRequest =
    b.WorkspaceSymbolResolveRequest =
      void 0;
  b.InlineCompletionRequest =
    b.DidCloseNotebookDocumentNotification =
    b.DidSaveNotebookDocumentNotification =
    b.DidChangeNotebookDocumentNotification =
    b.NotebookCellArrayChange =
    b.DidOpenNotebookDocumentNotification =
    b.NotebookDocumentSyncRegistrationType =
    b.NotebookDocument =
    b.NotebookCell =
    b.ExecutionSummary =
    b.NotebookCellKind =
    b.DiagnosticRefreshRequest =
    b.WorkspaceDiagnosticRequest =
    b.DocumentDiagnosticRequest =
    b.DocumentDiagnosticReportKind =
    b.DiagnosticServerCancellationData =
    b.InlayHintRefreshRequest =
    b.InlayHintResolveRequest =
    b.InlayHintRequest =
    b.InlineValueRefreshRequest =
    b.InlineValueRequest =
    b.TypeHierarchySupertypesRequest =
    b.TypeHierarchySubtypesRequest =
    b.TypeHierarchyPrepareRequest =
      void 0;
  var H = $e(),
    Xh = Ts(),
    ut = Ps(),
    gb = _f();
  Object.defineProperty(b, "ImplementationRequest", {
    enumerable: !0,
    get: function () {
      return gb.ImplementationRequest;
    },
  });
  var mb = Df();
  Object.defineProperty(b, "TypeDefinitionRequest", {
    enumerable: !0,
    get: function () {
      return mb.TypeDefinitionRequest;
    },
  });
  var rg = Tf();
  Object.defineProperty(b, "WorkspaceFoldersRequest", {
    enumerable: !0,
    get: function () {
      return rg.WorkspaceFoldersRequest;
    },
  });
  Object.defineProperty(b, "DidChangeWorkspaceFoldersNotification", {
    enumerable: !0,
    get: function () {
      return rg.DidChangeWorkspaceFoldersNotification;
    },
  });
  var yb = kf();
  Object.defineProperty(b, "ConfigurationRequest", {
    enumerable: !0,
    get: function () {
      return yb.ConfigurationRequest;
    },
  });
  var ig = Of();
  Object.defineProperty(b, "DocumentColorRequest", {
    enumerable: !0,
    get: function () {
      return ig.DocumentColorRequest;
    },
  });
  Object.defineProperty(b, "ColorPresentationRequest", {
    enumerable: !0,
    get: function () {
      return ig.ColorPresentationRequest;
    },
  });
  var sg = Nf();
  Object.defineProperty(b, "FoldingRangeRequest", {
    enumerable: !0,
    get: function () {
      return sg.FoldingRangeRequest;
    },
  });
  Object.defineProperty(b, "FoldingRangeRefreshRequest", {
    enumerable: !0,
    get: function () {
      return sg.FoldingRangeRefreshRequest;
    },
  });
  var vb = Af();
  Object.defineProperty(b, "DeclarationRequest", {
    enumerable: !0,
    get: function () {
      return vb.DeclarationRequest;
    },
  });
  var bb = Hf();
  Object.defineProperty(b, "SelectionRangeRequest", {
    enumerable: !0,
    get: function () {
      return bb.SelectionRangeRequest;
    },
  });
  var wc = zf();
  Object.defineProperty(b, "WorkDoneProgress", {
    enumerable: !0,
    get: function () {
      return wc.WorkDoneProgress;
    },
  });
  Object.defineProperty(b, "WorkDoneProgressCreateRequest", {
    enumerable: !0,
    get: function () {
      return wc.WorkDoneProgressCreateRequest;
    },
  });
  Object.defineProperty(b, "WorkDoneProgressCancelNotification", {
    enumerable: !0,
    get: function () {
      return wc.WorkDoneProgressCancelNotification;
    },
  });
  var Cc = Xf();
  Object.defineProperty(b, "CallHierarchyIncomingCallsRequest", {
    enumerable: !0,
    get: function () {
      return Cc.CallHierarchyIncomingCallsRequest;
    },
  });
  Object.defineProperty(b, "CallHierarchyOutgoingCallsRequest", {
    enumerable: !0,
    get: function () {
      return Cc.CallHierarchyOutgoingCallsRequest;
    },
  });
  Object.defineProperty(b, "CallHierarchyPrepareRequest", {
    enumerable: !0,
    get: function () {
      return Cc.CallHierarchyPrepareRequest;
    },
  });
  var ni = th();
  Object.defineProperty(b, "TokenFormat", {
    enumerable: !0,
    get: function () {
      return ni.TokenFormat;
    },
  });
  Object.defineProperty(b, "SemanticTokensRequest", {
    enumerable: !0,
    get: function () {
      return ni.SemanticTokensRequest;
    },
  });
  Object.defineProperty(b, "SemanticTokensDeltaRequest", {
    enumerable: !0,
    get: function () {
      return ni.SemanticTokensDeltaRequest;
    },
  });
  Object.defineProperty(b, "SemanticTokensRangeRequest", {
    enumerable: !0,
    get: function () {
      return ni.SemanticTokensRangeRequest;
    },
  });
  Object.defineProperty(b, "SemanticTokensRefreshRequest", {
    enumerable: !0,
    get: function () {
      return ni.SemanticTokensRefreshRequest;
    },
  });
  Object.defineProperty(b, "SemanticTokensRegistrationType", {
    enumerable: !0,
    get: function () {
      return ni.SemanticTokensRegistrationType;
    },
  });
  var _b = ih();
  Object.defineProperty(b, "ShowDocumentRequest", {
    enumerable: !0,
    get: function () {
      return _b.ShowDocumentRequest;
    },
  });
  var wb = ah();
  Object.defineProperty(b, "LinkedEditingRangeRequest", {
    enumerable: !0,
    get: function () {
      return wb.LinkedEditingRangeRequest;
    },
  });
  var wr = gh();
  Object.defineProperty(b, "FileOperationPatternKind", {
    enumerable: !0,
    get: function () {
      return wr.FileOperationPatternKind;
    },
  });
  Object.defineProperty(b, "DidCreateFilesNotification", {
    enumerable: !0,
    get: function () {
      return wr.DidCreateFilesNotification;
    },
  });
  Object.defineProperty(b, "WillCreateFilesRequest", {
    enumerable: !0,
    get: function () {
      return wr.WillCreateFilesRequest;
    },
  });
  Object.defineProperty(b, "DidRenameFilesNotification", {
    enumerable: !0,
    get: function () {
      return wr.DidRenameFilesNotification;
    },
  });
  Object.defineProperty(b, "WillRenameFilesRequest", {
    enumerable: !0,
    get: function () {
      return wr.WillRenameFilesRequest;
    },
  });
  Object.defineProperty(b, "DidDeleteFilesNotification", {
    enumerable: !0,
    get: function () {
      return wr.DidDeleteFilesNotification;
    },
  });
  Object.defineProperty(b, "WillDeleteFilesRequest", {
    enumerable: !0,
    get: function () {
      return wr.WillDeleteFilesRequest;
    },
  });
  var Dc = _h();
  Object.defineProperty(b, "UniquenessLevel", {
    enumerable: !0,
    get: function () {
      return Dc.UniquenessLevel;
    },
  });
  Object.defineProperty(b, "MonikerKind", {
    enumerable: !0,
    get: function () {
      return Dc.MonikerKind;
    },
  });
  Object.defineProperty(b, "MonikerRequest", {
    enumerable: !0,
    get: function () {
      return Dc.MonikerRequest;
    },
  });
  var Rc = Rh();
  Object.defineProperty(b, "TypeHierarchyPrepareRequest", {
    enumerable: !0,
    get: function () {
      return Rc.TypeHierarchyPrepareRequest;
    },
  });
  Object.defineProperty(b, "TypeHierarchySubtypesRequest", {
    enumerable: !0,
    get: function () {
      return Rc.TypeHierarchySubtypesRequest;
    },
  });
  Object.defineProperty(b, "TypeHierarchySupertypesRequest", {
    enumerable: !0,
    get: function () {
      return Rc.TypeHierarchySupertypesRequest;
    },
  });
  var og = Ph();
  Object.defineProperty(b, "InlineValueRequest", {
    enumerable: !0,
    get: function () {
      return og.InlineValueRequest;
    },
  });
  Object.defineProperty(b, "InlineValueRefreshRequest", {
    enumerable: !0,
    get: function () {
      return og.InlineValueRefreshRequest;
    },
  });
  var Sc = xh();
  Object.defineProperty(b, "InlayHintRequest", {
    enumerable: !0,
    get: function () {
      return Sc.InlayHintRequest;
    },
  });
  Object.defineProperty(b, "InlayHintResolveRequest", {
    enumerable: !0,
    get: function () {
      return Sc.InlayHintResolveRequest;
    },
  });
  Object.defineProperty(b, "InlayHintRefreshRequest", {
    enumerable: !0,
    get: function () {
      return Sc.InlayHintRefreshRequest;
    },
  });
  var qi = Ah();
  Object.defineProperty(b, "DiagnosticServerCancellationData", {
    enumerable: !0,
    get: function () {
      return qi.DiagnosticServerCancellationData;
    },
  });
  Object.defineProperty(b, "DocumentDiagnosticReportKind", {
    enumerable: !0,
    get: function () {
      return qi.DocumentDiagnosticReportKind;
    },
  });
  Object.defineProperty(b, "DocumentDiagnosticRequest", {
    enumerable: !0,
    get: function () {
      return qi.DocumentDiagnosticRequest;
    },
  });
  Object.defineProperty(b, "WorkspaceDiagnosticRequest", {
    enumerable: !0,
    get: function () {
      return qi.WorkspaceDiagnosticRequest;
    },
  });
  Object.defineProperty(b, "DiagnosticRefreshRequest", {
    enumerable: !0,
    get: function () {
      return qi.DiagnosticRefreshRequest;
    },
  });
  var En = zh();
  Object.defineProperty(b, "NotebookCellKind", {
    enumerable: !0,
    get: function () {
      return En.NotebookCellKind;
    },
  });
  Object.defineProperty(b, "ExecutionSummary", {
    enumerable: !0,
    get: function () {
      return En.ExecutionSummary;
    },
  });
  Object.defineProperty(b, "NotebookCell", {
    enumerable: !0,
    get: function () {
      return En.NotebookCell;
    },
  });
  Object.defineProperty(b, "NotebookDocument", {
    enumerable: !0,
    get: function () {
      return En.NotebookDocument;
    },
  });
  Object.defineProperty(b, "NotebookDocumentSyncRegistrationType", {
    enumerable: !0,
    get: function () {
      return En.NotebookDocumentSyncRegistrationType;
    },
  });
  Object.defineProperty(b, "DidOpenNotebookDocumentNotification", {
    enumerable: !0,
    get: function () {
      return En.DidOpenNotebookDocumentNotification;
    },
  });
  Object.defineProperty(b, "NotebookCellArrayChange", {
    enumerable: !0,
    get: function () {
      return En.NotebookCellArrayChange;
    },
  });
  Object.defineProperty(b, "DidChangeNotebookDocumentNotification", {
    enumerable: !0,
    get: function () {
      return En.DidChangeNotebookDocumentNotification;
    },
  });
  Object.defineProperty(b, "DidSaveNotebookDocumentNotification", {
    enumerable: !0,
    get: function () {
      return En.DidSaveNotebookDocumentNotification;
    },
  });
  Object.defineProperty(b, "DidCloseNotebookDocumentNotification", {
    enumerable: !0,
    get: function () {
      return En.DidCloseNotebookDocumentNotification;
    },
  });
  var Cb = Gh();
  Object.defineProperty(b, "InlineCompletionRequest", {
    enumerable: !0,
    get: function () {
      return Cb.InlineCompletionRequest;
    },
  });
  var yc;
  (function (t) {
    function e(n) {
      let r = n;
      return (
        ut.string(r) ||
        ut.string(r.language) ||
        ut.string(r.scheme) ||
        ut.string(r.pattern)
      );
    }
    t.is = e;
  })(yc || (b.TextDocumentFilter = yc = {}));
  var vc;
  (function (t) {
    function e(n) {
      let r = n;
      return (
        ut.objectLiteral(r) &&
        (ut.string(r.notebookType) ||
          ut.string(r.scheme) ||
          ut.string(r.pattern))
      );
    }
    t.is = e;
  })(vc || (b.NotebookDocumentFilter = vc = {}));
  var bc;
  (function (t) {
    function e(n) {
      let r = n;
      return (
        ut.objectLiteral(r) &&
        (ut.string(r.notebook) || vc.is(r.notebook)) &&
        (r.language === void 0 || ut.string(r.language))
      );
    }
    t.is = e;
  })(bc || (b.NotebookCellTextDocumentFilter = bc = {}));
  var _c;
  (function (t) {
    function e(n) {
      if (!Array.isArray(n)) return !1;
      for (let r of n) if (!ut.string(r) && !yc.is(r) && !bc.is(r)) return !1;
      return !0;
    }
    t.is = e;
  })(_c || (b.DocumentSelector = _c = {}));
  var Jh;
  (function (t) {
    (t.method = "client/registerCapability"),
      (t.messageDirection = H.MessageDirection.serverToClient),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Jh || (b.RegistrationRequest = Jh = {}));
  var Qh;
  (function (t) {
    (t.method = "client/unregisterCapability"),
      (t.messageDirection = H.MessageDirection.serverToClient),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Qh || (b.UnregistrationRequest = Qh = {}));
  var Yh;
  (function (t) {
    (t.Create = "create"), (t.Rename = "rename"), (t.Delete = "delete");
  })(Yh || (b.ResourceOperationKind = Yh = {}));
  var Zh;
  (function (t) {
    (t.Abort = "abort"),
      (t.Transactional = "transactional"),
      (t.TextOnlyTransactional = "textOnlyTransactional"),
      (t.Undo = "undo");
  })(Zh || (b.FailureHandlingKind = Zh = {}));
  var ep;
  (function (t) {
    (t.UTF8 = "utf-8"), (t.UTF16 = "utf-16"), (t.UTF32 = "utf-32");
  })(ep || (b.PositionEncodingKind = ep = {}));
  var tp;
  (function (t) {
    function e(n) {
      let r = n;
      return r && ut.string(r.id) && r.id.length > 0;
    }
    t.hasId = e;
  })(tp || (b.StaticRegistrationOptions = tp = {}));
  var np;
  (function (t) {
    function e(n) {
      let r = n;
      return r && (r.documentSelector === null || _c.is(r.documentSelector));
    }
    t.is = e;
  })(np || (b.TextDocumentRegistrationOptions = np = {}));
  var rp;
  (function (t) {
    function e(r) {
      let i = r;
      return (
        ut.objectLiteral(i) &&
        (i.workDoneProgress === void 0 || ut.boolean(i.workDoneProgress))
      );
    }
    t.is = e;
    function n(r) {
      let i = r;
      return i && ut.boolean(i.workDoneProgress);
    }
    t.hasWorkDoneProgress = n;
  })(rp || (b.WorkDoneProgressOptions = rp = {}));
  var ip;
  (function (t) {
    (t.method = "initialize"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(ip || (b.InitializeRequest = ip = {}));
  var sp;
  (function (t) {
    t.unknownProtocolVersion = 1;
  })(sp || (b.InitializeErrorCodes = sp = {}));
  var op;
  (function (t) {
    (t.method = "initialized"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolNotificationType(t.method));
  })(op || (b.InitializedNotification = op = {}));
  var ap;
  (function (t) {
    (t.method = "shutdown"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType0(t.method));
  })(ap || (b.ShutdownRequest = ap = {}));
  var cp;
  (function (t) {
    (t.method = "exit"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolNotificationType0(t.method));
  })(cp || (b.ExitNotification = cp = {}));
  var up;
  (function (t) {
    (t.method = "workspace/didChangeConfiguration"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolNotificationType(t.method));
  })(up || (b.DidChangeConfigurationNotification = up = {}));
  var lp;
  (function (t) {
    (t.Error = 1), (t.Warning = 2), (t.Info = 3), (t.Log = 4), (t.Debug = 5);
  })(lp || (b.MessageType = lp = {}));
  var dp;
  (function (t) {
    (t.method = "window/showMessage"),
      (t.messageDirection = H.MessageDirection.serverToClient),
      (t.type = new H.ProtocolNotificationType(t.method));
  })(dp || (b.ShowMessageNotification = dp = {}));
  var fp;
  (function (t) {
    (t.method = "window/showMessageRequest"),
      (t.messageDirection = H.MessageDirection.serverToClient),
      (t.type = new H.ProtocolRequestType(t.method));
  })(fp || (b.ShowMessageRequest = fp = {}));
  var hp;
  (function (t) {
    (t.method = "window/logMessage"),
      (t.messageDirection = H.MessageDirection.serverToClient),
      (t.type = new H.ProtocolNotificationType(t.method));
  })(hp || (b.LogMessageNotification = hp = {}));
  var pp;
  (function (t) {
    (t.method = "telemetry/event"),
      (t.messageDirection = H.MessageDirection.serverToClient),
      (t.type = new H.ProtocolNotificationType(t.method));
  })(pp || (b.TelemetryEventNotification = pp = {}));
  var gp;
  (function (t) {
    (t.None = 0), (t.Full = 1), (t.Incremental = 2);
  })(gp || (b.TextDocumentSyncKind = gp = {}));
  var mp;
  (function (t) {
    (t.method = "textDocument/didOpen"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolNotificationType(t.method));
  })(mp || (b.DidOpenTextDocumentNotification = mp = {}));
  var yp;
  (function (t) {
    function e(r) {
      let i = r;
      return (
        i != null &&
        typeof i.text == "string" &&
        i.range !== void 0 &&
        (i.rangeLength === void 0 || typeof i.rangeLength == "number")
      );
    }
    t.isIncremental = e;
    function n(r) {
      let i = r;
      return (
        i != null &&
        typeof i.text == "string" &&
        i.range === void 0 &&
        i.rangeLength === void 0
      );
    }
    t.isFull = n;
  })(yp || (b.TextDocumentContentChangeEvent = yp = {}));
  var vp;
  (function (t) {
    (t.method = "textDocument/didChange"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolNotificationType(t.method));
  })(vp || (b.DidChangeTextDocumentNotification = vp = {}));
  var bp;
  (function (t) {
    (t.method = "textDocument/didClose"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolNotificationType(t.method));
  })(bp || (b.DidCloseTextDocumentNotification = bp = {}));
  var _p;
  (function (t) {
    (t.method = "textDocument/didSave"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolNotificationType(t.method));
  })(_p || (b.DidSaveTextDocumentNotification = _p = {}));
  var wp;
  (function (t) {
    (t.Manual = 1), (t.AfterDelay = 2), (t.FocusOut = 3);
  })(wp || (b.TextDocumentSaveReason = wp = {}));
  var Cp;
  (function (t) {
    (t.method = "textDocument/willSave"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolNotificationType(t.method));
  })(Cp || (b.WillSaveTextDocumentNotification = Cp = {}));
  var Dp;
  (function (t) {
    (t.method = "textDocument/willSaveWaitUntil"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Dp || (b.WillSaveTextDocumentWaitUntilRequest = Dp = {}));
  var Rp;
  (function (t) {
    (t.method = "workspace/didChangeWatchedFiles"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolNotificationType(t.method));
  })(Rp || (b.DidChangeWatchedFilesNotification = Rp = {}));
  var Sp;
  (function (t) {
    (t.Created = 1), (t.Changed = 2), (t.Deleted = 3);
  })(Sp || (b.FileChangeType = Sp = {}));
  var Tp;
  (function (t) {
    function e(n) {
      let r = n;
      return (
        ut.objectLiteral(r) &&
        (Xh.URI.is(r.baseUri) || Xh.WorkspaceFolder.is(r.baseUri)) &&
        ut.string(r.pattern)
      );
    }
    t.is = e;
  })(Tp || (b.RelativePattern = Tp = {}));
  var Pp;
  (function (t) {
    (t.Create = 1), (t.Change = 2), (t.Delete = 4);
  })(Pp || (b.WatchKind = Pp = {}));
  var Ep;
  (function (t) {
    (t.method = "textDocument/publishDiagnostics"),
      (t.messageDirection = H.MessageDirection.serverToClient),
      (t.type = new H.ProtocolNotificationType(t.method));
  })(Ep || (b.PublishDiagnosticsNotification = Ep = {}));
  var kp;
  (function (t) {
    (t.Invoked = 1),
      (t.TriggerCharacter = 2),
      (t.TriggerForIncompleteCompletions = 3);
  })(kp || (b.CompletionTriggerKind = kp = {}));
  var qp;
  (function (t) {
    (t.method = "textDocument/completion"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(qp || (b.CompletionRequest = qp = {}));
  var xp;
  (function (t) {
    (t.method = "completionItem/resolve"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(xp || (b.CompletionResolveRequest = xp = {}));
  var Op;
  (function (t) {
    (t.method = "textDocument/hover"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Op || (b.HoverRequest = Op = {}));
  var Ip;
  (function (t) {
    (t.Invoked = 1), (t.TriggerCharacter = 2), (t.ContentChange = 3);
  })(Ip || (b.SignatureHelpTriggerKind = Ip = {}));
  var Fp;
  (function (t) {
    (t.method = "textDocument/signatureHelp"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Fp || (b.SignatureHelpRequest = Fp = {}));
  var Np;
  (function (t) {
    (t.method = "textDocument/definition"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Np || (b.DefinitionRequest = Np = {}));
  var Lp;
  (function (t) {
    (t.method = "textDocument/references"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Lp || (b.ReferencesRequest = Lp = {}));
  var Mp;
  (function (t) {
    (t.method = "textDocument/documentHighlight"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Mp || (b.DocumentHighlightRequest = Mp = {}));
  var Ap;
  (function (t) {
    (t.method = "textDocument/documentSymbol"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Ap || (b.DocumentSymbolRequest = Ap = {}));
  var jp;
  (function (t) {
    (t.method = "textDocument/codeAction"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(jp || (b.CodeActionRequest = jp = {}));
  var $p;
  (function (t) {
    (t.method = "codeAction/resolve"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })($p || (b.CodeActionResolveRequest = $p = {}));
  var Hp;
  (function (t) {
    (t.method = "workspace/symbol"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Hp || (b.WorkspaceSymbolRequest = Hp = {}));
  var Up;
  (function (t) {
    (t.method = "workspaceSymbol/resolve"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Up || (b.WorkspaceSymbolResolveRequest = Up = {}));
  var Wp;
  (function (t) {
    (t.method = "textDocument/codeLens"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Wp || (b.CodeLensRequest = Wp = {}));
  var Kp;
  (function (t) {
    (t.method = "codeLens/resolve"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Kp || (b.CodeLensResolveRequest = Kp = {}));
  var zp;
  (function (t) {
    (t.method = "workspace/codeLens/refresh"),
      (t.messageDirection = H.MessageDirection.serverToClient),
      (t.type = new H.ProtocolRequestType0(t.method));
  })(zp || (b.CodeLensRefreshRequest = zp = {}));
  var Bp;
  (function (t) {
    (t.method = "textDocument/documentLink"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Bp || (b.DocumentLinkRequest = Bp = {}));
  var Vp;
  (function (t) {
    (t.method = "documentLink/resolve"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Vp || (b.DocumentLinkResolveRequest = Vp = {}));
  var Gp;
  (function (t) {
    (t.method = "textDocument/formatting"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Gp || (b.DocumentFormattingRequest = Gp = {}));
  var Xp;
  (function (t) {
    (t.method = "textDocument/rangeFormatting"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Xp || (b.DocumentRangeFormattingRequest = Xp = {}));
  var Jp;
  (function (t) {
    (t.method = "textDocument/rangesFormatting"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Jp || (b.DocumentRangesFormattingRequest = Jp = {}));
  var Qp;
  (function (t) {
    (t.method = "textDocument/onTypeFormatting"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Qp || (b.DocumentOnTypeFormattingRequest = Qp = {}));
  var Yp;
  (function (t) {
    t.Identifier = 1;
  })(Yp || (b.PrepareSupportDefaultBehavior = Yp = {}));
  var Zp;
  (function (t) {
    (t.method = "textDocument/rename"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(Zp || (b.RenameRequest = Zp = {}));
  var eg;
  (function (t) {
    (t.method = "textDocument/prepareRename"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(eg || (b.PrepareRenameRequest = eg = {}));
  var tg;
  (function (t) {
    (t.method = "workspace/executeCommand"),
      (t.messageDirection = H.MessageDirection.clientToServer),
      (t.type = new H.ProtocolRequestType(t.method));
  })(tg || (b.ExecuteCommandRequest = tg = {}));
  var ng;
  (function (t) {
    (t.method = "workspace/applyEdit"),
      (t.messageDirection = H.MessageDirection.serverToClient),
      (t.type = new H.ProtocolRequestType("workspace/applyEdit"));
  })(ng || (b.ApplyWorkspaceEditRequest = ng = {}));
});
var ug = x((Us) => {
  "use strict";
  Object.defineProperty(Us, "__esModule", { value: !0 });
  Us.createProtocolConnection = void 0;
  var cg = _r();
  function Db(t, e, n, r) {
    return (
      cg.ConnectionStrategy.is(r) && (r = { connectionStrategy: r }),
      (0, cg.createMessageConnection)(t, e, n, r)
    );
  }
  Us.createProtocolConnection = Db;
});
var dg = x((Lt) => {
  "use strict";
  var Rb =
      (Lt && Lt.__createBinding) ||
      (Object.create
        ? function (t, e, n, r) {
            r === void 0 && (r = n);
            var i = Object.getOwnPropertyDescriptor(e, n);
            (!i ||
              ("get" in i ? !e.__esModule : i.writable || i.configurable)) &&
              (i = {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              }),
              Object.defineProperty(t, r, i);
          }
        : function (t, e, n, r) {
            r === void 0 && (r = n), (t[r] = e[n]);
          }),
    Ws =
      (Lt && Lt.__exportStar) ||
      function (t, e) {
        for (var n in t)
          n !== "default" &&
            !Object.prototype.hasOwnProperty.call(e, n) &&
            Rb(e, t, n);
      };
  Object.defineProperty(Lt, "__esModule", { value: !0 });
  Lt.LSPErrorCodes = Lt.createProtocolConnection = void 0;
  Ws(_r(), Lt);
  Ws(Ts(), Lt);
  Ws($e(), Lt);
  Ws(ag(), Lt);
  var Sb = ug();
  Object.defineProperty(Lt, "createProtocolConnection", {
    enumerable: !0,
    get: function () {
      return Sb.createProtocolConnection;
    },
  });
  var lg;
  (function (t) {
    (t.lspReservedErrorRangeStart = -32899),
      (t.RequestFailed = -32803),
      (t.ServerCancelled = -32802),
      (t.ContentModified = -32801),
      (t.RequestCancelled = -32800),
      (t.lspReservedErrorRangeEnd = -32800);
  })(lg || (Lt.LSPErrorCodes = lg = {}));
});
var re = x((kn) => {
  "use strict";
  var Tb =
      (kn && kn.__createBinding) ||
      (Object.create
        ? function (t, e, n, r) {
            r === void 0 && (r = n);
            var i = Object.getOwnPropertyDescriptor(e, n);
            (!i ||
              ("get" in i ? !e.__esModule : i.writable || i.configurable)) &&
              (i = {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              }),
              Object.defineProperty(t, r, i);
          }
        : function (t, e, n, r) {
            r === void 0 && (r = n), (t[r] = e[n]);
          }),
    fg =
      (kn && kn.__exportStar) ||
      function (t, e) {
        for (var n in t)
          n !== "default" &&
            !Object.prototype.hasOwnProperty.call(e, n) &&
            Tb(e, t, n);
      };
  Object.defineProperty(kn, "__esModule", { value: !0 });
  kn.createProtocolConnection = void 0;
  var Pb = uc();
  fg(uc(), kn);
  fg(dg(), kn);
  function Eb(t, e, n, r) {
    return (0, Pb.createMessageConnection)(t, e, n, r);
  }
  kn.createProtocolConnection = Eb;
});
var Ks = x((Ct) => {
  "use strict";
  Object.defineProperty(Ct, "__esModule", { value: !0 });
  Ct.forEach =
    Ct.mapAsync =
    Ct.map =
    Ct.clearTestMode =
    Ct.setTestMode =
    Ct.Semaphore =
    Ct.Delayer =
      void 0;
  var Oi = re(),
    Tc = class {
      constructor(e) {
        (this.defaultDelay = e),
          (this.timeout = void 0),
          (this.completionPromise = void 0),
          (this.onSuccess = void 0),
          (this.task = void 0);
      }
      trigger(e, n = this.defaultDelay) {
        return (
          (this.task = e),
          n >= 0 && this.cancelTimeout(),
          this.completionPromise ||
            (this.completionPromise = new Promise((r) => {
              this.onSuccess = r;
            }).then(() => {
              (this.completionPromise = void 0), (this.onSuccess = void 0);
              var r = this.task();
              return (this.task = void 0), r;
            })),
          (n >= 0 || this.timeout === void 0) &&
            (this.timeout = (0, Oi.RAL)().timer.setTimeout(
              () => {
                (this.timeout = void 0), this.onSuccess(void 0);
              },
              n >= 0 ? n : this.defaultDelay
            )),
          this.completionPromise
        );
      }
      forceDelivery() {
        if (!this.completionPromise) return;
        this.cancelTimeout();
        let e = this.task();
        return (
          (this.completionPromise = void 0),
          (this.onSuccess = void 0),
          (this.task = void 0),
          e
        );
      }
      isTriggered() {
        return this.timeout !== void 0;
      }
      cancel() {
        this.cancelTimeout(), (this.completionPromise = void 0);
      }
      cancelTimeout() {
        this.timeout !== void 0 &&
          (this.timeout.dispose(), (this.timeout = void 0));
      }
    };
  Ct.Delayer = Tc;
  var Pc = class {
    constructor(e = 1) {
      if (e <= 0) throw new Error("Capacity must be greater than 0");
      (this._capacity = e), (this._active = 0), (this._waiting = []);
    }
    lock(e) {
      return new Promise((n, r) => {
        this._waiting.push({ thunk: e, resolve: n, reject: r }), this.runNext();
      });
    }
    get active() {
      return this._active;
    }
    runNext() {
      this._waiting.length === 0 ||
        this._active === this._capacity ||
        (0, Oi.RAL)().timer.setImmediate(() => this.doRunNext());
    }
    doRunNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) return;
      let e = this._waiting.shift();
      if ((this._active++, this._active > this._capacity))
        throw new Error("To many thunks active");
      try {
        let n = e.thunk();
        n instanceof Promise
          ? n.then(
              (r) => {
                this._active--, e.resolve(r), this.runNext();
              },
              (r) => {
                this._active--, e.reject(r), this.runNext();
              }
            )
          : (this._active--, e.resolve(n), this.runNext());
      } catch (n) {
        this._active--, e.reject(n), this.runNext();
      }
    }
  };
  Ct.Semaphore = Pc;
  var Ec = !1;
  function kb() {
    Ec = !0;
  }
  Ct.setTestMode = kb;
  function qb() {
    Ec = !1;
  }
  Ct.clearTestMode = qb;
  var hg = 15,
    xi = class {
      constructor(e = hg) {
        (this.yieldAfter = Ec === !0 ? Math.max(e, 2) : Math.max(e, hg)),
          (this.startTime = Date.now()),
          (this.counter = 0),
          (this.total = 0),
          (this.counterInterval = 1);
      }
      start() {
        (this.counter = 0),
          (this.total = 0),
          (this.counterInterval = 1),
          (this.startTime = Date.now());
      }
      shouldYield() {
        if (++this.counter >= this.counterInterval) {
          let e = Date.now() - this.startTime,
            n = Math.max(0, this.yieldAfter - e);
          if (
            ((this.total += this.counter),
            (this.counter = 0),
            e >= this.yieldAfter || n <= 1)
          )
            return (this.counterInterval = 1), (this.total = 0), !0;
          switch (e) {
            case 0:
            case 1:
              this.counterInterval = this.total * 2;
              break;
          }
        }
        return !1;
      }
    };
  async function xb(t, e, n, r) {
    if (t.length === 0) return [];
    let i = new Array(t.length),
      s = new xi(r?.yieldAfter);
    function o(u) {
      s.start();
      for (let h = u; h < t.length; h++)
        if (((i[h] = e(t[h])), s.shouldYield()))
          return r?.yieldCallback && r.yieldCallback(), h + 1;
      return -1;
    }
    let a = o(0);
    for (; a !== -1 && !(n !== void 0 && n.isCancellationRequested); )
      a = await new Promise((u) => {
        (0, Oi.RAL)().timer.setImmediate(() => {
          u(o(a));
        });
      });
    return i;
  }
  Ct.map = xb;
  async function Ob(t, e, n, r) {
    if (t.length === 0) return [];
    let i = new Array(t.length),
      s = new xi(r?.yieldAfter);
    async function o(u) {
      s.start();
      for (let h = u; h < t.length; h++)
        if (((i[h] = await e(t[h], n)), s.shouldYield()))
          return r?.yieldCallback && r.yieldCallback(), h + 1;
      return -1;
    }
    let a = await o(0);
    for (; a !== -1 && !(n !== void 0 && n.isCancellationRequested); )
      a = await new Promise((u) => {
        (0, Oi.RAL)().timer.setImmediate(() => {
          u(o(a));
        });
      });
    return i;
  }
  Ct.mapAsync = Ob;
  async function Ib(t, e, n, r) {
    if (t.length === 0) return;
    let i = new xi(r?.yieldAfter);
    function s(a) {
      i.start();
      for (let u = a; u < t.length; u++)
        if ((e(t[u]), i.shouldYield()))
          return r?.yieldCallback && r.yieldCallback(), u + 1;
      return -1;
    }
    let o = s(0);
    for (; o !== -1 && !(n !== void 0 && n.isCancellationRequested); )
      o = await new Promise((a) => {
        (0, Oi.RAL)().timer.setImmediate(() => {
          a(s(o));
        });
      });
  }
  Ct.forEach = Ib;
});
var xc = x((qc) => {
  "use strict";
  Object.defineProperty(qc, "__esModule", { value: !0 });
  var Fb = require("vscode"),
    kc = class extends Fb.CompletionItem {
      constructor(e) {
        super(e);
      }
    };
  qc.default = kc;
});
var Fc = x((Ic) => {
  "use strict";
  Object.defineProperty(Ic, "__esModule", { value: !0 });
  var Nb = require("vscode"),
    Oc = class extends Nb.CodeLens {
      constructor(e) {
        super(e);
      }
    };
  Ic.default = Oc;
});
var Mc = x((Lc) => {
  "use strict";
  Object.defineProperty(Lc, "__esModule", { value: !0 });
  var Lb = require("vscode"),
    Nc = class extends Lb.DocumentLink {
      constructor(e, n) {
        super(e, n);
      }
    };
  Lc.default = Nc;
});
var $c = x((jc) => {
  "use strict";
  Object.defineProperty(jc, "__esModule", { value: !0 });
  var Mb = require("vscode"),
    Ac = class extends Mb.CodeAction {
      constructor(e, n) {
        super(e), (this.data = n);
      }
    };
  jc.default = Ac;
});
var Wc = x((ri) => {
  "use strict";
  Object.defineProperty(ri, "__esModule", { value: !0 });
  ri.ProtocolDiagnostic = ri.DiagnosticCode = void 0;
  var Ab = require("vscode"),
    Hc = Yt(),
    pg;
  (function (t) {
    function e(n) {
      let r = n;
      return (
        r != null &&
        (Hc.number(r.value) || Hc.string(r.value)) &&
        Hc.string(r.target)
      );
    }
    t.is = e;
  })(pg || (ri.DiagnosticCode = pg = {}));
  var Uc = class extends Ab.Diagnostic {
    constructor(e, n, r, i) {
      super(e, n, r), (this.data = i), (this.hasDiagnosticCode = !1);
    }
  };
  ri.ProtocolDiagnostic = Uc;
});
var Bc = x((zc) => {
  "use strict";
  Object.defineProperty(zc, "__esModule", { value: !0 });
  var jb = require("vscode"),
    Kc = class extends jb.CallHierarchyItem {
      constructor(e, n, r, i, s, o, a) {
        super(e, n, r, i, s, o), a !== void 0 && (this.data = a);
      }
    };
  zc.default = Kc;
});
var Xc = x((Gc) => {
  "use strict";
  Object.defineProperty(Gc, "__esModule", { value: !0 });
  var $b = require("vscode"),
    Vc = class extends $b.TypeHierarchyItem {
      constructor(e, n, r, i, s, o, a) {
        super(e, n, r, i, s, o), a !== void 0 && (this.data = a);
      }
    };
  Gc.default = Vc;
});
var Yc = x((Qc) => {
  "use strict";
  Object.defineProperty(Qc, "__esModule", { value: !0 });
  var zs = require("vscode"),
    Jc = class extends zs.SymbolInformation {
      constructor(e, n, r, i, s) {
        let o = !(i instanceof zs.Uri);
        super(e, n, r, o ? i : new zs.Location(i, new zs.Range(0, 0, 0, 0))),
          (this.hasRange = o),
          s !== void 0 && (this.data = s);
      }
    };
  Qc.default = Jc;
});
var tu = x((eu) => {
  "use strict";
  Object.defineProperty(eu, "__esModule", { value: !0 });
  var Hb = require("vscode"),
    Zc = class extends Hb.InlayHint {
      constructor(e, n, r) {
        super(e, n, r);
      }
    };
  eu.default = Zc;
});
var vg = x((Bs) => {
  "use strict";
  Object.defineProperty(Bs, "__esModule", { value: !0 });
  Bs.createConverter = void 0;
  var rt = require("vscode"),
    ie = re(),
    Cr = Yt(),
    gg = Ks(),
    Ub = xc(),
    Wb = Fc(),
    Kb = Mc(),
    mg = $c(),
    yg = Wc(),
    zb = Bc(),
    Bb = Xc(),
    Vb = Yc(),
    Gb = tu(),
    nu;
  (function (t) {
    function e(n) {
      let r = n;
      return r && !!r.inserting && !!r.replacing;
    }
    t.is = e;
  })(nu || (nu = {}));
  function Xb(t) {
    let n = t || ((d) => d.toString());
    function r(d) {
      return n(d);
    }
    function i(d) {
      return { uri: n(d.uri) };
    }
    function s(d) {
      return {
        uri: n(d.uri),
        languageId: d.languageId,
        version: d.version,
        text: d.getText(),
      };
    }
    function o(d) {
      return { uri: n(d.uri), version: d.version };
    }
    function a(d) {
      return { textDocument: s(d) };
    }
    function u(d) {
      let k = d;
      return !!k.document && !!k.contentChanges;
    }
    function h(d) {
      let k = d;
      return !!k.uri && !!k.version;
    }
    function p(d, k, z) {
      if (h(d))
        return {
          textDocument: { uri: n(d.uri), version: d.version },
          contentChanges: [{ text: d.getText() }],
        };
      if (u(d)) {
        let Ce = k,
          S = z;
        return {
          textDocument: { uri: n(Ce), version: S },
          contentChanges: d.contentChanges.map((w) => {
            let C = w.range;
            return {
              range: {
                start: { line: C.start.line, character: C.start.character },
                end: { line: C.end.line, character: C.end.character },
              },
              rangeLength: w.rangeLength,
              text: w.text,
            };
          }),
        };
      } else throw Error("Unsupported text document change parameter");
    }
    function v(d) {
      return { textDocument: i(d) };
    }
    function m(d, k = !1) {
      let z = { textDocument: i(d) };
      return k && (z.text = d.getText()), z;
    }
    function R(d) {
      switch (d) {
        case rt.TextDocumentSaveReason.Manual:
          return ie.TextDocumentSaveReason.Manual;
        case rt.TextDocumentSaveReason.AfterDelay:
          return ie.TextDocumentSaveReason.AfterDelay;
        case rt.TextDocumentSaveReason.FocusOut:
          return ie.TextDocumentSaveReason.FocusOut;
      }
      return ie.TextDocumentSaveReason.Manual;
    }
    function y(d) {
      return { textDocument: i(d.document), reason: R(d.reason) };
    }
    function P(d) {
      return { files: d.files.map((k) => ({ uri: n(k) })) };
    }
    function q(d) {
      return {
        files: d.files.map((k) => ({
          oldUri: n(k.oldUri),
          newUri: n(k.newUri),
        })),
      };
    }
    function A(d) {
      return { files: d.files.map((k) => ({ uri: n(k) })) };
    }
    function j(d) {
      return { files: d.files.map((k) => ({ uri: n(k) })) };
    }
    function E(d) {
      return {
        files: d.files.map((k) => ({
          oldUri: n(k.oldUri),
          newUri: n(k.newUri),
        })),
      };
    }
    function I(d) {
      return { files: d.files.map((k) => ({ uri: n(k) })) };
    }
    function N(d, k) {
      return { textDocument: i(d), position: st(k) };
    }
    function Q(d) {
      switch (d) {
        case rt.CompletionTriggerKind.TriggerCharacter:
          return ie.CompletionTriggerKind.TriggerCharacter;
        case rt.CompletionTriggerKind.TriggerForIncompleteCompletions:
          return ie.CompletionTriggerKind.TriggerForIncompleteCompletions;
        default:
          return ie.CompletionTriggerKind.Invoked;
      }
    }
    function X(d, k, z) {
      return {
        textDocument: i(d),
        position: st(k),
        context: {
          triggerKind: Q(z.triggerKind),
          triggerCharacter: z.triggerCharacter,
        },
      };
    }
    function Te(d) {
      switch (d) {
        case rt.SignatureHelpTriggerKind.Invoke:
          return ie.SignatureHelpTriggerKind.Invoked;
        case rt.SignatureHelpTriggerKind.TriggerCharacter:
          return ie.SignatureHelpTriggerKind.TriggerCharacter;
        case rt.SignatureHelpTriggerKind.ContentChange:
          return ie.SignatureHelpTriggerKind.ContentChange;
      }
    }
    function We(d) {
      return { label: d.label };
    }
    function Ze(d) {
      return d.map(We);
    }
    function et(d) {
      return { label: d.label, parameters: Ze(d.parameters) };
    }
    function Y(d) {
      return d.map(et);
    }
    function _e(d) {
      return d === void 0
        ? d
        : {
            signatures: Y(d.signatures),
            activeSignature: d.activeSignature,
            activeParameter: d.activeParameter,
          };
    }
    function yt(d, k, z) {
      return {
        textDocument: i(d),
        position: st(k),
        context: {
          isRetrigger: z.isRetrigger,
          triggerCharacter: z.triggerCharacter,
          triggerKind: Te(z.triggerKind),
          activeSignatureHelp: _e(z.activeSignatureHelp),
        },
      };
    }
    function st(d) {
      return { line: d.line, character: d.character };
    }
    function St(d) {
      return d == null
        ? d
        : {
            line:
              d.line > ie.uinteger.MAX_VALUE ? ie.uinteger.MAX_VALUE : d.line,
            character:
              d.character > ie.uinteger.MAX_VALUE
                ? ie.uinteger.MAX_VALUE
                : d.character,
          };
    }
    function Gn(d, k) {
      return gg.map(d, St, k);
    }
    function vn(d) {
      return d.map(St);
    }
    function Ne(d) {
      return d == null ? d : { start: St(d.start), end: St(d.end) };
    }
    function xt(d) {
      return d.map(Ne);
    }
    function Tt(d) {
      return d == null ? d : ie.Location.create(r(d.uri), Ne(d.range));
    }
    function ht(d) {
      switch (d) {
        case rt.DiagnosticSeverity.Error:
          return ie.DiagnosticSeverity.Error;
        case rt.DiagnosticSeverity.Warning:
          return ie.DiagnosticSeverity.Warning;
        case rt.DiagnosticSeverity.Information:
          return ie.DiagnosticSeverity.Information;
        case rt.DiagnosticSeverity.Hint:
          return ie.DiagnosticSeverity.Hint;
      }
    }
    function Xn(d) {
      if (!d) return;
      let k = [];
      for (let z of d) {
        let Ce = bn(z);
        Ce !== void 0 && k.push(Ce);
      }
      return k.length > 0 ? k : void 0;
    }
    function bn(d) {
      switch (d) {
        case rt.DiagnosticTag.Unnecessary:
          return ie.DiagnosticTag.Unnecessary;
        case rt.DiagnosticTag.Deprecated:
          return ie.DiagnosticTag.Deprecated;
        default:
          return;
      }
    }
    function _n(d) {
      return { message: d.message, location: Tt(d.location) };
    }
    function xn(d) {
      return d.map(_n);
    }
    function Jn(d) {
      if (d != null)
        return Cr.number(d) || Cr.string(d)
          ? d
          : { value: d.value, target: r(d.target) };
    }
    function wn(d) {
      let k = ie.Diagnostic.create(Ne(d.range), d.message),
        z = d instanceof yg.ProtocolDiagnostic ? d : void 0;
      z !== void 0 && z.data !== void 0 && (k.data = z.data);
      let Ce = Jn(d.code);
      return (
        yg.DiagnosticCode.is(Ce)
          ? z !== void 0 && z.hasDiagnosticCode
            ? (k.code = Ce)
            : ((k.code = Ce.value), (k.codeDescription = { href: Ce.target }))
          : (k.code = Ce),
        Cr.number(d.severity) && (k.severity = ht(d.severity)),
        Array.isArray(d.tags) && (k.tags = Xn(d.tags)),
        d.relatedInformation &&
          (k.relatedInformation = xn(d.relatedInformation)),
        d.source && (k.source = d.source),
        k
      );
    }
    function on(d, k) {
      return d == null ? d : gg.map(d, wn, k);
    }
    function an(d) {
      return d == null ? d : d.map(wn);
    }
    function Cn(d, k) {
      switch (d) {
        case "$string":
          return k;
        case ie.MarkupKind.PlainText:
          return { kind: d, value: k };
        case ie.MarkupKind.Markdown:
          return { kind: d, value: k.value };
        default:
          return `Unsupported Markup content received. Kind is: ${d}`;
      }
    }
    function tt(d) {
      switch (d) {
        case rt.CompletionItemTag.Deprecated:
          return ie.CompletionItemTag.Deprecated;
      }
    }
    function On(d) {
      if (d === void 0) return d;
      let k = [];
      for (let z of d) {
        let Ce = tt(z);
        Ce !== void 0 && k.push(Ce);
      }
      return k;
    }
    function cn(d, k) {
      return k !== void 0 ? k : d + 1;
    }
    function Jt(d, k = !1) {
      let z, Ce;
      Cr.string(d.label)
        ? (z = d.label)
        : ((z = d.label.label),
          k &&
            (d.label.detail !== void 0 || d.label.description !== void 0) &&
            (Ce = {
              detail: d.label.detail,
              description: d.label.description,
            }));
      let S = { label: z };
      Ce !== void 0 && (S.labelDetails = Ce);
      let f = d instanceof Ub.default ? d : void 0;
      d.detail && (S.detail = d.detail),
        d.documentation &&
          (!f || f.documentationFormat === "$string"
            ? (S.documentation = d.documentation)
            : (S.documentation = Cn(f.documentationFormat, d.documentation))),
        d.filterText && (S.filterText = d.filterText),
        Qn(S, d),
        Cr.number(d.kind) && (S.kind = cn(d.kind, f && f.originalItemKind)),
        d.sortText && (S.sortText = d.sortText),
        d.additionalTextEdits &&
          (S.additionalTextEdits = Ye(d.additionalTextEdits)),
        d.commitCharacters && (S.commitCharacters = d.commitCharacters.slice()),
        d.command && (S.command = K(d.command)),
        (d.preselect === !0 || d.preselect === !1) &&
          (S.preselect = d.preselect);
      let w = On(d.tags);
      if (f) {
        if (
          (f.data !== void 0 && (S.data = f.data),
          f.deprecated === !0 || f.deprecated === !1)
        ) {
          if (f.deprecated === !0 && w !== void 0 && w.length > 0) {
            let C = w.indexOf(rt.CompletionItemTag.Deprecated);
            C !== -1 && w.splice(C, 1);
          }
          S.deprecated = f.deprecated;
        }
        f.insertTextMode !== void 0 && (S.insertTextMode = f.insertTextMode);
      }
      return (
        w !== void 0 && w.length > 0 && (S.tags = w),
        S.insertTextMode === void 0 &&
          d.keepWhitespace === !0 &&
          (S.insertTextMode = ie.InsertTextMode.adjustIndentation),
        S
      );
    }
    function Qn(d, k) {
      let z = ie.InsertTextFormat.PlainText,
        Ce,
        S;
      k.textEdit
        ? ((Ce = k.textEdit.newText), (S = k.textEdit.range))
        : k.insertText instanceof rt.SnippetString
        ? ((z = ie.InsertTextFormat.Snippet), (Ce = k.insertText.value))
        : (Ce = k.insertText),
        k.range && (S = k.range),
        (d.insertTextFormat = z),
        k.fromEdit && Ce !== void 0 && S !== void 0
          ? (d.textEdit = Qt(Ce, S))
          : (d.insertText = Ce);
    }
    function Qt(d, k) {
      return nu.is(k)
        ? ie.InsertReplaceEdit.create(d, Ne(k.inserting), Ne(k.replacing))
        : { newText: d, range: Ne(k) };
    }
    function Dn(d) {
      return { range: Ne(d.range), newText: d.newText };
    }
    function Ye(d) {
      return d == null ? d : d.map(Dn);
    }
    function vt(d) {
      return d <= rt.SymbolKind.TypeParameter ? d + 1 : ie.SymbolKind.Property;
    }
    function pt(d) {
      return d;
    }
    function Ht(d) {
      return d.map(pt);
    }
    function Ot(d, k, z) {
      return {
        textDocument: i(d),
        position: st(k),
        context: { includeDeclaration: z.includeDeclaration },
      };
    }
    async function Rn(d, k) {
      let z = ie.CodeAction.create(d.title);
      if (
        (d instanceof mg.default && d.data !== void 0 && (z.data = d.data),
        d.kind !== void 0 && (z.kind = _(d.kind)),
        d.diagnostics !== void 0 &&
          (z.diagnostics = await on(d.diagnostics, k)),
        d.edit !== void 0)
      )
        throw new Error(
          "VS Code code actions can only be converted to a protocol code action without an edit."
        );
      return (
        d.command !== void 0 && (z.command = K(d.command)),
        d.isPreferred !== void 0 && (z.isPreferred = d.isPreferred),
        d.disabled !== void 0 && (z.disabled = { reason: d.disabled.reason }),
        z
      );
    }
    function In(d) {
      let k = ie.CodeAction.create(d.title);
      if (
        (d instanceof mg.default && d.data !== void 0 && (k.data = d.data),
        d.kind !== void 0 && (k.kind = _(d.kind)),
        d.diagnostics !== void 0 && (k.diagnostics = an(d.diagnostics)),
        d.edit !== void 0)
      )
        throw new Error(
          "VS Code code actions can only be converted to a protocol code action without an edit."
        );
      return (
        d.command !== void 0 && (k.command = K(d.command)),
        d.isPreferred !== void 0 && (k.isPreferred = d.isPreferred),
        d.disabled !== void 0 && (k.disabled = { reason: d.disabled.reason }),
        k
      );
    }
    async function un(d, k) {
      if (d == null) return d;
      let z;
      return (
        d.only && Cr.string(d.only.value) && (z = [d.only.value]),
        ie.CodeActionContext.create(
          await on(d.diagnostics, k),
          z,
          Pt(d.triggerKind)
        )
      );
    }
    function Fn(d) {
      if (d == null) return d;
      let k;
      return (
        d.only && Cr.string(d.only.value) && (k = [d.only.value]),
        ie.CodeActionContext.create(an(d.diagnostics), k, Pt(d.triggerKind))
      );
    }
    function Pt(d) {
      switch (d) {
        case rt.CodeActionTriggerKind.Invoke:
          return ie.CodeActionTriggerKind.Invoked;
        case rt.CodeActionTriggerKind.Automatic:
          return ie.CodeActionTriggerKind.Automatic;
        default:
          return;
      }
    }
    function _(d) {
      if (d != null) return d.value;
    }
    function F(d) {
      return d == null
        ? d
        : ie.InlineValueContext.create(d.frameId, Ne(d.stoppedLocation));
    }
    function U(d, k, z) {
      return {
        context: ie.InlineCompletionContext.create(
          z.triggerKind,
          z.selectedCompletionInfo
        ),
        textDocument: i(d),
        position: St(k),
      };
    }
    function K(d) {
      let k = ie.Command.create(d.title, d.command);
      return d.arguments && (k.arguments = d.arguments), k;
    }
    function ve(d) {
      let k = ie.CodeLens.create(Ne(d.range));
      return (
        d.command && (k.command = K(d.command)),
        d instanceof Wb.default && d.data && (k.data = d.data),
        k
      );
    }
    function me(d, k) {
      let z = { tabSize: d.tabSize, insertSpaces: d.insertSpaces };
      return (
        k.trimTrailingWhitespace && (z.trimTrailingWhitespace = !0),
        k.trimFinalNewlines && (z.trimFinalNewlines = !0),
        k.insertFinalNewline && (z.insertFinalNewline = !0),
        z
      );
    }
    function Pe(d) {
      return { textDocument: i(d) };
    }
    function qe(d) {
      return { textDocument: i(d) };
    }
    function ae(d) {
      let k = ie.DocumentLink.create(Ne(d.range));
      d.target && (k.target = r(d.target)),
        d.tooltip !== void 0 && (k.tooltip = d.tooltip);
      let z = d instanceof Kb.default ? d : void 0;
      return z && z.data && (k.data = z.data), k;
    }
    function we(d) {
      return { textDocument: i(d) };
    }
    function fe(d) {
      let k = {
        name: d.name,
        kind: vt(d.kind),
        uri: r(d.uri),
        range: Ne(d.range),
        selectionRange: Ne(d.selectionRange),
      };
      return (
        d.detail !== void 0 && d.detail.length > 0 && (k.detail = d.detail),
        d.tags !== void 0 && (k.tags = Ht(d.tags)),
        d instanceof zb.default && d.data !== void 0 && (k.data = d.data),
        k
      );
    }
    function xe(d) {
      let k = {
        name: d.name,
        kind: vt(d.kind),
        uri: r(d.uri),
        range: Ne(d.range),
        selectionRange: Ne(d.selectionRange),
      };
      return (
        d.detail !== void 0 && d.detail.length > 0 && (k.detail = d.detail),
        d.tags !== void 0 && (k.tags = Ht(d.tags)),
        d instanceof Bb.default && d.data !== void 0 && (k.data = d.data),
        k
      );
    }
    function Ge(d) {
      let k =
        d instanceof Vb.default
          ? {
              name: d.name,
              kind: vt(d.kind),
              location: d.hasRange
                ? Tt(d.location)
                : { uri: n(d.location.uri) },
              data: d.data,
            }
          : { name: d.name, kind: vt(d.kind), location: Tt(d.location) };
      return (
        d.tags !== void 0 && (k.tags = Ht(d.tags)),
        d.containerName !== "" && (k.containerName = d.containerName),
        k
      );
    }
    function ot(d) {
      let k = typeof d.label == "string" ? d.label : d.label.map(Yn),
        z = ie.InlayHint.create(St(d.position), k);
      return (
        d.kind !== void 0 && (z.kind = d.kind),
        d.textEdits !== void 0 && (z.textEdits = Ye(d.textEdits)),
        d.tooltip !== void 0 && (z.tooltip = Zn(d.tooltip)),
        d.paddingLeft !== void 0 && (z.paddingLeft = d.paddingLeft),
        d.paddingRight !== void 0 && (z.paddingRight = d.paddingRight),
        d instanceof Gb.default && d.data !== void 0 && (z.data = d.data),
        z
      );
    }
    function Yn(d) {
      let k = ie.InlayHintLabelPart.create(d.value);
      return (
        d.location !== void 0 && (k.location = Tt(d.location)),
        d.command !== void 0 && (k.command = K(d.command)),
        d.tooltip !== void 0 && (k.tooltip = Zn(d.tooltip)),
        k
      );
    }
    function Zn(d) {
      return typeof d == "string"
        ? d
        : { kind: ie.MarkupKind.Markdown, value: d.value };
    }
    return {
      asUri: r,
      asTextDocumentIdentifier: i,
      asTextDocumentItem: s,
      asVersionedTextDocumentIdentifier: o,
      asOpenTextDocumentParams: a,
      asChangeTextDocumentParams: p,
      asCloseTextDocumentParams: v,
      asSaveTextDocumentParams: m,
      asWillSaveTextDocumentParams: y,
      asDidCreateFilesParams: P,
      asDidRenameFilesParams: q,
      asDidDeleteFilesParams: A,
      asWillCreateFilesParams: j,
      asWillRenameFilesParams: E,
      asWillDeleteFilesParams: I,
      asTextDocumentPositionParams: N,
      asCompletionParams: X,
      asSignatureHelpParams: yt,
      asWorkerPosition: st,
      asRange: Ne,
      asRanges: xt,
      asPosition: St,
      asPositions: Gn,
      asPositionsSync: vn,
      asLocation: Tt,
      asDiagnosticSeverity: ht,
      asDiagnosticTag: bn,
      asDiagnostic: wn,
      asDiagnostics: on,
      asDiagnosticsSync: an,
      asCompletionItem: Jt,
      asTextEdit: Dn,
      asSymbolKind: vt,
      asSymbolTag: pt,
      asSymbolTags: Ht,
      asReferenceParams: Ot,
      asCodeAction: Rn,
      asCodeActionSync: In,
      asCodeActionContext: un,
      asCodeActionContextSync: Fn,
      asInlineValueContext: F,
      asCommand: K,
      asCodeLens: ve,
      asFormattingOptions: me,
      asDocumentSymbolParams: Pe,
      asCodeLensParams: qe,
      asDocumentLink: ae,
      asDocumentLinkParams: we,
      asCallHierarchyItem: fe,
      asTypeHierarchyItem: xe,
      asInlayHint: ot,
      asWorkspaceSymbol: Ge,
      asInlineCompletionParams: U,
    };
  }
  Bs.createConverter = Xb;
});
var wg = x((Gs) => {
  "use strict";
  Object.defineProperty(Gs, "__esModule", { value: !0 });
  Gs.createConverter = void 0;
  var W = require("vscode"),
    ee = re(),
    tn = Yt(),
    be = Ks(),
    Jb = xc(),
    Qb = Fc(),
    Yb = Mc(),
    Zb = $c(),
    bg = Wc(),
    e_ = Bc(),
    t_ = Xc(),
    n_ = Yc(),
    r_ = tu(),
    _g = re(),
    Vs;
  (function (t) {
    function e(n) {
      let r = n;
      return r && tn.string(r.language) && tn.string(r.value);
    }
    t.is = e;
  })(Vs || (Vs = {}));
  function i_(t, e, n) {
    let i = t || ((c) => W.Uri.parse(c));
    function s(c) {
      return i(c);
    }
    function o(c) {
      let D = [];
      for (let M of c)
        if (typeof M == "string") D.push(M);
        else if (_g.NotebookCellTextDocumentFilter.is(M))
          if (typeof M.notebook == "string")
            D.push({ notebookType: M.notebook, language: M.language });
          else {
            let G = M.notebook.notebookType ?? "*";
            D.push({
              notebookType: G,
              scheme: M.notebook.scheme,
              pattern: M.notebook.pattern,
              language: M.language,
            });
          }
        else
          _g.TextDocumentFilter.is(M) &&
            D.push({
              language: M.language,
              scheme: M.scheme,
              pattern: M.pattern,
            });
      return D;
    }
    async function a(c, D) {
      return be.map(c, h, D);
    }
    function u(c) {
      let D = new Array(c.length);
      for (let M = 0; M < c.length; M++) D[M] = h(c[M]);
      return D;
    }
    function h(c) {
      let D = new bg.ProtocolDiagnostic(
        y(c.range),
        c.message,
        q(c.severity),
        c.data
      );
      if (c.code !== void 0) {
        if (typeof c.code == "string" || typeof c.code == "number")
          ee.CodeDescription.is(c.codeDescription)
            ? (D.code = { value: c.code, target: s(c.codeDescription.href) })
            : (D.code = c.code);
        else if (bg.DiagnosticCode.is(c.code)) {
          D.hasDiagnosticCode = !0;
          let M = c.code;
          D.code = { value: M.value, target: s(M.target) };
        }
      }
      return (
        c.source && (D.source = c.source),
        c.relatedInformation &&
          (D.relatedInformation = p(c.relatedInformation)),
        Array.isArray(c.tags) && (D.tags = v(c.tags)),
        D
      );
    }
    function p(c) {
      let D = new Array(c.length);
      for (let M = 0; M < c.length; M++) {
        let G = c[M];
        D[M] = new W.DiagnosticRelatedInformation(ht(G.location), G.message);
      }
      return D;
    }
    function v(c) {
      if (!c) return;
      let D = [];
      for (let M of c) {
        let G = m(M);
        G !== void 0 && D.push(G);
      }
      return D.length > 0 ? D : void 0;
    }
    function m(c) {
      switch (c) {
        case ee.DiagnosticTag.Unnecessary:
          return W.DiagnosticTag.Unnecessary;
        case ee.DiagnosticTag.Deprecated:
          return W.DiagnosticTag.Deprecated;
        default:
          return;
      }
    }
    function R(c) {
      return c ? new W.Position(c.line, c.character) : void 0;
    }
    function y(c) {
      return c
        ? new W.Range(
            c.start.line,
            c.start.character,
            c.end.line,
            c.end.character
          )
        : void 0;
    }
    async function P(c, D) {
      return be.map(
        c,
        (M) =>
          new W.Range(
            M.start.line,
            M.start.character,
            M.end.line,
            M.end.character
          ),
        D
      );
    }
    function q(c) {
      if (c == null) return W.DiagnosticSeverity.Error;
      switch (c) {
        case ee.DiagnosticSeverity.Error:
          return W.DiagnosticSeverity.Error;
        case ee.DiagnosticSeverity.Warning:
          return W.DiagnosticSeverity.Warning;
        case ee.DiagnosticSeverity.Information:
          return W.DiagnosticSeverity.Information;
        case ee.DiagnosticSeverity.Hint:
          return W.DiagnosticSeverity.Hint;
      }
      return W.DiagnosticSeverity.Error;
    }
    function A(c) {
      if (tn.string(c)) return E(c);
      if (Vs.is(c)) return E().appendCodeblock(c.value, c.language);
      if (Array.isArray(c)) {
        let D = [];
        for (let M of c) {
          let G = E();
          Vs.is(M)
            ? G.appendCodeblock(M.value, M.language)
            : G.appendMarkdown(M),
            D.push(G);
        }
        return D;
      } else return E(c);
    }
    function j(c) {
      if (tn.string(c)) return c;
      switch (c.kind) {
        case ee.MarkupKind.Markdown:
          return E(c.value);
        case ee.MarkupKind.PlainText:
          return c.value;
        default:
          return `Unsupported Markup content received. Kind is: ${c.kind}`;
      }
    }
    function E(c) {
      let D;
      if (c === void 0 || typeof c == "string") D = new W.MarkdownString(c);
      else
        switch (c.kind) {
          case ee.MarkupKind.Markdown:
            D = new W.MarkdownString(c.value);
            break;
          case ee.MarkupKind.PlainText:
            (D = new W.MarkdownString()), D.appendText(c.value);
            break;
          default:
            (D = new W.MarkdownString()),
              D.appendText(
                `Unsupported Markup content received. Kind is: ${c.kind}`
              );
            break;
        }
      return (D.isTrusted = e), (D.supportHtml = n), D;
    }
    function I(c) {
      if (!!c) return new W.Hover(A(c.contents), y(c.range));
    }
    async function N(c, D, M) {
      if (!c) return;
      if (Array.isArray(c)) return be.map(c, (Tn) => Ze(Tn, D), M);
      let G = c,
        { defaultRange: at, commitCharacters: gt } = Q(G, D),
        ke = await be.map(
          G.items,
          (Tn) =>
            Ze(
              Tn,
              gt,
              at,
              G.itemDefaults?.insertTextMode,
              G.itemDefaults?.insertTextFormat,
              G.itemDefaults?.data
            ),
          M
        );
      return new W.CompletionList(ke, G.isIncomplete);
    }
    function Q(c, D) {
      let M = c.itemDefaults?.editRange,
        G = c.itemDefaults?.commitCharacters ?? D;
      return ee.Range.is(M)
        ? { defaultRange: y(M), commitCharacters: G }
        : M !== void 0
        ? {
            defaultRange: { inserting: y(M.insert), replacing: y(M.replace) },
            commitCharacters: G,
          }
        : { defaultRange: void 0, commitCharacters: G };
    }
    function X(c) {
      return ee.CompletionItemKind.Text <= c &&
        c <= ee.CompletionItemKind.TypeParameter
        ? [c - 1, void 0]
        : [W.CompletionItemKind.Text, c];
    }
    function Te(c) {
      switch (c) {
        case ee.CompletionItemTag.Deprecated:
          return W.CompletionItemTag.Deprecated;
      }
    }
    function We(c) {
      if (c == null) return [];
      let D = [];
      for (let M of c) {
        let G = Te(M);
        G !== void 0 && D.push(G);
      }
      return D;
    }
    function Ze(c, D, M, G, at, gt) {
      let ke = We(c.tags),
        Tn = et(c),
        Ie = new Jb.default(Tn);
      c.detail && (Ie.detail = c.detail),
        c.documentation &&
          ((Ie.documentation = j(c.documentation)),
          (Ie.documentationFormat = tn.string(c.documentation)
            ? "$string"
            : c.documentation.kind)),
        c.filterText && (Ie.filterText = c.filterText);
      let is = Y(c, M, at);
      if (
        (is &&
          ((Ie.insertText = is.text),
          (Ie.range = is.range),
          (Ie.fromEdit = is.fromEdit)),
        tn.number(c.kind))
      ) {
        let [fv, qd] = X(c.kind);
        (Ie.kind = fv), qd && (Ie.originalItemKind = qd);
      }
      c.sortText && (Ie.sortText = c.sortText),
        c.additionalTextEdits &&
          (Ie.additionalTextEdits = St(c.additionalTextEdits));
      let Ed =
        c.commitCharacters !== void 0
          ? tn.stringArray(c.commitCharacters)
            ? c.commitCharacters
            : void 0
          : D;
      Ed && (Ie.commitCharacters = Ed.slice()),
        c.command && (Ie.command = Ye(c.command)),
        (c.deprecated === !0 || c.deprecated === !1) &&
          ((Ie.deprecated = c.deprecated),
          c.deprecated === !0 && ke.push(W.CompletionItemTag.Deprecated)),
        (c.preselect === !0 || c.preselect === !1) &&
          (Ie.preselect = c.preselect);
      let kd = c.data ?? gt;
      kd !== void 0 && (Ie.data = kd), ke.length > 0 && (Ie.tags = ke);
      let Yo = c.insertTextMode ?? G;
      return (
        Yo !== void 0 &&
          ((Ie.insertTextMode = Yo),
          Yo === ee.InsertTextMode.asIs && (Ie.keepWhitespace = !0)),
        Ie
      );
    }
    function et(c) {
      return ee.CompletionItemLabelDetails.is(c.labelDetails)
        ? {
            label: c.label,
            detail: c.labelDetails.detail,
            description: c.labelDetails.description,
          }
        : c.label;
    }
    function Y(c, D, M) {
      let G = c.insertTextFormat ?? M;
      if (c.textEdit !== void 0 || D !== void 0) {
        let [at, gt] =
          c.textEdit !== void 0
            ? _e(c.textEdit)
            : [D, c.textEditText ?? c.label];
        return G === ee.InsertTextFormat.Snippet
          ? { text: new W.SnippetString(gt), range: at, fromEdit: !0 }
          : { text: gt, range: at, fromEdit: !0 };
      } else
        return c.insertText
          ? G === ee.InsertTextFormat.Snippet
            ? { text: new W.SnippetString(c.insertText), fromEdit: !1 }
            : { text: c.insertText, fromEdit: !1 }
          : void 0;
    }
    function _e(c) {
      return ee.InsertReplaceEdit.is(c)
        ? [{ inserting: y(c.insert), replacing: y(c.replace) }, c.newText]
        : [y(c.range), c.newText];
    }
    function yt(c) {
      if (!!c) return new W.TextEdit(y(c.range), c.newText);
    }
    async function st(c, D) {
      if (!!c) return be.map(c, yt, D);
    }
    function St(c) {
      if (!c) return;
      let D = new Array(c.length);
      for (let M = 0; M < c.length; M++) D[M] = yt(c[M]);
      return D;
    }
    async function Gn(c, D) {
      if (!c) return;
      let M = new W.SignatureHelp();
      return (
        tn.number(c.activeSignature)
          ? (M.activeSignature = c.activeSignature)
          : (M.activeSignature = 0),
        tn.number(c.activeParameter)
          ? (M.activeParameter = c.activeParameter)
          : (M.activeParameter = 0),
        c.signatures && (M.signatures = await vn(c.signatures, D)),
        M
      );
    }
    async function vn(c, D) {
      return be.mapAsync(c, Ne, D);
    }
    async function Ne(c, D) {
      let M = new W.SignatureInformation(c.label);
      return (
        c.documentation !== void 0 && (M.documentation = j(c.documentation)),
        c.parameters !== void 0 && (M.parameters = await xt(c.parameters, D)),
        c.activeParameter !== void 0 && (M.activeParameter = c.activeParameter),
        M
      );
    }
    function xt(c, D) {
      return be.map(c, Tt, D);
    }
    function Tt(c) {
      let D = new W.ParameterInformation(c.label);
      return c.documentation && (D.documentation = j(c.documentation)), D;
    }
    function ht(c) {
      return c ? new W.Location(i(c.uri), y(c.range)) : void 0;
    }
    async function Xn(c, D) {
      if (!!c) return xn(c, D);
    }
    async function bn(c, D) {
      if (!!c) return xn(c, D);
    }
    function _n(c) {
      if (!c) return;
      let D = {
        targetUri: i(c.targetUri),
        targetRange: y(c.targetRange),
        originSelectionRange: y(c.originSelectionRange),
        targetSelectionRange: y(c.targetSelectionRange),
      };
      if (!D.targetSelectionRange)
        throw new Error("targetSelectionRange must not be undefined or null");
      return D;
    }
    async function xn(c, D) {
      if (!!c)
        if (tn.array(c)) {
          if (c.length === 0) return [];
          if (ee.LocationLink.is(c[0])) {
            let M = c;
            return be.map(M, _n, D);
          } else {
            let M = c;
            return be.map(M, ht, D);
          }
        } else return ee.LocationLink.is(c) ? [_n(c)] : ht(c);
    }
    async function Jn(c, D) {
      if (!!c) return be.map(c, ht, D);
    }
    async function wn(c, D) {
      if (!!c) return be.map(c, on, D);
    }
    function on(c) {
      let D = new W.DocumentHighlight(y(c.range));
      return tn.number(c.kind) && (D.kind = an(c.kind)), D;
    }
    function an(c) {
      switch (c) {
        case ee.DocumentHighlightKind.Text:
          return W.DocumentHighlightKind.Text;
        case ee.DocumentHighlightKind.Read:
          return W.DocumentHighlightKind.Read;
        case ee.DocumentHighlightKind.Write:
          return W.DocumentHighlightKind.Write;
      }
      return W.DocumentHighlightKind.Text;
    }
    async function Cn(c, D) {
      if (!!c) return be.map(c, Jt, D);
    }
    function tt(c) {
      return c <= ee.SymbolKind.TypeParameter ? c - 1 : W.SymbolKind.Property;
    }
    function On(c) {
      switch (c) {
        case ee.SymbolTag.Deprecated:
          return W.SymbolTag.Deprecated;
        default:
          return;
      }
    }
    function cn(c) {
      if (c == null) return;
      let D = [];
      for (let M of c) {
        let G = On(M);
        G !== void 0 && D.push(G);
      }
      return D.length === 0 ? void 0 : D;
    }
    function Jt(c) {
      let D = c.data,
        M = c.location,
        G =
          M.range === void 0 || D !== void 0
            ? new n_.default(
                c.name,
                tt(c.kind),
                c.containerName ?? "",
                M.range === void 0
                  ? i(M.uri)
                  : new W.Location(i(c.location.uri), y(M.range)),
                D
              )
            : new W.SymbolInformation(
                c.name,
                tt(c.kind),
                c.containerName ?? "",
                new W.Location(i(c.location.uri), y(M.range))
              );
      return Dn(G, c), G;
    }
    async function Qn(c, D) {
      if (c != null) return be.map(c, Qt, D);
    }
    function Qt(c) {
      let D = new W.DocumentSymbol(
        c.name,
        c.detail || "",
        tt(c.kind),
        y(c.range),
        y(c.selectionRange)
      );
      if ((Dn(D, c), c.children !== void 0 && c.children.length > 0)) {
        let M = [];
        for (let G of c.children) M.push(Qt(G));
        D.children = M;
      }
      return D;
    }
    function Dn(c, D) {
      (c.tags = cn(D.tags)),
        D.deprecated &&
          (c.tags
            ? c.tags.includes(W.SymbolTag.Deprecated) ||
              (c.tags = c.tags.concat(W.SymbolTag.Deprecated))
            : (c.tags = [W.SymbolTag.Deprecated]));
    }
    function Ye(c) {
      let D = { title: c.title, command: c.command };
      return c.arguments && (D.arguments = c.arguments), D;
    }
    async function vt(c, D) {
      if (!!c) return be.map(c, Ye, D);
    }
    let pt = new Map();
    pt.set(ee.CodeActionKind.Empty, W.CodeActionKind.Empty),
      pt.set(ee.CodeActionKind.QuickFix, W.CodeActionKind.QuickFix),
      pt.set(ee.CodeActionKind.Refactor, W.CodeActionKind.Refactor),
      pt.set(
        ee.CodeActionKind.RefactorExtract,
        W.CodeActionKind.RefactorExtract
      ),
      pt.set(ee.CodeActionKind.RefactorInline, W.CodeActionKind.RefactorInline),
      pt.set(
        ee.CodeActionKind.RefactorRewrite,
        W.CodeActionKind.RefactorRewrite
      ),
      pt.set(ee.CodeActionKind.Source, W.CodeActionKind.Source),
      pt.set(
        ee.CodeActionKind.SourceOrganizeImports,
        W.CodeActionKind.SourceOrganizeImports
      );
    function Ht(c) {
      if (c == null) return;
      let D = pt.get(c);
      if (D) return D;
      let M = c.split(".");
      D = W.CodeActionKind.Empty;
      for (let G of M) D = D.append(G);
      return D;
    }
    function Ot(c) {
      if (c != null) return c.map((D) => Ht(D));
    }
    async function Rn(c, D) {
      if (c == null) return;
      let M = new Zb.default(c.title, c.data);
      return (
        c.kind !== void 0 && (M.kind = Ht(c.kind)),
        c.diagnostics !== void 0 && (M.diagnostics = u(c.diagnostics)),
        c.edit !== void 0 && (M.edit = await Pt(c.edit, D)),
        c.command !== void 0 && (M.command = Ye(c.command)),
        c.isPreferred !== void 0 && (M.isPreferred = c.isPreferred),
        c.disabled !== void 0 && (M.disabled = { reason: c.disabled.reason }),
        M
      );
    }
    function In(c, D) {
      return be.mapAsync(
        c,
        async (M) => (ee.Command.is(M) ? Ye(M) : Rn(M, D)),
        D
      );
    }
    function un(c) {
      if (!c) return;
      let D = new Qb.default(y(c.range));
      return (
        c.command && (D.command = Ye(c.command)),
        c.data !== void 0 && c.data !== null && (D.data = c.data),
        D
      );
    }
    async function Fn(c, D) {
      if (!!c) return be.map(c, un, D);
    }
    async function Pt(c, D) {
      if (!c) return;
      let M = new Map();
      if (c.changeAnnotations !== void 0) {
        let gt = c.changeAnnotations;
        await be.forEach(
          Object.keys(gt),
          (ke) => {
            let Tn = _(gt[ke]);
            M.set(ke, Tn);
          },
          D
        );
      }
      let G = (gt) => {
          if (gt !== void 0) return M.get(gt);
        },
        at = new W.WorkspaceEdit();
      if (c.documentChanges) {
        let gt = c.documentChanges;
        await be.forEach(
          gt,
          (ke) => {
            if (ee.CreateFile.is(ke))
              at.createFile(i(ke.uri), ke.options, G(ke.annotationId));
            else if (ee.RenameFile.is(ke))
              at.renameFile(
                i(ke.oldUri),
                i(ke.newUri),
                ke.options,
                G(ke.annotationId)
              );
            else if (ee.DeleteFile.is(ke))
              at.deleteFile(i(ke.uri), ke.options, G(ke.annotationId));
            else if (ee.TextDocumentEdit.is(ke)) {
              let Tn = i(ke.textDocument.uri);
              for (let Ie of ke.edits)
                ee.AnnotatedTextEdit.is(Ie)
                  ? at.replace(Tn, y(Ie.range), Ie.newText, G(Ie.annotationId))
                  : at.replace(Tn, y(Ie.range), Ie.newText);
            } else
              throw new Error(`Unknown workspace edit change received:
${JSON.stringify(ke, void 0, 4)}`);
          },
          D
        );
      } else if (c.changes) {
        let gt = c.changes;
        await be.forEach(
          Object.keys(gt),
          (ke) => {
            at.set(i(ke), St(gt[ke]));
          },
          D
        );
      }
      return at;
    }
    function _(c) {
      if (c !== void 0)
        return {
          label: c.label,
          needsConfirmation: !!c.needsConfirmation,
          description: c.description,
        };
    }
    function F(c) {
      let D = y(c.range),
        M = c.target ? s(c.target) : void 0,
        G = new Yb.default(D, M);
      return (
        c.tooltip !== void 0 && (G.tooltip = c.tooltip),
        c.data !== void 0 && c.data !== null && (G.data = c.data),
        G
      );
    }
    async function U(c, D) {
      if (!!c) return be.map(c, F, D);
    }
    function K(c) {
      return new W.Color(c.red, c.green, c.blue, c.alpha);
    }
    function ve(c) {
      return new W.ColorInformation(y(c.range), K(c.color));
    }
    async function me(c, D) {
      if (!!c) return be.map(c, ve, D);
    }
    function Pe(c) {
      let D = new W.ColorPresentation(c.label);
      return (
        (D.additionalTextEdits = St(c.additionalTextEdits)),
        c.textEdit && (D.textEdit = yt(c.textEdit)),
        D
      );
    }
    async function qe(c, D) {
      if (!!c) return be.map(c, Pe, D);
    }
    function ae(c) {
      if (c)
        switch (c) {
          case ee.FoldingRangeKind.Comment:
            return W.FoldingRangeKind.Comment;
          case ee.FoldingRangeKind.Imports:
            return W.FoldingRangeKind.Imports;
          case ee.FoldingRangeKind.Region:
            return W.FoldingRangeKind.Region;
        }
    }
    function we(c) {
      return new W.FoldingRange(c.startLine, c.endLine, ae(c.kind));
    }
    async function fe(c, D) {
      if (!!c) return be.map(c, we, D);
    }
    function xe(c) {
      return new W.SelectionRange(y(c.range), c.parent ? xe(c.parent) : void 0);
    }
    async function Ge(c, D) {
      return Array.isArray(c) ? be.map(c, xe, D) : [];
    }
    function ot(c) {
      return ee.InlineValueText.is(c)
        ? new W.InlineValueText(y(c.range), c.text)
        : ee.InlineValueVariableLookup.is(c)
        ? new W.InlineValueVariableLookup(
            y(c.range),
            c.variableName,
            c.caseSensitiveLookup
          )
        : new W.InlineValueEvaluatableExpression(y(c.range), c.expression);
    }
    async function Yn(c, D) {
      return Array.isArray(c) ? be.map(c, ot, D) : [];
    }
    async function Zn(c, D) {
      let M =
          typeof c.label == "string" ? c.label : await be.map(c.label, d, D),
        G = new r_.default(R(c.position), M);
      return (
        c.kind !== void 0 && (G.kind = c.kind),
        c.textEdits !== void 0 && (G.textEdits = await st(c.textEdits, D)),
        c.tooltip !== void 0 && (G.tooltip = k(c.tooltip)),
        c.paddingLeft !== void 0 && (G.paddingLeft = c.paddingLeft),
        c.paddingRight !== void 0 && (G.paddingRight = c.paddingRight),
        c.data !== void 0 && (G.data = c.data),
        G
      );
    }
    function d(c) {
      let D = new W.InlayHintLabelPart(c.value);
      return (
        c.location !== void 0 && (D.location = ht(c.location)),
        c.tooltip !== void 0 && (D.tooltip = k(c.tooltip)),
        c.command !== void 0 && (D.command = Ye(c.command)),
        D
      );
    }
    function k(c) {
      return typeof c == "string" ? c : E(c);
    }
    async function z(c, D) {
      if (!!Array.isArray(c)) return be.mapAsync(c, Zn, D);
    }
    function Ce(c) {
      if (c === null) return;
      let D = new e_.default(
        tt(c.kind),
        c.name,
        c.detail || "",
        s(c.uri),
        y(c.range),
        y(c.selectionRange),
        c.data
      );
      return c.tags !== void 0 && (D.tags = cn(c.tags)), D;
    }
    async function S(c, D) {
      if (c !== null) return be.map(c, Ce, D);
    }
    async function f(c, D) {
      return new W.CallHierarchyIncomingCall(
        Ce(c.from),
        await P(c.fromRanges, D)
      );
    }
    async function w(c, D) {
      if (c !== null) return be.mapAsync(c, f, D);
    }
    async function C(c, D) {
      return new W.CallHierarchyOutgoingCall(
        Ce(c.to),
        await P(c.fromRanges, D)
      );
    }
    async function g(c, D) {
      if (c !== null) return be.mapAsync(c, C, D);
    }
    async function l(c, D) {
      if (c != null)
        return new W.SemanticTokens(new Uint32Array(c.data), c.resultId);
    }
    function T(c) {
      return new W.SemanticTokensEdit(
        c.start,
        c.deleteCount,
        c.data !== void 0 ? new Uint32Array(c.data) : void 0
      );
    }
    async function L(c, D) {
      if (c != null)
        return new W.SemanticTokensEdits(c.edits.map(T), c.resultId);
    }
    function ne(c) {
      return c;
    }
    async function je(c, D) {
      if (c != null)
        return new W.LinkedEditingRanges(
          await P(c.ranges, D),
          Oe(c.wordPattern)
        );
    }
    function Oe(c) {
      if (c != null) return new RegExp(c);
    }
    function It(c) {
      if (c === null) return;
      let D = new t_.default(
        tt(c.kind),
        c.name,
        c.detail || "",
        s(c.uri),
        y(c.range),
        y(c.selectionRange),
        c.data
      );
      return c.tags !== void 0 && (D.tags = cn(c.tags)), D;
    }
    async function Ut(c, D) {
      if (c !== null) return be.map(c, It, D);
    }
    function ln(c) {
      if (tn.string(c)) return c;
      if (ee.RelativePattern.is(c)) {
        if (ee.URI.is(c.baseUri))
          return new W.RelativePattern(s(c.baseUri), c.pattern);
        if (ee.WorkspaceFolder.is(c.baseUri)) {
          let D = W.workspace.getWorkspaceFolder(s(c.baseUri.uri));
          return D !== void 0 ? new W.RelativePattern(D, c.pattern) : void 0;
        }
      }
    }
    async function de(c, D) {
      if (!c) return;
      if (Array.isArray(c)) return be.map(c, (at) => Sn(at), D);
      let M = c,
        G = await be.map(M.items, (at) => Sn(at), D);
      return new W.InlineCompletionList(G);
    }
    function Sn(c) {
      let D;
      typeof c.insertText == "string"
        ? (D = c.insertText)
        : (D = new W.SnippetString(c.insertText.value));
      let M;
      c.command && (M = Ye(c.command));
      let G = new W.InlineCompletionItem(D, y(c.range), M);
      return c.filterText && (G.filterText = c.filterText), G;
    }
    return {
      asUri: s,
      asDocumentSelector: o,
      asDiagnostics: a,
      asDiagnostic: h,
      asRange: y,
      asRanges: P,
      asPosition: R,
      asDiagnosticSeverity: q,
      asDiagnosticTag: m,
      asHover: I,
      asCompletionResult: N,
      asCompletionItem: Ze,
      asTextEdit: yt,
      asTextEdits: st,
      asSignatureHelp: Gn,
      asSignatureInformations: vn,
      asSignatureInformation: Ne,
      asParameterInformations: xt,
      asParameterInformation: Tt,
      asDeclarationResult: Xn,
      asDefinitionResult: bn,
      asLocation: ht,
      asReferences: Jn,
      asDocumentHighlights: wn,
      asDocumentHighlight: on,
      asDocumentHighlightKind: an,
      asSymbolKind: tt,
      asSymbolTag: On,
      asSymbolTags: cn,
      asSymbolInformations: Cn,
      asSymbolInformation: Jt,
      asDocumentSymbols: Qn,
      asDocumentSymbol: Qt,
      asCommand: Ye,
      asCommands: vt,
      asCodeAction: Rn,
      asCodeActionKind: Ht,
      asCodeActionKinds: Ot,
      asCodeActionResult: In,
      asCodeLens: un,
      asCodeLenses: Fn,
      asWorkspaceEdit: Pt,
      asDocumentLink: F,
      asDocumentLinks: U,
      asFoldingRangeKind: ae,
      asFoldingRange: we,
      asFoldingRanges: fe,
      asColor: K,
      asColorInformation: ve,
      asColorInformations: me,
      asColorPresentation: Pe,
      asColorPresentations: qe,
      asSelectionRange: xe,
      asSelectionRanges: Ge,
      asInlineValue: ot,
      asInlineValues: Yn,
      asInlayHint: Zn,
      asInlayHints: z,
      asSemanticTokensLegend: ne,
      asSemanticTokens: l,
      asSemanticTokensEdit: T,
      asSemanticTokensEdits: L,
      asCallHierarchyItem: Ce,
      asCallHierarchyItems: S,
      asCallHierarchyIncomingCall: f,
      asCallHierarchyIncomingCalls: w,
      asCallHierarchyOutgoingCall: C,
      asCallHierarchyOutgoingCalls: g,
      asLinkedEditingRanges: je,
      asTypeHierarchyItem: It,
      asTypeHierarchyItems: Ut,
      asGlobPattern: ln,
      asInlineCompletionResult: de,
      asInlineCompletionItem: Sn,
    };
  }
  Gs.createConverter = i_;
});
var He = x((nn) => {
  "use strict";
  Object.defineProperty(nn, "__esModule", { value: !0 });
  nn.generateUuid = nn.parse = nn.isUUID = nn.v4 = nn.empty = void 0;
  var Ii = class {
      constructor(e) {
        this._value = e;
      }
      asHex() {
        return this._value;
      }
      equals(e) {
        return this.asHex() === e.asHex();
      }
    },
    ce = class extends Ii {
      static _oneOf(e) {
        return e[Math.floor(e.length * Math.random())];
      }
      static _randomHex() {
        return ce._oneOf(ce._chars);
      }
      constructor() {
        super(
          [
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            "-",
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            "-",
            "4",
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            "-",
            ce._oneOf(ce._timeHighBits),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            "-",
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
            ce._randomHex(),
          ].join("")
        );
      }
    };
  ce._chars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  ce._timeHighBits = ["8", "9", "a", "b"];
  nn.empty = new Ii("00000000-0000-0000-0000-000000000000");
  function Cg() {
    return new ce();
  }
  nn.v4 = Cg;
  var s_ = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  function Dg(t) {
    return s_.test(t);
  }
  nn.isUUID = Dg;
  function o_(t) {
    if (!Dg(t)) throw new Error("invalid uuid");
    return new Ii(t);
  }
  nn.parse = o_;
  function a_() {
    return Cg().asHex();
  }
  nn.generateUuid = a_;
});
var iu = x((Xs) => {
  "use strict";
  Object.defineProperty(Xs, "__esModule", { value: !0 });
  Xs.ProgressPart = void 0;
  var Rg = require("vscode"),
    Sg = re(),
    Tg = Yt(),
    ru = class {
      constructor(e, n, r) {
        (this._client = e),
          (this._token = n),
          (this._reported = 0),
          (this._infinite = !1),
          (this._lspProgressDisposable = this._client.onProgress(
            Sg.WorkDoneProgress.type,
            this._token,
            (i) => {
              switch (i.kind) {
                case "begin":
                  this.begin(i);
                  break;
                case "report":
                  this.report(i);
                  break;
                case "end":
                  this.done(), r && r(this);
                  break;
              }
            }
          ));
      }
      begin(e) {
        (this._infinite = e.percentage === void 0),
          this._lspProgressDisposable !== void 0 &&
            Rg.window.withProgress(
              {
                location: Rg.ProgressLocation.Window,
                cancellable: e.cancellable,
                title: e.title,
              },
              async (n, r) => {
                if (this._lspProgressDisposable !== void 0)
                  return (
                    (this._progress = n),
                    (this._cancellationToken = r),
                    (this._tokenDisposable =
                      this._cancellationToken.onCancellationRequested(() => {
                        this._client.sendNotification(
                          Sg.WorkDoneProgressCancelNotification.type,
                          { token: this._token }
                        );
                      })),
                    this.report(e),
                    new Promise((i, s) => {
                      (this._resolve = i), (this._reject = s);
                    })
                  );
              }
            );
      }
      report(e) {
        if (this._infinite && Tg.string(e.message))
          this._progress !== void 0 &&
            this._progress.report({ message: e.message });
        else if (Tg.number(e.percentage)) {
          let n = Math.max(0, Math.min(e.percentage, 100)),
            r = Math.max(0, n - this._reported);
          (this._reported += r),
            this._progress !== void 0 &&
              this._progress.report({ message: e.message, increment: r });
        }
      }
      cancel() {
        this.cleanup(),
          this._reject !== void 0 &&
            (this._reject(), (this._resolve = void 0), (this._reject = void 0));
      }
      done() {
        this.cleanup(),
          this._resolve !== void 0 &&
            (this._resolve(),
            (this._resolve = void 0),
            (this._reject = void 0));
      }
      cleanup() {
        this._lspProgressDisposable !== void 0 &&
          (this._lspProgressDisposable.dispose(),
          (this._lspProgressDisposable = void 0)),
          this._tokenDisposable !== void 0 &&
            (this._tokenDisposable.dispose(), (this._tokenDisposable = void 0)),
          (this._progress = void 0),
          (this._cancellationToken = void 0);
      }
    };
  Xs.ProgressPart = ru;
});
var ye = x((lt) => {
  "use strict";
  Object.defineProperty(lt, "__esModule", { value: !0 });
  lt.WorkspaceFeature =
    lt.TextDocumentLanguageFeature =
    lt.TextDocumentEventFeature =
    lt.DynamicDocumentFeature =
    lt.DynamicFeature =
    lt.StaticFeature =
    lt.ensure =
    lt.LSPCancellationError =
      void 0;
  var Dr = require("vscode"),
    su = re(),
    Et = Yt(),
    Pg = He(),
    ou = class extends Dr.CancellationError {
      constructor(e) {
        super(), (this.data = e);
      }
    };
  lt.LSPCancellationError = ou;
  function c_(t, e) {
    return t[e] === void 0 && (t[e] = {}), t[e];
  }
  lt.ensure = c_;
  var Eg;
  (function (t) {
    function e(n) {
      let r = n;
      return (
        r != null &&
        Et.func(r.fillClientCapabilities) &&
        Et.func(r.initialize) &&
        Et.func(r.getState) &&
        Et.func(r.clear) &&
        (r.fillInitializeParams === void 0 || Et.func(r.fillInitializeParams))
      );
    }
    t.is = e;
  })(Eg || (lt.StaticFeature = Eg = {}));
  var kg;
  (function (t) {
    function e(n) {
      let r = n;
      return (
        r != null &&
        Et.func(r.fillClientCapabilities) &&
        Et.func(r.initialize) &&
        Et.func(r.getState) &&
        Et.func(r.clear) &&
        (r.fillInitializeParams === void 0 ||
          Et.func(r.fillInitializeParams)) &&
        Et.func(r.register) &&
        Et.func(r.unregister) &&
        r.registrationType !== void 0
      );
    }
    t.is = e;
  })(kg || (lt.DynamicFeature = kg = {}));
  var Fi = class {
    constructor(e) {
      this._client = e;
    }
    getState() {
      let e = this.getDocumentSelectors(),
        n = 0;
      for (let i of e) {
        n++;
        for (let s of Dr.workspace.textDocuments)
          if (Dr.languages.match(i, s) > 0)
            return {
              kind: "document",
              id: this.registrationType.method,
              registrations: !0,
              matches: !0,
            };
      }
      let r = n > 0;
      return {
        kind: "document",
        id: this.registrationType.method,
        registrations: r,
        matches: !1,
      };
    }
  };
  lt.DynamicDocumentFeature = Fi;
  var au = class extends Fi {
    static textDocumentFilter(e, n) {
      for (let r of e) if (Dr.languages.match(r, n) > 0) return !0;
      return !1;
    }
    constructor(e, n, r, i, s, o, a) {
      super(e),
        (this._event = n),
        (this._type = r),
        (this._middleware = i),
        (this._createParams = s),
        (this._textDocument = o),
        (this._selectorFilter = a),
        (this._selectors = new Map()),
        (this._onNotificationSent = new Dr.EventEmitter());
    }
    getStateInfo() {
      return [this._selectors.values(), !1];
    }
    getDocumentSelectors() {
      return this._selectors.values();
    }
    register(e) {
      !e.registerOptions.documentSelector ||
        (this._listener ||
          (this._listener = this._event((n) => {
            this.callback(n).catch((r) => {
              this._client.error(
                `Sending document notification ${this._type.method} failed.`,
                r
              );
            });
          })),
        this._selectors.set(
          e.id,
          this._client.protocol2CodeConverter.asDocumentSelector(
            e.registerOptions.documentSelector
          )
        ));
    }
    async callback(e) {
      let n = async (r) => {
        let i = this._createParams(r);
        await this._client.sendNotification(this._type, i),
          this.notificationSent(this.getTextDocument(r), this._type, i);
      };
      if (this.matches(e)) {
        let r = this._middleware();
        return r ? r(e, (i) => n(i)) : n(e);
      }
    }
    matches(e) {
      return this._client.hasDedicatedTextSynchronizationFeature(
        this._textDocument(e)
      )
        ? !1
        : !this._selectorFilter ||
            this._selectorFilter(this._selectors.values(), e);
    }
    get onNotificationSent() {
      return this._onNotificationSent.event;
    }
    notificationSent(e, n, r) {
      this._onNotificationSent.fire({ textDocument: e, type: n, params: r });
    }
    unregister(e) {
      this._selectors.delete(e),
        this._selectors.size === 0 &&
          this._listener &&
          (this._listener.dispose(), (this._listener = void 0));
    }
    clear() {
      this._selectors.clear(),
        this._onNotificationSent.dispose(),
        this._listener && (this._listener.dispose(), (this._listener = void 0));
    }
    getProvider(e) {
      for (let n of this._selectors.values())
        if (Dr.languages.match(n, e) > 0)
          return { send: (r) => this.callback(r) };
    }
  };
  lt.TextDocumentEventFeature = au;
  var cu = class extends Fi {
    constructor(e, n) {
      super(e), (this._registrationType = n), (this._registrations = new Map());
    }
    *getDocumentSelectors() {
      for (let e of this._registrations.values()) {
        let n = e.data.registerOptions.documentSelector;
        n !== null &&
          (yield this._client.protocol2CodeConverter.asDocumentSelector(n));
      }
    }
    get registrationType() {
      return this._registrationType;
    }
    register(e) {
      if (!e.registerOptions.documentSelector) return;
      let n = this.registerLanguageProvider(e.registerOptions, e.id);
      this._registrations.set(e.id, {
        disposable: n[0],
        data: e,
        provider: n[1],
      });
    }
    unregister(e) {
      let n = this._registrations.get(e);
      n !== void 0 && n.disposable.dispose();
    }
    clear() {
      this._registrations.forEach((e) => {
        e.disposable.dispose();
      }),
        this._registrations.clear();
    }
    getRegistration(e, n) {
      if (n) {
        if (su.TextDocumentRegistrationOptions.is(n)) {
          let r = su.StaticRegistrationOptions.hasId(n)
              ? n.id
              : Pg.generateUuid(),
            i = n.documentSelector ?? e;
          if (i) return [r, Object.assign({}, n, { documentSelector: i })];
        } else if (
          (Et.boolean(n) && n === !0) ||
          su.WorkDoneProgressOptions.is(n)
        ) {
          if (!e) return [void 0, void 0];
          let r =
            Et.boolean(n) && n === !0
              ? { documentSelector: e }
              : Object.assign({}, n, { documentSelector: e });
          return [Pg.generateUuid(), r];
        }
      } else return [void 0, void 0];
      return [void 0, void 0];
    }
    getRegistrationOptions(e, n) {
      if (!(!e || !n))
        return Et.boolean(n) && n === !0
          ? { documentSelector: e }
          : Object.assign({}, n, { documentSelector: e });
    }
    getProvider(e) {
      for (let n of this._registrations.values()) {
        let r = n.data.registerOptions.documentSelector;
        if (
          r !== null &&
          Dr.languages.match(
            this._client.protocol2CodeConverter.asDocumentSelector(r),
            e
          ) > 0
        )
          return n.provider;
      }
    }
    getAllProviders() {
      let e = [];
      for (let n of this._registrations.values()) e.push(n.provider);
      return e;
    }
  };
  lt.TextDocumentLanguageFeature = cu;
  var uu = class {
    constructor(e, n) {
      (this._client = e),
        (this._registrationType = n),
        (this._registrations = new Map());
    }
    getState() {
      let e = this._registrations.size > 0;
      return {
        kind: "workspace",
        id: this._registrationType.method,
        registrations: e,
      };
    }
    get registrationType() {
      return this._registrationType;
    }
    register(e) {
      let n = this.registerLanguageProvider(e.registerOptions);
      this._registrations.set(e.id, { disposable: n[0], provider: n[1] });
    }
    unregister(e) {
      let n = this._registrations.get(e);
      n !== void 0 && n.disposable.dispose();
    }
    clear() {
      this._registrations.forEach((e) => {
        e.disposable.dispose();
      }),
        this._registrations.clear();
    }
    getProviders() {
      let e = [];
      for (let n of this._registrations.values()) e.push(n.provider);
      return e;
    }
  };
  lt.WorkspaceFeature = uu;
});
var xg = x((UR, qg) => {
  var u_ =
    typeof process == "object" && process && process.platform === "win32";
  qg.exports = u_ ? { sep: "\\" } : { sep: "/" };
});
var Lg = x((WR, Ng) => {
  "use strict";
  Ng.exports = Ig;
  function Ig(t, e, n) {
    t instanceof RegExp && (t = Og(t, n)),
      e instanceof RegExp && (e = Og(e, n));
    var r = Fg(t, e, n);
    return (
      r && {
        start: r[0],
        end: r[1],
        pre: n.slice(0, r[0]),
        body: n.slice(r[0] + t.length, r[1]),
        post: n.slice(r[1] + e.length),
      }
    );
  }
  function Og(t, e) {
    var n = e.match(t);
    return n ? n[0] : null;
  }
  Ig.range = Fg;
  function Fg(t, e, n) {
    var r,
      i,
      s,
      o,
      a,
      u = n.indexOf(t),
      h = n.indexOf(e, u + 1),
      p = u;
    if (u >= 0 && h > 0) {
      if (t === e) return [u, h];
      for (r = [], s = n.length; p >= 0 && !a; )
        p == u
          ? (r.push(p), (u = n.indexOf(t, p + 1)))
          : r.length == 1
          ? (a = [r.pop(), h])
          : ((i = r.pop()),
            i < s && ((s = i), (o = h)),
            (h = n.indexOf(e, p + 1))),
          (p = u < h && u >= 0 ? u : h);
      r.length && (a = [s, o]);
    }
    return a;
  }
});
var Kg = x((KR, Wg) => {
  var Mg = Lg();
  Wg.exports = f_;
  var Ag = "\0SLASH" + Math.random() + "\0",
    jg = "\0OPEN" + Math.random() + "\0",
    du = "\0CLOSE" + Math.random() + "\0",
    $g = "\0COMMA" + Math.random() + "\0",
    Hg = "\0PERIOD" + Math.random() + "\0";
  function lu(t) {
    return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0);
  }
  function l_(t) {
    return t
      .split("\\\\")
      .join(Ag)
      .split("\\{")
      .join(jg)
      .split("\\}")
      .join(du)
      .split("\\,")
      .join($g)
      .split("\\.")
      .join(Hg);
  }
  function d_(t) {
    return t
      .split(Ag)
      .join("\\")
      .split(jg)
      .join("{")
      .split(du)
      .join("}")
      .split($g)
      .join(",")
      .split(Hg)
      .join(".");
  }
  function Ug(t) {
    if (!t) return [""];
    var e = [],
      n = Mg("{", "}", t);
    if (!n) return t.split(",");
    var r = n.pre,
      i = n.body,
      s = n.post,
      o = r.split(",");
    o[o.length - 1] += "{" + i + "}";
    var a = Ug(s);
    return (
      s.length && ((o[o.length - 1] += a.shift()), o.push.apply(o, a)),
      e.push.apply(e, o),
      e
    );
  }
  function f_(t) {
    return t
      ? (t.substr(0, 2) === "{}" && (t = "\\{\\}" + t.substr(2)),
        Ni(l_(t), !0).map(d_))
      : [];
  }
  function h_(t) {
    return "{" + t + "}";
  }
  function p_(t) {
    return /^-?0\d/.test(t);
  }
  function g_(t, e) {
    return t <= e;
  }
  function m_(t, e) {
    return t >= e;
  }
  function Ni(t, e) {
    var n = [],
      r = Mg("{", "}", t);
    if (!r) return [t];
    var i = r.pre,
      s = r.post.length ? Ni(r.post, !1) : [""];
    if (/\$$/.test(r.pre))
      for (var o = 0; o < s.length; o++) {
        var a = i + "{" + r.body + "}" + s[o];
        n.push(a);
      }
    else {
      var u = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(r.body),
        h = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(r.body),
        p = u || h,
        v = r.body.indexOf(",") >= 0;
      if (!p && !v)
        return r.post.match(/,.*\}/)
          ? ((t = r.pre + "{" + r.body + du + r.post), Ni(t))
          : [t];
      var m;
      if (p) m = r.body.split(/\.\./);
      else if (
        ((m = Ug(r.body)),
        m.length === 1 && ((m = Ni(m[0], !1).map(h_)), m.length === 1))
      )
        return s.map(function (Ze) {
          return r.pre + m[0] + Ze;
        });
      var R;
      if (p) {
        var y = lu(m[0]),
          P = lu(m[1]),
          q = Math.max(m[0].length, m[1].length),
          A = m.length == 3 ? Math.abs(lu(m[2])) : 1,
          j = g_,
          E = P < y;
        E && ((A *= -1), (j = m_));
        var I = m.some(p_);
        R = [];
        for (var N = y; j(N, P); N += A) {
          var Q;
          if (h) (Q = String.fromCharCode(N)), Q === "\\" && (Q = "");
          else if (((Q = String(N)), I)) {
            var X = q - Q.length;
            if (X > 0) {
              var Te = new Array(X + 1).join("0");
              N < 0 ? (Q = "-" + Te + Q.slice(1)) : (Q = Te + Q);
            }
          }
          R.push(Q);
        }
      } else {
        R = [];
        for (var We = 0; We < m.length; We++) R.push.apply(R, Ni(m[We], !1));
      }
      for (var We = 0; We < R.length; We++)
        for (var o = 0; o < s.length; o++) {
          var a = i + R[We] + s[o];
          (!e || p || a) && n.push(a);
        }
    }
    return n;
  }
});
var Ys = x((BR, gu) => {
  var zt = (gu.exports = (t, e, n = {}) => (
    Qs(e), !n.nocomment && e.charAt(0) === "#" ? !1 : new ii(e, n).match(t)
  ));
  gu.exports = zt;
  var hu = xg();
  zt.sep = hu.sep;
  var hn = Symbol("globstar **");
  zt.GLOBSTAR = hn;
  var y_ = Kg(),
    zg = {
      "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
      "?": { open: "(?:", close: ")?" },
      "+": { open: "(?:", close: ")+" },
      "*": { open: "(?:", close: ")*" },
      "@": { open: "(?:", close: ")" },
    },
    pu = "[^/]",
    fu = pu + "*?",
    v_ = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",
    b_ = "(?:(?!(?:\\/|^)\\.).)*?",
    Gg = (t) => t.split("").reduce((e, n) => ((e[n] = !0), e), {}),
    Bg = Gg("().*{}+?[]^$\\!"),
    __ = Gg("[.("),
    Vg = /\/+/;
  zt.filter =
    (t, e = {}) =>
    (n, r, i) =>
      zt(n, t, e);
  var lr = (t, e = {}) => {
    let n = {};
    return (
      Object.keys(t).forEach((r) => (n[r] = t[r])),
      Object.keys(e).forEach((r) => (n[r] = e[r])),
      n
    );
  };
  zt.defaults = (t) => {
    if (!t || typeof t != "object" || !Object.keys(t).length) return zt;
    let e = zt,
      n = (r, i, s) => e(r, i, lr(t, s));
    return (
      (n.Minimatch = class extends e.Minimatch {
        constructor(i, s) {
          super(i, lr(t, s));
        }
      }),
      (n.Minimatch.defaults = (r) => e.defaults(lr(t, r)).Minimatch),
      (n.filter = (r, i) => e.filter(r, lr(t, i))),
      (n.defaults = (r) => e.defaults(lr(t, r))),
      (n.makeRe = (r, i) => e.makeRe(r, lr(t, i))),
      (n.braceExpand = (r, i) => e.braceExpand(r, lr(t, i))),
      (n.match = (r, i, s) => e.match(r, i, lr(t, s))),
      n
    );
  };
  zt.braceExpand = (t, e) => Xg(t, e);
  var Xg = (t, e = {}) => (
      Qs(t), e.nobrace || !/\{(?:(?!\{).)*\}/.test(t) ? [t] : y_(t)
    ),
    w_ = 1024 * 64,
    Qs = (t) => {
      if (typeof t != "string") throw new TypeError("invalid pattern");
      if (t.length > w_) throw new TypeError("pattern is too long");
    },
    Js = Symbol("subparse");
  zt.makeRe = (t, e) => new ii(t, e || {}).makeRe();
  zt.match = (t, e, n = {}) => {
    let r = new ii(e, n);
    return (
      (t = t.filter((i) => r.match(i))),
      r.options.nonull && !t.length && t.push(e),
      t
    );
  };
  var C_ = (t) => t.replace(/\\(.)/g, "$1"),
    D_ = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
    ii = class {
      constructor(e, n) {
        Qs(e),
          n || (n = {}),
          (this.options = n),
          (this.set = []),
          (this.pattern = e),
          (this.windowsPathsNoEscape =
            !!n.windowsPathsNoEscape || n.allowWindowsEscape === !1),
          this.windowsPathsNoEscape &&
            (this.pattern = this.pattern.replace(/\\/g, "/")),
          (this.regexp = null),
          (this.negate = !1),
          (this.comment = !1),
          (this.empty = !1),
          (this.partial = !!n.partial),
          this.make();
      }
      debug() {}
      make() {
        let e = this.pattern,
          n = this.options;
        if (!n.nocomment && e.charAt(0) === "#") {
          this.comment = !0;
          return;
        }
        if (!e) {
          this.empty = !0;
          return;
        }
        this.parseNegate();
        let r = (this.globSet = this.braceExpand());
        n.debug && (this.debug = (...i) => console.error(...i)),
          this.debug(this.pattern, r),
          (r = this.globParts = r.map((i) => i.split(Vg))),
          this.debug(this.pattern, r),
          (r = r.map((i, s, o) => i.map(this.parse, this))),
          this.debug(this.pattern, r),
          (r = r.filter((i) => i.indexOf(!1) === -1)),
          this.debug(this.pattern, r),
          (this.set = r);
      }
      parseNegate() {
        if (this.options.nonegate) return;
        let e = this.pattern,
          n = !1,
          r = 0;
        for (let i = 0; i < e.length && e.charAt(i) === "!"; i++) (n = !n), r++;
        r && (this.pattern = e.substr(r)), (this.negate = n);
      }
      matchOne(e, n, r) {
        var i = this.options;
        this.debug("matchOne", { this: this, file: e, pattern: n }),
          this.debug("matchOne", e.length, n.length);
        for (
          var s = 0, o = 0, a = e.length, u = n.length;
          s < a && o < u;
          s++, o++
        ) {
          this.debug("matchOne loop");
          var h = n[o],
            p = e[s];
          if ((this.debug(n, h, p), h === !1)) return !1;
          if (h === hn) {
            this.debug("GLOBSTAR", [n, h, p]);
            var v = s,
              m = o + 1;
            if (m === u) {
              for (this.debug("** at the end"); s < a; s++)
                if (
                  e[s] === "." ||
                  e[s] === ".." ||
                  (!i.dot && e[s].charAt(0) === ".")
                )
                  return !1;
              return !0;
            }
            for (; v < a; ) {
              var R = e[v];
              if (
                (this.debug(
                  `
globstar while`,
                  e,
                  v,
                  n,
                  m,
                  R
                ),
                this.matchOne(e.slice(v), n.slice(m), r))
              )
                return this.debug("globstar found match!", v, a, R), !0;
              if (R === "." || R === ".." || (!i.dot && R.charAt(0) === ".")) {
                this.debug("dot detected!", e, v, n, m);
                break;
              }
              this.debug("globstar swallow a segment, and continue"), v++;
            }
            return !!(
              r &&
              (this.debug(
                `
>>> no match, partial?`,
                e,
                v,
                n,
                m
              ),
              v === a)
            );
          }
          var y;
          if (
            (typeof h == "string"
              ? ((y = p === h), this.debug("string match", h, p, y))
              : ((y = p.match(h)), this.debug("pattern match", h, p, y)),
            !y)
          )
            return !1;
        }
        if (s === a && o === u) return !0;
        if (s === a) return r;
        if (o === u) return s === a - 1 && e[s] === "";
        throw new Error("wtf?");
      }
      braceExpand() {
        return Xg(this.pattern, this.options);
      }
      parse(e, n) {
        Qs(e);
        let r = this.options;
        if (e === "**")
          if (r.noglobstar) e = "*";
          else return hn;
        if (e === "") return "";
        let i = "",
          s = !!r.nocase,
          o = !1,
          a = [],
          u = [],
          h,
          p = !1,
          v = -1,
          m = -1,
          R,
          y,
          P,
          q =
            e.charAt(0) === "."
              ? ""
              : r.dot
              ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))"
              : "(?!\\.)",
          A = () => {
            if (h) {
              switch (h) {
                case "*":
                  (i += fu), (s = !0);
                  break;
                case "?":
                  (i += pu), (s = !0);
                  break;
                default:
                  i += "\\" + h;
                  break;
              }
              this.debug("clearStateChar %j %j", h, i), (h = !1);
            }
          };
        for (let I = 0, N; I < e.length && (N = e.charAt(I)); I++) {
          if ((this.debug("%s	%s %s %j", e, I, i, N), o)) {
            if (N === "/") return !1;
            Bg[N] && (i += "\\"), (i += N), (o = !1);
            continue;
          }
          switch (N) {
            case "/":
              return !1;
            case "\\":
              A(), (o = !0);
              continue;
            case "?":
            case "*":
            case "+":
            case "@":
            case "!":
              if ((this.debug("%s	%s %s %j <-- stateChar", e, I, i, N), p)) {
                this.debug("  in class"),
                  N === "!" && I === m + 1 && (N = "^"),
                  (i += N);
                continue;
              }
              this.debug("call clearStateChar %j", h),
                A(),
                (h = N),
                r.noext && A();
              continue;
            case "(":
              if (p) {
                i += "(";
                continue;
              }
              if (!h) {
                i += "\\(";
                continue;
              }
              a.push({
                type: h,
                start: I - 1,
                reStart: i.length,
                open: zg[h].open,
                close: zg[h].close,
              }),
                (i += h === "!" ? "(?:(?!(?:" : "(?:"),
                this.debug("plType %j %j", h, i),
                (h = !1);
              continue;
            case ")":
              if (p || !a.length) {
                i += "\\)";
                continue;
              }
              A(),
                (s = !0),
                (y = a.pop()),
                (i += y.close),
                y.type === "!" && u.push(y),
                (y.reEnd = i.length);
              continue;
            case "|":
              if (p || !a.length) {
                i += "\\|";
                continue;
              }
              A(), (i += "|");
              continue;
            case "[":
              if ((A(), p)) {
                i += "\\" + N;
                continue;
              }
              (p = !0), (m = I), (v = i.length), (i += N);
              continue;
            case "]":
              if (I === m + 1 || !p) {
                i += "\\" + N;
                continue;
              }
              R = e.substring(m + 1, I);
              try {
                RegExp("[" + R + "]");
              } catch {
                (P = this.parse(R, Js)),
                  (i = i.substr(0, v) + "\\[" + P[0] + "\\]"),
                  (s = s || P[1]),
                  (p = !1);
                continue;
              }
              (s = !0), (p = !1), (i += N);
              continue;
            default:
              A(), Bg[N] && !(N === "^" && p) && (i += "\\"), (i += N);
              break;
          }
        }
        for (
          p &&
            ((R = e.substr(m + 1)),
            (P = this.parse(R, Js)),
            (i = i.substr(0, v) + "\\[" + P[0]),
            (s = s || P[1])),
            y = a.pop();
          y;
          y = a.pop()
        ) {
          let I;
          (I = i.slice(y.reStart + y.open.length)),
            this.debug("setting tail", i, y),
            (I = I.replace(
              /((?:\\{2}){0,64})(\\?)\|/g,
              (Q, X, Te) => (Te || (Te = "\\"), X + X + Te + "|")
            )),
            this.debug(
              `tail=%j
   %s`,
              I,
              I,
              y,
              i
            );
          let N = y.type === "*" ? fu : y.type === "?" ? pu : "\\" + y.type;
          (s = !0), (i = i.slice(0, y.reStart) + N + "\\(" + I);
        }
        A(), o && (i += "\\\\");
        let j = __[i.charAt(0)];
        for (let I = u.length - 1; I > -1; I--) {
          let N = u[I],
            Q = i.slice(0, N.reStart),
            X = i.slice(N.reStart, N.reEnd - 8),
            Te = i.slice(N.reEnd),
            We = i.slice(N.reEnd - 8, N.reEnd) + Te,
            Ze = Q.split("(").length - 1,
            et = Te;
          for (let _e = 0; _e < Ze; _e++) et = et.replace(/\)[+*?]?/, "");
          Te = et;
          let Y = Te === "" && n !== Js ? "$" : "";
          i = Q + X + Te + Y + We;
        }
        if ((i !== "" && s && (i = "(?=.)" + i), j && (i = q + i), n === Js))
          return [i, s];
        if (!s) return C_(e);
        let E = r.nocase ? "i" : "";
        try {
          return Object.assign(new RegExp("^" + i + "$", E), {
            _glob: e,
            _src: i,
          });
        } catch {
          return new RegExp("$.");
        }
      }
      makeRe() {
        if (this.regexp || this.regexp === !1) return this.regexp;
        let e = this.set;
        if (!e.length) return (this.regexp = !1), this.regexp;
        let n = this.options,
          r = n.noglobstar ? fu : n.dot ? v_ : b_,
          i = n.nocase ? "i" : "",
          s = e
            .map(
              (o) => (
                (o = o
                  .map((a) =>
                    typeof a == "string" ? D_(a) : a === hn ? hn : a._src
                  )
                  .reduce(
                    (a, u) => (
                      (a[a.length - 1] === hn && u === hn) || a.push(u), a
                    ),
                    []
                  )),
                o.forEach((a, u) => {
                  a !== hn ||
                    o[u - 1] === hn ||
                    (u === 0
                      ? o.length > 1
                        ? (o[u + 1] = "(?:\\/|" + r + "\\/)?" + o[u + 1])
                        : (o[u] = r)
                      : u === o.length - 1
                      ? (o[u - 1] += "(?:\\/|" + r + ")?")
                      : ((o[u - 1] += "(?:\\/|\\/" + r + "\\/)" + o[u + 1]),
                        (o[u + 1] = hn)));
                }),
                o.filter((a) => a !== hn).join("/")
              )
            )
            .join("|");
        (s = "^(?:" + s + ")$"), this.negate && (s = "^(?!" + s + ").*$");
        try {
          this.regexp = new RegExp(s, i);
        } catch {
          this.regexp = !1;
        }
        return this.regexp;
      }
      match(e, n = this.partial) {
        if ((this.debug("match", e, this.pattern), this.comment)) return !1;
        if (this.empty) return e === "";
        if (e === "/" && n) return !0;
        let r = this.options;
        hu.sep !== "/" && (e = e.split(hu.sep).join("/")),
          (e = e.split(Vg)),
          this.debug(this.pattern, "split", e);
        let i = this.set;
        this.debug(this.pattern, "set", i);
        let s;
        for (let o = e.length - 1; o >= 0 && ((s = e[o]), !s); o--);
        for (let o = 0; o < i.length; o++) {
          let a = i[o],
            u = e;
          if (
            (r.matchBase && a.length === 1 && (u = [s]), this.matchOne(u, a, n))
          )
            return r.flipNegate ? !0 : !this.negate;
        }
        return r.flipNegate ? !1 : this.negate;
      }
      static defaults(e) {
        return zt.defaults(e).Minimatch;
      }
    };
  zt.Minimatch = ii;
});
var Cu = x((dr) => {
  "use strict";
  Object.defineProperty(dr, "__esModule", { value: !0 });
  dr.DiagnosticFeature = dr.DiagnosticPullMode = dr.vsdiag = void 0;
  var R_ = Ys(),
    he = require("vscode"),
    Qe = re(),
    S_ = He(),
    mu = ye();
  function Zs(t, e) {
    return t[e] === void 0 && (t[e] = {}), t[e];
  }
  var rn;
  (function (t) {
    let e;
    (function (n) {
      (n.full = "full"), (n.unChanged = "unChanged");
    })(
      (e =
        t.DocumentDiagnosticReportKind || (t.DocumentDiagnosticReportKind = {}))
    );
  })(rn || (dr.vsdiag = rn = {}));
  var eo;
  (function (t) {
    (t.onType = "onType"), (t.onSave = "onSave");
  })(eo || (dr.DiagnosticPullMode = eo = {}));
  var Dt;
  (function (t) {
    (t.active = "open"), (t.reschedule = "reschedule"), (t.outDated = "drop");
  })(Dt || (Dt = {}));
  var Rr = class {
      constructor() {
        (this.open = new Set()),
          (this._onOpen = new he.EventEmitter()),
          (this._onClose = new he.EventEmitter()),
          Rr.fillTabResources(this.open);
        let e = (n) => {
          if (n.closed.length === 0 && n.opened.length === 0) return;
          let r = this.open,
            i = new Set();
          Rr.fillTabResources(i);
          let s = new Set(),
            o = new Set(i);
          for (let a of r.values()) i.has(a) ? o.delete(a) : s.add(a);
          if (((this.open = i), s.size > 0)) {
            let a = new Set();
            for (let u of s) a.add(he.Uri.parse(u));
            this._onClose.fire(a);
          }
          if (o.size > 0) {
            let a = new Set();
            for (let u of o) a.add(he.Uri.parse(u));
            this._onOpen.fire(a);
          }
        };
        he.window.tabGroups.onDidChangeTabs !== void 0
          ? (this.disposable = he.window.tabGroups.onDidChangeTabs(e))
          : (this.disposable = { dispose: () => {} });
      }
      get onClose() {
        return this._onClose.event;
      }
      get onOpen() {
        return this._onOpen.event;
      }
      dispose() {
        this.disposable.dispose();
      }
      isActive(e) {
        return e instanceof he.Uri
          ? he.window.activeTextEditor?.document.uri === e
          : he.window.activeTextEditor?.document === e;
      }
      isVisible(e) {
        let n = e instanceof he.Uri ? e : e.uri;
        return this.open.has(n.toString());
      }
      getTabResources() {
        let e = new Set();
        return Rr.fillTabResources(new Set(), e), e;
      }
      static fillTabResources(e, n) {
        let r = e ?? new Set();
        for (let i of he.window.tabGroups.all)
          for (let s of i.tabs) {
            let o = s.input,
              a;
            o instanceof he.TabInputText
              ? (a = o.uri)
              : o instanceof he.TabInputTextDiff
              ? (a = o.modified)
              : o instanceof he.TabInputCustom && (a = o.uri),
              a !== void 0 &&
                !r.has(a.toString()) &&
                (r.add(a.toString()), n !== void 0 && n.add(a));
          }
      }
    },
    it;
  (function (t) {
    (t[(t.document = 1)] = "document"), (t[(t.workspace = 2)] = "workspace");
  })(it || (it = {}));
  var Mn;
  (function (t) {
    function e(n) {
      return n instanceof he.Uri ? n.toString() : n.uri.toString();
    }
    t.asKey = e;
  })(Mn || (Mn = {}));
  var yu = class {
      constructor() {
        (this.documentPullStates = new Map()),
          (this.workspacePullStates = new Map());
      }
      track(e, n, r) {
        let i =
            e === it.document
              ? this.documentPullStates
              : this.workspacePullStates,
          [s, o, a] =
            n instanceof he.Uri
              ? [n.toString(), n, r]
              : [n.uri.toString(), n.uri, n.version],
          u = i.get(s);
        return (
          u === void 0 &&
            ((u = { document: o, pulledVersion: a, resultId: void 0 }),
            i.set(s, u)),
          u
        );
      }
      update(e, n, r, i) {
        let s =
            e === it.document
              ? this.documentPullStates
              : this.workspacePullStates,
          [o, a, u, h] =
            n instanceof he.Uri
              ? [n.toString(), n, r, i]
              : [n.uri.toString(), n.uri, n.version, r],
          p = s.get(o);
        p === void 0
          ? ((p = { document: a, pulledVersion: u, resultId: h }), s.set(o, p))
          : ((p.pulledVersion = u), (p.resultId = h));
      }
      unTrack(e, n) {
        let r = Mn.asKey(n);
        (e === it.document
          ? this.documentPullStates
          : this.workspacePullStates
        ).delete(r);
      }
      tracks(e, n) {
        let r = Mn.asKey(n);
        return (
          e === it.document ? this.documentPullStates : this.workspacePullStates
        ).has(r);
      }
      getResultId(e, n) {
        let r = Mn.asKey(n);
        return (
          e === it.document ? this.documentPullStates : this.workspacePullStates
        ).get(r)?.resultId;
      }
      getAllResultIds() {
        let e = [];
        for (let [n, r] of this.workspacePullStates)
          this.documentPullStates.has(n) &&
            (r = this.documentPullStates.get(n)),
            r.resultId !== void 0 && e.push({ uri: n, value: r.resultId });
        return e;
      }
    },
    vu = class {
      constructor(e, n, r) {
        (this.client = e),
          (this.tabs = n),
          (this.options = r),
          (this.isDisposed = !1),
          (this.onDidChangeDiagnosticsEmitter = new he.EventEmitter()),
          (this.provider = this.createProvider()),
          (this.diagnostics = he.languages.createDiagnosticCollection(
            r.identifier
          )),
          (this.openRequests = new Map()),
          (this.documentStates = new yu()),
          (this.workspaceErrorCounter = 0);
      }
      knows(e, n) {
        let r = n instanceof he.Uri ? n : n.uri;
        return (
          this.documentStates.tracks(e, n) ||
          this.openRequests.has(r.toString())
        );
      }
      forget(e, n) {
        this.documentStates.unTrack(e, n);
      }
      pull(e, n) {
        if (this.isDisposed) return;
        let r = e instanceof he.Uri ? e : e.uri;
        this.pullAsync(e).then(
          () => {
            n && n();
          },
          (i) => {
            this.client.error(
              `Document pull failed for text document ${r.toString()}`,
              i,
              !1
            );
          }
        );
      }
      async pullAsync(e, n) {
        if (this.isDisposed) return;
        let r = e instanceof he.Uri,
          i = r ? e : e.uri,
          s = i.toString();
        n = r ? n : e.version;
        let o = this.openRequests.get(s),
          a = r
            ? this.documentStates.track(it.document, e, n)
            : this.documentStates.track(it.document, e);
        if (o === void 0) {
          let u = new he.CancellationTokenSource();
          this.openRequests.set(s, {
            state: Dt.active,
            document: e,
            version: n,
            tokenSource: u,
          });
          let h, p;
          try {
            h = (await this.provider.provideDiagnostics(
              e,
              a.resultId,
              u.token
            )) ?? { kind: rn.DocumentDiagnosticReportKind.full, items: [] };
          } catch (v) {
            if (
              (v instanceof mu.LSPCancellationError &&
                Qe.DiagnosticServerCancellationData.is(v.data) &&
                v.data.retriggerRequest === !1 &&
                (p = { state: Dt.outDated, document: e }),
              p === void 0 && v instanceof he.CancellationError)
            )
              p = { state: Dt.reschedule, document: e };
            else throw v;
          }
          if (((p = p ?? this.openRequests.get(s)), p === void 0)) {
            this.client.error(
              `Lost request state in diagnostic pull model. Clearing diagnostics for ${s}`
            ),
              this.diagnostics.delete(i);
            return;
          }
          if ((this.openRequests.delete(s), !this.tabs.isVisible(e))) {
            this.documentStates.unTrack(it.document, e);
            return;
          }
          if (p.state === Dt.outDated) return;
          h !== void 0 &&
            (h.kind === rn.DocumentDiagnosticReportKind.full &&
              this.diagnostics.set(i, h.items),
            (a.pulledVersion = n),
            (a.resultId = h.resultId)),
            p.state === Dt.reschedule && this.pull(e);
        } else
          o.state === Dt.active
            ? (o.tokenSource.cancel(),
              this.openRequests.set(s, {
                state: Dt.reschedule,
                document: o.document,
              }))
            : o.state === Dt.outDated &&
              this.openRequests.set(s, {
                state: Dt.reschedule,
                document: o.document,
              });
      }
      forgetDocument(e) {
        let n = e instanceof he.Uri ? e : e.uri,
          r = n.toString(),
          i = this.openRequests.get(r);
        this.options.workspaceDiagnostics
          ? i !== void 0
            ? this.openRequests.set(r, { state: Dt.reschedule, document: e })
            : this.pull(e, () => {
                this.forget(it.document, e);
              })
          : (i !== void 0 &&
              (i.state === Dt.active && i.tokenSource.cancel(),
              this.openRequests.set(r, { state: Dt.outDated, document: e })),
            this.diagnostics.delete(n),
            this.forget(it.document, e));
      }
      pullWorkspace() {
        this.isDisposed ||
          this.pullWorkspaceAsync().then(
            () => {
              this.workspaceTimeout = (0, Qe.RAL)().timer.setTimeout(() => {
                this.pullWorkspace();
              }, 2e3);
            },
            (e) => {
              !(e instanceof mu.LSPCancellationError) &&
                !Qe.DiagnosticServerCancellationData.is(e.data) &&
                (this.client.error("Workspace diagnostic pull failed.", e, !1),
                this.workspaceErrorCounter++),
                this.workspaceErrorCounter <= 5 &&
                  (this.workspaceTimeout = (0, Qe.RAL)().timer.setTimeout(
                    () => {
                      this.pullWorkspace();
                    },
                    2e3
                  ));
            }
          );
      }
      async pullWorkspaceAsync() {
        if (!this.provider.provideWorkspaceDiagnostics || this.isDisposed)
          return;
        this.workspaceCancellation !== void 0 &&
          (this.workspaceCancellation.cancel(),
          (this.workspaceCancellation = void 0)),
          (this.workspaceCancellation = new he.CancellationTokenSource());
        let e = this.documentStates.getAllResultIds().map((n) => ({
          uri: this.client.protocol2CodeConverter.asUri(n.uri),
          value: n.value,
        }));
        await this.provider.provideWorkspaceDiagnostics(
          e,
          this.workspaceCancellation.token,
          (n) => {
            if (!(!n || this.isDisposed))
              for (let r of n.items)
                r.kind === rn.DocumentDiagnosticReportKind.full &&
                  (this.documentStates.tracks(it.document, r.uri) ||
                    this.diagnostics.set(r.uri, r.items)),
                  this.documentStates.update(
                    it.workspace,
                    r.uri,
                    r.version ?? void 0,
                    r.resultId
                  );
          }
        );
      }
      createProvider() {
        let e = {
          onDidChangeDiagnostics: this.onDidChangeDiagnosticsEmitter.event,
          provideDiagnostics: (n, r, i) => {
            let s = (a, u, h) => {
                let p = {
                  identifier: this.options.identifier,
                  textDocument: {
                    uri: this.client.code2ProtocolConverter.asUri(
                      a instanceof he.Uri ? a : a.uri
                    ),
                  },
                  previousResultId: u,
                };
                return this.isDisposed === !0 || !this.client.isRunning()
                  ? { kind: rn.DocumentDiagnosticReportKind.full, items: [] }
                  : this.client
                      .sendRequest(Qe.DocumentDiagnosticRequest.type, p, h)
                      .then(
                        async (v) =>
                          v == null ||
                          this.isDisposed ||
                          h.isCancellationRequested
                            ? {
                                kind: rn.DocumentDiagnosticReportKind.full,
                                items: [],
                              }
                            : v.kind === Qe.DocumentDiagnosticReportKind.Full
                            ? {
                                kind: rn.DocumentDiagnosticReportKind.full,
                                resultId: v.resultId,
                                items:
                                  await this.client.protocol2CodeConverter.asDiagnostics(
                                    v.items,
                                    h
                                  ),
                              }
                            : {
                                kind: rn.DocumentDiagnosticReportKind.unChanged,
                                resultId: v.resultId,
                              },
                        (v) =>
                          this.client.handleFailedRequest(
                            Qe.DocumentDiagnosticRequest.type,
                            h,
                            v,
                            {
                              kind: rn.DocumentDiagnosticReportKind.full,
                              items: [],
                            }
                          )
                      );
              },
              o = this.client.middleware;
            return o.provideDiagnostics
              ? o.provideDiagnostics(n, r, i, s)
              : s(n, r, i);
          },
        };
        return (
          this.options.workspaceDiagnostics &&
            (e.provideWorkspaceDiagnostics = (n, r, i) => {
              let s = async (h) =>
                  h.kind === Qe.DocumentDiagnosticReportKind.Full
                    ? {
                        kind: rn.DocumentDiagnosticReportKind.full,
                        uri: this.client.protocol2CodeConverter.asUri(h.uri),
                        resultId: h.resultId,
                        version: h.version,
                        items:
                          await this.client.protocol2CodeConverter.asDiagnostics(
                            h.items,
                            r
                          ),
                      }
                    : {
                        kind: rn.DocumentDiagnosticReportKind.unChanged,
                        uri: this.client.protocol2CodeConverter.asUri(h.uri),
                        resultId: h.resultId,
                        version: h.version,
                      },
                o = (h) => {
                  let p = [];
                  for (let v of h)
                    p.push({
                      uri: this.client.code2ProtocolConverter.asUri(v.uri),
                      value: v.value,
                    });
                  return p;
                },
                a = (h, p) => {
                  let v = (0, S_.generateUuid)(),
                    m = this.client.onProgress(
                      Qe.WorkspaceDiagnosticRequest.partialResult,
                      v,
                      async (y) => {
                        if (y == null) {
                          i(null);
                          return;
                        }
                        let P = { items: [] };
                        for (let q of y.items)
                          try {
                            P.items.push(await s(q));
                          } catch (A) {
                            this.client.error(
                              "Converting workspace diagnostics failed.",
                              A
                            );
                          }
                        i(P);
                      }
                    ),
                    R = {
                      identifier: this.options.identifier,
                      previousResultIds: o(h),
                      partialResultToken: v,
                    };
                  return this.isDisposed === !0 || !this.client.isRunning()
                    ? { items: [] }
                    : this.client
                        .sendRequest(Qe.WorkspaceDiagnosticRequest.type, R, p)
                        .then(
                          async (y) => {
                            if (p.isCancellationRequested) return { items: [] };
                            let P = { items: [] };
                            for (let q of y.items) P.items.push(await s(q));
                            return m.dispose(), i(P), { items: [] };
                          },
                          (y) => (
                            m.dispose(),
                            this.client.handleFailedRequest(
                              Qe.DocumentDiagnosticRequest.type,
                              p,
                              y,
                              { items: [] }
                            )
                          )
                        );
                },
                u = this.client.middleware;
              return u.provideWorkspaceDiagnostics
                ? u.provideWorkspaceDiagnostics(n, r, i, a)
                : a(n, r, i);
            }),
          e
        );
      }
      dispose() {
        (this.isDisposed = !0),
          this.workspaceCancellation?.cancel(),
          this.workspaceTimeout?.dispose();
        for (let [e, n] of this.openRequests)
          n.state === Dt.active && n.tokenSource.cancel(),
            this.openRequests.set(e, {
              state: Dt.outDated,
              document: n.document,
            });
        this.diagnostics.dispose();
      }
    },
    bu = class {
      constructor(e) {
        (this.diagnosticRequestor = e),
          (this.documents = new Qe.LinkedMap()),
          (this.isDisposed = !1);
      }
      add(e) {
        if (this.isDisposed === !0) return;
        let n = Mn.asKey(e);
        this.documents.has(n) ||
          (this.documents.set(n, e, Qe.Touch.Last), this.trigger());
      }
      remove(e) {
        let n = Mn.asKey(e);
        this.documents.delete(n),
          this.documents.size === 0
            ? this.stop()
            : n === this.endDocumentKey() &&
              (this.endDocument = this.documents.last);
      }
      trigger() {
        if (this.isDisposed !== !0) {
          if (this.intervalHandle !== void 0) {
            this.endDocument = this.documents.last;
            return;
          }
          (this.endDocument = this.documents.last),
            (this.intervalHandle = (0, Qe.RAL)().timer.setInterval(() => {
              let e = this.documents.first;
              if (e !== void 0) {
                let n = Mn.asKey(e);
                this.diagnosticRequestor.pull(e),
                  this.documents.set(n, e, Qe.Touch.Last),
                  n === this.endDocumentKey() && this.stop();
              }
            }, 200));
        }
      }
      dispose() {
        (this.isDisposed = !0), this.stop(), this.documents.clear();
      }
      stop() {
        this.intervalHandle?.dispose(),
          (this.intervalHandle = void 0),
          (this.endDocument = void 0);
      }
      endDocumentKey() {
        return this.endDocument !== void 0
          ? Mn.asKey(this.endDocument)
          : void 0;
      }
    },
    _u = class {
      constructor(e, n, r) {
        let i = e.clientOptions.diagnosticPullOptions ?? {
            onChange: !0,
            onSave: !1,
          },
          s = e.protocol2CodeConverter.asDocumentSelector(r.documentSelector),
          o = [],
          a = (y) => {
            let P = r.documentSelector;
            if (i.match !== void 0) return i.match(P, y);
            for (let q of P)
              if (!!Qe.TextDocumentFilter.is(q)) {
                if (
                  typeof q == "string" ||
                  (q.language !== void 0 && q.language !== "*") ||
                  (q.scheme !== void 0 &&
                    q.scheme !== "*" &&
                    q.scheme !== y.scheme)
                )
                  return !1;
                if (q.pattern !== void 0) {
                  let A = new R_.Minimatch(q.pattern, { noext: !0 });
                  if (!A.makeRe() || !A.match(y.fsPath)) return !1;
                }
              }
            return !0;
          },
          u = (y) =>
            y instanceof he.Uri
              ? a(y)
              : he.languages.match(s, y) > 0 && n.isVisible(y),
          h = (y) =>
            y instanceof he.Uri
              ? this.activeTextDocument?.uri.toString() === y.toString()
              : this.activeTextDocument === y;
        (this.diagnosticRequestor = new vu(e, n, r)),
          (this.backgroundScheduler = new bu(this.diagnosticRequestor));
        let p = (y) => {
          !u(y) ||
            !r.interFileDependencies ||
            h(y) ||
            this.backgroundScheduler.add(y);
        };
        (this.activeTextDocument = he.window.activeTextEditor?.document),
          he.window.onDidChangeActiveTextEditor((y) => {
            let P = this.activeTextDocument;
            (this.activeTextDocument = y?.document),
              P !== void 0 && p(P),
              this.activeTextDocument !== void 0 &&
                this.backgroundScheduler.remove(this.activeTextDocument);
          });
        let v = e.getFeature(Qe.DidOpenTextDocumentNotification.method);
        o.push(
          v.onNotificationSent((y) => {
            let P = y.textDocument;
            this.diagnosticRequestor.knows(it.document, P) ||
              (u(P) &&
                this.diagnosticRequestor.pull(P, () => {
                  p(P);
                }));
          })
        ),
          o.push(
            n.onOpen((y) => {
              for (let P of y) {
                if (this.diagnosticRequestor.knows(it.document, P)) continue;
                let q = P.toString(),
                  A;
                for (let j of he.workspace.textDocuments)
                  if (q === j.uri.toString()) {
                    A = j;
                    break;
                  }
                A !== void 0 &&
                  u(A) &&
                  this.diagnosticRequestor.pull(A, () => {
                    p(A);
                  });
              }
            })
          );
        let m = new Set();
        for (let y of he.workspace.textDocuments)
          u(y) &&
            (this.diagnosticRequestor.pull(y, () => {
              p(y);
            }),
            m.add(y.uri.toString()));
        if (i.onTabs === !0)
          for (let y of n.getTabResources())
            !m.has(y.toString()) &&
              u(y) &&
              this.diagnosticRequestor.pull(y, () => {
                p(y);
              });
        if (i.onChange === !0) {
          let y = e.getFeature(Qe.DidChangeTextDocumentNotification.method);
          o.push(
            y.onNotificationSent(async (P) => {
              let q = P.textDocument;
              (i.filter === void 0 || !i.filter(q, eo.onType)) &&
                this.diagnosticRequestor.knows(it.document, q) &&
                this.diagnosticRequestor.pull(q, () => {
                  this.backgroundScheduler.trigger();
                });
            })
          );
        }
        if (i.onSave === !0) {
          let y = e.getFeature(Qe.DidSaveTextDocumentNotification.method);
          o.push(
            y.onNotificationSent((P) => {
              let q = P.textDocument;
              (i.filter === void 0 || !i.filter(q, eo.onSave)) &&
                this.diagnosticRequestor.knows(it.document, q) &&
                this.diagnosticRequestor.pull(P.textDocument, () => {
                  this.backgroundScheduler.trigger();
                });
            })
          );
        }
        let R = e.getFeature(Qe.DidCloseTextDocumentNotification.method);
        o.push(
          R.onNotificationSent((y) => {
            this.cleanUpDocument(y.textDocument);
          })
        ),
          n.onClose((y) => {
            for (let P of y) this.cleanUpDocument(P);
          }),
          this.diagnosticRequestor.onDidChangeDiagnosticsEmitter.event(() => {
            for (let y of he.workspace.textDocuments)
              u(y) && this.diagnosticRequestor.pull(y);
          }),
          r.workspaceDiagnostics === !0 &&
            r.identifier !== "da348dc5-c30a-4515-9d98-31ff3be38d14" &&
            this.diagnosticRequestor.pullWorkspace(),
          (this.disposable = he.Disposable.from(
            ...o,
            this.backgroundScheduler,
            this.diagnosticRequestor
          ));
      }
      get onDidChangeDiagnosticsEmitter() {
        return this.diagnosticRequestor.onDidChangeDiagnosticsEmitter;
      }
      get diagnostics() {
        return this.diagnosticRequestor.provider;
      }
      cleanUpDocument(e) {
        this.diagnosticRequestor.knows(it.document, e) &&
          (this.diagnosticRequestor.forgetDocument(e),
          this.backgroundScheduler.remove(e));
      }
    },
    wu = class extends mu.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Qe.DocumentDiagnosticRequest.type);
      }
      fillClientCapabilities(e) {
        let n = Zs(Zs(e, "textDocument"), "diagnostic");
        (n.dynamicRegistration = !0),
          (n.relatedDocumentSupport = !1),
          (Zs(Zs(e, "workspace"), "diagnostics").refreshSupport = !0);
      }
      initialize(e, n) {
        this._client.onRequest(Qe.DiagnosticRefreshRequest.type, async () => {
          for (let o of this.getAllProviders())
            o.onDidChangeDiagnosticsEmitter.fire();
        });
        let [i, s] = this.getRegistration(n, e.diagnosticProvider);
        !i || !s || this.register({ id: i, registerOptions: s });
      }
      clear() {
        this.tabs !== void 0 && (this.tabs.dispose(), (this.tabs = void 0)),
          super.clear();
      }
      registerLanguageProvider(e) {
        this.tabs === void 0 && (this.tabs = new Rr());
        let n = new _u(this._client, this.tabs, e);
        return [n.disposable, n];
      }
    };
  dr.DiagnosticFeature = wu;
});
var Yg = x((ro) => {
  "use strict";
  Object.defineProperty(ro, "__esModule", { value: !0 });
  ro.NotebookDocumentSyncFeature = void 0;
  var Rt = require("vscode"),
    T_ = Ys(),
    An = re(),
    P_ = He(),
    Jg = Yt();
  function Qg(t, e) {
    return t[e] === void 0 && (t[e] = {}), t[e];
  }
  var si;
  (function (t) {
    let e;
    (function (n) {
      function r(m, R) {
        return { version: m.version, uri: R.asUri(m.uri) };
      }
      n.asVersionedNotebookDocumentIdentifier = r;
      function i(m, R, y) {
        let P = An.NotebookDocument.create(
          y.asUri(m.uri),
          m.notebookType,
          m.version,
          s(R, y)
        );
        return (
          Object.keys(m.metadata).length > 0 && (P.metadata = o(m.metadata)), P
        );
      }
      n.asNotebookDocument = i;
      function s(m, R) {
        return m.map((y) => a(y, R));
      }
      n.asNotebookCells = s;
      function o(m) {
        return h(new Set(), m);
      }
      n.asMetadata = o;
      function a(m, R) {
        let y = An.NotebookCell.create(u(m.kind), R.asUri(m.document.uri));
        return (
          Object.keys(m.metadata).length > 0 && (y.metadata = o(m.metadata)),
          m.executionSummary !== void 0 &&
            Jg.number(m.executionSummary.executionOrder) &&
            Jg.boolean(m.executionSummary.success) &&
            (y.executionSummary = {
              executionOrder: m.executionSummary.executionOrder,
              success: m.executionSummary.success,
            }),
          y
        );
      }
      n.asNotebookCell = a;
      function u(m) {
        switch (m) {
          case Rt.NotebookCellKind.Markup:
            return An.NotebookCellKind.Markup;
          case Rt.NotebookCellKind.Code:
            return An.NotebookCellKind.Code;
        }
      }
      function h(m, R) {
        if (m.has(R)) throw new Error("Can't deep copy cyclic structures.");
        if (Array.isArray(R)) {
          let y = [];
          for (let P of R)
            if ((P !== null && typeof P == "object") || Array.isArray(P))
              y.push(h(m, P));
            else {
              if (P instanceof RegExp)
                throw new Error(
                  "Can't transfer regular expressions to the server"
                );
              y.push(P);
            }
          return y;
        } else {
          let y = Object.keys(R),
            P = Object.create(null);
          for (let q of y) {
            let A = R[q];
            if ((A !== null && typeof A == "object") || Array.isArray(A))
              P[q] = h(m, A);
            else {
              if (A instanceof RegExp)
                throw new Error(
                  "Can't transfer regular expressions to the server"
                );
              P[q] = A;
            }
          }
          return P;
        }
      }
      function p(m, R) {
        let y = R.asChangeTextDocumentParams(
          m,
          m.document.uri,
          m.document.version
        );
        return { document: y.textDocument, changes: y.contentChanges };
      }
      n.asTextContentChange = p;
      function v(m, R) {
        let y = Object.create(null);
        if (
          (m.metadata && (y.metadata = t.c2p.asMetadata(m.metadata)),
          m.cells !== void 0)
        ) {
          let P = Object.create(null),
            q = m.cells;
          q.structure &&
            (P.structure = {
              array: {
                start: q.structure.array.start,
                deleteCount: q.structure.array.deleteCount,
                cells:
                  q.structure.array.cells !== void 0
                    ? q.structure.array.cells.map((A) =>
                        t.c2p.asNotebookCell(A, R)
                      )
                    : void 0,
              },
              didOpen:
                q.structure.didOpen !== void 0
                  ? q.structure.didOpen.map(
                      (A) => R.asOpenTextDocumentParams(A.document).textDocument
                    )
                  : void 0,
              didClose:
                q.structure.didClose !== void 0
                  ? q.structure.didClose.map(
                      (A) =>
                        R.asCloseTextDocumentParams(A.document).textDocument
                    )
                  : void 0,
            }),
            q.data !== void 0 &&
              (P.data = q.data.map((A) => t.c2p.asNotebookCell(A, R))),
            q.textContent !== void 0 &&
              (P.textContent = q.textContent.map((A) =>
                t.c2p.asTextContentChange(A, R)
              )),
            Object.keys(P).length > 0 && (y.cells = P);
        }
        return y;
      }
      n.asNotebookDocumentChangeEvent = v;
    })((e = t.c2p || (t.c2p = {})));
  })(si || (si = {}));
  var Du;
  (function (t) {
    function e(a, u, h) {
      let p = a.length,
        v = u.length,
        m = 0;
      for (; m < v && m < p && n(a[m], u[m], h); ) m++;
      if (m < v && m < p) {
        let R = p - 1,
          y = v - 1;
        for (; R >= 0 && y >= 0 && n(a[R], u[y], h); ) R--, y--;
        let P = R + 1 - m,
          q = m === y + 1 ? void 0 : u.slice(m, y + 1);
        return q !== void 0
          ? { start: m, deleteCount: P, cells: q }
          : { start: m, deleteCount: P };
      } else
        return m < v
          ? { start: m, deleteCount: 0, cells: u.slice(m) }
          : m < p
          ? { start: m, deleteCount: p - m }
          : void 0;
    }
    t.computeDiff = e;
    function n(a, u, h = !0) {
      return a.kind !== u.kind ||
        a.document.uri.toString() !== u.document.uri.toString() ||
        a.document.languageId !== u.document.languageId ||
        !r(a.executionSummary, u.executionSummary)
        ? !1
        : !h || (h && s(a.metadata, u.metadata));
    }
    function r(a, u) {
      return a === u
        ? !0
        : a === void 0 || u === void 0
        ? !1
        : a.executionOrder === u.executionOrder &&
          a.success === u.success &&
          i(a.timing, u.timing);
    }
    function i(a, u) {
      return a === u
        ? !0
        : a === void 0 || u === void 0
        ? !1
        : a.startTime === u.startTime && a.endTime === u.endTime;
    }
    function s(a, u) {
      if (a === u) return !0;
      if (
        a == null ||
        u === null ||
        u === void 0 ||
        typeof a != typeof u ||
        typeof a != "object"
      )
        return !1;
      let h = Array.isArray(a),
        p = Array.isArray(u);
      if (h !== p) return !1;
      if (h && p) {
        if (a.length !== u.length) return !1;
        for (let v = 0; v < a.length; v++) if (!s(a[v], u[v])) return !1;
      }
      if (o(a) && o(u)) {
        let v = Object.keys(a),
          m = Object.keys(u);
        if (v.length !== m.length || (v.sort(), m.sort(), !s(v, m))) return !1;
        for (let R = 0; R < v.length; R++) {
          let y = v[R];
          if (!s(a[y], u[y])) return !1;
        }
        return !0;
      }
      return !1;
    }
    function o(a) {
      return a !== null && typeof a == "object";
    }
    t.isObjectLiteral = o;
  })(Du || (Du = {}));
  var Ru;
  (function (t) {
    function e(n, r) {
      if (typeof n == "string") return n === "*" || r.notebookType === n;
      if (
        n.notebookType !== void 0 &&
        n.notebookType !== "*" &&
        r.notebookType !== n.notebookType
      )
        return !1;
      let i = r.uri;
      if (n.scheme !== void 0 && n.scheme !== "*" && i.scheme !== n.scheme)
        return !1;
      if (n.pattern !== void 0) {
        let s = new T_.Minimatch(n.pattern, { noext: !0 });
        if (!s.makeRe() || !s.match(i.fsPath)) return !1;
      }
      return !0;
    }
    t.matchNotebook = e;
  })(Ru || (Ru = {}));
  var to;
  (function (t) {
    function e(r) {
      let i = r.notebookSelector,
        s = [];
      for (let o of i) {
        let a =
            (typeof o.notebook == "string"
              ? o.notebook
              : o.notebook?.notebookType) ?? "*",
          u = typeof o.notebook == "string" ? void 0 : o.notebook?.scheme,
          h = typeof o.notebook == "string" ? void 0 : o.notebook?.pattern;
        if (o.cells !== void 0)
          for (let p of o.cells) s.push(n(a, u, h, p.language));
        else s.push(n(a, u, h, void 0));
      }
      return s;
    }
    t.asDocumentSelector = e;
    function n(r, i, s, o) {
      return i === void 0 && s === void 0
        ? { notebook: r, language: o }
        : { notebook: { notebookType: r, scheme: i, pattern: s }, language: o };
    }
  })(to || (to = {}));
  var no;
  (function (t) {
    function e(n) {
      return {
        cells: n,
        uris: new Set(n.map((r) => r.document.uri.toString())),
      };
    }
    t.create = e;
  })(no || (no = {}));
  var oi = class {
      constructor(e, n) {
        (this.client = e),
          (this.options = n),
          (this.notebookSyncInfo = new Map()),
          (this.notebookDidOpen = new Set()),
          (this.disposables = []),
          (this.selector = e.protocol2CodeConverter.asDocumentSelector(
            to.asDocumentSelector(n)
          )),
          Rt.workspace.onDidOpenNotebookDocument(
            (r) => {
              this.notebookDidOpen.add(r.uri.toString()), this.didOpen(r);
            },
            void 0,
            this.disposables
          );
        for (let r of Rt.workspace.notebookDocuments)
          this.notebookDidOpen.add(r.uri.toString()), this.didOpen(r);
        Rt.workspace.onDidChangeNotebookDocument(
          (r) => this.didChangeNotebookDocument(r),
          void 0,
          this.disposables
        ),
          this.options.save === !0 &&
            Rt.workspace.onDidSaveNotebookDocument(
              (r) => this.didSave(r),
              void 0,
              this.disposables
            ),
          Rt.workspace.onDidCloseNotebookDocument(
            (r) => {
              this.didClose(r), this.notebookDidOpen.delete(r.uri.toString());
            },
            void 0,
            this.disposables
          );
      }
      getState() {
        for (let e of Rt.workspace.notebookDocuments)
          if (this.getMatchingCells(e) !== void 0)
            return {
              kind: "document",
              id: "$internal",
              registrations: !0,
              matches: !0,
            };
        return {
          kind: "document",
          id: "$internal",
          registrations: !0,
          matches: !1,
        };
      }
      get mode() {
        return "notebook";
      }
      handles(e) {
        return Rt.languages.match(this.selector, e) > 0;
      }
      didOpenNotebookCellTextDocument(e, n) {
        if (
          Rt.languages.match(this.selector, n.document) === 0 ||
          !this.notebookDidOpen.has(e.uri.toString())
        )
          return;
        let r = this.notebookSyncInfo.get(e.uri.toString()),
          i = this.cellMatches(e, n);
        if (r !== void 0) {
          let s = r.uris.has(n.document.uri.toString());
          if ((i && s) || (!i && !s)) return;
          if (i) {
            let o = this.getMatchingCells(e);
            if (o !== void 0) {
              let a = this.asNotebookDocumentChangeEvent(e, void 0, r, o);
              a !== void 0 && this.doSendChange(a, o).catch(() => {});
            }
          }
        } else i && this.doSendOpen(e, [n]).catch(() => {});
      }
      didChangeNotebookCellTextDocument(e, n) {
        Rt.languages.match(this.selector, n.document) !== 0 &&
          this.doSendChange(
            { notebook: e, cells: { textContent: [n] } },
            void 0
          ).catch(() => {});
      }
      didCloseNotebookCellTextDocument(e, n) {
        let r = this.notebookSyncInfo.get(e.uri.toString());
        if (r === void 0) return;
        let i = n.document.uri,
          s = r.cells.findIndex(
            (o) => o.document.uri.toString() === i.toString()
          );
        if (s !== -1)
          if (s === 0 && r.cells.length === 1)
            this.doSendClose(e, r.cells).catch(() => {});
          else {
            let o = r.cells.slice(),
              a = o.splice(s, 1);
            this.doSendChange(
              {
                notebook: e,
                cells: {
                  structure: {
                    array: { start: s, deleteCount: 1 },
                    didClose: a,
                  },
                },
              },
              o
            ).catch(() => {});
          }
      }
      dispose() {
        for (let e of this.disposables) e.dispose();
      }
      didOpen(
        e,
        n = this.getMatchingCells(e),
        r = this.notebookSyncInfo.get(e.uri.toString())
      ) {
        if (r !== void 0)
          if (n !== void 0) {
            let i = this.asNotebookDocumentChangeEvent(e, void 0, r, n);
            i !== void 0 && this.doSendChange(i, n).catch(() => {});
          } else this.doSendClose(e, []).catch(() => {});
        else {
          if (n === void 0) return;
          this.doSendOpen(e, n).catch(() => {});
        }
      }
      didChangeNotebookDocument(e) {
        let n = e.notebook,
          r = this.notebookSyncInfo.get(n.uri.toString());
        if (r === void 0) {
          if (e.contentChanges.length === 0) return;
          let i = this.getMatchingCells(n);
          if (i === void 0) return;
          this.didOpen(n, i, r);
        } else {
          let i = this.getMatchingCells(n);
          if (i === void 0) {
            this.didClose(n, r);
            return;
          }
          let s = this.asNotebookDocumentChangeEvent(e.notebook, e, r, i);
          s !== void 0 && this.doSendChange(s, i).catch(() => {});
        }
      }
      didSave(e) {
        this.notebookSyncInfo.get(e.uri.toString()) !== void 0 &&
          this.doSendSave(e).catch(() => {});
      }
      didClose(e, n = this.notebookSyncInfo.get(e.uri.toString())) {
        if (n === void 0) return;
        let r = e
          .getCells()
          .filter((i) => n.uris.has(i.document.uri.toString()));
        this.doSendClose(e, r).catch(() => {});
      }
      async sendDidOpenNotebookDocument(e) {
        let n = this.getMatchingCells(e);
        if (n !== void 0) return this.doSendOpen(e, n);
      }
      async doSendOpen(e, n) {
        let r = async (s, o) => {
            let a = si.c2p.asNotebookDocument(
                s,
                o,
                this.client.code2ProtocolConverter
              ),
              u = o.map((h) =>
                this.client.code2ProtocolConverter.asTextDocumentItem(
                  h.document
                )
              );
            try {
              await this.client.sendNotification(
                An.DidOpenNotebookDocumentNotification.type,
                { notebookDocument: a, cellTextDocuments: u }
              );
            } catch (h) {
              throw (
                (this.client.error(
                  "Sending DidOpenNotebookDocumentNotification failed",
                  h
                ),
                h)
              );
            }
          },
          i = this.client.middleware?.notebooks;
        return (
          this.notebookSyncInfo.set(e.uri.toString(), no.create(n)),
          i?.didOpen !== void 0 ? i.didOpen(e, n, r) : r(e, n)
        );
      }
      async sendDidChangeNotebookDocument(e) {
        return this.doSendChange(e, void 0);
      }
      async doSendChange(e, n = this.getMatchingCells(e.notebook)) {
        let r = async (s) => {
            try {
              await this.client.sendNotification(
                An.DidChangeNotebookDocumentNotification.type,
                {
                  notebookDocument:
                    si.c2p.asVersionedNotebookDocumentIdentifier(
                      s.notebook,
                      this.client.code2ProtocolConverter
                    ),
                  change: si.c2p.asNotebookDocumentChangeEvent(
                    s,
                    this.client.code2ProtocolConverter
                  ),
                }
              );
            } catch (o) {
              throw (
                (this.client.error(
                  "Sending DidChangeNotebookDocumentNotification failed",
                  o
                ),
                o)
              );
            }
          },
          i = this.client.middleware?.notebooks;
        return (
          e.cells?.structure !== void 0 &&
            this.notebookSyncInfo.set(
              e.notebook.uri.toString(),
              no.create(n ?? [])
            ),
          i?.didChange !== void 0 ? i?.didChange(e, r) : r(e)
        );
      }
      async sendDidSaveNotebookDocument(e) {
        return this.doSendSave(e);
      }
      async doSendSave(e) {
        let n = async (i) => {
            try {
              await this.client.sendNotification(
                An.DidSaveNotebookDocumentNotification.type,
                {
                  notebookDocument: {
                    uri: this.client.code2ProtocolConverter.asUri(i.uri),
                  },
                }
              );
            } catch (s) {
              throw (
                (this.client.error(
                  "Sending DidSaveNotebookDocumentNotification failed",
                  s
                ),
                s)
              );
            }
          },
          r = this.client.middleware?.notebooks;
        return r?.didSave !== void 0 ? r.didSave(e, n) : n(e);
      }
      async sendDidCloseNotebookDocument(e) {
        return this.doSendClose(e, this.getMatchingCells(e) ?? []);
      }
      async doSendClose(e, n) {
        let r = async (s, o) => {
            try {
              await this.client.sendNotification(
                An.DidCloseNotebookDocumentNotification.type,
                {
                  notebookDocument: {
                    uri: this.client.code2ProtocolConverter.asUri(s.uri),
                  },
                  cellTextDocuments: o.map((a) =>
                    this.client.code2ProtocolConverter.asTextDocumentIdentifier(
                      a.document
                    )
                  ),
                }
              );
            } catch (a) {
              throw (
                (this.client.error(
                  "Sending DidCloseNotebookDocumentNotification failed",
                  a
                ),
                a)
              );
            }
          },
          i = this.client.middleware?.notebooks;
        return (
          this.notebookSyncInfo.delete(e.uri.toString()),
          i?.didClose !== void 0 ? i.didClose(e, n, r) : r(e, n)
        );
      }
      asNotebookDocumentChangeEvent(e, n, r, i) {
        if (n !== void 0 && n.notebook !== e)
          throw new Error("Notebook must be identical");
        let s = { notebook: e };
        n?.metadata !== void 0 && (s.metadata = si.c2p.asMetadata(n.metadata));
        let o;
        if (n?.cellChanges !== void 0 && n.cellChanges.length > 0) {
          let a = [];
          o = new Set(i.map((u) => u.document.uri.toString()));
          for (let u of n.cellChanges)
            o.has(u.cell.document.uri.toString()) &&
              (u.executionSummary !== void 0 || u.metadata !== void 0) &&
              a.push(u.cell);
          a.length > 0 && ((s.cells = s.cells ?? {}), (s.cells.data = a));
        }
        if (
          ((n?.contentChanges !== void 0 && n.contentChanges.length > 0) ||
            n === void 0) &&
          r !== void 0 &&
          i !== void 0
        ) {
          let a = r.cells,
            u = i,
            h = Du.computeDiff(a, u, !1),
            p,
            v;
          if (h !== void 0) {
            (p =
              h.cells === void 0
                ? new Map()
                : new Map(h.cells.map((y) => [y.document.uri.toString(), y]))),
              (v =
                h.deleteCount === 0
                  ? new Map()
                  : new Map(
                      a
                        .slice(h.start, h.start + h.deleteCount)
                        .map((y) => [y.document.uri.toString(), y])
                    ));
            for (let y of Array.from(v.keys()))
              p.has(y) && (v.delete(y), p.delete(y));
            s.cells = s.cells ?? {};
            let m = [],
              R = [];
            if (p.size > 0 || v.size > 0) {
              for (let y of p.values()) m.push(y);
              for (let y of v.values()) R.push(y);
            }
            s.cells.structure = { array: h, didOpen: m, didClose: R };
          }
        }
        return Object.keys(s).length > 1 ? s : void 0;
      }
      getMatchingCells(e, n = e.getCells()) {
        if (this.options.notebookSelector !== void 0) {
          for (let r of this.options.notebookSelector)
            if (r.notebook === void 0 || Ru.matchNotebook(r.notebook, e)) {
              let i = this.filterCells(e, n, r.cells);
              return i.length === 0 ? void 0 : i;
            }
        }
      }
      cellMatches(e, n) {
        let r = this.getMatchingCells(e, [n]);
        return r !== void 0 && r[0] === n;
      }
      filterCells(e, n, r) {
        let i =
          r !== void 0
            ? n.filter((s) => {
                let o = s.document.languageId;
                return r.some((a) => a.language === "*" || o === a.language);
              })
            : n;
        return typeof this.client.clientOptions.notebookDocumentOptions
          ?.filterCells == "function"
          ? this.client.clientOptions.notebookDocumentOptions.filterCells(e, i)
          : i;
      }
    },
    jn = class {
      constructor(e) {
        (this.client = e),
          (this.registrations = new Map()),
          (this.registrationType =
            An.NotebookDocumentSyncRegistrationType.type),
          Rt.workspace.onDidOpenTextDocument((n) => {
            if (n.uri.scheme !== jn.CellScheme) return;
            let [r, i] = this.findNotebookDocumentAndCell(n);
            if (!(r === void 0 || i === void 0))
              for (let s of this.registrations.values())
                s instanceof oi && s.didOpenNotebookCellTextDocument(r, i);
          }),
          Rt.workspace.onDidChangeTextDocument((n) => {
            if (n.contentChanges.length === 0) return;
            let r = n.document;
            if (r.uri.scheme !== jn.CellScheme) return;
            let [i] = this.findNotebookDocumentAndCell(r);
            if (i !== void 0)
              for (let s of this.registrations.values())
                s instanceof oi && s.didChangeNotebookCellTextDocument(i, n);
          }),
          Rt.workspace.onDidCloseTextDocument((n) => {
            if (n.uri.scheme !== jn.CellScheme) return;
            let [r, i] = this.findNotebookDocumentAndCell(n);
            if (!(r === void 0 || i === void 0))
              for (let s of this.registrations.values())
                s instanceof oi && s.didCloseNotebookCellTextDocument(r, i);
          });
      }
      getState() {
        if (this.registrations.size === 0)
          return {
            kind: "document",
            id: this.registrationType.method,
            registrations: !1,
            matches: !1,
          };
        for (let e of this.registrations.values()) {
          let n = e.getState();
          if (
            n.kind === "document" &&
            n.registrations === !0 &&
            n.matches === !0
          )
            return {
              kind: "document",
              id: this.registrationType.method,
              registrations: !0,
              matches: !0,
            };
        }
        return {
          kind: "document",
          id: this.registrationType.method,
          registrations: !0,
          matches: !1,
        };
      }
      fillClientCapabilities(e) {
        let n = Qg(Qg(e, "notebookDocument"), "synchronization");
        (n.dynamicRegistration = !0), (n.executionSummarySupport = !0);
      }
      preInitialize(e) {
        let n = e.notebookDocumentSync;
        n !== void 0 &&
          (this.dedicatedChannel =
            this.client.protocol2CodeConverter.asDocumentSelector(
              to.asDocumentSelector(n)
            ));
      }
      initialize(e) {
        let n = e.notebookDocumentSync;
        if (n === void 0) return;
        let r = n.id ?? P_.generateUuid();
        this.register({ id: r, registerOptions: n });
      }
      register(e) {
        let n = new oi(this.client, e.registerOptions);
        this.registrations.set(e.id, n);
      }
      unregister(e) {
        let n = this.registrations.get(e);
        n && n.dispose();
      }
      clear() {
        for (let e of this.registrations.values()) e.dispose();
        this.registrations.clear();
      }
      handles(e) {
        if (e.uri.scheme !== jn.CellScheme) return !1;
        if (
          this.dedicatedChannel !== void 0 &&
          Rt.languages.match(this.dedicatedChannel, e) > 0
        )
          return !0;
        for (let n of this.registrations.values()) if (n.handles(e)) return !0;
        return !1;
      }
      getProvider(e) {
        for (let n of this.registrations.values())
          if (n.handles(e.document)) return n;
      }
      findNotebookDocumentAndCell(e) {
        let n = e.uri.toString();
        for (let r of Rt.workspace.notebookDocuments)
          for (let i of r.getCells())
            if (i.document.uri.toString() === n) return [r, i];
        return [void 0, void 0];
      }
    };
  ro.NotebookDocumentSyncFeature = jn;
  jn.CellScheme = "vscode-notebook-cell";
});
var em = x((fr) => {
  "use strict";
  Object.defineProperty(fr, "__esModule", { value: !0 });
  fr.SyncConfigurationFeature =
    fr.toJSONObject =
    fr.ConfigurationFeature =
      void 0;
  var ai = require("vscode"),
    Li = re(),
    E_ = Yt(),
    k_ = He(),
    Zg = ye(),
    Su = class {
      constructor(e) {
        this._client = e;
      }
      getState() {
        return { kind: "static" };
      }
      fillClientCapabilities(e) {
        (e.workspace = e.workspace || {}), (e.workspace.configuration = !0);
      }
      initialize() {
        let e = this._client;
        e.onRequest(Li.ConfigurationRequest.type, (n, r) => {
          let i = (o) => {
              let a = [];
              for (let u of o.items) {
                let h =
                  u.scopeUri !== void 0 && u.scopeUri !== null
                    ? this._client.protocol2CodeConverter.asUri(u.scopeUri)
                    : void 0;
                a.push(
                  this.getConfiguration(
                    h,
                    u.section !== null ? u.section : void 0
                  )
                );
              }
              return a;
            },
            s = e.middleware.workspace;
          return s && s.configuration ? s.configuration(n, r, i) : i(n, r);
        });
      }
      getConfiguration(e, n) {
        let r = null;
        if (n) {
          let i = n.lastIndexOf(".");
          if (i === -1) r = Sr(ai.workspace.getConfiguration(void 0, e).get(n));
          else {
            let s = ai.workspace.getConfiguration(n.substr(0, i), e);
            s && (r = Sr(s.get(n.substr(i + 1))));
          }
        } else {
          let i = ai.workspace.getConfiguration(void 0, e);
          r = {};
          for (let s of Object.keys(i)) i.has(s) && (r[s] = Sr(i.get(s)));
        }
        return r === void 0 && (r = null), r;
      }
      clear() {}
    };
  fr.ConfigurationFeature = Su;
  function Sr(t) {
    if (t) {
      if (Array.isArray(t)) return t.map(Sr);
      if (typeof t == "object") {
        let e = Object.create(null);
        for (let n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = Sr(t[n]));
        return e;
      }
    }
    return t;
  }
  fr.toJSONObject = Sr;
  var Tu = class {
    constructor(e) {
      (this._client = e), (this.isCleared = !1), (this._listeners = new Map());
    }
    getState() {
      return {
        kind: "workspace",
        id: this.registrationType.method,
        registrations: this._listeners.size > 0,
      };
    }
    get registrationType() {
      return Li.DidChangeConfigurationNotification.type;
    }
    fillClientCapabilities(e) {
      (0, Zg.ensure)(
        (0, Zg.ensure)(e, "workspace"),
        "didChangeConfiguration"
      ).dynamicRegistration = !0;
    }
    initialize() {
      this.isCleared = !1;
      let e = this._client.clientOptions.synchronize?.configurationSection;
      e !== void 0 &&
        this.register({
          id: k_.generateUuid(),
          registerOptions: { section: e },
        });
    }
    register(e) {
      let n = ai.workspace.onDidChangeConfiguration((r) => {
        this.onDidChangeConfiguration(e.registerOptions.section, r);
      });
      this._listeners.set(e.id, n),
        e.registerOptions.section !== void 0 &&
          this.onDidChangeConfiguration(e.registerOptions.section, void 0);
    }
    unregister(e) {
      let n = this._listeners.get(e);
      n && (this._listeners.delete(e), n.dispose());
    }
    clear() {
      for (let e of this._listeners.values()) e.dispose();
      this._listeners.clear(), (this.isCleared = !0);
    }
    onDidChangeConfiguration(e, n) {
      if (this.isCleared) return;
      let r;
      if (
        (E_.string(e) ? (r = [e]) : (r = e),
        r !== void 0 &&
          n !== void 0 &&
          !r.some((a) => n.affectsConfiguration(a)))
      )
        return;
      let i = async (o) =>
          o === void 0
            ? this._client.sendNotification(
                Li.DidChangeConfigurationNotification.type,
                { settings: null }
              )
            : this._client.sendNotification(
                Li.DidChangeConfigurationNotification.type,
                { settings: this.extractSettingsInformation(o) }
              ),
        s = this._client.middleware.workspace?.didChangeConfiguration;
      (s ? s(r, i) : i(r)).catch((o) => {
        this._client.error(
          `Sending notification ${Li.DidChangeConfigurationNotification.type.method} failed`,
          o
        );
      });
    }
    extractSettingsInformation(e) {
      function n(s, o) {
        let a = s;
        for (let u = 0; u < o.length - 1; u++) {
          let h = a[o[u]];
          h || ((h = Object.create(null)), (a[o[u]] = h)), (a = h);
        }
        return a;
      }
      let r = this._client.clientOptions.workspaceFolder
          ? this._client.clientOptions.workspaceFolder.uri
          : void 0,
        i = Object.create(null);
      for (let s = 0; s < e.length; s++) {
        let o = e[s],
          a = o.indexOf("."),
          u = null;
        if (
          (a >= 0
            ? (u = ai.workspace
                .getConfiguration(o.substr(0, a), r)
                .get(o.substr(a + 1)))
            : (u = ai.workspace.getConfiguration(void 0, r).get(o)),
          u)
        ) {
          let h = e[s].split(".");
          n(i, h)[h[h.length - 1]] = Sr(u);
        }
      }
      return i;
    }
  };
  fr.SyncConfigurationFeature = Tu;
});
var tm = x((Mt) => {
  "use strict";
  Object.defineProperty(Mt, "__esModule", { value: !0 });
  Mt.DidSaveTextDocumentFeature =
    Mt.WillSaveWaitUntilFeature =
    Mt.WillSaveFeature =
    Mt.DidChangeTextDocumentFeature =
    Mt.DidCloseTextDocumentFeature =
    Mt.DidOpenTextDocumentFeature =
      void 0;
  var Bt = require("vscode"),
    Fe = re(),
    ze = ye(),
    ci = He(),
    Pu = class extends ze.TextDocumentEventFeature {
      constructor(e, n) {
        super(
          e,
          Bt.workspace.onDidOpenTextDocument,
          Fe.DidOpenTextDocumentNotification.type,
          () => e.middleware.didOpen,
          (r) => e.code2ProtocolConverter.asOpenTextDocumentParams(r),
          (r) => r,
          ze.TextDocumentEventFeature.textDocumentFilter
        ),
          (this._syncedDocuments = n);
      }
      get openDocuments() {
        return this._syncedDocuments.values();
      }
      fillClientCapabilities(e) {
        (0, ze.ensure)(
          (0, ze.ensure)(e, "textDocument"),
          "synchronization"
        ).dynamicRegistration = !0;
      }
      initialize(e, n) {
        let r = e.resolvedTextDocumentSync;
        n &&
          r &&
          r.openClose &&
          this.register({
            id: ci.generateUuid(),
            registerOptions: { documentSelector: n },
          });
      }
      get registrationType() {
        return Fe.DidOpenTextDocumentNotification.type;
      }
      register(e) {
        if ((super.register(e), !e.registerOptions.documentSelector)) return;
        let n = this._client.protocol2CodeConverter.asDocumentSelector(
          e.registerOptions.documentSelector
        );
        Bt.workspace.textDocuments.forEach((r) => {
          let i = r.uri.toString();
          if (
            !this._syncedDocuments.has(i) &&
            Bt.languages.match(n, r) > 0 &&
            !this._client.hasDedicatedTextSynchronizationFeature(r)
          ) {
            let s = this._client.middleware,
              o = (a) =>
                this._client.sendNotification(
                  this._type,
                  this._createParams(a)
                );
            (s.didOpen ? s.didOpen(r, o) : o(r)).catch((a) => {
              this._client.error(
                `Sending document notification ${this._type.method} failed`,
                a
              );
            }),
              this._syncedDocuments.set(i, r);
          }
        });
      }
      getTextDocument(e) {
        return e;
      }
      notificationSent(e, n, r) {
        this._syncedDocuments.set(e.uri.toString(), e),
          super.notificationSent(e, n, r);
      }
    };
  Mt.DidOpenTextDocumentFeature = Pu;
  var Eu = class extends ze.TextDocumentEventFeature {
    constructor(e, n, r) {
      super(
        e,
        Bt.workspace.onDidCloseTextDocument,
        Fe.DidCloseTextDocumentNotification.type,
        () => e.middleware.didClose,
        (i) => e.code2ProtocolConverter.asCloseTextDocumentParams(i),
        (i) => i,
        ze.TextDocumentEventFeature.textDocumentFilter
      ),
        (this._syncedDocuments = n),
        (this._pendingTextDocumentChanges = r);
    }
    get registrationType() {
      return Fe.DidCloseTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      (0, ze.ensure)(
        (0, ze.ensure)(e, "textDocument"),
        "synchronization"
      ).dynamicRegistration = !0;
    }
    initialize(e, n) {
      let r = e.resolvedTextDocumentSync;
      n &&
        r &&
        r.openClose &&
        this.register({
          id: ci.generateUuid(),
          registerOptions: { documentSelector: n },
        });
    }
    async callback(e) {
      await super.callback(e),
        this._pendingTextDocumentChanges.delete(e.uri.toString());
    }
    getTextDocument(e) {
      return e;
    }
    notificationSent(e, n, r) {
      this._syncedDocuments.delete(e.uri.toString()),
        super.notificationSent(e, n, r);
    }
    unregister(e) {
      let n = this._selectors.get(e);
      super.unregister(e);
      let r = this._selectors.values();
      this._syncedDocuments.forEach((i) => {
        if (
          Bt.languages.match(n, i) > 0 &&
          !this._selectorFilter(r, i) &&
          !this._client.hasDedicatedTextSynchronizationFeature(i)
        ) {
          let s = this._client.middleware,
            o = (a) =>
              this._client.sendNotification(this._type, this._createParams(a));
          this._syncedDocuments.delete(i.uri.toString()),
            (s.didClose ? s.didClose(i, o) : o(i)).catch((a) => {
              this._client.error(
                `Sending document notification ${this._type.method} failed`,
                a
              );
            });
        }
      });
    }
  };
  Mt.DidCloseTextDocumentFeature = Eu;
  var ku = class extends ze.DynamicDocumentFeature {
    constructor(e, n) {
      super(e),
        (this._changeData = new Map()),
        (this._onNotificationSent = new Bt.EventEmitter()),
        (this._onPendingChangeAdded = new Bt.EventEmitter()),
        (this._pendingTextDocumentChanges = n),
        (this._syncKind = Fe.TextDocumentSyncKind.None);
    }
    get onNotificationSent() {
      return this._onNotificationSent.event;
    }
    get onPendingChangeAdded() {
      return this._onPendingChangeAdded.event;
    }
    get syncKind() {
      return this._syncKind;
    }
    get registrationType() {
      return Fe.DidChangeTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      (0, ze.ensure)(
        (0, ze.ensure)(e, "textDocument"),
        "synchronization"
      ).dynamicRegistration = !0;
    }
    initialize(e, n) {
      let r = e.resolvedTextDocumentSync;
      n &&
        r &&
        r.change !== void 0 &&
        r.change !== Fe.TextDocumentSyncKind.None &&
        this.register({
          id: ci.generateUuid(),
          registerOptions: Object.assign(
            {},
            { documentSelector: n },
            { syncKind: r.change }
          ),
        });
    }
    register(e) {
      !e.registerOptions.documentSelector ||
        (this._listener ||
          (this._listener = Bt.workspace.onDidChangeTextDocument(
            this.callback,
            this
          )),
        this._changeData.set(e.id, {
          syncKind: e.registerOptions.syncKind,
          documentSelector:
            this._client.protocol2CodeConverter.asDocumentSelector(
              e.registerOptions.documentSelector
            ),
        }),
        this.updateSyncKind(e.registerOptions.syncKind));
    }
    *getDocumentSelectors() {
      for (let e of this._changeData.values()) yield e.documentSelector;
    }
    async callback(e) {
      if (e.contentChanges.length === 0) return;
      let n = e.document.uri,
        r = e.document.version,
        i = [];
      for (let s of this._changeData.values())
        if (
          Bt.languages.match(s.documentSelector, e.document) > 0 &&
          !this._client.hasDedicatedTextSynchronizationFeature(e.document)
        ) {
          let o = this._client.middleware;
          if (s.syncKind === Fe.TextDocumentSyncKind.Incremental) {
            let a = async (u) => {
              let h =
                this._client.code2ProtocolConverter.asChangeTextDocumentParams(
                  u,
                  n,
                  r
                );
              await this._client.sendNotification(
                Fe.DidChangeTextDocumentNotification.type,
                h
              ),
                this.notificationSent(
                  u.document,
                  Fe.DidChangeTextDocumentNotification.type,
                  h
                );
            };
            i.push(o.didChange ? o.didChange(e, (u) => a(u)) : a(e));
          } else if (s.syncKind === Fe.TextDocumentSyncKind.Full) {
            let a = async (u) => {
              let h = u.document.uri.toString();
              this._pendingTextDocumentChanges.set(h, u.document),
                this._onPendingChangeAdded.fire();
            };
            i.push(o.didChange ? o.didChange(e, (u) => a(u)) : a(e));
          }
        }
      return Promise.all(i).then(void 0, (s) => {
        throw (
          (this._client.error(
            `Sending document notification ${Fe.DidChangeTextDocumentNotification.type.method} failed`,
            s
          ),
          s)
        );
      });
    }
    notificationSent(e, n, r) {
      this._onNotificationSent.fire({ textDocument: e, type: n, params: r });
    }
    unregister(e) {
      if ((this._changeData.delete(e), this._changeData.size === 0))
        this._listener && (this._listener.dispose(), (this._listener = void 0)),
          (this._syncKind = Fe.TextDocumentSyncKind.None);
      else {
        this._syncKind = Fe.TextDocumentSyncKind.None;
        for (let n of this._changeData.values())
          if (
            (this.updateSyncKind(n.syncKind),
            this._syncKind === Fe.TextDocumentSyncKind.Full)
          )
            break;
      }
    }
    clear() {
      this._pendingTextDocumentChanges.clear(),
        this._changeData.clear(),
        (this._syncKind = Fe.TextDocumentSyncKind.None),
        this._listener && (this._listener.dispose(), (this._listener = void 0));
    }
    getPendingDocumentChanges(e) {
      if (this._pendingTextDocumentChanges.size === 0) return [];
      let n;
      if (e.size === 0)
        (n = Array.from(this._pendingTextDocumentChanges.values())),
          this._pendingTextDocumentChanges.clear();
      else {
        n = [];
        for (let r of this._pendingTextDocumentChanges)
          e.has(r[0]) ||
            (n.push(r[1]), this._pendingTextDocumentChanges.delete(r[0]));
      }
      return n;
    }
    getProvider(e) {
      for (let n of this._changeData.values())
        if (Bt.languages.match(n.documentSelector, e) > 0)
          return { send: (r) => this.callback(r) };
    }
    updateSyncKind(e) {
      if (this._syncKind !== Fe.TextDocumentSyncKind.Full)
        switch (e) {
          case Fe.TextDocumentSyncKind.Full:
            this._syncKind = e;
            break;
          case Fe.TextDocumentSyncKind.Incremental:
            this._syncKind === Fe.TextDocumentSyncKind.None &&
              (this._syncKind = Fe.TextDocumentSyncKind.Incremental);
            break;
        }
    }
  };
  Mt.DidChangeTextDocumentFeature = ku;
  var qu = class extends ze.TextDocumentEventFeature {
    constructor(e) {
      super(
        e,
        Bt.workspace.onWillSaveTextDocument,
        Fe.WillSaveTextDocumentNotification.type,
        () => e.middleware.willSave,
        (n) => e.code2ProtocolConverter.asWillSaveTextDocumentParams(n),
        (n) => n.document,
        (n, r) => ze.TextDocumentEventFeature.textDocumentFilter(n, r.document)
      );
    }
    get registrationType() {
      return Fe.WillSaveTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      let n = (0, ze.ensure)(
        (0, ze.ensure)(e, "textDocument"),
        "synchronization"
      );
      n.willSave = !0;
    }
    initialize(e, n) {
      let r = e.resolvedTextDocumentSync;
      n &&
        r &&
        r.willSave &&
        this.register({
          id: ci.generateUuid(),
          registerOptions: { documentSelector: n },
        });
    }
    getTextDocument(e) {
      return e.document;
    }
  };
  Mt.WillSaveFeature = qu;
  var xu = class extends ze.DynamicDocumentFeature {
    constructor(e) {
      super(e), (this._selectors = new Map());
    }
    getDocumentSelectors() {
      return this._selectors.values();
    }
    get registrationType() {
      return Fe.WillSaveTextDocumentWaitUntilRequest.type;
    }
    fillClientCapabilities(e) {
      let n = (0, ze.ensure)(
        (0, ze.ensure)(e, "textDocument"),
        "synchronization"
      );
      n.willSaveWaitUntil = !0;
    }
    initialize(e, n) {
      let r = e.resolvedTextDocumentSync;
      n &&
        r &&
        r.willSaveWaitUntil &&
        this.register({
          id: ci.generateUuid(),
          registerOptions: { documentSelector: n },
        });
    }
    register(e) {
      !e.registerOptions.documentSelector ||
        (this._listener ||
          (this._listener = Bt.workspace.onWillSaveTextDocument(
            this.callback,
            this
          )),
        this._selectors.set(
          e.id,
          this._client.protocol2CodeConverter.asDocumentSelector(
            e.registerOptions.documentSelector
          )
        ));
    }
    callback(e) {
      if (
        ze.TextDocumentEventFeature.textDocumentFilter(
          this._selectors.values(),
          e.document
        ) &&
        !this._client.hasDedicatedTextSynchronizationFeature(e.document)
      ) {
        let n = this._client.middleware,
          r = (i) =>
            this._client
              .sendRequest(
                Fe.WillSaveTextDocumentWaitUntilRequest.type,
                this._client.code2ProtocolConverter.asWillSaveTextDocumentParams(
                  i
                )
              )
              .then(async (s) => {
                let o = await this._client.protocol2CodeConverter.asTextEdits(
                  s
                );
                return o === void 0 ? [] : o;
              });
        e.waitUntil(n.willSaveWaitUntil ? n.willSaveWaitUntil(e, r) : r(e));
      }
    }
    unregister(e) {
      this._selectors.delete(e),
        this._selectors.size === 0 &&
          this._listener &&
          (this._listener.dispose(), (this._listener = void 0));
    }
    clear() {
      this._selectors.clear(),
        this._listener && (this._listener.dispose(), (this._listener = void 0));
    }
  };
  Mt.WillSaveWaitUntilFeature = xu;
  var Ou = class extends ze.TextDocumentEventFeature {
    constructor(e) {
      super(
        e,
        Bt.workspace.onDidSaveTextDocument,
        Fe.DidSaveTextDocumentNotification.type,
        () => e.middleware.didSave,
        (n) =>
          e.code2ProtocolConverter.asSaveTextDocumentParams(
            n,
            this._includeText
          ),
        (n) => n,
        ze.TextDocumentEventFeature.textDocumentFilter
      ),
        (this._includeText = !1);
    }
    get registrationType() {
      return Fe.DidSaveTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      (0, ze.ensure)(
        (0, ze.ensure)(e, "textDocument"),
        "synchronization"
      ).didSave = !0;
    }
    initialize(e, n) {
      let r = e.resolvedTextDocumentSync;
      if (n && r && r.save) {
        let i =
          typeof r.save == "boolean"
            ? { includeText: !1 }
            : { includeText: !!r.save.includeText };
        this.register({
          id: ci.generateUuid(),
          registerOptions: Object.assign({}, { documentSelector: n }, i),
        });
      }
    }
    register(e) {
      (this._includeText = !!e.registerOptions.includeText), super.register(e);
    }
    getTextDocument(e) {
      return e;
    }
  };
  Mt.DidSaveTextDocumentFeature = Ou;
});
var nm = x((io) => {
  "use strict";
  Object.defineProperty(io, "__esModule", { value: !0 });
  io.CompletionItemFeature = void 0;
  var q_ = require("vscode"),
    pe = re(),
    Iu = ye(),
    x_ = He(),
    O_ = [
      pe.CompletionItemKind.Text,
      pe.CompletionItemKind.Method,
      pe.CompletionItemKind.Function,
      pe.CompletionItemKind.Constructor,
      pe.CompletionItemKind.Field,
      pe.CompletionItemKind.Variable,
      pe.CompletionItemKind.Class,
      pe.CompletionItemKind.Interface,
      pe.CompletionItemKind.Module,
      pe.CompletionItemKind.Property,
      pe.CompletionItemKind.Unit,
      pe.CompletionItemKind.Value,
      pe.CompletionItemKind.Enum,
      pe.CompletionItemKind.Keyword,
      pe.CompletionItemKind.Snippet,
      pe.CompletionItemKind.Color,
      pe.CompletionItemKind.File,
      pe.CompletionItemKind.Reference,
      pe.CompletionItemKind.Folder,
      pe.CompletionItemKind.EnumMember,
      pe.CompletionItemKind.Constant,
      pe.CompletionItemKind.Struct,
      pe.CompletionItemKind.Event,
      pe.CompletionItemKind.Operator,
      pe.CompletionItemKind.TypeParameter,
    ],
    Fu = class extends Iu.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, pe.CompletionRequest.type),
          (this.labelDetailsSupport = new Map());
      }
      fillClientCapabilities(e) {
        let n = (0, Iu.ensure)((0, Iu.ensure)(e, "textDocument"), "completion");
        (n.dynamicRegistration = !0),
          (n.contextSupport = !0),
          (n.completionItem = {
            snippetSupport: !0,
            commitCharactersSupport: !0,
            documentationFormat: [
              pe.MarkupKind.Markdown,
              pe.MarkupKind.PlainText,
            ],
            deprecatedSupport: !0,
            preselectSupport: !0,
            tagSupport: { valueSet: [pe.CompletionItemTag.Deprecated] },
            insertReplaceSupport: !0,
            resolveSupport: {
              properties: ["documentation", "detail", "additionalTextEdits"],
            },
            insertTextModeSupport: {
              valueSet: [
                pe.InsertTextMode.asIs,
                pe.InsertTextMode.adjustIndentation,
              ],
            },
            labelDetailsSupport: !0,
          }),
          (n.insertTextMode = pe.InsertTextMode.adjustIndentation),
          (n.completionItemKind = { valueSet: O_ }),
          (n.completionList = {
            itemDefaults: [
              "commitCharacters",
              "editRange",
              "insertTextFormat",
              "insertTextMode",
              "data",
            ],
          });
      }
      initialize(e, n) {
        let r = this.getRegistrationOptions(n, e.completionProvider);
        !r || this.register({ id: x_.generateUuid(), registerOptions: r });
      }
      registerLanguageProvider(e, n) {
        this.labelDetailsSupport.set(
          n,
          !!e.completionItem?.labelDetailsSupport
        );
        let r = e.triggerCharacters ?? [],
          i = e.allCommitCharacters,
          s = e.documentSelector,
          o = {
            provideCompletionItems: (a, u, h, p) => {
              let v = this._client,
                m = this._client.middleware,
                R = (y, P, q, A) =>
                  v
                    .sendRequest(
                      pe.CompletionRequest.type,
                      v.code2ProtocolConverter.asCompletionParams(y, P, q),
                      A
                    )
                    .then(
                      (j) =>
                        A.isCancellationRequested
                          ? null
                          : v.protocol2CodeConverter.asCompletionResult(
                              j,
                              i,
                              A
                            ),
                      (j) =>
                        v.handleFailedRequest(
                          pe.CompletionRequest.type,
                          A,
                          j,
                          null
                        )
                    );
              return m.provideCompletionItem
                ? m.provideCompletionItem(a, u, p, h, R)
                : R(a, u, p, h);
            },
            resolveCompletionItem: e.resolveProvider
              ? (a, u) => {
                  let h = this._client,
                    p = this._client.middleware,
                    v = (m, R) =>
                      h
                        .sendRequest(
                          pe.CompletionResolveRequest.type,
                          h.code2ProtocolConverter.asCompletionItem(
                            m,
                            !!this.labelDetailsSupport.get(n)
                          ),
                          R
                        )
                        .then(
                          (y) =>
                            R.isCancellationRequested
                              ? null
                              : h.protocol2CodeConverter.asCompletionItem(y),
                          (y) =>
                            h.handleFailedRequest(
                              pe.CompletionResolveRequest.type,
                              R,
                              y,
                              m
                            )
                        );
                  return p.resolveCompletionItem
                    ? p.resolveCompletionItem(a, u, v)
                    : v(a, u);
                }
              : void 0,
          };
        return [
          q_.languages.registerCompletionItemProvider(
            this._client.protocol2CodeConverter.asDocumentSelector(s),
            o,
            ...r
          ),
          o,
        ];
      }
    };
  io.CompletionItemFeature = Fu;
});
var rm = x((so) => {
  "use strict";
  Object.defineProperty(so, "__esModule", { value: !0 });
  so.HoverFeature = void 0;
  var I_ = require("vscode"),
    Mi = re(),
    Nu = ye(),
    F_ = He(),
    Lu = class extends Nu.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Mi.HoverRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, Nu.ensure)((0, Nu.ensure)(e, "textDocument"), "hover");
        (n.dynamicRegistration = !0),
          (n.contentFormat = [Mi.MarkupKind.Markdown, Mi.MarkupKind.PlainText]);
      }
      initialize(e, n) {
        let r = this.getRegistrationOptions(n, e.hoverProvider);
        !r || this.register({ id: F_.generateUuid(), registerOptions: r });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideHover: (i, s, o) => {
              let a = this._client,
                u = (p, v, m) =>
                  a
                    .sendRequest(
                      Mi.HoverRequest.type,
                      a.code2ProtocolConverter.asTextDocumentPositionParams(
                        p,
                        v
                      ),
                      m
                    )
                    .then(
                      (R) =>
                        m.isCancellationRequested
                          ? null
                          : a.protocol2CodeConverter.asHover(R),
                      (R) =>
                        a.handleFailedRequest(Mi.HoverRequest.type, m, R, null)
                    ),
                h = a.middleware;
              return h.provideHover ? h.provideHover(i, s, o, u) : u(i, s, o);
            },
          };
        return [this.registerProvider(n, r), r];
      }
      registerProvider(e, n) {
        return I_.languages.registerHoverProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(e),
          n
        );
      }
    };
  so.HoverFeature = Lu;
});
var im = x((oo) => {
  "use strict";
  Object.defineProperty(oo, "__esModule", { value: !0 });
  oo.DefinitionFeature = void 0;
  var N_ = require("vscode"),
    Mu = re(),
    Au = ye(),
    L_ = He(),
    ju = class extends Au.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Mu.DefinitionRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, Au.ensure)((0, Au.ensure)(e, "textDocument"), "definition");
        (n.dynamicRegistration = !0), (n.linkSupport = !0);
      }
      initialize(e, n) {
        let r = this.getRegistrationOptions(n, e.definitionProvider);
        !r || this.register({ id: L_.generateUuid(), registerOptions: r });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideDefinition: (i, s, o) => {
              let a = this._client,
                u = (p, v, m) =>
                  a
                    .sendRequest(
                      Mu.DefinitionRequest.type,
                      a.code2ProtocolConverter.asTextDocumentPositionParams(
                        p,
                        v
                      ),
                      m
                    )
                    .then(
                      (R) =>
                        m.isCancellationRequested
                          ? null
                          : a.protocol2CodeConverter.asDefinitionResult(R, m),
                      (R) =>
                        a.handleFailedRequest(
                          Mu.DefinitionRequest.type,
                          m,
                          R,
                          null
                        )
                    ),
                h = a.middleware;
              return h.provideDefinition
                ? h.provideDefinition(i, s, o, u)
                : u(i, s, o);
            },
          };
        return [this.registerProvider(n, r), r];
      }
      registerProvider(e, n) {
        return N_.languages.registerDefinitionProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(e),
          n
        );
      }
    };
  oo.DefinitionFeature = ju;
});
var om = x((ao) => {
  "use strict";
  Object.defineProperty(ao, "__esModule", { value: !0 });
  ao.SignatureHelpFeature = void 0;
  var sm = require("vscode"),
    Ai = re(),
    $u = ye(),
    M_ = He(),
    Hu = class extends $u.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Ai.SignatureHelpRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, $u.ensure)(
          (0, $u.ensure)(e, "textDocument"),
          "signatureHelp"
        );
        (n.dynamicRegistration = !0),
          (n.signatureInformation = {
            documentationFormat: [
              Ai.MarkupKind.Markdown,
              Ai.MarkupKind.PlainText,
            ],
          }),
          (n.signatureInformation.parameterInformation = {
            labelOffsetSupport: !0,
          }),
          (n.signatureInformation.activeParameterSupport = !0),
          (n.contextSupport = !0);
      }
      initialize(e, n) {
        let r = this.getRegistrationOptions(n, e.signatureHelpProvider);
        !r || this.register({ id: M_.generateUuid(), registerOptions: r });
      }
      registerLanguageProvider(e) {
        let n = {
          provideSignatureHelp: (r, i, s, o) => {
            let a = this._client,
              u = (p, v, m, R) =>
                a
                  .sendRequest(
                    Ai.SignatureHelpRequest.type,
                    a.code2ProtocolConverter.asSignatureHelpParams(p, v, m),
                    R
                  )
                  .then(
                    (y) =>
                      R.isCancellationRequested
                        ? null
                        : a.protocol2CodeConverter.asSignatureHelp(y, R),
                    (y) =>
                      a.handleFailedRequest(
                        Ai.SignatureHelpRequest.type,
                        R,
                        y,
                        null
                      )
                  ),
              h = a.middleware;
            return h.provideSignatureHelp
              ? h.provideSignatureHelp(r, i, o, s, u)
              : u(r, i, o, s);
          },
        };
        return [this.registerProvider(e, n), n];
      }
      registerProvider(e, n) {
        let r = this._client.protocol2CodeConverter.asDocumentSelector(
          e.documentSelector
        );
        if (e.retriggerCharacters === void 0) {
          let i = e.triggerCharacters || [];
          return sm.languages.registerSignatureHelpProvider(r, n, ...i);
        } else {
          let i = {
            triggerCharacters: e.triggerCharacters || [],
            retriggerCharacters: e.retriggerCharacters || [],
          };
          return sm.languages.registerSignatureHelpProvider(r, n, i);
        }
      }
    };
  ao.SignatureHelpFeature = Hu;
});
var am = x((co) => {
  "use strict";
  Object.defineProperty(co, "__esModule", { value: !0 });
  co.DocumentHighlightFeature = void 0;
  var A_ = require("vscode"),
    Uu = re(),
    Wu = ye(),
    j_ = He(),
    Ku = class extends Wu.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Uu.DocumentHighlightRequest.type);
      }
      fillClientCapabilities(e) {
        (0, Wu.ensure)(
          (0, Wu.ensure)(e, "textDocument"),
          "documentHighlight"
        ).dynamicRegistration = !0;
      }
      initialize(e, n) {
        let r = this.getRegistrationOptions(n, e.documentHighlightProvider);
        !r || this.register({ id: j_.generateUuid(), registerOptions: r });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideDocumentHighlights: (i, s, o) => {
              let a = this._client,
                u = (p, v, m) =>
                  a
                    .sendRequest(
                      Uu.DocumentHighlightRequest.type,
                      a.code2ProtocolConverter.asTextDocumentPositionParams(
                        p,
                        v
                      ),
                      m
                    )
                    .then(
                      (R) =>
                        m.isCancellationRequested
                          ? null
                          : a.protocol2CodeConverter.asDocumentHighlights(R, m),
                      (R) =>
                        a.handleFailedRequest(
                          Uu.DocumentHighlightRequest.type,
                          m,
                          R,
                          null
                        )
                    ),
                h = a.middleware;
              return h.provideDocumentHighlights
                ? h.provideDocumentHighlights(i, s, o, u)
                : u(i, s, o);
            },
          };
        return [
          A_.languages.registerDocumentHighlightProvider(
            this._client.protocol2CodeConverter.asDocumentSelector(n),
            r
          ),
          r,
        ];
      }
    };
  co.DocumentHighlightFeature = Ku;
});
var Vu = x((qn) => {
  "use strict";
  Object.defineProperty(qn, "__esModule", { value: !0 });
  qn.DocumentSymbolFeature =
    qn.SupportedSymbolTags =
    qn.SupportedSymbolKinds =
      void 0;
  var $_ = require("vscode"),
    Se = re(),
    zu = ye(),
    H_ = He();
  qn.SupportedSymbolKinds = [
    Se.SymbolKind.File,
    Se.SymbolKind.Module,
    Se.SymbolKind.Namespace,
    Se.SymbolKind.Package,
    Se.SymbolKind.Class,
    Se.SymbolKind.Method,
    Se.SymbolKind.Property,
    Se.SymbolKind.Field,
    Se.SymbolKind.Constructor,
    Se.SymbolKind.Enum,
    Se.SymbolKind.Interface,
    Se.SymbolKind.Function,
    Se.SymbolKind.Variable,
    Se.SymbolKind.Constant,
    Se.SymbolKind.String,
    Se.SymbolKind.Number,
    Se.SymbolKind.Boolean,
    Se.SymbolKind.Array,
    Se.SymbolKind.Object,
    Se.SymbolKind.Key,
    Se.SymbolKind.Null,
    Se.SymbolKind.EnumMember,
    Se.SymbolKind.Struct,
    Se.SymbolKind.Event,
    Se.SymbolKind.Operator,
    Se.SymbolKind.TypeParameter,
  ];
  qn.SupportedSymbolTags = [Se.SymbolTag.Deprecated];
  var Bu = class extends zu.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Se.DocumentSymbolRequest.type);
    }
    fillClientCapabilities(e) {
      let n = (0, zu.ensure)(
        (0, zu.ensure)(e, "textDocument"),
        "documentSymbol"
      );
      (n.dynamicRegistration = !0),
        (n.symbolKind = { valueSet: qn.SupportedSymbolKinds }),
        (n.hierarchicalDocumentSymbolSupport = !0),
        (n.tagSupport = { valueSet: qn.SupportedSymbolTags }),
        (n.labelSupport = !0);
    }
    initialize(e, n) {
      let r = this.getRegistrationOptions(n, e.documentSymbolProvider);
      !r || this.register({ id: H_.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let n = e.documentSelector,
        r = {
          provideDocumentSymbols: (s, o) => {
            let a = this._client,
              u = async (p, v) => {
                try {
                  let m = await a.sendRequest(
                    Se.DocumentSymbolRequest.type,
                    a.code2ProtocolConverter.asDocumentSymbolParams(p),
                    v
                  );
                  if (v.isCancellationRequested || m === void 0 || m === null)
                    return null;
                  if (m.length === 0) return [];
                  {
                    let R = m[0];
                    return Se.DocumentSymbol.is(R)
                      ? await a.protocol2CodeConverter.asDocumentSymbols(m, v)
                      : await a.protocol2CodeConverter.asSymbolInformations(
                          m,
                          v
                        );
                  }
                } catch (m) {
                  return a.handleFailedRequest(
                    Se.DocumentSymbolRequest.type,
                    v,
                    m,
                    null
                  );
                }
              },
              h = a.middleware;
            return h.provideDocumentSymbols
              ? h.provideDocumentSymbols(s, o, u)
              : u(s, o);
          },
        },
        i = e.label !== void 0 ? { label: e.label } : void 0;
      return [
        $_.languages.registerDocumentSymbolProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(n),
          r,
          i
        ),
        r,
      ];
    }
  };
  qn.DocumentSymbolFeature = Bu;
});
var um = x((uo) => {
  "use strict";
  Object.defineProperty(uo, "__esModule", { value: !0 });
  uo.WorkspaceSymbolFeature = void 0;
  var U_ = require("vscode"),
    ji = re(),
    Gu = ye(),
    cm = Vu(),
    W_ = He(),
    Xu = class extends Gu.WorkspaceFeature {
      constructor(e) {
        super(e, ji.WorkspaceSymbolRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, Gu.ensure)((0, Gu.ensure)(e, "workspace"), "symbol");
        (n.dynamicRegistration = !0),
          (n.symbolKind = { valueSet: cm.SupportedSymbolKinds }),
          (n.tagSupport = { valueSet: cm.SupportedSymbolTags }),
          (n.resolveSupport = { properties: ["location.range"] });
      }
      initialize(e) {
        !e.workspaceSymbolProvider ||
          this.register({
            id: W_.generateUuid(),
            registerOptions:
              e.workspaceSymbolProvider === !0
                ? { workDoneProgress: !1 }
                : e.workspaceSymbolProvider,
          });
      }
      registerLanguageProvider(e) {
        let n = {
          provideWorkspaceSymbols: (r, i) => {
            let s = this._client,
              o = (u, h) =>
                s
                  .sendRequest(ji.WorkspaceSymbolRequest.type, { query: u }, h)
                  .then(
                    (p) =>
                      h.isCancellationRequested
                        ? null
                        : s.protocol2CodeConverter.asSymbolInformations(p, h),
                    (p) =>
                      s.handleFailedRequest(
                        ji.WorkspaceSymbolRequest.type,
                        h,
                        p,
                        null
                      )
                  ),
              a = s.middleware;
            return a.provideWorkspaceSymbols
              ? a.provideWorkspaceSymbols(r, i, o)
              : o(r, i);
          },
          resolveWorkspaceSymbol:
            e.resolveProvider === !0
              ? (r, i) => {
                  let s = this._client,
                    o = (u, h) =>
                      s
                        .sendRequest(
                          ji.WorkspaceSymbolResolveRequest.type,
                          s.code2ProtocolConverter.asWorkspaceSymbol(u),
                          h
                        )
                        .then(
                          (p) =>
                            h.isCancellationRequested
                              ? null
                              : s.protocol2CodeConverter.asSymbolInformation(p),
                          (p) =>
                            s.handleFailedRequest(
                              ji.WorkspaceSymbolResolveRequest.type,
                              h,
                              p,
                              null
                            )
                        ),
                    a = s.middleware;
                  return a.resolveWorkspaceSymbol
                    ? a.resolveWorkspaceSymbol(r, i, o)
                    : o(r, i);
                }
              : void 0,
        };
        return [U_.languages.registerWorkspaceSymbolProvider(n), n];
      }
    };
  uo.WorkspaceSymbolFeature = Xu;
});
var lm = x((lo) => {
  "use strict";
  Object.defineProperty(lo, "__esModule", { value: !0 });
  lo.ReferencesFeature = void 0;
  var K_ = require("vscode"),
    Ju = re(),
    Qu = ye(),
    z_ = He(),
    Yu = class extends Qu.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Ju.ReferencesRequest.type);
      }
      fillClientCapabilities(e) {
        (0, Qu.ensure)(
          (0, Qu.ensure)(e, "textDocument"),
          "references"
        ).dynamicRegistration = !0;
      }
      initialize(e, n) {
        let r = this.getRegistrationOptions(n, e.referencesProvider);
        !r || this.register({ id: z_.generateUuid(), registerOptions: r });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideReferences: (i, s, o, a) => {
              let u = this._client,
                h = (v, m, R, y) =>
                  u
                    .sendRequest(
                      Ju.ReferencesRequest.type,
                      u.code2ProtocolConverter.asReferenceParams(v, m, R),
                      y
                    )
                    .then(
                      (P) =>
                        y.isCancellationRequested
                          ? null
                          : u.protocol2CodeConverter.asReferences(P, y),
                      (P) =>
                        u.handleFailedRequest(
                          Ju.ReferencesRequest.type,
                          y,
                          P,
                          null
                        )
                    ),
                p = u.middleware;
              return p.provideReferences
                ? p.provideReferences(i, s, o, a, h)
                : h(i, s, o, a);
            },
          };
        return [this.registerProvider(n, r), r];
      }
      registerProvider(e, n) {
        return K_.languages.registerReferenceProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(e),
          n
        );
      }
    };
  lo.ReferencesFeature = Yu;
});
var dm = x((fo) => {
  "use strict";
  Object.defineProperty(fo, "__esModule", { value: !0 });
  fo.CodeActionFeature = void 0;
  var B_ = require("vscode"),
    Vt = re(),
    V_ = He(),
    Zu = ye(),
    el = class extends Zu.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Vt.CodeActionRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, Zu.ensure)((0, Zu.ensure)(e, "textDocument"), "codeAction");
        (n.dynamicRegistration = !0),
          (n.isPreferredSupport = !0),
          (n.disabledSupport = !0),
          (n.dataSupport = !0),
          (n.resolveSupport = { properties: ["edit"] }),
          (n.codeActionLiteralSupport = {
            codeActionKind: {
              valueSet: [
                Vt.CodeActionKind.Empty,
                Vt.CodeActionKind.QuickFix,
                Vt.CodeActionKind.Refactor,
                Vt.CodeActionKind.RefactorExtract,
                Vt.CodeActionKind.RefactorInline,
                Vt.CodeActionKind.RefactorRewrite,
                Vt.CodeActionKind.Source,
                Vt.CodeActionKind.SourceOrganizeImports,
              ],
            },
          }),
          (n.honorsChangeAnnotations = !0);
      }
      initialize(e, n) {
        let r = this.getRegistrationOptions(n, e.codeActionProvider);
        !r || this.register({ id: V_.generateUuid(), registerOptions: r });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideCodeActions: (i, s, o, a) => {
              let u = this._client,
                h = async (v, m, R, y) => {
                  let P = {
                    textDocument:
                      u.code2ProtocolConverter.asTextDocumentIdentifier(v),
                    range: u.code2ProtocolConverter.asRange(m),
                    context:
                      u.code2ProtocolConverter.asCodeActionContextSync(R),
                  };
                  return u.sendRequest(Vt.CodeActionRequest.type, P, y).then(
                    (q) =>
                      y.isCancellationRequested || q === null || q === void 0
                        ? null
                        : u.protocol2CodeConverter.asCodeActionResult(q, y),
                    (q) =>
                      u.handleFailedRequest(
                        Vt.CodeActionRequest.type,
                        y,
                        q,
                        null
                      )
                  );
                },
                p = u.middleware;
              return p.provideCodeActions
                ? p.provideCodeActions(i, s, o, a, h)
                : h(i, s, o, a);
            },
            resolveCodeAction: e.resolveProvider
              ? (i, s) => {
                  let o = this._client,
                    a = this._client.middleware,
                    u = async (h, p) =>
                      o
                        .sendRequest(
                          Vt.CodeActionResolveRequest.type,
                          o.code2ProtocolConverter.asCodeActionSync(h),
                          p
                        )
                        .then(
                          (v) =>
                            p.isCancellationRequested
                              ? h
                              : o.protocol2CodeConverter.asCodeAction(v, p),
                          (v) =>
                            o.handleFailedRequest(
                              Vt.CodeActionResolveRequest.type,
                              p,
                              v,
                              h
                            )
                        );
                  return a.resolveCodeAction
                    ? a.resolveCodeAction(i, s, u)
                    : u(i, s);
                }
              : void 0,
          };
        return [
          B_.languages.registerCodeActionsProvider(
            this._client.protocol2CodeConverter.asDocumentSelector(n),
            r,
            e.codeActionKinds
              ? {
                  providedCodeActionKinds:
                    this._client.protocol2CodeConverter.asCodeActionKinds(
                      e.codeActionKinds
                    ),
                }
              : void 0
          ),
          r,
        ];
      }
    };
  fo.CodeActionFeature = el;
});
var hm = x((ho) => {
  "use strict";
  Object.defineProperty(ho, "__esModule", { value: !0 });
  ho.CodeLensFeature = void 0;
  var fm = require("vscode"),
    ui = re(),
    G_ = He(),
    $i = ye(),
    tl = class extends $i.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, ui.CodeLensRequest.type);
      }
      fillClientCapabilities(e) {
        ((0, $i.ensure)(
          (0, $i.ensure)(e, "textDocument"),
          "codeLens"
        ).dynamicRegistration = !0),
          ((0, $i.ensure)(
            (0, $i.ensure)(e, "workspace"),
            "codeLens"
          ).refreshSupport = !0);
      }
      initialize(e, n) {
        this._client.onRequest(ui.CodeLensRefreshRequest.type, async () => {
          for (let s of this.getAllProviders())
            s.onDidChangeCodeLensEmitter.fire();
        });
        let i = this.getRegistrationOptions(n, e.codeLensProvider);
        !i || this.register({ id: G_.generateUuid(), registerOptions: i });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = new fm.EventEmitter(),
          i = {
            onDidChangeCodeLenses: r.event,
            provideCodeLenses: (s, o) => {
              let a = this._client,
                u = (p, v) =>
                  a
                    .sendRequest(
                      ui.CodeLensRequest.type,
                      a.code2ProtocolConverter.asCodeLensParams(p),
                      v
                    )
                    .then(
                      (m) =>
                        v.isCancellationRequested
                          ? null
                          : a.protocol2CodeConverter.asCodeLenses(m, v),
                      (m) =>
                        a.handleFailedRequest(
                          ui.CodeLensRequest.type,
                          v,
                          m,
                          null
                        )
                    ),
                h = a.middleware;
              return h.provideCodeLenses
                ? h.provideCodeLenses(s, o, u)
                : u(s, o);
            },
            resolveCodeLens: e.resolveProvider
              ? (s, o) => {
                  let a = this._client,
                    u = (p, v) =>
                      a
                        .sendRequest(
                          ui.CodeLensResolveRequest.type,
                          a.code2ProtocolConverter.asCodeLens(p),
                          v
                        )
                        .then(
                          (m) =>
                            v.isCancellationRequested
                              ? p
                              : a.protocol2CodeConverter.asCodeLens(m),
                          (m) =>
                            a.handleFailedRequest(
                              ui.CodeLensResolveRequest.type,
                              v,
                              m,
                              p
                            )
                        ),
                    h = a.middleware;
                  return h.resolveCodeLens
                    ? h.resolveCodeLens(s, o, u)
                    : u(s, o);
                }
              : void 0,
          };
        return [
          fm.languages.registerCodeLensProvider(
            this._client.protocol2CodeConverter.asDocumentSelector(n),
            i
          ),
          { provider: i, onDidChangeCodeLensEmitter: r },
        ];
      }
    };
  ho.CodeLensFeature = tl;
});
var pm = x((hr) => {
  "use strict";
  Object.defineProperty(hr, "__esModule", { value: !0 });
  hr.DocumentOnTypeFormattingFeature =
    hr.DocumentRangeFormattingFeature =
    hr.DocumentFormattingFeature =
      void 0;
  var po = require("vscode"),
    pn = re(),
    sl = He(),
    $n = ye(),
    li;
  (function (t) {
    function e(n) {
      let r = po.workspace.getConfiguration("files", n);
      return {
        trimTrailingWhitespace: r.get("trimTrailingWhitespace"),
        trimFinalNewlines: r.get("trimFinalNewlines"),
        insertFinalNewline: r.get("insertFinalNewline"),
      };
    }
    t.fromConfiguration = e;
  })(li || (li = {}));
  var nl = class extends $n.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, pn.DocumentFormattingRequest.type);
    }
    fillClientCapabilities(e) {
      (0, $n.ensure)(
        (0, $n.ensure)(e, "textDocument"),
        "formatting"
      ).dynamicRegistration = !0;
    }
    initialize(e, n) {
      let r = this.getRegistrationOptions(n, e.documentFormattingProvider);
      !r || this.register({ id: sl.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let n = e.documentSelector,
        r = {
          provideDocumentFormattingEdits: (i, s, o) => {
            let a = this._client,
              u = (p, v, m) => {
                let R = {
                  textDocument:
                    a.code2ProtocolConverter.asTextDocumentIdentifier(p),
                  options: a.code2ProtocolConverter.asFormattingOptions(
                    v,
                    li.fromConfiguration(p)
                  ),
                };
                return a
                  .sendRequest(pn.DocumentFormattingRequest.type, R, m)
                  .then(
                    (y) =>
                      m.isCancellationRequested
                        ? null
                        : a.protocol2CodeConverter.asTextEdits(y, m),
                    (y) =>
                      a.handleFailedRequest(
                        pn.DocumentFormattingRequest.type,
                        m,
                        y,
                        null
                      )
                  );
              },
              h = a.middleware;
            return h.provideDocumentFormattingEdits
              ? h.provideDocumentFormattingEdits(i, s, o, u)
              : u(i, s, o);
          },
        };
      return [
        po.languages.registerDocumentFormattingEditProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(n),
          r
        ),
        r,
      ];
    }
  };
  hr.DocumentFormattingFeature = nl;
  var rl = class extends $n.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, pn.DocumentRangeFormattingRequest.type);
    }
    fillClientCapabilities(e) {
      let n = (0, $n.ensure)(
        (0, $n.ensure)(e, "textDocument"),
        "rangeFormatting"
      );
      (n.dynamicRegistration = !0), (n.rangesSupport = !0);
    }
    initialize(e, n) {
      let r = this.getRegistrationOptions(n, e.documentRangeFormattingProvider);
      !r || this.register({ id: sl.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let n = e.documentSelector,
        r = {
          provideDocumentRangeFormattingEdits: (i, s, o, a) => {
            let u = this._client,
              h = (v, m, R, y) => {
                let P = {
                  textDocument:
                    u.code2ProtocolConverter.asTextDocumentIdentifier(v),
                  range: u.code2ProtocolConverter.asRange(m),
                  options: u.code2ProtocolConverter.asFormattingOptions(
                    R,
                    li.fromConfiguration(v)
                  ),
                };
                return u
                  .sendRequest(pn.DocumentRangeFormattingRequest.type, P, y)
                  .then(
                    (q) =>
                      y.isCancellationRequested
                        ? null
                        : u.protocol2CodeConverter.asTextEdits(q, y),
                    (q) =>
                      u.handleFailedRequest(
                        pn.DocumentRangeFormattingRequest.type,
                        y,
                        q,
                        null
                      )
                  );
              },
              p = u.middleware;
            return p.provideDocumentRangeFormattingEdits
              ? p.provideDocumentRangeFormattingEdits(i, s, o, a, h)
              : h(i, s, o, a);
          },
        };
      return (
        e.rangesSupport &&
          (r.provideDocumentRangesFormattingEdits = (i, s, o, a) => {
            let u = this._client,
              h = (v, m, R, y) => {
                let P = {
                  textDocument:
                    u.code2ProtocolConverter.asTextDocumentIdentifier(v),
                  ranges: u.code2ProtocolConverter.asRanges(m),
                  options: u.code2ProtocolConverter.asFormattingOptions(
                    R,
                    li.fromConfiguration(v)
                  ),
                };
                return u
                  .sendRequest(pn.DocumentRangesFormattingRequest.type, P, y)
                  .then(
                    (q) =>
                      y.isCancellationRequested
                        ? null
                        : u.protocol2CodeConverter.asTextEdits(q, y),
                    (q) =>
                      u.handleFailedRequest(
                        pn.DocumentRangesFormattingRequest.type,
                        y,
                        q,
                        null
                      )
                  );
              },
              p = u.middleware;
            return p.provideDocumentRangesFormattingEdits
              ? p.provideDocumentRangesFormattingEdits(i, s, o, a, h)
              : h(i, s, o, a);
          }),
        [
          po.languages.registerDocumentRangeFormattingEditProvider(
            this._client.protocol2CodeConverter.asDocumentSelector(n),
            r
          ),
          r,
        ]
      );
    }
  };
  hr.DocumentRangeFormattingFeature = rl;
  var il = class extends $n.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, pn.DocumentOnTypeFormattingRequest.type);
    }
    fillClientCapabilities(e) {
      (0, $n.ensure)(
        (0, $n.ensure)(e, "textDocument"),
        "onTypeFormatting"
      ).dynamicRegistration = !0;
    }
    initialize(e, n) {
      let r = this.getRegistrationOptions(
        n,
        e.documentOnTypeFormattingProvider
      );
      !r || this.register({ id: sl.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let n = e.documentSelector,
        r = {
          provideOnTypeFormattingEdits: (s, o, a, u, h) => {
            let p = this._client,
              v = (R, y, P, q, A) => {
                let j = {
                  textDocument:
                    p.code2ProtocolConverter.asTextDocumentIdentifier(R),
                  position: p.code2ProtocolConverter.asPosition(y),
                  ch: P,
                  options: p.code2ProtocolConverter.asFormattingOptions(
                    q,
                    li.fromConfiguration(R)
                  ),
                };
                return p
                  .sendRequest(pn.DocumentOnTypeFormattingRequest.type, j, A)
                  .then(
                    (E) =>
                      A.isCancellationRequested
                        ? null
                        : p.protocol2CodeConverter.asTextEdits(E, A),
                    (E) =>
                      p.handleFailedRequest(
                        pn.DocumentOnTypeFormattingRequest.type,
                        A,
                        E,
                        null
                      )
                  );
              },
              m = p.middleware;
            return m.provideOnTypeFormattingEdits
              ? m.provideOnTypeFormattingEdits(s, o, a, u, h, v)
              : v(s, o, a, u, h);
          },
        },
        i = e.moreTriggerCharacter || [];
      return [
        po.languages.registerOnTypeFormattingEditProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(n),
          r,
          e.firstTriggerCharacter,
          ...i
        ),
        r,
      ];
    }
  };
  hr.DocumentOnTypeFormattingFeature = il;
});
var mm = x((go) => {
  "use strict";
  Object.defineProperty(go, "__esModule", { value: !0 });
  go.RenameFeature = void 0;
  var X_ = require("vscode"),
    Tr = re(),
    J_ = He(),
    gm = Yt(),
    ol = ye(),
    al = class extends ol.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Tr.RenameRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, ol.ensure)((0, ol.ensure)(e, "textDocument"), "rename");
        (n.dynamicRegistration = !0),
          (n.prepareSupport = !0),
          (n.prepareSupportDefaultBehavior =
            Tr.PrepareSupportDefaultBehavior.Identifier),
          (n.honorsChangeAnnotations = !0);
      }
      initialize(e, n) {
        let r = this.getRegistrationOptions(n, e.renameProvider);
        !r ||
          (gm.boolean(e.renameProvider) && (r.prepareProvider = !1),
          this.register({ id: J_.generateUuid(), registerOptions: r }));
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideRenameEdits: (i, s, o, a) => {
              let u = this._client,
                h = (v, m, R, y) => {
                  let P = {
                    textDocument:
                      u.code2ProtocolConverter.asTextDocumentIdentifier(v),
                    position: u.code2ProtocolConverter.asPosition(m),
                    newName: R,
                  };
                  return u.sendRequest(Tr.RenameRequest.type, P, y).then(
                    (q) =>
                      y.isCancellationRequested
                        ? null
                        : u.protocol2CodeConverter.asWorkspaceEdit(q, y),
                    (q) =>
                      u.handleFailedRequest(
                        Tr.RenameRequest.type,
                        y,
                        q,
                        null,
                        !1
                      )
                  );
                },
                p = u.middleware;
              return p.provideRenameEdits
                ? p.provideRenameEdits(i, s, o, a, h)
                : h(i, s, o, a);
            },
            prepareRename: e.prepareProvider
              ? (i, s, o) => {
                  let a = this._client,
                    u = (p, v, m) => {
                      let R = {
                        textDocument:
                          a.code2ProtocolConverter.asTextDocumentIdentifier(p),
                        position: a.code2ProtocolConverter.asPosition(v),
                      };
                      return a
                        .sendRequest(Tr.PrepareRenameRequest.type, R, m)
                        .then(
                          (y) =>
                            m.isCancellationRequested
                              ? null
                              : Tr.Range.is(y)
                              ? a.protocol2CodeConverter.asRange(y)
                              : this.isDefaultBehavior(y)
                              ? y.defaultBehavior === !0
                                ? null
                                : Promise.reject(
                                    new Error("The element can't be renamed.")
                                  )
                              : y && Tr.Range.is(y.range)
                              ? {
                                  range: a.protocol2CodeConverter.asRange(
                                    y.range
                                  ),
                                  placeholder: y.placeholder,
                                }
                              : Promise.reject(
                                  new Error("The element can't be renamed.")
                                ),
                          (y) => {
                            throw typeof y.message == "string"
                              ? new Error(y.message)
                              : new Error("The element can't be renamed.");
                          }
                        );
                    },
                    h = a.middleware;
                  return h.prepareRename
                    ? h.prepareRename(i, s, o, u)
                    : u(i, s, o);
                }
              : void 0,
          };
        return [this.registerProvider(n, r), r];
      }
      registerProvider(e, n) {
        return X_.languages.registerRenameProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(e),
          n
        );
      }
      isDefaultBehavior(e) {
        let n = e;
        return n && gm.boolean(n.defaultBehavior);
      }
    };
  go.RenameFeature = al;
});
var ym = x((mo) => {
  "use strict";
  Object.defineProperty(mo, "__esModule", { value: !0 });
  mo.DocumentLinkFeature = void 0;
  var Q_ = require("vscode"),
    Hi = re(),
    cl = ye(),
    Y_ = He(),
    ul = class extends cl.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Hi.DocumentLinkRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, cl.ensure)(
          (0, cl.ensure)(e, "textDocument"),
          "documentLink"
        );
        (n.dynamicRegistration = !0), (n.tooltipSupport = !0);
      }
      initialize(e, n) {
        let r = this.getRegistrationOptions(n, e.documentLinkProvider);
        !r || this.register({ id: Y_.generateUuid(), registerOptions: r });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideDocumentLinks: (i, s) => {
              let o = this._client,
                a = (h, p) =>
                  o
                    .sendRequest(
                      Hi.DocumentLinkRequest.type,
                      o.code2ProtocolConverter.asDocumentLinkParams(h),
                      p
                    )
                    .then(
                      (v) =>
                        p.isCancellationRequested
                          ? null
                          : o.protocol2CodeConverter.asDocumentLinks(v, p),
                      (v) =>
                        o.handleFailedRequest(
                          Hi.DocumentLinkRequest.type,
                          p,
                          v,
                          null
                        )
                    ),
                u = o.middleware;
              return u.provideDocumentLinks
                ? u.provideDocumentLinks(i, s, a)
                : a(i, s);
            },
            resolveDocumentLink: e.resolveProvider
              ? (i, s) => {
                  let o = this._client,
                    a = (h, p) =>
                      o
                        .sendRequest(
                          Hi.DocumentLinkResolveRequest.type,
                          o.code2ProtocolConverter.asDocumentLink(h),
                          p
                        )
                        .then(
                          (v) =>
                            p.isCancellationRequested
                              ? h
                              : o.protocol2CodeConverter.asDocumentLink(v),
                          (v) =>
                            o.handleFailedRequest(
                              Hi.DocumentLinkResolveRequest.type,
                              p,
                              v,
                              h
                            )
                        ),
                    u = o.middleware;
                  return u.resolveDocumentLink
                    ? u.resolveDocumentLink(i, s, a)
                    : a(i, s);
                }
              : void 0,
          };
        return [
          Q_.languages.registerDocumentLinkProvider(
            this._client.protocol2CodeConverter.asDocumentSelector(n),
            r
          ),
          r,
        ];
      }
    };
  mo.DocumentLinkFeature = ul;
});
var bm = x((yo) => {
  "use strict";
  Object.defineProperty(yo, "__esModule", { value: !0 });
  yo.ExecuteCommandFeature = void 0;
  var Z_ = require("vscode"),
    ll = re(),
    ew = He(),
    vm = ye(),
    dl = class {
      constructor(e) {
        (this._client = e), (this._commands = new Map());
      }
      getState() {
        return {
          kind: "workspace",
          id: this.registrationType.method,
          registrations: this._commands.size > 0,
        };
      }
      get registrationType() {
        return ll.ExecuteCommandRequest.type;
      }
      fillClientCapabilities(e) {
        (0, vm.ensure)(
          (0, vm.ensure)(e, "workspace"),
          "executeCommand"
        ).dynamicRegistration = !0;
      }
      initialize(e) {
        !e.executeCommandProvider ||
          this.register({
            id: ew.generateUuid(),
            registerOptions: Object.assign({}, e.executeCommandProvider),
          });
      }
      register(e) {
        let n = this._client,
          r = n.middleware,
          i = (s, o) => {
            let a = { command: s, arguments: o };
            return n
              .sendRequest(ll.ExecuteCommandRequest.type, a)
              .then(void 0, (u) =>
                n.handleFailedRequest(
                  ll.ExecuteCommandRequest.type,
                  void 0,
                  u,
                  void 0
                )
              );
          };
        if (e.registerOptions.commands) {
          let s = [];
          for (let o of e.registerOptions.commands)
            s.push(
              Z_.commands.registerCommand(o, (...a) =>
                r.executeCommand ? r.executeCommand(o, a, i) : i(o, a)
              )
            );
          this._commands.set(e.id, s);
        }
      }
      unregister(e) {
        let n = this._commands.get(e);
        n && n.forEach((r) => r.dispose());
      }
      clear() {
        this._commands.forEach((e) => {
          e.forEach((n) => n.dispose());
        }),
          this._commands.clear();
      }
    };
  yo.ExecuteCommandFeature = dl;
});
var _m = x((bo) => {
  "use strict";
  Object.defineProperty(bo, "__esModule", { value: !0 });
  bo.FileSystemWatcherFeature = void 0;
  var tw = require("vscode"),
    Pr = re(),
    vo = ye(),
    fl = class {
      constructor(e, n) {
        (this._client = e),
          (this._notifyFileEvent = n),
          (this._watchers = new Map());
      }
      getState() {
        return {
          kind: "workspace",
          id: this.registrationType.method,
          registrations: this._watchers.size > 0,
        };
      }
      get registrationType() {
        return Pr.DidChangeWatchedFilesNotification.type;
      }
      fillClientCapabilities(e) {
        ((0, vo.ensure)(
          (0, vo.ensure)(e, "workspace"),
          "didChangeWatchedFiles"
        ).dynamicRegistration = !0),
          ((0, vo.ensure)(
            (0, vo.ensure)(e, "workspace"),
            "didChangeWatchedFiles"
          ).relativePatternSupport = !0);
      }
      initialize(e, n) {}
      register(e) {
        if (!Array.isArray(e.registerOptions.watchers)) return;
        let n = [];
        for (let r of e.registerOptions.watchers) {
          let i = this._client.protocol2CodeConverter.asGlobPattern(
            r.globPattern
          );
          if (i === void 0) continue;
          let s = !0,
            o = !0,
            a = !0;
          r.kind !== void 0 &&
            r.kind !== null &&
            ((s = (r.kind & Pr.WatchKind.Create) !== 0),
            (o = (r.kind & Pr.WatchKind.Change) !== 0),
            (a = (r.kind & Pr.WatchKind.Delete) !== 0));
          let u = tw.workspace.createFileSystemWatcher(i, !s, !o, !a);
          this.hookListeners(u, s, o, a, n), n.push(u);
        }
        this._watchers.set(e.id, n);
      }
      registerRaw(e, n) {
        let r = [];
        for (let i of n) this.hookListeners(i, !0, !0, !0, r);
        this._watchers.set(e, r);
      }
      hookListeners(e, n, r, i, s) {
        n &&
          e.onDidCreate(
            (o) =>
              this._notifyFileEvent({
                uri: this._client.code2ProtocolConverter.asUri(o),
                type: Pr.FileChangeType.Created,
              }),
            null,
            s
          ),
          r &&
            e.onDidChange(
              (o) =>
                this._notifyFileEvent({
                  uri: this._client.code2ProtocolConverter.asUri(o),
                  type: Pr.FileChangeType.Changed,
                }),
              null,
              s
            ),
          i &&
            e.onDidDelete(
              (o) =>
                this._notifyFileEvent({
                  uri: this._client.code2ProtocolConverter.asUri(o),
                  type: Pr.FileChangeType.Deleted,
                }),
              null,
              s
            );
      }
      unregister(e) {
        let n = this._watchers.get(e);
        if (n) for (let r of n) r.dispose();
      }
      clear() {
        this._watchers.forEach((e) => {
          for (let n of e) n.dispose();
        }),
          this._watchers.clear();
      }
    };
  bo.FileSystemWatcherFeature = fl;
});
var wm = x((_o) => {
  "use strict";
  Object.defineProperty(_o, "__esModule", { value: !0 });
  _o.ColorProviderFeature = void 0;
  var nw = require("vscode"),
    Ui = re(),
    hl = ye(),
    pl = class extends hl.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Ui.DocumentColorRequest.type);
      }
      fillClientCapabilities(e) {
        (0, hl.ensure)(
          (0, hl.ensure)(e, "textDocument"),
          "colorProvider"
        ).dynamicRegistration = !0;
      }
      initialize(e, n) {
        let [r, i] = this.getRegistration(n, e.colorProvider);
        !r || !i || this.register({ id: r, registerOptions: i });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideColorPresentations: (i, s, o) => {
              let a = this._client,
                u = (p, v, m) => {
                  let R = {
                    color: p,
                    textDocument:
                      a.code2ProtocolConverter.asTextDocumentIdentifier(
                        v.document
                      ),
                    range: a.code2ProtocolConverter.asRange(v.range),
                  };
                  return a
                    .sendRequest(Ui.ColorPresentationRequest.type, R, m)
                    .then(
                      (y) =>
                        m.isCancellationRequested
                          ? null
                          : this._client.protocol2CodeConverter.asColorPresentations(
                              y,
                              m
                            ),
                      (y) =>
                        a.handleFailedRequest(
                          Ui.ColorPresentationRequest.type,
                          m,
                          y,
                          null
                        )
                    );
                },
                h = a.middleware;
              return h.provideColorPresentations
                ? h.provideColorPresentations(i, s, o, u)
                : u(i, s, o);
            },
            provideDocumentColors: (i, s) => {
              let o = this._client,
                a = (h, p) => {
                  let v = {
                    textDocument:
                      o.code2ProtocolConverter.asTextDocumentIdentifier(h),
                  };
                  return o.sendRequest(Ui.DocumentColorRequest.type, v, p).then(
                    (m) =>
                      p.isCancellationRequested
                        ? null
                        : this._client.protocol2CodeConverter.asColorInformations(
                            m,
                            p
                          ),
                    (m) =>
                      o.handleFailedRequest(
                        Ui.DocumentColorRequest.type,
                        p,
                        m,
                        null
                      )
                  );
                },
                u = o.middleware;
              return u.provideDocumentColors
                ? u.provideDocumentColors(i, s, a)
                : a(i, s);
            },
          };
        return [
          nw.languages.registerColorProvider(
            this._client.protocol2CodeConverter.asDocumentSelector(n),
            r
          ),
          r,
        ];
      }
    };
  _o.ColorProviderFeature = pl;
});
var Cm = x((wo) => {
  "use strict";
  Object.defineProperty(wo, "__esModule", { value: !0 });
  wo.ImplementationFeature = void 0;
  var rw = require("vscode"),
    gl = re(),
    ml = ye(),
    yl = class extends ml.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, gl.ImplementationRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, ml.ensure)(
          (0, ml.ensure)(e, "textDocument"),
          "implementation"
        );
        (n.dynamicRegistration = !0), (n.linkSupport = !0);
      }
      initialize(e, n) {
        let [r, i] = this.getRegistration(n, e.implementationProvider);
        !r || !i || this.register({ id: r, registerOptions: i });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideImplementation: (i, s, o) => {
              let a = this._client,
                u = (p, v, m) =>
                  a
                    .sendRequest(
                      gl.ImplementationRequest.type,
                      a.code2ProtocolConverter.asTextDocumentPositionParams(
                        p,
                        v
                      ),
                      m
                    )
                    .then(
                      (R) =>
                        m.isCancellationRequested
                          ? null
                          : a.protocol2CodeConverter.asDefinitionResult(R, m),
                      (R) =>
                        a.handleFailedRequest(
                          gl.ImplementationRequest.type,
                          m,
                          R,
                          null
                        )
                    ),
                h = a.middleware;
              return h.provideImplementation
                ? h.provideImplementation(i, s, o, u)
                : u(i, s, o);
            },
          };
        return [this.registerProvider(n, r), r];
      }
      registerProvider(e, n) {
        return rw.languages.registerImplementationProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(e),
          n
        );
      }
    };
  wo.ImplementationFeature = yl;
});
var Dm = x((Co) => {
  "use strict";
  Object.defineProperty(Co, "__esModule", { value: !0 });
  Co.TypeDefinitionFeature = void 0;
  var iw = require("vscode"),
    vl = re(),
    Wi = ye(),
    bl = class extends Wi.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, vl.TypeDefinitionRequest.type);
      }
      fillClientCapabilities(e) {
        (0, Wi.ensure)(
          (0, Wi.ensure)(e, "textDocument"),
          "typeDefinition"
        ).dynamicRegistration = !0;
        let n = (0, Wi.ensure)(
          (0, Wi.ensure)(e, "textDocument"),
          "typeDefinition"
        );
        (n.dynamicRegistration = !0), (n.linkSupport = !0);
      }
      initialize(e, n) {
        let [r, i] = this.getRegistration(n, e.typeDefinitionProvider);
        !r || !i || this.register({ id: r, registerOptions: i });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideTypeDefinition: (i, s, o) => {
              let a = this._client,
                u = (p, v, m) =>
                  a
                    .sendRequest(
                      vl.TypeDefinitionRequest.type,
                      a.code2ProtocolConverter.asTextDocumentPositionParams(
                        p,
                        v
                      ),
                      m
                    )
                    .then(
                      (R) =>
                        m.isCancellationRequested
                          ? null
                          : a.protocol2CodeConverter.asDefinitionResult(R, m),
                      (R) =>
                        a.handleFailedRequest(
                          vl.TypeDefinitionRequest.type,
                          m,
                          R,
                          null
                        )
                    ),
                h = a.middleware;
              return h.provideTypeDefinition
                ? h.provideTypeDefinition(i, s, o, u)
                : u(i, s, o);
            },
          };
        return [this.registerProvider(n, r), r];
      }
      registerProvider(e, n) {
        return iw.languages.registerTypeDefinitionProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(e),
          n
        );
      }
    };
  Co.TypeDefinitionFeature = bl;
});
var Rm = x((di) => {
  "use strict";
  Object.defineProperty(di, "__esModule", { value: !0 });
  di.WorkspaceFoldersFeature = di.arrayDiff = void 0;
  var sw = He(),
    Do = require("vscode"),
    Ki = re();
  function _l(t, e) {
    if (t != null) return t[e];
  }
  function wl(t, e) {
    return t.filter((n) => e.indexOf(n) < 0);
  }
  di.arrayDiff = wl;
  var Cl = class {
    constructor(e) {
      (this._client = e), (this._listeners = new Map());
    }
    getState() {
      return {
        kind: "workspace",
        id: this.registrationType.method,
        registrations: this._listeners.size > 0,
      };
    }
    get registrationType() {
      return Ki.DidChangeWorkspaceFoldersNotification.type;
    }
    fillInitializeParams(e) {
      let n = Do.workspace.workspaceFolders;
      this.initializeWithFolders(n),
        n === void 0
          ? (e.workspaceFolders = null)
          : (e.workspaceFolders = n.map((r) => this.asProtocol(r)));
    }
    initializeWithFolders(e) {
      this._initialFolders = e;
    }
    fillClientCapabilities(e) {
      (e.workspace = e.workspace || {}), (e.workspace.workspaceFolders = !0);
    }
    initialize(e) {
      let n = this._client;
      n.onRequest(Ki.WorkspaceFoldersRequest.type, (s) => {
        let o = () => {
            let u = Do.workspace.workspaceFolders;
            return u === void 0 ? null : u.map((p) => this.asProtocol(p));
          },
          a = n.middleware.workspace;
        return a && a.workspaceFolders ? a.workspaceFolders(s, o) : o(s);
      });
      let r = _l(
          _l(_l(e, "workspace"), "workspaceFolders"),
          "changeNotifications"
        ),
        i;
      typeof r == "string" ? (i = r) : r === !0 && (i = sw.generateUuid()),
        i && this.register({ id: i, registerOptions: void 0 });
    }
    sendInitialEvent(e) {
      let n;
      if (this._initialFolders && e) {
        let r = wl(this._initialFolders, e),
          i = wl(e, this._initialFolders);
        (i.length > 0 || r.length > 0) && (n = this.doSendEvent(i, r));
      } else
        this._initialFolders
          ? (n = this.doSendEvent([], this._initialFolders))
          : e && (n = this.doSendEvent(e, []));
      n !== void 0 &&
        n.catch((r) => {
          this._client.error(
            `Sending notification ${Ki.DidChangeWorkspaceFoldersNotification.type.method} failed`,
            r
          );
        });
    }
    doSendEvent(e, n) {
      let r = {
        event: {
          added: e.map((i) => this.asProtocol(i)),
          removed: n.map((i) => this.asProtocol(i)),
        },
      };
      return this._client.sendNotification(
        Ki.DidChangeWorkspaceFoldersNotification.type,
        r
      );
    }
    register(e) {
      let n = e.id,
        r = this._client,
        i = Do.workspace.onDidChangeWorkspaceFolders((s) => {
          let o = (h) => this.doSendEvent(h.added, h.removed),
            a = r.middleware.workspace;
          (a && a.didChangeWorkspaceFolders
            ? a.didChangeWorkspaceFolders(s, o)
            : o(s)
          ).catch((h) => {
            this._client.error(
              `Sending notification ${Ki.DidChangeWorkspaceFoldersNotification.type.method} failed`,
              h
            );
          });
        });
      this._listeners.set(n, i),
        this.sendInitialEvent(Do.workspace.workspaceFolders);
    }
    unregister(e) {
      let n = this._listeners.get(e);
      n !== void 0 && (this._listeners.delete(e), n.dispose());
    }
    clear() {
      for (let e of this._listeners.values()) e.dispose();
      this._listeners.clear();
    }
    asProtocol(e) {
      return e === void 0
        ? null
        : {
            uri: this._client.code2ProtocolConverter.asUri(e.uri),
            name: e.name,
          };
    }
  };
  di.WorkspaceFoldersFeature = Cl;
});
var Tm = x((Ro) => {
  "use strict";
  Object.defineProperty(Ro, "__esModule", { value: !0 });
  Ro.FoldingRangeFeature = void 0;
  var Sm = require("vscode"),
    Er = re(),
    zi = ye(),
    Dl = class extends zi.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Er.FoldingRangeRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, zi.ensure)(
          (0, zi.ensure)(e, "textDocument"),
          "foldingRange"
        );
        (n.dynamicRegistration = !0),
          (n.rangeLimit = 5e3),
          (n.lineFoldingOnly = !0),
          (n.foldingRangeKind = {
            valueSet: [
              Er.FoldingRangeKind.Comment,
              Er.FoldingRangeKind.Imports,
              Er.FoldingRangeKind.Region,
            ],
          }),
          (n.foldingRange = { collapsedText: !1 }),
          ((0, zi.ensure)(
            (0, zi.ensure)(e, "workspace"),
            "foldingRange"
          ).refreshSupport = !0);
      }
      initialize(e, n) {
        this._client.onRequest(Er.FoldingRangeRefreshRequest.type, async () => {
          for (let s of this.getAllProviders())
            s.onDidChangeFoldingRange.fire();
        });
        let [r, i] = this.getRegistration(n, e.foldingRangeProvider);
        !r || !i || this.register({ id: r, registerOptions: i });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = new Sm.EventEmitter(),
          i = {
            onDidChangeFoldingRanges: r.event,
            provideFoldingRanges: (s, o, a) => {
              let u = this._client,
                h = (v, m, R) => {
                  let y = {
                    textDocument:
                      u.code2ProtocolConverter.asTextDocumentIdentifier(v),
                  };
                  return u.sendRequest(Er.FoldingRangeRequest.type, y, R).then(
                    (P) =>
                      R.isCancellationRequested
                        ? null
                        : u.protocol2CodeConverter.asFoldingRanges(P, R),
                    (P) =>
                      u.handleFailedRequest(
                        Er.FoldingRangeRequest.type,
                        R,
                        P,
                        null
                      )
                  );
                },
                p = u.middleware;
              return p.provideFoldingRanges
                ? p.provideFoldingRanges(s, o, a, h)
                : h(s, o, a);
            },
          };
        return [
          Sm.languages.registerFoldingRangeProvider(
            this._client.protocol2CodeConverter.asDocumentSelector(n),
            i
          ),
          { provider: i, onDidChangeFoldingRange: r },
        ];
      }
    };
  Ro.FoldingRangeFeature = Dl;
});
var Pm = x((So) => {
  "use strict";
  Object.defineProperty(So, "__esModule", { value: !0 });
  So.DeclarationFeature = void 0;
  var ow = require("vscode"),
    Rl = re(),
    Sl = ye(),
    Tl = class extends Sl.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Rl.DeclarationRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, Sl.ensure)(
          (0, Sl.ensure)(e, "textDocument"),
          "declaration"
        );
        (n.dynamicRegistration = !0), (n.linkSupport = !0);
      }
      initialize(e, n) {
        let [r, i] = this.getRegistration(n, e.declarationProvider);
        !r || !i || this.register({ id: r, registerOptions: i });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideDeclaration: (i, s, o) => {
              let a = this._client,
                u = (p, v, m) =>
                  a
                    .sendRequest(
                      Rl.DeclarationRequest.type,
                      a.code2ProtocolConverter.asTextDocumentPositionParams(
                        p,
                        v
                      ),
                      m
                    )
                    .then(
                      (R) =>
                        m.isCancellationRequested
                          ? null
                          : a.protocol2CodeConverter.asDeclarationResult(R, m),
                      (R) =>
                        a.handleFailedRequest(
                          Rl.DeclarationRequest.type,
                          m,
                          R,
                          null
                        )
                    ),
                h = a.middleware;
              return h.provideDeclaration
                ? h.provideDeclaration(i, s, o, u)
                : u(i, s, o);
            },
          };
        return [this.registerProvider(n, r), r];
      }
      registerProvider(e, n) {
        return ow.languages.registerDeclarationProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(e),
          n
        );
      }
    };
  So.DeclarationFeature = Tl;
});
var Em = x((To) => {
  "use strict";
  Object.defineProperty(To, "__esModule", { value: !0 });
  To.SelectionRangeFeature = void 0;
  var aw = require("vscode"),
    Pl = re(),
    El = ye(),
    kl = class extends El.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Pl.SelectionRangeRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, El.ensure)(
          (0, El.ensure)(e, "textDocument"),
          "selectionRange"
        );
        n.dynamicRegistration = !0;
      }
      initialize(e, n) {
        let [r, i] = this.getRegistration(n, e.selectionRangeProvider);
        !r || !i || this.register({ id: r, registerOptions: i });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideSelectionRanges: (i, s, o) => {
              let a = this._client,
                u = async (p, v, m) => {
                  let R = {
                    textDocument:
                      a.code2ProtocolConverter.asTextDocumentIdentifier(p),
                    positions: a.code2ProtocolConverter.asPositionsSync(v, m),
                  };
                  return a
                    .sendRequest(Pl.SelectionRangeRequest.type, R, m)
                    .then(
                      (y) =>
                        m.isCancellationRequested
                          ? null
                          : a.protocol2CodeConverter.asSelectionRanges(y, m),
                      (y) =>
                        a.handleFailedRequest(
                          Pl.SelectionRangeRequest.type,
                          m,
                          y,
                          null
                        )
                    );
                },
                h = a.middleware;
              return h.provideSelectionRanges
                ? h.provideSelectionRanges(i, s, o, u)
                : u(i, s, o);
            },
          };
        return [this.registerProvider(n, r), r];
      }
      registerProvider(e, n) {
        return aw.languages.registerSelectionRangeProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(e),
          n
        );
      }
    };
  To.SelectionRangeFeature = kl;
});
var qm = x((Po) => {
  "use strict";
  Object.defineProperty(Po, "__esModule", { value: !0 });
  Po.ProgressFeature = void 0;
  var km = re(),
    cw = iu();
  function uw(t, e) {
    return t[e] === void 0 && (t[e] = Object.create(null)), t[e];
  }
  var ql = class {
    constructor(e) {
      (this._client = e), (this.activeParts = new Set());
    }
    getState() {
      return {
        kind: "window",
        id: km.WorkDoneProgressCreateRequest.method,
        registrations: this.activeParts.size > 0,
      };
    }
    fillClientCapabilities(e) {
      uw(e, "window").workDoneProgress = !0;
    }
    initialize() {
      let e = this._client,
        n = (i) => {
          this.activeParts.delete(i);
        },
        r = (i) => {
          this.activeParts.add(new cw.ProgressPart(this._client, i.token, n));
        };
      e.onRequest(km.WorkDoneProgressCreateRequest.type, r);
    }
    clear() {
      for (let e of this.activeParts) e.done();
      this.activeParts.clear();
    }
  };
  Po.ProgressFeature = ql;
});
var xm = x((Eo) => {
  "use strict";
  Object.defineProperty(Eo, "__esModule", { value: !0 });
  Eo.CallHierarchyFeature = void 0;
  var lw = require("vscode"),
    kr = re(),
    xl = ye(),
    Ol = class {
      constructor(e) {
        (this.client = e), (this.middleware = e.middleware);
      }
      prepareCallHierarchy(e, n, r) {
        let i = this.client,
          s = this.middleware,
          o = (a, u, h) => {
            let p = i.code2ProtocolConverter.asTextDocumentPositionParams(a, u);
            return i
              .sendRequest(kr.CallHierarchyPrepareRequest.type, p, h)
              .then(
                (v) =>
                  h.isCancellationRequested
                    ? null
                    : i.protocol2CodeConverter.asCallHierarchyItems(v, h),
                (v) =>
                  i.handleFailedRequest(
                    kr.CallHierarchyPrepareRequest.type,
                    h,
                    v,
                    null
                  )
              );
          };
        return s.prepareCallHierarchy
          ? s.prepareCallHierarchy(e, n, r, o)
          : o(e, n, r);
      }
      provideCallHierarchyIncomingCalls(e, n) {
        let r = this.client,
          i = this.middleware,
          s = (o, a) => {
            let u = { item: r.code2ProtocolConverter.asCallHierarchyItem(o) };
            return r
              .sendRequest(kr.CallHierarchyIncomingCallsRequest.type, u, a)
              .then(
                (h) =>
                  a.isCancellationRequested
                    ? null
                    : r.protocol2CodeConverter.asCallHierarchyIncomingCalls(
                        h,
                        a
                      ),
                (h) =>
                  r.handleFailedRequest(
                    kr.CallHierarchyIncomingCallsRequest.type,
                    a,
                    h,
                    null
                  )
              );
          };
        return i.provideCallHierarchyIncomingCalls
          ? i.provideCallHierarchyIncomingCalls(e, n, s)
          : s(e, n);
      }
      provideCallHierarchyOutgoingCalls(e, n) {
        let r = this.client,
          i = this.middleware,
          s = (o, a) => {
            let u = { item: r.code2ProtocolConverter.asCallHierarchyItem(o) };
            return r
              .sendRequest(kr.CallHierarchyOutgoingCallsRequest.type, u, a)
              .then(
                (h) =>
                  a.isCancellationRequested
                    ? null
                    : r.protocol2CodeConverter.asCallHierarchyOutgoingCalls(
                        h,
                        a
                      ),
                (h) =>
                  r.handleFailedRequest(
                    kr.CallHierarchyOutgoingCallsRequest.type,
                    a,
                    h,
                    null
                  )
              );
          };
        return i.provideCallHierarchyOutgoingCalls
          ? i.provideCallHierarchyOutgoingCalls(e, n, s)
          : s(e, n);
      }
    },
    Il = class extends xl.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, kr.CallHierarchyPrepareRequest.type);
      }
      fillClientCapabilities(e) {
        let n = e,
          r = (0, xl.ensure)(
            (0, xl.ensure)(n, "textDocument"),
            "callHierarchy"
          );
        r.dynamicRegistration = !0;
      }
      initialize(e, n) {
        let [r, i] = this.getRegistration(n, e.callHierarchyProvider);
        !r || !i || this.register({ id: r, registerOptions: i });
      }
      registerLanguageProvider(e) {
        let n = this._client,
          r = new Ol(n);
        return [
          lw.languages.registerCallHierarchyProvider(
            this._client.protocol2CodeConverter.asDocumentSelector(
              e.documentSelector
            ),
            r
          ),
          r,
        ];
      }
    };
  Eo.CallHierarchyFeature = Il;
});
var Om = x((qo) => {
  "use strict";
  Object.defineProperty(qo, "__esModule", { value: !0 });
  qo.SemanticTokensFeature = void 0;
  var ko = require("vscode"),
    oe = re(),
    Bi = ye(),
    dw = Yt(),
    Fl = class extends Bi.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, oe.SemanticTokensRegistrationType.type);
      }
      fillClientCapabilities(e) {
        let n = (0, Bi.ensure)(
          (0, Bi.ensure)(e, "textDocument"),
          "semanticTokens"
        );
        (n.dynamicRegistration = !0),
          (n.tokenTypes = [
            oe.SemanticTokenTypes.namespace,
            oe.SemanticTokenTypes.type,
            oe.SemanticTokenTypes.class,
            oe.SemanticTokenTypes.enum,
            oe.SemanticTokenTypes.interface,
            oe.SemanticTokenTypes.struct,
            oe.SemanticTokenTypes.typeParameter,
            oe.SemanticTokenTypes.parameter,
            oe.SemanticTokenTypes.variable,
            oe.SemanticTokenTypes.property,
            oe.SemanticTokenTypes.enumMember,
            oe.SemanticTokenTypes.event,
            oe.SemanticTokenTypes.function,
            oe.SemanticTokenTypes.method,
            oe.SemanticTokenTypes.macro,
            oe.SemanticTokenTypes.keyword,
            oe.SemanticTokenTypes.modifier,
            oe.SemanticTokenTypes.comment,
            oe.SemanticTokenTypes.string,
            oe.SemanticTokenTypes.number,
            oe.SemanticTokenTypes.regexp,
            oe.SemanticTokenTypes.operator,
            oe.SemanticTokenTypes.decorator,
          ]),
          (n.tokenModifiers = [
            oe.SemanticTokenModifiers.declaration,
            oe.SemanticTokenModifiers.definition,
            oe.SemanticTokenModifiers.readonly,
            oe.SemanticTokenModifiers.static,
            oe.SemanticTokenModifiers.deprecated,
            oe.SemanticTokenModifiers.abstract,
            oe.SemanticTokenModifiers.async,
            oe.SemanticTokenModifiers.modification,
            oe.SemanticTokenModifiers.documentation,
            oe.SemanticTokenModifiers.defaultLibrary,
          ]),
          (n.formats = [oe.TokenFormat.Relative]),
          (n.requests = { range: !0, full: { delta: !0 } }),
          (n.multilineTokenSupport = !1),
          (n.overlappingTokenSupport = !1),
          (n.serverCancelSupport = !0),
          (n.augmentsSyntaxTokens = !0),
          ((0, Bi.ensure)(
            (0, Bi.ensure)(e, "workspace"),
            "semanticTokens"
          ).refreshSupport = !0);
      }
      initialize(e, n) {
        this._client.onRequest(
          oe.SemanticTokensRefreshRequest.type,
          async () => {
            for (let o of this.getAllProviders())
              o.onDidChangeSemanticTokensEmitter.fire();
          }
        );
        let [i, s] = this.getRegistration(n, e.semanticTokensProvider);
        !i || !s || this.register({ id: i, registerOptions: s });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = dw.boolean(e.full) ? e.full : e.full !== void 0,
          i =
            e.full !== void 0 &&
            typeof e.full != "boolean" &&
            e.full.delta === !0,
          s = new ko.EventEmitter(),
          o = r
            ? {
                onDidChangeSemanticTokens: s.event,
                provideDocumentSemanticTokens: (R, y) => {
                  let P = this._client,
                    q = P.middleware,
                    A = (j, E) => {
                      let I = {
                        textDocument:
                          P.code2ProtocolConverter.asTextDocumentIdentifier(j),
                      };
                      return P.sendRequest(
                        oe.SemanticTokensRequest.type,
                        I,
                        E
                      ).then(
                        (N) =>
                          E.isCancellationRequested
                            ? null
                            : P.protocol2CodeConverter.asSemanticTokens(N, E),
                        (N) =>
                          P.handleFailedRequest(
                            oe.SemanticTokensRequest.type,
                            E,
                            N,
                            null
                          )
                      );
                    };
                  return q.provideDocumentSemanticTokens
                    ? q.provideDocumentSemanticTokens(R, y, A)
                    : A(R, y);
                },
                provideDocumentSemanticTokensEdits: i
                  ? (R, y, P) => {
                      let q = this._client,
                        A = q.middleware,
                        j = (E, I, N) => {
                          let Q = {
                            textDocument:
                              q.code2ProtocolConverter.asTextDocumentIdentifier(
                                E
                              ),
                            previousResultId: I,
                          };
                          return q
                            .sendRequest(
                              oe.SemanticTokensDeltaRequest.type,
                              Q,
                              N
                            )
                            .then(
                              async (X) =>
                                N.isCancellationRequested
                                  ? null
                                  : oe.SemanticTokens.is(X)
                                  ? await q.protocol2CodeConverter.asSemanticTokens(
                                      X,
                                      N
                                    )
                                  : await q.protocol2CodeConverter.asSemanticTokensEdits(
                                      X,
                                      N
                                    ),
                              (X) =>
                                q.handleFailedRequest(
                                  oe.SemanticTokensDeltaRequest.type,
                                  N,
                                  X,
                                  null
                                )
                            );
                        };
                      return A.provideDocumentSemanticTokensEdits
                        ? A.provideDocumentSemanticTokensEdits(R, y, P, j)
                        : j(R, y, P);
                    }
                  : void 0,
              }
            : void 0,
          u =
            e.range === !0
              ? {
                  provideDocumentRangeSemanticTokens: (R, y, P) => {
                    let q = this._client,
                      A = q.middleware,
                      j = (E, I, N) => {
                        let Q = {
                          textDocument:
                            q.code2ProtocolConverter.asTextDocumentIdentifier(
                              E
                            ),
                          range: q.code2ProtocolConverter.asRange(I),
                        };
                        return q
                          .sendRequest(oe.SemanticTokensRangeRequest.type, Q, N)
                          .then(
                            (X) =>
                              N.isCancellationRequested
                                ? null
                                : q.protocol2CodeConverter.asSemanticTokens(
                                    X,
                                    N
                                  ),
                            (X) =>
                              q.handleFailedRequest(
                                oe.SemanticTokensRangeRequest.type,
                                N,
                                X,
                                null
                              )
                          );
                      };
                    return A.provideDocumentRangeSemanticTokens
                      ? A.provideDocumentRangeSemanticTokens(R, y, P, j)
                      : j(R, y, P);
                  },
                }
              : void 0,
          h = [],
          p = this._client,
          v = p.protocol2CodeConverter.asSemanticTokensLegend(e.legend),
          m = p.protocol2CodeConverter.asDocumentSelector(n);
        return (
          o !== void 0 &&
            h.push(
              ko.languages.registerDocumentSemanticTokensProvider(m, o, v)
            ),
          u !== void 0 &&
            h.push(
              ko.languages.registerDocumentRangeSemanticTokensProvider(m, u, v)
            ),
          [
            new ko.Disposable(() => h.forEach((R) => R.dispose())),
            { range: u, full: o, onDidChangeSemanticTokensEmitter: s },
          ]
        );
      }
    };
  qo.SemanticTokensFeature = Fl;
});
var Nm = x((At) => {
  "use strict";
  Object.defineProperty(At, "__esModule", { value: !0 });
  At.WillDeleteFilesFeature =
    At.WillRenameFilesFeature =
    At.WillCreateFilesFeature =
    At.DidDeleteFilesFeature =
    At.DidRenameFilesFeature =
    At.DidCreateFilesFeature =
      void 0;
  var sn = require("vscode"),
    fw = Ys(),
    Hn = re(),
    hw = He();
  function Im(t, e) {
    return t[e] === void 0 && (t[e] = {}), t[e];
  }
  function pw(t, e) {
    return t[e];
  }
  function Fm(t, e, n) {
    t[e] = n;
  }
  var Un = class {
      constructor(e, n, r, i, s) {
        (this._client = e),
          (this._event = n),
          (this._registrationType = r),
          (this._clientCapability = i),
          (this._serverCapability = s),
          (this._filters = new Map());
      }
      getState() {
        return {
          kind: "workspace",
          id: this._registrationType.method,
          registrations: this._filters.size > 0,
        };
      }
      filterSize() {
        return this._filters.size;
      }
      get registrationType() {
        return this._registrationType;
      }
      fillClientCapabilities(e) {
        let n = Im(Im(e, "workspace"), "fileOperations");
        Fm(n, "dynamicRegistration", !0), Fm(n, this._clientCapability, !0);
      }
      initialize(e) {
        let n = e.workspace?.fileOperations,
          r = n !== void 0 ? pw(n, this._serverCapability) : void 0;
        if (r?.filters !== void 0)
          try {
            this.register({
              id: hw.generateUuid(),
              registerOptions: { filters: r.filters },
            });
          } catch (i) {
            this._client.warn(
              `Ignoring invalid glob pattern for ${this._serverCapability} registration: ${i}`
            );
          }
      }
      register(e) {
        this._listener || (this._listener = this._event(this.send, this));
        let n = e.registerOptions.filters.map((r) => {
          let i = new fw.Minimatch(
            r.pattern.glob,
            Un.asMinimatchOptions(r.pattern.options)
          );
          if (!i.makeRe())
            throw new Error(`Invalid pattern ${r.pattern.glob}!`);
          return { scheme: r.scheme, matcher: i, kind: r.pattern.matches };
        });
        this._filters.set(e.id, n);
      }
      unregister(e) {
        this._filters.delete(e),
          this._filters.size === 0 &&
            this._listener &&
            (this._listener.dispose(), (this._listener = void 0));
      }
      clear() {
        this._filters.clear(),
          this._listener &&
            (this._listener.dispose(), (this._listener = void 0));
      }
      getFileType(e) {
        return Un.getFileType(e);
      }
      async filter(e, n) {
        let r = await Promise.all(
            e.files.map(async (s) => {
              let o = n(s),
                a = o.fsPath.replace(/\\/g, "/");
              for (let u of this._filters.values())
                for (let h of u)
                  if (!(h.scheme !== void 0 && h.scheme !== o.scheme)) {
                    if (h.matcher.match(a)) {
                      if (h.kind === void 0) return !0;
                      let p = await this.getFileType(o);
                      if (p === void 0)
                        return (
                          this._client.error(
                            `Failed to determine file type for ${o.toString()}.`
                          ),
                          !0
                        );
                      if (
                        (p === sn.FileType.File &&
                          h.kind === Hn.FileOperationPatternKind.file) ||
                        (p === sn.FileType.Directory &&
                          h.kind === Hn.FileOperationPatternKind.folder)
                      )
                        return !0;
                    } else if (
                      h.kind === Hn.FileOperationPatternKind.folder &&
                      (await Un.getFileType(o)) === sn.FileType.Directory &&
                      h.matcher.match(`${a}/`)
                    )
                      return !0;
                  }
              return !1;
            })
          ),
          i = e.files.filter((s, o) => r[o]);
        return { ...e, files: i };
      }
      static async getFileType(e) {
        try {
          return (await sn.workspace.fs.stat(e)).type;
        } catch {
          return;
        }
      }
      static asMinimatchOptions(e) {
        let n = { dot: !0 };
        return e?.ignoreCase === !0 && (n.nocase = !0), n;
      }
    },
    xo = class extends Un {
      constructor(e, n, r, i, s, o, a) {
        super(e, n, r, i, s),
          (this._notificationType = r),
          (this._accessUri = o),
          (this._createParams = a);
      }
      async send(e) {
        let n = await this.filter(e, this._accessUri);
        if (n.files.length) {
          let r = async (i) =>
            this._client.sendNotification(
              this._notificationType,
              this._createParams(i)
            );
          return this.doSend(n, r);
        }
      }
    },
    Oo = class extends xo {
      constructor() {
        super(...arguments), (this._fsPathFileTypes = new Map());
      }
      async getFileType(e) {
        let n = e.fsPath;
        if (this._fsPathFileTypes.has(n)) return this._fsPathFileTypes.get(n);
        let r = await Un.getFileType(e);
        return r && this._fsPathFileTypes.set(n, r), r;
      }
      async cacheFileTypes(e, n) {
        await this.filter(e, n);
      }
      clearFileTypeCache() {
        this._fsPathFileTypes.clear();
      }
      unregister(e) {
        super.unregister(e),
          this.filterSize() === 0 &&
            this._willListener &&
            (this._willListener.dispose(), (this._willListener = void 0));
      }
      clear() {
        super.clear(),
          this._willListener &&
            (this._willListener.dispose(), (this._willListener = void 0));
      }
    },
    Nl = class extends xo {
      constructor(e) {
        super(
          e,
          sn.workspace.onDidCreateFiles,
          Hn.DidCreateFilesNotification.type,
          "didCreate",
          "didCreate",
          (n) => n,
          e.code2ProtocolConverter.asDidCreateFilesParams
        );
      }
      doSend(e, n) {
        let r = this._client.middleware.workspace;
        return r?.didCreateFiles ? r.didCreateFiles(e, n) : n(e);
      }
    };
  At.DidCreateFilesFeature = Nl;
  var Ll = class extends Oo {
    constructor(e) {
      super(
        e,
        sn.workspace.onDidRenameFiles,
        Hn.DidRenameFilesNotification.type,
        "didRename",
        "didRename",
        (n) => n.oldUri,
        e.code2ProtocolConverter.asDidRenameFilesParams
      );
    }
    register(e) {
      this._willListener ||
        (this._willListener = sn.workspace.onWillRenameFiles(
          this.willRename,
          this
        )),
        super.register(e);
    }
    willRename(e) {
      e.waitUntil(this.cacheFileTypes(e, (n) => n.oldUri));
    }
    doSend(e, n) {
      this.clearFileTypeCache();
      let r = this._client.middleware.workspace;
      return r?.didRenameFiles ? r.didRenameFiles(e, n) : n(e);
    }
  };
  At.DidRenameFilesFeature = Ll;
  var Ml = class extends Oo {
    constructor(e) {
      super(
        e,
        sn.workspace.onDidDeleteFiles,
        Hn.DidDeleteFilesNotification.type,
        "didDelete",
        "didDelete",
        (n) => n,
        e.code2ProtocolConverter.asDidDeleteFilesParams
      );
    }
    register(e) {
      this._willListener ||
        (this._willListener = sn.workspace.onWillDeleteFiles(
          this.willDelete,
          this
        )),
        super.register(e);
    }
    willDelete(e) {
      e.waitUntil(this.cacheFileTypes(e, (n) => n));
    }
    doSend(e, n) {
      this.clearFileTypeCache();
      let r = this._client.middleware.workspace;
      return r?.didDeleteFiles ? r.didDeleteFiles(e, n) : n(e);
    }
  };
  At.DidDeleteFilesFeature = Ml;
  var Vi = class extends Un {
      constructor(e, n, r, i, s, o, a) {
        super(e, n, r, i, s),
          (this._requestType = r),
          (this._accessUri = o),
          (this._createParams = a);
      }
      async send(e) {
        let n = this.waitUntil(e);
        e.waitUntil(n);
      }
      async waitUntil(e) {
        let n = await this.filter(e, this._accessUri);
        if (n.files.length) {
          let r = (i) =>
            this._client
              .sendRequest(this._requestType, this._createParams(i), i.token)
              .then(this._client.protocol2CodeConverter.asWorkspaceEdit);
          return this.doSend(n, r);
        } else return;
      }
    },
    Al = class extends Vi {
      constructor(e) {
        super(
          e,
          sn.workspace.onWillCreateFiles,
          Hn.WillCreateFilesRequest.type,
          "willCreate",
          "willCreate",
          (n) => n,
          e.code2ProtocolConverter.asWillCreateFilesParams
        );
      }
      doSend(e, n) {
        let r = this._client.middleware.workspace;
        return r?.willCreateFiles ? r.willCreateFiles(e, n) : n(e);
      }
    };
  At.WillCreateFilesFeature = Al;
  var jl = class extends Vi {
    constructor(e) {
      super(
        e,
        sn.workspace.onWillRenameFiles,
        Hn.WillRenameFilesRequest.type,
        "willRename",
        "willRename",
        (n) => n.oldUri,
        e.code2ProtocolConverter.asWillRenameFilesParams
      );
    }
    doSend(e, n) {
      let r = this._client.middleware.workspace;
      return r?.willRenameFiles ? r.willRenameFiles(e, n) : n(e);
    }
  };
  At.WillRenameFilesFeature = jl;
  var $l = class extends Vi {
    constructor(e) {
      super(
        e,
        sn.workspace.onWillDeleteFiles,
        Hn.WillDeleteFilesRequest.type,
        "willDelete",
        "willDelete",
        (n) => n,
        e.code2ProtocolConverter.asWillDeleteFilesParams
      );
    }
    doSend(e, n) {
      let r = this._client.middleware.workspace;
      return r?.willDeleteFiles ? r.willDeleteFiles(e, n) : n(e);
    }
  };
  At.WillDeleteFilesFeature = $l;
});
var Lm = x((Io) => {
  "use strict";
  Object.defineProperty(Io, "__esModule", { value: !0 });
  Io.LinkedEditingFeature = void 0;
  var gw = require("vscode"),
    Hl = re(),
    Ul = ye(),
    Wl = class extends Ul.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Hl.LinkedEditingRangeRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, Ul.ensure)(
          (0, Ul.ensure)(e, "textDocument"),
          "linkedEditingRange"
        );
        n.dynamicRegistration = !0;
      }
      initialize(e, n) {
        let [r, i] = this.getRegistration(n, e.linkedEditingRangeProvider);
        !r || !i || this.register({ id: r, registerOptions: i });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideLinkedEditingRanges: (i, s, o) => {
              let a = this._client,
                u = (p, v, m) =>
                  a
                    .sendRequest(
                      Hl.LinkedEditingRangeRequest.type,
                      a.code2ProtocolConverter.asTextDocumentPositionParams(
                        p,
                        v
                      ),
                      m
                    )
                    .then(
                      (R) =>
                        m.isCancellationRequested
                          ? null
                          : a.protocol2CodeConverter.asLinkedEditingRanges(
                              R,
                              m
                            ),
                      (R) =>
                        a.handleFailedRequest(
                          Hl.LinkedEditingRangeRequest.type,
                          m,
                          R,
                          null
                        )
                    ),
                h = a.middleware;
              return h.provideLinkedEditingRange
                ? h.provideLinkedEditingRange(i, s, o, u)
                : u(i, s, o);
            },
          };
        return [this.registerProvider(n, r), r];
      }
      registerProvider(e, n) {
        return gw.languages.registerLinkedEditingRangeProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(e),
          n
        );
      }
    };
  Io.LinkedEditingFeature = Wl;
});
var Mm = x((Fo) => {
  "use strict";
  Object.defineProperty(Fo, "__esModule", { value: !0 });
  Fo.TypeHierarchyFeature = void 0;
  var mw = require("vscode"),
    qr = re(),
    Kl = ye(),
    zl = class {
      constructor(e) {
        (this.client = e), (this.middleware = e.middleware);
      }
      prepareTypeHierarchy(e, n, r) {
        let i = this.client,
          s = this.middleware,
          o = (a, u, h) => {
            let p = i.code2ProtocolConverter.asTextDocumentPositionParams(a, u);
            return i
              .sendRequest(qr.TypeHierarchyPrepareRequest.type, p, h)
              .then(
                (v) =>
                  h.isCancellationRequested
                    ? null
                    : i.protocol2CodeConverter.asTypeHierarchyItems(v, h),
                (v) =>
                  i.handleFailedRequest(
                    qr.TypeHierarchyPrepareRequest.type,
                    h,
                    v,
                    null
                  )
              );
          };
        return s.prepareTypeHierarchy
          ? s.prepareTypeHierarchy(e, n, r, o)
          : o(e, n, r);
      }
      provideTypeHierarchySupertypes(e, n) {
        let r = this.client,
          i = this.middleware,
          s = (o, a) => {
            let u = { item: r.code2ProtocolConverter.asTypeHierarchyItem(o) };
            return r
              .sendRequest(qr.TypeHierarchySupertypesRequest.type, u, a)
              .then(
                (h) =>
                  a.isCancellationRequested
                    ? null
                    : r.protocol2CodeConverter.asTypeHierarchyItems(h, a),
                (h) =>
                  r.handleFailedRequest(
                    qr.TypeHierarchySupertypesRequest.type,
                    a,
                    h,
                    null
                  )
              );
          };
        return i.provideTypeHierarchySupertypes
          ? i.provideTypeHierarchySupertypes(e, n, s)
          : s(e, n);
      }
      provideTypeHierarchySubtypes(e, n) {
        let r = this.client,
          i = this.middleware,
          s = (o, a) => {
            let u = { item: r.code2ProtocolConverter.asTypeHierarchyItem(o) };
            return r
              .sendRequest(qr.TypeHierarchySubtypesRequest.type, u, a)
              .then(
                (h) =>
                  a.isCancellationRequested
                    ? null
                    : r.protocol2CodeConverter.asTypeHierarchyItems(h, a),
                (h) =>
                  r.handleFailedRequest(
                    qr.TypeHierarchySubtypesRequest.type,
                    a,
                    h,
                    null
                  )
              );
          };
        return i.provideTypeHierarchySubtypes
          ? i.provideTypeHierarchySubtypes(e, n, s)
          : s(e, n);
      }
    },
    Bl = class extends Kl.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, qr.TypeHierarchyPrepareRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, Kl.ensure)(
          (0, Kl.ensure)(e, "textDocument"),
          "typeHierarchy"
        );
        n.dynamicRegistration = !0;
      }
      initialize(e, n) {
        let [r, i] = this.getRegistration(n, e.typeHierarchyProvider);
        !r || !i || this.register({ id: r, registerOptions: i });
      }
      registerLanguageProvider(e) {
        let n = this._client,
          r = new zl(n);
        return [
          mw.languages.registerTypeHierarchyProvider(
            n.protocol2CodeConverter.asDocumentSelector(e.documentSelector),
            r
          ),
          r,
        ];
      }
    };
  Fo.TypeHierarchyFeature = Bl;
});
var jm = x((Lo) => {
  "use strict";
  Object.defineProperty(Lo, "__esModule", { value: !0 });
  Lo.InlineValueFeature = void 0;
  var Am = require("vscode"),
    No = re(),
    Gi = ye(),
    Vl = class extends Gi.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, No.InlineValueRequest.type);
      }
      fillClientCapabilities(e) {
        ((0, Gi.ensure)(
          (0, Gi.ensure)(e, "textDocument"),
          "inlineValue"
        ).dynamicRegistration = !0),
          ((0, Gi.ensure)(
            (0, Gi.ensure)(e, "workspace"),
            "inlineValue"
          ).refreshSupport = !0);
      }
      initialize(e, n) {
        this._client.onRequest(No.InlineValueRefreshRequest.type, async () => {
          for (let s of this.getAllProviders())
            s.onDidChangeInlineValues.fire();
        });
        let [r, i] = this.getRegistration(n, e.inlineValueProvider);
        !r || !i || this.register({ id: r, registerOptions: i });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = new Am.EventEmitter(),
          i = {
            onDidChangeInlineValues: r.event,
            provideInlineValues: (s, o, a, u) => {
              let h = this._client,
                p = (m, R, y, P) => {
                  let q = {
                    textDocument:
                      h.code2ProtocolConverter.asTextDocumentIdentifier(m),
                    range: h.code2ProtocolConverter.asRange(R),
                    context: h.code2ProtocolConverter.asInlineValueContext(y),
                  };
                  return h.sendRequest(No.InlineValueRequest.type, q, P).then(
                    (A) =>
                      P.isCancellationRequested
                        ? null
                        : h.protocol2CodeConverter.asInlineValues(A, P),
                    (A) =>
                      h.handleFailedRequest(
                        No.InlineValueRequest.type,
                        P,
                        A,
                        null
                      )
                  );
                },
                v = h.middleware;
              return v.provideInlineValues
                ? v.provideInlineValues(s, o, a, u, p)
                : p(s, o, a, u);
            },
          };
        return [
          this.registerProvider(n, i),
          { provider: i, onDidChangeInlineValues: r },
        ];
      }
      registerProvider(e, n) {
        return Am.languages.registerInlineValuesProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(e),
          n
        );
      }
    };
  Lo.InlineValueFeature = Vl;
});
var Hm = x((Mo) => {
  "use strict";
  Object.defineProperty(Mo, "__esModule", { value: !0 });
  Mo.InlayHintsFeature = void 0;
  var $m = require("vscode"),
    fi = re(),
    Xi = ye(),
    Gl = class extends Xi.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, fi.InlayHintRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, Xi.ensure)((0, Xi.ensure)(e, "textDocument"), "inlayHint");
        (n.dynamicRegistration = !0),
          (n.resolveSupport = {
            properties: [
              "tooltip",
              "textEdits",
              "label.tooltip",
              "label.location",
              "label.command",
            ],
          }),
          ((0, Xi.ensure)(
            (0, Xi.ensure)(e, "workspace"),
            "inlayHint"
          ).refreshSupport = !0);
      }
      initialize(e, n) {
        this._client.onRequest(fi.InlayHintRefreshRequest.type, async () => {
          for (let s of this.getAllProviders()) s.onDidChangeInlayHints.fire();
        });
        let [r, i] = this.getRegistration(n, e.inlayHintProvider);
        !r || !i || this.register({ id: r, registerOptions: i });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = new $m.EventEmitter(),
          i = {
            onDidChangeInlayHints: r.event,
            provideInlayHints: (s, o, a) => {
              let u = this._client,
                h = async (v, m, R) => {
                  let y = {
                    textDocument:
                      u.code2ProtocolConverter.asTextDocumentIdentifier(v),
                    range: u.code2ProtocolConverter.asRange(m),
                  };
                  try {
                    let P = await u.sendRequest(fi.InlayHintRequest.type, y, R);
                    return R.isCancellationRequested
                      ? null
                      : u.protocol2CodeConverter.asInlayHints(P, R);
                  } catch (P) {
                    return u.handleFailedRequest(
                      fi.InlayHintRequest.type,
                      R,
                      P,
                      null
                    );
                  }
                },
                p = u.middleware;
              return p.provideInlayHints
                ? p.provideInlayHints(s, o, a, h)
                : h(s, o, a);
            },
          };
        return (
          (i.resolveInlayHint =
            e.resolveProvider === !0
              ? (s, o) => {
                  let a = this._client,
                    u = async (p, v) => {
                      try {
                        let m = await a.sendRequest(
                          fi.InlayHintResolveRequest.type,
                          a.code2ProtocolConverter.asInlayHint(p),
                          v
                        );
                        if (v.isCancellationRequested) return null;
                        let R = a.protocol2CodeConverter.asInlayHint(m, v);
                        return v.isCancellationRequested ? null : R;
                      } catch (m) {
                        return a.handleFailedRequest(
                          fi.InlayHintResolveRequest.type,
                          v,
                          m,
                          null
                        );
                      }
                    },
                    h = a.middleware;
                  return h.resolveInlayHint
                    ? h.resolveInlayHint(s, o, u)
                    : u(s, o);
                }
              : void 0),
          [
            this.registerProvider(n, i),
            { provider: i, onDidChangeInlayHints: r },
          ]
        );
      }
      registerProvider(e, n) {
        return $m.languages.registerInlayHintsProvider(
          this._client.protocol2CodeConverter.asDocumentSelector(e),
          n
        );
      }
    };
  Mo.InlayHintsFeature = Gl;
});
var Um = x((Ao) => {
  "use strict";
  Object.defineProperty(Ao, "__esModule", { value: !0 });
  Ao.InlineCompletionItemFeature = void 0;
  var yw = require("vscode"),
    Xl = re(),
    Jl = ye(),
    vw = He(),
    Ql = class extends Jl.TextDocumentLanguageFeature {
      constructor(e) {
        super(e, Xl.InlineCompletionRequest.type);
      }
      fillClientCapabilities(e) {
        let n = (0, Jl.ensure)(
          (0, Jl.ensure)(e, "textDocument"),
          "inlineCompletion"
        );
        n.dynamicRegistration = !0;
      }
      initialize(e, n) {
        let r = this.getRegistrationOptions(n, e.inlineCompletionProvider);
        !r || this.register({ id: vw.generateUuid(), registerOptions: r });
      }
      registerLanguageProvider(e) {
        let n = e.documentSelector,
          r = {
            provideInlineCompletionItems: (i, s, o, a) => {
              let u = this._client,
                h = this._client.middleware,
                p = (v, m, R, y) =>
                  u
                    .sendRequest(
                      Xl.InlineCompletionRequest.type,
                      u.code2ProtocolConverter.asInlineCompletionParams(
                        v,
                        m,
                        R
                      ),
                      y
                    )
                    .then(
                      (P) =>
                        y.isCancellationRequested
                          ? null
                          : u.protocol2CodeConverter.asInlineCompletionResult(
                              P,
                              y
                            ),
                      (P) =>
                        u.handleFailedRequest(
                          Xl.InlineCompletionRequest.type,
                          y,
                          P,
                          null
                        )
                    );
              return h.provideInlineCompletionItems
                ? h.provideInlineCompletionItems(i, s, o, a, p)
                : p(i, s, o, a);
            },
          };
        return [
          yw.languages.registerInlineCompletionItemProvider(
            this._client.protocol2CodeConverter.asDocumentSelector(n),
            r
          ),
          r,
        ];
      }
    };
  Ao.InlineCompletionItemFeature = Ql;
});
var rd = x((dt) => {
  "use strict";
  Object.defineProperty(dt, "__esModule", { value: !0 });
  dt.ProposedFeatures =
    dt.BaseLanguageClient =
    dt.MessageTransports =
    dt.SuspendMode =
    dt.State =
    dt.CloseAction =
    dt.ErrorAction =
    dt.RevealOutputChannelOn =
      void 0;
  var Ee = require("vscode"),
    $ = re(),
    bw = vg(),
    _w = wg(),
    mn = Yt(),
    jo = Ks(),
    Wm = He(),
    ww = iu(),
    gn = ye(),
    Cw = Cu(),
    Km = Yg(),
    zm = em(),
    hi = tm(),
    Dw = nm(),
    Rw = rm(),
    Sw = im(),
    Tw = om(),
    Pw = am(),
    Ew = Vu(),
    kw = um(),
    qw = lm(),
    xw = dm(),
    Ow = hm(),
    Yl = pm(),
    Iw = mm(),
    Fw = ym(),
    Nw = bm(),
    Lw = _m(),
    Mw = wm(),
    Aw = Cm(),
    jw = Dm(),
    $w = Rm(),
    Hw = Tm(),
    Uw = Pm(),
    Ww = Em(),
    Kw = qm(),
    zw = xm(),
    Bw = Om(),
    pi = Nm(),
    Vw = Lm(),
    Gw = Mm(),
    Xw = jm(),
    Jw = Hm(),
    Qw = Um(),
    xr;
  (function (t) {
    (t[(t.Debug = 0)] = "Debug"),
      (t[(t.Info = 1)] = "Info"),
      (t[(t.Warn = 2)] = "Warn"),
      (t[(t.Error = 3)] = "Error"),
      (t[(t.Never = 4)] = "Never");
  })(xr || (dt.RevealOutputChannelOn = xr = {}));
  var Qi;
  (function (t) {
    (t[(t.Continue = 1)] = "Continue"), (t[(t.Shutdown = 2)] = "Shutdown");
  })(Qi || (dt.ErrorAction = Qi = {}));
  var pr;
  (function (t) {
    (t[(t.DoNotRestart = 1)] = "DoNotRestart"),
      (t[(t.Restart = 2)] = "Restart");
  })(pr || (dt.CloseAction = pr = {}));
  var Ji;
  (function (t) {
    (t[(t.Stopped = 1)] = "Stopped"),
      (t[(t.Starting = 3)] = "Starting"),
      (t[(t.Running = 2)] = "Running");
  })(Ji || (dt.State = Ji = {}));
  var Bm;
  (function (t) {
    (t.off = "off"), (t.on = "on");
  })(Bm || (dt.SuspendMode = Bm = {}));
  var Zl;
  (function (t) {
    function e(n) {
      return n == null
        ? !1
        : typeof n == "boolean" ||
          (typeof n == "object" &&
            n !== null &&
            mn.stringArray(n.enabledCommands))
        ? n
        : !1;
    }
    t.sanitizeIsTrusted = e;
  })(Zl || (Zl = {}));
  var ed = class {
      constructor(e, n) {
        (this.client = e), (this.maxRestartCount = n), (this.restarts = []);
      }
      error(e, n, r) {
        return r && r <= 3 ? { action: Qi.Continue } : { action: Qi.Shutdown };
      }
      closed() {
        return (
          this.restarts.push(Date.now()),
          this.restarts.length <= this.maxRestartCount
            ? { action: pr.Restart }
            : this.restarts[this.restarts.length - 1] - this.restarts[0] <=
              3 * 60 * 1e3
            ? {
                action: pr.DoNotRestart,
                message: `The ${this.client.name} server crashed ${
                  this.maxRestartCount + 1
                } times in the last 3 minutes. The server will not be restarted. See the output for more information.`,
              }
            : (this.restarts.shift(), { action: pr.Restart })
        );
      }
    },
    le;
  (function (t) {
    (t.Initial = "initial"),
      (t.Starting = "starting"),
      (t.StartFailed = "startFailed"),
      (t.Running = "running"),
      (t.Stopping = "stopping"),
      (t.Stopped = "stopped");
  })(le || (le = {}));
  var Vm;
  (function (t) {
    function e(n) {
      return n && $.MessageReader.is(n.reader) && $.MessageWriter.is(n.writer);
    }
    t.is = e;
  })(Vm || (dt.MessageTransports = Vm = {}));
  var Wn = class {
    constructor(e, n, r) {
      (this._traceFormat = $.TraceFormat.Text),
        (this._diagnosticQueue = new Map()),
        (this._diagnosticQueueState = { state: "idle" }),
        (this._features = []),
        (this._dynamicFeatures = new Map()),
        (this.workspaceEditLock = new jo.Semaphore(1)),
        (this._id = e),
        (this._name = n),
        (r = r || {});
      let i = { isTrusted: !1, supportHtml: !1 };
      r.markdown !== void 0 &&
        ((i.isTrusted = Zl.sanitizeIsTrusted(r.markdown.isTrusted)),
        (i.supportHtml = r.markdown.supportHtml === !0)),
        (this._clientOptions = {
          documentSelector: r.documentSelector ?? [],
          synchronize: r.synchronize ?? {},
          diagnosticCollectionName: r.diagnosticCollectionName,
          outputChannelName: r.outputChannelName ?? this._name,
          revealOutputChannelOn: r.revealOutputChannelOn ?? xr.Error,
          stdioEncoding: r.stdioEncoding ?? "utf8",
          initializationOptions: r.initializationOptions,
          initializationFailedHandler: r.initializationFailedHandler,
          progressOnInitialization: !!r.progressOnInitialization,
          errorHandler:
            r.errorHandler ??
            this.createDefaultErrorHandler(
              r.connectionOptions?.maxRestartCount
            ),
          middleware: r.middleware ?? {},
          uriConverters: r.uriConverters,
          workspaceFolder: r.workspaceFolder,
          connectionOptions: r.connectionOptions,
          markdown: i,
          diagnosticPullOptions: r.diagnosticPullOptions ?? {
            onChange: !0,
            onSave: !1,
          },
          notebookDocumentOptions: r.notebookDocumentOptions ?? {},
        }),
        (this._clientOptions.synchronize =
          this._clientOptions.synchronize || {}),
        (this._state = le.Initial),
        (this._ignoredRegistrations = new Set()),
        (this._listeners = []),
        (this._notificationHandlers = new Map()),
        (this._pendingNotificationHandlers = new Map()),
        (this._notificationDisposables = new Map()),
        (this._requestHandlers = new Map()),
        (this._pendingRequestHandlers = new Map()),
        (this._requestDisposables = new Map()),
        (this._progressHandlers = new Map()),
        (this._pendingProgressHandlers = new Map()),
        (this._progressDisposables = new Map()),
        (this._connection = void 0),
        (this._initializeResult = void 0),
        r.outputChannel
          ? ((this._outputChannel = r.outputChannel),
            (this._disposeOutputChannel = !1))
          : ((this._outputChannel = void 0), (this._disposeOutputChannel = !0)),
        (this._traceOutputChannel = r.traceOutputChannel),
        (this._diagnostics = void 0),
        (this._pendingOpenNotifications = new Set()),
        (this._pendingChangeSemaphore = new jo.Semaphore(1)),
        (this._pendingChangeDelayer = new jo.Delayer(250)),
        (this._fileEvents = []),
        (this._fileEventDelayer = new jo.Delayer(250)),
        (this._onStop = void 0),
        (this._telemetryEmitter = new $.Emitter()),
        (this._stateChangeEmitter = new $.Emitter()),
        (this._trace = $.Trace.Off),
        (this._tracer = {
          log: (s, o) => {
            mn.string(s) ? this.logTrace(s, o) : this.logObjectTrace(s);
          },
        }),
        (this._c2p = bw.createConverter(
          r.uriConverters ? r.uriConverters.code2Protocol : void 0
        )),
        (this._p2c = _w.createConverter(
          r.uriConverters ? r.uriConverters.protocol2Code : void 0,
          this._clientOptions.markdown.isTrusted,
          this._clientOptions.markdown.supportHtml
        )),
        (this._syncedDocuments = new Map()),
        this.registerBuiltinFeatures();
    }
    get name() {
      return this._name;
    }
    get middleware() {
      return this._clientOptions.middleware ?? Object.create(null);
    }
    get clientOptions() {
      return this._clientOptions;
    }
    get protocol2CodeConverter() {
      return this._p2c;
    }
    get code2ProtocolConverter() {
      return this._c2p;
    }
    get onTelemetry() {
      return this._telemetryEmitter.event;
    }
    get onDidChangeState() {
      return this._stateChangeEmitter.event;
    }
    get outputChannel() {
      return (
        this._outputChannel ||
          (this._outputChannel = Ee.window.createOutputChannel(
            this._clientOptions.outputChannelName
              ? this._clientOptions.outputChannelName
              : this._name
          )),
        this._outputChannel
      );
    }
    get traceOutputChannel() {
      return this._traceOutputChannel
        ? this._traceOutputChannel
        : this.outputChannel;
    }
    get diagnostics() {
      return this._diagnostics;
    }
    get state() {
      return this.getPublicState();
    }
    get $state() {
      return this._state;
    }
    set $state(e) {
      let n = this.getPublicState();
      this._state = e;
      let r = this.getPublicState();
      r !== n && this._stateChangeEmitter.fire({ oldState: n, newState: r });
    }
    getPublicState() {
      switch (this.$state) {
        case le.Starting:
          return Ji.Starting;
        case le.Running:
          return Ji.Running;
        default:
          return Ji.Stopped;
      }
    }
    get initializeResult() {
      return this._initializeResult;
    }
    async sendRequest(e, ...n) {
      if (
        this.$state === le.StartFailed ||
        this.$state === le.Stopping ||
        this.$state === le.Stopped
      )
        return Promise.reject(
          new $.ResponseError(
            $.ErrorCodes.ConnectionInactive,
            "Client is not running"
          )
        );
      let r = await this.$start();
      this._didChangeTextDocumentFeature.syncKind ===
        $.TextDocumentSyncKind.Full &&
        (await this.sendPendingFullTextDocumentChanges(r));
      let i = this._clientOptions.middleware?.sendRequest;
      if (i !== void 0) {
        let s, o;
        return (
          n.length === 1
            ? $.CancellationToken.is(n[0])
              ? (o = n[0])
              : (s = n[0])
            : n.length === 2 && ((s = n[0]), (o = n[1])),
          i(e, s, o, (a, u, h) => {
            let p = [];
            return (
              u !== void 0 && p.push(u),
              h !== void 0 && p.push(h),
              r.sendRequest(a, ...p)
            );
          })
        );
      } else return r.sendRequest(e, ...n);
    }
    onRequest(e, n) {
      let r = typeof e == "string" ? e : e.method;
      this._requestHandlers.set(r, n);
      let i = this.activeConnection(),
        s;
      return (
        i !== void 0
          ? (this._requestDisposables.set(r, i.onRequest(e, n)),
            (s = {
              dispose: () => {
                let o = this._requestDisposables.get(r);
                o !== void 0 &&
                  (o.dispose(), this._requestDisposables.delete(r));
              },
            }))
          : (this._pendingRequestHandlers.set(r, n),
            (s = {
              dispose: () => {
                this._pendingRequestHandlers.delete(r);
                let o = this._requestDisposables.get(r);
                o !== void 0 &&
                  (o.dispose(), this._requestDisposables.delete(r));
              },
            })),
        {
          dispose: () => {
            this._requestHandlers.delete(r), s.dispose();
          },
        }
      );
    }
    async sendNotification(e, n) {
      if (
        this.$state === le.StartFailed ||
        this.$state === le.Stopping ||
        this.$state === le.Stopped
      )
        return Promise.reject(
          new $.ResponseError(
            $.ErrorCodes.ConnectionInactive,
            "Client is not running"
          )
        );
      let r =
          this._didChangeTextDocumentFeature.syncKind ===
          $.TextDocumentSyncKind.Full,
        i;
      r &&
        typeof e != "string" &&
        e.method === $.DidOpenTextDocumentNotification.method &&
        ((i = n?.textDocument.uri), this._pendingOpenNotifications.add(i));
      let s = await this.$start();
      r && (await this.sendPendingFullTextDocumentChanges(s)),
        i !== void 0 && this._pendingOpenNotifications.delete(i);
      let o = this._clientOptions.middleware?.sendNotification;
      return o ? o(e, s.sendNotification.bind(s), n) : s.sendNotification(e, n);
    }
    onNotification(e, n) {
      let r = typeof e == "string" ? e : e.method;
      this._notificationHandlers.set(r, n);
      let i = this.activeConnection(),
        s;
      return (
        i !== void 0
          ? (this._notificationDisposables.set(r, i.onNotification(e, n)),
            (s = {
              dispose: () => {
                let o = this._notificationDisposables.get(r);
                o !== void 0 &&
                  (o.dispose(), this._notificationDisposables.delete(r));
              },
            }))
          : (this._pendingNotificationHandlers.set(r, n),
            (s = {
              dispose: () => {
                this._pendingNotificationHandlers.delete(r);
                let o = this._notificationDisposables.get(r);
                o !== void 0 &&
                  (o.dispose(), this._notificationDisposables.delete(r));
              },
            })),
        {
          dispose: () => {
            this._notificationHandlers.delete(r), s.dispose();
          },
        }
      );
    }
    async sendProgress(e, n, r) {
      if (
        this.$state === le.StartFailed ||
        this.$state === le.Stopping ||
        this.$state === le.Stopped
      )
        return Promise.reject(
          new $.ResponseError(
            $.ErrorCodes.ConnectionInactive,
            "Client is not running"
          )
        );
      try {
        return (await this.$start()).sendProgress(e, n, r);
      } catch (i) {
        throw (this.error(`Sending progress for token ${n} failed.`, i), i);
      }
    }
    onProgress(e, n, r) {
      this._progressHandlers.set(n, { type: e, handler: r });
      let i = this.activeConnection(),
        s,
        o = this._clientOptions.middleware?.handleWorkDoneProgress,
        a =
          $.WorkDoneProgress.is(e) && o !== void 0
            ? (u) => {
                o(n, u, () => r(u));
              }
            : r;
      return (
        i !== void 0
          ? (this._progressDisposables.set(n, i.onProgress(e, n, a)),
            (s = {
              dispose: () => {
                let u = this._progressDisposables.get(n);
                u !== void 0 &&
                  (u.dispose(), this._progressDisposables.delete(n));
              },
            }))
          : (this._pendingProgressHandlers.set(n, { type: e, handler: r }),
            (s = {
              dispose: () => {
                this._pendingProgressHandlers.delete(n);
                let u = this._progressDisposables.get(n);
                u !== void 0 &&
                  (u.dispose(), this._progressDisposables.delete(n));
              },
            })),
        {
          dispose: () => {
            this._progressHandlers.delete(n), s.dispose();
          },
        }
      );
    }
    createDefaultErrorHandler(e) {
      if (e !== void 0 && e < 0)
        throw new Error(`Invalid maxRestartCount: ${e}`);
      return new ed(this, e ?? 4);
    }
    async setTrace(e) {
      this._trace = e;
      let n = this.activeConnection();
      n !== void 0 &&
        (await n.trace(this._trace, this._tracer, {
          sendNotification: !1,
          traceFormat: this._traceFormat,
        }));
    }
    data2String(e) {
      if (e instanceof $.ResponseError) {
        let n = e;
        return `  Message: ${n.message}
  Code: ${n.code} ${
          n.data
            ? `
` + n.data.toString()
            : ""
        }`;
      }
      return e instanceof Error
        ? mn.string(e.stack)
          ? e.stack
          : e.message
        : mn.string(e)
        ? e
        : e.toString();
    }
    debug(e, n, r = !0) {
      this.logOutputMessage($.MessageType.Debug, xr.Debug, "Debug", e, n, r);
    }
    info(e, n, r = !0) {
      this.logOutputMessage($.MessageType.Info, xr.Info, "Info", e, n, r);
    }
    warn(e, n, r = !0) {
      this.logOutputMessage($.MessageType.Warning, xr.Warn, "Warn", e, n, r);
    }
    error(e, n, r = !0) {
      this.logOutputMessage($.MessageType.Error, xr.Error, "Error", e, n, r);
    }
    logOutputMessage(e, n, r, i, s, o) {
      this.outputChannel.appendLine(
        `[${r.padEnd(5)} - ${new Date().toLocaleTimeString()}] ${i}`
      ),
        s != null && this.outputChannel.appendLine(this.data2String(s)),
        (o === "force" ||
          (o && this._clientOptions.revealOutputChannelOn <= n)) &&
          this.showNotificationMessage(e, i);
    }
    showNotificationMessage(e, n) {
      (n = n ?? "A request has failed. See the output for more information."),
        (e === $.MessageType.Error
          ? Ee.window.showErrorMessage
          : e === $.MessageType.Warning
          ? Ee.window.showWarningMessage
          : Ee.window.showInformationMessage)(n, "Go to output").then((i) => {
          i !== void 0 && this.outputChannel.show(!0);
        });
    }
    logTrace(e, n) {
      this.traceOutputChannel.appendLine(
        `[Trace - ${new Date().toLocaleTimeString()}] ${e}`
      ),
        n && this.traceOutputChannel.appendLine(this.data2String(n));
    }
    logObjectTrace(e) {
      e.isLSPMessage && e.type
        ? this.traceOutputChannel.append(
            `[LSP   - ${new Date().toLocaleTimeString()}] `
          )
        : this.traceOutputChannel.append(
            `[Trace - ${new Date().toLocaleTimeString()}] `
          ),
        e && this.traceOutputChannel.appendLine(`${JSON.stringify(e)}`);
    }
    needsStart() {
      return (
        this.$state === le.Initial ||
        this.$state === le.Stopping ||
        this.$state === le.Stopped
      );
    }
    needsStop() {
      return this.$state === le.Starting || this.$state === le.Running;
    }
    activeConnection() {
      return this.$state === le.Running && this._connection !== void 0
        ? this._connection
        : void 0;
    }
    isRunning() {
      return this.$state === le.Running;
    }
    async start() {
      if (this._disposed === "disposing" || this._disposed === "disposed")
        throw new Error("Client got disposed and can't be restarted.");
      if (this.$state === le.Stopping)
        throw new Error(
          "Client is currently stopping. Can only restart a full stopped client"
        );
      if (this._onStart !== void 0) return this._onStart;
      let [e, n, r] = this.createOnStartPromise();
      (this._onStart = e),
        this._diagnostics === void 0 &&
          (this._diagnostics = this._clientOptions.diagnosticCollectionName
            ? Ee.languages.createDiagnosticCollection(
                this._clientOptions.diagnosticCollectionName
              )
            : Ee.languages.createDiagnosticCollection());
      for (let [i, s] of this._notificationHandlers)
        this._pendingNotificationHandlers.has(i) ||
          this._pendingNotificationHandlers.set(i, s);
      for (let [i, s] of this._requestHandlers)
        this._pendingRequestHandlers.has(i) ||
          this._pendingRequestHandlers.set(i, s);
      for (let [i, s] of this._progressHandlers)
        this._pendingProgressHandlers.has(i) ||
          this._pendingProgressHandlers.set(i, s);
      this.$state = le.Starting;
      try {
        let i = await this.createConnection();
        i.onNotification($.LogMessageNotification.type, (s) => {
          switch (s.type) {
            case $.MessageType.Error:
              this.error(s.message, void 0, !1);
              break;
            case $.MessageType.Warning:
              this.warn(s.message, void 0, !1);
              break;
            case $.MessageType.Info:
              this.info(s.message, void 0, !1);
              break;
            case $.MessageType.Debug:
              this.debug(s.message, void 0, !1);
              break;
            default:
              this.outputChannel.appendLine(s.message);
          }
        }),
          i.onNotification($.ShowMessageNotification.type, (s) => {
            switch (s.type) {
              case $.MessageType.Error:
                Ee.window.showErrorMessage(s.message);
                break;
              case $.MessageType.Warning:
                Ee.window.showWarningMessage(s.message);
                break;
              case $.MessageType.Info:
                Ee.window.showInformationMessage(s.message);
                break;
              default:
                Ee.window.showInformationMessage(s.message);
            }
          }),
          i.onRequest($.ShowMessageRequest.type, (s) => {
            let o;
            switch (s.type) {
              case $.MessageType.Error:
                o = Ee.window.showErrorMessage;
                break;
              case $.MessageType.Warning:
                o = Ee.window.showWarningMessage;
                break;
              case $.MessageType.Info:
                o = Ee.window.showInformationMessage;
                break;
              default:
                o = Ee.window.showInformationMessage;
            }
            let a = s.actions || [];
            return o(s.message, ...a);
          }),
          i.onNotification($.TelemetryEventNotification.type, (s) => {
            this._telemetryEmitter.fire(s);
          }),
          i.onRequest($.ShowDocumentRequest.type, async (s) => {
            let o = async (u) => {
                let h = this.protocol2CodeConverter.asUri(u.uri);
                try {
                  if (u.external === !0)
                    return { success: await Ee.env.openExternal(h) };
                  {
                    let p = {};
                    return (
                      u.selection !== void 0 &&
                        (p.selection = this.protocol2CodeConverter.asRange(
                          u.selection
                        )),
                      u.takeFocus === void 0 || u.takeFocus === !1
                        ? (p.preserveFocus = !0)
                        : u.takeFocus === !0 && (p.preserveFocus = !1),
                      await Ee.window.showTextDocument(h, p),
                      { success: !0 }
                    );
                  }
                } catch {
                  return { success: !1 };
                }
              },
              a = this._clientOptions.middleware.window?.showDocument;
            return a !== void 0 ? a(s, o) : o(s);
          }),
          i.listen(),
          await this.initialize(i),
          n();
      } catch (i) {
        (this.$state = le.StartFailed),
          this.error(
            `${this._name} client: couldn't create connection to server.`,
            i,
            "force"
          ),
          r(i);
      }
      return this._onStart;
    }
    createOnStartPromise() {
      let e, n;
      return [
        new Promise((i, s) => {
          (e = i), (n = s);
        }),
        e,
        n,
      ];
    }
    async initialize(e) {
      this.refreshTrace(e, !1);
      let n = this._clientOptions.initializationOptions,
        [r, i] =
          this._clientOptions.workspaceFolder !== void 0
            ? [
                this._clientOptions.workspaceFolder.uri.fsPath,
                [
                  {
                    uri: this._c2p.asUri(
                      this._clientOptions.workspaceFolder.uri
                    ),
                    name: this._clientOptions.workspaceFolder.name,
                  },
                ],
              ]
            : [this._clientGetRootPath(), null],
        s = {
          processId: null,
          clientInfo: { name: Ee.env.appName, version: Ee.version },
          locale: this.getLocale(),
          rootPath: r || null,
          rootUri: r ? this._c2p.asUri(Ee.Uri.file(r)) : null,
          capabilities: this.computeClientCapabilities(),
          initializationOptions: mn.func(n) ? n() : n,
          trace: $.Trace.toString(this._trace),
          workspaceFolders: i,
        };
      if (
        (this.fillInitializeParams(s),
        this._clientOptions.progressOnInitialization)
      ) {
        let o = Wm.generateUuid(),
          a = new ww.ProgressPart(e, o);
        s.workDoneToken = o;
        try {
          let u = await this.doInitialize(e, s);
          return a.done(), u;
        } catch (u) {
          throw (a.cancel(), u);
        }
      } else return this.doInitialize(e, s);
    }
    async doInitialize(e, n) {
      try {
        let r = await e.initialize(n);
        if (
          r.capabilities.positionEncoding !== void 0 &&
          r.capabilities.positionEncoding !== $.PositionEncodingKind.UTF16
        )
          throw new Error(
            `Unsupported position encoding (${r.capabilities.positionEncoding}) received from server ${this.name}`
          );
        (this._initializeResult = r), (this.$state = le.Running);
        let i;
        mn.number(r.capabilities.textDocumentSync)
          ? r.capabilities.textDocumentSync === $.TextDocumentSyncKind.None
            ? (i = {
                openClose: !1,
                change: $.TextDocumentSyncKind.None,
                save: void 0,
              })
            : (i = {
                openClose: !0,
                change: r.capabilities.textDocumentSync,
                save: { includeText: !1 },
              })
          : r.capabilities.textDocumentSync !== void 0 &&
            r.capabilities.textDocumentSync !== null &&
            (i = r.capabilities.textDocumentSync),
          (this._capabilities = Object.assign({}, r.capabilities, {
            resolvedTextDocumentSync: i,
          })),
          e.onNotification($.PublishDiagnosticsNotification.type, (s) =>
            this.handleDiagnostics(s)
          ),
          e.onRequest($.RegistrationRequest.type, (s) =>
            this.handleRegistrationRequest(s)
          ),
          e.onRequest("client/registerFeature", (s) =>
            this.handleRegistrationRequest(s)
          ),
          e.onRequest($.UnregistrationRequest.type, (s) =>
            this.handleUnregistrationRequest(s)
          ),
          e.onRequest("client/unregisterFeature", (s) =>
            this.handleUnregistrationRequest(s)
          ),
          e.onRequest($.ApplyWorkspaceEditRequest.type, (s) =>
            this.handleApplyWorkspaceEdit(s)
          );
        for (let [s, o] of this._pendingNotificationHandlers)
          this._notificationDisposables.set(s, e.onNotification(s, o));
        this._pendingNotificationHandlers.clear();
        for (let [s, o] of this._pendingRequestHandlers)
          this._requestDisposables.set(s, e.onRequest(s, o));
        this._pendingRequestHandlers.clear();
        for (let [s, o] of this._pendingProgressHandlers)
          this._progressDisposables.set(s, e.onProgress(o.type, s, o.handler));
        return (
          this._pendingProgressHandlers.clear(),
          await e.sendNotification($.InitializedNotification.type, {}),
          this.hookFileEvents(e),
          this.hookConfigurationChanged(e),
          this.initializeFeatures(e),
          r
        );
      } catch (r) {
        throw (
          (this._clientOptions.initializationFailedHandler
            ? this._clientOptions.initializationFailedHandler(r)
              ? this.initialize(e)
              : this.stop()
            : r instanceof $.ResponseError && r.data && r.data.retry
            ? Ee.window
                .showErrorMessage(r.message, { title: "Retry", id: "retry" })
                .then((i) => {
                  i && i.id === "retry" ? this.initialize(e) : this.stop();
                })
            : (r && r.message && Ee.window.showErrorMessage(r.message),
              this.error("Server initialization failed.", r),
              this.stop()),
          r)
        );
      }
    }
    _clientGetRootPath() {
      let e = Ee.workspace.workspaceFolders;
      if (!e || e.length === 0) return;
      let n = e[0];
      if (n.uri.scheme === "file") return n.uri.fsPath;
    }
    stop(e = 2e3) {
      return this.shutdown("stop", e);
    }
    dispose(e = 2e3) {
      try {
        return (this._disposed = "disposing"), this.stop(e);
      } finally {
        this._disposed = "disposed";
      }
    }
    async shutdown(e, n) {
      if (this.$state === le.Stopped || this.$state === le.Initial) return;
      if (this.$state === le.Stopping) {
        if (this._onStop !== void 0) return this._onStop;
        throw new Error("Client is stopping but no stop promise available.");
      }
      let r = this.activeConnection();
      if (r === void 0 || this.$state !== le.Running)
        throw new Error(
          `Client is not running and can't be stopped. It's current state is: ${this.$state}`
        );
      (this._initializeResult = void 0),
        (this.$state = le.Stopping),
        this.cleanUp(e);
      let i = new Promise((o) => {
          (0, $.RAL)().timer.setTimeout(o, n);
        }),
        s = (async (o) => (await o.shutdown(), await o.exit(), o))(r);
      return (this._onStop = Promise.race([i, s])
        .then(
          (o) => {
            if (o !== void 0) o.end(), o.dispose();
            else
              throw (
                (this.error("Stopping server timed out", void 0, !1),
                new Error("Stopping the server timed out"))
              );
          },
          (o) => {
            throw (this.error("Stopping server failed", o, !1), o);
          }
        )
        .finally(() => {
          (this.$state = le.Stopped),
            e === "stop" && this.cleanUpChannel(),
            (this._onStart = void 0),
            (this._onStop = void 0),
            (this._connection = void 0),
            this._ignoredRegistrations.clear();
        }));
    }
    cleanUp(e) {
      (this._fileEvents = []), this._fileEventDelayer.cancel();
      let n = this._listeners.splice(0, this._listeners.length);
      for (let r of n) r.dispose();
      this._syncedDocuments && this._syncedDocuments.clear();
      for (let r of Array.from(this._features.entries())
        .map((i) => i[1])
        .reverse())
        r.clear();
      e === "stop" &&
        this._diagnostics !== void 0 &&
        (this._diagnostics.dispose(), (this._diagnostics = void 0)),
        this._idleInterval !== void 0 &&
          (this._idleInterval.dispose(), (this._idleInterval = void 0));
    }
    cleanUpChannel() {
      this._outputChannel !== void 0 &&
        this._disposeOutputChannel &&
        (this._outputChannel.dispose(), (this._outputChannel = void 0));
    }
    notifyFileEvent(e) {
      let n = this;
      async function r(s) {
        return (
          n._fileEvents.push(s),
          n._fileEventDelayer.trigger(async () => {
            await n.sendNotification($.DidChangeWatchedFilesNotification.type, {
              changes: n._fileEvents,
            }),
              (n._fileEvents = []);
          })
        );
      }
      let i = this.clientOptions.middleware?.workspace;
      (i?.didChangeWatchedFile ? i.didChangeWatchedFile(e, r) : r(e)).catch(
        (s) => {
          n.error("Notify file events failed.", s);
        }
      );
    }
    async sendPendingFullTextDocumentChanges(e) {
      return this._pendingChangeSemaphore.lock(async () => {
        try {
          let n = this._didChangeTextDocumentFeature.getPendingDocumentChanges(
            this._pendingOpenNotifications
          );
          if (n.length === 0) return;
          for (let r of n) {
            let i = this.code2ProtocolConverter.asChangeTextDocumentParams(r);
            await e.sendNotification(
              $.DidChangeTextDocumentNotification.type,
              i
            ),
              this._didChangeTextDocumentFeature.notificationSent(
                r,
                $.DidChangeTextDocumentNotification.type,
                i
              );
          }
        } catch (n) {
          throw (this.error("Sending pending changes failed", n, !1), n);
        }
      });
    }
    triggerPendingChangeDelivery() {
      this._pendingChangeDelayer
        .trigger(async () => {
          let e = this.activeConnection();
          if (e === void 0) {
            this.triggerPendingChangeDelivery();
            return;
          }
          await this.sendPendingFullTextDocumentChanges(e);
        })
        .catch((e) => this.error("Delivering pending changes failed", e, !1));
    }
    handleDiagnostics(e) {
      if (!this._diagnostics) return;
      let n = e.uri;
      this._diagnosticQueueState.state === "busy" &&
        this._diagnosticQueueState.document === n &&
        this._diagnosticQueueState.tokenSource.cancel(),
        this._diagnosticQueue.set(e.uri, e.diagnostics),
        this.triggerDiagnosticQueue();
    }
    triggerDiagnosticQueue() {
      (0, $.RAL)().timer.setImmediate(() => {
        this.workDiagnosticQueue();
      });
    }
    workDiagnosticQueue() {
      if (this._diagnosticQueueState.state === "busy") return;
      let e = this._diagnosticQueue.entries().next();
      if (e.done === !0) return;
      let [n, r] = e.value;
      this._diagnosticQueue.delete(n);
      let i = new Ee.CancellationTokenSource();
      (this._diagnosticQueueState = {
        state: "busy",
        document: n,
        tokenSource: i,
      }),
        this._p2c
          .asDiagnostics(r, i.token)
          .then((s) => {
            if (!i.token.isCancellationRequested) {
              let o = this._p2c.asUri(n),
                a = this.clientOptions.middleware;
              a.handleDiagnostics
                ? a.handleDiagnostics(o, s, (u, h) => this.setDiagnostics(u, h))
                : this.setDiagnostics(o, s);
            }
          })
          .finally(() => {
            (this._diagnosticQueueState = { state: "idle" }),
              this.triggerDiagnosticQueue();
          });
    }
    setDiagnostics(e, n) {
      !this._diagnostics || this._diagnostics.set(e, n);
    }
    getLocale() {
      return Ee.env.language;
    }
    async $start() {
      if (this.$state === le.StartFailed)
        throw new Error("Previous start failed. Can't restart server.");
      await this.start();
      let e = this.activeConnection();
      if (e === void 0) throw new Error("Starting server failed");
      return e;
    }
    async createConnection() {
      let e = (i, s, o) => {
          this.handleConnectionError(i, s, o).catch((a) =>
            this.error("Handling connection error failed", a)
          );
        },
        n = () => {
          this.handleConnectionClosed().catch((i) =>
            this.error("Handling connection close failed", i)
          );
        },
        r = await this.createMessageTransports(
          this._clientOptions.stdioEncoding || "utf8"
        );
      return (
        (this._connection = Yw(
          r.reader,
          r.writer,
          e,
          n,
          this._clientOptions.connectionOptions
        )),
        this._connection
      );
    }
    async handleConnectionClosed() {
      if (this.$state === le.Stopped) return;
      try {
        this._connection !== void 0 && this._connection.dispose();
      } catch {}
      let e = { action: pr.DoNotRestart };
      if (this.$state !== le.Stopping)
        try {
          e = await this._clientOptions.errorHandler.closed();
        } catch {}
      (this._connection = void 0),
        e.action === pr.DoNotRestart
          ? (this.error(
              e.message ??
                "Connection to server got closed. Server will not be restarted.",
              void 0,
              e.handled === !0 ? !1 : "force"
            ),
            this.cleanUp("stop"),
            this.$state === le.Starting
              ? (this.$state = le.StartFailed)
              : (this.$state = le.Stopped),
            (this._onStop = Promise.resolve()),
            (this._onStart = void 0))
          : e.action === pr.Restart &&
            (this.info(
              e.message ??
                "Connection to server got closed. Server will restart.",
              !e.handled
            ),
            this.cleanUp("restart"),
            (this.$state = le.Initial),
            (this._onStop = Promise.resolve()),
            (this._onStart = void 0),
            this.start().catch((n) =>
              this.error("Restarting server failed", n, "force")
            ));
    }
    async handleConnectionError(e, n, r) {
      let i = await this._clientOptions.errorHandler.error(e, n, r);
      i.action === Qi.Shutdown
        ? (this.error(
            i.message ??
              `Client ${this._name}: connection to server is erroring.
${e.message}
Shutting down server.`,
            void 0,
            i.handled === !0 ? !1 : "force"
          ),
          this.stop().catch((s) => {
            this.error("Stopping server failed", s, !1);
          }))
        : this.error(
            i.message ??
              `Client ${this._name}: connection to server is erroring.
${e.message}`,
            void 0,
            i.handled === !0 ? !1 : "force"
          );
    }
    hookConfigurationChanged(e) {
      this._listeners.push(
        Ee.workspace.onDidChangeConfiguration(() => {
          this.refreshTrace(e, !0);
        })
      );
    }
    refreshTrace(e, n = !1) {
      let r = Ee.workspace.getConfiguration(this._id),
        i = $.Trace.Off,
        s = $.TraceFormat.Text;
      if (r) {
        let o = r.get("trace.server", "off");
        typeof o == "string"
          ? (i = $.Trace.fromString(o))
          : ((i = $.Trace.fromString(r.get("trace.server.verbosity", "off"))),
            (s = $.TraceFormat.fromString(
              r.get("trace.server.format", "text")
            )));
      }
      (this._trace = i),
        (this._traceFormat = s),
        e
          .trace(this._trace, this._tracer, {
            sendNotification: n,
            traceFormat: this._traceFormat,
          })
          .catch((o) => {
            this.error("Updating trace failed with error", o, !1);
          });
    }
    hookFileEvents(e) {
      let n = this._clientOptions.synchronize.fileEvents;
      if (!n) return;
      let r;
      mn.array(n) ? (r = n) : (r = [n]),
        r &&
          this._dynamicFeatures
            .get($.DidChangeWatchedFilesNotification.type.method)
            .registerRaw(Wm.generateUuid(), r);
    }
    registerFeatures(e) {
      for (let n of e) this.registerFeature(n);
    }
    registerFeature(e) {
      if ((this._features.push(e), gn.DynamicFeature.is(e))) {
        let n = e.registrationType;
        this._dynamicFeatures.set(n.method, e);
      }
    }
    getFeature(e) {
      return this._dynamicFeatures.get(e);
    }
    hasDedicatedTextSynchronizationFeature(e) {
      let n = this.getFeature($.NotebookDocumentSyncRegistrationType.method);
      return n === void 0 || !(n instanceof Km.NotebookDocumentSyncFeature)
        ? !1
        : n.handles(e);
    }
    registerBuiltinFeatures() {
      let e = new Map();
      this.registerFeature(new zm.ConfigurationFeature(this)),
        this.registerFeature(
          new hi.DidOpenTextDocumentFeature(this, this._syncedDocuments)
        ),
        (this._didChangeTextDocumentFeature =
          new hi.DidChangeTextDocumentFeature(this, e)),
        this._didChangeTextDocumentFeature.onPendingChangeAdded(() => {
          this.triggerPendingChangeDelivery();
        }),
        this.registerFeature(this._didChangeTextDocumentFeature),
        this.registerFeature(new hi.WillSaveFeature(this)),
        this.registerFeature(new hi.WillSaveWaitUntilFeature(this)),
        this.registerFeature(new hi.DidSaveTextDocumentFeature(this)),
        this.registerFeature(
          new hi.DidCloseTextDocumentFeature(this, this._syncedDocuments, e)
        ),
        this.registerFeature(
          new Lw.FileSystemWatcherFeature(this, (n) => this.notifyFileEvent(n))
        ),
        this.registerFeature(new Dw.CompletionItemFeature(this)),
        this.registerFeature(new Rw.HoverFeature(this)),
        this.registerFeature(new Tw.SignatureHelpFeature(this)),
        this.registerFeature(new Sw.DefinitionFeature(this)),
        this.registerFeature(new qw.ReferencesFeature(this)),
        this.registerFeature(new Pw.DocumentHighlightFeature(this)),
        this.registerFeature(new Ew.DocumentSymbolFeature(this)),
        this.registerFeature(new kw.WorkspaceSymbolFeature(this)),
        this.registerFeature(new xw.CodeActionFeature(this)),
        this.registerFeature(new Ow.CodeLensFeature(this)),
        this.registerFeature(new Yl.DocumentFormattingFeature(this)),
        this.registerFeature(new Yl.DocumentRangeFormattingFeature(this)),
        this.registerFeature(new Yl.DocumentOnTypeFormattingFeature(this)),
        this.registerFeature(new Iw.RenameFeature(this)),
        this.registerFeature(new Fw.DocumentLinkFeature(this)),
        this.registerFeature(new Nw.ExecuteCommandFeature(this)),
        this.registerFeature(new zm.SyncConfigurationFeature(this)),
        this.registerFeature(new jw.TypeDefinitionFeature(this)),
        this.registerFeature(new Aw.ImplementationFeature(this)),
        this.registerFeature(new Mw.ColorProviderFeature(this)),
        this.clientOptions.workspaceFolder === void 0 &&
          this.registerFeature(new $w.WorkspaceFoldersFeature(this)),
        this.registerFeature(new Hw.FoldingRangeFeature(this)),
        this.registerFeature(new Uw.DeclarationFeature(this)),
        this.registerFeature(new Ww.SelectionRangeFeature(this)),
        this.registerFeature(new Kw.ProgressFeature(this)),
        this.registerFeature(new zw.CallHierarchyFeature(this)),
        this.registerFeature(new Bw.SemanticTokensFeature(this)),
        this.registerFeature(new Vw.LinkedEditingFeature(this)),
        this.registerFeature(new pi.DidCreateFilesFeature(this)),
        this.registerFeature(new pi.DidRenameFilesFeature(this)),
        this.registerFeature(new pi.DidDeleteFilesFeature(this)),
        this.registerFeature(new pi.WillCreateFilesFeature(this)),
        this.registerFeature(new pi.WillRenameFilesFeature(this)),
        this.registerFeature(new pi.WillDeleteFilesFeature(this)),
        this.registerFeature(new Gw.TypeHierarchyFeature(this)),
        this.registerFeature(new Xw.InlineValueFeature(this)),
        this.registerFeature(new Jw.InlayHintsFeature(this)),
        this.registerFeature(new Cw.DiagnosticFeature(this)),
        this.registerFeature(new Km.NotebookDocumentSyncFeature(this));
    }
    registerProposedFeatures() {
      this.registerFeatures(nd.createAll(this));
    }
    fillInitializeParams(e) {
      for (let n of this._features)
        mn.func(n.fillInitializeParams) && n.fillInitializeParams(e);
    }
    computeClientCapabilities() {
      let e = {};
      (0, gn.ensure)(e, "workspace").applyEdit = !0;
      let n = (0, gn.ensure)((0, gn.ensure)(e, "workspace"), "workspaceEdit");
      (n.documentChanges = !0),
        (n.resourceOperations = [
          $.ResourceOperationKind.Create,
          $.ResourceOperationKind.Rename,
          $.ResourceOperationKind.Delete,
        ]),
        (n.failureHandling = $.FailureHandlingKind.TextOnlyTransactional),
        (n.normalizesLineEndings = !0),
        (n.changeAnnotationSupport = { groupsOnLabel: !0 });
      let r = (0, gn.ensure)(
        (0, gn.ensure)(e, "textDocument"),
        "publishDiagnostics"
      );
      (r.relatedInformation = !0),
        (r.versionSupport = !1),
        (r.tagSupport = {
          valueSet: [$.DiagnosticTag.Unnecessary, $.DiagnosticTag.Deprecated],
        }),
        (r.codeDescriptionSupport = !0),
        (r.dataSupport = !0);
      let i = (0, gn.ensure)(e, "window"),
        s = (0, gn.ensure)(i, "showMessage");
      s.messageActionItem = { additionalPropertiesSupport: !0 };
      let o = (0, gn.ensure)(i, "showDocument");
      o.support = !0;
      let a = (0, gn.ensure)(e, "general");
      (a.staleRequestSupport = {
        cancel: !0,
        retryOnContentModified: Array.from(
          Wn.RequestsToCancelOnContentModified
        ),
      }),
        (a.regularExpressions = { engine: "ECMAScript", version: "ES2020" }),
        (a.markdown = { parser: "marked", version: "1.1.0" }),
        (a.positionEncodings = ["utf-16"]),
        this._clientOptions.markdown.supportHtml &&
          (a.markdown.allowedTags = [
            "ul",
            "li",
            "p",
            "code",
            "blockquote",
            "ol",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "hr",
            "em",
            "pre",
            "table",
            "thead",
            "tbody",
            "tr",
            "th",
            "td",
            "div",
            "del",
            "a",
            "strong",
            "br",
            "img",
            "span",
          ]);
      for (let u of this._features) u.fillClientCapabilities(e);
      return e;
    }
    initializeFeatures(e) {
      let n = this._clientOptions.documentSelector;
      for (let r of this._features)
        mn.func(r.preInitialize) && r.preInitialize(this._capabilities, n);
      for (let r of this._features) r.initialize(this._capabilities, n);
    }
    async handleRegistrationRequest(e) {
      let n = this.clientOptions.middleware?.handleRegisterCapability;
      return n
        ? n(e, (r) => this.doRegisterCapability(r))
        : this.doRegisterCapability(e);
    }
    async doRegisterCapability(e) {
      if (!this.isRunning()) {
        for (let n of e.registrations) this._ignoredRegistrations.add(n.id);
        return;
      }
      for (let n of e.registrations) {
        let r = this._dynamicFeatures.get(n.method);
        if (r === void 0)
          return Promise.reject(
            new Error(
              `No feature implementation for ${n.method} found. Registration failed.`
            )
          );
        let i = n.registerOptions ?? {};
        i.documentSelector =
          i.documentSelector ?? this._clientOptions.documentSelector;
        let s = { id: n.id, registerOptions: i };
        try {
          r.register(s);
        } catch (o) {
          return Promise.reject(o);
        }
      }
    }
    async handleUnregistrationRequest(e) {
      let n = this.clientOptions.middleware?.handleUnregisterCapability;
      return n
        ? n(e, (r) => this.doUnregisterCapability(r))
        : this.doUnregisterCapability(e);
    }
    async doUnregisterCapability(e) {
      for (let n of e.unregisterations) {
        if (this._ignoredRegistrations.has(n.id)) continue;
        let r = this._dynamicFeatures.get(n.method);
        if (!r)
          return Promise.reject(
            new Error(
              `No feature implementation for ${n.method} found. Unregistration failed.`
            )
          );
        r.unregister(n.id);
      }
    }
    async handleApplyWorkspaceEdit(e) {
      let n = e.edit,
        r = await this.workspaceEditLock.lock(() =>
          this._p2c.asWorkspaceEdit(n)
        ),
        i = new Map();
      Ee.workspace.textDocuments.forEach((o) => i.set(o.uri.toString(), o));
      let s = !1;
      if (n.documentChanges) {
        for (let o of n.documentChanges)
          if (
            $.TextDocumentEdit.is(o) &&
            o.textDocument.version &&
            o.textDocument.version >= 0
          ) {
            let a = this._p2c.asUri(o.textDocument.uri).toString(),
              u = i.get(a);
            if (u && u.version !== o.textDocument.version) {
              s = !0;
              break;
            }
          }
      }
      return s
        ? Promise.resolve({ applied: !1 })
        : mn.asPromise(Ee.workspace.applyEdit(r).then((o) => ({ applied: o })));
    }
    handleFailedRequest(e, n, r, i, s = !0) {
      if (r instanceof $.ResponseError) {
        if (
          r.code === $.ErrorCodes.PendingResponseRejected ||
          r.code === $.ErrorCodes.ConnectionInactive
        )
          return i;
        if (
          r.code === $.LSPErrorCodes.RequestCancelled ||
          r.code === $.LSPErrorCodes.ServerCancelled
        ) {
          if (n !== void 0 && n.isCancellationRequested) return i;
          throw r.data !== void 0
            ? new gn.LSPCancellationError(r.data)
            : new Ee.CancellationError();
        } else if (r.code === $.LSPErrorCodes.ContentModified) {
          if (
            Wn.RequestsToCancelOnContentModified.has(e.method) ||
            Wn.CancellableResolveCalls.has(e.method)
          )
            throw new Ee.CancellationError();
          return i;
        }
      }
      throw (this.error(`Request ${e.method} failed.`, r, s), r);
    }
  };
  dt.BaseLanguageClient = Wn;
  Wn.RequestsToCancelOnContentModified = new Set([
    $.SemanticTokensRequest.method,
    $.SemanticTokensRangeRequest.method,
    $.SemanticTokensDeltaRequest.method,
  ]);
  Wn.CancellableResolveCalls = new Set([
    $.CompletionResolveRequest.method,
    $.CodeLensResolveRequest.method,
    $.CodeActionResolveRequest.method,
    $.InlayHintResolveRequest.method,
    $.DocumentLinkResolveRequest.method,
    $.WorkspaceSymbolResolveRequest.method,
  ]);
  var td = class {
    error(e) {
      (0, $.RAL)().console.error(e);
    }
    warn(e) {
      (0, $.RAL)().console.warn(e);
    }
    info(e) {
      (0, $.RAL)().console.info(e);
    }
    log(e) {
      (0, $.RAL)().console.log(e);
    }
  };
  function Yw(t, e, n, r, i) {
    let s = new td(),
      o = (0, $.createProtocolConnection)(t, e, s, i);
    return (
      o.onError((u) => {
        n(u[0], u[1], u[2]);
      }),
      o.onClose(r),
      {
        listen: () => o.listen(),
        sendRequest: o.sendRequest,
        onRequest: o.onRequest,
        hasPendingResponse: o.hasPendingResponse,
        sendNotification: o.sendNotification,
        onNotification: o.onNotification,
        onProgress: o.onProgress,
        sendProgress: o.sendProgress,
        trace: (u, h, p) => {
          let v = { sendNotification: !1, traceFormat: $.TraceFormat.Text };
          return p === void 0
            ? o.trace(u, h, v)
            : (mn.boolean(p), o.trace(u, h, p));
        },
        initialize: (u) => o.sendRequest($.InitializeRequest.type, u),
        shutdown: () => o.sendRequest($.ShutdownRequest.type, void 0),
        exit: () => o.sendNotification($.ExitNotification.type),
        end: () => o.end(),
        dispose: () => o.dispose(),
      }
    );
  }
  var nd;
  (function (t) {
    function e(n) {
      return [new Qw.InlineCompletionItemFeature(n)];
    }
    t.createAll = e;
  })(nd || (dt.ProposedFeatures = nd = {}));
});
var Xm = x(($o) => {
  "use strict";
  Object.defineProperty($o, "__esModule", { value: !0 });
  $o.terminate = void 0;
  var Gm = require("child_process"),
    Zw = require("path"),
    eC = process.platform === "win32",
    tC = process.platform === "darwin",
    nC = process.platform === "linux";
  function rC(t, e) {
    if (eC)
      try {
        let i = { stdio: ["pipe", "pipe", "ignore"] };
        return (
          e && (i.cwd = e),
          Gm.execFileSync(
            "taskkill",
            ["/T", "/F", "/PID", t.pid.toString()],
            i
          ),
          !0
        );
      } catch {
        return !1;
      }
    else if (nC || tC)
      try {
        var n = (0, Zw.join)(__dirname, "terminateProcess.sh"),
          r = Gm.spawnSync(n, [t.pid.toString()]);
        return !r.error;
      } catch {
        return !1;
      }
    else return t.kill("SIGKILL"), !0;
  }
  $o.terminate = rC;
});
var id = x((qS, Jm) => {
  "use strict";
  Jm.exports = re();
});
var Yi = x((xS, Qm) => {
  var iC =
    typeof process == "object" &&
    process.env &&
    process.env.NODE_DEBUG &&
    /\bsemver\b/i.test(process.env.NODE_DEBUG)
      ? (...t) => console.error("SEMVER", ...t)
      : () => {};
  Qm.exports = iC;
});
var Ho = x((OS, Ym) => {
  var sC = "2.0.0",
    oC = Number.MAX_SAFE_INTEGER || 9007199254740991,
    aC = 16,
    cC = 256 - 6,
    uC = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease",
    ];
  Ym.exports = {
    MAX_LENGTH: 256,
    MAX_SAFE_COMPONENT_LENGTH: aC,
    MAX_SAFE_BUILD_LENGTH: cC,
    MAX_SAFE_INTEGER: oC,
    RELEASE_TYPES: uC,
    SEMVER_SPEC_VERSION: sC,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2,
  };
});
var Uo = x((Kn, Zm) => {
  var {
      MAX_SAFE_COMPONENT_LENGTH: sd,
      MAX_SAFE_BUILD_LENGTH: lC,
      MAX_LENGTH: dC,
    } = Ho(),
    fC = Yi();
  Kn = Zm.exports = {};
  var hC = (Kn.re = []),
    pC = (Kn.safeRe = []),
    B = (Kn.src = []),
    V = (Kn.t = {}),
    gC = 0,
    od = "[a-zA-Z0-9-]",
    mC = [
      ["\\s", 1],
      ["\\d", dC],
      [od, lC],
    ],
    yC = (t) => {
      for (let [e, n] of mC)
        t = t
          .split(`${e}*`)
          .join(`${e}{0,${n}}`)
          .split(`${e}+`)
          .join(`${e}{1,${n}}`);
      return t;
    },
    ue = (t, e, n) => {
      let r = yC(e),
        i = gC++;
      fC(t, i, e),
        (V[t] = i),
        (B[i] = e),
        (hC[i] = new RegExp(e, n ? "g" : void 0)),
        (pC[i] = new RegExp(r, n ? "g" : void 0));
    };
  ue("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  ue("NUMERICIDENTIFIERLOOSE", "\\d+");
  ue("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${od}*`);
  ue(
    "MAINVERSION",
    `(${B[V.NUMERICIDENTIFIER]})\\.(${B[V.NUMERICIDENTIFIER]})\\.(${
      B[V.NUMERICIDENTIFIER]
    })`
  );
  ue(
    "MAINVERSIONLOOSE",
    `(${B[V.NUMERICIDENTIFIERLOOSE]})\\.(${B[V.NUMERICIDENTIFIERLOOSE]})\\.(${
      B[V.NUMERICIDENTIFIERLOOSE]
    })`
  );
  ue(
    "PRERELEASEIDENTIFIER",
    `(?:${B[V.NUMERICIDENTIFIER]}|${B[V.NONNUMERICIDENTIFIER]})`
  );
  ue(
    "PRERELEASEIDENTIFIERLOOSE",
    `(?:${B[V.NUMERICIDENTIFIERLOOSE]}|${B[V.NONNUMERICIDENTIFIER]})`
  );
  ue(
    "PRERELEASE",
    `(?:-(${B[V.PRERELEASEIDENTIFIER]}(?:\\.${B[V.PRERELEASEIDENTIFIER]})*))`
  );
  ue(
    "PRERELEASELOOSE",
    `(?:-?(${B[V.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
      B[V.PRERELEASEIDENTIFIERLOOSE]
    })*))`
  );
  ue("BUILDIDENTIFIER", `${od}+`);
  ue(
    "BUILD",
    `(?:\\+(${B[V.BUILDIDENTIFIER]}(?:\\.${B[V.BUILDIDENTIFIER]})*))`
  );
  ue("FULLPLAIN", `v?${B[V.MAINVERSION]}${B[V.PRERELEASE]}?${B[V.BUILD]}?`);
  ue("FULL", `^${B[V.FULLPLAIN]}$`);
  ue(
    "LOOSEPLAIN",
    `[v=\\s]*${B[V.MAINVERSIONLOOSE]}${B[V.PRERELEASELOOSE]}?${B[V.BUILD]}?`
  );
  ue("LOOSE", `^${B[V.LOOSEPLAIN]}$`);
  ue("GTLT", "((?:<|>)?=?)");
  ue("XRANGEIDENTIFIERLOOSE", `${B[V.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  ue("XRANGEIDENTIFIER", `${B[V.NUMERICIDENTIFIER]}|x|X|\\*`);
  ue(
    "XRANGEPLAIN",
    `[v=\\s]*(${B[V.XRANGEIDENTIFIER]})(?:\\.(${B[V.XRANGEIDENTIFIER]})(?:\\.(${
      B[V.XRANGEIDENTIFIER]
    })(?:${B[V.PRERELEASE]})?${B[V.BUILD]}?)?)?`
  );
  ue(
    "XRANGEPLAINLOOSE",
    `[v=\\s]*(${B[V.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
      B[V.XRANGEIDENTIFIERLOOSE]
    })(?:\\.(${B[V.XRANGEIDENTIFIERLOOSE]})(?:${B[V.PRERELEASELOOSE]})?${
      B[V.BUILD]
    }?)?)?`
  );
  ue("XRANGE", `^${B[V.GTLT]}\\s*${B[V.XRANGEPLAIN]}$`);
  ue("XRANGELOOSE", `^${B[V.GTLT]}\\s*${B[V.XRANGEPLAINLOOSE]}$`);
  ue(
    "COERCE",
    `(^|[^\\d])(\\d{1,${sd}})(?:\\.(\\d{1,${sd}}))?(?:\\.(\\d{1,${sd}}))?(?:$|[^\\d])`
  );
  ue("COERCERTL", B[V.COERCE], !0);
  ue("LONETILDE", "(?:~>?)");
  ue("TILDETRIM", `(\\s*)${B[V.LONETILDE]}\\s+`, !0);
  Kn.tildeTrimReplace = "$1~";
  ue("TILDE", `^${B[V.LONETILDE]}${B[V.XRANGEPLAIN]}$`);
  ue("TILDELOOSE", `^${B[V.LONETILDE]}${B[V.XRANGEPLAINLOOSE]}$`);
  ue("LONECARET", "(?:\\^)");
  ue("CARETTRIM", `(\\s*)${B[V.LONECARET]}\\s+`, !0);
  Kn.caretTrimReplace = "$1^";
  ue("CARET", `^${B[V.LONECARET]}${B[V.XRANGEPLAIN]}$`);
  ue("CARETLOOSE", `^${B[V.LONECARET]}${B[V.XRANGEPLAINLOOSE]}$`);
  ue("COMPARATORLOOSE", `^${B[V.GTLT]}\\s*(${B[V.LOOSEPLAIN]})$|^$`);
  ue("COMPARATOR", `^${B[V.GTLT]}\\s*(${B[V.FULLPLAIN]})$|^$`);
  ue(
    "COMPARATORTRIM",
    `(\\s*)${B[V.GTLT]}\\s*(${B[V.LOOSEPLAIN]}|${B[V.XRANGEPLAIN]})`,
    !0
  );
  Kn.comparatorTrimReplace = "$1$2$3";
  ue(
    "HYPHENRANGE",
    `^\\s*(${B[V.XRANGEPLAIN]})\\s+-\\s+(${B[V.XRANGEPLAIN]})\\s*$`
  );
  ue(
    "HYPHENRANGELOOSE",
    `^\\s*(${B[V.XRANGEPLAINLOOSE]})\\s+-\\s+(${B[V.XRANGEPLAINLOOSE]})\\s*$`
  );
  ue("STAR", "(<|>)?=?\\s*\\*");
  ue("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  ue("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});
var Wo = x((IS, ey) => {
  var vC = Object.freeze({ loose: !0 }),
    bC = Object.freeze({}),
    _C = (t) => (t ? (typeof t != "object" ? vC : t) : bC);
  ey.exports = _C;
});
var iy = x((FS, ry) => {
  var ty = /^[0-9]+$/,
    ny = (t, e) => {
      let n = ty.test(t),
        r = ty.test(e);
      return (
        n && r && ((t = +t), (e = +e)),
        t === e ? 0 : n && !r ? -1 : r && !n ? 1 : t < e ? -1 : 1
      );
    },
    wC = (t, e) => ny(e, t);
  ry.exports = { compareIdentifiers: ny, rcompareIdentifiers: wC };
});
var Zi = x((NS, cy) => {
  var Ko = Yi(),
    { MAX_LENGTH: sy, MAX_SAFE_INTEGER: zo } = Ho(),
    { safeRe: oy, t: ay } = Uo(),
    CC = Wo(),
    { compareIdentifiers: gi } = iy(),
    Gt = class {
      constructor(e, n) {
        if (((n = CC(n)), e instanceof Gt)) {
          if (
            e.loose === !!n.loose &&
            e.includePrerelease === !!n.includePrerelease
          )
            return e;
          e = e.version;
        } else if (typeof e != "string")
          throw new TypeError(
            `Invalid version. Must be a string. Got type "${typeof e}".`
          );
        if (e.length > sy)
          throw new TypeError(`version is longer than ${sy} characters`);
        Ko("SemVer", e, n),
          (this.options = n),
          (this.loose = !!n.loose),
          (this.includePrerelease = !!n.includePrerelease);
        let r = e.trim().match(n.loose ? oy[ay.LOOSE] : oy[ay.FULL]);
        if (!r) throw new TypeError(`Invalid Version: ${e}`);
        if (
          ((this.raw = e),
          (this.major = +r[1]),
          (this.minor = +r[2]),
          (this.patch = +r[3]),
          this.major > zo || this.major < 0)
        )
          throw new TypeError("Invalid major version");
        if (this.minor > zo || this.minor < 0)
          throw new TypeError("Invalid minor version");
        if (this.patch > zo || this.patch < 0)
          throw new TypeError("Invalid patch version");
        r[4]
          ? (this.prerelease = r[4].split(".").map((i) => {
              if (/^[0-9]+$/.test(i)) {
                let s = +i;
                if (s >= 0 && s < zo) return s;
              }
              return i;
            }))
          : (this.prerelease = []),
          (this.build = r[5] ? r[5].split(".") : []),
          this.format();
      }
      format() {
        return (
          (this.version = `${this.major}.${this.minor}.${this.patch}`),
          this.prerelease.length &&
            (this.version += `-${this.prerelease.join(".")}`),
          this.version
        );
      }
      toString() {
        return this.version;
      }
      compare(e) {
        if (
          (Ko("SemVer.compare", this.version, this.options, e),
          !(e instanceof Gt))
        ) {
          if (typeof e == "string" && e === this.version) return 0;
          e = new Gt(e, this.options);
        }
        return e.version === this.version
          ? 0
          : this.compareMain(e) || this.comparePre(e);
      }
      compareMain(e) {
        return (
          e instanceof Gt || (e = new Gt(e, this.options)),
          gi(this.major, e.major) ||
            gi(this.minor, e.minor) ||
            gi(this.patch, e.patch)
        );
      }
      comparePre(e) {
        if (
          (e instanceof Gt || (e = new Gt(e, this.options)),
          this.prerelease.length && !e.prerelease.length)
        )
          return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        let n = 0;
        do {
          let r = this.prerelease[n],
            i = e.prerelease[n];
          if ((Ko("prerelease compare", n, r, i), r === void 0 && i === void 0))
            return 0;
          if (i === void 0) return 1;
          if (r === void 0) return -1;
          if (r === i) continue;
          return gi(r, i);
        } while (++n);
      }
      compareBuild(e) {
        e instanceof Gt || (e = new Gt(e, this.options));
        let n = 0;
        do {
          let r = this.build[n],
            i = e.build[n];
          if ((Ko("prerelease compare", n, r, i), r === void 0 && i === void 0))
            return 0;
          if (i === void 0) return 1;
          if (r === void 0) return -1;
          if (r === i) continue;
          return gi(r, i);
        } while (++n);
      }
      inc(e, n, r) {
        switch (e) {
          case "premajor":
            (this.prerelease.length = 0),
              (this.patch = 0),
              (this.minor = 0),
              this.major++,
              this.inc("pre", n, r);
            break;
          case "preminor":
            (this.prerelease.length = 0),
              (this.patch = 0),
              this.minor++,
              this.inc("pre", n, r);
            break;
          case "prepatch":
            (this.prerelease.length = 0),
              this.inc("patch", n, r),
              this.inc("pre", n, r);
            break;
          case "prerelease":
            this.prerelease.length === 0 && this.inc("patch", n, r),
              this.inc("pre", n, r);
            break;
          case "major":
            (this.minor !== 0 ||
              this.patch !== 0 ||
              this.prerelease.length === 0) &&
              this.major++,
              (this.minor = 0),
              (this.patch = 0),
              (this.prerelease = []);
            break;
          case "minor":
            (this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
              (this.patch = 0),
              (this.prerelease = []);
            break;
          case "patch":
            this.prerelease.length === 0 && this.patch++,
              (this.prerelease = []);
            break;
          case "pre": {
            let i = Number(r) ? 1 : 0;
            if (!n && r === !1)
              throw new Error(
                "invalid increment argument: identifier is empty"
              );
            if (this.prerelease.length === 0) this.prerelease = [i];
            else {
              let s = this.prerelease.length;
              for (; --s >= 0; )
                typeof this.prerelease[s] == "number" &&
                  (this.prerelease[s]++, (s = -2));
              if (s === -1) {
                if (n === this.prerelease.join(".") && r === !1)
                  throw new Error(
                    "invalid increment argument: identifier already exists"
                  );
                this.prerelease.push(i);
              }
            }
            if (n) {
              let s = [n, i];
              r === !1 && (s = [n]),
                gi(this.prerelease[0], n) === 0
                  ? isNaN(this.prerelease[1]) && (this.prerelease = s)
                  : (this.prerelease = s);
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${e}`);
        }
        return (
          (this.raw = this.format()),
          this.build.length && (this.raw += `+${this.build.join(".")}`),
          this
        );
      }
    };
  cy.exports = Gt;
});
var dy = x((LS, ly) => {
  var uy = Zi(),
    DC = (t, e, n = !1) => {
      if (t instanceof uy) return t;
      try {
        return new uy(t, e);
      } catch (r) {
        if (!n) return null;
        throw r;
      }
    };
  ly.exports = DC;
});
var hy = x((MS, fy) => {
  "use strict";
  fy.exports = function (t) {
    t.prototype[Symbol.iterator] = function* () {
      for (let e = this.head; e; e = e.next) yield e.value;
    };
  };
});
var gy = x((AS, py) => {
  "use strict";
  py.exports = De;
  De.Node = Or;
  De.create = De;
  function De(t) {
    var e = this;
    if (
      (e instanceof De || (e = new De()),
      (e.tail = null),
      (e.head = null),
      (e.length = 0),
      t && typeof t.forEach == "function")
    )
      t.forEach(function (i) {
        e.push(i);
      });
    else if (arguments.length > 0)
      for (var n = 0, r = arguments.length; n < r; n++) e.push(arguments[n]);
    return e;
  }
  De.prototype.removeNode = function (t) {
    if (t.list !== this)
      throw new Error("removing node which does not belong to this list");
    var e = t.next,
      n = t.prev;
    return (
      e && (e.prev = n),
      n && (n.next = e),
      t === this.head && (this.head = e),
      t === this.tail && (this.tail = n),
      t.list.length--,
      (t.next = null),
      (t.prev = null),
      (t.list = null),
      e
    );
  };
  De.prototype.unshiftNode = function (t) {
    if (t !== this.head) {
      t.list && t.list.removeNode(t);
      var e = this.head;
      (t.list = this),
        (t.next = e),
        e && (e.prev = t),
        (this.head = t),
        this.tail || (this.tail = t),
        this.length++;
    }
  };
  De.prototype.pushNode = function (t) {
    if (t !== this.tail) {
      t.list && t.list.removeNode(t);
      var e = this.tail;
      (t.list = this),
        (t.prev = e),
        e && (e.next = t),
        (this.tail = t),
        this.head || (this.head = t),
        this.length++;
    }
  };
  De.prototype.push = function () {
    for (var t = 0, e = arguments.length; t < e; t++) SC(this, arguments[t]);
    return this.length;
  };
  De.prototype.unshift = function () {
    for (var t = 0, e = arguments.length; t < e; t++) TC(this, arguments[t]);
    return this.length;
  };
  De.prototype.pop = function () {
    if (!!this.tail) {
      var t = this.tail.value;
      return (
        (this.tail = this.tail.prev),
        this.tail ? (this.tail.next = null) : (this.head = null),
        this.length--,
        t
      );
    }
  };
  De.prototype.shift = function () {
    if (!!this.head) {
      var t = this.head.value;
      return (
        (this.head = this.head.next),
        this.head ? (this.head.prev = null) : (this.tail = null),
        this.length--,
        t
      );
    }
  };
  De.prototype.forEach = function (t, e) {
    e = e || this;
    for (var n = this.head, r = 0; n !== null; r++)
      t.call(e, n.value, r, this), (n = n.next);
  };
  De.prototype.forEachReverse = function (t, e) {
    e = e || this;
    for (var n = this.tail, r = this.length - 1; n !== null; r--)
      t.call(e, n.value, r, this), (n = n.prev);
  };
  De.prototype.get = function (t) {
    for (var e = 0, n = this.head; n !== null && e < t; e++) n = n.next;
    if (e === t && n !== null) return n.value;
  };
  De.prototype.getReverse = function (t) {
    for (var e = 0, n = this.tail; n !== null && e < t; e++) n = n.prev;
    if (e === t && n !== null) return n.value;
  };
  De.prototype.map = function (t, e) {
    e = e || this;
    for (var n = new De(), r = this.head; r !== null; )
      n.push(t.call(e, r.value, this)), (r = r.next);
    return n;
  };
  De.prototype.mapReverse = function (t, e) {
    e = e || this;
    for (var n = new De(), r = this.tail; r !== null; )
      n.push(t.call(e, r.value, this)), (r = r.prev);
    return n;
  };
  De.prototype.reduce = function (t, e) {
    var n,
      r = this.head;
    if (arguments.length > 1) n = e;
    else if (this.head) (r = this.head.next), (n = this.head.value);
    else throw new TypeError("Reduce of empty list with no initial value");
    for (var i = 0; r !== null; i++) (n = t(n, r.value, i)), (r = r.next);
    return n;
  };
  De.prototype.reduceReverse = function (t, e) {
    var n,
      r = this.tail;
    if (arguments.length > 1) n = e;
    else if (this.tail) (r = this.tail.prev), (n = this.tail.value);
    else throw new TypeError("Reduce of empty list with no initial value");
    for (var i = this.length - 1; r !== null; i--)
      (n = t(n, r.value, i)), (r = r.prev);
    return n;
  };
  De.prototype.toArray = function () {
    for (var t = new Array(this.length), e = 0, n = this.head; n !== null; e++)
      (t[e] = n.value), (n = n.next);
    return t;
  };
  De.prototype.toArrayReverse = function () {
    for (var t = new Array(this.length), e = 0, n = this.tail; n !== null; e++)
      (t[e] = n.value), (n = n.prev);
    return t;
  };
  De.prototype.slice = function (t, e) {
    (e = e || this.length),
      e < 0 && (e += this.length),
      (t = t || 0),
      t < 0 && (t += this.length);
    var n = new De();
    if (e < t || e < 0) return n;
    t < 0 && (t = 0), e > this.length && (e = this.length);
    for (var r = 0, i = this.head; i !== null && r < t; r++) i = i.next;
    for (; i !== null && r < e; r++, i = i.next) n.push(i.value);
    return n;
  };
  De.prototype.sliceReverse = function (t, e) {
    (e = e || this.length),
      e < 0 && (e += this.length),
      (t = t || 0),
      t < 0 && (t += this.length);
    var n = new De();
    if (e < t || e < 0) return n;
    t < 0 && (t = 0), e > this.length && (e = this.length);
    for (var r = this.length, i = this.tail; i !== null && r > e; r--)
      i = i.prev;
    for (; i !== null && r > t; r--, i = i.prev) n.push(i.value);
    return n;
  };
  De.prototype.splice = function (t, e, ...n) {
    t > this.length && (t = this.length - 1), t < 0 && (t = this.length + t);
    for (var r = 0, i = this.head; i !== null && r < t; r++) i = i.next;
    for (var s = [], r = 0; i && r < e; r++)
      s.push(i.value), (i = this.removeNode(i));
    i === null && (i = this.tail),
      i !== this.head && i !== this.tail && (i = i.prev);
    for (var r = 0; r < n.length; r++) i = RC(this, i, n[r]);
    return s;
  };
  De.prototype.reverse = function () {
    for (var t = this.head, e = this.tail, n = t; n !== null; n = n.prev) {
      var r = n.prev;
      (n.prev = n.next), (n.next = r);
    }
    return (this.head = e), (this.tail = t), this;
  };
  function RC(t, e, n) {
    var r = e === t.head ? new Or(n, null, e, t) : new Or(n, e, e.next, t);
    return (
      r.next === null && (t.tail = r),
      r.prev === null && (t.head = r),
      t.length++,
      r
    );
  }
  function SC(t, e) {
    (t.tail = new Or(e, t.tail, null, t)),
      t.head || (t.head = t.tail),
      t.length++;
  }
  function TC(t, e) {
    (t.head = new Or(e, null, t.head, t)),
      t.tail || (t.tail = t.head),
      t.length++;
  }
  function Or(t, e, n, r) {
    if (!(this instanceof Or)) return new Or(t, e, n, r);
    (this.list = r),
      (this.value = t),
      e ? ((e.next = this), (this.prev = e)) : (this.prev = null),
      n ? ((n.prev = this), (this.next = n)) : (this.next = null);
  }
  try {
    hy()(De);
  } catch {}
});
var _y = x((jS, by) => {
  "use strict";
  var PC = gy(),
    Ir = Symbol("max"),
    Bn = Symbol("length"),
    mi = Symbol("lengthCalculator"),
    ts = Symbol("allowStale"),
    Fr = Symbol("maxAge"),
    zn = Symbol("dispose"),
    my = Symbol("noDisposeOnSet"),
    ft = Symbol("lruList"),
    yn = Symbol("cache"),
    vy = Symbol("updateAgeOnGet"),
    ad = () => 1,
    ud = class {
      constructor(e) {
        if (
          (typeof e == "number" && (e = { max: e }),
          e || (e = {}),
          e.max && (typeof e.max != "number" || e.max < 0))
        )
          throw new TypeError("max must be a non-negative number");
        let n = (this[Ir] = e.max || 1 / 0),
          r = e.length || ad;
        if (
          ((this[mi] = typeof r != "function" ? ad : r),
          (this[ts] = e.stale || !1),
          e.maxAge && typeof e.maxAge != "number")
        )
          throw new TypeError("maxAge must be a number");
        (this[Fr] = e.maxAge || 0),
          (this[zn] = e.dispose),
          (this[my] = e.noDisposeOnSet || !1),
          (this[vy] = e.updateAgeOnGet || !1),
          this.reset();
      }
      set max(e) {
        if (typeof e != "number" || e < 0)
          throw new TypeError("max must be a non-negative number");
        (this[Ir] = e || 1 / 0), es(this);
      }
      get max() {
        return this[Ir];
      }
      set allowStale(e) {
        this[ts] = !!e;
      }
      get allowStale() {
        return this[ts];
      }
      set maxAge(e) {
        if (typeof e != "number")
          throw new TypeError("maxAge must be a non-negative number");
        (this[Fr] = e), es(this);
      }
      get maxAge() {
        return this[Fr];
      }
      set lengthCalculator(e) {
        typeof e != "function" && (e = ad),
          e !== this[mi] &&
            ((this[mi] = e),
            (this[Bn] = 0),
            this[ft].forEach((n) => {
              (n.length = this[mi](n.value, n.key)), (this[Bn] += n.length);
            })),
          es(this);
      }
      get lengthCalculator() {
        return this[mi];
      }
      get length() {
        return this[Bn];
      }
      get itemCount() {
        return this[ft].length;
      }
      rforEach(e, n) {
        n = n || this;
        for (let r = this[ft].tail; r !== null; ) {
          let i = r.prev;
          yy(this, e, r, n), (r = i);
        }
      }
      forEach(e, n) {
        n = n || this;
        for (let r = this[ft].head; r !== null; ) {
          let i = r.next;
          yy(this, e, r, n), (r = i);
        }
      }
      keys() {
        return this[ft].toArray().map((e) => e.key);
      }
      values() {
        return this[ft].toArray().map((e) => e.value);
      }
      reset() {
        this[zn] &&
          this[ft] &&
          this[ft].length &&
          this[ft].forEach((e) => this[zn](e.key, e.value)),
          (this[yn] = new Map()),
          (this[ft] = new PC()),
          (this[Bn] = 0);
      }
      dump() {
        return this[ft]
          .map((e) =>
            Bo(this, e)
              ? !1
              : { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) }
          )
          .toArray()
          .filter((e) => e);
      }
      dumpLru() {
        return this[ft];
      }
      set(e, n, r) {
        if (((r = r || this[Fr]), r && typeof r != "number"))
          throw new TypeError("maxAge must be a number");
        let i = r ? Date.now() : 0,
          s = this[mi](n, e);
        if (this[yn].has(e)) {
          if (s > this[Ir]) return yi(this, this[yn].get(e)), !1;
          let u = this[yn].get(e).value;
          return (
            this[zn] && (this[my] || this[zn](e, u.value)),
            (u.now = i),
            (u.maxAge = r),
            (u.value = n),
            (this[Bn] += s - u.length),
            (u.length = s),
            this.get(e),
            es(this),
            !0
          );
        }
        let o = new ld(e, n, s, i, r);
        return o.length > this[Ir]
          ? (this[zn] && this[zn](e, n), !1)
          : ((this[Bn] += o.length),
            this[ft].unshift(o),
            this[yn].set(e, this[ft].head),
            es(this),
            !0);
      }
      has(e) {
        if (!this[yn].has(e)) return !1;
        let n = this[yn].get(e).value;
        return !Bo(this, n);
      }
      get(e) {
        return cd(this, e, !0);
      }
      peek(e) {
        return cd(this, e, !1);
      }
      pop() {
        let e = this[ft].tail;
        return e ? (yi(this, e), e.value) : null;
      }
      del(e) {
        yi(this, this[yn].get(e));
      }
      load(e) {
        this.reset();
        let n = Date.now();
        for (let r = e.length - 1; r >= 0; r--) {
          let i = e[r],
            s = i.e || 0;
          if (s === 0) this.set(i.k, i.v);
          else {
            let o = s - n;
            o > 0 && this.set(i.k, i.v, o);
          }
        }
      }
      prune() {
        this[yn].forEach((e, n) => cd(this, n, !1));
      }
    },
    cd = (t, e, n) => {
      let r = t[yn].get(e);
      if (r) {
        let i = r.value;
        if (Bo(t, i)) {
          if ((yi(t, r), !t[ts])) return;
        } else n && (t[vy] && (r.value.now = Date.now()), t[ft].unshiftNode(r));
        return i.value;
      }
    },
    Bo = (t, e) => {
      if (!e || (!e.maxAge && !t[Fr])) return !1;
      let n = Date.now() - e.now;
      return e.maxAge ? n > e.maxAge : t[Fr] && n > t[Fr];
    },
    es = (t) => {
      if (t[Bn] > t[Ir])
        for (let e = t[ft].tail; t[Bn] > t[Ir] && e !== null; ) {
          let n = e.prev;
          yi(t, e), (e = n);
        }
    },
    yi = (t, e) => {
      if (e) {
        let n = e.value;
        t[zn] && t[zn](n.key, n.value),
          (t[Bn] -= n.length),
          t[yn].delete(n.key),
          t[ft].removeNode(e);
      }
    },
    ld = class {
      constructor(e, n, r, i, s) {
        (this.key = e),
          (this.value = n),
          (this.length = r),
          (this.now = i),
          (this.maxAge = s || 0);
      }
    },
    yy = (t, e, n, r) => {
      let i = n.value;
      Bo(t, i) && (yi(t, n), t[ts] || (i = void 0)),
        i && e.call(r, i.value, i.key, t);
    };
  by.exports = ud;
});
var Nr = x(($S, Cy) => {
  var wy = Zi(),
    EC = (t, e, n) => new wy(t, n).compare(new wy(e, n));
  Cy.exports = EC;
});
var Ry = x((HS, Dy) => {
  var kC = Nr(),
    qC = (t, e, n) => kC(t, e, n) === 0;
  Dy.exports = qC;
});
var Ty = x((US, Sy) => {
  var xC = Nr(),
    OC = (t, e, n) => xC(t, e, n) !== 0;
  Sy.exports = OC;
});
var Ey = x((WS, Py) => {
  var IC = Nr(),
    FC = (t, e, n) => IC(t, e, n) > 0;
  Py.exports = FC;
});
var qy = x((KS, ky) => {
  var NC = Nr(),
    LC = (t, e, n) => NC(t, e, n) >= 0;
  ky.exports = LC;
});
var Oy = x((zS, xy) => {
  var MC = Nr(),
    AC = (t, e, n) => MC(t, e, n) < 0;
  xy.exports = AC;
});
var Fy = x((BS, Iy) => {
  var jC = Nr(),
    $C = (t, e, n) => jC(t, e, n) <= 0;
  Iy.exports = $C;
});
var Ly = x((VS, Ny) => {
  var HC = Ry(),
    UC = Ty(),
    WC = Ey(),
    KC = qy(),
    zC = Oy(),
    BC = Fy(),
    VC = (t, e, n, r) => {
      switch (e) {
        case "===":
          return (
            typeof t == "object" && (t = t.version),
            typeof n == "object" && (n = n.version),
            t === n
          );
        case "!==":
          return (
            typeof t == "object" && (t = t.version),
            typeof n == "object" && (n = n.version),
            t !== n
          );
        case "":
        case "=":
        case "==":
          return HC(t, n, r);
        case "!=":
          return UC(t, n, r);
        case ">":
          return WC(t, n, r);
        case ">=":
          return KC(t, n, r);
        case "<":
          return zC(t, n, r);
        case "<=":
          return BC(t, n, r);
        default:
          throw new TypeError(`Invalid operator: ${e}`);
      }
    };
  Ny.exports = VC;
});
var Wy = x((GS, Uy) => {
  var ns = Symbol("SemVer ANY"),
    vi = class {
      static get ANY() {
        return ns;
      }
      constructor(e, n) {
        if (((n = My(n)), e instanceof vi)) {
          if (e.loose === !!n.loose) return e;
          e = e.value;
        }
        (e = e.trim().split(/\s+/).join(" ")),
          fd("comparator", e, n),
          (this.options = n),
          (this.loose = !!n.loose),
          this.parse(e),
          this.semver === ns
            ? (this.value = "")
            : (this.value = this.operator + this.semver.version),
          fd("comp", this);
      }
      parse(e) {
        let n = this.options.loose ? Ay[jy.COMPARATORLOOSE] : Ay[jy.COMPARATOR],
          r = e.match(n);
        if (!r) throw new TypeError(`Invalid comparator: ${e}`);
        (this.operator = r[1] !== void 0 ? r[1] : ""),
          this.operator === "=" && (this.operator = ""),
          r[2]
            ? (this.semver = new $y(r[2], this.options.loose))
            : (this.semver = ns);
      }
      toString() {
        return this.value;
      }
      test(e) {
        if (
          (fd("Comparator.test", e, this.options.loose),
          this.semver === ns || e === ns)
        )
          return !0;
        if (typeof e == "string")
          try {
            e = new $y(e, this.options);
          } catch {
            return !1;
          }
        return dd(e, this.operator, this.semver, this.options);
      }
      intersects(e, n) {
        if (!(e instanceof vi)) throw new TypeError("a Comparator is required");
        return this.operator === ""
          ? this.value === ""
            ? !0
            : new Hy(e.value, n).test(this.value)
          : e.operator === ""
          ? e.value === ""
            ? !0
            : new Hy(this.value, n).test(e.semver)
          : ((n = My(n)),
            (n.includePrerelease &&
              (this.value === "<0.0.0-0" || e.value === "<0.0.0-0")) ||
            (!n.includePrerelease &&
              (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0")))
              ? !1
              : !!(
                  (this.operator.startsWith(">") &&
                    e.operator.startsWith(">")) ||
                  (this.operator.startsWith("<") &&
                    e.operator.startsWith("<")) ||
                  (this.semver.version === e.semver.version &&
                    this.operator.includes("=") &&
                    e.operator.includes("=")) ||
                  (dd(this.semver, "<", e.semver, n) &&
                    this.operator.startsWith(">") &&
                    e.operator.startsWith("<")) ||
                  (dd(this.semver, ">", e.semver, n) &&
                    this.operator.startsWith("<") &&
                    e.operator.startsWith(">"))
                ));
      }
    };
  Uy.exports = vi;
  var My = Wo(),
    { safeRe: Ay, t: jy } = Uo(),
    dd = Ly(),
    fd = Yi(),
    $y = Zi(),
    Hy = hd();
});
var hd = x((XS, Vy) => {
  var Lr = class {
    constructor(e, n) {
      if (((n = XC(n)), e instanceof Lr))
        return e.loose === !!n.loose &&
          e.includePrerelease === !!n.includePrerelease
          ? e
          : new Lr(e.raw, n);
      if (e instanceof pd)
        return (this.raw = e.value), (this.set = [[e]]), this.format(), this;
      if (
        ((this.options = n),
        (this.loose = !!n.loose),
        (this.includePrerelease = !!n.includePrerelease),
        (this.raw = e.trim().split(/\s+/).join(" ")),
        (this.set = this.raw
          .split("||")
          .map((r) => this.parseRange(r.trim()))
          .filter((r) => r.length)),
        !this.set.length)
      )
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let r = this.set[0];
        if (
          ((this.set = this.set.filter((i) => !zy(i[0]))),
          this.set.length === 0)
        )
          this.set = [r];
        else if (this.set.length > 1) {
          for (let i of this.set)
            if (i.length === 1 && nD(i[0])) {
              this.set = [i];
              break;
            }
        }
      }
      this.format();
    }
    format() {
      return (
        (this.range = this.set
          .map((e) => e.join(" ").trim())
          .join("||")
          .trim()),
        this.range
      );
    }
    toString() {
      return this.range;
    }
    parseRange(e) {
      let r =
          ((this.options.includePrerelease && eD) |
            (this.options.loose && tD)) +
          ":" +
          e,
        i = Ky.get(r);
      if (i) return i;
      let s = this.options.loose,
        o = s ? jt[kt.HYPHENRANGELOOSE] : jt[kt.HYPHENRANGE];
      (e = e.replace(o, fD(this.options.includePrerelease))),
        Ae("hyphen replace", e),
        (e = e.replace(jt[kt.COMPARATORTRIM], QC)),
        Ae("comparator trim", e),
        (e = e.replace(jt[kt.TILDETRIM], YC)),
        Ae("tilde trim", e),
        (e = e.replace(jt[kt.CARETTRIM], ZC)),
        Ae("caret trim", e);
      let a = e
        .split(" ")
        .map((v) => rD(v, this.options))
        .join(" ")
        .split(/\s+/)
        .map((v) => dD(v, this.options));
      s &&
        (a = a.filter(
          (v) => (
            Ae("loose invalid filter", v, this.options),
            !!v.match(jt[kt.COMPARATORLOOSE])
          )
        )),
        Ae("range list", a);
      let u = new Map(),
        h = a.map((v) => new pd(v, this.options));
      for (let v of h) {
        if (zy(v)) return [v];
        u.set(v.value, v);
      }
      u.size > 1 && u.has("") && u.delete("");
      let p = [...u.values()];
      return Ky.set(r, p), p;
    }
    intersects(e, n) {
      if (!(e instanceof Lr)) throw new TypeError("a Range is required");
      return this.set.some(
        (r) =>
          By(r, n) &&
          e.set.some(
            (i) =>
              By(i, n) && r.every((s) => i.every((o) => s.intersects(o, n)))
          )
      );
    }
    test(e) {
      if (!e) return !1;
      if (typeof e == "string")
        try {
          e = new JC(e, this.options);
        } catch {
          return !1;
        }
      for (let n = 0; n < this.set.length; n++)
        if (hD(this.set[n], e, this.options)) return !0;
      return !1;
    }
  };
  Vy.exports = Lr;
  var GC = _y(),
    Ky = new GC({ max: 1e3 }),
    XC = Wo(),
    pd = Wy(),
    Ae = Yi(),
    JC = Zi(),
    {
      safeRe: jt,
      t: kt,
      comparatorTrimReplace: QC,
      tildeTrimReplace: YC,
      caretTrimReplace: ZC,
    } = Uo(),
    { FLAG_INCLUDE_PRERELEASE: eD, FLAG_LOOSE: tD } = Ho(),
    zy = (t) => t.value === "<0.0.0-0",
    nD = (t) => t.value === "",
    By = (t, e) => {
      let n = !0,
        r = t.slice(),
        i = r.pop();
      for (; n && r.length; )
        (n = r.every((s) => i.intersects(s, e))), (i = r.pop());
      return n;
    },
    rD = (t, e) => (
      Ae("comp", t, e),
      (t = oD(t, e)),
      Ae("caret", t),
      (t = iD(t, e)),
      Ae("tildes", t),
      (t = cD(t, e)),
      Ae("xrange", t),
      (t = lD(t, e)),
      Ae("stars", t),
      t
    ),
    qt = (t) => !t || t.toLowerCase() === "x" || t === "*",
    iD = (t, e) =>
      t
        .trim()
        .split(/\s+/)
        .map((n) => sD(n, e))
        .join(" "),
    sD = (t, e) => {
      let n = e.loose ? jt[kt.TILDELOOSE] : jt[kt.TILDE];
      return t.replace(n, (r, i, s, o, a) => {
        Ae("tilde", t, r, i, s, o, a);
        let u;
        return (
          qt(i)
            ? (u = "")
            : qt(s)
            ? (u = `>=${i}.0.0 <${+i + 1}.0.0-0`)
            : qt(o)
            ? (u = `>=${i}.${s}.0 <${i}.${+s + 1}.0-0`)
            : a
            ? (Ae("replaceTilde pr", a),
              (u = `>=${i}.${s}.${o}-${a} <${i}.${+s + 1}.0-0`))
            : (u = `>=${i}.${s}.${o} <${i}.${+s + 1}.0-0`),
          Ae("tilde return", u),
          u
        );
      });
    },
    oD = (t, e) =>
      t
        .trim()
        .split(/\s+/)
        .map((n) => aD(n, e))
        .join(" "),
    aD = (t, e) => {
      Ae("caret", t, e);
      let n = e.loose ? jt[kt.CARETLOOSE] : jt[kt.CARET],
        r = e.includePrerelease ? "-0" : "";
      return t.replace(n, (i, s, o, a, u) => {
        Ae("caret", t, i, s, o, a, u);
        let h;
        return (
          qt(s)
            ? (h = "")
            : qt(o)
            ? (h = `>=${s}.0.0${r} <${+s + 1}.0.0-0`)
            : qt(a)
            ? s === "0"
              ? (h = `>=${s}.${o}.0${r} <${s}.${+o + 1}.0-0`)
              : (h = `>=${s}.${o}.0${r} <${+s + 1}.0.0-0`)
            : u
            ? (Ae("replaceCaret pr", u),
              s === "0"
                ? o === "0"
                  ? (h = `>=${s}.${o}.${a}-${u} <${s}.${o}.${+a + 1}-0`)
                  : (h = `>=${s}.${o}.${a}-${u} <${s}.${+o + 1}.0-0`)
                : (h = `>=${s}.${o}.${a}-${u} <${+s + 1}.0.0-0`))
            : (Ae("no pr"),
              s === "0"
                ? o === "0"
                  ? (h = `>=${s}.${o}.${a}${r} <${s}.${o}.${+a + 1}-0`)
                  : (h = `>=${s}.${o}.${a}${r} <${s}.${+o + 1}.0-0`)
                : (h = `>=${s}.${o}.${a} <${+s + 1}.0.0-0`)),
          Ae("caret return", h),
          h
        );
      });
    },
    cD = (t, e) => (
      Ae("replaceXRanges", t, e),
      t
        .split(/\s+/)
        .map((n) => uD(n, e))
        .join(" ")
    ),
    uD = (t, e) => {
      t = t.trim();
      let n = e.loose ? jt[kt.XRANGELOOSE] : jt[kt.XRANGE];
      return t.replace(n, (r, i, s, o, a, u) => {
        Ae("xRange", t, r, i, s, o, a, u);
        let h = qt(s),
          p = h || qt(o),
          v = p || qt(a),
          m = v;
        return (
          i === "=" && m && (i = ""),
          (u = e.includePrerelease ? "-0" : ""),
          h
            ? i === ">" || i === "<"
              ? (r = "<0.0.0-0")
              : (r = "*")
            : i && m
            ? (p && (o = 0),
              (a = 0),
              i === ">"
                ? ((i = ">="),
                  p
                    ? ((s = +s + 1), (o = 0), (a = 0))
                    : ((o = +o + 1), (a = 0)))
                : i === "<=" && ((i = "<"), p ? (s = +s + 1) : (o = +o + 1)),
              i === "<" && (u = "-0"),
              (r = `${i + s}.${o}.${a}${u}`))
            : p
            ? (r = `>=${s}.0.0${u} <${+s + 1}.0.0-0`)
            : v && (r = `>=${s}.${o}.0${u} <${s}.${+o + 1}.0-0`),
          Ae("xRange return", r),
          r
        );
      });
    },
    lD = (t, e) => (
      Ae("replaceStars", t, e), t.trim().replace(jt[kt.STAR], "")
    ),
    dD = (t, e) => (
      Ae("replaceGTE0", t, e),
      t.trim().replace(jt[e.includePrerelease ? kt.GTE0PRE : kt.GTE0], "")
    ),
    fD = (t) => (e, n, r, i, s, o, a, u, h, p, v, m, R) => (
      qt(r)
        ? (n = "")
        : qt(i)
        ? (n = `>=${r}.0.0${t ? "-0" : ""}`)
        : qt(s)
        ? (n = `>=${r}.${i}.0${t ? "-0" : ""}`)
        : o
        ? (n = `>=${n}`)
        : (n = `>=${n}${t ? "-0" : ""}`),
      qt(h)
        ? (u = "")
        : qt(p)
        ? (u = `<${+h + 1}.0.0-0`)
        : qt(v)
        ? (u = `<${h}.${+p + 1}.0-0`)
        : m
        ? (u = `<=${h}.${p}.${v}-${m}`)
        : t
        ? (u = `<${h}.${p}.${+v + 1}-0`)
        : (u = `<=${u}`),
      `${n} ${u}`.trim()
    ),
    hD = (t, e, n) => {
      for (let r = 0; r < t.length; r++) if (!t[r].test(e)) return !1;
      if (e.prerelease.length && !n.includePrerelease) {
        for (let r = 0; r < t.length; r++)
          if (
            (Ae(t[r].semver),
            t[r].semver !== pd.ANY && t[r].semver.prerelease.length > 0)
          ) {
            let i = t[r].semver;
            if (
              i.major === e.major &&
              i.minor === e.minor &&
              i.patch === e.patch
            )
              return !0;
          }
        return !1;
      }
      return !0;
    };
});
var Xy = x((JS, Gy) => {
  var pD = hd(),
    gD = (t, e, n) => {
      try {
        e = new pD(e, n);
      } catch {
        return !1;
      }
      return e.test(t);
    };
  Gy.exports = gD;
});
var Qy = x((Xt) => {
  "use strict";
  var mD =
      (Xt && Xt.__createBinding) ||
      (Object.create
        ? function (t, e, n, r) {
            r === void 0 && (r = n);
            var i = Object.getOwnPropertyDescriptor(e, n);
            (!i ||
              ("get" in i ? !e.__esModule : i.writable || i.configurable)) &&
              (i = {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              }),
              Object.defineProperty(t, r, i);
          }
        : function (t, e, n, r) {
            r === void 0 && (r = n), (t[r] = e[n]);
          }),
    gd =
      (Xt && Xt.__exportStar) ||
      function (t, e) {
        for (var n in t)
          n !== "default" &&
            !Object.prototype.hasOwnProperty.call(e, n) &&
            mD(e, t, n);
      };
  Object.defineProperty(Xt, "__esModule", { value: !0 });
  Xt.DiagnosticPullMode = Xt.vsdiag = void 0;
  gd(re(), Xt);
  gd(ye(), Xt);
  var Jy = Cu();
  Object.defineProperty(Xt, "vsdiag", {
    enumerable: !0,
    get: function () {
      return Jy.vsdiag;
    },
  });
  Object.defineProperty(Xt, "DiagnosticPullMode", {
    enumerable: !0,
    get: function () {
      return Jy.DiagnosticPullMode;
    },
  });
  gd(rd(), Xt);
});
var tv = x(($t) => {
  "use strict";
  var yD =
      ($t && $t.__createBinding) ||
      (Object.create
        ? function (t, e, n, r) {
            r === void 0 && (r = n);
            var i = Object.getOwnPropertyDescriptor(e, n);
            (!i ||
              ("get" in i ? !e.__esModule : i.writable || i.configurable)) &&
              (i = {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              }),
              Object.defineProperty(t, r, i);
          }
        : function (t, e, n, r) {
            r === void 0 && (r = n), (t[r] = e[n]);
          }),
    ev =
      ($t && $t.__exportStar) ||
      function (t, e) {
        for (var n in t)
          n !== "default" &&
            !Object.prototype.hasOwnProperty.call(e, n) &&
            yD(e, t, n);
      };
  Object.defineProperty($t, "__esModule", { value: !0 });
  $t.SettingMonitor = $t.LanguageClient = $t.TransportKind = void 0;
  var Vn = require("child_process"),
    md = require("fs"),
    yd = require("path"),
    mr = require("vscode"),
    Ue = Yt(),
    Yy = rd(),
    vD = Xm(),
    Be = id(),
    bD = dy(),
    _D = Xy();
  ev(id(), $t);
  ev(Qy(), $t);
  var Zy = "^1.82.0",
    Ve;
  (function (t) {
    (t[(t.stdio = 0)] = "stdio"),
      (t[(t.ipc = 1)] = "ipc"),
      (t[(t.pipe = 2)] = "pipe"),
      (t[(t.socket = 3)] = "socket");
  })(Ve || ($t.TransportKind = Ve = {}));
  var gr;
  (function (t) {
    function e(n) {
      let r = n;
      return r && r.kind === Ve.socket && Ue.number(r.port);
    }
    t.isSocket = e;
  })(gr || (gr = {}));
  var vd;
  (function (t) {
    function e(n) {
      return Ue.string(n.command);
    }
    t.is = e;
  })(vd || (vd = {}));
  var bd;
  (function (t) {
    function e(n) {
      return Ue.string(n.module);
    }
    t.is = e;
  })(bd || (bd = {}));
  var _d;
  (function (t) {
    function e(n) {
      let r = n;
      return r && r.writer !== void 0 && r.reader !== void 0;
    }
    t.is = e;
  })(_d || (_d = {}));
  var wd;
  (function (t) {
    function e(n) {
      let r = n;
      return r && r.process !== void 0 && typeof r.detached == "boolean";
    }
    t.is = e;
  })(wd || (wd = {}));
  var Cd = class extends Yy.BaseLanguageClient {
    constructor(e, n, r, i, s) {
      let o, a, u, h, p;
      Ue.string(n)
        ? ((o = e), (a = n), (u = r), (h = i), (p = !!s))
        : ((o = e.toLowerCase()), (a = e), (u = n), (h = r), (p = i)),
        p === void 0 && (p = !1),
        super(o, a, h),
        (this._serverOptions = u),
        (this._forceDebug = p),
        (this._isInDebugMode = p);
      try {
        this.checkVersion();
      } catch (v) {
        throw (
          (Ue.string(v.message) && this.outputChannel.appendLine(v.message), v)
        );
      }
    }
    checkVersion() {
      let e = bD(mr.version);
      if (!e)
        throw new Error(
          `No valid VS Code version detected. Version string is: ${mr.version}`
        );
      if (
        (e.prerelease && e.prerelease.length > 0 && (e.prerelease = []),
        !_D(e, Zy))
      )
        throw new Error(
          `The language client requires VS Code version ${Zy} but received version ${mr.version}`
        );
    }
    get isInDebugMode() {
      return this._isInDebugMode;
    }
    async restart() {
      await this.stop(),
        this.isInDebugMode
          ? (await new Promise((e) => setTimeout(e, 1e3)), await this.start())
          : await this.start();
    }
    stop(e = 2e3) {
      return super.stop(e).finally(() => {
        if (this._serverProcess) {
          let n = this._serverProcess;
          (this._serverProcess = void 0),
            (this._isDetached === void 0 || !this._isDetached) &&
              this.checkProcessDied(n),
            (this._isDetached = void 0);
        }
      });
    }
    checkProcessDied(e) {
      !e ||
        e.pid === void 0 ||
        setTimeout(() => {
          try {
            e.pid !== void 0 && (process.kill(e.pid, 0), (0, vD.terminate)(e));
          } catch {}
        }, 2e3);
    }
    handleConnectionClosed() {
      return (this._serverProcess = void 0), super.handleConnectionClosed();
    }
    fillInitializeParams(e) {
      super.fillInitializeParams(e),
        e.processId === null && (e.processId = process.pid);
    }
    createMessageTransports(e) {
      function n(p, v) {
        if (!p && !v) return;
        let m = Object.create(null);
        return (
          Object.keys(process.env).forEach((R) => (m[R] = process.env[R])),
          v && ((m.ELECTRON_RUN_AS_NODE = "1"), (m.ELECTRON_NO_ASAR = "1")),
          p && Object.keys(p).forEach((R) => (m[R] = p[R])),
          m
        );
      }
      let r = ["--debug=", "--debug-brk=", "--inspect=", "--inspect-brk="],
        i = ["--debug", "--debug-brk", "--inspect", "--inspect-brk"];
      function s() {
        let p = process.execArgv;
        return p
          ? p.some(
              (v) => r.some((m) => v.startsWith(m)) || i.some((m) => v === m)
            )
          : !1;
      }
      function o(p) {
        if (p.stdin === null || p.stdout === null || p.stderr === null)
          throw new Error("Process created without stdio streams");
      }
      let a = this._serverOptions;
      if (Ue.func(a))
        return a().then((p) => {
          if (Yy.MessageTransports.is(p))
            return (this._isDetached = !!p.detached), p;
          if (_d.is(p))
            return (
              (this._isDetached = !!p.detached),
              {
                reader: new Be.StreamMessageReader(p.reader),
                writer: new Be.StreamMessageWriter(p.writer),
              }
            );
          {
            let v;
            return (
              wd.is(p)
                ? ((v = p.process), (this._isDetached = p.detached))
                : ((v = p), (this._isDetached = !1)),
              v.stderr.on("data", (m) =>
                this.outputChannel.append(Ue.string(m) ? m : m.toString(e))
              ),
              {
                reader: new Be.StreamMessageReader(v.stdout),
                writer: new Be.StreamMessageWriter(v.stdin),
              }
            );
          }
        });
      let u,
        h = a;
      return (
        h.run || h.debug
          ? this._forceDebug || s()
            ? ((u = h.debug), (this._isInDebugMode = !0))
            : ((u = h.run), (this._isInDebugMode = !1))
          : (u = a),
        this._getServerWorkingDir(u.options)
          .then((p) => {
            if (bd.is(u) && u.module) {
              let v = u,
                m = v.transport || Ve.stdio;
              if (v.runtime) {
                let R = [],
                  y = v.options ?? Object.create(null);
                y.execArgv && y.execArgv.forEach((j) => R.push(j)),
                  R.push(v.module),
                  v.args && v.args.forEach((j) => R.push(j));
                let P = Object.create(null);
                (P.cwd = p), (P.env = n(y.env, !1));
                let q = this._getRuntimePath(v.runtime, p),
                  A;
                if (
                  (m === Ve.ipc
                    ? ((P.stdio = [null, null, null, "ipc"]),
                      R.push("--node-ipc"))
                    : m === Ve.stdio
                    ? R.push("--stdio")
                    : m === Ve.pipe
                    ? ((A = (0, Be.generateRandomPipeName)()),
                      R.push(`--pipe=${A}`))
                    : gr.isSocket(m) && R.push(`--socket=${m.port}`),
                  R.push(`--clientProcessId=${process.pid.toString()}`),
                  m === Ve.ipc || m === Ve.stdio)
                ) {
                  let j = Vn.spawn(q, R, P);
                  return !j || !j.pid
                    ? bi(j, `Launching server using runtime ${q} failed.`)
                    : ((this._serverProcess = j),
                      j.stderr.on("data", (E) =>
                        this.outputChannel.append(
                          Ue.string(E) ? E : E.toString(e)
                        )
                      ),
                      m === Ve.ipc
                        ? (j.stdout.on("data", (E) =>
                            this.outputChannel.append(
                              Ue.string(E) ? E : E.toString(e)
                            )
                          ),
                          Promise.resolve({
                            reader: new Be.IPCMessageReader(j),
                            writer: new Be.IPCMessageWriter(j),
                          }))
                        : Promise.resolve({
                            reader: new Be.StreamMessageReader(j.stdout),
                            writer: new Be.StreamMessageWriter(j.stdin),
                          }));
                } else {
                  if (m === Ve.pipe)
                    return (0, Be.createClientPipeTransport)(A).then((j) => {
                      let E = Vn.spawn(q, R, P);
                      return !E || !E.pid
                        ? bi(E, `Launching server using runtime ${q} failed.`)
                        : ((this._serverProcess = E),
                          E.stderr.on("data", (I) =>
                            this.outputChannel.append(
                              Ue.string(I) ? I : I.toString(e)
                            )
                          ),
                          E.stdout.on("data", (I) =>
                            this.outputChannel.append(
                              Ue.string(I) ? I : I.toString(e)
                            )
                          ),
                          j
                            .onConnected()
                            .then((I) => ({ reader: I[0], writer: I[1] })));
                    });
                  if (gr.isSocket(m))
                    return (0, Be.createClientSocketTransport)(m.port).then(
                      (j) => {
                        let E = Vn.spawn(q, R, P);
                        return !E || !E.pid
                          ? bi(E, `Launching server using runtime ${q} failed.`)
                          : ((this._serverProcess = E),
                            E.stderr.on("data", (I) =>
                              this.outputChannel.append(
                                Ue.string(I) ? I : I.toString(e)
                              )
                            ),
                            E.stdout.on("data", (I) =>
                              this.outputChannel.append(
                                Ue.string(I) ? I : I.toString(e)
                              )
                            ),
                            j
                              .onConnected()
                              .then((I) => ({ reader: I[0], writer: I[1] })));
                      }
                    );
                }
              } else {
                let R;
                return new Promise((y, P) => {
                  let q = (v.args && v.args.slice()) ?? [];
                  m === Ve.ipc
                    ? q.push("--node-ipc")
                    : m === Ve.stdio
                    ? q.push("--stdio")
                    : m === Ve.pipe
                    ? ((R = (0, Be.generateRandomPipeName)()),
                      q.push(`--pipe=${R}`))
                    : gr.isSocket(m) && q.push(`--socket=${m.port}`),
                    q.push(`--clientProcessId=${process.pid.toString()}`);
                  let A = v.options ?? Object.create(null);
                  if (
                    ((A.env = n(A.env, !0)),
                    (A.execArgv = A.execArgv || []),
                    (A.cwd = p),
                    (A.silent = !0),
                    m === Ve.ipc || m === Ve.stdio)
                  ) {
                    let j = Vn.fork(v.module, q || [], A);
                    o(j),
                      (this._serverProcess = j),
                      j.stderr.on("data", (E) =>
                        this.outputChannel.append(
                          Ue.string(E) ? E : E.toString(e)
                        )
                      ),
                      m === Ve.ipc
                        ? (j.stdout.on("data", (E) =>
                            this.outputChannel.append(
                              Ue.string(E) ? E : E.toString(e)
                            )
                          ),
                          y({
                            reader: new Be.IPCMessageReader(
                              this._serverProcess
                            ),
                            writer: new Be.IPCMessageWriter(
                              this._serverProcess
                            ),
                          }))
                        : y({
                            reader: new Be.StreamMessageReader(j.stdout),
                            writer: new Be.StreamMessageWriter(j.stdin),
                          });
                  } else
                    m === Ve.pipe
                      ? (0, Be.createClientPipeTransport)(R).then((j) => {
                          let E = Vn.fork(v.module, q || [], A);
                          o(E),
                            (this._serverProcess = E),
                            E.stderr.on("data", (I) =>
                              this.outputChannel.append(
                                Ue.string(I) ? I : I.toString(e)
                              )
                            ),
                            E.stdout.on("data", (I) =>
                              this.outputChannel.append(
                                Ue.string(I) ? I : I.toString(e)
                              )
                            ),
                            j.onConnected().then((I) => {
                              y({ reader: I[0], writer: I[1] });
                            }, P);
                        }, P)
                      : gr.isSocket(m) &&
                        (0, Be.createClientSocketTransport)(m.port).then(
                          (j) => {
                            let E = Vn.fork(v.module, q || [], A);
                            o(E),
                              (this._serverProcess = E),
                              E.stderr.on("data", (I) =>
                                this.outputChannel.append(
                                  Ue.string(I) ? I : I.toString(e)
                                )
                              ),
                              E.stdout.on("data", (I) =>
                                this.outputChannel.append(
                                  Ue.string(I) ? I : I.toString(e)
                                )
                              ),
                              j.onConnected().then((I) => {
                                y({ reader: I[0], writer: I[1] });
                              }, P);
                          },
                          P
                        );
                });
              }
            } else if (vd.is(u) && u.command) {
              let v = u,
                m = u.args !== void 0 ? u.args.slice(0) : [],
                R,
                y = u.transport;
              if (y === Ve.stdio) m.push("--stdio");
              else if (y === Ve.pipe)
                (R = (0, Be.generateRandomPipeName)()), m.push(`--pipe=${R}`);
              else if (gr.isSocket(y)) m.push(`--socket=${y.port}`);
              else if (y === Ve.ipc)
                throw new Error(
                  "Transport kind ipc is not support for command executable"
                );
              let P = Object.assign({}, v.options);
              if (((P.cwd = P.cwd || p), y === void 0 || y === Ve.stdio)) {
                let q = Vn.spawn(v.command, m, P);
                return !q || !q.pid
                  ? bi(q, `Launching server using command ${v.command} failed.`)
                  : (q.stderr.on("data", (A) =>
                      this.outputChannel.append(
                        Ue.string(A) ? A : A.toString(e)
                      )
                    ),
                    (this._serverProcess = q),
                    (this._isDetached = !!P.detached),
                    Promise.resolve({
                      reader: new Be.StreamMessageReader(q.stdout),
                      writer: new Be.StreamMessageWriter(q.stdin),
                    }));
              } else {
                if (y === Ve.pipe)
                  return (0, Be.createClientPipeTransport)(R).then((q) => {
                    let A = Vn.spawn(v.command, m, P);
                    return !A || !A.pid
                      ? bi(
                          A,
                          `Launching server using command ${v.command} failed.`
                        )
                      : ((this._serverProcess = A),
                        (this._isDetached = !!P.detached),
                        A.stderr.on("data", (j) =>
                          this.outputChannel.append(
                            Ue.string(j) ? j : j.toString(e)
                          )
                        ),
                        A.stdout.on("data", (j) =>
                          this.outputChannel.append(
                            Ue.string(j) ? j : j.toString(e)
                          )
                        ),
                        q
                          .onConnected()
                          .then((j) => ({ reader: j[0], writer: j[1] })));
                  });
                if (gr.isSocket(y))
                  return (0, Be.createClientSocketTransport)(y.port).then(
                    (q) => {
                      let A = Vn.spawn(v.command, m, P);
                      return !A || !A.pid
                        ? bi(
                            A,
                            `Launching server using command ${v.command} failed.`
                          )
                        : ((this._serverProcess = A),
                          (this._isDetached = !!P.detached),
                          A.stderr.on("data", (j) =>
                            this.outputChannel.append(
                              Ue.string(j) ? j : j.toString(e)
                            )
                          ),
                          A.stdout.on("data", (j) =>
                            this.outputChannel.append(
                              Ue.string(j) ? j : j.toString(e)
                            )
                          ),
                          q
                            .onConnected()
                            .then((j) => ({ reader: j[0], writer: j[1] })));
                    }
                  );
              }
            }
            return Promise.reject(
              new Error(
                "Unsupported server configuration " + JSON.stringify(a, null, 4)
              )
            );
          })
          .finally(() => {
            this._serverProcess !== void 0 &&
              this._serverProcess.on("exit", (p, v) => {
                p !== null &&
                  this.error(
                    `Server process exited with code ${p}.`,
                    void 0,
                    !1
                  ),
                  v !== null &&
                    this.error(
                      `Server process exited with signal ${v}.`,
                      void 0,
                      !1
                    );
              });
          })
      );
    }
    _getRuntimePath(e, n) {
      if (yd.isAbsolute(e)) return e;
      let r = this._mainGetRootPath();
      if (r !== void 0) {
        let i = yd.join(r, e);
        if (md.existsSync(i)) return i;
      }
      if (n !== void 0) {
        let i = yd.join(n, e);
        if (md.existsSync(i)) return i;
      }
      return e;
    }
    _mainGetRootPath() {
      let e = mr.workspace.workspaceFolders;
      if (!e || e.length === 0) return;
      let n = e[0];
      if (n.uri.scheme === "file") return n.uri.fsPath;
    }
    _getServerWorkingDir(e) {
      let n = e && e.cwd;
      return (
        n ||
          (n = this.clientOptions.workspaceFolder
            ? this.clientOptions.workspaceFolder.uri.fsPath
            : this._mainGetRootPath()),
        n
          ? new Promise((r) => {
              md.lstat(n, (i, s) => {
                r(!i && s.isDirectory() ? n : void 0);
              });
            })
          : Promise.resolve(void 0)
      );
    }
  };
  $t.LanguageClient = Cd;
  var Dd = class {
    constructor(e, n) {
      (this._client = e), (this._setting = n), (this._listeners = []);
    }
    start() {
      return (
        mr.workspace.onDidChangeConfiguration(
          this.onDidChangeConfiguration,
          this,
          this._listeners
        ),
        this.onDidChangeConfiguration(),
        new mr.Disposable(() => {
          this._client.needsStop() && this._client.stop();
        })
      );
    }
    onDidChangeConfiguration() {
      let e = this._setting.indexOf("."),
        n = e >= 0 ? this._setting.substr(0, e) : this._setting,
        r = e >= 0 ? this._setting.substr(e + 1) : void 0,
        i = r
          ? mr.workspace.getConfiguration(n).get(r, !1)
          : mr.workspace.getConfiguration(n);
      i && this._client.needsStart()
        ? this._client
            .start()
            .catch((s) =>
              this._client.error(
                "Start failed after configuration change",
                s,
                "force"
              )
            )
        : !i &&
          this._client.needsStop() &&
          this._client
            .stop()
            .catch((s) =>
              this._client.error(
                "Stop failed after configuration change",
                s,
                "force"
              )
            );
    }
  };
  $t.SettingMonitor = Dd;
  function bi(t, e) {
    return t === null
      ? Promise.reject(e)
      : new Promise((n, r) => {
          t.on("error", (i) => {
            r(`${e} ${i}`);
          }),
            setImmediate(() => r(e));
        });
  }
});
var rv = x((ZS, nv) => {
  "use strict";
  nv.exports = tv();
});
var FD = {};
vv(FD, { activate: () => OD, deactivate: () => ID });
module.exports = bv(FD);
var te = require("vscode"),
  Xo = Zo(require("child_process")),
  lv = Zo(require("path")),
  dv = Zo(rv());
function Vo(t, e = !1) {
  let n = t.length,
    r = 0,
    i = "",
    s = 0,
    o = 16,
    a = 0,
    u = 0,
    h = 0,
    p = 0,
    v = 0;
  function m(E, I) {
    let N = 0,
      Q = 0;
    for (; N < E || !I; ) {
      let X = t.charCodeAt(r);
      if (X >= 48 && X <= 57) Q = Q * 16 + X - 48;
      else if (X >= 65 && X <= 70) Q = Q * 16 + X - 65 + 10;
      else if (X >= 97 && X <= 102) Q = Q * 16 + X - 97 + 10;
      else break;
      r++, N++;
    }
    return N < E && (Q = -1), Q;
  }
  function R(E) {
    (r = E), (i = ""), (s = 0), (o = 16), (v = 0);
  }
  function y() {
    let E = r;
    if (t.charCodeAt(r) === 48) r++;
    else for (r++; r < t.length && _i(t.charCodeAt(r)); ) r++;
    if (r < t.length && t.charCodeAt(r) === 46)
      if ((r++, r < t.length && _i(t.charCodeAt(r))))
        for (r++; r < t.length && _i(t.charCodeAt(r)); ) r++;
      else return (v = 3), t.substring(E, r);
    let I = r;
    if (r < t.length && (t.charCodeAt(r) === 69 || t.charCodeAt(r) === 101))
      if (
        (r++,
        ((r < t.length && t.charCodeAt(r) === 43) || t.charCodeAt(r) === 45) &&
          r++,
        r < t.length && _i(t.charCodeAt(r)))
      ) {
        for (r++; r < t.length && _i(t.charCodeAt(r)); ) r++;
        I = r;
      } else v = 3;
    return t.substring(E, I);
  }
  function P() {
    let E = "",
      I = r;
    for (;;) {
      if (r >= n) {
        (E += t.substring(I, r)), (v = 2);
        break;
      }
      let N = t.charCodeAt(r);
      if (N === 34) {
        (E += t.substring(I, r)), r++;
        break;
      }
      if (N === 92) {
        if (((E += t.substring(I, r)), r++, r >= n)) {
          v = 2;
          break;
        }
        switch (t.charCodeAt(r++)) {
          case 34:
            E += '"';
            break;
          case 92:
            E += "\\";
            break;
          case 47:
            E += "/";
            break;
          case 98:
            E += "\b";
            break;
          case 102:
            E += "\f";
            break;
          case 110:
            E += `
`;
            break;
          case 114:
            E += "\r";
            break;
          case 116:
            E += "	";
            break;
          case 117:
            let X = m(4, !0);
            X >= 0 ? (E += String.fromCharCode(X)) : (v = 4);
            break;
          default:
            v = 5;
        }
        I = r;
        continue;
      }
      if (N >= 0 && N <= 31)
        if (rs(N)) {
          (E += t.substring(I, r)), (v = 2);
          break;
        } else v = 6;
      r++;
    }
    return E;
  }
  function q() {
    if (((i = ""), (v = 0), (s = r), (u = a), (p = h), r >= n))
      return (s = n), (o = 17);
    let E = t.charCodeAt(r);
    if (Rd(E)) {
      do r++, (i += String.fromCharCode(E)), (E = t.charCodeAt(r));
      while (Rd(E));
      return (o = 15);
    }
    if (rs(E))
      return (
        r++,
        (i += String.fromCharCode(E)),
        E === 13 &&
          t.charCodeAt(r) === 10 &&
          (r++,
          (i += `
`)),
        a++,
        (h = r),
        (o = 14)
      );
    switch (E) {
      case 123:
        return r++, (o = 1);
      case 125:
        return r++, (o = 2);
      case 91:
        return r++, (o = 3);
      case 93:
        return r++, (o = 4);
      case 58:
        return r++, (o = 6);
      case 44:
        return r++, (o = 5);
      case 34:
        return r++, (i = P()), (o = 10);
      case 47:
        let I = r - 1;
        if (t.charCodeAt(r + 1) === 47) {
          for (r += 2; r < n && !rs(t.charCodeAt(r)); ) r++;
          return (i = t.substring(I, r)), (o = 12);
        }
        if (t.charCodeAt(r + 1) === 42) {
          r += 2;
          let N = n - 1,
            Q = !1;
          for (; r < N; ) {
            let X = t.charCodeAt(r);
            if (X === 42 && t.charCodeAt(r + 1) === 47) {
              (r += 2), (Q = !0);
              break;
            }
            r++,
              rs(X) &&
                (X === 13 && t.charCodeAt(r) === 10 && r++, a++, (h = r));
          }
          return Q || (r++, (v = 1)), (i = t.substring(I, r)), (o = 13);
        }
        return (i += String.fromCharCode(E)), r++, (o = 16);
      case 45:
        if (
          ((i += String.fromCharCode(E)), r++, r === n || !_i(t.charCodeAt(r)))
        )
          return (o = 16);
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return (i += y()), (o = 11);
      default:
        for (; r < n && A(E); ) r++, (E = t.charCodeAt(r));
        if (s !== r) {
          switch (((i = t.substring(s, r)), i)) {
            case "true":
              return (o = 8);
            case "false":
              return (o = 9);
            case "null":
              return (o = 7);
          }
          return (o = 16);
        }
        return (i += String.fromCharCode(E)), r++, (o = 16);
    }
  }
  function A(E) {
    if (Rd(E) || rs(E)) return !1;
    switch (E) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return !1;
    }
    return !0;
  }
  function j() {
    let E;
    do E = q();
    while (E >= 12 && E <= 15);
    return E;
  }
  return {
    setPosition: R,
    getPosition: () => r,
    scan: e ? j : q,
    getToken: () => o,
    getTokenValue: () => i,
    getTokenOffset: () => s,
    getTokenLength: () => r - s,
    getTokenStartLine: () => u,
    getTokenStartCharacter: () => s - p,
    getTokenError: () => v,
  };
}
function Rd(t) {
  return t === 32 || t === 9;
}
function rs(t) {
  return t === 10 || t === 13;
}
function _i(t) {
  return t >= 48 && t <= 57;
}
var iv;
(function (t) {
  (t[(t.lineFeed = 10)] = "lineFeed"),
    (t[(t.carriageReturn = 13)] = "carriageReturn"),
    (t[(t.space = 32)] = "space"),
    (t[(t._0 = 48)] = "_0"),
    (t[(t._1 = 49)] = "_1"),
    (t[(t._2 = 50)] = "_2"),
    (t[(t._3 = 51)] = "_3"),
    (t[(t._4 = 52)] = "_4"),
    (t[(t._5 = 53)] = "_5"),
    (t[(t._6 = 54)] = "_6"),
    (t[(t._7 = 55)] = "_7"),
    (t[(t._8 = 56)] = "_8"),
    (t[(t._9 = 57)] = "_9"),
    (t[(t.a = 97)] = "a"),
    (t[(t.b = 98)] = "b"),
    (t[(t.c = 99)] = "c"),
    (t[(t.d = 100)] = "d"),
    (t[(t.e = 101)] = "e"),
    (t[(t.f = 102)] = "f"),
    (t[(t.g = 103)] = "g"),
    (t[(t.h = 104)] = "h"),
    (t[(t.i = 105)] = "i"),
    (t[(t.j = 106)] = "j"),
    (t[(t.k = 107)] = "k"),
    (t[(t.l = 108)] = "l"),
    (t[(t.m = 109)] = "m"),
    (t[(t.n = 110)] = "n"),
    (t[(t.o = 111)] = "o"),
    (t[(t.p = 112)] = "p"),
    (t[(t.q = 113)] = "q"),
    (t[(t.r = 114)] = "r"),
    (t[(t.s = 115)] = "s"),
    (t[(t.t = 116)] = "t"),
    (t[(t.u = 117)] = "u"),
    (t[(t.v = 118)] = "v"),
    (t[(t.w = 119)] = "w"),
    (t[(t.x = 120)] = "x"),
    (t[(t.y = 121)] = "y"),
    (t[(t.z = 122)] = "z"),
    (t[(t.A = 65)] = "A"),
    (t[(t.B = 66)] = "B"),
    (t[(t.C = 67)] = "C"),
    (t[(t.D = 68)] = "D"),
    (t[(t.E = 69)] = "E"),
    (t[(t.F = 70)] = "F"),
    (t[(t.G = 71)] = "G"),
    (t[(t.H = 72)] = "H"),
    (t[(t.I = 73)] = "I"),
    (t[(t.J = 74)] = "J"),
    (t[(t.K = 75)] = "K"),
    (t[(t.L = 76)] = "L"),
    (t[(t.M = 77)] = "M"),
    (t[(t.N = 78)] = "N"),
    (t[(t.O = 79)] = "O"),
    (t[(t.P = 80)] = "P"),
    (t[(t.Q = 81)] = "Q"),
    (t[(t.R = 82)] = "R"),
    (t[(t.S = 83)] = "S"),
    (t[(t.T = 84)] = "T"),
    (t[(t.U = 85)] = "U"),
    (t[(t.V = 86)] = "V"),
    (t[(t.W = 87)] = "W"),
    (t[(t.X = 88)] = "X"),
    (t[(t.Y = 89)] = "Y"),
    (t[(t.Z = 90)] = "Z"),
    (t[(t.asterisk = 42)] = "asterisk"),
    (t[(t.backslash = 92)] = "backslash"),
    (t[(t.closeBrace = 125)] = "closeBrace"),
    (t[(t.closeBracket = 93)] = "closeBracket"),
    (t[(t.colon = 58)] = "colon"),
    (t[(t.comma = 44)] = "comma"),
    (t[(t.dot = 46)] = "dot"),
    (t[(t.doubleQuote = 34)] = "doubleQuote"),
    (t[(t.minus = 45)] = "minus"),
    (t[(t.openBrace = 123)] = "openBrace"),
    (t[(t.openBracket = 91)] = "openBracket"),
    (t[(t.plus = 43)] = "plus"),
    (t[(t.slash = 47)] = "slash"),
    (t[(t.formFeed = 12)] = "formFeed"),
    (t[(t.tab = 9)] = "tab");
})(iv || (iv = {}));
var Sd;
(function (t) {
  t.DEFAULT = { allowTrailingComma: !1 };
})(Sd || (Sd = {}));
function sv(t, e, n = Sd.DEFAULT) {
  let r = Vo(t, !1),
    i = [];
  function s(Y) {
    return Y
      ? () =>
          Y(
            r.getTokenOffset(),
            r.getTokenLength(),
            r.getTokenStartLine(),
            r.getTokenStartCharacter()
          )
      : () => !0;
  }
  function o(Y) {
    return Y
      ? () =>
          Y(
            r.getTokenOffset(),
            r.getTokenLength(),
            r.getTokenStartLine(),
            r.getTokenStartCharacter(),
            () => i.slice()
          )
      : () => !0;
  }
  function a(Y) {
    return Y
      ? (_e) =>
          Y(
            _e,
            r.getTokenOffset(),
            r.getTokenLength(),
            r.getTokenStartLine(),
            r.getTokenStartCharacter()
          )
      : () => !0;
  }
  function u(Y) {
    return Y
      ? (_e) =>
          Y(
            _e,
            r.getTokenOffset(),
            r.getTokenLength(),
            r.getTokenStartLine(),
            r.getTokenStartCharacter(),
            () => i.slice()
          )
      : () => !0;
  }
  let h = o(e.onObjectBegin),
    p = u(e.onObjectProperty),
    v = s(e.onObjectEnd),
    m = o(e.onArrayBegin),
    R = s(e.onArrayEnd),
    y = u(e.onLiteralValue),
    P = a(e.onSeparator),
    q = s(e.onComment),
    A = a(e.onError),
    j = n && n.disallowComments,
    E = n && n.allowTrailingComma;
  function I() {
    for (;;) {
      let Y = r.scan();
      switch (r.getTokenError()) {
        case 4:
          N(14);
          break;
        case 5:
          N(15);
          break;
        case 3:
          N(13);
          break;
        case 1:
          j || N(11);
          break;
        case 2:
          N(12);
          break;
        case 6:
          N(16);
          break;
      }
      switch (Y) {
        case 12:
        case 13:
          j ? N(10) : q();
          break;
        case 16:
          N(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return Y;
      }
    }
  }
  function N(Y, _e = [], yt = []) {
    if ((A(Y), _e.length + yt.length > 0)) {
      let st = r.getToken();
      for (; st !== 17; ) {
        if (_e.indexOf(st) !== -1) {
          I();
          break;
        } else if (yt.indexOf(st) !== -1) break;
        st = I();
      }
    }
  }
  function Q(Y) {
    let _e = r.getTokenValue();
    return Y ? y(_e) : (p(_e), i.push(_e)), I(), !0;
  }
  function X() {
    switch (r.getToken()) {
      case 11:
        let Y = r.getTokenValue(),
          _e = Number(Y);
        isNaN(_e) && (N(2), (_e = 0)), y(_e);
        break;
      case 7:
        y(null);
        break;
      case 8:
        y(!0);
        break;
      case 9:
        y(!1);
        break;
      default:
        return !1;
    }
    return I(), !0;
  }
  function Te() {
    return r.getToken() !== 10
      ? (N(3, [], [2, 5]), !1)
      : (Q(!1),
        r.getToken() === 6
          ? (P(":"), I(), et() || N(4, [], [2, 5]))
          : N(5, [], [2, 5]),
        i.pop(),
        !0);
  }
  function We() {
    h(), I();
    let Y = !1;
    for (; r.getToken() !== 2 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if ((Y || N(4, [], []), P(","), I(), r.getToken() === 2 && E)) break;
      } else Y && N(6, [], []);
      Te() || N(4, [], [2, 5]), (Y = !0);
    }
    return v(), r.getToken() !== 2 ? N(7, [2], []) : I(), !0;
  }
  function Ze() {
    m(), I();
    let Y = !0,
      _e = !1;
    for (; r.getToken() !== 4 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if ((_e || N(4, [], []), P(","), I(), r.getToken() === 4 && E)) break;
      } else _e && N(6, [], []);
      Y ? (i.push(0), (Y = !1)) : i[i.length - 1]++,
        et() || N(4, [], [4, 5]),
        (_e = !0);
    }
    return R(), Y || i.pop(), r.getToken() !== 4 ? N(8, [4], []) : I(), !0;
  }
  function et() {
    switch (r.getToken()) {
      case 3:
        return Ze();
      case 1:
        return We();
      case 10:
        return Q(!0);
      default:
        return X();
    }
  }
  return (
    I(),
    r.getToken() === 17
      ? n.allowEmptyContent
        ? !0
        : (N(4, [], []), !1)
      : et()
      ? (r.getToken() !== 17 && N(9, [], []), !0)
      : (N(4, [], []), !1)
  );
}
var ov;
(function (t) {
  (t[(t.None = 0)] = "None"),
    (t[(t.UnexpectedEndOfComment = 1)] = "UnexpectedEndOfComment"),
    (t[(t.UnexpectedEndOfString = 2)] = "UnexpectedEndOfString"),
    (t[(t.UnexpectedEndOfNumber = 3)] = "UnexpectedEndOfNumber"),
    (t[(t.InvalidUnicode = 4)] = "InvalidUnicode"),
    (t[(t.InvalidEscapeCharacter = 5)] = "InvalidEscapeCharacter"),
    (t[(t.InvalidCharacter = 6)] = "InvalidCharacter");
})(ov || (ov = {}));
var av;
(function (t) {
  (t[(t.OpenBraceToken = 1)] = "OpenBraceToken"),
    (t[(t.CloseBraceToken = 2)] = "CloseBraceToken"),
    (t[(t.OpenBracketToken = 3)] = "OpenBracketToken"),
    (t[(t.CloseBracketToken = 4)] = "CloseBracketToken"),
    (t[(t.CommaToken = 5)] = "CommaToken"),
    (t[(t.ColonToken = 6)] = "ColonToken"),
    (t[(t.NullKeyword = 7)] = "NullKeyword"),
    (t[(t.TrueKeyword = 8)] = "TrueKeyword"),
    (t[(t.FalseKeyword = 9)] = "FalseKeyword"),
    (t[(t.StringLiteral = 10)] = "StringLiteral"),
    (t[(t.NumericLiteral = 11)] = "NumericLiteral"),
    (t[(t.LineCommentTrivia = 12)] = "LineCommentTrivia"),
    (t[(t.BlockCommentTrivia = 13)] = "BlockCommentTrivia"),
    (t[(t.LineBreakTrivia = 14)] = "LineBreakTrivia"),
    (t[(t.Trivia = 15)] = "Trivia"),
    (t[(t.Unknown = 16)] = "Unknown"),
    (t[(t.EOF = 17)] = "EOF");
})(av || (av = {}));
var uv = sv;
var cv;
(function (t) {
  (t[(t.InvalidSymbol = 1)] = "InvalidSymbol"),
    (t[(t.InvalidNumberFormat = 2)] = "InvalidNumberFormat"),
    (t[(t.PropertyNameExpected = 3)] = "PropertyNameExpected"),
    (t[(t.ValueExpected = 4)] = "ValueExpected"),
    (t[(t.ColonExpected = 5)] = "ColonExpected"),
    (t[(t.CommaExpected = 6)] = "CommaExpected"),
    (t[(t.CloseBraceExpected = 7)] = "CloseBraceExpected"),
    (t[(t.CloseBracketExpected = 8)] = "CloseBracketExpected"),
    (t[(t.EndOfFileExpected = 9)] = "EndOfFileExpected"),
    (t[(t.InvalidCommentToken = 10)] = "InvalidCommentToken"),
    (t[(t.UnexpectedEndOfComment = 11)] = "UnexpectedEndOfComment"),
    (t[(t.UnexpectedEndOfString = 12)] = "UnexpectedEndOfString"),
    (t[(t.UnexpectedEndOfNumber = 13)] = "UnexpectedEndOfNumber"),
    (t[(t.InvalidUnicode = 14)] = "InvalidUnicode"),
    (t[(t.InvalidEscapeCharacter = 15)] = "InvalidEscapeCharacter"),
    (t[(t.InvalidCharacter = 16)] = "InvalidCharacter");
})(cv || (cv = {}));
var Qo,
  Jo,
  ED = (t, e) => {
    let n;
    return (r) => {
      clearTimeout(n),
        (n = setTimeout(() => {
          t(r);
        }, e));
    };
  },
  CT = te.window.createTextEditorDecorationType({ color: "#04f1f9" });
function kD(t) {
  let n = Math.sin(0.5 * t + (4 * Math.PI) / 3) * 127 + 128,
    r = 45,
    i = Math.sin(0.5 * t) * 127 + 128;
  return `#${Math.round(n).toString(16).padStart(2, "0")}${Math.round(r)
    .toString(16)
    .padStart(2, "0")}${Math.round(i).toString(16).padStart(2, "0")}`;
}
var qD = [...Array(10).keys()]
    .map(kD)
    .map((t) => te.window.createTextEditorDecorationType({ color: t })),
  xD = ED(Pd, 1e3);
function OD(t) {
  var s;
  let e = {
    cwd: (s = te.workspace.workspaceFolders) == null ? void 0 : s[0].uri.path,
  };
  t.subscriptions.push(
    te.commands.registerCommand("turbo.daemon.start", () => {
      Xo.exec("source ~/.nvm/nvm.sh; turbo daemon start", e, (o) => {
        o
          ? o.message.includes("command not found")
            ? Td()
            : te.window.showErrorMessage(o.message)
          : (Go(!0), te.window.showInformationMessage("Turbo daemon started"));
      });
    })
  ),
    t.subscriptions.push(
      te.commands.registerCommand("turbo.daemon.stop", () => {
        Xo.exec("source ~/.nvm/nvm.sh; turbo daemon stop", e, (o) => {
          o
            ? o.message.includes("command not found")
              ? Td()
              : te.window.showErrorMessage(o.message)
            : (Go(!1),
              te.window.showInformationMessage("Turbo daemon stopped"));
        });
      })
    ),
    t.subscriptions.push(
      te.commands.registerCommand("turbo.daemon.status", () => {
        Xo.exec("source ~/.nvm/nvm.sh; turbo daemon status", e, (o) => {
          o
            ? o.message.includes("command not found")
              ? Td()
              : (te.window.showErrorMessage(o.message), Go(!1))
            : (Go(!0),
              te.window.showInformationMessage("Turbo daemon is running"));
        });
      })
    ),
    t.subscriptions.push(
      te.commands.registerCommand("turbo.run", (o) => {
        let a = te.window.createTerminal({
          name: `${o}`,
          isTransient: !0,
          iconPath: te.Uri.joinPath(t.extensionUri, "resources", "icon.svg"),
        });
        a.sendText(`turbo run ${o}`), a.show();
      })
    ),
    t.subscriptions.push(
      te.commands.registerCommand("turbo.codemod", (o) => {
        let a = te.window.createTerminal({
          name: "Turbo Codemod",
          isTransient: !0,
          iconPath: te.Uri.joinPath(t.extensionUri, "resources", "icon.svg"),
        });
        a.sendText(`npx --yes @turbo/codemod ${o}`), a.show();
      })
    ),
    t.subscriptions.push(
      te.commands.registerCommand("turbo.install", (o) => {
        let a = te.window.createTerminal({
          name: "Install Turbo",
          isTransient: !0,
          iconPath: te.Uri.joinPath(t.extensionUri, "resources", "icon.svg"),
        });
        return (
          a.sendText("npm i -g turbo && exit"),
          a.show(),
          new Promise((u) => {
            let h = te.window.onDidCloseTerminal((p) => {
              var v;
              p.name === "Install Turbo" &&
                (h.dispose(), u((v = p.exitStatus) == null ? void 0 : v.code));
            });
          })
        );
      })
    ),
    (Jo = te.window.createStatusBarItem(te.StatusBarAlignment.Left, 100)),
    te.commands.executeCommand("turbo.daemon.start"),
    t.subscriptions.push(
      te.window.onDidChangeActiveTextEditor((o) => Pd(o), null, t.subscriptions)
    ),
    t.subscriptions.push(
      te.workspace.onDidChangeTextDocument(
        (o) => {
          te.window.activeTextEditor &&
            o.document === te.window.activeTextEditor.document &&
            xD(te.window.activeTextEditor);
        },
        null,
        t.subscriptions
      )
    ),
    Pd(te.window.activeTextEditor);
  let n = te.Uri.joinPath(
      t.extensionUri,
      "out",
      `turborepo-lsp-${process.platform}-${process.arch}`
    ).fsPath,
    r = { run: { command: n }, debug: { command: n } },
    i = {
      documentSelector: [
        { scheme: "file", pattern: "**/turbo.json" },
        { scheme: "file", pattern: "**/package.json" },
      ],
    };
  (Qo = new dv.LanguageClient("turboLSP", "Turborepo Language Server", r, i)),
    Qo.start();
}
function ID() {
  if (!!Qo) return Qo.stop();
}
function Go(t) {
  (Jo.command = t ? "turbo.daemon.stop" : "turbo.daemon.start"),
    (Jo.text = t ? "Turbo Running" : "Turbo Stopped"),
    Jo.show();
}
function Pd(t) {
  if (!t || !lv.basename(t.document.fileName).endsWith("turbo.json")) return;
  let e = !1,
    n = -1,
    r = [];
  uv(t.document.getText(), {
    onObjectProperty: (i, s, o) => {
      if (i === "pipeline") {
        e = !0;
        for (let a = 1; a < 9; a++) {
          let u = a + s;
          t.setDecorations(qD[a], [
            new te.Range(
              t.document.positionAt(u),
              t.document.positionAt(u + 1)
            ),
          ]);
        }
      }
      e &&
        n === 0 &&
        r.push(
          new te.Range(t.document.positionAt(s), t.document.positionAt(s + o))
        );
    },
    onObjectBegin: (i, s) => {
      e && n === -1 ? (n = 0) : n !== -1 && (n += 1);
    },
    onObjectEnd: (i, s) => {
      n === 0 ? (n = -1) : n !== -1 && (n -= 1);
    },
  });
}
function Td() {
  return Od(this, null, function* () {
    (yield te.window.showErrorMessage(
      "Turbo CLI not found. Please install Turbo CLI to use this extension.",
      "Install Now"
    )) === "Install Now" &&
      ((yield te.commands.executeCommand("turbo.install")) === 0
        ? (te.window.showInformationMessage("Turbo CLI installed"),
          yield te.commands.executeCommand("turbo.daemon.start"))
        : (yield te.window.showErrorMessage(
            "Unable to install Turbo CLI. Please install manually.",
            "Open Docs"
          )) === "Open Docs" &&
          te.env.openExternal(
            te.Uri.parse("https://turbo.build/repo/docs/installing")
          ));
  });
}
0 && (module.exports = { activate, deactivate });

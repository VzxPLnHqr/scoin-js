'use strict';
import * as $i_$0040noble$002fhashes$002fhmac from "@noble/hashes/hmac";
import * as $i_$0040noble$002fhashes$002fsha256 from "@noble/hashes/sha256";
import * as $i_$0040noble$002fsecp256k1 from "@noble/secp256k1";
var $linkingInfo = Object.freeze({
  "esVersion": 6,
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.12.0",
  "fileLevelThis": this
});
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)))
  };
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = {};
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, {
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      });
      i = ((i + 1) | 0)
    };
    return descriptors
  })
})());
var $L0;
function $propertyName(arg0) {
  for (var prop in arg0) {
    return prop
  }
}
function $Char(c) {
  this.c = c
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c)
});
function $valueDescription(arg0) {
  return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))))
}
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException((($valueDescription(arg0) + " cannot be cast to ") + arg1)))
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1)
  };
  $throwClassCastException(arg0, arg1)
}
function $throwArrayIndexOutOfBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))))
}
function $throwArrayStoreException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))))
}
function $throwNegativeArraySizeException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException())
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $newArrayObject(arg0, arg1) {
  return $newArrayObjectInternal(arg0, arg1, 0)
}
function $newArrayObjectInternal(arg0, arg1, arg2) {
  var result = new arg0.constr(arg1[arg2]);
  if ((arg2 < (arg1.length - 1))) {
    var subArrayClassData = arg0.componentData;
    var subLengthIndex = (arg2 + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, arg1, subLengthIndex)
    }
  };
  return result
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0))
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0))
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf()
      } else {
        return $d_jl_Double.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((arg0 === null)) {
        return arg0.getClass__jl_Class()
      } else if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte"
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float"
      } else {
        return "java.lang.Double"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((arg0 === null)) {
        return arg0.getClass__jl_Class()
      } else if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name
      } else {
        return null.getName__T()
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0)
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0)
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0)
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0)
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0)
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0)
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance))
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 / arg1) | 0)
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 % arg1) | 0)
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)))
}
function $charAt(arg0, arg1) {
  var r = arg0.charCodeAt(arg1);
  if ((r !== r)) {
    throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_StringIndexOutOfBoundsException__I__(new $c_jl_StringIndexOutOfBoundsException(), arg1))
  } else {
    return r
  }
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value)
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + arg2) + "'."))
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  }
}
function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
  if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
    $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4)
  } else {
    var srcArray = arg0.u;
    $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)])
    }
  }
}
function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
  var srcData = (arg0 && arg0.$classData);
  if ((srcData === (arg2 && arg2.$classData))) {
    if ((srcData && srcData.isArrayClass)) {
      arg0.copyTo(arg1, arg2, arg3, arg4)
    } else {
      $throwArrayStoreException(null)
    }
  } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
    $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4)
  } else {
    $throwArrayStoreException(null)
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj)
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj)
      };
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32))
      };
      return biHash
    }
    case "boolean": {
      return (obj ? 1231 : 1237)
    }
    case "undefined": {
      return 0
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description))
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)))
}
function $bC(arg0) {
  return new $Char(arg0)
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"))
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"))
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"))
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"))
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"))
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"))
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"))
}
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"))
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"))
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"))
}
/** @constructor */
function $c_O() {
  /*<skip>*/
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
  /*<skip>*/
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0.0)).toString(16)))
});
$c_O.prototype.toString = (function() {
  return this.toString__T()
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null
    }
  } else {
    this.u = arg
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice())
});
function $ah_O() {
  /*<skip>*/
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false
    }
  } else {
    this.u = arg
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice())
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Uint16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice())
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int8Array(arg)
  } else {
    this.u = arg
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice())
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice())
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice())
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0
    }
  } else {
    this.u = arg
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice())
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Float32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice())
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Float64Array(arg)
  } else {
    this.u = arg
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice())
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0)
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = {};
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass)
  };
  return this
});
$TypeData.prototype.initClass = (function(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance) {
  var internalName = $propertyName(internalNameObj);
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (!(!isJSType));
  this.name = fullName;
  this.isInterface = isInterface;
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  return this
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      if ((arg < 0)) {
        $throwNegativeArraySizeException()
      };
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null
      }
    } else {
      this.u = arg
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOfBoundsException(i)
    };
    if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
      $throwArrayStoreException(v)
    };
    this.u[i] = v
  });
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice())
  });
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  ArrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)))
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)))
  });
  return this
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this)
  };
  return this._arrayOf
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this)
  };
  return this._classOf
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that))
});
$TypeData.prototype.checkCast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name)
  }
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null)
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null)
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf()
  };
  return $newArrayObject(arrayClassData, lengths)
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth))
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = {
  O: 1
};
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1))
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_jl_Class(data0) {
  this.jl_Class__f_data = null;
  this.jl_Class__f_data = data0
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
  /*<skip>*/
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
});
$c_jl_Class.prototype.isAssignableFrom__jl_Class__Z = (function(that) {
  return $uZ(this.jl_Class__f_data.isAssignableFrom(that.jl_Class__f_data))
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return $uZ(this.jl_Class__f_data.isInterface)
});
$c_jl_Class.prototype.isArray__Z = (function() {
  return $uZ(this.jl_Class__f_data.isArrayClass)
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return $uZ(this.jl_Class__f_data.isPrimitive)
});
$c_jl_Class.prototype.getName__T = (function() {
  return $as_T(this.jl_Class__f_data.name)
});
$c_jl_Class.prototype.getComponentType__jl_Class = (function() {
  return $as_jl_Class(this.jl_Class__f_data.getComponentType())
});
$c_jl_Class.prototype.newArrayOfThisClass__O__O = (function(dimensions) {
  return this.jl_Class__f_data.newArrayOfThisClass(dimensions)
});
function $as_jl_Class(obj) {
  return (((obj instanceof $c_jl_Class) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Class"))
}
function $isArrayOf_jl_Class(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Class)))
}
function $asArrayOf_jl_Class(obj, depth) {
  return (($isArrayOf_jl_Class(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Class;", depth))
}
var $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
  this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
  this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
  this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0.0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv
  } else {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]))
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.jl_System$Streams$__f_out = null;
  this.jl_System$Streams$__f_err = null;
  $n_jl_System$Streams$ = this;
  this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
  this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true)
}
$c_jl_System$Streams$.prototype = new $h_O();
$c_jl_System$Streams$.prototype.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
  /*<skip>*/
}
$h_jl_System$Streams$.prototype = $c_jl_System$Streams$.prototype;
var $d_jl_System$Streams$ = new $TypeData().initClass({
  jl_System$Streams$: 0
}, false, "java.lang.System$Streams$", {
  jl_System$Streams$: 1,
  O: 1
});
$c_jl_System$Streams$.prototype.$classData = $d_jl_System$Streams$;
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$()
  };
  return $n_jl_System$Streams$
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = {};
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  var value = $as_T($linkingInfo.linkerVersion);
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.jl_System$SystemProperties$__f_dict = null;
  this.jl_System$SystemProperties$__f_properties = null;
  $n_jl_System$SystemProperties$ = this;
  this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jl_System$SystemProperties$__f_properties = null
}
$c_jl_System$SystemProperties$.prototype = new $h_O();
$c_jl_System$SystemProperties$.prototype.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
  /*<skip>*/
}
$h_jl_System$SystemProperties$.prototype = $c_jl_System$SystemProperties$.prototype;
$c_jl_System$SystemProperties$.prototype.getProperty__T__T__T = (function(key, default$1) {
  if ((this.jl_System$SystemProperties$__f_dict !== null)) {
    var dict = this.jl_System$SystemProperties$__f_dict;
    return $as_T(($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1))
  } else {
    return this.jl_System$SystemProperties$__f_properties.getProperty__T__T__T(key, default$1)
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().initClass({
  jl_System$SystemProperties$: 0
}, false, "java.lang.System$SystemProperties$", {
  jl_System$SystemProperties$: 1,
  O: 1
});
$c_jl_System$SystemProperties$.prototype.$classData = $d_jl_System$SystemProperties$;
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$()
  };
  return $n_jl_System$SystemProperties$
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
  $n_jl_Utils$Cache$ = this;
  this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
}
$c_jl_Utils$Cache$.prototype = new $h_O();
$c_jl_Utils$Cache$.prototype.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
  /*<skip>*/
}
$h_jl_Utils$Cache$.prototype = $c_jl_Utils$Cache$.prototype;
var $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
function $as_jl_Void(obj) {
  return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"))
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)))
}
function $asArrayOf_jl_Void(obj, depth) {
  return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth))
}
var $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
/** @constructor */
function $c_jl_reflect_Array$() {
  /*<skip>*/
}
$c_jl_reflect_Array$.prototype = new $h_O();
$c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
  /*<skip>*/
}
$h_jl_reflect_Array$.prototype = $c_jl_reflect_Array$.prototype;
$c_jl_reflect_Array$.prototype.newInstance__jl_Class__I__O = (function(componentType, length) {
  return componentType.newArrayOfThisClass__O__O([length])
});
$c_jl_reflect_Array$.prototype.newInstance__jl_Class__AI__O = (function(componentType, dimensions) {
  var jsDims = [];
  var len = dimensions.u.length;
  var i = 0;
  while ((i !== len)) {
    jsDims.push(dimensions.get(i));
    i = ((1 + i) | 0)
  };
  return componentType.newArrayOfThisClass__O__O(jsDims)
});
$c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
  if ((array instanceof $ac_O)) {
    var x2 = $asArrayOf_O(array, 1);
    return x2.u.length
  } else if ((array instanceof $ac_Z)) {
    var x3 = $asArrayOf_Z(array, 1);
    return x3.u.length
  } else if ((array instanceof $ac_C)) {
    var x4 = $asArrayOf_C(array, 1);
    return x4.u.length
  } else if ((array instanceof $ac_B)) {
    var x5 = $asArrayOf_B(array, 1);
    return x5.u.length
  } else if ((array instanceof $ac_S)) {
    var x6 = $asArrayOf_S(array, 1);
    return x6.u.length
  } else if ((array instanceof $ac_I)) {
    var x7 = $asArrayOf_I(array, 1);
    return x7.u.length
  } else if ((array instanceof $ac_J)) {
    var x8 = $asArrayOf_J(array, 1);
    return x8.u.length
  } else if ((array instanceof $ac_F)) {
    var x9 = $asArrayOf_F(array, 1);
    return x9.u.length
  } else if ((array instanceof $ac_D)) {
    var x10 = $asArrayOf_D(array, 1);
    return x10.u.length
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch")
  }
});
var $d_jl_reflect_Array$ = new $TypeData().initClass({
  jl_reflect_Array$: 0
}, false, "java.lang.reflect.Array$", {
  jl_reflect_Array$: 1,
  O: 1
});
$c_jl_reflect_Array$.prototype.$classData = $d_jl_reflect_Array$;
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$()
  };
  return $n_jl_reflect_Array$
}
function $p_Ljava_math_Conversion$__dropLeadingZeros__T__T($thiz, s) {
  var zeroPrefixLength = 0;
  var len = s.length;
  while (true) {
    if ((zeroPrefixLength < len)) {
      var index = zeroPrefixLength;
      var $$x1 = ($charAt(s, index) === 48)
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      zeroPrefixLength = ((1 + zeroPrefixLength) | 0)
    } else {
      break
    }
  };
  var beginIndex = zeroPrefixLength;
  if (((beginIndex < 0) || (beginIndex > s.length))) {
    $charAt(s, beginIndex)
  };
  return $as_T(s.substring(beginIndex))
}
/** @constructor */
function $c_Ljava_math_Conversion$() {
  $n_Ljava_math_Conversion$ = this
}
$c_Ljava_math_Conversion$.prototype = new $h_O();
$c_Ljava_math_Conversion$.prototype.constructor = $c_Ljava_math_Conversion$;
/** @constructor */
function $h_Ljava_math_Conversion$() {
  /*<skip>*/
}
$h_Ljava_math_Conversion$.prototype = $c_Ljava_math_Conversion$.prototype;
$c_Ljava_math_Conversion$.prototype.toDecimalScaledString__Ljava_math_BigInteger__T = (function(bi) {
  var sign = bi.Ljava_math_BigInteger__f_sign;
  var numberLength = bi.Ljava_math_BigInteger__f_numberLength;
  var digits = bi.Ljava_math_BigInteger__f_digits;
  if ((sign === 0)) {
    return "0"
  } else if ((numberLength === 1)) {
    var i = digits.get(0);
    var absStr = $as_T($uD((i >>> 0.0)).toString(10));
    return ((sign < 0) ? ("-" + absStr) : absStr)
  } else {
    var result = "";
    var temp = new $ac_I(numberLength);
    var tempLen = numberLength;
    digits.copyTo(0, temp, 0, tempLen);
    while (true) {
      var rem = 0;
      var i$1 = (((-1) + tempLen) | 0);
      while ((i$1 >= 0)) {
        var value = rem;
        var value$1 = temp.get(i$1);
        var this$5 = $m_RTLong$();
        var lo = this$5.divideUnsignedImpl__I__I__I__I__I(value$1, value, 1000000000, 0);
        temp.set(i$1, lo);
        var hi$3 = (lo >> 31);
        var b0 = (65535 & lo);
        var b1 = ((lo >>> 16) | 0);
        var a0b0 = Math.imul(51712, b0);
        var a1b0 = Math.imul(15258, b0);
        var a0b1 = Math.imul(51712, b1);
        var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
        var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
        var hi$4 = ((((((Math.imul(1000000000, hi$3) + Math.imul(15258, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
        var lo$2 = ((value$1 - lo$1) | 0);
        rem = lo$2;
        i$1 = (((-1) + i$1) | 0)
      };
      var this$8 = rem;
      var remStr = ("" + this$8);
      var beginIndex = remStr.length;
      if (((beginIndex < 0) || (beginIndex > 9))) {
        $charAt("000000000", beginIndex)
      };
      var padding = $as_T("000000000".substring(beginIndex));
      result = ((padding + remStr) + result);
      while (((tempLen !== 0) && (temp.get((((-1) + tempLen) | 0)) === 0))) {
        tempLen = (((-1) + tempLen) | 0)
      };
      if ((tempLen !== 0)) {
        /*<skip>*/
      } else {
        break
      }
    };
    result = $p_Ljava_math_Conversion$__dropLeadingZeros__T__T(this, result);
    return ((sign < 0) ? ("-" + result) : result)
  }
});
var $d_Ljava_math_Conversion$ = new $TypeData().initClass({
  Ljava_math_Conversion$: 0
}, false, "java.math.Conversion$", {
  Ljava_math_Conversion$: 1,
  O: 1
});
$c_Ljava_math_Conversion$.prototype.$classData = $d_Ljava_math_Conversion$;
var $n_Ljava_math_Conversion$;
function $m_Ljava_math_Conversion$() {
  if ((!$n_Ljava_math_Conversion$)) {
    $n_Ljava_math_Conversion$ = new $c_Ljava_math_Conversion$()
  };
  return $n_Ljava_math_Conversion$
}
function $ct_Ljava_nio_Buffer__I__($thiz, _capacity) {
  $thiz.Ljava_nio_Buffer__f__capacity = _capacity;
  $thiz.Ljava_nio_Buffer__f__limit = $thiz.Ljava_nio_Buffer__f__capacity;
  $thiz.Ljava_nio_Buffer__f_java$nio$Buffer$$_position = 0;
  $thiz.Ljava_nio_Buffer__f__mark = (-1);
  return $thiz
}
/** @constructor */
function $c_Ljava_nio_Buffer() {
  this.Ljava_nio_Buffer__f__capacity = 0;
  this.Ljava_nio_Buffer__f__limit = 0;
  this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position = 0;
  this.Ljava_nio_Buffer__f__mark = 0
}
$c_Ljava_nio_Buffer.prototype = new $h_O();
$c_Ljava_nio_Buffer.prototype.constructor = $c_Ljava_nio_Buffer;
/** @constructor */
function $h_Ljava_nio_Buffer() {
  /*<skip>*/
}
$h_Ljava_nio_Buffer.prototype = $c_Ljava_nio_Buffer.prototype;
$c_Ljava_nio_Buffer.prototype.position__I__Ljava_nio_Buffer = (function(newPosition) {
  if (((newPosition < 0) || (newPosition > this.Ljava_nio_Buffer__f__limit))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  };
  this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position = newPosition;
  if ((this.Ljava_nio_Buffer__f__mark > newPosition)) {
    this.Ljava_nio_Buffer__f__mark = (-1)
  };
  return this
});
$c_Ljava_nio_Buffer.prototype.limit__I__Ljava_nio_Buffer = (function(newLimit) {
  if (((newLimit < 0) || (newLimit > this.Ljava_nio_Buffer__f__capacity))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  };
  this.Ljava_nio_Buffer__f__limit = newLimit;
  if ((this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position > newLimit)) {
    this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position = newLimit;
    if ((this.Ljava_nio_Buffer__f__mark > newLimit)) {
      this.Ljava_nio_Buffer__f__mark = (-1)
    }
  };
  return this
});
$c_Ljava_nio_Buffer.prototype.flip__Ljava_nio_Buffer = (function() {
  this.Ljava_nio_Buffer__f__mark = (-1);
  this.Ljava_nio_Buffer__f__limit = this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
  this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position = 0;
  return this
});
$c_Ljava_nio_Buffer.prototype.toString__T = (function() {
  return ((((((($objectClassName(this) + "[pos=") + this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position) + " lim=") + this.Ljava_nio_Buffer__f__limit) + " cap=") + this.Ljava_nio_Buffer__f__capacity) + "]")
});
$c_Ljava_nio_Buffer.prototype.hasArrayBuffer__Z = (function() {
  return ((this._arrayBuffer__O() !== null) && (!this.isReadOnly__Z()))
});
$c_Ljava_nio_Buffer.prototype.arrayBuffer__O = (function() {
  var buffer = this._arrayBuffer__O();
  if (((buffer === null) || this.isReadOnly__Z())) {
    throw $ct_jl_UnsupportedOperationException__(new $c_jl_UnsupportedOperationException())
  };
  return buffer
});
$c_Ljava_nio_Buffer.prototype._arrayBuffer__O = (function() {
  return null
});
/** @constructor */
function $c_Ljava_nio_ByteBuffer$() {
  /*<skip>*/
}
$c_Ljava_nio_ByteBuffer$.prototype = new $h_O();
$c_Ljava_nio_ByteBuffer$.prototype.constructor = $c_Ljava_nio_ByteBuffer$;
/** @constructor */
function $h_Ljava_nio_ByteBuffer$() {
  /*<skip>*/
}
$h_Ljava_nio_ByteBuffer$.prototype = $c_Ljava_nio_ByteBuffer$.prototype;
$c_Ljava_nio_ByteBuffer$.prototype.allocate__I__Ljava_nio_ByteBuffer = (function(capacity) {
  if ((capacity < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  };
  var array = new $ac_B(capacity);
  var length = array.u.length;
  return $m_Ljava_nio_HeapByteBuffer$().wrap__AB__I__I__I__I__Z__Ljava_nio_ByteBuffer(array, 0, array.u.length, 0, length, false)
});
var $d_Ljava_nio_ByteBuffer$ = new $TypeData().initClass({
  Ljava_nio_ByteBuffer$: 0
}, false, "java.nio.ByteBuffer$", {
  Ljava_nio_ByteBuffer$: 1,
  O: 1
});
$c_Ljava_nio_ByteBuffer$.prototype.$classData = $d_Ljava_nio_ByteBuffer$;
var $n_Ljava_nio_ByteBuffer$;
function $m_Ljava_nio_ByteBuffer$() {
  if ((!$n_Ljava_nio_ByteBuffer$)) {
    $n_Ljava_nio_ByteBuffer$ = new $c_Ljava_nio_ByteBuffer$()
  };
  return $n_Ljava_nio_ByteBuffer$
}
/** @constructor */
function $c_Ljava_nio_ByteOrder(name) {
  this.Ljava_nio_ByteOrder__f_name = null;
  this.Ljava_nio_ByteOrder__f_name = name
}
$c_Ljava_nio_ByteOrder.prototype = new $h_O();
$c_Ljava_nio_ByteOrder.prototype.constructor = $c_Ljava_nio_ByteOrder;
/** @constructor */
function $h_Ljava_nio_ByteOrder() {
  /*<skip>*/
}
$h_Ljava_nio_ByteOrder.prototype = $c_Ljava_nio_ByteOrder.prototype;
$c_Ljava_nio_ByteOrder.prototype.toString__T = (function() {
  return this.Ljava_nio_ByteOrder__f_name
});
var $d_Ljava_nio_ByteOrder = new $TypeData().initClass({
  Ljava_nio_ByteOrder: 0
}, false, "java.nio.ByteOrder", {
  Ljava_nio_ByteOrder: 1,
  O: 1
});
$c_Ljava_nio_ByteOrder.prototype.$classData = $d_Ljava_nio_ByteOrder;
/** @constructor */
function $c_Ljava_nio_ByteOrder$() {
  this.Ljava_nio_ByteOrder$__f_areTypedArraysBigEndian = false;
  $n_Ljava_nio_ByteOrder$ = this;
  new $c_Ljava_nio_ByteOrder("BIG_ENDIAN");
  new $c_Ljava_nio_ByteOrder("LITTLE_ENDIAN");
  if (($as_T((typeof Int32Array)) === "undefined")) {
    var $$x1 = true
  } else {
    var arrayBuffer = new ArrayBuffer(4);
    new Int32Array(arrayBuffer)[0] = 16909060;
    var $$x1 = ($uB(new Int8Array(arrayBuffer)[0]) === 1)
  };
  this.Ljava_nio_ByteOrder$__f_areTypedArraysBigEndian = $$x1
}
$c_Ljava_nio_ByteOrder$.prototype = new $h_O();
$c_Ljava_nio_ByteOrder$.prototype.constructor = $c_Ljava_nio_ByteOrder$;
/** @constructor */
function $h_Ljava_nio_ByteOrder$() {
  /*<skip>*/
}
$h_Ljava_nio_ByteOrder$.prototype = $c_Ljava_nio_ByteOrder$.prototype;
var $d_Ljava_nio_ByteOrder$ = new $TypeData().initClass({
  Ljava_nio_ByteOrder$: 0
}, false, "java.nio.ByteOrder$", {
  Ljava_nio_ByteOrder$: 1,
  O: 1
});
$c_Ljava_nio_ByteOrder$.prototype.$classData = $d_Ljava_nio_ByteOrder$;
var $n_Ljava_nio_ByteOrder$;
function $m_Ljava_nio_ByteOrder$() {
  if ((!$n_Ljava_nio_ByteOrder$)) {
    $n_Ljava_nio_ByteOrder$ = new $c_Ljava_nio_ByteOrder$()
  };
  return $n_Ljava_nio_ByteOrder$
}
/** @constructor */
function $c_Ljava_nio_HeapByteBuffer$() {
  /*<skip>*/
}
$c_Ljava_nio_HeapByteBuffer$.prototype = new $h_O();
$c_Ljava_nio_HeapByteBuffer$.prototype.constructor = $c_Ljava_nio_HeapByteBuffer$;
/** @constructor */
function $h_Ljava_nio_HeapByteBuffer$() {
  /*<skip>*/
}
$h_Ljava_nio_HeapByteBuffer$.prototype = $c_Ljava_nio_HeapByteBuffer$.prototype;
$c_Ljava_nio_HeapByteBuffer$.prototype.wrap__AB__I__I__I__I__Z__Ljava_nio_ByteBuffer = (function(array, arrayOffset, capacity, initialPosition, initialLength, isReadOnly) {
  if ((((arrayOffset < 0) || (capacity < 0)) || (((arrayOffset + capacity) | 0) > array.u.length))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException())
  };
  var initialLimit = ((initialPosition + initialLength) | 0);
  if ((((initialPosition < 0) || (initialLength < 0)) || (initialLimit > capacity))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException())
  };
  return new $c_Ljava_nio_HeapByteBuffer(capacity, array, arrayOffset, initialPosition, initialLimit, isReadOnly)
});
var $d_Ljava_nio_HeapByteBuffer$ = new $TypeData().initClass({
  Ljava_nio_HeapByteBuffer$: 0
}, false, "java.nio.HeapByteBuffer$", {
  Ljava_nio_HeapByteBuffer$: 1,
  O: 1
});
$c_Ljava_nio_HeapByteBuffer$.prototype.$classData = $d_Ljava_nio_HeapByteBuffer$;
var $n_Ljava_nio_HeapByteBuffer$;
function $m_Ljava_nio_HeapByteBuffer$() {
  if ((!$n_Ljava_nio_HeapByteBuffer$)) {
    $n_Ljava_nio_HeapByteBuffer$ = new $c_Ljava_nio_HeapByteBuffer$()
  };
  return $n_Ljava_nio_HeapByteBuffer$
}
/** @constructor */
function $c_Ljava_nio_TypedArrayByteBuffer$() {
  /*<skip>*/
}
$c_Ljava_nio_TypedArrayByteBuffer$.prototype = new $h_O();
$c_Ljava_nio_TypedArrayByteBuffer$.prototype.constructor = $c_Ljava_nio_TypedArrayByteBuffer$;
/** @constructor */
function $h_Ljava_nio_TypedArrayByteBuffer$() {
  /*<skip>*/
}
$h_Ljava_nio_TypedArrayByteBuffer$.prototype = $c_Ljava_nio_TypedArrayByteBuffer$.prototype;
$c_Ljava_nio_TypedArrayByteBuffer$.prototype.wrapInt8Array__O__Ljava_nio_ByteBuffer = (function(typedArray) {
  var buf = new $c_Ljava_nio_TypedArrayByteBuffer(typedArray, 0, $uI(typedArray.length), false);
  $m_Ljava_nio_ByteOrder$();
  return buf
});
var $d_Ljava_nio_TypedArrayByteBuffer$ = new $TypeData().initClass({
  Ljava_nio_TypedArrayByteBuffer$: 0
}, false, "java.nio.TypedArrayByteBuffer$", {
  Ljava_nio_TypedArrayByteBuffer$: 1,
  O: 1
});
$c_Ljava_nio_TypedArrayByteBuffer$.prototype.$classData = $d_Ljava_nio_TypedArrayByteBuffer$;
var $n_Ljava_nio_TypedArrayByteBuffer$;
function $m_Ljava_nio_TypedArrayByteBuffer$() {
  if ((!$n_Ljava_nio_TypedArrayByteBuffer$)) {
    $n_Ljava_nio_TypedArrayByteBuffer$ = new $c_Ljava_nio_TypedArrayByteBuffer$()
  };
  return $n_Ljava_nio_TypedArrayByteBuffer$
}
/** @constructor */
function $c_ju_Arrays$() {
  /*<skip>*/
}
$c_ju_Arrays$.prototype = new $h_O();
$c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
  /*<skip>*/
}
$h_ju_Arrays$.prototype = $c_ju_Arrays$.prototype;
$c_ju_Arrays$.prototype.binarySearch__AI__I__I = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.u.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0)
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.get(mid);
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid
      } else if ((cmp === 0)) {
        return mid
      } else {
        startIndex = ((1 + mid) | 0)
      }
    }
  }
});
$c_ju_Arrays$.prototype.equals__AJ__AJ__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = a.u.length;
  if ((b.u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var t = a.get(i$1);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var i$2 = i;
    var t$1 = b.get(i$2);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AI__AI__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = a.u.length;
  if ((b.u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = a.get(i$1);
    var i$2 = i;
    var b$1 = b.get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AS__AS__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = a.u.length;
  if ((b.u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = a.get(i$1);
    var i$2 = i;
    var b$1 = b.get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AC__AC__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = a.u.length;
  if ((b.u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = a.get(i$1);
    var i$2 = i;
    var b$1 = b.get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AB__AB__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = a.u.length;
  if ((b.u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = a.get(i$1);
    var i$2 = i;
    var b$1 = b.get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AZ__AZ__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = a.u.length;
  if ((b.u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = a.get(i$1);
    var i$2 = i;
    var b$1 = b.get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AD__AD__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = a.u.length;
  if ((b.u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = a.get(i$1);
    var i$2 = i;
    var b$1 = b.get(i$2);
    if ((!Object.is(a$1, b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AF__AF__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = a.u.length;
  if ((b.u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = a.get(i$1);
    var i$2 = i;
    var b$1 = b.get(i$2);
    if ((!Object.is(a$1, b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.copyOf__AO__I__AO = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  var b = original.u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var clazz = $objectGetClass(original);
  var ret = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(clazz.getComponentType__jl_Class(), newLength), 1);
  $systemArraycopyRefs(original, 0, ret, 0, copyLength);
  return ret
});
$c_ju_Arrays$.prototype.copyOfRange__AO__I__I__AO = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to))
  };
  var len = original.u.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var clazz = $objectGetClass(original);
  var ret = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(clazz.getComponentType__jl_Class(), retLength), 1);
  $systemArraycopyRefs(original, from, ret, 0, copyLength);
  return ret
});
var $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
/** @constructor */
function $c_ju_internal_MurmurHash3$() {
  /*<skip>*/
}
$c_ju_internal_MurmurHash3$.prototype = new $h_O();
$c_ju_internal_MurmurHash3$.prototype.constructor = $c_ju_internal_MurmurHash3$;
/** @constructor */
function $h_ju_internal_MurmurHash3$() {
  /*<skip>*/
}
$h_ju_internal_MurmurHash3$.prototype = $c_ju_internal_MurmurHash3$.prototype;
$c_ju_internal_MurmurHash3$.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0)
});
$c_ju_internal_MurmurHash3$.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k)
});
$c_ju_internal_MurmurHash3$.prototype.finalizeHash__I__I__I = (function(hash, length) {
  var hash$1 = (hash ^ length);
  var h = hash$1;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
var $d_ju_internal_MurmurHash3$ = new $TypeData().initClass({
  ju_internal_MurmurHash3$: 0
}, false, "java.util.internal.MurmurHash3$", {
  ju_internal_MurmurHash3$: 1,
  O: 1
});
$c_ju_internal_MurmurHash3$.prototype.$classData = $d_ju_internal_MurmurHash3$;
var $n_ju_internal_MurmurHash3$;
function $m_ju_internal_MurmurHash3$() {
  if ((!$n_ju_internal_MurmurHash3$)) {
    $n_ju_internal_MurmurHash3$ = new $c_ju_internal_MurmurHash3$()
  };
  return $n_ju_internal_MurmurHash3$
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
  /*<skip>*/
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === x2.RTLong__f_lo) && (this.RTLong__f_hi === x2.RTLong__f_hi))
  } else {
    return false
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi)
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24)
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16)
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.longValue__J = (function() {
  return $uJ(this)
});
$c_RTLong.prototype.floatValue__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return ((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi))
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi)))
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo | b.RTLong__f_lo), (this.RTLong__f_hi | b.RTLong__f_hi))
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo & b.RTLong__f_lo), (this.RTLong__f_hi & b.RTLong__f_hi))
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo ^ b.RTLong__f_lo), (this.RTLong__f_hi ^ b.RTLong__f_hi))
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)))
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0))
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)))
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo + b.RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo - b.RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var blo = b.RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, b.RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi)
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
var $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  O: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - $uI(Math.clz32(blo))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - $uI(Math.clz32(bhi))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? $uI(Math.clz32(bhi)) : ((32 + $uI(Math.clz32(blo))) | 0)) - ((ahi !== 0) ? $uI(Math.clz32(ahi)) : ((32 + $uI(Math.clz32(alo))) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0.0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0.0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0.0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0.0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0.0)));
    var this$7 = remLo;
    var remStr = ("" + this$7);
    var start = remStr.length;
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
  /*<skip>*/
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var $$x1 = $uD((x >>> 0.0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * $$x1) + $uD((x$1 >>> 0.0))))
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0.0)))
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  if ((hi < 0)) {
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var abs__lo = lo$1;
    var abs__hi = hi$1
  } else {
    var abs__lo = lo;
    var abs__hi = hi
  };
  var hi$2 = abs__hi;
  if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
    var compressedAbsLo = abs__lo
  } else {
    var compressedAbsLo = (32768 | ((-65536) & abs__lo))
  };
  var x = abs__hi;
  var absRes = ((4.294967296E9 * $uD((x >>> 0.0))) + $uD((compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes))
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31))
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1)
  } else {
    var rawLo = $uI((value | 0.0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0.0));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648)
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1)
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo
    } else {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    }
  }
});
$c_RTLong$.prototype.divideUnsignedImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      if ((blo === 0)) {
        return $intDiv(0, 0)
      } else {
        var n = ($uD((alo >>> 0.0)) / $uD((blo >>> 0.0)));
        return $uI((n | 0.0))
      }
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else {
    return $p_RTLong$__unsigned_$div__I__I__I__I__I(this, alo, ahi, blo, bhi)
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    } else {
      return absRLo
    }
  }
});
var $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
  /*<skip>*/
}
$c_s_LowPriorityImplicits2.prototype = new $h_O();
$c_s_LowPriorityImplicits2.prototype.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
  /*<skip>*/
}
$h_s_LowPriorityImplicits2.prototype = $c_s_LowPriorityImplicits2.prototype;
/** @constructor */
function $c_sc_ArrayOps$() {
  this.sc_ArrayOps$__f_fallback = null;
  $n_sc_ArrayOps$ = this;
  this.sc_ArrayOps$__f_fallback = new $c_sjsr_AnonFunction1(((x$1$2) => $m_sc_ArrayOps$().sc_ArrayOps$__f_fallback))
}
$c_sc_ArrayOps$.prototype = new $h_O();
$c_sc_ArrayOps$.prototype.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
  /*<skip>*/
}
$h_sc_ArrayOps$.prototype = $c_sc_ArrayOps$.prototype;
$c_sc_ArrayOps$.prototype.copyToArray$extension__O__O__I__I__I = (function(this$, xs, start, len) {
  var srcLen = $m_jl_reflect_Array$().getLength__O__I(this$);
  var destLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V(this$, 0, xs, start, copied)
  };
  return copied
});
var $d_sc_ArrayOps$ = new $TypeData().initClass({
  sc_ArrayOps$: 0
}, false, "scala.collection.ArrayOps$", {
  sc_ArrayOps$: 1,
  O: 1
});
$c_sc_ArrayOps$.prototype.$classData = $d_sc_ArrayOps$;
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$()
  };
  return $n_sc_ArrayOps$
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)))
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"))
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)))
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth))
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    f.apply__O__O(it.next__O())
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
  var it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  var i = start;
  var y = (($m_jl_reflect_Array$().getLength__O__I(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if ($thiz.isEmpty__Z()) {
    return (("" + start) + end)
  } else {
    var this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
    return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.scm_StringBuilder__f_underlying;
  if ((start.length !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  var it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  if (it.hasNext__Z()) {
    var obj = it.next__O();
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while (it.hasNext__Z()) {
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      var obj$1 = it.next__O();
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1)
    }
  };
  if ((end.length !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return b
}
/** @constructor */
function $c_sc_StringOps$() {
  this.sc_StringOps$__f_fallback = null;
  $n_sc_StringOps$ = this;
  this.sc_StringOps$__f_fallback = new $c_sjsr_AnonFunction1(((x$1$2) => $m_sc_StringOps$().sc_StringOps$__f_fallback))
}
$c_sc_StringOps$.prototype = new $h_O();
$c_sc_StringOps$.prototype.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
  /*<skip>*/
}
$h_sc_StringOps$.prototype = $c_sc_StringOps$.prototype;
$c_sc_StringOps$.prototype.slice$extension__T__I__I__T = (function(this$, from, until) {
  var start = ((from > 0) ? from : 0);
  var that = this$.length;
  var end = ((until < that) ? until : that);
  if ((start >= end)) {
    return ""
  } else {
    if ((start < 0)) {
      $charAt(this$, start)
    };
    if ((end > this$.length)) {
      $charAt(this$, end)
    };
    if ((end < start)) {
      $charAt(this$, (-1))
    };
    return $as_T(this$.substring(start, end))
  }
});
$c_sc_StringOps$.prototype.$times$extension__T__I__T = (function(this$, n) {
  if ((n <= 0)) {
    return ""
  } else {
    var sb = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), Math.imul(this$.length, n));
    var i = 0;
    while ((i < n)) {
      sb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + sb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + this$);
      i = ((1 + i) | 0)
    };
    return sb.jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
});
$c_sc_StringOps$.prototype.init$extension__T__T = (function(this$) {
  return $m_sc_StringOps$().slice$extension__T__I__I__T(this$, 0, (((-1) + this$.length) | 0))
});
var $d_sc_StringOps$ = new $TypeData().initClass({
  sc_StringOps$: 0
}, false, "scala.collection.StringOps$", {
  sc_StringOps$: 1,
  O: 1
});
$c_sc_StringOps$.prototype.$classData = $d_sc_StringOps$;
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$()
  };
  return $n_sc_StringOps$
}
function $p_sci_IndexedSeqDefaults$__liftedTree1$1__I($thiz) {
  try {
    $m_sc_StringOps$();
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if (false) {
      return 64
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this)
}
$c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$c_sci_IndexedSeqDefaults$.prototype.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
  /*<skip>*/
}
$h_sci_IndexedSeqDefaults$.prototype = $c_sci_IndexedSeqDefaults$.prototype;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass({
  sci_IndexedSeqDefaults$: 0
}, false, "scala.collection.immutable.IndexedSeqDefaults$", {
  sci_IndexedSeqDefaults$: 1,
  O: 1
});
$c_sci_IndexedSeqDefaults$.prototype.$classData = $d_sci_IndexedSeqDefaults$;
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$()
  };
  return $n_sci_IndexedSeqDefaults$
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.sci_VectorStatics$__f_empty1 = null;
  this.sci_VectorStatics$__f_empty2 = null;
  this.sci_VectorStatics$__f_empty3 = null;
  this.sci_VectorStatics$__f_empty4 = null;
  this.sci_VectorStatics$__f_empty5 = null;
  this.sci_VectorStatics$__f_empty6 = null;
  $n_sci_VectorStatics$ = this;
  this.sci_VectorStatics$__f_empty1 = new $ac_O(0);
  this.sci_VectorStatics$__f_empty2 = new ($d_O.getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0)
}
$c_sci_VectorStatics$.prototype = new $h_O();
$c_sci_VectorStatics$.prototype.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
  /*<skip>*/
}
$h_sci_VectorStatics$.prototype = $c_sci_VectorStatics$.prototype;
$c_sci_VectorStatics$.prototype.copyAppend1__AO__O__AO = (function(a, elem) {
  var alen = a.u.length;
  var ac = new $ac_O(((1 + alen) | 0));
  $systemArraycopyRefs(a, 0, ac, 0, alen);
  ac.set(alen, elem);
  return ac
});
$c_sci_VectorStatics$.prototype.copyAppend__AO__O__AO = (function(a, elem) {
  var newLength = ((1 + a.u.length) | 0);
  var ac = $m_ju_Arrays$().copyOf__AO__I__AO(a, newLength);
  ac.set((((-1) + ac.u.length) | 0), elem);
  return ac
});
$c_sci_VectorStatics$.prototype.copyPrepend__O__AO__AO = (function(elem, a) {
  var componentType = $objectGetClass(a).getComponentType__jl_Class();
  var length = ((1 + a.u.length) | 0);
  var ac = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, length), 1);
  var length$1 = a.u.length;
  $systemArraycopyRefs(a, 0, ac, 1, length$1);
  ac.set(0, elem);
  return ac
});
$c_sci_VectorStatics$.prototype.foreachRec__I__AO__F1__V = (function(level, a, f) {
  var i = 0;
  var len = a.u.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.apply__O__O(a.get(i));
      i = ((1 + i) | 0)
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.foreachRec__I__AO__F1__V(l, $asArrayOf_O(a.get(i), 1), f);
      i = ((1 + i) | 0)
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().initClass({
  sci_VectorStatics$: 0
}, false, "scala.collection.immutable.VectorStatics$", {
  sci_VectorStatics$: 1,
  O: 1
});
$c_sci_VectorStatics$.prototype.$classData = $d_sci_VectorStatics$;
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$()
  };
  return $n_sci_VectorStatics$
}
/** @constructor */
function $c_s_package$() {
  this.s_package$__f_List = null;
  this.s_package$__f_Nil = null;
  this.s_package$__f_Vector = null;
  this.s_package$__f_Left = null;
  this.s_package$__f_Right = null;
  $n_s_package$ = this;
  new $c_s_package$$anon$1();
  $m_sc_Iterable$();
  $m_sc_Iterable$();
  $m_sci_Seq$();
  $m_sci_IndexedSeq$();
  $m_sc_Iterator$();
  this.s_package$__f_List = $m_sci_List$();
  this.s_package$__f_Nil = $m_sci_Nil$();
  $m_sci_LazyList$();
  this.s_package$__f_Vector = $m_sci_Vector$();
  this.s_package$__f_Left = $m_s_util_Left$();
  this.s_package$__f_Right = $m_s_util_Right$()
}
$c_s_package$.prototype = new $h_O();
$c_s_package$.prototype.constructor = $c_s_package$;
/** @constructor */
function $h_s_package$() {
  /*<skip>*/
}
$h_s_package$.prototype = $c_s_package$.prototype;
var $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
var $n_s_package$;
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
  /*<skip>*/
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
  /*<skip>*/
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y)
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y)
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z(x, y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      var this$1 = $uC(x3);
      return (x2$1 === this$1)
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $uC(x3);
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z(xn, x3))
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2)
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return x4.equals__O__Z(x2)
    } else {
      return false
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2))
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return x4$2.equals__O__Z(new $c_RTLong(lo$1, hi$1))
    } else {
      return false
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    var this$1 = $uC(xc);
    var this$2 = $uC(x2);
    return (this$1 === this$2)
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      var this$3 = $uC(xc);
      return (x2$1 === this$3)
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $uC(xc);
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z(x3, xc))
    }
  } else {
    return ((xc === null) && (y === null))
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
var $d_sr_Null$ = new $TypeData().initClass({
  sr_Null$: 0
}, false, "scala.runtime.Null$", {
  sr_Null$: 1,
  O: 1
});
/** @constructor */
function $c_sr_ScalaRunTime$() {
  /*<skip>*/
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return x2.get(idx)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return x3.get(idx)
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return x4.get(idx)
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return x5.get(idx)
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return x6.get(idx)
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return $bC(x7.get(idx))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return x8.get(idx)
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return x9.get(idx)
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return x10.get(idx)
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    x2.set(idx, value)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    x3.set(idx, $uI(value))
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    x4.set(idx, $uD(value))
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    x5.set(idx, $uJ(value))
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    x6.set(idx, $uF(value))
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    x7.set(idx, $uC(value))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    x8.set(idx, $uB(value))
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    x9.set(idx, $uS(value))
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    x10.set(idx, $uZ(value))
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = x.productIterator__sc_Iterator();
  var start = (x.productPrefix__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")")
});
$c_sr_ScalaRunTime$.prototype.genericWrapArray__O__sci_ArraySeq = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().unsafeWrapArray__O__sci_ArraySeq(xs))
});
$c_sr_ScalaRunTime$.prototype.wrapRefArray__AO__sci_ArraySeq = (function(xs) {
  if ((xs === null)) {
    return null
  } else if ((xs.u.length === 0)) {
    var this$3 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$3)
  } else {
    return new $c_sci_ArraySeq$ofRef(xs)
  }
});
$c_sr_ScalaRunTime$.prototype.wrapIntArray__AI__sci_ArraySeq = (function(xs) {
  return ((xs !== null) ? new $c_sci_ArraySeq$ofInt(xs) : null)
});
$c_sr_ScalaRunTime$.prototype.wrapByteArray__AB__sci_ArraySeq = (function(xs) {
  return ((xs !== null) ? new $c_sci_ArraySeq$ofByte(xs) : null)
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
/** @constructor */
function $c_sr_Statics$() {
  /*<skip>*/
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
  /*<skip>*/
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0)
});
$c_sr_Statics$.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k)
});
$c_sr_Statics$.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.avalanche__I__I((hash ^ length))
});
$c_sr_Statics$.prototype.avalanche__I__I = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi))
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3)
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi))
  } else {
    return $dp_hashCode__I(x)
  }
});
$c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
/** @constructor */
function $c_sr_Statics$PFMarker$() {
  /*<skip>*/
}
$c_sr_Statics$PFMarker$.prototype = new $h_O();
$c_sr_Statics$PFMarker$.prototype.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
  /*<skip>*/
}
$h_sr_Statics$PFMarker$.prototype = $c_sr_Statics$PFMarker$.prototype;
var $d_sr_Statics$PFMarker$ = new $TypeData().initClass({
  sr_Statics$PFMarker$: 0
}, false, "scala.runtime.Statics$PFMarker$", {
  sr_Statics$PFMarker$: 1,
  O: 1
});
$c_sr_Statics$PFMarker$.prototype.$classData = $d_sr_Statics$PFMarker$;
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$()
  };
  return $n_sr_Statics$PFMarker$
}
/** @constructor */
function $c_sjs_js_typedarray_TypedArrayBuffer$() {
  /*<skip>*/
}
$c_sjs_js_typedarray_TypedArrayBuffer$.prototype = new $h_O();
$c_sjs_js_typedarray_TypedArrayBuffer$.prototype.constructor = $c_sjs_js_typedarray_TypedArrayBuffer$;
/** @constructor */
function $h_sjs_js_typedarray_TypedArrayBuffer$() {
  /*<skip>*/
}
$h_sjs_js_typedarray_TypedArrayBuffer$.prototype = $c_sjs_js_typedarray_TypedArrayBuffer$.prototype;
$c_sjs_js_typedarray_TypedArrayBuffer$.prototype.wrap__sjs_js_typedarray_ArrayBuffer__Ljava_nio_ByteBuffer = (function(buffer) {
  var array = new Int8Array(buffer);
  return $m_Ljava_nio_TypedArrayByteBuffer$().wrapInt8Array__O__Ljava_nio_ByteBuffer(array)
});
$c_sjs_js_typedarray_TypedArrayBuffer$.prototype.wrap__sjs_js_typedarray_ArrayBuffer__I__I__Ljava_nio_ByteBuffer = (function(buffer, byteOffset, length) {
  var array = new Int8Array(buffer, byteOffset, length);
  return $m_Ljava_nio_TypedArrayByteBuffer$().wrapInt8Array__O__Ljava_nio_ByteBuffer(array)
});
var $d_sjs_js_typedarray_TypedArrayBuffer$ = new $TypeData().initClass({
  sjs_js_typedarray_TypedArrayBuffer$: 0
}, false, "scala.scalajs.js.typedarray.TypedArrayBuffer$", {
  sjs_js_typedarray_TypedArrayBuffer$: 1,
  O: 1
});
$c_sjs_js_typedarray_TypedArrayBuffer$.prototype.$classData = $d_sjs_js_typedarray_TypedArrayBuffer$;
var $n_sjs_js_typedarray_TypedArrayBuffer$;
function $m_sjs_js_typedarray_TypedArrayBuffer$() {
  if ((!$n_sjs_js_typedarray_TypedArrayBuffer$)) {
    $n_sjs_js_typedarray_TypedArrayBuffer$ = new $c_sjs_js_typedarray_TypedArrayBuffer$()
  };
  return $n_sjs_js_typedarray_TypedArrayBuffer$
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.s_util_DynamicVariable__f_v = null;
  this.s_util_DynamicVariable__f_v = init
}
$c_s_util_DynamicVariable.prototype = new $h_O();
$c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
  /*<skip>*/
}
$h_s_util_DynamicVariable.prototype = $c_s_util_DynamicVariable.prototype;
$c_s_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")")
});
var $d_s_util_DynamicVariable = new $TypeData().initClass({
  s_util_DynamicVariable: 0
}, false, "scala.util.DynamicVariable", {
  s_util_DynamicVariable: 1,
  O: 1
});
$c_s_util_DynamicVariable.prototype.$classData = $d_s_util_DynamicVariable;
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0)
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k)
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length))
});
$c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
  var arr = x.productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.productPrefix__T())
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.mix__I__I__I(h, $f_T__hashCode__I(x.productPrefix__T()))
    };
    var i = 0;
    while ((i < arr)) {
      var $$x1 = h;
      var x$1 = x.productElement__I__O(i);
      h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, arr)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.stringHash__T__I__I = (function(str, seed) {
  var h = seed;
  var i = 0;
  while ((((1 + i) | 0) < str.length)) {
    var index = i;
    var index$1 = ((1 + i) | 0);
    var data = ((($charAt(str, index) << 16) + $charAt(str, index$1)) | 0);
    h = this.mix__I__I__I(h, data);
    i = ((2 + i) | 0)
  };
  if ((i < str.length)) {
    var $$x1 = h;
    var index$2 = i;
    h = this.mixLast__I__I__I($$x1, $charAt(str, index$2))
  };
  return this.finalizeHash__I__I__I(h, str.length)
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.iterator__sc_Iterator();
  while (iterator.hasNext__Z()) {
    var x = iterator.next__O();
    var h = $m_sr_Statics$().anyHash__O__I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0)
  };
  var h$2 = seed;
  h$2 = this.mix__I__I__I(h$2, a);
  h$2 = this.mix__I__I__I(h$2, b);
  h$2 = this.mixLast__I__I__I(h$2, c);
  return this.finalizeHash__I__I__I(h$2, n)
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var it = xs.iterator__sc_Iterator();
  var h = seed;
  if ((!it.hasNext__Z())) {
    return this.finalizeHash__I__I__I(h, 0)
  };
  var x0 = it.next__O();
  if ((!it.hasNext__Z())) {
    return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1)
  };
  var x1 = it.next__O();
  var initial = $m_sr_Statics$().anyHash__O__I(x0);
  h = this.mix__I__I__I(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().anyHash__O__I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.hasNext__Z()) {
    h = this.mix__I__I__I(h, prev);
    var x = it.next__O();
    var hash = $m_sr_Statics$().anyHash__O__I(x);
    if ((rangeDiff !== ((hash - prev) | 0))) {
      h = this.mix__I__I__I(h, hash);
      i = ((1 + i) | 0);
      while (it.hasNext__Z()) {
        var $$x1 = h;
        var x$1 = it.next__O();
        h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, i)
    };
    prev = hash;
    i = ((1 + i) | 0)
  };
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash__O__I__I = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().getLength__O__I(a);
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $$x1 = h;
      var x = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break
    }
    default: {
      var x$1 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $$x2 = h;
            var x$4 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
            h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last))
});
$c_s_util_hashing_MurmurHash3.prototype.bytesHash__AB__I__I = (function(data, seed) {
  var len = data.u.length;
  var h = seed;
  var i = 0;
  while ((len >= 4)) {
    var k = (255 & data.get(i));
    k = (k | ((255 & data.get(((1 + i) | 0))) << 8));
    k = (k | ((255 & data.get(((2 + i) | 0))) << 16));
    k = (k | ((255 & data.get(((3 + i) | 0))) << 24));
    h = this.mix__I__I__I(h, k);
    i = ((4 + i) | 0);
    len = (((-4) + len) | 0)
  };
  var k$2 = 0;
  if ((len === 3)) {
    k$2 = (k$2 ^ ((255 & data.get(((2 + i) | 0))) << 16))
  };
  if ((len >= 2)) {
    k$2 = (k$2 ^ ((255 & data.get(((1 + i) | 0))) << 8))
  };
  if ((len >= 1)) {
    k$2 = (k$2 ^ (255 & data.get(i)));
    h = this.mixLast__I__I__I(h, k$2)
  };
  return this.finalizeHash__I__I__I(h, data.u.length)
});
$c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
  var h = seed;
  var l = a.length__I();
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $$x1 = h;
      var x = a.apply__I__O(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break
    }
    default: {
      var x$1 = a.apply__I__O(0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = a.apply__I__O(1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = a.apply__I__O(i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $$x2 = h;
            var x$4 = a.apply__I__O(i);
            h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.isEmpty__Z())) {
    var head = elems.head__O();
    var tail = $as_sci_List(elems.tail__O());
    var hash = $m_sr_Statics$().anyHash__O__I(head);
    h = this.mix__I__I__I(h, hash);
    var x1 = rangeState;
    switch (x1) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break
      }
      case 2: {
        if ((rangeDiff !== ((hash - prev) | 0))) {
          rangeState = 3
        };
        break
      }
    };
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail
  };
  return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n))
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mZc$sp__AZ__I__I = (function(a, seed) {
  var h = seed;
  var l = a.u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, (a.get(0) ? 1231 : 1237)), 1);
      break
    }
    default: {
      var initial = (a.get(0) ? 1231 : 1237);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = (a.get(1) ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = (a.get(i) ? 1231 : 1237);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, (a.get(i) ? 1231 : 1237));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mBc$sp__AB__I__I = (function(a, seed) {
  var h = seed;
  var l = a.u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, a.get(0)), 1);
      break
    }
    default: {
      var initial = a.get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = a.get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = a.get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, a.get(i));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mCc$sp__AC__I__I = (function(a, seed) {
  var h = seed;
  var l = a.u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, a.get(0)), 1);
      break
    }
    default: {
      var initial = a.get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = a.get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = a.get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, a.get(i));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mDc$sp__AD__I__I = (function(a, seed) {
  var h = seed;
  var l = a.u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $$x1 = h;
      var dv = a.get(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().doubleHash__D__I(dv)), 1);
      break
    }
    default: {
      var dv$1 = a.get(0);
      var initial = $m_sr_Statics$().doubleHash__D__I(dv$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var dv$2 = a.get(1);
      var prev = $m_sr_Statics$().doubleHash__D__I(dv$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var dv$3 = a.get(i);
        var hash = $m_sr_Statics$().doubleHash__D__I(dv$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $$x2 = h;
            var dv$4 = a.get(i);
            h = this.mix__I__I__I($$x2, $m_sr_Statics$().doubleHash__D__I(dv$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mFc$sp__AF__I__I = (function(a, seed) {
  var h = seed;
  var l = a.u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $$x1 = h;
      var fv = a.get(0);
      var this$1 = $m_sr_Statics$();
      return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, this$1.doubleHash__D__I(fv)), 1);
      break
    }
    default: {
      var fv$1 = a.get(0);
      var this$2 = $m_sr_Statics$();
      var initial = this$2.doubleHash__D__I(fv$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var fv$2 = a.get(1);
      var this$3 = $m_sr_Statics$();
      var prev = this$3.doubleHash__D__I(fv$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var fv$3 = a.get(i);
        var this$4 = $m_sr_Statics$();
        var hash = this$4.doubleHash__D__I(fv$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $$x2 = h;
            var fv$4 = a.get(i);
            var this$5 = $m_sr_Statics$();
            h = this.mix__I__I__I($$x2, this$5.doubleHash__D__I(fv$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mIc$sp__AI__I__I = (function(a, seed) {
  var h = seed;
  var l = a.u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, a.get(0)), 1);
      break
    }
    default: {
      var initial = a.get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = a.get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = a.get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, a.get(i));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mJc$sp__AJ__I__I = (function(a, seed) {
  var h = seed;
  var l = a.u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $$x1 = h;
      var t = a.get(0);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi))), 1);
      break
    }
    default: {
      var t$1 = a.get(0);
      var lo$1 = t$1.RTLong__f_lo;
      var hi$1 = t$1.RTLong__f_hi;
      var initial = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$1, hi$1));
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var t$2 = a.get(1);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      var prev = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$2, hi$2));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var t$3 = a.get(i);
        var lo$3 = t$3.RTLong__f_lo;
        var hi$3 = t$3.RTLong__f_hi;
        var hash = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$3, hi$3));
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $$x2 = h;
            var t$4 = a.get(i);
            var lo$4 = t$4.RTLong__f_lo;
            var hi$4 = t$4.RTLong__f_hi;
            h = this.mix__I__I__I($$x2, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$4, hi$4)));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mSc$sp__AS__I__I = (function(a, seed) {
  var h = seed;
  var l = a.u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, a.get(0)), 1);
      break
    }
    default: {
      var initial = a.get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = a.get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = a.get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, a.get(i));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mVc$sp__Ajl_Void__I__I = (function(a, seed) {
  var h = seed;
  var l = a.u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, 0), 1);
      break
    }
    default: {
      h = this.mix__I__I__I(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        if ((rangeDiff !== ((-prev) | 0))) {
          h = this.mix__I__I__I(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, 0);
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = 0;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
/** @constructor */
function $c_Lscodec_bits_ByteVector$At() {
  /*<skip>*/
}
$c_Lscodec_bits_ByteVector$At.prototype = new $h_O();
$c_Lscodec_bits_ByteVector$At.prototype.constructor = $c_Lscodec_bits_ByteVector$At;
/** @constructor */
function $h_Lscodec_bits_ByteVector$At() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$At.prototype = $c_Lscodec_bits_ByteVector$At.prototype;
$c_Lscodec_bits_ByteVector$At.prototype.asByteBuffer__J__I__Ljava_nio_ByteBuffer = (function(offset, size) {
  var dimensions = new $ac_I(new Int32Array([size]));
  var arr = $asArrayOf_B($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_B.getClassOf(), dimensions), 1);
  this.copyToArray__AB__I__J__I__V(arr, 0, offset, size);
  var length = arr.u.length;
  return $m_Ljava_nio_HeapByteBuffer$().wrap__AB__I__I__I__I__Z__Ljava_nio_ByteBuffer(arr, 0, arr.u.length, 0, length, false).asReadOnlyBuffer__Ljava_nio_ByteBuffer()
});
$c_Lscodec_bits_ByteVector$At.prototype.copyToArray__AB__I__J__I__V = (function(xs, start, offset, size) {
  var i = 0;
  while ((i < size)) {
    var $$x1 = i;
    var value = i;
    var hi = (value >> 31);
    var alo = offset.RTLong__f_lo;
    var ahi = offset.RTLong__f_hi;
    var lo = ((alo + value) | 0);
    var hi$1 = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + hi) | 0)) | 0) : ((ahi + hi) | 0));
    xs.set(((start + $$x1) | 0), this.apply__J__B(new $c_RTLong(lo, hi$1)));
    i = ((1 + i) | 0)
  }
});
/** @constructor */
function $c_Lscodec_bits_ByteVector$F1BU() {
  /*<skip>*/
}
$c_Lscodec_bits_ByteVector$F1BU.prototype = new $h_O();
$c_Lscodec_bits_ByteVector$F1BU.prototype.constructor = $c_Lscodec_bits_ByteVector$F1BU;
/** @constructor */
function $h_Lscodec_bits_ByteVector$F1BU() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$F1BU.prototype = $c_Lscodec_bits_ByteVector$F1BU.prototype;
/** @constructor */
function $c_Lscodec_bits_ByteVector$F2B() {
  /*<skip>*/
}
$c_Lscodec_bits_ByteVector$F2B.prototype = new $h_O();
$c_Lscodec_bits_ByteVector$F2B.prototype.constructor = $c_Lscodec_bits_ByteVector$F2B;
/** @constructor */
function $h_Lscodec_bits_ByteVector$F2B() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$F2B.prototype = $c_Lscodec_bits_ByteVector$F2B.prototype;
function $f_Lscodec_bits_ByteVectorCrossPlatform__toUint8Array__sjs_js_typedarray_Uint8Array($thiz) {
  return new Uint8Array($f_Lscodec_bits_ByteVectorCrossPlatform__toJSArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz))
}
function $f_Lscodec_bits_ByteVectorCrossPlatform__copyToJSArrayBuffer__sjs_js_typedarray_ArrayBuffer__I__V($thiz, dest, start) {
  var size = $m_Lscodec_bits_ByteVector$().toIntSize__J__I($as_Lscodec_bits_ByteVector($thiz).size__J());
  $f_Lscodec_bits_ByteVectorCrossPlatform__copyToJSArrayBuffer__sjs_js_typedarray_ArrayBuffer__I__J__I__V($thiz, dest, start, $L0, size)
}
function $f_Lscodec_bits_ByteVectorCrossPlatform__copyToJSArrayBuffer__sjs_js_typedarray_ArrayBuffer__I__J__I__V($thiz, dest, start, offset, size) {
  var i = 0;
  var x = $uI(dest.byteLength);
  var n = ((x < size) ? x : size);
  var out = new Int8Array(dest);
  while ((i < n)) {
    var $$x1 = i;
    var this$7 = $as_Lscodec_bits_ByteVector($thiz);
    var value = i;
    var hi = (value >> 31);
    var alo = offset.RTLong__f_lo;
    var ahi = offset.RTLong__f_hi;
    var lo = ((alo + value) | 0);
    var hi$1 = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + hi) | 0)) | 0) : ((ahi + hi) | 0));
    out[((start + $$x1) | 0)] = this$7.get__J__B(new $c_RTLong(lo, hi$1));
    i = ((1 + i) | 0)
  }
}
function $f_Lscodec_bits_ByteVectorCrossPlatform__toJSArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz) {
  var x1 = $as_Lscodec_bits_ByteVector($thiz);
  if ((x1 instanceof $c_Lscodec_bits_ByteVector$Chunk)) {
    var x$1 = $as_Lscodec_bits_ByteVector$Chunk(x1);
    var x4 = x$1.Lscodec_bits_ByteVector$Chunk__f_bytes;
    var bb = x4.asByteBuffer__Ljava_nio_ByteBuffer();
    if (bb.hasArrayBuffer__Z()) {
      return bb.arrayBuffer__O()
    } else {
      var ab = new ArrayBuffer(((bb.Ljava_nio_Buffer__f__limit - bb.Ljava_nio_Buffer__f_java$nio$Buffer$$_position) | 0));
      $m_sjs_js_typedarray_TypedArrayBuffer$().wrap__sjs_js_typedarray_ArrayBuffer__Ljava_nio_ByteBuffer(ab).put__Ljava_nio_ByteBuffer__Ljava_nio_ByteBuffer(bb);
      return ab
    }
  };
  var dest = new ArrayBuffer($m_Lscodec_bits_ByteVector$().toIntSize__J__I($as_Lscodec_bits_ByteVector($thiz).size__J()));
  $f_Lscodec_bits_ByteVectorCrossPlatform__copyToJSArrayBuffer__sjs_js_typedarray_ArrayBuffer__I__V($thiz, dest, 0);
  return dest
}
function $f_Lscoin_CryptoPlatform__$init$__V($thiz) {
  $m_Lscoin_monkeyPatch$().init__V();
  new $c_Ljava_security_SecureRandom();
  $m_Ljava_math_BigInteger$().valueOf__J__Ljava_math_BigInteger($L0);
  $m_Ljava_math_BigInteger$().valueOf__J__Ljava_math_BigInteger(new $c_RTLong(1, 0))
}
function $f_Lscoin_CryptoPlatform__sha256__Lscodec_bits_ByteVector__Lscoin_ByteVector32($thiz, input) {
  $m_Lscoin_ByteVector32$();
  var this$1 = $m_Lscodec_bits_ByteVector$();
  var typedArray = (0, $i_$0040noble$002fhashes$002fsha256.sha256)($f_Lscodec_bits_ByteVectorCrossPlatform__toUint8Array__sjs_js_typedarray_Uint8Array(input));
  var bytes = $f_Lscodec_bits_ByteVectorCompanionCrossPlatform__fromUint8Array__sjs_js_typedarray_Uint8Array__Lscodec_bits_ByteVector(this$1, typedArray);
  return new $c_Lscoin_ByteVector32(bytes)
}
function $ct_Lscoin_CryptoPlatform$PrivateKeyPlatform__Lscoin_CryptoPlatform__Lscoin_ByteVector32__($thiz, outer, value) {
  $thiz.Lscoin_CryptoPlatform$PrivateKeyPlatform__f_value = value;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException()
  };
  return $thiz
}
/** @constructor */
function $c_Lscoin_CryptoPlatform$PrivateKeyPlatform() {
  this.Lscoin_CryptoPlatform$PrivateKeyPlatform__f_value = null
}
$c_Lscoin_CryptoPlatform$PrivateKeyPlatform.prototype = new $h_O();
$c_Lscoin_CryptoPlatform$PrivateKeyPlatform.prototype.constructor = $c_Lscoin_CryptoPlatform$PrivateKeyPlatform;
/** @constructor */
function $h_Lscoin_CryptoPlatform$PrivateKeyPlatform() {
  /*<skip>*/
}
$h_Lscoin_CryptoPlatform$PrivateKeyPlatform.prototype = $c_Lscoin_CryptoPlatform$PrivateKeyPlatform.prototype;
$c_Lscoin_CryptoPlatform$PrivateKeyPlatform.prototype.publicKey__Lscoin_Crypto$PublicKey = (function() {
  var this$2 = $m_Lscodec_bits_ByteVector$();
  var $$x1 = $i_$0040noble$002fsecp256k1;
  var this$1 = this.Lscoin_CryptoPlatform$PrivateKeyPlatform__f_value.Lscoin_ByteVector32__f_bytes;
  var typedArray = $$x1.getPublicKey($f_Lscodec_bits_ByteVectorCrossPlatform__toUint8Array__sjs_js_typedarray_Uint8Array(this$1), true);
  var value = $f_Lscodec_bits_ByteVectorCompanionCrossPlatform__view__sjs_js_typedarray_Uint8Array__Lscodec_bits_ByteVector(this$2, typedArray);
  return new $c_Lscoin_Crypto$PublicKey(value)
});
function $ct_Lscoin_CryptoPlatform$PublicKeyPlatform__Lscoin_CryptoPlatform__Lscodec_bits_ByteVector__($thiz, outer, value) {
  if ((outer === null)) {
    throw new $c_jl_NullPointerException()
  };
  return $thiz
}
/** @constructor */
function $c_Lscoin_CryptoPlatform$PublicKeyPlatform() {
  /*<skip>*/
}
$c_Lscoin_CryptoPlatform$PublicKeyPlatform.prototype = new $h_O();
$c_Lscoin_CryptoPlatform$PublicKeyPlatform.prototype.constructor = $c_Lscoin_CryptoPlatform$PublicKeyPlatform;
/** @constructor */
function $h_Lscoin_CryptoPlatform$PublicKeyPlatform() {
  /*<skip>*/
}
$h_Lscoin_CryptoPlatform$PublicKeyPlatform.prototype = $c_Lscoin_CryptoPlatform$PublicKeyPlatform.prototype;
/** @constructor */
function $c_Lscoin_Scoin$() {
  /*<skip>*/
}
$c_Lscoin_Scoin$.prototype = new $h_O();
$c_Lscoin_Scoin$.prototype.constructor = $c_Lscoin_Scoin$;
/** @constructor */
function $h_Lscoin_Scoin$() {
  /*<skip>*/
}
$h_Lscoin_Scoin$.prototype = $c_Lscoin_Scoin$.prototype;
$c_Lscoin_Scoin$.prototype.pubkey__T = (function() {
  var value = $m_Lscoin_ByteVector32$().fromValidHex__T__Lscoin_ByteVector32($m_sc_StringOps$().$times$extension__T__I__T("01", 32));
  var this$3 = new $c_Lscoin_Crypto$PrivateKey(value).publicKey__Lscoin_Crypto$PublicKey();
  var this$4 = this$3.Lscoin_Crypto$PublicKey__f_value;
  return this$4.toHex__Lscodec_bits_Bases$HexAlphabet__T($m_Lscodec_bits_Bases$Alphabets$HexLowercase$())
});
$c_Lscoin_Scoin$.prototype.$js$exported$meth$sayHello__O = (function() {
  var this$2 = $m_s_Console$();
  var this$3 = this$2.out__Ljava_io_PrintStream();
  this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V("hello javascript land, from Scoin!\n")
});
$c_Lscoin_Scoin$.prototype.$js$exported$prop$pubkey__O = (function() {
  return this.pubkey__T()
});
Object.defineProperty($c_Lscoin_Scoin$.prototype, "pubkey", {
  "get": (function() {
    return this.$js$exported$prop$pubkey__O()
  }),
  "configurable": true
});
$c_Lscoin_Scoin$.prototype.sayHello = (function() {
  return this.$js$exported$meth$sayHello__O()
});
var $d_Lscoin_Scoin$ = new $TypeData().initClass({
  Lscoin_Scoin$: 0
}, false, "scoin.Scoin$", {
  Lscoin_Scoin$: 1,
  O: 1
});
$c_Lscoin_Scoin$.prototype.$classData = $d_Lscoin_Scoin$;
var $n_Lscoin_Scoin$;
function $m_Lscoin_Scoin$() {
  if ((!$n_Lscoin_Scoin$)) {
    $n_Lscoin_Scoin$ = new $c_Lscoin_Scoin$()
  };
  return $n_Lscoin_Scoin$
}
/** @constructor */
function $c_Lscoin_monkeyPatch$() {
  /*<skip>*/
}
$c_Lscoin_monkeyPatch$.prototype = new $h_O();
$c_Lscoin_monkeyPatch$.prototype.constructor = $c_Lscoin_monkeyPatch$;
/** @constructor */
function $h_Lscoin_monkeyPatch$() {
  /*<skip>*/
}
$h_Lscoin_monkeyPatch$.prototype = $c_Lscoin_monkeyPatch$.prototype;
$c_Lscoin_monkeyPatch$.prototype.hmacSha256Sync__sjs_js_typedarray_Uint8Array__sci_Seq__sjs_js_typedarray_Uint8Array = (function(key, msgs) {
  var elem = $i_$0040noble$002fhashes$002fhmac.hmac.create($i_$0040noble$002fhashes$002fsha256.sha256, key);
  var hmac = new $c_sr_ObjectRef(elem);
  msgs.foreach__F1__V(new $c_sjsr_AnonFunction1(((data) => {
    var ev$1 = hmac.sr_ObjectRef__f_elem.update(data);
    hmac.sr_ObjectRef__f_elem = ev$1;
    ev$1 = null
  })));
  return hmac.sr_ObjectRef__f_elem.digest()
});
$c_Lscoin_monkeyPatch$.prototype.init__V = (function() {
  $i_$0040noble$002fsecp256k1.utils.hmacSha256Sync = ((key, ...msgs) => {
    var msgs$1 = new $c_sjsr_WrappedVarArgs(msgs);
    return this.hmacSha256Sync__sjs_js_typedarray_Uint8Array__sci_Seq__sjs_js_typedarray_Uint8Array(key, msgs$1)
  });
  $i_$0040noble$002fsecp256k1.utils.sha256Sync = ((...msgs$2) => {
    var msgs$3 = new $c_sjsr_WrappedVarArgs(msgs$2);
    $m_Lscoin_ByteVector32$();
    var this$10 = $m_Lscoin_Crypto$();
    var $$x1 = $m_Lscodec_bits_ByteVector$();
    var b = $m_sjsr_WrappedVarArgs$().newBuilder__scm_Builder();
    var this$8 = new $c_sc_IndexedSeqView$Id(msgs$3);
    var it = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$8);
    while ((it.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
      var arg1 = it.next__O();
      var this$9 = $m_Lscodec_bits_ByteVector$();
      var elem = $f_Lscodec_bits_ByteVectorCompanionCrossPlatform__view__sjs_js_typedarray_Uint8Array__Lscodec_bits_ByteVector(this$9, arg1);
      b.addOne__O__scm_Growable(elem)
    };
    var input = $$x1.concat__sc_IterableOnce__Lscodec_bits_ByteVector($as_sc_IterableOnce(b.result__O()));
    var h = $f_Lscoin_CryptoPlatform__sha256__Lscodec_bits_ByteVector__Lscoin_ByteVector32(this$10, input);
    var this$12 = h.Lscoin_ByteVector32__f_bytes;
    return $f_Lscodec_bits_ByteVectorCrossPlatform__toUint8Array__sjs_js_typedarray_Uint8Array(this$12)
  })
});
var $d_Lscoin_monkeyPatch$ = new $TypeData().initClass({
  Lscoin_monkeyPatch$: 0
}, false, "scoin.monkeyPatch$", {
  Lscoin_monkeyPatch$: 1,
  O: 1
});
$c_Lscoin_monkeyPatch$.prototype.$classData = $d_Lscoin_monkeyPatch$;
var $n_Lscoin_monkeyPatch$;
function $m_Lscoin_monkeyPatch$() {
  if ((!$n_Lscoin_monkeyPatch$)) {
    $n_Lscoin_monkeyPatch$ = new $c_Lscoin_monkeyPatch$()
  };
  return $n_Lscoin_monkeyPatch$
}
function $p_jl_Character$__getTypeGE256__I__I($thiz, codePoint) {
  return $p_jl_Character$__charTypes__AI($thiz).get($p_jl_Character$__findIndexOfRange__AI__I__Z__I($thiz, $p_jl_Character$__charTypeIndices__AI($thiz), codePoint, false))
}
function $p_jl_Character$__java$lang$Character$$charTypesFirst256$lzycompute__AI($thiz) {
  if (((((1 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_java$lang$Character$$charTypesFirst256 = new $ac_I(new Int32Array([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 12, 24, 24, 24, 26, 24, 24, 24, 21, 22, 24, 25, 24, 20, 24, 24, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 24, 24, 25, 25, 25, 24, 24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21, 24, 22, 27, 23, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 21, 25, 22, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 12, 24, 26, 26, 26, 26, 28, 24, 27, 28, 5, 29, 25, 16, 28, 27, 28, 25, 11, 11, 27, 2, 24, 24, 27, 11, 5, 30, 11, 11, 11, 24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 25, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 25, 2, 2, 2, 2, 2, 2, 2, 2]));
    $thiz.jl_Character$__f_bitmap$0 = (((1 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_java$lang$Character$$charTypesFirst256
}
function $p_jl_Character$__charTypeIndices$lzycompute__AI($thiz) {
  if (((((2 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    var deltas = new $ac_I(new Int32Array([257, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3, 2, 1, 1, 1, 2, 1, 3, 2, 4, 1, 2, 1, 3, 3, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 3, 1, 1, 1, 2, 2, 1, 1, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 2, 1, 2, 2, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 69, 1, 27, 18, 4, 12, 14, 5, 7, 1, 1, 1, 17, 112, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 1, 5, 2, 1, 1, 3, 1, 1, 1, 2, 1, 17, 1, 9, 35, 1, 2, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 2, 2, 51, 48, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 38, 2, 1, 6, 1, 39, 1, 1, 1, 4, 1, 1, 45, 1, 1, 1, 2, 1, 2, 1, 1, 8, 27, 5, 3, 2, 11, 5, 1, 3, 2, 1, 2, 2, 11, 1, 2, 2, 32, 1, 10, 21, 10, 4, 2, 1, 99, 1, 1, 7, 1, 1, 6, 2, 2, 1, 4, 2, 10, 3, 2, 1, 14, 1, 1, 1, 1, 30, 27, 2, 89, 11, 1, 14, 10, 33, 9, 2, 1, 3, 1, 5, 22, 4, 1, 9, 1, 3, 1, 5, 2, 15, 1, 25, 3, 2, 1, 65, 1, 1, 11, 55, 27, 1, 3, 1, 54, 1, 1, 1, 1, 3, 8, 4, 1, 2, 1, 7, 10, 2, 2, 10, 1, 1, 6, 1, 7, 1, 1, 2, 1, 8, 2, 2, 2, 22, 1, 7, 1, 1, 3, 4, 2, 1, 1, 3, 4, 2, 2, 2, 2, 1, 1, 8, 1, 4, 2, 1, 3, 2, 2, 10, 2, 2, 6, 1, 1, 5, 2, 1, 1, 6, 4, 2, 2, 22, 1, 7, 1, 2, 1, 2, 1, 2, 2, 1, 1, 3, 2, 4, 2, 2, 3, 3, 1, 7, 4, 1, 1, 7, 10, 2, 3, 1, 11, 2, 1, 1, 9, 1, 3, 1, 22, 1, 7, 1, 2, 1, 5, 2, 1, 1, 3, 5, 1, 2, 1, 1, 2, 1, 2, 1, 15, 2, 2, 2, 10, 1, 1, 15, 1, 2, 1, 8, 2, 2, 2, 22, 1, 7, 1, 2, 1, 5, 2, 1, 1, 1, 1, 1, 4, 2, 2, 2, 2, 1, 8, 1, 1, 4, 2, 1, 3, 2, 2, 10, 1, 1, 6, 10, 1, 1, 1, 6, 3, 3, 1, 4, 3, 2, 1, 1, 1, 2, 3, 2, 3, 3, 3, 12, 4, 2, 1, 2, 3, 3, 1, 3, 1, 2, 1, 6, 1, 14, 10, 3, 6, 1, 1, 6, 3, 1, 8, 1, 3, 1, 23, 1, 10, 1, 5, 3, 1, 3, 4, 1, 3, 1, 4, 7, 2, 1, 2, 6, 2, 2, 2, 10, 8, 7, 1, 2, 2, 1, 8, 1, 3, 1, 23, 1, 10, 1, 5, 2, 1, 1, 1, 1, 5, 1, 1, 2, 1, 2, 2, 7, 2, 7, 1, 1, 2, 2, 2, 10, 1, 2, 15, 2, 1, 8, 1, 3, 1, 41, 2, 1, 3, 4, 1, 3, 1, 3, 1, 1, 8, 1, 8, 2, 2, 2, 10, 6, 3, 1, 6, 2, 2, 1, 18, 3, 24, 1, 9, 1, 1, 2, 7, 3, 1, 4, 3, 3, 1, 1, 1, 8, 18, 2, 1, 12, 48, 1, 2, 7, 4, 1, 6, 1, 8, 1, 10, 2, 37, 2, 1, 1, 2, 2, 1, 1, 2, 1, 6, 4, 1, 7, 1, 3, 1, 1, 1, 1, 2, 2, 1, 4, 1, 2, 6, 1, 2, 1, 2, 5, 1, 1, 1, 6, 2, 10, 2, 4, 32, 1, 3, 15, 1, 1, 3, 2, 6, 10, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 8, 1, 36, 4, 14, 1, 5, 1, 2, 5, 11, 1, 36, 1, 8, 1, 6, 1, 2, 5, 4, 2, 37, 43, 2, 4, 1, 6, 1, 2, 2, 2, 1, 10, 6, 6, 2, 2, 4, 3, 1, 3, 2, 7, 3, 4, 13, 1, 2, 2, 6, 1, 1, 1, 10, 3, 1, 2, 38, 1, 1, 5, 1, 2, 43, 1, 1, 332, 1, 4, 2, 7, 1, 1, 1, 4, 2, 41, 1, 4, 2, 33, 1, 4, 2, 7, 1, 1, 1, 4, 2, 15, 1, 57, 1, 4, 2, 67, 2, 3, 9, 20, 3, 16, 10, 6, 85, 11, 1, 620, 2, 17, 1, 26, 1, 1, 3, 75, 3, 3, 15, 13, 1, 4, 3, 11, 18, 3, 2, 9, 18, 2, 12, 13, 1, 3, 1, 2, 12, 52, 2, 1, 7, 8, 1, 2, 11, 3, 1, 3, 1, 1, 1, 2, 10, 6, 10, 6, 6, 1, 4, 3, 1, 1, 10, 6, 35, 1, 52, 8, 41, 1, 1, 5, 70, 10, 29, 3, 3, 4, 2, 3, 4, 2, 1, 6, 3, 4, 1, 3, 2, 10, 30, 2, 5, 11, 44, 4, 17, 7, 2, 6, 10, 1, 3, 34, 23, 2, 3, 2, 2, 53, 1, 1, 1, 7, 1, 1, 1, 1, 2, 8, 6, 10, 2, 1, 10, 6, 10, 6, 7, 1, 6, 82, 4, 1, 47, 1, 1, 5, 1, 1, 5, 1, 2, 7, 4, 10, 7, 10, 9, 9, 3, 2, 1, 30, 1, 4, 2, 2, 1, 1, 2, 2, 10, 44, 1, 1, 2, 3, 1, 1, 3, 2, 8, 4, 36, 8, 8, 2, 2, 3, 5, 10, 3, 3, 10, 30, 6, 2, 64, 8, 8, 3, 1, 13, 1, 7, 4, 1, 4, 2, 1, 2, 9, 44, 63, 13, 1, 34, 37, 39, 21, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 8, 6, 2, 6, 2, 8, 8, 8, 8, 6, 2, 6, 2, 8, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 14, 2, 8, 8, 8, 8, 8, 8, 5, 1, 2, 4, 1, 1, 1, 3, 3, 1, 2, 4, 1, 3, 4, 2, 2, 4, 1, 3, 8, 5, 3, 2, 3, 1, 2, 4, 1, 2, 1, 11, 5, 6, 2, 1, 1, 1, 2, 1, 1, 1, 8, 1, 1, 5, 1, 9, 1, 1, 4, 2, 3, 1, 1, 1, 11, 1, 1, 1, 10, 1, 5, 5, 6, 1, 1, 2, 6, 3, 1, 1, 1, 10, 3, 1, 1, 1, 13, 3, 32, 16, 13, 4, 1, 3, 12, 15, 2, 1, 4, 1, 2, 1, 3, 2, 3, 1, 1, 1, 2, 1, 5, 6, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 4, 1, 2, 2, 2, 5, 1, 4, 1, 1, 2, 1, 1, 16, 35, 1, 1, 4, 1, 6, 5, 5, 2, 4, 1, 2, 1, 2, 1, 7, 1, 31, 2, 2, 1, 1, 1, 31, 268, 8, 4, 20, 2, 7, 1, 1, 81, 1, 30, 25, 40, 6, 18, 12, 39, 25, 11, 21, 60, 78, 22, 183, 1, 9, 1, 54, 8, 111, 1, 144, 1, 103, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 30, 44, 5, 1, 1, 31, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 256, 131, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 63, 1, 1, 1, 1, 32, 1, 1, 258, 48, 21, 2, 6, 3, 10, 166, 47, 1, 47, 1, 1, 1, 3, 2, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 1, 6, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 6, 1, 1, 1, 1, 3, 1, 1, 5, 4, 1, 2, 38, 1, 1, 5, 1, 2, 56, 7, 1, 1, 14, 1, 23, 9, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 32, 2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 9, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 10, 2, 68, 26, 1, 89, 12, 214, 26, 12, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 9, 4, 2, 1, 5, 2, 3, 1, 1, 1, 2, 1, 86, 2, 2, 2, 2, 1, 1, 90, 1, 3, 1, 5, 41, 3, 94, 1, 2, 4, 10, 27, 5, 36, 12, 16, 31, 1, 10, 30, 8, 1, 15, 32, 10, 39, 15, 320, 6582, 10, 64, 20941, 51, 21, 1, 1143, 3, 55, 9, 40, 6, 2, 268, 1, 3, 16, 10, 2, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 70, 10, 2, 6, 8, 23, 9, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 77, 2, 1, 7, 1, 3, 1, 4, 1, 23, 2, 2, 1, 4, 4, 6, 2, 1, 1, 6, 52, 4, 8, 2, 50, 16, 1, 9, 2, 10, 6, 18, 6, 3, 1, 4, 10, 28, 8, 2, 23, 11, 2, 11, 1, 29, 3, 3, 1, 47, 1, 2, 4, 2, 1, 4, 13, 1, 1, 10, 4, 2, 32, 41, 6, 2, 2, 2, 2, 9, 3, 1, 8, 1, 1, 2, 10, 2, 4, 16, 1, 6, 3, 1, 1, 4, 48, 1, 1, 3, 2, 2, 5, 2, 1, 1, 1, 24, 2, 1, 2, 11, 1, 2, 2, 2, 1, 2, 1, 1, 10, 6, 2, 6, 2, 6, 9, 7, 1, 7, 145, 35, 2, 1, 2, 1, 2, 1, 1, 1, 2, 10, 6, 11172, 12, 23, 4, 49, 4, 2048, 6400, 366, 2, 106, 38, 7, 12, 5, 5, 1, 1, 10, 1, 13, 1, 5, 1, 1, 1, 2, 1, 2, 1, 108, 16, 17, 363, 1, 1, 16, 64, 2, 54, 40, 12, 1, 1, 2, 16, 7, 1, 1, 1, 6, 7, 9, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 4, 3, 3, 1, 4, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 2, 4, 5, 1, 135, 2, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 2, 10, 2, 3, 2, 26, 1, 1, 1, 1, 1, 1, 26, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 10, 1, 45, 2, 31, 3, 6, 2, 6, 2, 6, 2, 3, 3, 2, 1, 1, 1, 2, 1, 1, 4, 2, 10, 3, 2, 2, 12, 1, 26, 1, 19, 1, 2, 1, 15, 2, 14, 34, 123, 5, 3, 4, 45, 3, 9, 53, 4, 17, 1, 5, 12, 52, 45, 1, 130, 29, 3, 49, 47, 31, 1, 4, 12, 17, 1, 8, 1, 53, 30, 1, 1, 36, 4, 8, 1, 5, 42, 40, 40, 78, 2, 10, 854, 6, 2, 1, 1, 44, 1, 2, 3, 1, 2, 23, 1, 1, 8, 160, 22, 6, 3, 1, 26, 5, 1, 64, 56, 6, 2, 64, 1, 3, 1, 2, 5, 4, 4, 1, 3, 1, 27, 4, 3, 4, 1, 8, 8, 9, 7, 29, 2, 1, 128, 54, 3, 7, 22, 2, 8, 19, 5, 8, 128, 73, 535, 31, 385, 1, 1, 1, 53, 15, 7, 4, 20, 10, 16, 2, 1, 45, 3, 4, 2, 2, 2, 1, 4, 14, 25, 7, 10, 6, 3, 36, 5, 1, 8, 1, 10, 4, 60, 2, 1, 48, 3, 9, 2, 4, 4, 7, 10, 1190, 43, 1, 1, 1, 2, 6, 1, 1, 8, 10, 2358, 879, 145, 99, 13, 4, 2956, 1071, 13265, 569, 1223, 69, 11, 1, 46, 16, 4, 13, 16480, 2, 8190, 246, 10, 39, 2, 60, 2, 3, 3, 6, 8, 8, 2, 7, 30, 4, 48, 34, 66, 3, 1, 186, 87, 9, 18, 142, 26, 26, 26, 7, 1, 18, 26, 26, 1, 1, 2, 2, 1, 2, 2, 2, 4, 1, 8, 4, 1, 1, 1, 7, 1, 11, 26, 26, 2, 1, 4, 2, 8, 1, 7, 1, 26, 2, 1, 4, 1, 5, 1, 1, 3, 7, 1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 28, 2, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 1, 1, 2, 50, 5632, 4, 1, 27, 1, 2, 1, 1, 2, 1, 1, 10, 1, 4, 1, 1, 1, 1, 6, 1, 4, 1, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 4, 1, 7, 1, 4, 1, 4, 1, 1, 1, 10, 1, 17, 5, 3, 1, 5, 1, 17, 52, 2, 270, 44, 4, 100, 12, 15, 2, 14, 2, 15, 1, 15, 32, 11, 5, 31, 1, 60, 4, 43, 75, 29, 13, 43, 5, 9, 7, 2, 174, 33, 15, 6, 1, 70, 3, 20, 12, 37, 1, 5, 21, 17, 15, 63, 1, 1, 1, 182, 1, 4, 3, 62, 2, 4, 12, 24, 147, 70, 4, 11, 48, 70, 58, 116, 2188, 42711, 41, 4149, 11, 222, 16354, 542, 722403, 1, 30, 96, 128, 240, 65040, 65534, 2, 65534]));
    $thiz.jl_Character$__f_charTypeIndices = $p_jl_Character$__uncompressDeltas__AI__AI($thiz, deltas);
    $thiz.jl_Character$__f_bitmap$0 = (((2 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_charTypeIndices
}
function $p_jl_Character$__charTypeIndices__AI($thiz) {
  return (((((2 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__charTypeIndices$lzycompute__AI($thiz) : $thiz.jl_Character$__f_charTypeIndices)
}
function $p_jl_Character$__charTypes$lzycompute__AI($thiz) {
  if (((((4 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_charTypes = new $ac_I(new Int32Array([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 1, 2, 5, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 4, 27, 4, 27, 4, 27, 4, 27, 4, 27, 6, 1, 2, 1, 2, 4, 27, 1, 2, 0, 4, 2, 24, 0, 27, 1, 24, 1, 0, 1, 0, 1, 2, 1, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 25, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 28, 6, 7, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 0, 4, 24, 0, 2, 0, 24, 20, 0, 26, 0, 6, 20, 6, 24, 6, 24, 6, 24, 6, 0, 5, 0, 5, 24, 0, 16, 0, 25, 24, 26, 24, 28, 6, 24, 0, 24, 5, 4, 5, 6, 9, 24, 5, 6, 5, 24, 5, 6, 16, 28, 6, 4, 6, 28, 6, 5, 9, 5, 28, 5, 24, 0, 16, 5, 6, 5, 6, 0, 5, 6, 5, 0, 9, 5, 6, 4, 28, 24, 4, 0, 5, 6, 4, 6, 4, 6, 4, 6, 0, 24, 0, 5, 6, 0, 24, 0, 5, 0, 5, 0, 6, 0, 6, 8, 5, 6, 8, 6, 5, 8, 6, 8, 6, 8, 5, 6, 5, 6, 24, 9, 24, 4, 5, 0, 5, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 0, 8, 0, 8, 6, 5, 0, 8, 0, 5, 0, 5, 6, 0, 9, 5, 26, 11, 28, 26, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 0, 8, 6, 0, 6, 0, 6, 0, 6, 0, 5, 0, 5, 0, 9, 6, 5, 6, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 0, 6, 8, 0, 8, 6, 0, 5, 0, 5, 6, 0, 9, 24, 26, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 8, 6, 0, 8, 0, 8, 6, 0, 6, 8, 0, 5, 0, 5, 6, 0, 9, 28, 5, 11, 0, 6, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 8, 6, 8, 0, 8, 0, 8, 6, 0, 5, 0, 8, 0, 9, 11, 28, 26, 28, 0, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 6, 8, 0, 6, 0, 6, 0, 6, 0, 5, 0, 5, 6, 0, 9, 0, 11, 28, 0, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 8, 0, 6, 8, 0, 8, 6, 0, 8, 0, 5, 0, 5, 6, 0, 9, 0, 5, 0, 8, 0, 5, 0, 5, 0, 5, 0, 5, 8, 6, 0, 8, 0, 8, 6, 5, 0, 8, 0, 5, 6, 0, 9, 11, 0, 28, 5, 0, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 0, 8, 6, 0, 6, 0, 8, 0, 8, 24, 0, 5, 6, 5, 6, 0, 26, 5, 4, 6, 24, 9, 24, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 6, 5, 6, 0, 6, 5, 0, 5, 0, 4, 0, 6, 0, 9, 0, 5, 0, 5, 28, 24, 28, 24, 28, 6, 28, 9, 11, 28, 6, 28, 6, 28, 6, 21, 22, 21, 22, 8, 5, 0, 5, 0, 6, 8, 6, 24, 6, 5, 6, 0, 6, 0, 28, 6, 28, 0, 28, 24, 28, 24, 0, 5, 8, 6, 8, 6, 8, 6, 8, 6, 5, 9, 24, 5, 8, 6, 5, 6, 5, 8, 5, 8, 5, 6, 5, 6, 8, 6, 8, 6, 5, 8, 9, 8, 6, 28, 1, 0, 1, 0, 1, 0, 5, 24, 4, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 24, 11, 0, 5, 28, 0, 5, 0, 20, 5, 24, 5, 12, 5, 21, 22, 0, 5, 24, 10, 0, 5, 0, 5, 6, 0, 5, 6, 24, 0, 5, 6, 0, 5, 0, 5, 0, 6, 0, 5, 6, 8, 6, 8, 6, 8, 6, 24, 4, 24, 26, 5, 6, 0, 9, 0, 11, 0, 24, 20, 24, 6, 12, 0, 9, 0, 5, 4, 5, 0, 5, 6, 5, 0, 5, 0, 5, 0, 6, 8, 6, 8, 0, 8, 6, 8, 6, 0, 28, 0, 24, 9, 5, 0, 5, 0, 5, 0, 8, 5, 8, 0, 9, 11, 0, 28, 5, 6, 8, 0, 24, 5, 8, 6, 8, 6, 0, 6, 8, 6, 8, 6, 8, 6, 0, 6, 9, 0, 9, 0, 24, 4, 24, 0, 6, 8, 5, 6, 8, 6, 8, 6, 8, 6, 8, 5, 0, 9, 24, 28, 6, 28, 0, 6, 8, 5, 8, 6, 8, 6, 8, 6, 8, 5, 9, 5, 6, 8, 6, 8, 6, 8, 6, 8, 0, 24, 5, 8, 6, 8, 6, 0, 24, 9, 0, 5, 9, 5, 4, 24, 0, 24, 0, 6, 24, 6, 8, 6, 5, 6, 5, 8, 6, 5, 0, 2, 4, 2, 4, 2, 4, 6, 0, 6, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 0, 2, 1, 2, 1, 2, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 2, 0, 2, 3, 2, 3, 2, 3, 2, 0, 2, 1, 3, 27, 2, 27, 2, 0, 2, 1, 3, 27, 2, 0, 2, 1, 0, 27, 2, 1, 27, 0, 2, 0, 2, 1, 3, 27, 0, 12, 16, 20, 24, 29, 30, 21, 29, 30, 21, 29, 24, 13, 14, 16, 12, 24, 29, 30, 24, 23, 24, 25, 21, 22, 24, 25, 24, 23, 24, 12, 16, 0, 16, 11, 4, 0, 11, 25, 21, 22, 4, 11, 25, 21, 22, 0, 4, 0, 26, 0, 6, 7, 6, 7, 6, 0, 28, 1, 28, 1, 28, 2, 1, 2, 1, 2, 28, 1, 28, 25, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 2, 1, 2, 5, 2, 28, 2, 1, 25, 1, 2, 28, 25, 28, 2, 28, 11, 10, 1, 2, 10, 11, 0, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 21, 22, 28, 25, 28, 25, 28, 25, 28, 0, 28, 0, 28, 0, 11, 28, 11, 28, 25, 28, 25, 28, 25, 28, 25, 28, 0, 28, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 11, 28, 25, 21, 22, 25, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 25, 28, 25, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 25, 21, 22, 21, 22, 25, 21, 22, 25, 28, 25, 28, 25, 0, 28, 0, 1, 0, 2, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 28, 1, 2, 1, 2, 6, 1, 2, 0, 24, 11, 24, 2, 0, 2, 0, 2, 0, 5, 0, 4, 24, 0, 6, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 24, 29, 30, 29, 30, 24, 29, 30, 24, 29, 30, 24, 20, 24, 20, 24, 29, 30, 24, 29, 30, 21, 22, 21, 22, 21, 22, 21, 22, 24, 4, 24, 20, 0, 28, 0, 28, 0, 28, 0, 28, 0, 12, 24, 28, 4, 5, 10, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 28, 21, 22, 21, 22, 21, 22, 21, 22, 20, 21, 22, 28, 10, 6, 8, 20, 4, 28, 10, 4, 5, 24, 28, 0, 5, 0, 6, 27, 4, 5, 20, 5, 24, 4, 5, 0, 5, 0, 5, 0, 28, 11, 28, 5, 0, 28, 0, 5, 28, 0, 11, 28, 11, 28, 11, 28, 11, 28, 11, 28, 5, 0, 28, 5, 0, 5, 4, 5, 0, 28, 0, 5, 4, 24, 5, 4, 24, 5, 9, 5, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 6, 7, 24, 6, 24, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 6, 5, 10, 6, 24, 0, 27, 4, 27, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 27, 1, 2, 1, 2, 0, 1, 2, 1, 2, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 4, 2, 5, 6, 5, 6, 5, 6, 5, 8, 6, 8, 28, 0, 11, 28, 26, 28, 0, 5, 24, 0, 8, 5, 8, 6, 0, 24, 9, 0, 6, 5, 24, 5, 0, 9, 5, 6, 24, 5, 6, 8, 0, 24, 5, 0, 6, 8, 5, 6, 8, 6, 8, 6, 8, 24, 0, 4, 9, 0, 24, 0, 5, 6, 8, 6, 8, 6, 0, 5, 6, 5, 6, 8, 0, 9, 0, 24, 5, 4, 5, 28, 5, 8, 0, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 0, 5, 4, 24, 5, 8, 6, 8, 24, 5, 4, 8, 6, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 8, 6, 8, 6, 8, 24, 8, 6, 0, 9, 0, 5, 0, 5, 0, 5, 0, 19, 18, 5, 0, 5, 0, 2, 0, 2, 0, 5, 6, 5, 25, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 27, 0, 5, 21, 22, 0, 5, 0, 5, 0, 5, 26, 28, 0, 6, 24, 21, 22, 24, 0, 6, 0, 24, 20, 23, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 24, 21, 22, 24, 23, 24, 0, 24, 20, 21, 22, 21, 22, 21, 22, 24, 25, 20, 25, 0, 24, 26, 24, 0, 5, 0, 5, 0, 16, 0, 24, 26, 24, 21, 22, 24, 25, 24, 20, 24, 9, 24, 25, 24, 1, 21, 24, 22, 27, 23, 27, 2, 21, 25, 22, 25, 21, 22, 24, 21, 22, 24, 5, 4, 5, 4, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 26, 25, 27, 28, 26, 0, 28, 25, 28, 0, 16, 28, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 24, 0, 11, 0, 28, 10, 11, 28, 11, 0, 28, 0, 28, 6, 0, 5, 0, 5, 0, 5, 0, 11, 0, 5, 10, 5, 10, 0, 5, 0, 24, 5, 0, 5, 24, 10, 0, 1, 2, 5, 0, 9, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 24, 11, 0, 5, 11, 0, 24, 5, 0, 24, 0, 5, 0, 5, 0, 5, 6, 0, 6, 0, 6, 5, 0, 5, 0, 5, 0, 6, 0, 6, 11, 0, 24, 0, 5, 11, 24, 0, 5, 0, 24, 5, 0, 11, 5, 0, 11, 0, 5, 0, 11, 0, 8, 6, 8, 5, 6, 24, 0, 11, 9, 0, 6, 8, 5, 8, 6, 8, 6, 24, 16, 24, 0, 5, 0, 9, 0, 6, 5, 6, 8, 6, 0, 9, 24, 0, 6, 8, 5, 8, 6, 8, 5, 24, 0, 9, 0, 5, 6, 8, 6, 8, 6, 8, 6, 0, 9, 0, 5, 0, 10, 0, 24, 0, 5, 0, 5, 0, 5, 0, 5, 8, 0, 6, 4, 0, 5, 0, 28, 0, 28, 0, 28, 8, 6, 28, 8, 16, 6, 28, 6, 28, 6, 28, 0, 28, 6, 28, 0, 28, 0, 11, 0, 1, 2, 1, 2, 0, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 2, 0, 2, 0, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 2, 0, 9, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 25, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 11, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 5, 0, 5, 0, 5, 0, 5, 0, 16, 0, 16, 0, 6, 0, 18, 0, 18, 0]));
    $thiz.jl_Character$__f_bitmap$0 = (((4 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_charTypes
}
function $p_jl_Character$__charTypes__AI($thiz) {
  return (((((4 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__charTypes$lzycompute__AI($thiz) : $thiz.jl_Character$__f_charTypes)
}
function $p_jl_Character$__uncompressDeltas__AI__AI($thiz, deltas) {
  var acc = deltas.get(0);
  var i = 1;
  var len = deltas.u.length;
  while ((i !== len)) {
    acc = ((acc + deltas.get(i)) | 0);
    deltas.set(i, acc);
    i = ((1 + i) | 0)
  };
  return deltas
}
function $p_jl_Character$__findIndexOfRange__AI__I__Z__I($thiz, startOfRangesArray, value, hasEmptyRanges) {
  var i = $m_ju_Arrays$().binarySearch__AI__I__I(startOfRangesArray, value);
  if ((i >= 0)) {
    if (hasEmptyRanges) {
      var j = ((1 + i) | 0);
      while (((j < startOfRangesArray.u.length) && (startOfRangesArray.get(j) === value))) {
        j = ((1 + j) | 0)
      };
      return j
    } else {
      return ((1 + i) | 0)
    }
  } else {
    return (((-1) - i) | 0)
  }
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]));
    $thiz.jl_Character$__f_bitmap$0 = (((32 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
}
function $p_jl_Character$__isSeparator$1__I__Z($thiz, tpe) {
  return (((tpe === 12) || (tpe === 13)) || (tpe === 14))
}
/** @constructor */
function $c_jl_Character$() {
  this.jl_Character$__f_java$lang$Character$$charTypesFirst256 = null;
  this.jl_Character$__f_charTypeIndices = null;
  this.jl_Character$__f_charTypes = null;
  this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
  this.jl_Character$__f_bitmap$0 = 0
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
  /*<skip>*/
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.digitWithValidRadix__I__I__I = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0)
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0)
  } else {
    var p = $m_ju_Arrays$().binarySearch__AI__I__I($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1)
    } else {
      var v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).get(zeroCodePointIndex)) | 0);
      var value = ((v > 9) ? (-1) : v)
    }
  };
  return ((value < radix) ? value : (-1))
});
$c_jl_Character$.prototype.isWhitespace__I__Z = (function(codePoint) {
  return ((codePoint < 256) ? (((((((codePoint === 9) || (codePoint === 10)) || (codePoint === 11)) || (codePoint === 12)) || (codePoint === 13)) || ((codePoint >= 28) && (codePoint <= 31))) || ((codePoint !== 160) && $p_jl_Character$__isSeparator$1__I__Z(this, this.java$lang$Character$$charTypesFirst256__AI().get(codePoint)))) : (((codePoint !== 8199) && (codePoint !== 8239)) && $p_jl_Character$__isSeparator$1__I__Z(this, $p_jl_Character$__getTypeGE256__I__I(this, codePoint))))
});
$c_jl_Character$.prototype.java$lang$Character$$charTypesFirst256__AI = (function() {
  return (((((1 & this.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__java$lang$Character$$charTypesFirst256$lzycompute__AI(this) : this.jl_Character$__f_java$lang$Character$$charTypesFirst256)
});
var $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
function $p_jl_Integer$__fail$1__T__E($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
}
/** @constructor */
function $c_jl_Integer$() {
  /*<skip>*/
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
  /*<skip>*/
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.parseInt__T__I__I = (function(s, radix) {
  var len = ((s === null) ? 0 : s.length);
  if ((((len === 0) || (radix < 2)) || (radix > 36))) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var firstChar = $charAt(s, 0);
  var negative = (firstChar === 45);
  var maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= s.length)) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var result = 0.0;
  while ((i !== len)) {
    var $$x1 = $m_jl_Character$();
    var index = i;
    var digit = $$x1.digitWithValidRadix__I__I__I($charAt(s, index), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    i = ((1 + i) | 0)
  };
  if (negative) {
    var n = (-result);
    return $uI((n | 0.0))
  } else {
    var n$1 = result;
    return $uI((n$1 | 0.0))
  }
});
var $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
/** @constructor */
function $c_jl_Number() {
  /*<skip>*/
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
  /*<skip>*/
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
/** @constructor */
function $c_jl_String$() {
  /*<skip>*/
}
$c_jl_String$.prototype = new $h_O();
$c_jl_String$.prototype.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
  /*<skip>*/
}
$h_jl_String$.prototype = $c_jl_String$.prototype;
$c_jl_String$.prototype.new__AC__I__I__T = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  if ((((offset < 0) || (end < offset)) || (end > value.u.length))) {
    throw $ct_jl_StringIndexOutOfBoundsException__(new $c_jl_StringIndexOutOfBoundsException())
  };
  var result = "";
  var i = offset;
  while ((i !== end)) {
    var $$x1 = result;
    var this$1 = value.get(i);
    result = (("" + $$x1) + $as_T(String.fromCharCode(this$1)));
    i = ((1 + i) | 0)
  };
  return result
});
var $d_jl_String$ = new $TypeData().initClass({
  jl_String$: 0
}, false, "java.lang.String$", {
  jl_String$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_String$.prototype.$classData = $d_jl_String$;
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$()
  };
  return $n_jl_String$
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    var $$x1 = this;
    var reference = (false ? $$x1.sjs_js_JavaScriptException__f_exception : $$x1);
    var identifyingString = Object.prototype.toString.call(reference);
    if ((identifyingString !== "[object Error]")) {
      if ((Error.captureStackTrace === (void 0))) {
        new Error()
      } else {
        Error.captureStackTrace(this)
      }
    };
    return this
  };
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return $objectClassName(this)
  };
  $js$exported$prop$message__O() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
/** @constructor */
function $c_Ljava_math_BigInteger$() {
  this.Ljava_math_BigInteger$__f_ONE = null;
  this.Ljava_math_BigInteger$__f_TEN = null;
  this.Ljava_math_BigInteger$__f_ZERO = null;
  this.Ljava_math_BigInteger$__f_MINUS_ONE = null;
  this.Ljava_math_BigInteger$__f_SMALL_VALUES = null;
  $n_Ljava_math_BigInteger$ = this;
  this.Ljava_math_BigInteger$__f_ONE = $ct_Ljava_math_BigInteger__I__I__(new $c_Ljava_math_BigInteger(), 1, 1);
  this.Ljava_math_BigInteger$__f_TEN = $ct_Ljava_math_BigInteger__I__I__(new $c_Ljava_math_BigInteger(), 1, 10);
  this.Ljava_math_BigInteger$__f_ZERO = $ct_Ljava_math_BigInteger__I__I__(new $c_Ljava_math_BigInteger(), 0, 0);
  this.Ljava_math_BigInteger$__f_MINUS_ONE = $ct_Ljava_math_BigInteger__I__I__(new $c_Ljava_math_BigInteger(), (-1), 1);
  this.Ljava_math_BigInteger$__f_SMALL_VALUES = new ($d_Ljava_math_BigInteger.getArrayOf().constr)([this.Ljava_math_BigInteger$__f_ZERO, this.Ljava_math_BigInteger$__f_ONE, $ct_Ljava_math_BigInteger__I__I__(new $c_Ljava_math_BigInteger(), 1, 2), $ct_Ljava_math_BigInteger__I__I__(new $c_Ljava_math_BigInteger(), 1, 3), $ct_Ljava_math_BigInteger__I__I__(new $c_Ljava_math_BigInteger(), 1, 4), $ct_Ljava_math_BigInteger__I__I__(new $c_Ljava_math_BigInteger(), 1, 5), $ct_Ljava_math_BigInteger__I__I__(new $c_Ljava_math_BigInteger(), 1, 6), $ct_Ljava_math_BigInteger__I__I__(new $c_Ljava_math_BigInteger(), 1, 7), $ct_Ljava_math_BigInteger__I__I__(new $c_Ljava_math_BigInteger(), 1, 8), $ct_Ljava_math_BigInteger__I__I__(new $c_Ljava_math_BigInteger(), 1, 9), this.Ljava_math_BigInteger$__f_TEN]);
  var result = new ($d_Ljava_math_BigInteger.getArrayOf().constr)(32);
  var i = 0;
  while ((i < 32)) {
    var i$2 = i;
    var $$x1 = $m_Ljava_math_BigInteger$();
    var lo = (((32 & i$2) === 0) ? (1 << i$2) : 0);
    var hi = (((32 & i$2) === 0) ? 0 : (1 << i$2));
    result.set(i$2, $$x1.valueOf__J__Ljava_math_BigInteger(new $c_RTLong(lo, hi)));
    i = ((1 + i) | 0)
  }
}
$c_Ljava_math_BigInteger$.prototype = new $h_O();
$c_Ljava_math_BigInteger$.prototype.constructor = $c_Ljava_math_BigInteger$;
/** @constructor */
function $h_Ljava_math_BigInteger$() {
  /*<skip>*/
}
$h_Ljava_math_BigInteger$.prototype = $c_Ljava_math_BigInteger$.prototype;
$c_Ljava_math_BigInteger$.prototype.valueOf__J__Ljava_math_BigInteger = (function(lVal) {
  var ahi = lVal.RTLong__f_hi;
  if ((ahi < 0)) {
    if ((!((lVal.RTLong__f_lo === (-1)) && (lVal.RTLong__f_hi === (-1))))) {
      var lo = lVal.RTLong__f_lo;
      var hi = lVal.RTLong__f_hi;
      var lo$1 = ((-lo) | 0);
      var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
      return $ct_Ljava_math_BigInteger__I__J__(new $c_Ljava_math_BigInteger(), (-1), new $c_RTLong(lo$1, hi$1))
    } else {
      return this.Ljava_math_BigInteger$__f_MINUS_ONE
    }
  } else {
    var ahi$1 = lVal.RTLong__f_hi;
    if (((ahi$1 === 0) ? (((-2147483648) ^ lVal.RTLong__f_lo) <= (-2147483638)) : (ahi$1 < 0))) {
      return this.Ljava_math_BigInteger$__f_SMALL_VALUES.get(lVal.RTLong__f_lo)
    } else {
      return $ct_Ljava_math_BigInteger__I__J__(new $c_Ljava_math_BigInteger(), 1, lVal)
    }
  }
});
var $d_Ljava_math_BigInteger$ = new $TypeData().initClass({
  Ljava_math_BigInteger$: 0
}, false, "java.math.BigInteger$", {
  Ljava_math_BigInteger$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Ljava_math_BigInteger$.prototype.$classData = $d_Ljava_math_BigInteger$;
var $n_Ljava_math_BigInteger$;
function $m_Ljava_math_BigInteger$() {
  if ((!$n_Ljava_math_BigInteger$)) {
    $n_Ljava_math_BigInteger$ = new $c_Ljava_math_BigInteger$()
  };
  return $n_Ljava_math_BigInteger$
}
function $p_Ljava_security_SecureRandom$__getRandomValuesFun$lzycompute__sjs_js_Function1($thiz) {
  if ((!$thiz.Ljava_security_SecureRandom$__f_bitmap$0)) {
    if ((($as_T((typeof crypto)) !== "undefined") && ($as_T((typeof crypto.getRandomValues)) === "function"))) {
      var $$x1 = ((arg1$2) => {
        $m_Ljava_security_SecureRandom$().java$security$SecureRandom$$$anonfun$getRandomValuesFun$1__sjs_js_typedarray_ArrayBufferView__V(arg1$2)
      })
    } else {
      if (($as_T((typeof require)) !== "function")) {
        $p_Ljava_security_SecureRandom$__notSupported__E($thiz)
      };
      var $$x1 = $p_Ljava_security_SecureRandom$__liftedTree1$1__sjs_js_Function1($thiz)
    };
    $thiz.Ljava_security_SecureRandom$__f_java$security$SecureRandom$$getRandomValuesFun = $$x1;
    $thiz.Ljava_security_SecureRandom$__f_bitmap$0 = true
  };
  return $thiz.Ljava_security_SecureRandom$__f_java$security$SecureRandom$$getRandomValuesFun
}
function $p_Ljava_security_SecureRandom$__notSupported__E($thiz) {
  throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "java.security.SecureRandom is not supported on this platform because it provides neither `crypto.getRandomValues` nor Node.js' \"crypto\" module.")
}
function $p_Ljava_security_SecureRandom$__liftedTree1$1__sjs_js_Function1($thiz) {
  try {
    var crypto = require("crypto");
    return (($as_T((typeof crypto.randomFillSync)) === "function") ? ((arg1$2) => {
      $m_Ljava_security_SecureRandom$().java$security$SecureRandom$$$anonfun$getRandomValuesFun$2__sjs_js_typedarray_ArrayBufferView__sjs_js_Dynamic__V(arg1$2, crypto)
    }) : $p_Ljava_security_SecureRandom$__notSupported__E($thiz))
  } catch (e) {
    $p_Ljava_security_SecureRandom$__notSupported__E($thiz)
  }
}
/** @constructor */
function $c_Ljava_security_SecureRandom$() {
  this.Ljava_security_SecureRandom$__f_java$security$SecureRandom$$getRandomValuesFun = null;
  this.Ljava_security_SecureRandom$__f_bitmap$0 = false
}
$c_Ljava_security_SecureRandom$.prototype = new $h_O();
$c_Ljava_security_SecureRandom$.prototype.constructor = $c_Ljava_security_SecureRandom$;
/** @constructor */
function $h_Ljava_security_SecureRandom$() {
  /*<skip>*/
}
$h_Ljava_security_SecureRandom$.prototype = $c_Ljava_security_SecureRandom$.prototype;
$c_Ljava_security_SecureRandom$.prototype.java$security$SecureRandom$$getRandomValuesFun__sjs_js_Function1 = (function() {
  return ((!this.Ljava_security_SecureRandom$__f_bitmap$0) ? $p_Ljava_security_SecureRandom$__getRandomValuesFun$lzycompute__sjs_js_Function1(this) : this.Ljava_security_SecureRandom$__f_java$security$SecureRandom$$getRandomValuesFun)
});
$c_Ljava_security_SecureRandom$.prototype.java$security$SecureRandom$$$anonfun$getRandomValuesFun$1__sjs_js_typedarray_ArrayBufferView__V = (function(buffer) {
  crypto.getRandomValues(buffer)
});
$c_Ljava_security_SecureRandom$.prototype.java$security$SecureRandom$$$anonfun$getRandomValuesFun$2__sjs_js_typedarray_ArrayBufferView__sjs_js_Dynamic__V = (function(buffer, crypto$1) {
  crypto$1.randomFillSync(buffer)
});
var $d_Ljava_security_SecureRandom$ = new $TypeData().initClass({
  Ljava_security_SecureRandom$: 0
}, false, "java.security.SecureRandom$", {
  Ljava_security_SecureRandom$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Ljava_security_SecureRandom$.prototype.$classData = $d_Ljava_security_SecureRandom$;
var $n_Ljava_security_SecureRandom$;
function $m_Ljava_security_SecureRandom$() {
  if ((!$n_Ljava_security_SecureRandom$)) {
    $n_Ljava_security_SecureRandom$ = new $c_Ljava_security_SecureRandom$()
  };
  return $n_Ljava_security_SecureRandom$
}
function $ct_ju_Random__J__($thiz, seed_in) {
  return $thiz
}
/** @constructor */
function $c_ju_Random() {
  /*<skip>*/
}
$c_ju_Random.prototype = new $h_O();
$c_ju_Random.prototype.constructor = $c_ju_Random;
/** @constructor */
function $h_ju_Random() {
  /*<skip>*/
}
$h_ju_Random.prototype = $c_ju_Random.prototype;
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
}
/** @constructor */
function $c_s_Array$() {
  /*<skip>*/
}
$c_s_Array$.prototype = new $h_O();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
  /*<skip>*/
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.from__sc_IterableOnce__s_reflect_ClassTag__O = (function(it, evidence$3) {
  var n = it.knownSize__I();
  if ((n > (-1))) {
    var elements = evidence$3.newArray__I__O(n);
    var iterator = it.iterator__sc_Iterator();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().array_update__O__I__O__V(elements, i, iterator.next__O());
      i = ((1 + i) | 0)
    };
    return elements
  } else {
    var capacity = 0;
    var jsElems = null;
    var elementClass = evidence$3.runtimeClass__jl_Class();
    capacity = 0;
    var isCharArrayBuilder = (elementClass === $d_C.getClassOf());
    jsElems = [];
    var iterator$2 = it.iterator__sc_Iterator();
    while (iterator$2.hasNext__Z()) {
      var elem = iterator$2.next__O();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.jl_Class__f_data.zero : elem));
      jsElems.push(unboxedElem)
    };
    var elemRuntimeClass = ((elementClass === $d_V.getClassOf()) ? $d_jl_Void.getClassOf() : (((elementClass === $d_sr_Null$.getClassOf()) || (elementClass === $d_sr_Nothing$.getClassOf())) ? $d_O.getClassOf() : elementClass));
    return elemRuntimeClass.jl_Class__f_data.getArrayOf().wrapArray(jsElems)
  }
});
$c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.isArray__Z() && $objectGetClass(dest).isAssignableFrom__jl_Class__Z(srcClass))) {
    $systemArraycopyFull(src, srcPos, dest, destPos, length)
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
  }
});
$c_s_Array$.prototype.equals__AO__AO__Z = (function(xs, ys) {
  if ((xs === ys)) {
    return true
  };
  if ((xs.u.length !== ys.u.length)) {
    return false
  };
  var len = xs.u.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(xs.get(i), ys.get(i)))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
var $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
/** @constructor */
function $c_s_Console$() {
  this.s_Console$__f_outVar = null;
  $n_s_Console$ = this;
  this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_out);
  new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_err);
  new $c_s_util_DynamicVariable(null)
}
$c_s_Console$.prototype = new $h_O();
$c_s_Console$.prototype.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
  /*<skip>*/
}
$h_s_Console$.prototype = $c_s_Console$.prototype;
$c_s_Console$.prototype.out__Ljava_io_PrintStream = (function() {
  return $as_Ljava_io_PrintStream(this.s_Console$__f_outVar.s_util_DynamicVariable__f_v)
});
var $d_s_Console$ = new $TypeData().initClass({
  s_Console$: 0
}, false, "scala.Console$", {
  s_Console$: 1,
  O: 1,
  s_io_AnsiColor: 1
});
$c_s_Console$.prototype.$classData = $d_s_Console$;
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$()
  };
  return $n_s_Console$
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
  /*<skip>*/
}
$c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$c_s_LowPriorityImplicits.prototype.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
  /*<skip>*/
}
$h_s_LowPriorityImplicits.prototype = $c_s_LowPriorityImplicits.prototype;
function $is_sci_LazyList$State(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_LazyList$State)))
}
function $as_sci_LazyList$State(obj) {
  return (($is_sci_LazyList$State(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList$State"))
}
function $isArrayOf_sci_LazyList$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList$State)))
}
function $asArrayOf_sci_LazyList$State(obj, depth) {
  return (($isArrayOf_sci_LazyList$State(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList$State;", depth))
}
/** @constructor */
function $c_sci_List$$anon$1() {
  /*<skip>*/
}
$c_sci_List$$anon$1.prototype = new $h_O();
$c_sci_List$$anon$1.prototype.constructor = $c_sci_List$$anon$1;
/** @constructor */
function $h_sci_List$$anon$1() {
  /*<skip>*/
}
$h_sci_List$$anon$1.prototype = $c_sci_List$$anon$1.prototype;
$c_sci_List$$anon$1.prototype.toString__T = (function() {
  return "<function1>"
});
$c_sci_List$$anon$1.prototype.apply__O__O = (function(x) {
  return this
});
var $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, xs) {
  if ((xs === $thiz)) {
    $thiz.addAll__sc_IterableOnce__scm_Growable($m_scm_Buffer$().from__sc_IterableOnce__sc_SeqOps(xs))
  } else {
    var it = xs.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      $thiz.addOne__O__scm_Growable(it.next__O())
    }
  };
  return $thiz
}
/** @constructor */
function $c_s_package$$anon$1() {
  /*<skip>*/
}
$c_s_package$$anon$1.prototype = new $h_O();
$c_s_package$$anon$1.prototype.constructor = $c_s_package$$anon$1;
/** @constructor */
function $h_s_package$$anon$1() {
  /*<skip>*/
}
$h_s_package$$anon$1.prototype = $c_s_package$$anon$1.prototype;
$c_s_package$$anon$1.prototype.toString__T = (function() {
  return "object AnyRef"
});
var $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
/** @constructor */
function $c_s_reflect_ClassTag$() {
  /*<skip>*/
}
$c_s_reflect_ClassTag$.prototype = new $h_O();
$c_s_reflect_ClassTag$.prototype.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
  /*<skip>*/
}
$h_s_reflect_ClassTag$.prototype = $c_s_reflect_ClassTag$.prototype;
$c_s_reflect_ClassTag$.prototype.apply__jl_Class__s_reflect_ClassTag = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.getClassOf()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.getClassOf()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.getClassOf()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.getClassOf()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.getClassOf()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.getClassOf()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.getClassOf()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.getClassOf()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.getClassOf()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.getClassOf()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.getClassOf()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.getClassOf()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))))
});
var $d_s_reflect_ClassTag$ = new $TypeData().initClass({
  s_reflect_ClassTag$: 0
}, false, "scala.reflect.ClassTag$", {
  s_reflect_ClassTag$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_ClassTag$.prototype.$classData = $d_s_reflect_ClassTag$;
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$()
  };
  return $n_s_reflect_ClassTag$
}
/** @constructor */
function $c_sr_AbstractFunction0() {
  /*<skip>*/
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
  /*<skip>*/
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>"
});
/** @constructor */
function $c_sr_AbstractFunction1() {
  /*<skip>*/
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
  /*<skip>*/
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_sr_AbstractFunction2() {
  /*<skip>*/
}
$c_sr_AbstractFunction2.prototype = new $h_O();
$c_sr_AbstractFunction2.prototype.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
  /*<skip>*/
}
$h_sr_AbstractFunction2.prototype = $c_sr_AbstractFunction2.prototype;
$c_sr_AbstractFunction2.prototype.toString__T = (function() {
  return "<function2>"
});
/** @constructor */
function $c_sr_IntRef(elem) {
  this.sr_IntRef__f_elem = 0;
  this.sr_IntRef__f_elem = elem
}
$c_sr_IntRef.prototype = new $h_O();
$c_sr_IntRef.prototype.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
  /*<skip>*/
}
$h_sr_IntRef.prototype = $c_sr_IntRef.prototype;
$c_sr_IntRef.prototype.toString__T = (function() {
  var i = this.sr_IntRef__f_elem;
  return ("" + i)
});
var $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.sr_ObjectRef__f_elem = null;
  this.sr_ObjectRef__f_elem = elem
}
$c_sr_ObjectRef.prototype = new $h_O();
$c_sr_ObjectRef.prototype.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
  /*<skip>*/
}
$h_sr_ObjectRef.prototype = $c_sr_ObjectRef.prototype;
$c_sr_ObjectRef.prototype.toString__T = (function() {
  var obj = this.sr_ObjectRef__f_elem;
  return ("" + obj)
});
var $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
/** @constructor */
function $c_s_util_Left$() {
  /*<skip>*/
}
$c_s_util_Left$.prototype = new $h_O();
$c_s_util_Left$.prototype.constructor = $c_s_util_Left$;
/** @constructor */
function $h_s_util_Left$() {
  /*<skip>*/
}
$h_s_util_Left$.prototype = $c_s_util_Left$.prototype;
$c_s_util_Left$.prototype.toString__T = (function() {
  return "Left"
});
var $d_s_util_Left$ = new $TypeData().initClass({
  s_util_Left$: 0
}, false, "scala.util.Left$", {
  s_util_Left$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Left$.prototype.$classData = $d_s_util_Left$;
var $n_s_util_Left$;
function $m_s_util_Left$() {
  if ((!$n_s_util_Left$)) {
    $n_s_util_Left$ = new $c_s_util_Left$()
  };
  return $n_s_util_Left$
}
/** @constructor */
function $c_s_util_Right$() {
  /*<skip>*/
}
$c_s_util_Right$.prototype = new $h_O();
$c_s_util_Right$.prototype.constructor = $c_s_util_Right$;
/** @constructor */
function $h_s_util_Right$() {
  /*<skip>*/
}
$h_s_util_Right$.prototype = $c_s_util_Right$.prototype;
$c_s_util_Right$.prototype.toString__T = (function() {
  return "Right"
});
var $d_s_util_Right$ = new $TypeData().initClass({
  s_util_Right$: 0
}, false, "scala.util.Right$", {
  s_util_Right$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Right$.prototype.$classData = $d_s_util_Right$;
var $n_s_util_Right$;
function $m_s_util_Right$() {
  if ((!$n_s_util_Right$)) {
    $n_s_util_Right$ = new $c_s_util_Right$()
  };
  return $n_s_util_Right$
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
  this.unorderedHash__sc_IterableOnce__I__I($m_s_package$().s_package$__f_Nil, this.s_util_hashing_MurmurHash3$__f_mapSeed)
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sc_IndexedSeq(xs)) {
    var x2 = $as_sc_IndexedSeq(xs);
    return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else if ((xs instanceof $c_sci_List)) {
    var x3 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else {
    return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
/** @constructor */
function $c_Lscodec_bits_ByteVector$$anon$13(f$28) {
  this.Lscodec_bits_ByteVector$$anon$13__f_f$14 = null;
  this.Lscodec_bits_ByteVector$$anon$13__f_f$14 = f$28
}
$c_Lscodec_bits_ByteVector$$anon$13.prototype = new $h_Lscodec_bits_ByteVector$F2B();
$c_Lscodec_bits_ByteVector$$anon$13.prototype.constructor = $c_Lscodec_bits_ByteVector$$anon$13;
/** @constructor */
function $h_Lscodec_bits_ByteVector$$anon$13() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$$anon$13.prototype = $c_Lscodec_bits_ByteVector$$anon$13.prototype;
$c_Lscodec_bits_ByteVector$$anon$13.prototype.apply__B__B__B = (function(b, b2) {
  return $uB(this.Lscodec_bits_ByteVector$$anon$13__f_f$14.apply__O__O__O(b, b2))
});
var $d_Lscodec_bits_ByteVector$$anon$13 = new $TypeData().initClass({
  Lscodec_bits_ByteVector$$anon$13: 0
}, false, "scodec.bits.ByteVector$$anon$13", {
  Lscodec_bits_ByteVector$$anon$13: 1,
  Lscodec_bits_ByteVector$F2B: 1,
  O: 1
});
$c_Lscodec_bits_ByteVector$$anon$13.prototype.$classData = $d_Lscodec_bits_ByteVector$$anon$13;
/** @constructor */
function $c_Lscodec_bits_ByteVector$$anon$16(other$5, f$31, outer) {
  this.Lscodec_bits_ByteVector$$anon$16__f_other$1 = null;
  this.Lscodec_bits_ByteVector$$anon$16__f_f$17 = null;
  this.Lscodec_bits_ByteVector$$anon$16__f_$outer = null;
  this.Lscodec_bits_ByteVector$$anon$16__f_other$1 = other$5;
  this.Lscodec_bits_ByteVector$$anon$16__f_f$17 = f$31;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException()
  };
  this.Lscodec_bits_ByteVector$$anon$16__f_$outer = outer
}
$c_Lscodec_bits_ByteVector$$anon$16.prototype = new $h_Lscodec_bits_ByteVector$At();
$c_Lscodec_bits_ByteVector$$anon$16.prototype.constructor = $c_Lscodec_bits_ByteVector$$anon$16;
/** @constructor */
function $h_Lscodec_bits_ByteVector$$anon$16() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$$anon$16.prototype = $c_Lscodec_bits_ByteVector$$anon$16.prototype;
$c_Lscodec_bits_ByteVector$$anon$16.prototype.apply__J__B = (function(i) {
  var $$x2 = this.Lscodec_bits_ByteVector$$anon$16__f_f$17;
  var this$1 = this.Lscodec_bits_ByteVector$$anon$16__f_$outer;
  var $$x1 = this$1.get__J__B(i);
  var this$2 = this.Lscodec_bits_ByteVector$$anon$16__f_other$1;
  return $$x2.apply__B__B__B($$x1, this$2.get__J__B(i))
});
var $d_Lscodec_bits_ByteVector$$anon$16 = new $TypeData().initClass({
  Lscodec_bits_ByteVector$$anon$16: 0
}, false, "scodec.bits.ByteVector$$anon$16", {
  Lscodec_bits_ByteVector$$anon$16: 1,
  Lscodec_bits_ByteVector$At: 1,
  O: 1
});
$c_Lscodec_bits_ByteVector$$anon$16.prototype.$classData = $d_Lscodec_bits_ByteVector$$anon$16;
/** @constructor */
function $c_Lscodec_bits_ByteVector$$anon$21(value$2) {
  this.Lscodec_bits_ByteVector$$anon$21__f_value$1 = 0;
  this.Lscodec_bits_ByteVector$$anon$21__f_value$1 = value$2
}
$c_Lscodec_bits_ByteVector$$anon$21.prototype = new $h_Lscodec_bits_ByteVector$At();
$c_Lscodec_bits_ByteVector$$anon$21.prototype.constructor = $c_Lscodec_bits_ByteVector$$anon$21;
/** @constructor */
function $h_Lscodec_bits_ByteVector$$anon$21() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$$anon$21.prototype = $c_Lscodec_bits_ByteVector$$anon$21.prototype;
$c_Lscodec_bits_ByteVector$$anon$21.prototype.apply__J__B = (function(i) {
  return this.Lscodec_bits_ByteVector$$anon$21__f_value$1
});
var $d_Lscodec_bits_ByteVector$$anon$21 = new $TypeData().initClass({
  Lscodec_bits_ByteVector$$anon$21: 0
}, false, "scodec.bits.ByteVector$$anon$21", {
  Lscodec_bits_ByteVector$$anon$21: 1,
  Lscodec_bits_ByteVector$At: 1,
  O: 1
});
$c_Lscodec_bits_ByteVector$$anon$21.prototype.$classData = $d_Lscodec_bits_ByteVector$$anon$21;
/** @constructor */
function $c_Lscodec_bits_ByteVector$$anon$8(alphabet$6, bldr$4) {
  this.Lscodec_bits_ByteVector$$anon$8__f_alphabet$2 = null;
  this.Lscodec_bits_ByteVector$$anon$8__f_bldr$2 = null;
  this.Lscodec_bits_ByteVector$$anon$8__f_alphabet$2 = alphabet$6;
  this.Lscodec_bits_ByteVector$$anon$8__f_bldr$2 = bldr$4
}
$c_Lscodec_bits_ByteVector$$anon$8.prototype = new $h_Lscodec_bits_ByteVector$F1BU();
$c_Lscodec_bits_ByteVector$$anon$8.prototype.constructor = $c_Lscodec_bits_ByteVector$$anon$8;
/** @constructor */
function $h_Lscodec_bits_ByteVector$$anon$8() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$$anon$8.prototype = $c_Lscodec_bits_ByteVector$$anon$8.prototype;
$c_Lscodec_bits_ByteVector$$anon$8.prototype.apply__B__V = (function(b) {
  this.Lscodec_bits_ByteVector$$anon$8__f_bldr$2.append__C__scm_StringBuilder(this.Lscodec_bits_ByteVector$$anon$8__f_alphabet$2.toChar__I__C((((15 & (b >> 4)) << 24) >> 24))).append__C__scm_StringBuilder(this.Lscodec_bits_ByteVector$$anon$8__f_alphabet$2.toChar__I__C((((15 & b) << 24) >> 24)))
});
var $d_Lscodec_bits_ByteVector$$anon$8 = new $TypeData().initClass({
  Lscodec_bits_ByteVector$$anon$8: 0
}, false, "scodec.bits.ByteVector$$anon$8", {
  Lscodec_bits_ByteVector$$anon$8: 1,
  Lscodec_bits_ByteVector$F1BU: 1,
  O: 1
});
$c_Lscodec_bits_ByteVector$$anon$8.prototype.$classData = $d_Lscodec_bits_ByteVector$$anon$8;
/** @constructor */
function $c_Lscodec_bits_ByteVector$AtArray(arr) {
  this.Lscodec_bits_ByteVector$AtArray__f_arr = null;
  this.Lscodec_bits_ByteVector$AtArray__f_arr = arr
}
$c_Lscodec_bits_ByteVector$AtArray.prototype = new $h_Lscodec_bits_ByteVector$At();
$c_Lscodec_bits_ByteVector$AtArray.prototype.constructor = $c_Lscodec_bits_ByteVector$AtArray;
/** @constructor */
function $h_Lscodec_bits_ByteVector$AtArray() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$AtArray.prototype = $c_Lscodec_bits_ByteVector$AtArray.prototype;
$c_Lscodec_bits_ByteVector$AtArray.prototype.apply__J__B = (function(i) {
  return this.Lscodec_bits_ByteVector$AtArray__f_arr.get(i.RTLong__f_lo)
});
$c_Lscodec_bits_ByteVector$AtArray.prototype.asByteBuffer__J__I__Ljava_nio_ByteBuffer = (function(start, size) {
  var array = this.Lscodec_bits_ByteVector$AtArray__f_arr;
  var offset = start.RTLong__f_lo;
  var b = $m_Ljava_nio_HeapByteBuffer$().wrap__AB__I__I__I__I__Z__Ljava_nio_ByteBuffer(array, 0, array.u.length, offset, size, false).asReadOnlyBuffer__Ljava_nio_ByteBuffer();
  return ((((start.RTLong__f_lo === 0) && (start.RTLong__f_hi === 0)) && (size === this.Lscodec_bits_ByteVector$AtArray__f_arr.u.length)) ? b : b.slice__Ljava_nio_ByteBuffer())
});
$c_Lscodec_bits_ByteVector$AtArray.prototype.copyToArray__AB__I__J__I__V = (function(xs, start, offset, size) {
  var src = this.Lscodec_bits_ByteVector$AtArray__f_arr;
  var srcPos = offset.RTLong__f_lo;
  src.copyTo(srcPos, xs, start, size)
});
var $d_Lscodec_bits_ByteVector$AtArray = new $TypeData().initClass({
  Lscodec_bits_ByteVector$AtArray: 0
}, false, "scodec.bits.ByteVector$AtArray", {
  Lscodec_bits_ByteVector$AtArray: 1,
  Lscodec_bits_ByteVector$At: 1,
  O: 1
});
$c_Lscodec_bits_ByteVector$AtArray.prototype.$classData = $d_Lscodec_bits_ByteVector$AtArray;
/** @constructor */
function $c_Lscodec_bits_ByteVector$AtByteBuffer(buf) {
  this.Lscodec_bits_ByteVector$AtByteBuffer__f_buf = null;
  this.Lscodec_bits_ByteVector$AtByteBuffer__f_buf = buf
}
$c_Lscodec_bits_ByteVector$AtByteBuffer.prototype = new $h_Lscodec_bits_ByteVector$At();
$c_Lscodec_bits_ByteVector$AtByteBuffer.prototype.constructor = $c_Lscodec_bits_ByteVector$AtByteBuffer;
/** @constructor */
function $h_Lscodec_bits_ByteVector$AtByteBuffer() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$AtByteBuffer.prototype = $c_Lscodec_bits_ByteVector$AtByteBuffer.prototype;
$c_Lscodec_bits_ByteVector$AtByteBuffer.prototype.apply__J__B = (function(i) {
  return this.Lscodec_bits_ByteVector$AtByteBuffer__f_buf.get__I__B(i.RTLong__f_lo)
});
$c_Lscodec_bits_ByteVector$AtByteBuffer.prototype.copyToArray__AB__I__J__I__V = (function(xs, start, offset, size) {
  var n = this.Lscodec_bits_ByteVector$AtByteBuffer__f_buf.duplicate__Ljava_nio_ByteBuffer();
  var newPosition = offset.RTLong__f_lo;
  $c_Ljava_nio_Buffer.prototype.position__I__Ljava_nio_Buffer.call(n, newPosition);
  n.get__AB__I__I__Ljava_nio_ByteBuffer(xs, start, size)
});
$c_Lscodec_bits_ByteVector$AtByteBuffer.prototype.asByteBuffer__J__I__Ljava_nio_ByteBuffer = (function(offset, size) {
  var b = this.Lscodec_bits_ByteVector$AtByteBuffer__f_buf.asReadOnlyBuffer__Ljava_nio_ByteBuffer();
  if (((((offset.RTLong__f_lo === 0) && (offset.RTLong__f_hi === 0)) && (b.Ljava_nio_Buffer__f_java$nio$Buffer$$_position === 0)) && (size === ((b.Ljava_nio_Buffer__f__limit - b.Ljava_nio_Buffer__f_java$nio$Buffer$$_position) | 0)))) {
    return b
  } else {
    var newPosition = offset.RTLong__f_lo;
    $c_Ljava_nio_Buffer.prototype.position__I__Ljava_nio_Buffer.call(b, newPosition);
    var newLimit = ((offset.RTLong__f_lo + size) | 0);
    $c_Ljava_nio_Buffer.prototype.limit__I__Ljava_nio_Buffer.call(b, newLimit);
    return b.slice__Ljava_nio_ByteBuffer()
  }
});
var $d_Lscodec_bits_ByteVector$AtByteBuffer = new $TypeData().initClass({
  Lscodec_bits_ByteVector$AtByteBuffer: 0
}, false, "scodec.bits.ByteVector$AtByteBuffer", {
  Lscodec_bits_ByteVector$AtByteBuffer: 1,
  Lscodec_bits_ByteVector$At: 1,
  O: 1
});
$c_Lscodec_bits_ByteVector$AtByteBuffer.prototype.$classData = $d_Lscodec_bits_ByteVector$AtByteBuffer;
/** @constructor */
function $c_Lscodec_bits_ByteVector$AtEmpty$() {
  /*<skip>*/
}
$c_Lscodec_bits_ByteVector$AtEmpty$.prototype = new $h_Lscodec_bits_ByteVector$At();
$c_Lscodec_bits_ByteVector$AtEmpty$.prototype.constructor = $c_Lscodec_bits_ByteVector$AtEmpty$;
/** @constructor */
function $h_Lscodec_bits_ByteVector$AtEmpty$() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$AtEmpty$.prototype = $c_Lscodec_bits_ByteVector$AtEmpty$.prototype;
$c_Lscodec_bits_ByteVector$AtEmpty$.prototype.apply__J__B = (function(i) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "empty view")
});
$c_Lscodec_bits_ByteVector$AtEmpty$.prototype.asByteBuffer__J__I__Ljava_nio_ByteBuffer = (function(start, size) {
  return $m_Ljava_nio_ByteBuffer$().allocate__I__Ljava_nio_ByteBuffer(0).asReadOnlyBuffer__Ljava_nio_ByteBuffer()
});
var $d_Lscodec_bits_ByteVector$AtEmpty$ = new $TypeData().initClass({
  Lscodec_bits_ByteVector$AtEmpty$: 0
}, false, "scodec.bits.ByteVector$AtEmpty$", {
  Lscodec_bits_ByteVector$AtEmpty$: 1,
  Lscodec_bits_ByteVector$At: 1,
  O: 1
});
$c_Lscodec_bits_ByteVector$AtEmpty$.prototype.$classData = $d_Lscodec_bits_ByteVector$AtEmpty$;
var $n_Lscodec_bits_ByteVector$AtEmpty$;
function $m_Lscodec_bits_ByteVector$AtEmpty$() {
  if ((!$n_Lscodec_bits_ByteVector$AtEmpty$)) {
    $n_Lscodec_bits_ByteVector$AtEmpty$ = new $c_Lscodec_bits_ByteVector$AtEmpty$()
  };
  return $n_Lscodec_bits_ByteVector$AtEmpty$
}
function $f_Lscodec_bits_ByteVectorCompanionCrossPlatform__view__sjs_js_typedarray_Uint8Array__Lscodec_bits_ByteVector($thiz, typedArray) {
  return $m_Lscodec_bits_ByteVector$().view__Ljava_nio_ByteBuffer__Lscodec_bits_ByteVector($m_sjs_js_typedarray_TypedArrayBuffer$().wrap__sjs_js_typedarray_ArrayBuffer__I__I__Ljava_nio_ByteBuffer(typedArray.buffer, $uI(typedArray.byteOffset), $uI(typedArray.byteLength)))
}
function $f_Lscodec_bits_ByteVectorCompanionCrossPlatform__fromUint8Array__sjs_js_typedarray_Uint8Array__Lscodec_bits_ByteVector($thiz, typedArray) {
  var copy = new Uint8Array($uI(typedArray.length));
  copy.set(typedArray);
  var this$1 = $m_Lscodec_bits_ByteVector$();
  return $f_Lscodec_bits_ByteVectorCompanionCrossPlatform__view__sjs_js_typedarray_Uint8Array__Lscodec_bits_ByteVector(this$1, copy)
}
/** @constructor */
function $c_Lscoin_Crypto$() {
  $n_Lscoin_Crypto$ = this;
  $f_Lscoin_CryptoPlatform__$init$__V(this)
}
$c_Lscoin_Crypto$.prototype = new $h_O();
$c_Lscoin_Crypto$.prototype.constructor = $c_Lscoin_Crypto$;
/** @constructor */
function $h_Lscoin_Crypto$() {
  /*<skip>*/
}
$h_Lscoin_Crypto$.prototype = $c_Lscoin_Crypto$.prototype;
$c_Lscoin_Crypto$.prototype.isPubKeyValidLax__Lscodec_bits_ByteVector__Z = (function(key) {
  var t = key.size__J();
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  if ((((lo === 65) && (hi === 0)) && (((key.get__J__B($L0) === 4) || (key.get__J__B($L0) === 6)) || (key.get__J__B($L0) === 7)))) {
    return true
  };
  if ((((lo === 33) && (hi === 0)) && ((key.get__J__B($L0) === 2) || (key.get__J__B($L0) === 3)))) {
    return true
  };
  return false
});
var $d_Lscoin_Crypto$ = new $TypeData().initClass({
  Lscoin_Crypto$: 0
}, false, "scoin.Crypto$", {
  Lscoin_Crypto$: 1,
  O: 1,
  Lscoin_CryptoPlatform: 1
});
$c_Lscoin_Crypto$.prototype.$classData = $d_Lscoin_Crypto$;
var $n_Lscoin_Crypto$;
function $m_Lscoin_Crypto$() {
  if ((!$n_Lscoin_Crypto$)) {
    $n_Lscoin_Crypto$ = new $c_Lscoin_Crypto$()
  };
  return $n_Lscoin_Crypto$
}
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
function $ct_Ljava_nio_ByteBuffer__I__AB__I__($thiz, _capacity, _array, _arrayOffset) {
  $thiz.Ljava_nio_ByteBuffer__f__array = _array;
  $thiz.Ljava_nio_ByteBuffer__f__arrayOffset = _arrayOffset;
  $ct_Ljava_nio_Buffer__I__($thiz, _capacity);
  return $thiz
}
/** @constructor */
function $c_Ljava_nio_ByteBuffer() {
  this.Ljava_nio_Buffer__f__capacity = 0;
  this.Ljava_nio_Buffer__f__limit = 0;
  this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position = 0;
  this.Ljava_nio_Buffer__f__mark = 0;
  this.Ljava_nio_ByteBuffer__f__array = null;
  this.Ljava_nio_ByteBuffer__f__arrayOffset = 0
}
$c_Ljava_nio_ByteBuffer.prototype = new $h_Ljava_nio_Buffer();
$c_Ljava_nio_ByteBuffer.prototype.constructor = $c_Ljava_nio_ByteBuffer;
/** @constructor */
function $h_Ljava_nio_ByteBuffer() {
  /*<skip>*/
}
$h_Ljava_nio_ByteBuffer.prototype = $c_Ljava_nio_ByteBuffer.prototype;
$c_Ljava_nio_ByteBuffer.prototype.put__Ljava_nio_ByteBuffer__Ljava_nio_ByteBuffer = (function(src) {
  if ((src === this)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  };
  if (this.isReadOnly__Z()) {
    throw new $c_Ljava_nio_ReadOnlyBufferException()
  };
  var srcLimit = src.Ljava_nio_Buffer__f__limit;
  var srcPos = src.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
  var length = ((srcLimit - srcPos) | 0);
  var p = this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
  var newPos = ((p + length) | 0);
  if ((newPos > this.Ljava_nio_Buffer__f__limit)) {
    throw new $c_Ljava_nio_BufferOverflowException()
  };
  this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position = newPos;
  var selfPos = p;
  $c_Ljava_nio_Buffer.prototype.position__I__Ljava_nio_Buffer.call(src, srcLimit);
  var srcArray = src.Ljava_nio_ByteBuffer__f__array;
  if ((srcArray !== null)) {
    var startIndex = selfPos;
    var offset = ((src.Ljava_nio_ByteBuffer__f__arrayOffset + srcPos) | 0);
    this.store__I__AB__I__I__V(startIndex, srcArray, offset, length)
  } else {
    while ((srcPos !== srcLimit)) {
      var index$1 = selfPos;
      var index = srcPos;
      var elem = src.load__I__B(index);
      this.store__I__B__V(index$1, elem);
      srcPos = ((1 + srcPos) | 0);
      selfPos = ((1 + selfPos) | 0)
    }
  };
  return this
});
$c_Ljava_nio_ByteBuffer.prototype.hashCode__I = (function() {
  var start = this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
  var end = this.Ljava_nio_Buffer__f__limit;
  var h = (-547316498);
  var i = start;
  while ((i !== end)) {
    var $$x2 = $m_ju_internal_MurmurHash3$();
    var $$x1 = h;
    var index = i;
    var this$3 = this.load__I__B(index);
    h = $$x2.mix__I__I__I($$x1, this$3);
    i = ((1 + i) | 0)
  };
  return $m_ju_internal_MurmurHash3$().finalizeHash__I__I__I(h, ((end - start) | 0))
});
$c_Ljava_nio_ByteBuffer.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Ljava_nio_ByteBuffer)) {
    var x2 = $as_Ljava_nio_ByteBuffer(that);
    return (this.compareTo__Ljava_nio_ByteBuffer__I(x2) === 0)
  } else {
    return false
  }
});
$c_Ljava_nio_ByteBuffer.prototype.compareTo__Ljava_nio_ByteBuffer__I = (function(that) {
  if ((this === that)) {
    return 0
  } else {
    var thisStart = this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
    var thisRemaining = ((this.Ljava_nio_Buffer__f__limit - thisStart) | 0);
    var thatStart = that.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
    var thatRemaining = ((that.Ljava_nio_Buffer__f__limit - thatStart) | 0);
    var shortestLength = ((thisRemaining < thatRemaining) ? thisRemaining : thatRemaining);
    var i = 0;
    while ((i !== shortestLength)) {
      var index = ((thisStart + i) | 0);
      var x$1$2 = this.load__I__B(index);
      var index$1 = ((thatStart + i) | 0);
      var x$2$2 = that.load__I__B(index$1);
      var cmp = ((x$1$2 - x$2$2) | 0);
      if ((cmp !== 0)) {
        return cmp
      };
      i = ((1 + i) | 0)
    };
    return ((thisRemaining === thatRemaining) ? 0 : ((thisRemaining < thatRemaining) ? (-1) : 1))
  }
});
function $as_Ljava_nio_ByteBuffer(obj) {
  return (((obj instanceof $c_Ljava_nio_ByteBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "java.nio.ByteBuffer"))
}
function $isArrayOf_Ljava_nio_ByteBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_nio_ByteBuffer)))
}
function $asArrayOf_Ljava_nio_ByteBuffer(obj, depth) {
  return (($isArrayOf_Ljava_nio_ByteBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.nio.ByteBuffer;", depth))
}
/** @constructor */
function $c_Ljava_security_SecureRandom() {
  $ct_ju_Random__J__(this, $L0);
  $m_Ljava_security_SecureRandom$().java$security$SecureRandom$$getRandomValuesFun__sjs_js_Function1()
}
$c_Ljava_security_SecureRandom.prototype = new $h_ju_Random();
$c_Ljava_security_SecureRandom.prototype.constructor = $c_Ljava_security_SecureRandom;
/** @constructor */
function $h_Ljava_security_SecureRandom() {
  /*<skip>*/
}
$h_Ljava_security_SecureRandom.prototype = $c_Ljava_security_SecureRandom.prototype;
var $d_Ljava_security_SecureRandom = new $TypeData().initClass({
  Ljava_security_SecureRandom: 0
}, false, "java.security.SecureRandom", {
  Ljava_security_SecureRandom: 1,
  ju_Random: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Ljava_security_SecureRandom.prototype.$classData = $d_Ljava_security_SecureRandom;
/** @constructor */
function $c_ju_concurrent_atomic_AtomicLong(value) {
  this.ju_concurrent_atomic_AtomicLong__f_java$util$concurrent$atomic$AtomicLong$$value = $L0;
  this.ju_concurrent_atomic_AtomicLong__f_java$util$concurrent$atomic$AtomicLong$$value = value
}
$c_ju_concurrent_atomic_AtomicLong.prototype = new $h_jl_Number();
$c_ju_concurrent_atomic_AtomicLong.prototype.constructor = $c_ju_concurrent_atomic_AtomicLong;
/** @constructor */
function $h_ju_concurrent_atomic_AtomicLong() {
  /*<skip>*/
}
$h_ju_concurrent_atomic_AtomicLong.prototype = $c_ju_concurrent_atomic_AtomicLong.prototype;
$c_ju_concurrent_atomic_AtomicLong.prototype.compareAndSet__J__J__Z = (function(expect, update) {
  var b = this.ju_concurrent_atomic_AtomicLong__f_java$util$concurrent$atomic$AtomicLong$$value;
  if ((!(!((expect.RTLong__f_lo === b.RTLong__f_lo) && (expect.RTLong__f_hi === b.RTLong__f_hi))))) {
    this.ju_concurrent_atomic_AtomicLong__f_java$util$concurrent$atomic$AtomicLong$$value = update;
    return true
  } else {
    return false
  }
});
$c_ju_concurrent_atomic_AtomicLong.prototype.toString__T = (function() {
  var this$1 = this.ju_concurrent_atomic_AtomicLong__f_java$util$concurrent$atomic$AtomicLong$$value;
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this$1.RTLong__f_lo, this$1.RTLong__f_hi)
});
var $d_ju_concurrent_atomic_AtomicLong = new $TypeData().initClass({
  ju_concurrent_atomic_AtomicLong: 0
}, false, "java.util.concurrent.atomic.AtomicLong", {
  ju_concurrent_atomic_AtomicLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_atomic_AtomicLong.prototype.$classData = $d_ju_concurrent_atomic_AtomicLong;
/** @constructor */
function $c_s_Predef$() {
  $n_s_Predef$ = this;
  $m_s_package$();
  $m_sci_List$()
}
$c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$c_s_Predef$.prototype.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
  /*<skip>*/
}
$h_s_Predef$.prototype = $c_s_Predef$.prototype;
$c_s_Predef$.prototype.require__Z__V = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed")
  }
});
var $d_s_Predef$ = new $TypeData().initClass({
  s_Predef$: 0
}, false, "scala.Predef$", {
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  s_LowPriorityImplicits2: 1,
  O: 1
});
$c_s_Predef$.prototype.$classData = $d_s_Predef$;
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$()
  };
  return $n_s_Predef$
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T2__f__1;
      break
    }
    case 1: {
      return $thiz.T2__f__2;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"))
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null
}
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  /*<skip>*/
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype;
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.from__sc_IterableOnce__O = (function(it) {
  return this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate.from__sc_IterableOnce__O__O(it, $m_s_reflect_ManifestFactory$AnyManifest$())
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.sc_IterableFactory$Delegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.sc_IterableFactory$Delegate__f_delegate = null
}
$c_sc_IterableFactory$Delegate.prototype = new $h_O();
$c_sc_IterableFactory$Delegate.prototype.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
  /*<skip>*/
}
$h_sc_IterableFactory$Delegate.prototype = $c_sc_IterableFactory$Delegate.prototype;
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest))
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && those.hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), those.next__O()))) {
      return false
    }
  };
  return ($thiz.hasNext__Z() === those.hasNext__Z())
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19()
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
  /*<skip>*/
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
/** @constructor */
function $c_sci_LazyList$State$Cons(head, tail) {
  this.sci_LazyList$State$Cons__f_head = null;
  this.sci_LazyList$State$Cons__f_tail = null;
  this.sci_LazyList$State$Cons__f_head = head;
  this.sci_LazyList$State$Cons__f_tail = tail
}
$c_sci_LazyList$State$Cons.prototype = new $h_O();
$c_sci_LazyList$State$Cons.prototype.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
  /*<skip>*/
}
$h_sci_LazyList$State$Cons.prototype = $c_sci_LazyList$State$Cons.prototype;
$c_sci_LazyList$State$Cons.prototype.head__O = (function() {
  return this.sci_LazyList$State$Cons__f_head
});
$c_sci_LazyList$State$Cons.prototype.tail__sci_LazyList = (function() {
  return this.sci_LazyList$State$Cons__f_tail
});
var $d_sci_LazyList$State$Cons = new $TypeData().initClass({
  sci_LazyList$State$Cons: 0
}, false, "scala.collection.immutable.LazyList$State$Cons", {
  sci_LazyList$State$Cons: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Cons.prototype.$classData = $d_sci_LazyList$State$Cons;
/** @constructor */
function $c_sci_LazyList$State$Empty$() {
  /*<skip>*/
}
$c_sci_LazyList$State$Empty$.prototype = new $h_O();
$c_sci_LazyList$State$Empty$.prototype.constructor = $c_sci_LazyList$State$Empty$;
/** @constructor */
function $h_sci_LazyList$State$Empty$() {
  /*<skip>*/
}
$h_sci_LazyList$State$Empty$.prototype = $c_sci_LazyList$State$Empty$.prototype;
$c_sci_LazyList$State$Empty$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list")
});
$c_sci_LazyList$State$Empty$.prototype.tail__sci_LazyList = (function() {
  throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty lazy list")
});
$c_sci_LazyList$State$Empty$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().initClass({
  sci_LazyList$State$Empty$: 0
}, false, "scala.collection.immutable.LazyList$State$Empty$", {
  sci_LazyList$State$Empty$: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Empty$.prototype.$classData = $d_sci_LazyList$State$Empty$;
var $n_sci_LazyList$State$Empty$;
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$()
  };
  return $n_sci_LazyList$State$Empty$
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth))
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
var $d_sr_Nothing$ = new $TypeData().initClass({
  sr_Nothing$: 0
}, false, "scala.runtime.Nothing$", {
  sr_Nothing$: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
/** @constructor */
function $c_sjsr_AnonFunction0(f) {
  this.sjsr_AnonFunction0__f_f = null;
  this.sjsr_AnonFunction0__f_f = f
}
$c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$c_sjsr_AnonFunction0.prototype.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
  /*<skip>*/
}
$h_sjsr_AnonFunction0.prototype = $c_sjsr_AnonFunction0.prototype;
$c_sjsr_AnonFunction0.prototype.apply__O = (function() {
  return (0, this.sjsr_AnonFunction0__f_f)()
});
var $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.sjsr_AnonFunction1__f_f = null;
  this.sjsr_AnonFunction1__f_f = f
}
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
  /*<skip>*/
}
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
$c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
  return (0, this.sjsr_AnonFunction1__f_f)(arg1)
});
var $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
/** @constructor */
function $c_sjsr_AnonFunction2(f) {
  this.sjsr_AnonFunction2__f_f = null;
  this.sjsr_AnonFunction2__f_f = f
}
$c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$c_sjsr_AnonFunction2.prototype.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
  /*<skip>*/
}
$h_sjsr_AnonFunction2.prototype = $c_sjsr_AnonFunction2.prototype;
$c_sjsr_AnonFunction2.prototype.apply__O__O__O = (function(arg1, arg2) {
  return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2)
});
var $d_sjsr_AnonFunction2 = new $TypeData().initClass({
  sjsr_AnonFunction2: 0
}, false, "scala.scalajs.runtime.AnonFunction2", {
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sjsr_AnonFunction2.prototype.$classData = $d_sjsr_AnonFunction2;
/** @constructor */
function $c_Lscodec_bits_Bases$Alphabets$LenientHex() {
  /*<skip>*/
}
$c_Lscodec_bits_Bases$Alphabets$LenientHex.prototype = new $h_O();
$c_Lscodec_bits_Bases$Alphabets$LenientHex.prototype.constructor = $c_Lscodec_bits_Bases$Alphabets$LenientHex;
/** @constructor */
function $h_Lscodec_bits_Bases$Alphabets$LenientHex() {
  /*<skip>*/
}
$h_Lscodec_bits_Bases$Alphabets$LenientHex.prototype = $c_Lscodec_bits_Bases$Alphabets$LenientHex.prototype;
$c_Lscodec_bits_Bases$Alphabets$LenientHex.prototype.toIndex__C__I = (function(c) {
  if (((c >= 48) && (c <= 57))) {
    return (((-48) + c) | 0)
  } else if (((c >= 97) && (c <= 102))) {
    return (((-87) + c) | 0)
  } else if (((c >= 65) && (c <= 70))) {
    return (((-55) + c) | 0)
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
$c_Lscodec_bits_Bases$Alphabets$LenientHex.prototype.ignore__C__Z = (function(c) {
  var this$3 = $m_jl_Character$();
  if (this$3.isWhitespace__I__Z(c)) {
    return true
  } else {
    return (c === 95)
  }
});
/** @constructor */
function $c_Lscodec_bits_ByteVector$() {
  this.Lscodec_bits_ByteVector$__f_empty = null;
  $n_Lscodec_bits_ByteVector$ = this;
  $m_Lscodec_bits_ByteVector$View$();
  var at = $m_Lscodec_bits_ByteVector$AtEmpty$();
  var bytes = new $c_Lscodec_bits_ByteVector$View(at, $L0, $L0);
  this.Lscodec_bits_ByteVector$__f_empty = new $c_Lscodec_bits_ByteVector$Chunk(bytes);
  $m_s_package$();
  new $c_s_util_Left("Malformed padding - final quantum may optionally be padded with one or two padding characters such that the quantum is completed")
}
$c_Lscodec_bits_ByteVector$.prototype = new $h_O();
$c_Lscodec_bits_ByteVector$.prototype.constructor = $c_Lscodec_bits_ByteVector$;
/** @constructor */
function $h_Lscodec_bits_ByteVector$() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$.prototype = $c_Lscodec_bits_ByteVector$.prototype;
$c_Lscodec_bits_ByteVector$.prototype.apply__sci_Seq__s_math_Integral__Lscodec_bits_ByteVector = (function(bytes, evidence$1) {
  var dimensions = new $ac_I(new Int32Array([bytes.length__I()]));
  var buf = $asArrayOf_B($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_B.getClassOf(), dimensions), 1);
  var i = new $c_sr_IntRef(0);
  bytes.foreach__F1__V(new $c_sjsr_AnonFunction1(((b) => {
    buf.set(i.sr_IntRef__f_elem, ((evidence$1.toInt__O__I(b) << 24) >> 24));
    var ev$11 = ((1 + i.sr_IntRef__f_elem) | 0);
    i.sr_IntRef__f_elem = ev$11
  })));
  return this.view__AB__Lscodec_bits_ByteVector(buf)
});
$c_Lscodec_bits_ByteVector$.prototype.apply__Ljava_nio_ByteBuffer__Lscodec_bits_ByteVector = (function(buffer) {
  var c = buffer.duplicate__Ljava_nio_ByteBuffer();
  var dimensions = new $ac_I(new Int32Array([((c.Ljava_nio_Buffer__f__limit - c.Ljava_nio_Buffer__f_java$nio$Buffer$$_position) | 0)]));
  var arr = $asArrayOf_B($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_B.getClassOf(), dimensions), 1);
  c.get__AB__I__I__Ljava_nio_ByteBuffer(arr, 0, arr.u.length);
  return this.view__AB__Lscodec_bits_ByteVector(arr)
});
$c_Lscodec_bits_ByteVector$.prototype.view__AB__Lscodec_bits_ByteVector = (function(bytes) {
  $m_Lscodec_bits_ByteVector$View$();
  var at = new $c_Lscodec_bits_ByteVector$AtArray(bytes);
  var value = bytes.u.length;
  var hi = (value >> 31);
  var bytes$1 = new $c_Lscodec_bits_ByteVector$View(at, $L0, new $c_RTLong(value, hi));
  return new $c_Lscodec_bits_ByteVector$Chunk(bytes$1)
});
$c_Lscodec_bits_ByteVector$.prototype.view__Ljava_nio_ByteBuffer__Lscodec_bits_ByteVector = (function(bytes) {
  var slice = bytes.slice__Ljava_nio_ByteBuffer();
  $m_Lscodec_bits_ByteVector$View$();
  var at = new $c_Lscodec_bits_ByteVector$AtByteBuffer(slice);
  var value = ((slice.Ljava_nio_Buffer__f__limit - slice.Ljava_nio_Buffer__f_java$nio$Buffer$$_position) | 0);
  var hi = (value >> 31);
  var bytes$1 = new $c_Lscodec_bits_ByteVector$View(at, $L0, new $c_RTLong(value, hi));
  return new $c_Lscodec_bits_ByteVector$Chunk(bytes$1)
});
$c_Lscodec_bits_ByteVector$.prototype.fill__J__O__s_math_Integral__Lscodec_bits_ByteVector = (function(size, b, evidence$2) {
  var value = ((evidence$2.toInt__O__I(b) << 24) >> 24);
  $m_Lscodec_bits_ByteVector$View$();
  var at = new $c_Lscodec_bits_ByteVector$$anon$21(value);
  var bytes = new $c_Lscodec_bits_ByteVector$View(at, $L0, size);
  return new $c_Lscodec_bits_ByteVector$Chunk(bytes)
});
$c_Lscodec_bits_ByteVector$.prototype.fromHexDescriptive__T__Lscodec_bits_Bases$HexAlphabet__s_util_Either = (function(str, alphabet) {
  var this$1 = this.fromHexInternal__T__Lscodec_bits_Bases$HexAlphabet__s_util_Either(str, alphabet);
  if ((this$1 instanceof $c_s_util_Right)) {
    var x2 = $as_s_util_Right(this$1);
    var b = x2.s_util_Right__f_value;
    var x$1 = $as_T2(b);
    matchResult25: {
      var $$x1;
      if ((x$1 !== null)) {
        var res = $as_Lscodec_bits_ByteVector(x$1.T2__f__1);
        var $$x1 = res;
        break matchResult25
      };
      throw new $c_s_MatchError(x$1)
    };
    return new $c_s_util_Right($$x1)
  } else {
    return this$1
  }
});
$c_Lscodec_bits_ByteVector$.prototype.fromHexInternal__T__Lscodec_bits_Bases$HexAlphabet__s_util_Either = (function(str, alphabet) {
  var prefixed = (((str.length >= 0) && ($as_T(str.substring(0, 2)) === "0x")) || ((str.length >= 0) && ($as_T(str.substring(0, 2)) === "0X")));
  if (prefixed) {
    if ((str.length < 2)) {
      $charAt(str, 2)
    };
    var withoutPrefix = $as_T(str.substring(2))
  } else {
    var withoutPrefix = str
  };
  var idx = 0;
  var hi = 0;
  var count = 0;
  var midByte = false;
  var err = null;
  var capacity = ((((1 + ($m_sc_StringOps$(), str.length)) | 0) / 2) | 0);
  var bldr = $m_Ljava_nio_ByteBuffer$().allocate__I__Ljava_nio_ByteBuffer(capacity);
  while (((idx < withoutPrefix.length) && (err === null))) {
    $m_sc_StringOps$();
    var i = idx;
    var c = $charAt(withoutPrefix, i);
    if ((!alphabet.ignore__C__Z(c))) {
      try {
        var nibble = alphabet.toIndex__C__I(c);
        if (midByte) {
          bldr.put__B__Ljava_nio_ByteBuffer((((hi | nibble) << 24) >> 24));
          midByte = false
        } else {
          hi = (((nibble << 4) << 24) >> 24);
          midByte = true
        };
        count = ((1 + count) | 0)
      } catch (e) {
        if ((e instanceof $c_jl_IllegalArgumentException)) {
          err = ((("Invalid hexadecimal character '" + $bC(c)) + "' at index ") + ((idx + (prefixed ? 2 : 0)) | 0))
        } else {
          throw e
        }
      }
    };
    idx = ((1 + idx) | 0)
  };
  if ((err === null)) {
    $m_s_package$();
    var _1 = (midByte ? (bldr.put__B__Ljava_nio_ByteBuffer(((hi << 24) >> 24)), $c_Ljava_nio_Buffer.prototype.flip__Ljava_nio_Buffer.call(bldr), $m_Lscodec_bits_ByteVector$().apply__Ljava_nio_ByteBuffer__Lscodec_bits_ByteVector(bldr).shiftRight__J__Z__Lscodec_bits_ByteVector(new $c_RTLong(4, 0), false)) : ($c_Ljava_nio_Buffer.prototype.flip__Ljava_nio_Buffer.call(bldr), $m_Lscodec_bits_ByteVector$().apply__Ljava_nio_ByteBuffer__Lscodec_bits_ByteVector(bldr)));
    var _2 = count;
    var value = new $c_T2(_1, _2);
    return new $c_s_util_Right(value)
  } else {
    $m_s_package$();
    var value$1 = err;
    return new $c_s_util_Left(value$1)
  }
});
$c_Lscodec_bits_ByteVector$.prototype.fromValidHex__T__Lscodec_bits_Bases$HexAlphabet__Lscodec_bits_ByteVector = (function(str, alphabet) {
  var this$1 = this.fromHexDescriptive__T__Lscodec_bits_Bases$HexAlphabet__s_util_Either(str, alphabet);
  if ((!(this$1 instanceof $c_s_util_Right))) {
    if ((this$1 instanceof $c_s_util_Left)) {
      var x3 = $as_s_util_Left(this$1);
      var a = x3.s_util_Left__f_value;
      var msg = $as_T(a);
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), msg)
    };
    throw new $c_s_MatchError(this$1)
  };
  var x2 = $as_s_util_Right(this$1);
  var b = x2.s_util_Right__f_value;
  var x = $as_Lscodec_bits_ByteVector(b);
  return x
});
$c_Lscodec_bits_ByteVector$.prototype.concat__sc_IterableOnce__Lscodec_bits_ByteVector = (function(bvs) {
  var this$2 = bvs.iterator__sc_Iterator();
  var z = $m_Lscodec_bits_ByteVector$().Lscodec_bits_ByteVector$__f_empty;
  var f = ((_$11, _$12) => {
    var _$11$1 = $as_Lscodec_bits_ByteVector(_$11);
    var _$12$1 = $as_Lscodec_bits_ByteVector(_$12);
    return _$11$1.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector(_$12$1)
  });
  if ($is_sc_IndexedSeq(this$2)) {
    var x2 = $as_sc_IndexedSeq(this$2);
    var at = 0;
    var end = x2.length__I();
    var acc = z;
    var $$x1;
    while (true) {
      if ((at !== end)) {
        var temp$at = ((1 + at) | 0);
        var arg1 = acc;
        var arg2 = x2.apply__I__O(at);
        var temp$acc = f(arg1, arg2);
        at = temp$at;
        acc = temp$acc;
        continue
      };
      var $$x1 = acc;
      break
    }
  } else {
    var result = z;
    while (this$2.hasNext__Z()) {
      var arg1$1 = result;
      var arg2$1 = this$2.next__O();
      result = f(arg1$1, arg2$1)
    };
    var $$x1 = result
  };
  return $as_Lscodec_bits_ByteVector($$x1).unbuffer__Lscodec_bits_ByteVector()
});
$c_Lscodec_bits_ByteVector$.prototype.toIntSize__J__I = (function(size) {
  var ahi = size.RTLong__f_hi;
  if (((ahi === 0) ? (((-2147483648) ^ size.RTLong__f_lo) <= (-1)) : (ahi < 0))) {
    return size.RTLong__f_lo
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ("size must be <= Int.MaxValue but is " + size))
  }
});
var $d_Lscodec_bits_ByteVector$ = new $TypeData().initClass({
  Lscodec_bits_ByteVector$: 0
}, false, "scodec.bits.ByteVector$", {
  Lscodec_bits_ByteVector$: 1,
  O: 1,
  Lscodec_bits_ByteVectorPlatform: 1,
  Lscodec_bits_ByteVectorCompanionCrossPlatform: 1
});
$c_Lscodec_bits_ByteVector$.prototype.$classData = $d_Lscodec_bits_ByteVector$;
var $n_Lscodec_bits_ByteVector$;
function $m_Lscodec_bits_ByteVector$() {
  if ((!$n_Lscodec_bits_ByteVector$)) {
    $n_Lscodec_bits_ByteVector$ = new $c_Lscodec_bits_ByteVector$()
  };
  return $n_Lscodec_bits_ByteVector$
}
/** @constructor */
function $c_Lscodec_bits_ByteVector$View$() {
  this.Lscodec_bits_ByteVector$View$__f_empty = null;
  $n_Lscodec_bits_ByteVector$View$ = this;
  $m_Lscodec_bits_ByteVector$View$();
  var at = $m_Lscodec_bits_ByteVector$AtEmpty$();
  this.Lscodec_bits_ByteVector$View$__f_empty = new $c_Lscodec_bits_ByteVector$View(at, $L0, $L0)
}
$c_Lscodec_bits_ByteVector$View$.prototype = new $h_O();
$c_Lscodec_bits_ByteVector$View$.prototype.constructor = $c_Lscodec_bits_ByteVector$View$;
/** @constructor */
function $h_Lscodec_bits_ByteVector$View$() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$View$.prototype = $c_Lscodec_bits_ByteVector$View$.prototype;
$c_Lscodec_bits_ByteVector$View$.prototype.toString__T = (function() {
  return "View"
});
var $d_Lscodec_bits_ByteVector$View$ = new $TypeData().initClass({
  Lscodec_bits_ByteVector$View$: 0
}, false, "scodec.bits.ByteVector$View$", {
  Lscodec_bits_ByteVector$View$: 1,
  O: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1
});
$c_Lscodec_bits_ByteVector$View$.prototype.$classData = $d_Lscodec_bits_ByteVector$View$;
var $n_Lscodec_bits_ByteVector$View$;
function $m_Lscodec_bits_ByteVector$View$() {
  if ((!$n_Lscodec_bits_ByteVector$View$)) {
    $n_Lscodec_bits_ByteVector$View$ = new $c_Lscodec_bits_ByteVector$View$()
  };
  return $n_Lscodec_bits_ByteVector$View$
}
/** @constructor */
function $c_Lscoin_ByteVector32$() {
  $n_Lscoin_ByteVector32$ = this;
  $m_Lscoin_ByteVector32$();
  var bytes = $m_Lscodec_bits_ByteVector$().fromValidHex__T__Lscodec_bits_Bases$HexAlphabet__Lscodec_bits_ByteVector("0000000000000000000000000000000000000000000000000000000000000000", ($m_Lscodec_bits_ByteVector$(), $m_Lscodec_bits_Bases$Alphabets$HexLowercase$()));
  new $c_Lscoin_ByteVector32(bytes);
  $m_Lscoin_ByteVector32$();
  var bytes$1 = $m_Lscodec_bits_ByteVector$().fromValidHex__T__Lscodec_bits_Bases$HexAlphabet__Lscodec_bits_ByteVector("0100000000000000000000000000000000000000000000000000000000000000", ($m_Lscodec_bits_ByteVector$(), $m_Lscodec_bits_Bases$Alphabets$HexLowercase$()));
  new $c_Lscoin_ByteVector32(bytes$1)
}
$c_Lscoin_ByteVector32$.prototype = new $h_O();
$c_Lscoin_ByteVector32$.prototype.constructor = $c_Lscoin_ByteVector32$;
/** @constructor */
function $h_Lscoin_ByteVector32$() {
  /*<skip>*/
}
$h_Lscoin_ByteVector32$.prototype = $c_Lscoin_ByteVector32$.prototype;
$c_Lscoin_ByteVector32$.prototype.toString__T = (function() {
  return "ByteVector32"
});
$c_Lscoin_ByteVector32$.prototype.fromValidHex__T__Lscoin_ByteVector32 = (function(str) {
  $m_Lscoin_ByteVector32$();
  var bytes = $m_Lscodec_bits_ByteVector$().fromValidHex__T__Lscodec_bits_Bases$HexAlphabet__Lscodec_bits_ByteVector(str, ($m_Lscodec_bits_ByteVector$(), $m_Lscodec_bits_Bases$Alphabets$HexLowercase$()));
  return new $c_Lscoin_ByteVector32(bytes)
});
var $d_Lscoin_ByteVector32$ = new $TypeData().initClass({
  Lscoin_ByteVector32$: 0
}, false, "scoin.ByteVector32$", {
  Lscoin_ByteVector32$: 1,
  O: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1
});
$c_Lscoin_ByteVector32$.prototype.$classData = $d_Lscoin_ByteVector32$;
var $n_Lscoin_ByteVector32$;
function $m_Lscoin_ByteVector32$() {
  if ((!$n_Lscoin_ByteVector32$)) {
    $n_Lscoin_ByteVector32$ = new $c_Lscoin_ByteVector32$()
  };
  return $n_Lscoin_ByteVector32$
}
/** @constructor */
function $c_Ljava_io_OutputStream() {
  /*<skip>*/
}
$c_Ljava_io_OutputStream.prototype = new $h_O();
$c_Ljava_io_OutputStream.prototype.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
  /*<skip>*/
}
$h_Ljava_io_OutputStream.prototype = $c_Ljava_io_OutputStream.prototype;
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $uC($as_jl_Character(that));
    return ($thiz === this$1)
  } else {
    return false
  }
}
function $f_jl_Character__toString__T($thiz) {
  return $as_T(String.fromCharCode($thiz))
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
var $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().initClass({
  jl_RuntimeException: 0
}, false, "java.lang.RuntimeException", {
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_RuntimeException.prototype.$classData = $d_jl_RuntimeException;
function $ct_jl_StringBuilder__($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException()
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
}
function $ct_jl_StringBuilder__I__($thiz, initialCapacity) {
  $ct_jl_StringBuilder__($thiz);
  if ((initialCapacity < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  return $thiz
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
  /*<skip>*/
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.append__AC__jl_StringBuilder = (function(str) {
  var this$1 = $m_jl_String$();
  var count = str.u.length;
  var str$1 = this$1.new__AC__I__I__T(str, 0, count);
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
  return this
});
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  return this$1.length
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  return $charAt(this$1, index)
});
var $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $ct_Ljava_math_BigInteger__($thiz) {
  $thiz.Ljava_math_BigInteger__f__hashCode = 0;
  return $thiz
}
function $ct_Ljava_math_BigInteger__I__I__($thiz, sign, value) {
  $ct_Ljava_math_BigInteger__($thiz);
  $thiz.Ljava_math_BigInteger__f_sign = sign;
  $thiz.Ljava_math_BigInteger__f_numberLength = 1;
  $thiz.Ljava_math_BigInteger__f_digits = new $ac_I(new Int32Array([value]));
  return $thiz
}
function $ct_Ljava_math_BigInteger__I__J__($thiz, sign, lVal) {
  $ct_Ljava_math_BigInteger__($thiz);
  $thiz.Ljava_math_BigInteger__f_sign = sign;
  var hi = lVal.RTLong__f_hi;
  if ((hi === 0)) {
    $thiz.Ljava_math_BigInteger__f_numberLength = 1;
    $thiz.Ljava_math_BigInteger__f_digits = new $ac_I(new Int32Array([lVal.RTLong__f_lo]))
  } else {
    $thiz.Ljava_math_BigInteger__f_numberLength = 2;
    $thiz.Ljava_math_BigInteger__f_digits = new $ac_I(new Int32Array([lVal.RTLong__f_lo, hi]))
  };
  return $thiz
}
/** @constructor */
function $c_Ljava_math_BigInteger() {
  this.Ljava_math_BigInteger__f_digits = null;
  this.Ljava_math_BigInteger__f_numberLength = 0;
  this.Ljava_math_BigInteger__f_sign = 0;
  this.Ljava_math_BigInteger__f__hashCode = 0
}
$c_Ljava_math_BigInteger.prototype = new $h_jl_Number();
$c_Ljava_math_BigInteger.prototype.constructor = $c_Ljava_math_BigInteger;
/** @constructor */
function $h_Ljava_math_BigInteger() {
  /*<skip>*/
}
$h_Ljava_math_BigInteger.prototype = $c_Ljava_math_BigInteger.prototype;
$c_Ljava_math_BigInteger.prototype.equals__O__Z = (function(x) {
  if ((x instanceof $c_Ljava_math_BigInteger)) {
    var x2 = $as_Ljava_math_BigInteger(x);
    return (((this.Ljava_math_BigInteger__f_sign === x2.Ljava_math_BigInteger__f_sign) && (this.Ljava_math_BigInteger__f_numberLength === x2.Ljava_math_BigInteger__f_numberLength)) && this.equalsArrays__AI__Z(x2.Ljava_math_BigInteger__f_digits))
  } else {
    return false
  }
});
$c_Ljava_math_BigInteger.prototype.hashCode__I = (function() {
  if ((this.Ljava_math_BigInteger__f__hashCode !== 0)) {
    return this.Ljava_math_BigInteger__f__hashCode
  } else {
    var end = this.Ljava_math_BigInteger__f_numberLength;
    var i = 0;
    while ((i < end)) {
      var i$2 = i;
      this.Ljava_math_BigInteger__f__hashCode = ((Math.imul(33, this.Ljava_math_BigInteger__f__hashCode) + this.Ljava_math_BigInteger__f_digits.get(i$2)) | 0);
      i = ((1 + i) | 0)
    };
    this.Ljava_math_BigInteger__f__hashCode = Math.imul(this.Ljava_math_BigInteger__f__hashCode, this.Ljava_math_BigInteger__f_sign);
    return this.Ljava_math_BigInteger__f__hashCode
  }
});
$c_Ljava_math_BigInteger.prototype.toString__T = (function() {
  return $m_Ljava_math_Conversion$().toDecimalScaledString__Ljava_math_BigInteger__T(this)
});
$c_Ljava_math_BigInteger.prototype.equalsArrays__AI__Z = (function(b) {
  var i = 0;
  while ((i !== this.Ljava_math_BigInteger__f_numberLength)) {
    if ((this.Ljava_math_BigInteger__f_digits.get(i) !== b.get(i))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
function $as_Ljava_math_BigInteger(obj) {
  return (((obj instanceof $c_Ljava_math_BigInteger) || (obj === null)) ? obj : $throwClassCastException(obj, "java.math.BigInteger"))
}
function $isArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_math_BigInteger)))
}
function $asArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (($isArrayOf_Ljava_math_BigInteger(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.math.BigInteger;", depth))
}
var $d_Ljava_math_BigInteger = new $TypeData().initClass({
  Ljava_math_BigInteger: 0
}, false, "java.math.BigInteger", {
  Ljava_math_BigInteger: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_Ljava_math_BigInteger.prototype.$classData = $d_Ljava_math_BigInteger;
/** @constructor */
function $c_Ljava_nio_HeapByteBuffer(_capacity, _array0, _arrayOffset0, _initialPosition, _initialLimit, _readOnly) {
  this.Ljava_nio_Buffer__f__capacity = 0;
  this.Ljava_nio_Buffer__f__limit = 0;
  this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position = 0;
  this.Ljava_nio_Buffer__f__mark = 0;
  this.Ljava_nio_ByteBuffer__f__array = null;
  this.Ljava_nio_ByteBuffer__f__arrayOffset = 0;
  this.Ljava_nio_HeapByteBuffer__f__readOnly = false;
  this.Ljava_nio_HeapByteBuffer__f__readOnly = _readOnly;
  $ct_Ljava_nio_ByteBuffer__I__AB__I__(this, _capacity, _array0, _arrayOffset0);
  $c_Ljava_nio_Buffer.prototype.position__I__Ljava_nio_Buffer.call(this, _initialPosition);
  $c_Ljava_nio_Buffer.prototype.limit__I__Ljava_nio_Buffer.call(this, _initialLimit)
}
$c_Ljava_nio_HeapByteBuffer.prototype = new $h_Ljava_nio_ByteBuffer();
$c_Ljava_nio_HeapByteBuffer.prototype.constructor = $c_Ljava_nio_HeapByteBuffer;
/** @constructor */
function $h_Ljava_nio_HeapByteBuffer() {
  /*<skip>*/
}
$h_Ljava_nio_HeapByteBuffer.prototype = $c_Ljava_nio_HeapByteBuffer.prototype;
$c_Ljava_nio_HeapByteBuffer.prototype.isReadOnly__Z = (function() {
  return this.Ljava_nio_HeapByteBuffer__f__readOnly
});
$c_Ljava_nio_HeapByteBuffer.prototype.slice__Ljava_nio_ByteBuffer = (function() {
  var newCapacity = ((this.Ljava_nio_Buffer__f__limit - this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position) | 0);
  var array = this.Ljava_nio_ByteBuffer__f__array;
  var arrayOffset = ((this.Ljava_nio_ByteBuffer__f__arrayOffset + this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position) | 0);
  var readOnly = this.Ljava_nio_HeapByteBuffer__f__readOnly;
  return new $c_Ljava_nio_HeapByteBuffer(newCapacity, array, arrayOffset, 0, newCapacity, readOnly)
});
$c_Ljava_nio_HeapByteBuffer.prototype.duplicate__Ljava_nio_ByteBuffer = (function() {
  var capacity = this.Ljava_nio_Buffer__f__capacity;
  var array = this.Ljava_nio_ByteBuffer__f__array;
  var arrayOffset = this.Ljava_nio_ByteBuffer__f__arrayOffset;
  var initialPosition = this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
  var initialLimit = this.Ljava_nio_Buffer__f__limit;
  var readOnly = this.Ljava_nio_HeapByteBuffer__f__readOnly;
  var result = new $c_Ljava_nio_HeapByteBuffer(capacity, array, arrayOffset, initialPosition, initialLimit, readOnly);
  result.Ljava_nio_Buffer__f__mark = this.Ljava_nio_Buffer__f__mark;
  return result
});
$c_Ljava_nio_HeapByteBuffer.prototype.asReadOnlyBuffer__Ljava_nio_ByteBuffer = (function() {
  var capacity = this.Ljava_nio_Buffer__f__capacity;
  var array = this.Ljava_nio_ByteBuffer__f__array;
  var arrayOffset = this.Ljava_nio_ByteBuffer__f__arrayOffset;
  var initialPosition = this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
  var initialLimit = this.Ljava_nio_Buffer__f__limit;
  var result = new $c_Ljava_nio_HeapByteBuffer(capacity, array, arrayOffset, initialPosition, initialLimit, true);
  result.Ljava_nio_Buffer__f__mark = this.Ljava_nio_Buffer__f__mark;
  return result
});
$c_Ljava_nio_HeapByteBuffer.prototype.put__B__Ljava_nio_ByteBuffer = (function(b) {
  if (this.Ljava_nio_HeapByteBuffer__f__readOnly) {
    throw new $c_Ljava_nio_ReadOnlyBufferException()
  };
  var p = this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
  if ((p === this.Ljava_nio_Buffer__f__limit)) {
    throw new $c_Ljava_nio_BufferOverflowException()
  };
  this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position = ((1 + p) | 0);
  var a = this.Ljava_nio_ByteBuffer__f__array;
  var i = ((this.Ljava_nio_ByteBuffer__f__arrayOffset + p) | 0);
  a.set(i, b);
  return this
});
$c_Ljava_nio_HeapByteBuffer.prototype.get__I__B = (function(index) {
  if (((index < 0) || (index >= this.Ljava_nio_Buffer__f__limit))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException())
  };
  var a = this.Ljava_nio_ByteBuffer__f__array;
  var i = ((this.Ljava_nio_ByteBuffer__f__arrayOffset + index) | 0);
  return a.get(i)
});
$c_Ljava_nio_HeapByteBuffer.prototype.get__AB__I__I__Ljava_nio_ByteBuffer = (function(dst, offset, length) {
  if ((((offset < 0) || (length < 0)) || (offset > ((dst.u.length - length) | 0)))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException())
  };
  var p = this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
  var newPos = ((p + length) | 0);
  if ((newPos > this.Ljava_nio_Buffer__f__limit)) {
    throw new $c_Ljava_nio_BufferUnderflowException()
  };
  this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position = newPos;
  this.Ljava_nio_ByteBuffer__f__array.copyTo(((this.Ljava_nio_ByteBuffer__f__arrayOffset + p) | 0), dst, offset, length);
  return this
});
$c_Ljava_nio_HeapByteBuffer.prototype.load__I__B = (function(index) {
  var a = this.Ljava_nio_ByteBuffer__f__array;
  var i = ((this.Ljava_nio_ByteBuffer__f__arrayOffset + index) | 0);
  return a.get(i)
});
$c_Ljava_nio_HeapByteBuffer.prototype.store__I__B__V = (function(index, elem) {
  var a = this.Ljava_nio_ByteBuffer__f__array;
  var i = ((this.Ljava_nio_ByteBuffer__f__arrayOffset + index) | 0);
  a.set(i, elem)
});
$c_Ljava_nio_HeapByteBuffer.prototype.store__I__AB__I__I__V = (function(startIndex, src, offset, length) {
  src.copyTo(offset, this.Ljava_nio_ByteBuffer__f__array, ((this.Ljava_nio_ByteBuffer__f__arrayOffset + startIndex) | 0), length)
});
var $d_Ljava_nio_HeapByteBuffer = new $TypeData().initClass({
  Ljava_nio_HeapByteBuffer: 0
}, false, "java.nio.HeapByteBuffer", {
  Ljava_nio_HeapByteBuffer: 1,
  Ljava_nio_ByteBuffer: 1,
  Ljava_nio_Buffer: 1,
  O: 1,
  jl_Comparable: 1
});
$c_Ljava_nio_HeapByteBuffer.prototype.$classData = $d_Ljava_nio_HeapByteBuffer;
/** @constructor */
function $c_Ljava_nio_TypedArrayByteBuffer(_typedArray, _initialPosition, _initialLimit, _readOnly) {
  this.Ljava_nio_Buffer__f__capacity = 0;
  this.Ljava_nio_Buffer__f__limit = 0;
  this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position = 0;
  this.Ljava_nio_Buffer__f__mark = 0;
  this.Ljava_nio_ByteBuffer__f__array = null;
  this.Ljava_nio_ByteBuffer__f__arrayOffset = 0;
  this.Ljava_nio_TypedArrayByteBuffer__f__typedArray = null;
  this.Ljava_nio_TypedArrayByteBuffer__f__readOnly = false;
  this.Ljava_nio_TypedArrayByteBuffer__f__typedArray = _typedArray;
  this.Ljava_nio_TypedArrayByteBuffer__f__readOnly = _readOnly;
  $ct_Ljava_nio_ByteBuffer__I__AB__I__(this, $uI(_typedArray.length), null, (-1));
  $c_Ljava_nio_Buffer.prototype.position__I__Ljava_nio_Buffer.call(this, _initialPosition);
  $c_Ljava_nio_Buffer.prototype.limit__I__Ljava_nio_Buffer.call(this, _initialLimit)
}
$c_Ljava_nio_TypedArrayByteBuffer.prototype = new $h_Ljava_nio_ByteBuffer();
$c_Ljava_nio_TypedArrayByteBuffer.prototype.constructor = $c_Ljava_nio_TypedArrayByteBuffer;
/** @constructor */
function $h_Ljava_nio_TypedArrayByteBuffer() {
  /*<skip>*/
}
$h_Ljava_nio_TypedArrayByteBuffer.prototype = $c_Ljava_nio_TypedArrayByteBuffer.prototype;
$c_Ljava_nio_TypedArrayByteBuffer.prototype.isReadOnly__Z = (function() {
  return this.Ljava_nio_TypedArrayByteBuffer__f__readOnly
});
$c_Ljava_nio_TypedArrayByteBuffer.prototype.slice__Ljava_nio_ByteBuffer = (function() {
  var slicedTypedArray = this.Ljava_nio_TypedArrayByteBuffer__f__typedArray.subarray(this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position, this.Ljava_nio_Buffer__f__limit);
  var initialLimit = $uI(slicedTypedArray.length);
  var readOnly = this.Ljava_nio_TypedArrayByteBuffer__f__readOnly;
  return new $c_Ljava_nio_TypedArrayByteBuffer(slicedTypedArray, 0, initialLimit, readOnly)
});
$c_Ljava_nio_TypedArrayByteBuffer.prototype.duplicate__Ljava_nio_ByteBuffer = (function() {
  var typedArray = this.Ljava_nio_TypedArrayByteBuffer__f__typedArray;
  var initialPosition = this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
  var initialLimit = this.Ljava_nio_Buffer__f__limit;
  var readOnly = this.Ljava_nio_TypedArrayByteBuffer__f__readOnly;
  var result = new $c_Ljava_nio_TypedArrayByteBuffer(typedArray, initialPosition, initialLimit, readOnly);
  result.Ljava_nio_Buffer__f__mark = this.Ljava_nio_Buffer__f__mark;
  return result
});
$c_Ljava_nio_TypedArrayByteBuffer.prototype.asReadOnlyBuffer__Ljava_nio_ByteBuffer = (function() {
  var typedArray = this.Ljava_nio_TypedArrayByteBuffer__f__typedArray;
  var initialPosition = this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
  var initialLimit = this.Ljava_nio_Buffer__f__limit;
  var result = new $c_Ljava_nio_TypedArrayByteBuffer(typedArray, initialPosition, initialLimit, true);
  result.Ljava_nio_Buffer__f__mark = this.Ljava_nio_Buffer__f__mark;
  return result
});
$c_Ljava_nio_TypedArrayByteBuffer.prototype.put__B__Ljava_nio_ByteBuffer = (function(b) {
  if (this.Ljava_nio_TypedArrayByteBuffer__f__readOnly) {
    throw new $c_Ljava_nio_ReadOnlyBufferException()
  };
  var p = this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
  if ((p === this.Ljava_nio_Buffer__f__limit)) {
    throw new $c_Ljava_nio_BufferOverflowException()
  };
  this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position = ((1 + p) | 0);
  this.Ljava_nio_TypedArrayByteBuffer__f__typedArray[p] = b;
  return this
});
$c_Ljava_nio_TypedArrayByteBuffer.prototype.get__I__B = (function(index) {
  if (((index < 0) || (index >= this.Ljava_nio_Buffer__f__limit))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException())
  };
  return $uB(this.Ljava_nio_TypedArrayByteBuffer__f__typedArray[index])
});
$c_Ljava_nio_TypedArrayByteBuffer.prototype.get__AB__I__I__Ljava_nio_ByteBuffer = (function(dst, offset, length) {
  if ((((offset < 0) || (length < 0)) || (offset > ((dst.u.length - length) | 0)))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException())
  };
  var p = this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position;
  var newPos = ((p + length) | 0);
  if ((newPos > this.Ljava_nio_Buffer__f__limit)) {
    throw new $c_Ljava_nio_BufferUnderflowException()
  };
  this.Ljava_nio_Buffer__f_java$nio$Buffer$$_position = newPos;
  var selfPos = p;
  var endPos = ((selfPos + length) | 0);
  var arrayIndex = offset;
  while ((selfPos !== endPos)) {
    var i = arrayIndex;
    var index = selfPos;
    var v = $uB(this.Ljava_nio_TypedArrayByteBuffer__f__typedArray[index]);
    dst.set(i, v);
    selfPos = ((1 + selfPos) | 0);
    arrayIndex = ((1 + arrayIndex) | 0)
  };
  return this
});
$c_Ljava_nio_TypedArrayByteBuffer.prototype._arrayBuffer__O = (function() {
  return this.Ljava_nio_TypedArrayByteBuffer__f__typedArray.buffer
});
$c_Ljava_nio_TypedArrayByteBuffer.prototype.load__I__B = (function(index) {
  return $uB(this.Ljava_nio_TypedArrayByteBuffer__f__typedArray[index])
});
$c_Ljava_nio_TypedArrayByteBuffer.prototype.store__I__B__V = (function(index, elem) {
  this.Ljava_nio_TypedArrayByteBuffer__f__typedArray[index] = elem
});
$c_Ljava_nio_TypedArrayByteBuffer.prototype.store__I__AB__I__I__V = (function(startIndex, src, offset, length) {
  var selfPos = startIndex;
  var endPos = ((selfPos + length) | 0);
  var arrayIndex = offset;
  while ((selfPos !== endPos)) {
    var index = selfPos;
    var i = arrayIndex;
    var elem = src.get(i);
    this.Ljava_nio_TypedArrayByteBuffer__f__typedArray[index] = elem;
    selfPos = ((1 + selfPos) | 0);
    arrayIndex = ((1 + arrayIndex) | 0)
  }
});
var $d_Ljava_nio_TypedArrayByteBuffer = new $TypeData().initClass({
  Ljava_nio_TypedArrayByteBuffer: 0
}, false, "java.nio.TypedArrayByteBuffer", {
  Ljava_nio_TypedArrayByteBuffer: 1,
  Ljava_nio_ByteBuffer: 1,
  Ljava_nio_Buffer: 1,
  O: 1,
  jl_Comparable: 1
});
$c_Ljava_nio_TypedArrayByteBuffer.prototype.$classData = $d_Ljava_nio_TypedArrayByteBuffer;
/** @constructor */
function $c_sc_AbstractIterator() {
  /*<skip>*/
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
  /*<skip>*/
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
  return this
});
$c_sc_AbstractIterator.prototype.isEmpty__Z = (function() {
  return (!this.hasNext__Z())
});
$c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return this.sliceIterator__I__I__sc_Iterator(n, (-1))
});
$c_sc_AbstractIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until)
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sc_AbstractIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterator.prototype.knownSize__I = (function() {
  return (-1)
});
/** @constructor */
function $c_sc_Iterable$() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$())
}
$c_sc_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_sc_Iterable$.prototype.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
  /*<skip>*/
}
$h_sc_Iterable$.prototype = $c_sc_Iterable$.prototype;
var $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
var $n_sc_Iterable$;
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.sc_SeqFactory$Delegate__f_delegate = null
}
$c_sc_SeqFactory$Delegate.prototype = new $h_O();
$c_sc_SeqFactory$Delegate.prototype.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
  /*<skip>*/
}
$h_sc_SeqFactory$Delegate.prototype = $c_sc_SeqFactory$Delegate.prototype;
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return $as_sc_SeqOps(this.sc_SeqFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it))
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sc_SeqOps(source)
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.knownSize__I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.knownSize__I();
    var knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize))
  } else {
    var knownSizeDifference = false
  };
  if ((!knownSizeDifference)) {
    var this$1 = $thiz.iterator__sc_Iterator();
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that)
  } else {
    return false
  }
}
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)))
}
function $as_sc_SeqOps(obj) {
  return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"))
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)))
}
function $asArrayOf_sc_SeqOps(obj, depth) {
  return (($isArrayOf_sc_SeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqOps;", depth))
}
/** @constructor */
function $c_sci_Iterable$() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$())
}
$c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_sci_Iterable$.prototype.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
  /*<skip>*/
}
$h_sci_Iterable$.prototype = $c_sci_Iterable$.prototype;
var $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
/** @constructor */
function $c_sci_LazyList$() {
  this.sci_LazyList$__f__empty = null;
  $n_sci_LazyList$ = this;
  var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$State$Empty$()));
  this.sci_LazyList$__f__empty = new $c_sci_LazyList(state).force__sci_LazyList();
  new $c_sjsr_AnonFunction1(((x$10$2) => $m_sr_Statics$PFMarker$()))
}
$c_sci_LazyList$.prototype = new $h_O();
$c_sci_LazyList$.prototype.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
  /*<skip>*/
}
$h_sci_LazyList$.prototype = $c_sci_LazyList$.prototype;
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList = (function(ll, n) {
  var restRef = new $c_sr_ObjectRef(ll);
  var iRef = new $c_sr_IntRef(n);
  var state = new $c_sjsr_AnonFunction0((() => {
    var rest = $as_sci_LazyList(restRef.sr_ObjectRef__f_elem);
    var i = iRef.sr_IntRef__f_elem;
    while (((i > 0) && (!rest.isEmpty__Z()))) {
      var this$4 = rest;
      rest = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      restRef.sr_ObjectRef__f_elem = rest;
      i = (((-1) + i) | 0);
      iRef.sr_IntRef__f_elem = i
    };
    return rest.scala$collection$immutable$LazyList$$state__sci_LazyList$State()
  }));
  return new $c_sci_LazyList(state)
});
$c_sci_LazyList$.prototype.from__sc_IterableOnce__sci_LazyList = (function(coll) {
  if ((coll instanceof $c_sci_LazyList)) {
    var x2 = $as_sci_LazyList(coll);
    return x2
  } else if ((coll.knownSize__I() === 0)) {
    return this.sci_LazyList$__f__empty
  } else {
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(coll.iterator__sc_Iterator())));
    return new $c_sci_LazyList(state)
  }
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State = (function(it) {
  if (it.hasNext__Z()) {
    var hd = it.next__O();
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it)));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(hd, tl)
  } else {
    return $m_sci_LazyList$State$Empty$()
  }
});
$c_sci_LazyList$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_LazyList(source)
});
var $d_sci_LazyList$ = new $TypeData().initClass({
  sci_LazyList$: 0
}, false, "scala.collection.immutable.LazyList$", {
  sci_LazyList$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$.prototype.$classData = $d_sci_LazyList$;
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$()
  };
  return $n_sci_LazyList$
}
/** @constructor */
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.scm_Builder$$anon$1__f_$outer = null;
  this.scm_Builder$$anon$1__f_f$1 = null;
  if ((outer === null)) {
    throw null
  } else {
    this.scm_Builder$$anon$1__f_$outer = outer
  };
  this.scm_Builder$$anon$1__f_f$1 = f$1
}
$c_scm_Builder$$anon$1.prototype = new $h_O();
$c_scm_Builder$$anon$1.prototype.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
  /*<skip>*/
}
$h_scm_Builder$$anon$1.prototype = $c_scm_Builder$$anon$1.prototype;
$c_scm_Builder$$anon$1.prototype.addOne__O__scm_Builder$$anon$1 = (function(x) {
  var this$1 = this.scm_Builder$$anon$1__f_$outer;
  this$1.addOne__O__scm_Growable(x);
  return this
});
$c_scm_Builder$$anon$1.prototype.addAll__sc_IterableOnce__scm_Builder$$anon$1 = (function(xs) {
  var this$1 = this.scm_Builder$$anon$1__f_$outer;
  this$1.addAll__sc_IterableOnce__scm_Growable(xs);
  return this
});
$c_scm_Builder$$anon$1.prototype.result__O = (function() {
  return this.scm_Builder$$anon$1__f_f$1.apply__O__O(this.scm_Builder$$anon$1__f_$outer.result__O())
});
$c_scm_Builder$$anon$1.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__scm_Builder$$anon$1(xs)
});
$c_scm_Builder$$anon$1.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_Builder$$anon$1(elem)
});
var $d_scm_Builder$$anon$1 = new $TypeData().initClass({
  scm_Builder$$anon$1: 0
}, false, "scala.collection.mutable.Builder$$anon$1", {
  scm_Builder$$anon$1: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_Builder$$anon$1.prototype.$classData = $d_scm_Builder$$anon$1;
/** @constructor */
function $c_s_util_Either() {
  /*<skip>*/
}
$c_s_util_Either.prototype = new $h_O();
$c_s_util_Either.prototype.constructor = $c_s_util_Either;
/** @constructor */
function $h_s_util_Either() {
  /*<skip>*/
}
$h_s_util_Either.prototype = $c_s_util_Either.prototype;
/** @constructor */
function $c_Lscodec_bits_Bases$Alphabets$HexLowercase$() {
  this.Lscodec_bits_Bases$Alphabets$HexLowercase$__f_Chars = null;
  $n_Lscodec_bits_Bases$Alphabets$HexLowercase$ = this;
  this.Lscodec_bits_Bases$Alphabets$HexLowercase$__f_Chars = new $ac_C(new Uint16Array([48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102]))
}
$c_Lscodec_bits_Bases$Alphabets$HexLowercase$.prototype = new $h_Lscodec_bits_Bases$Alphabets$LenientHex();
$c_Lscodec_bits_Bases$Alphabets$HexLowercase$.prototype.constructor = $c_Lscodec_bits_Bases$Alphabets$HexLowercase$;
/** @constructor */
function $h_Lscodec_bits_Bases$Alphabets$HexLowercase$() {
  /*<skip>*/
}
$h_Lscodec_bits_Bases$Alphabets$HexLowercase$.prototype = $c_Lscodec_bits_Bases$Alphabets$HexLowercase$.prototype;
$c_Lscodec_bits_Bases$Alphabets$HexLowercase$.prototype.toChar__I__C = (function(i) {
  return this.Lscodec_bits_Bases$Alphabets$HexLowercase$__f_Chars.get(i)
});
var $d_Lscodec_bits_Bases$Alphabets$HexLowercase$ = new $TypeData().initClass({
  Lscodec_bits_Bases$Alphabets$HexLowercase$: 0
}, false, "scodec.bits.Bases$Alphabets$HexLowercase$", {
  Lscodec_bits_Bases$Alphabets$HexLowercase$: 1,
  Lscodec_bits_Bases$Alphabets$LenientHex: 1,
  O: 1,
  Lscodec_bits_Bases$Alphabet: 1,
  Lscodec_bits_Bases$HexAlphabet: 1
});
$c_Lscodec_bits_Bases$Alphabets$HexLowercase$.prototype.$classData = $d_Lscodec_bits_Bases$Alphabets$HexLowercase$;
var $n_Lscodec_bits_Bases$Alphabets$HexLowercase$;
function $m_Lscodec_bits_Bases$Alphabets$HexLowercase$() {
  if ((!$n_Lscodec_bits_Bases$Alphabets$HexLowercase$)) {
    $n_Lscodec_bits_Bases$Alphabets$HexLowercase$ = new $c_Lscodec_bits_Bases$Alphabets$HexLowercase$()
  };
  return $n_Lscodec_bits_Bases$Alphabets$HexLowercase$
}
/** @constructor */
function $c_Lscodec_bits_ByteVector$View(at, offset, size) {
  this.Lscodec_bits_ByteVector$View__f_at = null;
  this.Lscodec_bits_ByteVector$View__f_offset = $L0;
  this.Lscodec_bits_ByteVector$View__f_size = $L0;
  this.Lscodec_bits_ByteVector$View__f_at = at;
  this.Lscodec_bits_ByteVector$View__f_offset = offset;
  this.Lscodec_bits_ByteVector$View__f_size = size
}
$c_Lscodec_bits_ByteVector$View.prototype = new $h_O();
$c_Lscodec_bits_ByteVector$View.prototype.constructor = $c_Lscodec_bits_ByteVector$View;
/** @constructor */
function $h_Lscodec_bits_ByteVector$View() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$View.prototype = $c_Lscodec_bits_ByteVector$View.prototype;
$c_Lscodec_bits_ByteVector$View.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this)
});
$c_Lscodec_bits_ByteVector$View.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("View");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Lscodec_bits_ByteVector$View__f_at;
  var data$1 = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var t = this.Lscodec_bits_ByteVector$View__f_offset;
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var data$2 = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi));
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var t$1 = this.Lscodec_bits_ByteVector$View__f_size;
  var lo$1 = t$1.RTLong__f_lo;
  var hi$1 = t$1.RTLong__f_hi;
  var data$3 = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$1, hi$1));
  acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3)
});
$c_Lscodec_bits_ByteVector$View.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Lscodec_bits_ByteVector$View)) {
    var x$0$2 = $as_Lscodec_bits_ByteVector$View(x$0);
    var this$1 = this.Lscodec_bits_ByteVector$View__f_offset;
    var b = x$0$2.Lscodec_bits_ByteVector$View__f_offset;
    if (((this$1.RTLong__f_lo === b.RTLong__f_lo) && (this$1.RTLong__f_hi === b.RTLong__f_hi))) {
      var this$2 = this.Lscodec_bits_ByteVector$View__f_size;
      var b$1 = x$0$2.Lscodec_bits_ByteVector$View__f_size;
      var $$x1 = ((this$2.RTLong__f_lo === b$1.RTLong__f_lo) && (this$2.RTLong__f_hi === b$1.RTLong__f_hi))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x = this.Lscodec_bits_ByteVector$View__f_at;
      var x$2 = x$0$2.Lscodec_bits_ByteVector$View__f_at;
      return (x === x$2)
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Lscodec_bits_ByteVector$View.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lscodec_bits_ByteVector$View.prototype.productArity__I = (function() {
  return 3
});
$c_Lscodec_bits_ByteVector$View.prototype.productPrefix__T = (function() {
  return "View"
});
$c_Lscodec_bits_ByteVector$View.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Lscodec_bits_ByteVector$View__f_at;
      break
    }
    case 1: {
      return this.Lscodec_bits_ByteVector$View__f_offset;
      break
    }
    case 2: {
      return this.Lscodec_bits_ByteVector$View__f_size;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
});
$c_Lscodec_bits_ByteVector$View.prototype.apply__J__B = (function(n) {
  var $$x1 = this.Lscodec_bits_ByteVector$View__f_at;
  var this$1 = this.Lscodec_bits_ByteVector$View__f_offset;
  var alo = this$1.RTLong__f_lo;
  var ahi = this$1.RTLong__f_hi;
  var bhi = n.RTLong__f_hi;
  var lo = ((alo + n.RTLong__f_lo) | 0);
  var hi = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0));
  return $$x1.apply__J__B(new $c_RTLong(lo, hi))
});
$c_Lscodec_bits_ByteVector$View.prototype.foreach__Lscodec_bits_ByteVector$F1BU__V = (function(f) {
  var i__lo = 0;
  var i__hi = 0;
  while (true) {
    var this$1__lo = i__lo;
    var this$1__hi = i__hi;
    var b = this.Lscodec_bits_ByteVector$View__f_size;
    var ahi = this$1__hi;
    var bhi = b.RTLong__f_hi;
    if (((ahi === bhi) ? (((-2147483648) ^ this$1__lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))) {
      var $$x1 = this.Lscodec_bits_ByteVector$View__f_at;
      var this$2 = this.Lscodec_bits_ByteVector$View__f_offset;
      var b$1__lo = i__lo;
      var b$1__hi = i__hi;
      var alo = this$2.RTLong__f_lo;
      var ahi$1 = this$2.RTLong__f_hi;
      var bhi$1 = b$1__hi;
      var lo = ((alo + b$1__lo) | 0);
      var hi = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi$1 + bhi$1) | 0)) | 0) : ((ahi$1 + bhi$1) | 0));
      f.apply__B__V($$x1.apply__J__B(new $c_RTLong(lo, hi)));
      var b$2__lo = i__lo;
      var b$2__hi = i__hi;
      var bhi$2 = b$2__hi;
      var lo$1 = ((1 + b$2__lo) | 0);
      var hi$1 = ((lo$1 === 0) ? ((1 + bhi$2) | 0) : bhi$2);
      var $$x2__lo = lo$1;
      var $$x2__hi = hi$1;
      i__lo = $$x2__lo;
      i__hi = $$x2__hi
    } else {
      break
    }
  }
});
$c_Lscodec_bits_ByteVector$View.prototype.asByteBuffer__Ljava_nio_ByteBuffer = (function() {
  return this.Lscodec_bits_ByteVector$View__f_at.asByteBuffer__J__I__Ljava_nio_ByteBuffer(this.Lscodec_bits_ByteVector$View__f_offset, $m_Lscodec_bits_ByteVector$().toIntSize__J__I(this.Lscodec_bits_ByteVector$View__f_size))
});
$c_Lscodec_bits_ByteVector$View.prototype.copyToArray__AB__I__V = (function(xs, start) {
  this.Lscodec_bits_ByteVector$View__f_at.copyToArray__AB__I__J__I__V(xs, start, this.Lscodec_bits_ByteVector$View__f_offset, $m_Lscodec_bits_ByteVector$().toIntSize__J__I(this.Lscodec_bits_ByteVector$View__f_size))
});
$c_Lscodec_bits_ByteVector$View.prototype.take__J__Lscodec_bits_ByteVector$View = (function(n) {
  var ahi = n.RTLong__f_hi;
  if (((ahi === 0) ? (n.RTLong__f_lo === 0) : (ahi < 0))) {
    return $m_Lscodec_bits_ByteVector$View$().Lscodec_bits_ByteVector$View$__f_empty
  } else {
    var b = this.Lscodec_bits_ByteVector$View__f_size;
    var ahi$1 = n.RTLong__f_hi;
    var bhi = b.RTLong__f_hi;
    if (((ahi$1 === bhi) ? (((-2147483648) ^ n.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi$1 > bhi))) {
      return this
    } else {
      $m_Lscodec_bits_ByteVector$View$();
      var at = this.Lscodec_bits_ByteVector$View__f_at;
      var t = this.Lscodec_bits_ByteVector$View__f_offset;
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return new $c_Lscodec_bits_ByteVector$View(at, new $c_RTLong(lo, hi), n)
    }
  }
});
$c_Lscodec_bits_ByteVector$View.prototype.drop__J__Lscodec_bits_ByteVector$View = (function(n) {
  var ahi = n.RTLong__f_hi;
  if (((ahi === 0) ? (n.RTLong__f_lo === 0) : (ahi < 0))) {
    return this
  } else {
    var b = this.Lscodec_bits_ByteVector$View__f_size;
    var ahi$1 = n.RTLong__f_hi;
    var bhi = b.RTLong__f_hi;
    if (((ahi$1 === bhi) ? (((-2147483648) ^ n.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi$1 > bhi))) {
      return $m_Lscodec_bits_ByteVector$View$().Lscodec_bits_ByteVector$View$__f_empty
    } else {
      $m_Lscodec_bits_ByteVector$View$();
      var at = this.Lscodec_bits_ByteVector$View__f_at;
      var this$1 = this.Lscodec_bits_ByteVector$View__f_offset;
      var alo = this$1.RTLong__f_lo;
      var ahi$2 = this$1.RTLong__f_hi;
      var bhi$1 = n.RTLong__f_hi;
      var lo = ((alo + n.RTLong__f_lo) | 0);
      var hi = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi$2 + bhi$1) | 0)) | 0) : ((ahi$2 + bhi$1) | 0));
      var this$3 = this.Lscodec_bits_ByteVector$View__f_size;
      var alo$1 = this$3.RTLong__f_lo;
      var ahi$3 = this$3.RTLong__f_hi;
      var bhi$2 = n.RTLong__f_hi;
      var lo$1 = ((alo$1 - n.RTLong__f_lo) | 0);
      var hi$1 = ((((-2147483648) ^ lo$1) > ((-2147483648) ^ alo$1)) ? (((-1) + ((ahi$3 - bhi$2) | 0)) | 0) : ((ahi$3 - bhi$2) | 0));
      return new $c_Lscodec_bits_ByteVector$View(at, new $c_RTLong(lo, hi), new $c_RTLong(lo$1, hi$1))
    }
  }
});
function $as_Lscodec_bits_ByteVector$View(obj) {
  return (((obj instanceof $c_Lscodec_bits_ByteVector$View) || (obj === null)) ? obj : $throwClassCastException(obj, "scodec.bits.ByteVector$View"))
}
function $isArrayOf_Lscodec_bits_ByteVector$View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscodec_bits_ByteVector$View)))
}
function $asArrayOf_Lscodec_bits_ByteVector$View(obj, depth) {
  return (($isArrayOf_Lscodec_bits_ByteVector$View(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscodec.bits.ByteVector$View;", depth))
}
var $d_Lscodec_bits_ByteVector$View = new $TypeData().initClass({
  Lscodec_bits_ByteVector$View: 0
}, false, "scodec.bits.ByteVector$View", {
  Lscodec_bits_ByteVector$View: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
$c_Lscodec_bits_ByteVector$View.prototype.$classData = $d_Lscodec_bits_ByteVector$View;
/** @constructor */
function $c_Lscoin_ByteVector32(bytes) {
  this.Lscoin_ByteVector32__f_bytes = null;
  this.Lscoin_ByteVector32__f_bytes = bytes;
  var this$1 = bytes.size__J();
  var requirement = ((this$1.RTLong__f_lo === 32) && (this$1.RTLong__f_hi === 0));
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("requirement failed: " + ("size must be 32 bytes, is " + bytes.size__J())) + " bytes"))
  }
}
$c_Lscoin_ByteVector32.prototype = new $h_O();
$c_Lscoin_ByteVector32.prototype.constructor = $c_Lscoin_ByteVector32;
/** @constructor */
function $h_Lscoin_ByteVector32() {
  /*<skip>*/
}
$h_Lscoin_ByteVector32.prototype = $c_Lscoin_ByteVector32.prototype;
$c_Lscoin_ByteVector32.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this)
});
$c_Lscoin_ByteVector32.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lscoin_ByteVector32.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Lscoin_ByteVector32)) {
    var x$0$2 = $as_Lscoin_ByteVector32(x$0);
    var x = this.Lscoin_ByteVector32__f_bytes;
    var x$2 = x$0$2.Lscoin_ByteVector32__f_bytes;
    return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
  } else {
    return false
  }
});
$c_Lscoin_ByteVector32.prototype.productArity__I = (function() {
  return 1
});
$c_Lscoin_ByteVector32.prototype.productPrefix__T = (function() {
  return "ByteVector32"
});
$c_Lscoin_ByteVector32.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lscoin_ByteVector32__f_bytes
  };
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lscoin_ByteVector32.prototype.toString__T = (function() {
  var this$1 = this.Lscoin_ByteVector32__f_bytes;
  return this$1.toHex__Lscodec_bits_Bases$HexAlphabet__T($m_Lscodec_bits_Bases$Alphabets$HexLowercase$())
});
function $as_Lscoin_ByteVector32(obj) {
  return (((obj instanceof $c_Lscoin_ByteVector32) || (obj === null)) ? obj : $throwClassCastException(obj, "scoin.ByteVector32"))
}
function $isArrayOf_Lscoin_ByteVector32(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscoin_ByteVector32)))
}
function $asArrayOf_Lscoin_ByteVector32(obj, depth) {
  return (($isArrayOf_Lscoin_ByteVector32(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscoin.ByteVector32;", depth))
}
var $d_Lscoin_ByteVector32 = new $TypeData().initClass({
  Lscoin_ByteVector32: 0
}, false, "scoin.ByteVector32", {
  Lscoin_ByteVector32: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
$c_Lscoin_ByteVector32.prototype.$classData = $d_Lscoin_ByteVector32;
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
  /*<skip>*/
}
$c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_Ljava_io_FilterOutputStream.prototype.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
  /*<skip>*/
}
$h_Ljava_io_FilterOutputStream.prototype = $c_Ljava_io_FilterOutputStream.prototype;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArrayStoreException = new $TypeData().initClass({
  jl_ArrayStoreException: 0
}, false, "java.lang.ArrayStoreException", {
  jl_ArrayStoreException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayStoreException.prototype.$classData = $d_jl_ArrayStoreException;
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
function $as_jl_IllegalArgumentException(obj) {
  return (((obj instanceof $c_jl_IllegalArgumentException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.IllegalArgumentException"))
}
function $isArrayOf_jl_IllegalArgumentException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_IllegalArgumentException)))
}
function $asArrayOf_jl_IllegalArgumentException(obj, depth) {
  return (($isArrayOf_jl_IllegalArgumentException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.IllegalArgumentException;", depth))
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_jl_IndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
  /*<skip>*/
}
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
  /*<skip>*/
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", {
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
});
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream$DummyOutputStream;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
function $as_jl_SecurityException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"))
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)))
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth))
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
function $ct_jl_UnsupportedOperationException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
function $ct_jl_UnsupportedOperationException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
class $c_Ljava_nio_BufferOverflowException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_Ljava_nio_BufferOverflowException = new $TypeData().initClass({
  Ljava_nio_BufferOverflowException: 0
}, false, "java.nio.BufferOverflowException", {
  Ljava_nio_BufferOverflowException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Ljava_nio_BufferOverflowException.prototype.$classData = $d_Ljava_nio_BufferOverflowException;
class $c_Ljava_nio_BufferUnderflowException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_Ljava_nio_BufferUnderflowException = new $TypeData().initClass({
  Ljava_nio_BufferUnderflowException: 0
}, false, "java.nio.BufferUnderflowException", {
  Ljava_nio_BufferUnderflowException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Ljava_nio_BufferUnderflowException.prototype.$classData = $d_Ljava_nio_BufferUnderflowException;
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : cause.toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.s_MatchError__f_obj;
  return ("of class " + $objectGetClass(this$1).getName__T())
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($dp_toString__T($thiz.s_MatchError__f_obj) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
var $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = 0;
  this.s_Product$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw null
  } else {
    this.s_Product$$anon$1__f_$outer = outer
  };
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = outer.productArity__I()
}
$c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_s_Product$$anon$1.prototype.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
  /*<skip>*/
}
$h_s_Product$$anon$1.prototype = $c_s_Product$$anon$1.prototype;
$c_s_Product$$anon$1.prototype.hasNext__Z = (function() {
  return (this.s_Product$$anon$1__f_c < this.s_Product$$anon$1__f_cmax)
});
$c_s_Product$$anon$1.prototype.next__O = (function() {
  var result = this.s_Product$$anon$1__f_$outer.productElement__I__O(this.s_Product$$anon$1__f_c);
  this.s_Product$$anon$1__f_c = ((1 + this.s_Product$$anon$1__f_c) | 0);
  return result
});
var $d_s_Product$$anon$1 = new $TypeData().initClass({
  s_Product$$anon$1: 0
}, false, "scala.Product$$anon$1", {
  s_Product$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_s_Product$$anon$1.prototype.$classData = $d_s_Product$$anon$1;
/** @constructor */
function $c_T2(_1, _2) {
  this.T2__f__1 = null;
  this.T2__f__2 = null;
  this.T2__f__1 = _1;
  this.T2__f__2 = _2
}
$c_T2.prototype = new $h_O();
$c_T2.prototype.constructor = $c_T2;
/** @constructor */
function $h_T2() {
  /*<skip>*/
}
$h_T2.prototype = $c_T2.prototype;
$c_T2.prototype.productArity__I = (function() {
  return 2
});
$c_T2.prototype.productElement__I__O = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n)
});
$c_T2.prototype.toString__T = (function() {
  return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")")
});
$c_T2.prototype.productPrefix__T = (function() {
  return "Tuple2"
});
$c_T2.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_T2.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_T2.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T2)) {
    var Tuple2$1 = $as_T2(x$1);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, Tuple2$1.T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, Tuple2$1.T2__f__2))
  } else {
    return false
  }
});
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
var $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate)
}
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
  /*<skip>*/
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().initClass({
  sc_ClassTagSeqFactory$AnySeqDelegate: 0
}, false, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", {
  sc_ClassTagSeqFactory$AnySeqDelegate: 1,
  sc_ClassTagIterableFactory$AnyIterableDelegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1,
  sc_SeqFactory: 1
});
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype.$classData = $d_sc_ClassTagSeqFactory$AnySeqDelegate;
function $f_sc_Iterable__toString__T($thiz) {
  var start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")")
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
  /*<skip>*/
}
$c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$19.prototype = $c_sc_Iterator$$anon$19.prototype;
$c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  return false
});
$c_sc_Iterator$$anon$19.prototype.next__E = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator")
});
$c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
  return 0
});
$c_sc_Iterator$$anon$19.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return this
});
$c_sc_Iterator$$anon$19.prototype.next__O = (function() {
  this.next__E()
});
var $d_sc_Iterator$$anon$19 = new $TypeData().initClass({
  sc_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", {
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$19.prototype.$classData = $d_sc_Iterator$$anon$19;
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
    if ($thiz.sc_Iterator$SliceIterator__f_underlying.hasNext__Z()) {
      $thiz.sc_Iterator$SliceIterator__f_underlying.next__O();
      $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0)
    } else {
      $thiz.sc_Iterator$SliceIterator__f_dropping = 0
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    return (-1)
  } else {
    var that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
    return ((that < 0) ? 0 : that)
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.sc_Iterator$SliceIterator__f_underlying = null;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
  this.sc_Iterator$SliceIterator__f_dropping = 0;
  this.sc_Iterator$SliceIterator__f_underlying = underlying;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
  this.sc_Iterator$SliceIterator__f_dropping = start
}
$c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$SliceIterator.prototype.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
  /*<skip>*/
}
$h_sc_Iterator$SliceIterator.prototype = $c_sc_Iterator$SliceIterator.prototype;
$c_sc_Iterator$SliceIterator.prototype.knownSize__I = (function() {
  var size = this.sc_Iterator$SliceIterator__f_underlying.knownSize__I();
  if ((size < 0)) {
    return (-1)
  } else {
    var that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
      return dropSize
    } else {
      var x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
      return ((x < dropSize) ? x : dropSize)
    }
  }
});
$c_sc_Iterator$SliceIterator.prototype.hasNext__Z = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && this.sc_Iterator$SliceIterator__f_underlying.hasNext__Z())
});
$c_sc_Iterator$SliceIterator.prototype.next__O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
    return this.sc_Iterator$SliceIterator__f_underlying.next__O()
  } else {
    return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? this.sc_Iterator$SliceIterator__f_underlying.next__O() : $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
  }
});
$c_sc_Iterator$SliceIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo)
  } else if ((until <= lo)) {
    var rest = 0
  } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    var rest = ((until - lo) | 0)
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that)
  };
  if ((rest === 0)) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  } else {
    this.sc_Iterator$SliceIterator__f_dropping = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
    return this
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().initClass({
  sc_Iterator$SliceIterator: 0
}, false, "scala.collection.Iterator$SliceIterator", {
  sc_Iterator$SliceIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$SliceIterator.prototype.$classData = $d_sc_Iterator$SliceIterator;
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $as_sc_LinearSeq($thiz);
  var len = 0;
  while (true) {
    var this$1 = these;
    if ((!this$1.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sc_LinearSeq(these.tail__O())
    } else {
      break
    }
  };
  return len
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $as_sc_LinearSeq($thiz), len))
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if (skipped.isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return skipped.head__O()
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2)
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that)
  }
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sc_LinearSeq(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      var this$1 = a;
      if ((!this$1.isEmpty__Z())) {
        var this$2 = b;
        var $$x1 = (!this$2.isEmpty__Z())
      } else {
        var $$x1 = false
      };
      if (($$x1 && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        var temp$a = $as_sc_LinearSeq(a.tail__O());
        var temp$b = $as_sc_LinearSeq(b.tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (a.isEmpty__Z() && b.isEmpty__Z())
      }
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer
}
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
  /*<skip>*/
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype;
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.hasNext__Z = (function() {
  return (!this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.isEmpty__Z())
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.next__O = (function() {
  var r = this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.head__O();
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_StrictOptimizedLinearSeqOps(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.tail__O());
  return r
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 0
}, false, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", {
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.$classData = $d_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$())
}
$c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_IndexedSeq$.prototype.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
  /*<skip>*/
}
$h_sci_IndexedSeq$.prototype = $c_sci_IndexedSeq$.prototype;
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sci_IndexedSeq = (function(it) {
  if ($is_sci_IndexedSeq(it)) {
    var x2 = $as_sci_IndexedSeq(it);
    return x2
  } else {
    return $as_sci_IndexedSeq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
  }
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(source)
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(it)
});
var $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.sci_LazyList$LazyIterator__f_lazyList = null;
  this.sci_LazyList$LazyIterator__f_lazyList = lazyList
}
$c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_LazyList$LazyIterator.prototype.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
  /*<skip>*/
}
$h_sci_LazyList$LazyIterator.prototype = $c_sci_LazyList$LazyIterator.prototype;
$c_sci_LazyList$LazyIterator.prototype.hasNext__Z = (function() {
  return (!this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z())
});
$c_sci_LazyList$LazyIterator.prototype.next__O = (function() {
  if (this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z()) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
  } else {
    var this$1 = this.sci_LazyList$LazyIterator__f_lazyList;
    var res = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
    var this$2 = this.sci_LazyList$LazyIterator__f_lazyList;
    this.sci_LazyList$LazyIterator__f_lazyList = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    return res
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().initClass({
  sci_LazyList$LazyIterator: 0
}, false, "scala.collection.immutable.LazyList$LazyIterator", {
  sci_LazyList$LazyIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_LazyList$LazyIterator.prototype.$classData = $d_sci_LazyList$LazyIterator;
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  new $c_T2($m_sci_Nil$(), $m_sci_Nil$());
  new $c_sci_List$$anon$1()
}
$c_sci_List$.prototype = new $h_O();
$c_sci_List$.prototype.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
  /*<skip>*/
}
$h_sci_List$.prototype = $c_sci_List$.prototype;
$c_sci_List$.prototype.from__sc_IterableOnce__O = (function(source) {
  return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(source)
});
var $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)) {
    $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
  };
  $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
  var slice = $thiz.sci_NewVectorIterator__f_v.vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
  while ((slice.u.length === 0)) {
    $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
    slice = $thiz.sci_NewVectorIterator__f_v.vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx)
  };
  $thiz.sci_NewVectorIterator__f_sliceStart = $thiz.sci_NewVectorIterator__f_sliceEnd;
  var count = $thiz.sci_NewVectorIterator__f_sliceCount;
  var idx = $thiz.sci_NewVectorIterator__f_sliceIdx;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.sci_NewVectorIterator__f_sliceDim = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.sci_NewVectorIterator__f_sliceDim;
  switch (x1) {
    case 1: {
      $thiz.sci_NewVectorIterator__f_a1 = slice;
      break
    }
    case 2: {
      $thiz.sci_NewVectorIterator__f_a2 = $asArrayOf_O(slice, 2);
      break
    }
    case 3: {
      $thiz.sci_NewVectorIterator__f_a3 = $asArrayOf_O(slice, 3);
      break
    }
    case 4: {
      $thiz.sci_NewVectorIterator__f_a4 = $asArrayOf_O(slice, 4);
      break
    }
    case 5: {
      $thiz.sci_NewVectorIterator__f_a5 = $asArrayOf_O(slice, 5);
      break
    }
    case 6: {
      $thiz.sci_NewVectorIterator__f_a6 = $asArrayOf_O(slice, 6);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  };
  $thiz.sci_NewVectorIterator__f_sliceEnd = (($thiz.sci_NewVectorIterator__f_sliceStart + Math.imul(slice.u.length, (1 << Math.imul(5, (((-1) + $thiz.sci_NewVectorIterator__f_sliceDim) | 0))))) | 0);
  if (($thiz.sci_NewVectorIterator__f_sliceEnd > $thiz.sci_NewVectorIterator__f_totalLength)) {
    $thiz.sci_NewVectorIterator__f_sliceEnd = $thiz.sci_NewVectorIterator__f_totalLength
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    $thiz.sci_NewVectorIterator__f_oldPos = (((-1) + (1 << Math.imul(5, $thiz.sci_NewVectorIterator__f_sliceDim))) | 0)
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + $thiz.sci_NewVectorIterator__f_totalLength) | 0);
  if ((pos === $thiz.sci_NewVectorIterator__f_sliceEnd)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz)
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    var io = ((pos - $thiz.sci_NewVectorIterator__f_sliceStart) | 0);
    var xor = ($thiz.sci_NewVectorIterator__f_oldPos ^ io);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor);
    $thiz.sci_NewVectorIterator__f_oldPos = io
  };
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var a = $thiz.sci_NewVectorIterator__f_a1.u.length;
  var b = $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
  $thiz.sci_NewVectorIterator__f_a1len = ((a < b) ? a : b);
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get(0)
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get(0)
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get(0)
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $thiz.sci_NewVectorIterator__f_a6.get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.get(0);
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get(0)
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $thiz.sci_NewVectorIterator__f_a6.get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $thiz.sci_NewVectorIterator__f_a5.get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $thiz.sci_NewVectorIterator__f_a4.get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $thiz.sci_NewVectorIterator__f_a3.get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $thiz.sci_NewVectorIterator__f_a2.get((31 & ((io >>> 5) | 0)))
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.sci_NewVectorIterator__f_v = null;
  this.sci_NewVectorIterator__f_totalLength = 0;
  this.sci_NewVectorIterator__f_sliceCount = 0;
  this.sci_NewVectorIterator__f_a1 = null;
  this.sci_NewVectorIterator__f_a2 = null;
  this.sci_NewVectorIterator__f_a3 = null;
  this.sci_NewVectorIterator__f_a4 = null;
  this.sci_NewVectorIterator__f_a5 = null;
  this.sci_NewVectorIterator__f_a6 = null;
  this.sci_NewVectorIterator__f_a1len = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 0;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = 0;
  this.sci_NewVectorIterator__f_v = v;
  this.sci_NewVectorIterator__f_totalLength = totalLength;
  this.sci_NewVectorIterator__f_sliceCount = sliceCount;
  this.sci_NewVectorIterator__f_a1 = v.sci_Vector__f_prefix1;
  this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_a1.u.length;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = this.sci_NewVectorIterator__f_totalLength;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 1;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = this.sci_NewVectorIterator__f_a1len
}
$c_sci_NewVectorIterator.prototype = new $h_O();
$c_sci_NewVectorIterator.prototype.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
  /*<skip>*/
}
$h_sci_NewVectorIterator.prototype = $c_sci_NewVectorIterator.prototype;
$c_sci_NewVectorIterator.prototype.iterator__sc_Iterator = (function() {
  return this
});
$c_sci_NewVectorIterator.prototype.isEmpty__Z = (function() {
  return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)
});
$c_sci_NewVectorIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sci_NewVectorIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sci_NewVectorIterator.prototype.knownSize__I = (function() {
  return ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0)
});
$c_sci_NewVectorIterator.prototype.hasNext__Z = (function() {
  return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)
});
$c_sci_NewVectorIterator.prototype.next__O = (function() {
  if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
    $p_sci_NewVectorIterator__advance__V(this)
  };
  var r = this.sci_NewVectorIterator__f_a1.get(this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((1 + this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  return r
});
$c_sci_NewVectorIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + this.sci_NewVectorIterator__f_totalLength) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.sci_NewVectorIterator__f_totalLength;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.sci_NewVectorIterator__f_totalLength)) {
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
      this.sci_NewVectorIterator__f_a1len = 0
    } else {
      while ((newpos >= this.sci_NewVectorIterator__f_sliceEnd)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this)
      };
      var io = ((newpos - this.sci_NewVectorIterator__f_sliceStart) | 0);
      if ((this.sci_NewVectorIterator__f_sliceDim > 1)) {
        var xor = (this.sci_NewVectorIterator__f_oldPos ^ io);
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, xor);
        this.sci_NewVectorIterator__f_oldPos = io
      };
      this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_a1.u.length;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = (31 & io);
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + ((this.sci_NewVectorIterator__f_totalLength - newpos) | 0)) | 0);
      if ((this.sci_NewVectorIterator__f_a1len > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1)) {
        this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1
      }
    }
  };
  return this
});
$c_sci_NewVectorIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var srcLen = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
      $p_sci_NewVectorIterator__advance__V(this)
    };
    var a = ((total - copied) | 0);
    var b = ((this.sci_NewVectorIterator__f_a1.u.length - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.sci_NewVectorIterator__f_a1;
      var srcPos = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1;
      var destPos = ((start + copied) | 0);
      $systemArraycopyFull(src, srcPos, xs, destPos, count)
    } else {
      $m_s_Array$().copy__O__I__O__I__I__V(this.sci_NewVectorIterator__f_a1, this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1, xs, ((start + copied) | 0), count)
    };
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + count) | 0);
    copied = ((copied + count) | 0)
  };
  return total
});
var $d_sci_NewVectorIterator = new $TypeData().initClass({
  sci_NewVectorIterator: 0
}, false, "scala.collection.immutable.NewVectorIterator", {
  sci_NewVectorIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  jl_Cloneable: 1
});
$c_sci_NewVectorIterator.prototype.$classData = $d_sci_NewVectorIterator;
/** @constructor */
function $c_sci_Seq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_List$())
}
$c_sci_Seq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_Seq$.prototype.constructor = $c_sci_Seq$;
/** @constructor */
function $h_sci_Seq$() {
  /*<skip>*/
}
$h_sci_Seq$.prototype = $c_sci_Seq$.prototype;
$c_sci_Seq$.prototype.from__sc_IterableOnce__sci_Seq = (function(it) {
  if ($is_sci_Seq(it)) {
    var x2 = $as_sci_Seq(it);
    return x2
  } else {
    return $as_sci_Seq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
  }
});
$c_sci_Seq$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_Seq(source)
});
$c_sci_Seq$.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return this.from__sc_IterableOnce__sci_Seq(it)
});
var $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
var $n_sci_Seq$;
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
function $p_sci_Vector$__liftedTree1$1__I($thiz) {
  try {
    $m_sc_StringOps$();
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if (false) {
      return 250
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
  $n_sci_Vector$ = this;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $p_sci_Vector$__liftedTree1$1__I(this);
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0)
}
$c_sci_Vector$.prototype = new $h_O();
$c_sci_Vector$.prototype.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
  /*<skip>*/
}
$h_sci_Vector$.prototype = $c_sci_Vector$.prototype;
$c_sci_Vector$.prototype.from__sc_IterableOnce__sci_Vector = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(it);
    return x2
  } else {
    var knownSize = it.knownSize__I();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$()
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var a1$3;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x2$2 = $as_sci_ArraySeq$ofRef(it);
          var x = x2$2.elemTag__s_reflect_ClassTag().runtimeClass__jl_Class();
          if (((x !== null) && (x === $d_O.getClassOf()))) {
            var a1$3 = x2$2.sci_ArraySeq$ofRef__f_unsafeArray;
            break matchEnd5
          }
        };
        if ($is_sci_Iterable(it)) {
          var x3 = $as_sci_Iterable(it);
          var a1 = new $ac_O(knownSize);
          x3.copyToArray__O__I__I__I(a1, 0, 2147483647);
          var a1$3 = a1;
          break matchEnd5
        };
        var a1$2 = new $ac_O(knownSize);
        var this$1 = it.iterator__sc_Iterator();
        this$1.copyToArray__O__I__I__I(a1$2, 0, 2147483647);
        var a1$3 = a1$2
      };
      return new $c_sci_Vector1(a1$3)
    } else {
      var this$2 = new $c_sci_VectorBuilder();
      var this$3 = this$2.addAll__sc_IterableOnce__sci_VectorBuilder(it);
      return this$3.result__sci_Vector()
    }
  }
});
$c_sci_Vector$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_Vector(source)
});
var $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.u.length;
  if ((dl > 0)) {
    if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz)
    };
    var a = ((32 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.sci_VectorBuilder__f_a1;
    var destPos = $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1;
    $systemArraycopyRefs(data, 0, dest, destPos, copy1);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.sci_VectorBuilder__f_a1;
      $systemArraycopyRefs(data, copy1, dest$1, 0, copy2);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy2) | 0)
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.vectorSliceCount__I();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.vectorSlice__I__AO(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice)
    } else {
      $m_sci_VectorStatics$().foreachRec__I__AO__F1__V((((-2) + x1) | 0), slice, new $c_sjsr_AnonFunction1(((data$2) => {
        var data = $asArrayOf_O(data$2, 1);
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data)
      })))
    };
    sliceIdx = ((1 + sliceIdx) | 0)
  };
  return $thiz
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor)
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor < 1024)) {
    if (($thiz.sci_VectorBuilder__f_depth === 1)) {
      $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $thiz.sci_VectorBuilder__f_a2.set(0, $thiz.sci_VectorBuilder__f_a1);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1)
  } else if ((xor < 32768)) {
    if (($thiz.sci_VectorBuilder__f_depth === 2)) {
      $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $thiz.sci_VectorBuilder__f_a3.set(0, $thiz.sci_VectorBuilder__f_a2);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $thiz.sci_VectorBuilder__f_a3.set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2)
  } else if ((xor < 1048576)) {
    if (($thiz.sci_VectorBuilder__f_depth === 3)) {
      $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $thiz.sci_VectorBuilder__f_a4.set(0, $thiz.sci_VectorBuilder__f_a3);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $thiz.sci_VectorBuilder__f_a3.set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $thiz.sci_VectorBuilder__f_a4.set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3)
  } else if ((xor < 33554432)) {
    if (($thiz.sci_VectorBuilder__f_depth === 4)) {
      $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $thiz.sci_VectorBuilder__f_a5.set(0, $thiz.sci_VectorBuilder__f_a4);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $thiz.sci_VectorBuilder__f_a3.set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $thiz.sci_VectorBuilder__f_a4.set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $thiz.sci_VectorBuilder__f_a5.set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4)
  } else if ((xor < 1073741824)) {
    if (($thiz.sci_VectorBuilder__f_depth === 5)) {
      $thiz.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
      $thiz.sci_VectorBuilder__f_a6.set(0, $thiz.sci_VectorBuilder__f_a5);
      $thiz.sci_VectorBuilder__f_depth = ((1 + $thiz.sci_VectorBuilder__f_depth) | 0)
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a2.set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $thiz.sci_VectorBuilder__f_a3.set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $thiz.sci_VectorBuilder__f_a4.set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $thiz.sci_VectorBuilder__f_a5.set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
    $thiz.sci_VectorBuilder__f_a6.set((31 & ((idx >>> 25) | 0)), $thiz.sci_VectorBuilder__f_a5)
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.sci_VectorBuilder__f_a1) + ", a2=") + $thiz.sci_VectorBuilder__f_a2) + ", a3=") + $thiz.sci_VectorBuilder__f_a3) + ", a4=") + $thiz.sci_VectorBuilder__f_a4) + ", a5=") + $thiz.sci_VectorBuilder__f_a5) + ", a6=") + $thiz.sci_VectorBuilder__f_a6) + ", depth=") + $thiz.sci_VectorBuilder__f_depth))
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.sci_VectorBuilder__f_a6 = null;
  this.sci_VectorBuilder__f_a5 = null;
  this.sci_VectorBuilder__f_a4 = null;
  this.sci_VectorBuilder__f_a3 = null;
  this.sci_VectorBuilder__f_a2 = null;
  this.sci_VectorBuilder__f_a1 = null;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_offset = 0;
  this.sci_VectorBuilder__f_depth = 0;
  this.sci_VectorBuilder__f_a1 = new $ac_O(32);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_offset = 0;
  this.sci_VectorBuilder__f_depth = 1
}
$c_sci_VectorBuilder.prototype = new $h_O();
$c_sci_VectorBuilder.prototype.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
  /*<skip>*/
}
$h_sci_VectorBuilder.prototype = $c_sci_VectorBuilder.prototype;
$c_sci_VectorBuilder.prototype.initFrom__sci_Vector__sci_VectorBuilder = (function(v) {
  var x1 = v.vectorSliceCount__I();
  switch (x1) {
    case 0: {
      break
    }
    case 1: {
      var v1 = $as_sci_Vector1(v);
      this.sci_VectorBuilder__f_depth = 1;
      var i = v1.sci_Vector__f_prefix1.u.length;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      var a = v1.sci_Vector__f_prefix1;
      this.sci_VectorBuilder__f_a1 = ((a.u.length === 32) ? a : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 0, 32));
      break
    }
    case 3: {
      var v2 = $as_sci_Vector2(v);
      var d2 = v2.sci_Vector2__f_data2;
      var a$1 = v2.sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = ((a$1.u.length === 32) ? a$1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 0, 32));
      this.sci_VectorBuilder__f_depth = 2;
      this.sci_VectorBuilder__f_offset = ((32 - v2.sci_Vector2__f_len1) | 0);
      var i$1 = ((v2.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$1);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$1 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      this.sci_VectorBuilder__f_a2.set(0, v2.sci_Vector__f_prefix1);
      var dest = this.sci_VectorBuilder__f_a2;
      var length = d2.u.length;
      $systemArraycopyRefs(d2, 0, dest, 1, length);
      this.sci_VectorBuilder__f_a2.set(((1 + d2.u.length) | 0), this.sci_VectorBuilder__f_a1);
      break
    }
    case 5: {
      var v3 = $as_sci_Vector3(v);
      var d3 = v3.sci_Vector3__f_data3;
      var s2 = v3.sci_Vector3__f_suffix2;
      var a$2 = v3.sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = ((a$2.u.length === 32) ? a$2 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 0, 32));
      this.sci_VectorBuilder__f_depth = 3;
      this.sci_VectorBuilder__f_offset = ((1024 - v3.sci_Vector3__f_len12) | 0);
      var i$2 = ((v3.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$2);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$2 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      this.sci_VectorBuilder__f_a3.set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v3.sci_Vector__f_prefix1, v3.sci_Vector3__f_prefix2), 2));
      var dest$1 = this.sci_VectorBuilder__f_a3;
      var length$1 = d3.u.length;
      $systemArraycopyRefs(d3, 0, dest$1, 1, length$1);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2, 32), 2);
      this.sci_VectorBuilder__f_a3.set(((1 + d3.u.length) | 0), this.sci_VectorBuilder__f_a2);
      this.sci_VectorBuilder__f_a2.set(s2.u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    case 7: {
      var v4 = $as_sci_Vector4(v);
      var d4 = v4.sci_Vector4__f_data4;
      var s3 = v4.sci_Vector4__f_suffix3;
      var s2$2 = v4.sci_Vector4__f_suffix2;
      var a$3 = v4.sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = ((a$3.u.length === 32) ? a$3 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 0, 32));
      this.sci_VectorBuilder__f_depth = 4;
      this.sci_VectorBuilder__f_offset = ((32768 - v4.sci_Vector4__f_len123) | 0);
      var i$3 = ((v4.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$3);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$3 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      this.sci_VectorBuilder__f_a4.set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v4.sci_Vector__f_prefix1, v4.sci_Vector4__f_prefix2), v4.sci_Vector4__f_prefix3), 3));
      var dest$2 = this.sci_VectorBuilder__f_a4;
      var length$2 = d4.u.length;
      $systemArraycopyRefs(d4, 0, dest$2, 1, length$2);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$2, 32), 2);
      this.sci_VectorBuilder__f_a4.set(((1 + d4.u.length) | 0), this.sci_VectorBuilder__f_a3);
      this.sci_VectorBuilder__f_a3.set(s3.u.length, this.sci_VectorBuilder__f_a2);
      this.sci_VectorBuilder__f_a2.set(s2$2.u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    case 9: {
      var v5 = $as_sci_Vector5(v);
      var d5 = v5.sci_Vector5__f_data5;
      var s4 = v5.sci_Vector5__f_suffix4;
      var s3$2 = v5.sci_Vector5__f_suffix3;
      var s2$3 = v5.sci_Vector5__f_suffix2;
      var a$4 = v5.sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = ((a$4.u.length === 32) ? a$4 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 0, 32));
      this.sci_VectorBuilder__f_depth = 5;
      this.sci_VectorBuilder__f_offset = ((1048576 - v5.sci_Vector5__f_len1234) | 0);
      var i$4 = ((v5.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$4);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$4 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      this.sci_VectorBuilder__f_a5.set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v5.sci_Vector__f_prefix1, v5.sci_Vector5__f_prefix2), v5.sci_Vector5__f_prefix3), v5.sci_Vector5__f_prefix4), 4));
      var dest$3 = this.sci_VectorBuilder__f_a5;
      var length$3 = d5.u.length;
      $systemArraycopyRefs(d5, 0, dest$3, 1, length$3);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$2, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$3, 32), 2);
      this.sci_VectorBuilder__f_a5.set(((1 + d5.u.length) | 0), this.sci_VectorBuilder__f_a4);
      this.sci_VectorBuilder__f_a4.set(s4.u.length, this.sci_VectorBuilder__f_a3);
      this.sci_VectorBuilder__f_a3.set(s3$2.u.length, this.sci_VectorBuilder__f_a2);
      this.sci_VectorBuilder__f_a2.set(s2$3.u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    case 11: {
      var v6 = $as_sci_Vector6(v);
      var d6 = v6.sci_Vector6__f_data6;
      var s5 = v6.sci_Vector6__f_suffix5;
      var s4$2 = v6.sci_Vector6__f_suffix4;
      var s3$3 = v6.sci_Vector6__f_suffix3;
      var s2$4 = v6.sci_Vector6__f_suffix2;
      var a$5 = v6.sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = ((a$5.u.length === 32) ? a$5 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 0, 32));
      this.sci_VectorBuilder__f_depth = 6;
      this.sci_VectorBuilder__f_offset = ((33554432 - v6.sci_Vector6__f_len12345) | 0);
      var i$5 = ((v6.sci_BigVector__f_length0 + this.sci_VectorBuilder__f_offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$5);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$5 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      this.sci_VectorBuilder__f_a6.set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO(v6.sci_Vector__f_prefix1, v6.sci_Vector6__f_prefix2), v6.sci_Vector6__f_prefix3), v6.sci_Vector6__f_prefix4), v6.sci_Vector6__f_prefix5), 5));
      var dest$4 = this.sci_VectorBuilder__f_a6;
      var length$4 = d6.u.length;
      $systemArraycopyRefs(d6, 0, dest$4, 1, length$4);
      this.sci_VectorBuilder__f_a5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s5, 32), 5);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4$2, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$4, 32), 2);
      this.sci_VectorBuilder__f_a6.set(((1 + d6.u.length) | 0), this.sci_VectorBuilder__f_a5);
      this.sci_VectorBuilder__f_a5.set(s5.u.length, this.sci_VectorBuilder__f_a4);
      this.sci_VectorBuilder__f_a4.set(s4$2.u.length, this.sci_VectorBuilder__f_a3);
      this.sci_VectorBuilder__f_a3.set(s3$3.u.length, this.sci_VectorBuilder__f_a2);
      this.sci_VectorBuilder__f_a2.set(s2$4.u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  };
  if (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest > 0))) {
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 32;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (((-32) + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0)
  };
  return this
});
$c_sci_VectorBuilder.prototype.addOne__O__sci_VectorBuilder = (function(elem) {
  if ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
    $p_sci_VectorBuilder__advance__V(this)
  };
  this.sci_VectorBuilder__f_a1.set(this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1, elem);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = ((1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
  return this
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__sci_VectorBuilder = (function(xs) {
  if ((xs instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(xs);
    return (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest === 0)) ? this.initFrom__sci_Vector__sci_VectorBuilder(x2) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, x2))
  } else {
    return $as_sci_VectorBuilder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs))
  }
});
$c_sci_VectorBuilder.prototype.result__sci_Vector = (function() {
  var len = ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var realLen = ((len - this.sci_VectorBuilder__f_offset) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$()
  } else if ((len <= 32)) {
    if ((realLen === 32)) {
      return new $c_sci_Vector1(this.sci_VectorBuilder__f_a1)
    } else {
      var original = this.sci_VectorBuilder__f_a1;
      return new $c_sci_Vector1($m_ju_Arrays$().copyOf__AO__I__AO(original, realLen))
    }
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var original$1 = this.sci_VectorBuilder__f_a2;
    var data = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, 1, i2), 2);
    var prefix1 = this.sci_VectorBuilder__f_a2.get(0);
    var a = this.sci_VectorBuilder__f_a2.get(i2);
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a.u.length === len$1) ? a : $m_ju_Arrays$().copyOf__AO__I__AO(a, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.sci_VectorBuilder__f_offset) | 0), data, suffix1, realLen)
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var original$2 = this.sci_VectorBuilder__f_a3;
    var data$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$2, 1, i3), 3);
    var a$1 = this.sci_VectorBuilder__f_a3.get(0);
    var to = a$1.u.length;
    var prefix2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 1, to), 2);
    var prefix1$2 = this.sci_VectorBuilder__f_a3.get(0).get(0);
    var original$3 = this.sci_VectorBuilder__f_a3.get(i3);
    var suffix2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$3, i2$2), 2);
    var a$2 = this.sci_VectorBuilder__f_a3.get(i3).get(i2$2);
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$2.u.length === len$2) ? a$2 : $m_ju_Arrays$().copyOf__AO__I__AO(a$2, len$2));
    var len1 = prefix1$2.u.length;
    var len12 = ((len1 + (prefix2.u.length << 5)) | 0);
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, len12, data$2, suffix2, suffix1$2, realLen)
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var original$4 = this.sci_VectorBuilder__f_a4;
    var data$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$4, 1, i4), 4);
    var a$3 = this.sci_VectorBuilder__f_a4.get(0);
    var to$1 = a$3.u.length;
    var prefix3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 1, to$1), 3);
    var a$4 = this.sci_VectorBuilder__f_a4.get(0).get(0);
    var to$2 = a$4.u.length;
    var prefix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 1, to$2), 2);
    var prefix1$3 = this.sci_VectorBuilder__f_a4.get(0).get(0).get(0);
    var original$5 = this.sci_VectorBuilder__f_a4.get(i4);
    var suffix3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$5, i3$2), 3);
    var original$6 = this.sci_VectorBuilder__f_a4.get(i4).get(i3$2);
    var suffix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$6, i2$3), 2);
    var a$5 = this.sci_VectorBuilder__f_a4.get(i4).get(i3$2).get(i2$3);
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$5.u.length === len$3) ? a$5 : $m_ju_Arrays$().copyOf__AO__I__AO(a$5, len$3));
    var len1$2 = prefix1$3.u.length;
    var len12$2 = ((len1$2 + (prefix2$2.u.length << 5)) | 0);
    var len123 = ((len12$2 + (prefix3.u.length << 10)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, len123, data$3, suffix3, suffix2$2, suffix1$3, realLen)
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var original$7 = this.sci_VectorBuilder__f_a5;
    var data$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$7, 1, i5), 5);
    var a$6 = this.sci_VectorBuilder__f_a5.get(0);
    var to$3 = a$6.u.length;
    var prefix4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$6, 1, to$3), 4);
    var a$7 = this.sci_VectorBuilder__f_a5.get(0).get(0);
    var to$4 = a$7.u.length;
    var prefix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$7, 1, to$4), 3);
    var a$8 = this.sci_VectorBuilder__f_a5.get(0).get(0).get(0);
    var to$5 = a$8.u.length;
    var prefix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$8, 1, to$5), 2);
    var prefix1$4 = this.sci_VectorBuilder__f_a5.get(0).get(0).get(0).get(0);
    var original$8 = this.sci_VectorBuilder__f_a5.get(i5);
    var suffix4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$8, i4$2), 4);
    var original$9 = this.sci_VectorBuilder__f_a5.get(i5).get(i4$2);
    var suffix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$9, i3$3), 3);
    var original$10 = this.sci_VectorBuilder__f_a5.get(i5).get(i4$2).get(i3$3);
    var suffix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$10, i2$4), 2);
    var a$9 = this.sci_VectorBuilder__f_a5.get(i5).get(i4$2).get(i3$3).get(i2$4);
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$9.u.length === len$4) ? a$9 : $m_ju_Arrays$().copyOf__AO__I__AO(a$9, len$4));
    var len1$3 = prefix1$4.u.length;
    var len12$3 = ((len1$3 + (prefix2$3.u.length << 5)) | 0);
    var len123$2 = ((len12$3 + (prefix3$2.u.length << 10)) | 0);
    var len1234 = ((len123$2 + (prefix4.u.length << 15)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, len1234, data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen)
  } else {
    var i1$5 = (31 & (((-1) + len) | 0));
    var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
    var i6 = (((((-1) + len) | 0) >>> 25) | 0);
    var original$11 = this.sci_VectorBuilder__f_a6;
    var data$5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$11, 1, i6), 6);
    var a$10 = this.sci_VectorBuilder__f_a6.get(0);
    var to$6 = a$10.u.length;
    var prefix5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$10, 1, to$6), 5);
    var a$11 = this.sci_VectorBuilder__f_a6.get(0).get(0);
    var to$7 = a$11.u.length;
    var prefix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$11, 1, to$7), 4);
    var a$12 = this.sci_VectorBuilder__f_a6.get(0).get(0).get(0);
    var to$8 = a$12.u.length;
    var prefix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$12, 1, to$8), 3);
    var a$13 = this.sci_VectorBuilder__f_a6.get(0).get(0).get(0).get(0);
    var to$9 = a$13.u.length;
    var prefix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$13, 1, to$9), 2);
    var prefix1$5 = this.sci_VectorBuilder__f_a6.get(0).get(0).get(0).get(0).get(0);
    var original$12 = this.sci_VectorBuilder__f_a6.get(i6);
    var suffix5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$12, i5$2), 5);
    var original$13 = this.sci_VectorBuilder__f_a6.get(i6).get(i5$2);
    var suffix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$13, i4$3), 4);
    var original$14 = this.sci_VectorBuilder__f_a6.get(i6).get(i5$2).get(i4$3);
    var suffix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$14, i3$4), 3);
    var original$15 = this.sci_VectorBuilder__f_a6.get(i6).get(i5$2).get(i4$3).get(i3$4);
    var suffix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$15, i2$5), 2);
    var a$14 = this.sci_VectorBuilder__f_a6.get(i6).get(i5$2).get(i4$3).get(i3$4).get(i2$5);
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$14.u.length === len$5) ? a$14 : $m_ju_Arrays$().copyOf__AO__I__AO(a$14, len$5));
    var len1$4 = prefix1$5.u.length;
    var len12$4 = ((len1$4 + (prefix2$4.u.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.u.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.u.length << 15)) | 0);
    var len12345 = ((len1234$2 + (prefix5.u.length << 20)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, len12345, data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen)
  }
});
$c_sci_VectorBuilder.prototype.toString__T = (function() {
  return (((((((("VectorBuilder(len1=" + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) + ", lenRest=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) + ", offset=") + this.sci_VectorBuilder__f_offset) + ", depth=") + this.sci_VectorBuilder__f_depth) + ")")
});
$c_sci_VectorBuilder.prototype.result__O = (function() {
  return this.result__sci_Vector()
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return this.addAll__sc_IterableOnce__sci_VectorBuilder(xs)
});
$c_sci_VectorBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sci_VectorBuilder(elem)
});
function $as_sci_VectorBuilder(obj) {
  return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"))
}
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)))
}
function $asArrayOf_sci_VectorBuilder(obj, depth) {
  return (($isArrayOf_sci_VectorBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth))
}
var $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
/** @constructor */
function $c_scm_Buffer$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$())
}
$c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$c_scm_Buffer$.prototype.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
  /*<skip>*/
}
$h_scm_Buffer$.prototype = $c_scm_Buffer$.prototype;
var $d_scm_Buffer$ = new $TypeData().initClass({
  scm_Buffer$: 0
}, false, "scala.collection.mutable.Buffer$", {
  scm_Buffer$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_Buffer$.prototype.$classData = $d_scm_Buffer$;
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$()
  };
  return $n_scm_Buffer$
}
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.runtimeClass__jl_Class();
    var x$3 = $as_s_reflect_ClassTag(x).runtimeClass__jl_Class();
    return (x$2 === x$3)
  } else {
    return false
  }
}
function $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz) {
  return (clazz.isArray__Z() ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.getComponentType__jl_Class())) + "]") : clazz.getName__T())
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_reflect_ClassTag)))
}
function $as_s_reflect_ClassTag(obj) {
  return (($is_s_reflect_ClassTag(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.reflect.ClassTag"))
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_reflect_ClassTag)))
}
function $asArrayOf_s_reflect_ClassTag(obj, depth) {
  return (($isArrayOf_s_reflect_ClassTag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.reflect.ClassTag;", depth))
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = x$2.productArity__I()
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = this.sr_ScalaRunTime$$anon$1__f_x$2.productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $c_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$c_sjs_js_WrappedArray$.prototype = new $h_O();
$c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray$.prototype = $c_sjs_js_WrappedArray$.prototype;
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__sjs_js_WrappedArray = (function(source) {
  var this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
  return $as_sjs_js_WrappedArray($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source)).result__O())
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(source)
});
var $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
/** @constructor */
function $c_sjsr_WrappedVarArgs$() {
  /*<skip>*/
}
$c_sjsr_WrappedVarArgs$.prototype = new $h_O();
$c_sjsr_WrappedVarArgs$.prototype.constructor = $c_sjsr_WrappedVarArgs$;
/** @constructor */
function $h_sjsr_WrappedVarArgs$() {
  /*<skip>*/
}
$h_sjsr_WrappedVarArgs$.prototype = $c_sjsr_WrappedVarArgs$.prototype;
$c_sjsr_WrappedVarArgs$.prototype.from__sc_IterableOnce__sjsr_WrappedVarArgs = (function(source) {
  var this$1 = this.newBuilder__scm_Builder();
  return $as_sjsr_WrappedVarArgs($as_scm_Builder(this$1.addAll__sc_IterableOnce__scm_Growable(source)).result__O())
});
$c_sjsr_WrappedVarArgs$.prototype.newBuilder__scm_Builder = (function() {
  var array = [];
  var this$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var f = new $c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = $as_sjs_js_WrappedArray(x$1$2);
    return new $c_sjsr_WrappedVarArgs(x$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array)
  }));
  return new $c_scm_Builder$$anon$1(this$4, f)
});
$c_sjsr_WrappedVarArgs$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(source)
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().initClass({
  sjsr_WrappedVarArgs$: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs$", {
  sjsr_WrappedVarArgs$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs$.prototype.$classData = $d_sjsr_WrappedVarArgs$;
var $n_sjsr_WrappedVarArgs$;
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$()
  };
  return $n_sjsr_WrappedVarArgs$
}
/** @constructor */
function $c_s_util_Left(value) {
  this.s_util_Left__f_value = null;
  this.s_util_Left__f_value = value
}
$c_s_util_Left.prototype = new $h_s_util_Either();
$c_s_util_Left.prototype.constructor = $c_s_util_Left;
/** @constructor */
function $h_s_util_Left() {
  /*<skip>*/
}
$h_s_util_Left.prototype = $c_s_util_Left.prototype;
$c_s_util_Left.prototype.productPrefix__T = (function() {
  return "Left"
});
$c_s_util_Left.prototype.productArity__I = (function() {
  return 1
});
$c_s_util_Left.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Left__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_util_Left.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_util_Left.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_util_Left.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_util_Left.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_util_Left)) {
    var Left$1 = $as_s_util_Left(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Left__f_value, Left$1.s_util_Left__f_value)
  } else {
    return false
  }
});
function $as_s_util_Left(obj) {
  return (((obj instanceof $c_s_util_Left) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Left"))
}
function $isArrayOf_s_util_Left(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Left)))
}
function $asArrayOf_s_util_Left(obj, depth) {
  return (($isArrayOf_s_util_Left(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Left;", depth))
}
var $d_s_util_Left = new $TypeData().initClass({
  s_util_Left: 0
}, false, "scala.util.Left", {
  s_util_Left: 1,
  s_util_Either: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Left.prototype.$classData = $d_s_util_Left;
/** @constructor */
function $c_s_util_Right(value) {
  this.s_util_Right__f_value = null;
  this.s_util_Right__f_value = value
}
$c_s_util_Right.prototype = new $h_s_util_Either();
$c_s_util_Right.prototype.constructor = $c_s_util_Right;
/** @constructor */
function $h_s_util_Right() {
  /*<skip>*/
}
$h_s_util_Right.prototype = $c_s_util_Right.prototype;
$c_s_util_Right.prototype.productPrefix__T = (function() {
  return "Right"
});
$c_s_util_Right.prototype.productArity__I = (function() {
  return 1
});
$c_s_util_Right.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Right__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_util_Right.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_util_Right.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_util_Right.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_util_Right.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_util_Right)) {
    var Right$1 = $as_s_util_Right(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Right__f_value, Right$1.s_util_Right__f_value)
  } else {
    return false
  }
});
function $as_s_util_Right(obj) {
  return (((obj instanceof $c_s_util_Right) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Right"))
}
function $isArrayOf_s_util_Right(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Right)))
}
function $asArrayOf_s_util_Right(obj, depth) {
  return (($isArrayOf_s_util_Right(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Right;", depth))
}
var $d_s_util_Right = new $TypeData().initClass({
  s_util_Right: 0
}, false, "scala.util.Right", {
  s_util_Right: 1,
  s_util_Either: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Right.prototype.$classData = $d_s_util_Right;
/** @constructor */
function $c_Lscodec_bits_BitVector$() {
  this.Lscodec_bits_BitVector$__f_empty = null;
  $n_Lscodec_bits_BitVector$ = this;
  this.Lscodec_bits_BitVector$__f_empty = this.toBytes__Lscodec_bits_ByteVector__J__Lscodec_bits_BitVector$Bytes($m_Lscodec_bits_ByteVector$().Lscodec_bits_ByteVector$__f_empty, $L0);
  this.toBytes__Lscodec_bits_ByteVector__J__Lscodec_bits_BitVector$Bytes($m_Lscodec_bits_ByteVector$().apply__sci_Seq__s_math_Integral__Lscodec_bits_ByteVector($m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $ac_I(new Int32Array([0]))), $m_s_math_Numeric$IntIsIntegral$()), new $c_RTLong(1, 0));
  this.toBytes__Lscodec_bits_ByteVector__J__Lscodec_bits_BitVector$Bytes($m_Lscodec_bits_ByteVector$().apply__sci_Seq__s_math_Integral__Lscodec_bits_ByteVector($m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $ac_I(new Int32Array([255]))), $m_s_math_Numeric$IntIsIntegral$()), new $c_RTLong(1, 0));
  var this$1 = $m_Lscodec_bits_ByteVector$();
  this.toBytes__Lscodec_bits_ByteVector__J__Lscodec_bits_BitVector$Bytes(this$1.fill__J__O__s_math_Integral__Lscodec_bits_ByteVector(new $c_RTLong(1, 0), 0, $m_s_math_Numeric$IntIsIntegral$()), new $c_RTLong(8, 0));
  var this$2 = $m_Lscodec_bits_ByteVector$();
  this.toBytes__Lscodec_bits_ByteVector__J__Lscodec_bits_BitVector$Bytes(this$2.fill__J__O__s_math_Integral__Lscodec_bits_ByteVector(new $c_RTLong(1, 0), 255, $m_s_math_Numeric$IntIsIntegral$()), new $c_RTLong(8, 0))
}
$c_Lscodec_bits_BitVector$.prototype = new $h_O();
$c_Lscodec_bits_BitVector$.prototype.constructor = $c_Lscodec_bits_BitVector$;
/** @constructor */
function $h_Lscodec_bits_BitVector$() {
  /*<skip>*/
}
$h_Lscodec_bits_BitVector$.prototype = $c_Lscodec_bits_BitVector$.prototype;
$c_Lscodec_bits_BitVector$.prototype.apply__Lscodec_bits_ByteVector__Lscodec_bits_BitVector = (function(bs) {
  var this$1 = bs.size__J();
  var lo = this$1.RTLong__f_lo;
  var lo$1 = (lo << 3);
  var hi = (((lo >>> 29) | 0) | (this$1.RTLong__f_hi << 3));
  return this.toBytes__Lscodec_bits_ByteVector__J__Lscodec_bits_BitVector$Bytes(bs, new $c_RTLong(lo$1, hi))
});
$c_Lscodec_bits_BitVector$.prototype.fill__J__Z__Lscodec_bits_BitVector = (function(n, high) {
  var t = this.scodec$bits$BitVector$$$bytesNeededForBits__J__J(n);
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var bs = $m_Lscodec_bits_ByteVector$().fill__J__O__s_math_Integral__Lscodec_bits_ByteVector(new $c_RTLong(lo, hi), (high ? (-1) : 0), $m_s_math_Numeric$IntIsIntegral$());
  return this.toBytes__Lscodec_bits_ByteVector__J__Lscodec_bits_BitVector$Bytes(bs, n)
});
$c_Lscodec_bits_BitVector$.prototype.toBytes__Lscodec_bits_ByteVector__J__Lscodec_bits_BitVector$Bytes = (function(bs, sizeInBits) {
  var t = this.scodec$bits$BitVector$$$bytesNeededForBits__J__J(sizeInBits);
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var $$x1 = $m_s_Predef$();
  var b = bs.size__J();
  var bhi = b.RTLong__f_hi;
  $$x1.require__Z__V(((hi === bhi) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (hi < bhi)));
  var this$1 = bs.size__J();
  var ahi = this$1.RTLong__f_hi;
  if (((ahi === hi) ? (((-2147483648) ^ this$1.RTLong__f_lo) > ((-2147483648) ^ lo)) : (ahi > hi))) {
    var b$1 = bs.take__J__Lscodec_bits_ByteVector(new $c_RTLong(lo, hi))
  } else {
    var b$1 = bs
  };
  return new $c_Lscodec_bits_BitVector$Bytes(b$1, sizeInBits)
});
$c_Lscodec_bits_BitVector$.prototype.scodec$bits$BitVector$$$getBit__B__I__Z = (function(byte, n) {
  return (((128 >> n) & byte) !== 0)
});
$c_Lscodec_bits_BitVector$.prototype.scodec$bits$BitVector$$$validBitsInLastByte__J__J = (function(size) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(size.RTLong__f_lo, size.RTLong__f_hi, 8, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return (((lo === 0) && (hi === 0)) ? new $c_RTLong(8, 0) : new $c_RTLong(lo, hi))
});
$c_Lscodec_bits_BitVector$.prototype.scodec$bits$BitVector$$$topNBits__I__B = (function(n) {
  return ((((-1) << ((8 - n) | 0)) << 24) >> 24)
});
$c_Lscodec_bits_BitVector$.prototype.scodec$bits$BitVector$$$bytesNeededForBits__J__J = (function(size) {
  var bhi = size.RTLong__f_hi;
  var lo = ((7 + size.RTLong__f_lo) | 0);
  var hi = ((((-2147483648) ^ lo) < (-2147483641)) ? ((1 + bhi) | 0) : bhi);
  var this$2 = $m_RTLong$();
  var lo$1 = this$2.divideImpl__I__I__I__I__I(lo, hi, 8, 0);
  var hi$1 = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $c_RTLong(lo$1, hi$1)
});
$c_Lscodec_bits_BitVector$.prototype.scodec$bits$BitVector$$$clearUnneededBits__J__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector = (function(size, bytes) {
  var this$1 = this.scodec$bits$BitVector$$$validBitsInLastByte__J__J(size);
  var valid = this$1.RTLong__f_lo;
  if (((!bytes.isEmpty__Z()) && (valid < 8))) {
    var b = bytes.size__J();
    var bhi = b.RTLong__f_hi;
    var lo = (((-1) + b.RTLong__f_lo) | 0);
    var hi = ((lo !== (-1)) ? bhi : (((-1) + bhi) | 0));
    var last = bytes.get__J__B(new $c_RTLong(lo, hi));
    return bytes.update__J__B__Lscodec_bits_ByteVector(new $c_RTLong(lo, hi), (((last & this.scodec$bits$BitVector$$$topNBits__I__B(valid)) << 24) >> 24))
  } else {
    return bytes
  }
});
var $d_Lscodec_bits_BitVector$ = new $TypeData().initClass({
  Lscodec_bits_BitVector$: 0
}, false, "scodec.bits.BitVector$", {
  Lscodec_bits_BitVector$: 1,
  O: 1,
  Lscodec_bits_BitVectorPlatform: 1,
  Lscodec_bits_BitVectorCompanionCrossPlatform: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Sum: 1
});
$c_Lscodec_bits_BitVector$.prototype.$classData = $d_Lscodec_bits_BitVector$;
var $n_Lscodec_bits_BitVector$;
function $m_Lscodec_bits_BitVector$() {
  if ((!$n_Lscodec_bits_BitVector$)) {
    $n_Lscodec_bits_BitVector$ = new $c_Lscodec_bits_BitVector$()
  };
  return $n_Lscodec_bits_BitVector$
}
/** @constructor */
function $c_Lscoin_Crypto$PrivateKey(value) {
  this.Lscoin_CryptoPlatform$PrivateKeyPlatform__f_value = null;
  this.Lscoin_Crypto$PrivateKey__f_value = null;
  this.Lscoin_Crypto$PrivateKey__f_value = value;
  $ct_Lscoin_CryptoPlatform$PrivateKeyPlatform__Lscoin_CryptoPlatform__Lscoin_ByteVector32__(this, $m_Lscoin_Crypto$(), value)
}
$c_Lscoin_Crypto$PrivateKey.prototype = new $h_Lscoin_CryptoPlatform$PrivateKeyPlatform();
$c_Lscoin_Crypto$PrivateKey.prototype.constructor = $c_Lscoin_Crypto$PrivateKey;
/** @constructor */
function $h_Lscoin_Crypto$PrivateKey() {
  /*<skip>*/
}
$h_Lscoin_Crypto$PrivateKey.prototype = $c_Lscoin_Crypto$PrivateKey.prototype;
$c_Lscoin_Crypto$PrivateKey.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this)
});
$c_Lscoin_Crypto$PrivateKey.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lscoin_Crypto$PrivateKey.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Lscoin_Crypto$PrivateKey)) {
    var x$0$2 = $as_Lscoin_Crypto$PrivateKey(x$0);
    var x = this.Lscoin_Crypto$PrivateKey__f_value;
    var x$2 = x$0$2.Lscoin_Crypto$PrivateKey__f_value;
    return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
  } else {
    return false
  }
});
$c_Lscoin_Crypto$PrivateKey.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lscoin_Crypto$PrivateKey.prototype.productArity__I = (function() {
  return 1
});
$c_Lscoin_Crypto$PrivateKey.prototype.productPrefix__T = (function() {
  return "PrivateKey"
});
$c_Lscoin_Crypto$PrivateKey.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lscoin_Crypto$PrivateKey__f_value
  };
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
function $as_Lscoin_Crypto$PrivateKey(obj) {
  return (((obj instanceof $c_Lscoin_Crypto$PrivateKey) || (obj === null)) ? obj : $throwClassCastException(obj, "scoin.Crypto$PrivateKey"))
}
function $isArrayOf_Lscoin_Crypto$PrivateKey(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscoin_Crypto$PrivateKey)))
}
function $asArrayOf_Lscoin_Crypto$PrivateKey(obj, depth) {
  return (($isArrayOf_Lscoin_Crypto$PrivateKey(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscoin.Crypto$PrivateKey;", depth))
}
var $d_Lscoin_Crypto$PrivateKey = new $TypeData().initClass({
  Lscoin_Crypto$PrivateKey: 0
}, false, "scoin.Crypto$PrivateKey", {
  Lscoin_Crypto$PrivateKey: 1,
  Lscoin_CryptoPlatform$PrivateKeyPlatform: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
$c_Lscoin_Crypto$PrivateKey.prototype.$classData = $d_Lscoin_Crypto$PrivateKey;
/** @constructor */
function $c_Lscoin_Crypto$PublicKey(value) {
  this.Lscoin_Crypto$PublicKey__f_value = null;
  this.Lscoin_Crypto$PublicKey__f_value = value;
  $ct_Lscoin_CryptoPlatform$PublicKeyPlatform__Lscoin_CryptoPlatform__Lscodec_bits_ByteVector__(this, $m_Lscoin_Crypto$(), value);
  var this$1 = value.size__J();
  var requirement = ((this$1.RTLong__f_lo === 33) && (this$1.RTLong__f_hi === 0));
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("requirement failed: " + ("pubkey is " + value.size__J())) + " bytes but should be 33 bytes"))
  };
  var requirement$1 = $m_Lscoin_Crypto$().isPubKeyValidLax__Lscodec_bits_ByteVector__Z(value);
  if ((!requirement$1)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: pubkey is not valid")
  }
}
$c_Lscoin_Crypto$PublicKey.prototype = new $h_Lscoin_CryptoPlatform$PublicKeyPlatform();
$c_Lscoin_Crypto$PublicKey.prototype.constructor = $c_Lscoin_Crypto$PublicKey;
/** @constructor */
function $h_Lscoin_Crypto$PublicKey() {
  /*<skip>*/
}
$h_Lscoin_Crypto$PublicKey.prototype = $c_Lscoin_Crypto$PublicKey.prototype;
$c_Lscoin_Crypto$PublicKey.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this)
});
$c_Lscoin_Crypto$PublicKey.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lscoin_Crypto$PublicKey.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Lscoin_Crypto$PublicKey)) {
    var x$0$2 = $as_Lscoin_Crypto$PublicKey(x$0);
    var x = this.Lscoin_Crypto$PublicKey__f_value;
    var x$2 = x$0$2.Lscoin_Crypto$PublicKey__f_value;
    return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
  } else {
    return false
  }
});
$c_Lscoin_Crypto$PublicKey.prototype.productArity__I = (function() {
  return 1
});
$c_Lscoin_Crypto$PublicKey.prototype.productPrefix__T = (function() {
  return "PublicKey"
});
$c_Lscoin_Crypto$PublicKey.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lscoin_Crypto$PublicKey__f_value
  };
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lscoin_Crypto$PublicKey.prototype.toString__T = (function() {
  var this$1 = this.Lscoin_Crypto$PublicKey__f_value;
  return this$1.toHex__Lscodec_bits_Bases$HexAlphabet__T($m_Lscodec_bits_Bases$Alphabets$HexLowercase$())
});
function $as_Lscoin_Crypto$PublicKey(obj) {
  return (((obj instanceof $c_Lscoin_Crypto$PublicKey) || (obj === null)) ? obj : $throwClassCastException(obj, "scoin.Crypto$PublicKey"))
}
function $isArrayOf_Lscoin_Crypto$PublicKey(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscoin_Crypto$PublicKey)))
}
function $asArrayOf_Lscoin_Crypto$PublicKey(obj, depth) {
  return (($isArrayOf_Lscoin_Crypto$PublicKey(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscoin.Crypto$PublicKey;", depth))
}
var $d_Lscoin_Crypto$PublicKey = new $TypeData().initClass({
  Lscoin_Crypto$PublicKey: 0
}, false, "scoin.Crypto$PublicKey", {
  Lscoin_Crypto$PublicKey: 1,
  Lscoin_CryptoPlatform$PublicKeyPlatform: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
$c_Lscoin_Crypto$PublicKey.prototype.$classData = $d_Lscoin_Crypto$PublicKey;
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
function $as_jl_ArrayIndexOutOfBoundsException(obj) {
  return (((obj instanceof $c_jl_ArrayIndexOutOfBoundsException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ArrayIndexOutOfBoundsException"))
}
function $isArrayOf_jl_ArrayIndexOutOfBoundsException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ArrayIndexOutOfBoundsException)))
}
function $asArrayOf_jl_ArrayIndexOutOfBoundsException(obj, depth) {
  return (($isArrayOf_jl_ArrayIndexOutOfBoundsException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ArrayIndexOutOfBoundsException;", depth))
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz)
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
var $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Float__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var b = $uJ(x2);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi))
  } else {
    return false
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var $$x1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($$x1 ^ hi)
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi)
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
var $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    var $$x1 = res;
    var index = i;
    res = (($$x1 + Math.imul($charAt($thiz, index), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_T__toString__T($thiz) {
  return $thiz
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
var $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
function $ct_jl_StringIndexOutOfBoundsException__I__($thiz, index) {
  var s = ("String index out of range: " + index);
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_jl_StringIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
class $c_Ljava_nio_ReadOnlyBufferException extends $c_jl_UnsupportedOperationException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_Ljava_nio_ReadOnlyBufferException = new $TypeData().initClass({
  Ljava_nio_ReadOnlyBufferException: 0
}, false, "java.nio.ReadOnlyBufferException", {
  Ljava_nio_ReadOnlyBufferException: 1,
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Ljava_nio_ReadOnlyBufferException.prototype.$classData = $d_Ljava_nio_ReadOnlyBufferException;
/** @constructor */
function $c_sc_AbstractIterable() {
  /*<skip>*/
}
$c_sc_AbstractIterable.prototype = new $h_O();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
  /*<skip>*/
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.className__T = (function() {
  return this.stringPrefix__T()
});
$c_sc_AbstractIterable.prototype.foreach__F1__V = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f)
});
$c_sc_AbstractIterable.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterable.prototype.knownSize__I = (function() {
  return (-1)
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.sc_ArrayOps$ArrayIterator__f_xs = xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  var xs$1 = $thiz.sc_ArrayOps$ArrayIterator__f_xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_len = $m_jl_reflect_Array$().getLength__O__I(xs$1);
  return $thiz
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0
}
$c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_ArrayOps$ArrayIterator.prototype.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator.prototype = $c_sc_ArrayOps$ArrayIterator.prototype;
$c_sc_ArrayOps$ArrayIterator.prototype.knownSize__I = (function() {
  return ((this.sc_ArrayOps$ArrayIterator__f_len - this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0)
});
$c_sc_ArrayOps$ArrayIterator.prototype.hasNext__Z = (function() {
  return (this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos < this.sc_ArrayOps$ArrayIterator__f_len)
});
$c_sc_ArrayOps$ArrayIterator.prototype.next__O = (function() {
  try {
    var r = $m_sr_ScalaRunTime$().array_apply__O__I__O(this.sc_ArrayOps$ArrayIterator__f_xs, this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos + n) | 0);
    if ((newPos < 0)) {
      var $$x1 = this.sc_ArrayOps$ArrayIterator__f_len
    } else {
      var a = this.sc_ArrayOps$ArrayIterator__f_len;
      var $$x1 = ((a < newPos) ? a : newPos)
    };
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = $$x1
  };
  return this
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator: 0
}, false, "scala.collection.ArrayOps$ArrayIterator", {
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator.prototype.$classData = $d_sc_ArrayOps$ArrayIterator;
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder : value))
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = self.length__I()
}
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
  return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
    var r = this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self.apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
    return r
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
  }
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
    var b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder - n) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b)
  };
  return this
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
  return this
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", {
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewIterator;
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.sci_ArraySeq$__f_bitmap$0)) {
    $thiz.sci_ArraySeq$__f_emptyImpl = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.sci_ArraySeq$__f_bitmap$0 = true
  };
  return $thiz.sci_ArraySeq$__f_emptyImpl
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.sci_ArraySeq$__f_bitmap$0) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.sci_ArraySeq$__f_emptyImpl)
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.sci_ArraySeq$__f_emptyImpl = null;
  this.sci_ArraySeq$__f_untagged = null;
  this.sci_ArraySeq$__f_bitmap$0 = false;
  $n_sci_ArraySeq$ = this;
  this.sci_ArraySeq$__f_untagged = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this)
}
$c_sci_ArraySeq$.prototype = new $h_O();
$c_sci_ArraySeq$.prototype.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
  /*<skip>*/
}
$h_sci_ArraySeq$.prototype = $c_sci_ArraySeq$.prototype;
$c_sci_ArraySeq$.prototype.from__sc_IterableOnce__s_reflect_ClassTag__sci_ArraySeq = (function(it, tag) {
  if ((it instanceof $c_sci_ArraySeq)) {
    var x2 = $as_sci_ArraySeq(it);
    return x2
  } else {
    return this.unsafeWrapArray__O__sci_ArraySeq($m_s_Array$().from__sc_IterableOnce__s_reflect_ClassTag__O(it, tag))
  }
});
$c_sci_ArraySeq$.prototype.unsafeWrapArray__O__sci_ArraySeq = (function(x) {
  if ((x === null)) {
    return null
  } else if ((x instanceof $ac_O)) {
    var x3 = $asArrayOf_O(x, 1);
    return new $c_sci_ArraySeq$ofRef(x3)
  } else if ((x instanceof $ac_I)) {
    var x4 = $asArrayOf_I(x, 1);
    return new $c_sci_ArraySeq$ofInt(x4)
  } else if ((x instanceof $ac_D)) {
    var x5 = $asArrayOf_D(x, 1);
    return new $c_sci_ArraySeq$ofDouble(x5)
  } else if ((x instanceof $ac_J)) {
    var x6 = $asArrayOf_J(x, 1);
    return new $c_sci_ArraySeq$ofLong(x6)
  } else if ((x instanceof $ac_F)) {
    var x7 = $asArrayOf_F(x, 1);
    return new $c_sci_ArraySeq$ofFloat(x7)
  } else if ((x instanceof $ac_C)) {
    var x8 = $asArrayOf_C(x, 1);
    return new $c_sci_ArraySeq$ofChar(x8)
  } else if ((x instanceof $ac_B)) {
    var x9 = $asArrayOf_B(x, 1);
    return new $c_sci_ArraySeq$ofByte(x9)
  } else if ((x instanceof $ac_S)) {
    var x10 = $asArrayOf_S(x, 1);
    return new $c_sci_ArraySeq$ofShort(x10)
  } else if ((x instanceof $ac_Z)) {
    var x11 = $asArrayOf_Z(x, 1);
    return new $c_sci_ArraySeq$ofBoolean(x11)
  } else if ($isArrayOf_jl_Void(x, 1)) {
    var x12 = $asArrayOf_jl_Void(x, 1);
    return new $c_sci_ArraySeq$ofUnit(x12)
  } else {
    throw new $c_s_MatchError(x)
  }
});
$c_sci_ArraySeq$.prototype.from__sc_IterableOnce__O__O = (function(it, evidence$5) {
  return this.from__sc_IterableOnce__s_reflect_ClassTag__sci_ArraySeq(it, $as_s_reflect_ClassTag(evidence$5))
});
var $d_sci_ArraySeq$ = new $TypeData().initClass({
  sci_ArraySeq$: 0
}, false, "scala.collection.immutable.ArraySeq$", {
  sci_ArraySeq$: 1,
  O: 1,
  sc_StrictOptimizedClassTagSeqFactory: 1,
  sc_ClassTagSeqFactory: 1,
  sc_ClassTagIterableFactory: 1,
  sc_EvidenceIterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ArraySeq$.prototype.$classData = $d_sci_ArraySeq$;
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$()
  };
  return $n_sci_ArraySeq$
}
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth))
}
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = null;
  this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = runtimeClass
}
$c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$c_s_reflect_ClassTag$GenericClassTag.prototype.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
  /*<skip>*/
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $c_s_reflect_ClassTag$GenericClassTag.prototype;
$c_s_reflect_ClassTag$GenericClassTag.prototype.equals__O__Z = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x)
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.hashCode__I = (function() {
  var x = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
  return $m_sr_Statics$().anyHash__O__I(x)
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.toString__T = (function() {
  return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass)
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.runtimeClass__jl_Class = (function() {
  return this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.newArray__I__O = (function(len) {
  var componentType = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
  return $m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, len)
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().initClass({
  s_reflect_ClassTag$GenericClassTag: 0
}, false, "scala.reflect.ClassTag$GenericClassTag", {
  s_reflect_ClassTag$GenericClassTag: 1,
  O: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.$classData = $d_s_reflect_ClassTag$GenericClassTag;
function $ps_Lscodec_bits_BitVector__go$3__sci_List__sci_Vector__sci_Vector(b, acc) {
  var acc$tailLocal2 = acc;
  var b$tailLocal3 = b;
  while (true) {
    var x10 = b$tailLocal3;
    if ((x10 instanceof $c_sci_$colon$colon)) {
      var x33 = $as_sci_$colon$colon(x10);
      var x34 = $as_Lscodec_bits_BitVector(x33.sci_$colon$colon__f_head);
      var x35 = x33.sci_$colon$colon__f_next;
      if (false) {
        var x$1 = $as_Lscodec_bits_BitVector$Suspend(x34);
        x$1._1__F0();
        var s = $as_Lscodec_bits_BitVector$Suspend(x34);
        var elem$1 = s.underlying__Lscodec_bits_BitVector();
        b$tailLocal3 = new $c_sci_$colon$colon(elem$1, x35);
        continue
      };
      if ((x34 instanceof $c_Lscodec_bits_BitVector$Bytes)) {
        var x$1$1 = $as_Lscodec_bits_BitVector$Bytes(x34);
        var t = x$1$1.Lscodec_bits_BitVector$Bytes__f_size;
        var b$2 = $as_Lscodec_bits_BitVector$Bytes(x34);
        var this$3 = acc$tailLocal2;
        var acc$tailLocal2$tmp1 = $as_sci_Vector(this$3.appended__O__O(b$2));
        b$tailLocal3 = x35;
        acc$tailLocal2 = acc$tailLocal2$tmp1;
        continue
      };
      if ((x34 instanceof $c_Lscodec_bits_BitVector$Append)) {
        var x$1$2 = $as_Lscodec_bits_BitVector$Append(x34);
        var x24 = x$1$2.Lscodec_bits_BitVector$Append__f_left;
        var x25 = x$1$2.Lscodec_bits_BitVector$Append__f_right;
        var this$5 = new $c_sci_$colon$colon(x25, x35);
        b$tailLocal3 = new $c_sci_$colon$colon(x24, this$5);
        continue
      };
      if ((x34 instanceof $c_Lscodec_bits_BitVector$Drop)) {
        var d = $as_Lscodec_bits_BitVector$Drop(x34);
        var this$6 = acc$tailLocal2;
        var elem = d.interpretDrop__Lscodec_bits_BitVector$Bytes();
        var acc$tailLocal2$tmp2 = $as_sci_Vector(this$6.appended__O__O(elem));
        b$tailLocal3 = x35;
        acc$tailLocal2 = acc$tailLocal2$tmp2;
        continue
      };
      if ((x34 instanceof $c_Lscodec_bits_BitVector$Chunks)) {
        var c = $as_Lscodec_bits_BitVector$Chunks(x34);
        var elem$2 = c.Lscodec_bits_BitVector$Chunks__f_chunks.Lscodec_bits_BitVector$Append__f_right;
        var this$7 = new $c_sci_$colon$colon(elem$2, x35);
        var elem$3 = c.Lscodec_bits_BitVector$Chunks__f_chunks.Lscodec_bits_BitVector$Append__f_left;
        b$tailLocal3 = new $c_sci_$colon$colon(elem$3, this$7);
        continue
      }
    };
    return acc$tailLocal2
  }
}
function $ps_Lscodec_bits_BitVector__go$8__J__Lscodec_bits_BitVector__Lscodec_bits_BitVector__Z(chunkSize$1, x, y) {
  var y$tailLocal1 = y;
  var x$tailLocal1 = x;
  while (true) {
    var this$1 = x$tailLocal1;
    if (this$1.sizeLessThan__J__Z(new $c_RTLong(1, 0))) {
      var this$2 = y$tailLocal1;
      return this$2.sizeLessThan__J__Z(new $c_RTLong(1, 0))
    } else {
      var chunkX = x$tailLocal1.take__J__Lscodec_bits_BitVector(chunkSize$1);
      var chunkY = y$tailLocal1.take__J__Lscodec_bits_BitVector(chunkSize$1);
      if (chunkX.toByteVector__Lscodec_bits_ByteVector().$eq$eq$eq__Lscodec_bits_ByteVector__Z(chunkY.toByteVector__Lscodec_bits_ByteVector())) {
        var x$tailLocal1$tmp1 = x$tailLocal1.drop__J__Lscodec_bits_BitVector(chunkSize$1);
        var y$tailLocal1$tmp1 = y$tailLocal1.drop__J__Lscodec_bits_BitVector(chunkSize$1);
        x$tailLocal1 = x$tailLocal1$tmp1;
        y$tailLocal1 = y$tailLocal1$tmp1
      } else {
        return false
      }
    }
  }
}
function $ps_Lscodec_bits_BitVector__go$9__J__Lscodec_bits_BitVector__I__I__I(chunkSize$2, bits, h, iter) {
  var iter$tailLocal1 = iter;
  var h$tailLocal1 = h;
  var bits$tailLocal1 = bits;
  while (true) {
    var this$1 = bits$tailLocal1;
    if (this$1.sizeLessThan__J__Z(new $c_RTLong(1, 0))) {
      return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h$tailLocal1, iter$tailLocal1)
    } else {
      var bits$tailLocal1$tmp1 = bits$tailLocal1.drop__J__Lscodec_bits_BitVector(chunkSize$2);
      var $$x2 = $m_s_util_hashing_MurmurHash3$();
      var $$x1 = h$tailLocal1;
      var this$3 = $m_s_util_hashing_MurmurHash3$();
      var this$2 = bits$tailLocal1.take__J__Lscodec_bits_BitVector(chunkSize$2);
      var data = this$2.toByteVector__Lscodec_bits_ByteVector().toArray__AB();
      var h$tailLocal1$tmp1 = $$x2.mix__I__I__I($$x1, this$3.bytesHash__AB__I__I(data, 1007110753));
      var iter$tailLocal1$tmp1 = ((1 + iter$tailLocal1) | 0);
      bits$tailLocal1 = bits$tailLocal1$tmp1;
      h$tailLocal1 = h$tailLocal1$tmp1;
      iter$tailLocal1 = iter$tailLocal1$tmp1
    }
  }
}
/** @constructor */
function $c_Lscodec_bits_BitVector() {
  this.Lscodec_bits_BitVector__f_hashCode$lzy1 = 0;
  this.Lscodec_bits_BitVector__f_hashCodebitmap$1 = false
}
$c_Lscodec_bits_BitVector.prototype = new $h_O();
$c_Lscodec_bits_BitVector.prototype.constructor = $c_Lscodec_bits_BitVector;
/** @constructor */
function $h_Lscodec_bits_BitVector() {
  /*<skip>*/
}
$h_Lscodec_bits_BitVector.prototype = $c_Lscodec_bits_BitVector.prototype;
$c_Lscodec_bits_BitVector.prototype.sizeGreaterThan__J__Z = (function(n) {
  var ahi = n.RTLong__f_hi;
  if ((ahi < 0)) {
    return true
  } else {
    return (!this.sizeLessThanOrEqual__J__Z(n))
  }
});
$c_Lscodec_bits_BitVector.prototype.sizeLessThanOrEqual__J__Z = (function(n) {
  if (((n.RTLong__f_lo === (-1)) && (n.RTLong__f_hi === 2147483647))) {
    return true
  } else {
    var bhi = n.RTLong__f_hi;
    var lo = ((1 + n.RTLong__f_lo) | 0);
    var hi = ((lo === 0) ? ((1 + bhi) | 0) : bhi);
    return this.sizeLessThan__J__Z(new $c_RTLong(lo, hi))
  }
});
$c_Lscodec_bits_BitVector.prototype.unchunk__Lscodec_bits_BitVector = (function() {
  return this
});
$c_Lscodec_bits_BitVector.prototype.$plus$plus__Lscodec_bits_BitVector__Lscodec_bits_BitVector = (function(b2) {
  if (this.sizeLessThan__J__Z(new $c_RTLong(1, 0))) {
    return b2
  } else {
    var chunks = new $c_Lscodec_bits_BitVector$Append(this, b2);
    return new $c_Lscodec_bits_BitVector$Chunks(chunks)
  }
});
$c_Lscodec_bits_BitVector.prototype.dropRight__J__Lscodec_bits_BitVector = (function(n) {
  var ahi = n.RTLong__f_hi;
  if (((ahi === 0) ? (n.RTLong__f_lo === 0) : (ahi < 0))) {
    return this
  } else {
    var b = this.size__J();
    var ahi$1 = n.RTLong__f_hi;
    var bhi = b.RTLong__f_hi;
    if (((ahi$1 === bhi) ? (((-2147483648) ^ n.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi$1 > bhi))) {
      return $m_Lscodec_bits_BitVector$().Lscodec_bits_BitVector$__f_empty
    } else {
      var this$1 = this.size__J();
      var alo = this$1.RTLong__f_lo;
      var ahi$2 = this$1.RTLong__f_hi;
      var bhi$1 = n.RTLong__f_hi;
      var lo = ((alo - n.RTLong__f_lo) | 0);
      var hi = ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi$2 - bhi$1) | 0)) | 0) : ((ahi$2 - bhi$1) | 0));
      return this.take__J__Lscodec_bits_BitVector(new $c_RTLong(lo, hi))
    }
  }
});
$c_Lscodec_bits_BitVector.prototype.shiftRight__J__Z__Lscodec_bits_BitVector = (function(n, signExtension) {
  if (this.sizeLessThan__J__Z(new $c_RTLong(1, 0))) {
    var $$x1 = true
  } else {
    var ahi = n.RTLong__f_hi;
    var $$x1 = ((ahi === 0) ? (n.RTLong__f_lo === 0) : (ahi < 0))
  };
  if ($$x1) {
    return this
  } else {
    var extensionHigh = (signExtension && this.get__J__Z($L0));
    var b = this.size__J();
    var ahi$1 = n.RTLong__f_hi;
    var bhi = b.RTLong__f_hi;
    if (((ahi$1 === bhi) ? (((-2147483648) ^ n.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi$1 > bhi))) {
      if (extensionHigh) {
        var this$1 = $m_Lscodec_bits_BitVector$();
        var t = this.size__J();
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        return this$1.fill__J__Z__Lscodec_bits_BitVector(new $c_RTLong(lo, hi), true)
      } else {
        var this$2 = $m_Lscodec_bits_BitVector$();
        var t$1 = this.size__J();
        var lo$1 = t$1.RTLong__f_lo;
        var hi$1 = t$1.RTLong__f_hi;
        return this$2.fill__J__Z__Lscodec_bits_BitVector(new $c_RTLong(lo$1, hi$1), false)
      }
    } else {
      if (extensionHigh) {
        var this$3 = $m_Lscodec_bits_BitVector$();
        var $$x2 = this$3.fill__J__Z__Lscodec_bits_BitVector(n, true)
      } else {
        var this$4 = $m_Lscodec_bits_BitVector$();
        var $$x2 = this$4.fill__J__Z__Lscodec_bits_BitVector(n, false)
      };
      return $$x2.$plus$plus__Lscodec_bits_BitVector__Lscodec_bits_BitVector(this.dropRight__J__Lscodec_bits_BitVector(n))
    }
  }
});
$c_Lscodec_bits_BitVector.prototype.compact__Lscodec_bits_BitVector$Bytes = (function() {
  var this$1 = $m_Lscodec_bits_BitVector$().scodec$bits$BitVector$$$bytesNeededForBits__J__J(this.size__J());
  var ahi = this$1.RTLong__f_hi;
  if (((ahi === 0) ? (((-2147483648) ^ this$1.RTLong__f_lo) > (-1)) : (ahi > 0))) {
    var this$2 = this.size__J();
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("cannot compact bit vector of size " + (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this$2.RTLong__f_lo, this$2.RTLong__f_hi) / 8.0) / 1.0E9)) + " GB"))
  };
  if ((this instanceof $c_Lscodec_bits_BitVector$Bytes)) {
    var x45 = $as_Lscodec_bits_BitVector$Bytes(this);
    var x47 = x45.Lscodec_bits_BitVector$Bytes__f_underlying;
    var t = x45.Lscodec_bits_BitVector$Bytes__f_size;
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var b2 = x47.compact__Lscodec_bits_ByteVector();
    return ((b2 === x47) ? x45 : new $c_Lscodec_bits_BitVector$Bytes(b2, new $c_RTLong(lo, hi)))
  } else if ((this instanceof $c_Lscodec_bits_BitVector$Drop)) {
    var d = $as_Lscodec_bits_BitVector$Drop(this);
    var bs$2 = d.interpretDrop__Lscodec_bits_BitVector$Bytes();
    var b2$2 = bs$2.Lscodec_bits_BitVector$Bytes__f_underlying.compact__Lscodec_bits_ByteVector();
    if ((b2$2 === bs$2.Lscodec_bits_BitVector$Bytes__f_underlying)) {
      return bs$2
    } else {
      var t$1 = bs$2.Lscodec_bits_BitVector$Bytes__f_size;
      var lo$1 = t$1.RTLong__f_lo;
      var hi$1 = t$1.RTLong__f_hi;
      return new $c_Lscodec_bits_BitVector$Bytes(b2$2, new $c_RTLong(lo$1, hi$1))
    }
  } else {
    $m_Lscodec_bits_BitVector$();
    $m_s_package$();
    var elems = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscodec_bits_BitVector.getArrayOf().constr)([this]));
    var $$x1 = $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
    var this$7 = $m_s_package$().s_package$__f_Vector;
    var elems$1 = $m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($d_sr_Nothing$.getArrayOf().constr)([]));
    var v = $ps_Lscodec_bits_BitVector__go$3__sci_List__sci_Vector__sci_Vector($$x1, this$7.from__sc_IterableOnce__sci_Vector(elems$1));
    var f = ((_$9, _$10) => {
      var _$9$1 = $as_Lscodec_bits_BitVector$Bytes(_$9);
      var _$10$1 = $as_Lscodec_bits_BitVector$Bytes(_$10);
      return _$9$1.combine__Lscodec_bits_BitVector$Bytes__Lscodec_bits_BitVector$Bytes(_$10$1)
    });
    $m_s_package$();
    var elems$2 = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([]));
    var z = $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
    var at = 0;
    var end = v.length__I();
    var acc = z;
    var $$x2;
    while (true) {
      if ((at !== end)) {
        var temp$at = ((1 + at) | 0);
        var arg1 = acc;
        var arg2 = v.apply__I__O(at);
        var stack = $as_sci_List(arg1);
        var _$8 = $as_Lscodec_bits_BitVector$Bytes(arg2);
        var t$2 = _$8.Lscodec_bits_BitVector$Bytes__f_size;
        var lo$2 = t$2.RTLong__f_lo;
        var hi$2 = t$2.RTLong__f_hi;
        var elem$5 = new $c_T2(arg2, new $c_RTLong(lo$2, hi$2));
        var stack$1 = new $c_sci_$colon$colon(elem$5, stack);
        var temp$acc;
        var stack$tailLocal1 = stack$1;
        while (true) {
          var x189 = stack$tailLocal1;
          if ((x189 instanceof $c_sci_$colon$colon)) {
            var x190 = $as_sci_$colon$colon(x189);
            var x191 = $as_T2(x190.sci_$colon$colon__f_head);
            var x192 = x190.sci_$colon$colon__f_next;
            if ((x191 !== null)) {
              var h2 = x191.T2__f__1;
              var t$3 = $uJ(x191.T2__f__2);
              var lo$3 = t$3.RTLong__f_lo;
              var hi$3 = t$3.RTLong__f_hi;
              if ((x192 instanceof $c_sci_$colon$colon)) {
                var x193 = $as_sci_$colon$colon(x192);
                var x194 = $as_T2(x193.sci_$colon$colon__f_head);
                var x195 = x193.sci_$colon$colon__f_next;
                if ((x194 !== null)) {
                  var h = x194.T2__f__1;
                  var t$4 = $uJ(x194.T2__f__2);
                  var lo$4 = t$4.RTLong__f_lo;
                  var hi$4 = t$4.RTLong__f_hi;
                  var this$12 = $m_RTLong$();
                  var lo$5 = this$12.divideImpl__I__I__I__I__I(lo$4, hi$4, 2, 0);
                  var hi$5 = this$12.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
                  if (((hi$3 === hi$5) ? (((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$5)) : (hi$3 > hi$5))) {
                    var _1 = f(h, h2);
                    var lo$6 = ((lo$4 + lo$3) | 0);
                    var hi$6 = ((((-2147483648) ^ lo$6) < ((-2147483648) ^ lo$4)) ? ((1 + ((hi$4 + hi$3) | 0)) | 0) : ((hi$4 + hi$3) | 0));
                    var elem$4 = new $c_T2(_1, new $c_RTLong(lo$6, hi$6));
                    stack$tailLocal1 = new $c_sci_$colon$colon(elem$4, x195);
                    continue
                  }
                }
              }
            }
          };
          var temp$acc = stack$tailLocal1;
          break
        };
        at = temp$at;
        acc = temp$acc;
        continue
      };
      var $$x2 = acc;
      break
    };
    var this$15 = $as_sci_List($$x2).reverse__sci_List();
    var f$1 = ((_$28) => {
      var _$28$1 = $as_T2(_$28);
      return _$28$1.T2__f__1
    });
    if ((this$15 === $m_sci_Nil$())) {
      var this$16 = $m_sci_Nil$()
    } else {
      var arg1$1 = this$15.head__O();
      var h$1 = new $c_sci_$colon$colon(f$1(arg1$1), $m_sci_Nil$());
      var t$5 = h$1;
      var rest = $as_sci_List(this$15.tail__O());
      while ((rest !== $m_sci_Nil$())) {
        var arg1$2 = rest.head__O();
        var nx = new $c_sci_$colon$colon(f$1(arg1$2), $m_sci_Nil$());
        t$5.sci_$colon$colon__f_next = nx;
        t$5 = nx;
        rest = $as_sci_List(rest.tail__O())
      };
      var this$16 = h$1
    };
    matchEnd4: {
      var $$x3;
      if ($is_sc_IndexedSeq(this$16)) {
        var x2 = $as_sc_IndexedSeq(this$16);
        if ((x2.length__I() > 0)) {
          var z$1 = x2.apply__I__O(0);
          var at$1 = 1;
          var end$1 = x2.length__I();
          var acc$1 = z$1;
          while (true) {
            if ((at$1 !== end$1)) {
              var temp$at$1 = ((1 + at$1) | 0);
              var arg1$3 = acc$1;
              var arg2$1 = x2.apply__I__O(at$1);
              var temp$acc$1 = f(arg1$3, arg2$1);
              at$1 = temp$at$1;
              acc$1 = temp$acc$1;
              continue
            };
            var $$x3 = acc$1;
            break matchEnd4
          }
        }
      };
      var it = this$16.iterator__sc_Iterator();
      if ((!it.hasNext__Z())) {
        throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "empty.reduceLeft")
      };
      var first = true;
      var acc$2 = null;
      while (it.hasNext__Z()) {
        var x = it.next__O();
        if (first) {
          acc$2 = x;
          first = false
        } else {
          var arg1$4 = acc$2;
          acc$2 = f(arg1$4, x)
        }
      };
      var $$x3 = acc$2
    };
    var x39 = $as_Lscodec_bits_BitVector$Bytes($$x3);
    if ((x39 !== null)) {
      var x41 = x39.Lscodec_bits_BitVector$Bytes__f_underlying;
      var t$6 = x39.Lscodec_bits_BitVector$Bytes__f_size;
      var lo$7 = t$6.RTLong__f_lo;
      var hi$7 = t$6.RTLong__f_hi;
      var underlying = x41.compact__Lscodec_bits_ByteVector();
      return new $c_Lscodec_bits_BitVector$Bytes(underlying, new $c_RTLong(lo$7, hi$7))
    };
    throw new $c_s_MatchError(x39)
  }
});
$c_Lscodec_bits_BitVector.prototype.toByteVector__Lscodec_bits_ByteVector = (function() {
  return $m_Lscodec_bits_BitVector$().scodec$bits$BitVector$$$clearUnneededBits__J__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector(this.size__J(), this.compact__Lscodec_bits_BitVector$Bytes().Lscodec_bits_BitVector$Bytes__f_underlying)
});
$c_Lscodec_bits_BitVector.prototype.toHex__Lscodec_bits_Bases$HexAlphabet__T = (function(alphabet) {
  var full = this.toByteVector__Lscodec_bits_ByteVector().toHex__Lscodec_bits_Bases$HexAlphabet__T(alphabet);
  var this$1 = this.size__J();
  var this$2 = $m_RTLong$();
  var lo = this$2.remainderImpl__I__I__I__I__I(this$1.RTLong__f_lo, this$1.RTLong__f_hi, 8, 0);
  var hi = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  if (((lo === 0) && (hi === 0))) {
    return full
  };
  if (((hi === 0) ? (((-2147483648) ^ lo) <= (-2147483644)) : (hi < 0))) {
    return $m_sc_StringOps$().init$extension__T__T(full)
  };
  return full
});
$c_Lscodec_bits_BitVector.prototype.$eq$eq$eq__Lscodec_bits_BitVector__Z = (function(other) {
  if ((this === other)) {
    return true
  } else {
    var this$1 = this.size__J();
    var b = other.size__J();
    if ((!(!((this$1.RTLong__f_lo === b.RTLong__f_lo) && (this$1.RTLong__f_hi === b.RTLong__f_hi))))) {
      return $ps_Lscodec_bits_BitVector__go$8__J__Lscodec_bits_BitVector__Lscodec_bits_BitVector__Z(new $c_RTLong(524288, 0), this, other)
    } else {
      return false
    }
  }
});
$c_Lscodec_bits_BitVector.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_Lscodec_bits_BitVector)) {
    var o = $as_Lscodec_bits_BitVector(other);
    return this.$eq$eq$eq__Lscodec_bits_BitVector__Z(o)
  } else {
    return false
  }
});
$c_Lscodec_bits_BitVector.prototype.hashCode__I = (function() {
  if ((!this.Lscodec_bits_BitVector__f_hashCodebitmap$1)) {
    var this$1 = $m_s_util_hashing_MurmurHash3$();
    this.Lscodec_bits_BitVector__f_hashCode$lzy1 = $ps_Lscodec_bits_BitVector__go$9__J__Lscodec_bits_BitVector__I__I__I(new $c_RTLong(524288, 0), this, this$1.stringHash__T__I__I("BitVector", (-137723950)), 1);
    this.Lscodec_bits_BitVector__f_hashCodebitmap$1 = true
  };
  return this.Lscodec_bits_BitVector__f_hashCode$lzy1
});
$c_Lscodec_bits_BitVector.prototype.toString__T = (function() {
  return (this.sizeLessThan__J__Z(new $c_RTLong(1, 0)) ? "BitVector(empty)" : (this.sizeLessThan__J__Z(new $c_RTLong(513, 0)) ? (((("BitVector(" + this.size__J()) + " bits, 0x") + this.toHex__Lscodec_bits_Bases$HexAlphabet__T($m_Lscodec_bits_Bases$Alphabets$HexLowercase$())) + ")") : (((("BitVector(" + this.size__J()) + " bits, #") + this.hashCode__I()) + ")")))
});
$c_Lscodec_bits_BitVector.prototype.checkBounds__J__V = (function(n) {
  if ((!this.sizeGreaterThan__J__Z(n))) {
    this.outOfBounds__J__E(n)
  }
});
$c_Lscodec_bits_BitVector.prototype.outOfBounds__J__E = (function(n) {
  throw new $c_ju_NoSuchElementException(((("invalid index: " + n) + " of ") + this.size__J()))
});
function $as_Lscodec_bits_BitVector(obj) {
  return (((obj instanceof $c_Lscodec_bits_BitVector) || (obj === null)) ? obj : $throwClassCastException(obj, "scodec.bits.BitVector"))
}
function $isArrayOf_Lscodec_bits_BitVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscodec_bits_BitVector)))
}
function $asArrayOf_Lscodec_bits_BitVector(obj, depth) {
  return (($isArrayOf_Lscodec_bits_BitVector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscodec.bits.BitVector;", depth))
}
var $d_Lscodec_bits_BitVector = new $TypeData().initClass({
  Lscodec_bits_BitVector: 0
}, false, "scodec.bits.BitVector", {
  Lscodec_bits_BitVector: 1,
  O: 1,
  Lscodec_bits_BitwiseOperations: 1,
  Lscodec_bits_BitVectorCrossPlatform: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_io_Serializable: 1
});
$c_Lscodec_bits_BitVector.prototype.$classData = $d_Lscodec_bits_BitVector;
function $p_Lscodec_bits_ByteVector__checkIndex__J__V($thiz, n) {
  var ahi = n.RTLong__f_hi;
  if ((ahi < 0)) {
    var $$x1 = true
  } else {
    var b = $thiz.size__J();
    var ahi$1 = n.RTLong__f_hi;
    var bhi = b.RTLong__f_hi;
    var $$x1 = ((ahi$1 === bhi) ? (((-2147483648) ^ n.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi$1 > bhi))
  };
  if ($$x1) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ((("invalid index: " + n) + " for size ") + $thiz.size__J()))
  }
}
function $ps_Lscodec_bits_ByteVector__go$1__Lscodec_bits_ByteVector__J__sci_List__Lscodec_bits_ByteVector(cur, n1, accR) {
  var accR$tailLocal1 = accR;
  var lo = n1.RTLong__f_lo;
  var hi = n1.RTLong__f_hi;
  var n1$tailLocal1__lo = lo;
  var n1$tailLocal1__hi = hi;
  var cur$tailLocal1 = cur;
  while (true) {
    var x1 = cur$tailLocal1;
    if ((x1 instanceof $c_Lscodec_bits_ByteVector$Chunk)) {
      var x$1 = $as_Lscodec_bits_ByteVector$Chunk(x1);
      var x10 = x$1.Lscodec_bits_ByteVector$Chunk__f_bytes;
      var this$3 = accR$tailLocal1;
      var bytes = x10.drop__J__Lscodec_bits_ByteVector$View(new $c_RTLong(n1$tailLocal1__lo, n1$tailLocal1__hi));
      var z = new $c_Lscodec_bits_ByteVector$Chunk(bytes);
      var acc = z;
      var these = this$3;
      while ((!these.isEmpty__Z())) {
        var arg1 = acc;
        var arg2 = these.head__O();
        var _$1 = $as_Lscodec_bits_ByteVector(arg1);
        var _$2 = $as_Lscodec_bits_ByteVector(arg2);
        acc = _$1.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector(_$2);
        these = $as_sc_LinearSeq(these.tail__O())
      };
      return $as_Lscodec_bits_ByteVector(acc).unbuffer__Lscodec_bits_ByteVector()
    };
    if ((x1 instanceof $c_Lscodec_bits_ByteVector$Append)) {
      var x$1$1 = $as_Lscodec_bits_ByteVector$Append(x1);
      var x6 = x$1$1.Lscodec_bits_ByteVector$Append__f_left;
      var x7 = x$1$1.Lscodec_bits_ByteVector$Append__f_right;
      var this$5__lo = n1$tailLocal1__lo;
      var this$5__hi = n1$tailLocal1__hi;
      var b = x6.size__J();
      var ahi = this$5__hi;
      var bhi = b.RTLong__f_hi;
      if (((ahi === bhi) ? (((-2147483648) ^ this$5__lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))) {
        var this$6__lo = n1$tailLocal1__lo;
        var this$6__hi = n1$tailLocal1__hi;
        var b$1 = x6.size__J();
        var alo = this$6__lo;
        var ahi$1 = this$6__hi;
        var bhi$1 = b$1.RTLong__f_hi;
        var lo$1 = ((alo - b$1.RTLong__f_lo) | 0);
        var hi$1 = ((((-2147483648) ^ lo$1) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi$1 - bhi$1) | 0)) | 0) : ((ahi$1 - bhi$1) | 0));
        cur$tailLocal1 = x7;
        var $$x1__lo = lo$1;
        var $$x1__hi = hi$1;
        n1$tailLocal1__lo = $$x1__lo;
        n1$tailLocal1__hi = $$x1__hi;
        continue
      } else {
        var this$8 = accR$tailLocal1;
        var accR$tailLocal1$tmp1 = new $c_sci_$colon$colon(x7, this$8);
        cur$tailLocal1 = x6;
        accR$tailLocal1 = accR$tailLocal1$tmp1;
        continue
      }
    };
    if ((x1 instanceof $c_Lscodec_bits_ByteVector$Buffer)) {
      var b$2 = $as_Lscodec_bits_ByteVector$Buffer(x1);
      var this$9__lo = n1$tailLocal1__lo;
      var this$9__hi = n1$tailLocal1__hi;
      var b$3 = b$2.Lscodec_bits_ByteVector$Buffer__f_hd.size__J();
      var ahi$2 = this$9__hi;
      var bhi$2 = b$3.RTLong__f_hi;
      if (((ahi$2 === bhi$2) ? (((-2147483648) ^ this$9__lo) > ((-2147483648) ^ b$3.RTLong__f_lo)) : (ahi$2 > bhi$2))) {
        var cur$tailLocal1$tmp3 = b$2.lastBytes__Lscodec_bits_ByteVector();
        var this$10__lo = n1$tailLocal1__lo;
        var this$10__hi = n1$tailLocal1__hi;
        var b$4 = b$2.Lscodec_bits_ByteVector$Buffer__f_hd.size__J();
        var alo$1 = this$10__lo;
        var ahi$3 = this$10__hi;
        var bhi$3 = b$4.RTLong__f_hi;
        var lo$2 = ((alo$1 - b$4.RTLong__f_lo) | 0);
        var hi$2 = ((((-2147483648) ^ lo$2) > ((-2147483648) ^ alo$1)) ? (((-1) + ((ahi$3 - bhi$3) | 0)) | 0) : ((ahi$3 - bhi$3) | 0));
        cur$tailLocal1 = cur$tailLocal1$tmp3;
        var $$x2__lo = lo$2;
        var $$x2__hi = hi$2;
        n1$tailLocal1__lo = $$x2__lo;
        n1$tailLocal1__hi = $$x2__hi;
        continue
      } else {
        var cur$tailLocal1$tmp4 = b$2.Lscodec_bits_ByteVector$Buffer__f_hd;
        var elem$1 = b$2.lastBytes__Lscodec_bits_ByteVector();
        var this$12 = accR$tailLocal1;
        var accR$tailLocal1$tmp2 = new $c_sci_$colon$colon(elem$1, this$12);
        cur$tailLocal1 = cur$tailLocal1$tmp4;
        accR$tailLocal1 = accR$tailLocal1$tmp2;
        continue
      }
    };
    if ((x1 instanceof $c_Lscodec_bits_ByteVector$Chunks)) {
      var c = $as_Lscodec_bits_ByteVector$Chunks(x1);
      cur$tailLocal1 = c.Lscodec_bits_ByteVector$Chunks__f_chunks;
      continue
    };
    throw new $c_s_MatchError(x1)
  }
}
function $ps_Lscodec_bits_ByteVector__go$2__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector__J__Lscodec_bits_ByteVector(accL, cur, n1) {
  var lo = n1.RTLong__f_lo;
  var hi = n1.RTLong__f_hi;
  var n1$tailLocal2__lo = lo;
  var n1$tailLocal2__hi = hi;
  var cur$tailLocal2 = cur;
  var accL$tailLocal1 = accL;
  while (true) {
    var x11 = cur$tailLocal2;
    if ((x11 instanceof $c_Lscodec_bits_ByteVector$Chunk)) {
      var x$1 = $as_Lscodec_bits_ByteVector$Chunk(x11);
      var x20 = x$1.Lscodec_bits_ByteVector$Chunk__f_bytes;
      var $$x1 = accL$tailLocal1;
      var bytes = x20.take__J__Lscodec_bits_ByteVector$View(new $c_RTLong(n1$tailLocal2__lo, n1$tailLocal2__hi));
      return $$x1.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector(new $c_Lscodec_bits_ByteVector$Chunk(bytes))
    };
    if ((x11 instanceof $c_Lscodec_bits_ByteVector$Append)) {
      var x$1$1 = $as_Lscodec_bits_ByteVector$Append(x11);
      var x16 = x$1$1.Lscodec_bits_ByteVector$Append__f_left;
      var x17 = x$1$1.Lscodec_bits_ByteVector$Append__f_right;
      var this$4__lo = n1$tailLocal2__lo;
      var this$4__hi = n1$tailLocal2__hi;
      var b = x16.size__J();
      var ahi = this$4__hi;
      var bhi = b.RTLong__f_hi;
      if (((ahi === bhi) ? (((-2147483648) ^ this$4__lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))) {
        var accL$tailLocal1$tmp1 = accL$tailLocal1.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector(x16);
        var this$5__lo = n1$tailLocal2__lo;
        var this$5__hi = n1$tailLocal2__hi;
        var b$1 = x16.size__J();
        var alo = this$5__lo;
        var ahi$1 = this$5__hi;
        var bhi$1 = b$1.RTLong__f_hi;
        var lo$1 = ((alo - b$1.RTLong__f_lo) | 0);
        var hi$1 = ((((-2147483648) ^ lo$1) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi$1 - bhi$1) | 0)) | 0) : ((ahi$1 - bhi$1) | 0));
        accL$tailLocal1 = accL$tailLocal1$tmp1;
        cur$tailLocal2 = x17;
        var $$x2__lo = lo$1;
        var $$x2__hi = hi$1;
        n1$tailLocal2__lo = $$x2__lo;
        n1$tailLocal2__hi = $$x2__hi;
        continue
      } else {
        cur$tailLocal2 = x16;
        continue
      }
    };
    if ((x11 instanceof $c_Lscodec_bits_ByteVector$Chunks)) {
      var c = $as_Lscodec_bits_ByteVector$Chunks(x11);
      cur$tailLocal2 = c.Lscodec_bits_ByteVector$Chunks__f_chunks;
      continue
    };
    if ((x11 instanceof $c_Lscodec_bits_ByteVector$Buffer)) {
      var b$2 = $as_Lscodec_bits_ByteVector$Buffer(x11);
      cur$tailLocal2 = b$2.unbuffer__Lscodec_bits_ByteVector();
      continue
    };
    throw new $c_s_MatchError(x11)
  }
}
function $ps_Lscodec_bits_ByteVector__go$8__J__Lscodec_bits_ByteVector__I__I__I(chunkSize$2, bytes, h, iter) {
  var iter$tailLocal1 = iter;
  var h$tailLocal1 = h;
  var bytes$tailLocal1 = bytes;
  while (true) {
    if (bytes$tailLocal1.isEmpty__Z()) {
      return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h$tailLocal1, iter$tailLocal1)
    } else {
      var bytes$tailLocal1$tmp1 = bytes$tailLocal1.drop__J__Lscodec_bits_ByteVector(chunkSize$2);
      var $$x2 = $m_s_util_hashing_MurmurHash3$();
      var $$x1 = h$tailLocal1;
      var this$1 = $m_s_util_hashing_MurmurHash3$();
      var data = bytes$tailLocal1.take__J__Lscodec_bits_ByteVector(chunkSize$2).toArray__AB();
      var h$tailLocal1$tmp1 = $$x2.mix__I__I__I($$x1, this$1.bytesHash__AB__I__I(data, 1007110753));
      var iter$tailLocal1$tmp1 = ((1 + iter$tailLocal1) | 0);
      bytes$tailLocal1 = bytes$tailLocal1$tmp1;
      h$tailLocal1 = h$tailLocal1$tmp1;
      iter$tailLocal1 = iter$tailLocal1$tmp1
    }
  }
}
function $p_Lscodec_bits_ByteVector__go$9__Lscodec_bits_ByteVector__J__J__Z($thiz, other$4, s$2, i) {
  var lo = i.RTLong__f_lo;
  var hi = i.RTLong__f_hi;
  var i$tailLocal1__lo = lo;
  var i$tailLocal1__hi = hi;
  while (true) {
    var this$1__lo = i$tailLocal1__lo;
    var this$1__hi = i$tailLocal1__hi;
    var ahi = this$1__hi;
    var bhi = s$2.RTLong__f_hi;
    if ((!((ahi === bhi) ? (((-2147483648) ^ this$1__lo) < ((-2147483648) ^ s$2.RTLong__f_lo)) : (ahi < bhi)))) {
      return true
    } else {
      var index__lo = i$tailLocal1__lo;
      var index__hi = i$tailLocal1__hi;
      var $$x1 = $thiz.get__J__B(new $c_RTLong(index__lo, index__hi));
      var index$1__lo = i$tailLocal1__lo;
      var index$1__hi = i$tailLocal1__hi;
      if (($$x1 === other$4.get__J__B(new $c_RTLong(index$1__lo, index$1__hi)))) {
        var b__lo = i$tailLocal1__lo;
        var b__hi = i$tailLocal1__hi;
        var bhi$1 = b__hi;
        var lo$1 = ((1 + b__lo) | 0);
        var hi$1 = ((lo$1 === 0) ? ((1 + bhi$1) | 0) : bhi$1);
        var $$x2__lo = lo$1;
        var $$x2__hi = hi$1;
        i$tailLocal1__lo = $$x2__lo;
        i$tailLocal1__hi = $$x2__hi
      } else {
        return false
      }
    }
  }
}
/** @constructor */
function $c_Lscodec_bits_ByteVector() {
  this.Lscodec_bits_ByteVector__f_hashCode$lzy1 = 0;
  this.Lscodec_bits_ByteVector__f_hashCodebitmap$1 = false
}
$c_Lscodec_bits_ByteVector.prototype = new $h_O();
$c_Lscodec_bits_ByteVector.prototype.constructor = $c_Lscodec_bits_ByteVector;
/** @constructor */
function $h_Lscodec_bits_ByteVector() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector.prototype = $c_Lscodec_bits_ByteVector.prototype;
$c_Lscodec_bits_ByteVector.prototype.isEmpty__Z = (function() {
  var this$1 = this.size__J();
  return ((this$1.RTLong__f_lo === 0) && (this$1.RTLong__f_hi === 0))
});
$c_Lscodec_bits_ByteVector.prototype.get__J__B = (function(index) {
  $p_Lscodec_bits_ByteVector__checkIndex__J__V(this, index);
  return this.getImpl__J__B(index)
});
$c_Lscodec_bits_ByteVector.prototype.update__J__B__Lscodec_bits_ByteVector = (function(idx, b) {
  $p_Lscodec_bits_ByteVector__checkIndex__J__V(this, idx);
  var $$x1 = this.take__J__Lscodec_bits_ByteVector(idx).$colon$plus__B__Lscodec_bits_ByteVector(b);
  var bhi = idx.RTLong__f_hi;
  var lo = ((1 + idx.RTLong__f_lo) | 0);
  var hi = ((lo === 0) ? ((1 + bhi) | 0) : bhi);
  return $$x1.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector(this.drop__J__Lscodec_bits_ByteVector(new $c_RTLong(lo, hi)))
});
$c_Lscodec_bits_ByteVector.prototype.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector = (function(other) {
  if (this.isEmpty__Z()) {
    return other
  } else {
    var chunks = new $c_Lscodec_bits_ByteVector$Append(this, other);
    return new $c_Lscodec_bits_ByteVector$Chunks(chunks).bufferBy__I__Lscodec_bits_ByteVector(64)
  }
});
$c_Lscodec_bits_ByteVector.prototype.$colon$plus__B__Lscodec_bits_ByteVector = (function(byte) {
  return this.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector($m_Lscodec_bits_ByteVector$().apply__sci_Seq__s_math_Integral__Lscodec_bits_ByteVector($m_sr_ScalaRunTime$().wrapByteArray__AB__sci_ArraySeq(new $ac_B(new Int8Array([byte]))), $m_s_math_Numeric$ByteIsIntegral$()))
});
$c_Lscodec_bits_ByteVector.prototype.drop__J__Lscodec_bits_ByteVector = (function(n) {
  var t = this.size__J();
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var ahi = n.RTLong__f_hi;
  if (((ahi === hi) ? (((-2147483648) ^ n.RTLong__f_lo) < ((-2147483648) ^ lo)) : (ahi < hi))) {
    var t$1 = n
  } else {
    var t$1 = new $c_RTLong(lo, hi)
  };
  var lo$1 = t$1.RTLong__f_lo;
  var hi$1 = t$1.RTLong__f_hi;
  var t$2 = (((hi$1 === 0) ? (lo$1 !== 0) : (hi$1 > 0)) ? new $c_RTLong(lo$1, hi$1) : $L0);
  var lo$2 = t$2.RTLong__f_lo;
  var hi$2 = t$2.RTLong__f_hi;
  var b = this.size__J();
  if (((lo$2 === b.RTLong__f_lo) && (hi$2 === b.RTLong__f_hi))) {
    return $m_Lscodec_bits_ByteVector$().Lscodec_bits_ByteVector$__f_empty
  } else {
    return (((lo$2 === 0) && (hi$2 === 0)) ? this : $ps_Lscodec_bits_ByteVector__go$1__Lscodec_bits_ByteVector__J__sci_List__Lscodec_bits_ByteVector(this, new $c_RTLong(lo$2, hi$2), $m_s_package$().s_package$__f_Nil))
  }
});
$c_Lscodec_bits_ByteVector.prototype.dropRight__J__Lscodec_bits_ByteVector = (function(n) {
  var this$5 = this.size__J();
  var ahi = n.RTLong__f_hi;
  if (((ahi === 0) ? (n.RTLong__f_lo !== 0) : (ahi > 0))) {
    var b = n
  } else {
    var b = $L0
  };
  var alo = this$5.RTLong__f_lo;
  var ahi$1 = this$5.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo - b.RTLong__f_lo) | 0);
  var hi = ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi$1 - bhi) | 0)) | 0) : ((ahi$1 - bhi) | 0));
  return this.take__J__Lscodec_bits_ByteVector(new $c_RTLong(lo, hi))
});
$c_Lscodec_bits_ByteVector.prototype.take__J__Lscodec_bits_ByteVector = (function(n) {
  var t = this.size__J();
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var ahi = n.RTLong__f_hi;
  if (((ahi === hi) ? (((-2147483648) ^ n.RTLong__f_lo) < ((-2147483648) ^ lo)) : (ahi < hi))) {
    var t$1 = n
  } else {
    var t$1 = new $c_RTLong(lo, hi)
  };
  var lo$1 = t$1.RTLong__f_lo;
  var hi$1 = t$1.RTLong__f_hi;
  var t$2 = (((hi$1 === 0) ? (lo$1 !== 0) : (hi$1 > 0)) ? new $c_RTLong(lo$1, hi$1) : $L0);
  var lo$2 = t$2.RTLong__f_lo;
  var hi$2 = t$2.RTLong__f_hi;
  var b = this.size__J();
  if (((lo$2 === b.RTLong__f_lo) && (hi$2 === b.RTLong__f_hi))) {
    return this
  } else {
    return (((lo$2 === 0) && (hi$2 === 0)) ? $m_Lscodec_bits_ByteVector$().Lscodec_bits_ByteVector$__f_empty : $ps_Lscodec_bits_ByteVector__go$2__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector__J__Lscodec_bits_ByteVector($m_Lscodec_bits_ByteVector$().Lscodec_bits_ByteVector$__f_empty, this, new $c_RTLong(lo$2, hi$2)))
  }
});
$c_Lscodec_bits_ByteVector.prototype.slice__J__J__Lscodec_bits_ByteVector = (function(from, until) {
  var $$x1 = this.drop__J__Lscodec_bits_ByteVector(from);
  var ahi = from.RTLong__f_hi;
  if (((ahi === 0) ? (from.RTLong__f_lo !== 0) : (ahi > 0))) {
    var b = from
  } else {
    var b = $L0
  };
  var alo = until.RTLong__f_lo;
  var ahi$1 = until.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo - b.RTLong__f_lo) | 0);
  var hi = ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi$1 - bhi) | 0)) | 0) : ((ahi$1 - bhi) | 0));
  return $$x1.take__J__Lscodec_bits_ByteVector(new $c_RTLong(lo, hi))
});
$c_Lscodec_bits_ByteVector.prototype.foreachS__Lscodec_bits_ByteVector$F1BU__V = (function(f) {
  var this$1 = $m_s_package$().s_package$__f_Nil;
  var rem = new $c_sci_$colon$colon(this, this$1);
  var rem$tailLocal2 = rem;
  while (true) {
    matchResult4: {
      var x48 = rem$tailLocal2;
      if ((x48 instanceof $c_sci_$colon$colon)) {
        var x69 = $as_sci_$colon$colon(x48);
        var x70 = $as_Lscodec_bits_ByteVector(x69.sci_$colon$colon__f_head);
        var x71 = x69.sci_$colon$colon__f_next;
        if ((x70 instanceof $c_Lscodec_bits_ByteVector$Chunk)) {
          var x$1 = $as_Lscodec_bits_ByteVector$Chunk(x70);
          var x74 = x$1.Lscodec_bits_ByteVector$Chunk__f_bytes;
          x74.foreach__Lscodec_bits_ByteVector$F1BU__V(f);
          rem$tailLocal2 = x71;
          continue
        };
        if ((x70 instanceof $c_Lscodec_bits_ByteVector$Append)) {
          var x$1$1 = $as_Lscodec_bits_ByteVector$Append(x70);
          var x67 = x$1$1.Lscodec_bits_ByteVector$Append__f_left;
          var x68 = x$1$1.Lscodec_bits_ByteVector$Append__f_right;
          var this$4 = new $c_sci_$colon$colon(x68, x71);
          rem$tailLocal2 = new $c_sci_$colon$colon(x67, this$4);
          continue
        };
        if ((x70 instanceof $c_Lscodec_bits_ByteVector$Chunks)) {
          var x$1$2 = $as_Lscodec_bits_ByteVector$Chunks(x70);
          var x58 = x$1$2.Lscodec_bits_ByteVector$Chunks__f_chunks;
          if ((x58 !== null)) {
            var x60 = x58.Lscodec_bits_ByteVector$Append__f_left;
            var x61 = x58.Lscodec_bits_ByteVector$Append__f_right;
            var this$7 = new $c_sci_$colon$colon(x61, x71);
            rem$tailLocal2 = new $c_sci_$colon$colon(x60, this$7);
            continue
          }
        };
        if ((x70 instanceof $c_Lscodec_bits_ByteVector$Buffer)) {
          var b = $as_Lscodec_bits_ByteVector$Buffer(x70);
          var elem$3 = b.unbuffer__Lscodec_bits_ByteVector();
          rem$tailLocal2 = new $c_sci_$colon$colon(elem$3, x71);
          continue
        }
      };
      var x = $m_s_package$().s_package$__f_Nil;
      if (((x === null) ? (x48 === null) : x.equals__O__Z(x48))) {
        break matchResult4
      };
      throw new $c_s_MatchError(x48)
    };
    break
  }
});
$c_Lscodec_bits_ByteVector.prototype.shiftRight__J__Z__Lscodec_bits_ByteVector = (function(n, signExtension) {
  return $m_Lscodec_bits_BitVector$().apply__Lscodec_bits_ByteVector__Lscodec_bits_BitVector(this).shiftRight__J__Z__Lscodec_bits_BitVector(n, signExtension).toByteVector__Lscodec_bits_ByteVector()
});
$c_Lscodec_bits_ByteVector.prototype.compact__Lscodec_bits_ByteVector = (function() {
  if ((this instanceof $c_Lscodec_bits_ByteVector$Chunk)) {
    var x$1 = $as_Lscodec_bits_ByteVector$Chunk(this);
    return this
  } else {
    return this.copy__Lscodec_bits_ByteVector()
  }
});
$c_Lscodec_bits_ByteVector.prototype.copy__Lscodec_bits_ByteVector = (function() {
  var t = this.size__J();
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  if (((hi === 0) ? (((-2147483648) ^ lo) <= (-1)) : (hi < 0))) {
    var arr = this.toArray__AB();
    $m_Lscodec_bits_ByteVector$View$();
    var at = new $c_Lscodec_bits_ByteVector$AtArray(arr);
    var bytes = new $c_Lscodec_bits_ByteVector$View(at, $L0, new $c_RTLong(lo, hi));
    return new $c_Lscodec_bits_ByteVector$Chunk(bytes)
  } else {
    return this.take__J__Lscodec_bits_ByteVector(new $c_RTLong(2147483647, 0)).copy__Lscodec_bits_ByteVector().$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector(this.drop__J__Lscodec_bits_ByteVector(new $c_RTLong(2147483647, 0)).copy__Lscodec_bits_ByteVector())
  }
});
$c_Lscodec_bits_ByteVector.prototype.toArray__AB = (function() {
  var dimensions = new $ac_I(new Int32Array([$m_Lscodec_bits_ByteVector$().toIntSize__J__I(this.size__J())]));
  var buf = $asArrayOf_B($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_B.getClassOf(), dimensions), 1);
  this.copyToArray__AB__I__V(buf, 0);
  return buf
});
$c_Lscodec_bits_ByteVector.prototype.copyToArray__AB__I__V = (function(xs, start) {
  var elem = 0;
  elem = start;
  var this$2 = $m_s_package$().s_package$__f_Nil;
  var rem = new $c_sci_$colon$colon(this, this$2);
  var rem$tailLocal2 = rem;
  while (true) {
    matchResult4: {
      var x48 = rem$tailLocal2;
      if ((x48 instanceof $c_sci_$colon$colon)) {
        var x69 = $as_sci_$colon$colon(x48);
        var x70 = $as_Lscodec_bits_ByteVector(x69.sci_$colon$colon__f_head);
        var x71 = x69.sci_$colon$colon__f_next;
        if ((x70 instanceof $c_Lscodec_bits_ByteVector$Chunk)) {
          var x$1 = $as_Lscodec_bits_ByteVector$Chunk(x70);
          var x74 = x$1.Lscodec_bits_ByteVector$Chunk__f_bytes;
          x74.copyToArray__AB__I__V(xs, elem);
          var ev$7 = ((elem + $m_Lscodec_bits_ByteVector$().toIntSize__J__I(x74.Lscodec_bits_ByteVector$View__f_size)) | 0);
          elem = ev$7;
          rem$tailLocal2 = x71;
          continue
        };
        if ((x70 instanceof $c_Lscodec_bits_ByteVector$Append)) {
          var x$1$1 = $as_Lscodec_bits_ByteVector$Append(x70);
          var x67 = x$1$1.Lscodec_bits_ByteVector$Append__f_left;
          var x68 = x$1$1.Lscodec_bits_ByteVector$Append__f_right;
          var this$5 = new $c_sci_$colon$colon(x68, x71);
          rem$tailLocal2 = new $c_sci_$colon$colon(x67, this$5);
          continue
        };
        if ((x70 instanceof $c_Lscodec_bits_ByteVector$Chunks)) {
          var x$1$2 = $as_Lscodec_bits_ByteVector$Chunks(x70);
          var x58 = x$1$2.Lscodec_bits_ByteVector$Chunks__f_chunks;
          if ((x58 !== null)) {
            var x60 = x58.Lscodec_bits_ByteVector$Append__f_left;
            var x61 = x58.Lscodec_bits_ByteVector$Append__f_right;
            var this$8 = new $c_sci_$colon$colon(x61, x71);
            rem$tailLocal2 = new $c_sci_$colon$colon(x60, this$8);
            continue
          }
        };
        if ((x70 instanceof $c_Lscodec_bits_ByteVector$Buffer)) {
          var b = $as_Lscodec_bits_ByteVector$Buffer(x70);
          var elem$3 = b.unbuffer__Lscodec_bits_ByteVector();
          rem$tailLocal2 = new $c_sci_$colon$colon(elem$3, x71);
          continue
        }
      };
      var x = $m_s_package$().s_package$__f_Nil;
      if (((x === null) ? (x48 === null) : x.equals__O__Z(x48))) {
        break matchResult4
      };
      throw new $c_s_MatchError(x48)
    };
    break
  }
});
$c_Lscodec_bits_ByteVector.prototype.bufferBy__I__Lscodec_bits_ByteVector = (function(chunkSize) {
  if ((this instanceof $c_Lscodec_bits_ByteVector$Buffer)) {
    var b = $as_Lscodec_bits_ByteVector$Buffer(this);
    return ((b.Lscodec_bits_ByteVector$Buffer__f_lastChunk.u.length >= chunkSize) ? b : b.rebuffer__I__Lscodec_bits_ByteVector(chunkSize))
  } else {
    var id = new $c_ju_concurrent_atomic_AtomicLong($L0);
    var dimensions = new $ac_I(new Int32Array([chunkSize]));
    var lastChunk = $asArrayOf_B($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_B.getClassOf(), dimensions), 1);
    return new $c_Lscodec_bits_ByteVector$Buffer(id, $L0, this.unbuffer__Lscodec_bits_ByteVector(), lastChunk, 0)
  }
});
$c_Lscodec_bits_ByteVector.prototype.unbuffer__Lscodec_bits_ByteVector = (function() {
  return this
});
$c_Lscodec_bits_ByteVector.prototype.toHex__Lscodec_bits_Bases$HexAlphabet__T = (function(alphabet) {
  var bldr = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
  this.foreachS__Lscodec_bits_ByteVector$F1BU__V(new $c_Lscodec_bits_ByteVector$$anon$8(alphabet, bldr));
  return bldr.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_Lscodec_bits_ByteVector.prototype.zipWith__Lscodec_bits_ByteVector__F2__Lscodec_bits_ByteVector = (function(other, f) {
  return this.zipWithS__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector$F2B__Lscodec_bits_ByteVector(other, new $c_Lscodec_bits_ByteVector$$anon$13(f))
});
$c_Lscodec_bits_ByteVector.prototype.zipWithS__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector$F2B__Lscodec_bits_ByteVector = (function(other, f) {
  var at = new $c_Lscodec_bits_ByteVector$$anon$16(other, f, this);
  $m_Lscodec_bits_ByteVector$View$();
  var t = this.size__J();
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var t$1 = other.size__J();
  var lo$1 = t$1.RTLong__f_lo;
  var hi$1 = t$1.RTLong__f_hi;
  if (((hi === hi$1) ? (((-2147483648) ^ lo) < ((-2147483648) ^ lo$1)) : (hi < hi$1))) {
    var size__lo = lo;
    var size__hi = hi
  } else {
    var size__lo = lo$1;
    var size__hi = hi$1
  };
  var bytes = new $c_Lscodec_bits_ByteVector$View(at, $L0, new $c_RTLong(size__lo, size__hi));
  return new $c_Lscodec_bits_ByteVector$Chunk(bytes)
});
$c_Lscodec_bits_ByteVector.prototype.zipWithI__Lscodec_bits_ByteVector__F2__Lscodec_bits_ByteVector = (function(other, op) {
  return this.zipWith__Lscodec_bits_ByteVector__F2__Lscodec_bits_ByteVector(other, new $c_sjsr_AnonFunction2(((x$1, x$2) => {
    var x$1$1 = $uB(x$1);
    var x$2$1 = $uB(x$2);
    return (($uI(op.apply__O__O__O(x$1$1, x$2$1)) << 24) >> 24)
  })))
});
$c_Lscodec_bits_ByteVector.prototype.hashCode__I = (function() {
  if ((!this.Lscodec_bits_ByteVector__f_hashCodebitmap$1)) {
    var this$1 = $m_s_util_hashing_MurmurHash3$();
    this.Lscodec_bits_ByteVector__f_hashCode$lzy1 = $ps_Lscodec_bits_ByteVector__go$8__J__Lscodec_bits_ByteVector__I__I__I(new $c_RTLong(65536, 0), this, this$1.stringHash__T__I__I("ByteVector", (-137723950)), 1);
    this.Lscodec_bits_ByteVector__f_hashCodebitmap$1 = true
  };
  return this.Lscodec_bits_ByteVector__f_hashCode$lzy1
});
$c_Lscodec_bits_ByteVector.prototype.$eq$eq$eq__Lscodec_bits_ByteVector__Z = (function(other) {
  if ((this === other)) {
    return true
  } else {
    var t = this.size__J();
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var b = other.size__J();
    if ((!(!((lo === b.RTLong__f_lo) && (hi === b.RTLong__f_hi))))) {
      return $p_Lscodec_bits_ByteVector__go$9__Lscodec_bits_ByteVector__J__J__Z(this, other, new $c_RTLong(lo, hi), $L0)
    } else {
      return false
    }
  }
});
$c_Lscodec_bits_ByteVector.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_Lscodec_bits_ByteVector)) {
    var that = $as_Lscodec_bits_ByteVector(other);
    return this.$eq$eq$eq__Lscodec_bits_ByteVector__Z(that)
  } else {
    return false
  }
});
$c_Lscodec_bits_ByteVector.prototype.toString__T = (function() {
  if (this.isEmpty__Z()) {
    return "ByteVector(empty)"
  } else {
    var this$1 = this.size__J();
    var ahi = this$1.RTLong__f_hi;
    if (((ahi === 0) ? (((-2147483648) ^ this$1.RTLong__f_lo) < (-2147483136)) : (ahi < 0))) {
      return (((("ByteVector(" + this.size__J()) + " bytes, 0x") + this.toHex__Lscodec_bits_Bases$HexAlphabet__T($m_Lscodec_bits_Bases$Alphabets$HexLowercase$())) + ")")
    } else {
      return (((("ByteVector(" + this.size__J()) + " bytes, #") + this.hashCode__I()) + ")")
    }
  }
});
function $as_Lscodec_bits_ByteVector(obj) {
  return (((obj instanceof $c_Lscodec_bits_ByteVector) || (obj === null)) ? obj : $throwClassCastException(obj, "scodec.bits.ByteVector"))
}
function $isArrayOf_Lscodec_bits_ByteVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscodec_bits_ByteVector)))
}
function $asArrayOf_Lscodec_bits_ByteVector(obj, depth) {
  return (($isArrayOf_Lscodec_bits_ByteVector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscodec.bits.ByteVector;", depth))
}
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
  /*<skip>*/
}
$c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$c_Ljava_io_PrintStream.prototype.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
  /*<skip>*/
}
$h_Ljava_io_PrintStream.prototype = $c_Ljava_io_PrintStream.prototype;
function $as_Ljava_io_PrintStream(obj) {
  return (((obj instanceof $c_Ljava_io_PrintStream) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"))
}
function $isArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_PrintStream)))
}
function $asArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (($isArrayOf_Ljava_io_PrintStream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.PrintStream;", depth))
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next$mcB$sp__B = (function() {
  try {
    var r = this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uB($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next__O = (function() {
  return this.next$mcB$sp__B()
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcB$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", {
  sc_ArrayOps$ArrayIterator$mcB$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next$mcC$sp__C = (function() {
  try {
    var r = this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uC($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next__O = (function() {
  return $bC(this.next$mcC$sp__C())
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcC$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", {
  sc_ArrayOps$ArrayIterator$mcC$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next$mcD$sp__D = (function() {
  try {
    var r = this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uD($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next__O = (function() {
  return this.next$mcD$sp__D()
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcD$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", {
  sc_ArrayOps$ArrayIterator$mcD$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next$mcF$sp__F = (function() {
  try {
    var r = this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uF($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next__O = (function() {
  return this.next$mcF$sp__F()
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcF$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", {
  sc_ArrayOps$ArrayIterator$mcF$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next$mcI$sp__I = (function() {
  try {
    var r = this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uI($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next__O = (function() {
  return this.next$mcI$sp__I()
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcI$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", {
  sc_ArrayOps$ArrayIterator$mcI$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next$mcJ$sp__J = (function() {
  try {
    var t = this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return new $c_RTLong(lo, hi)
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uJ($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next__O = (function() {
  return this.next$mcJ$sp__J()
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcJ$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", {
  sc_ArrayOps$ArrayIterator$mcJ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next$mcS$sp__S = (function() {
  try {
    var r = this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uS($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next__O = (function() {
  return this.next$mcS$sp__S()
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcS$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", {
  sc_ArrayOps$ArrayIterator$mcS$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next$mcV$sp__V = (function() {
  try {
    this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0)
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next__O = (function() {
  this.next$mcV$sp__V()
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcV$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", {
  sc_ArrayOps$ArrayIterator$mcV$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next$mcZ$sp__Z = (function() {
  try {
    var r = this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp.get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    return r
  } catch (e) {
    if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
      return $uZ($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
    } else {
      throw e
    }
  }
});
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next__O = (function() {
  return this.next$mcZ$sp__Z()
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcZ$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", {
  sc_ArrayOps$ArrayIterator$mcZ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcZ$sp;
function $f_sc_View__toString__T($thiz) {
  return ($thiz.className__T() + "(<not computed>)")
}
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0
}
$c_s_reflect_AnyValManifest.prototype = new $h_O();
$c_s_reflect_AnyValManifest.prototype.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
  /*<skip>*/
}
$h_s_reflect_AnyValManifest.prototype = $c_s_reflect_AnyValManifest.prototype;
$c_s_reflect_AnyValManifest.prototype.toString__T = (function() {
  return this.s_reflect_AnyValManifest__f_toString
});
$c_s_reflect_AnyValManifest.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_s_reflect_AnyValManifest.prototype.hashCode__I = (function() {
  return this.s_reflect_AnyValManifest__f_hashCode
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
  /*<skip>*/
}
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype;
function $as_sjs_js_JavaScriptException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
/** @constructor */
function $c_Lscodec_bits_ByteVector$Buffer(id, stamp, hd, lastChunk, lastSize) {
  this.Lscodec_bits_ByteVector__f_hashCode$lzy1 = 0;
  this.Lscodec_bits_ByteVector__f_hashCodebitmap$1 = false;
  this.Lscodec_bits_ByteVector$Buffer__f_id = null;
  this.Lscodec_bits_ByteVector$Buffer__f_stamp = $L0;
  this.Lscodec_bits_ByteVector$Buffer__f_hd = null;
  this.Lscodec_bits_ByteVector$Buffer__f_lastChunk = null;
  this.Lscodec_bits_ByteVector$Buffer__f_lastSize = 0;
  this.Lscodec_bits_ByteVector$Buffer__f_id = id;
  this.Lscodec_bits_ByteVector$Buffer__f_stamp = stamp;
  this.Lscodec_bits_ByteVector$Buffer__f_hd = hd;
  this.Lscodec_bits_ByteVector$Buffer__f_lastChunk = lastChunk;
  this.Lscodec_bits_ByteVector$Buffer__f_lastSize = lastSize
}
$c_Lscodec_bits_ByteVector$Buffer.prototype = new $h_Lscodec_bits_ByteVector();
$c_Lscodec_bits_ByteVector$Buffer.prototype.constructor = $c_Lscodec_bits_ByteVector$Buffer;
/** @constructor */
function $h_Lscodec_bits_ByteVector$Buffer() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$Buffer.prototype = $c_Lscodec_bits_ByteVector$Buffer.prototype;
$c_Lscodec_bits_ByteVector$Buffer.prototype.size__J = (function() {
  var this$2 = this.Lscodec_bits_ByteVector$Buffer__f_hd.size__J();
  var value = this.Lscodec_bits_ByteVector$Buffer__f_lastSize;
  var hi = (value >> 31);
  var alo = this$2.RTLong__f_lo;
  var ahi = this$2.RTLong__f_hi;
  var lo = ((alo + value) | 0);
  var hi$1 = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + hi) | 0)) | 0) : ((ahi + hi) | 0));
  return new $c_RTLong(lo, hi$1)
});
$c_Lscodec_bits_ByteVector$Buffer.prototype.take__J__Lscodec_bits_ByteVector = (function(n) {
  var b = this.Lscodec_bits_ByteVector$Buffer__f_hd.size__J();
  var ahi = n.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  if (((ahi === bhi) ? (((-2147483648) ^ n.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))) {
    return this.Lscodec_bits_ByteVector$Buffer__f_hd.take__J__Lscodec_bits_ByteVector(n)
  } else {
    var $$x2 = this.Lscodec_bits_ByteVector$Buffer__f_hd;
    var $$x1 = this.lastBytes__Lscodec_bits_ByteVector();
    var b$1 = this.Lscodec_bits_ByteVector$Buffer__f_hd.size__J();
    var alo = n.RTLong__f_lo;
    var ahi$1 = n.RTLong__f_hi;
    var bhi$1 = b$1.RTLong__f_hi;
    var lo = ((alo - b$1.RTLong__f_lo) | 0);
    var hi = ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi$1 - bhi$1) | 0)) | 0) : ((ahi$1 - bhi$1) | 0));
    return $$x2.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector($$x1.take__J__Lscodec_bits_ByteVector(new $c_RTLong(lo, hi)))
  }
});
$c_Lscodec_bits_ByteVector$Buffer.prototype.drop__J__Lscodec_bits_ByteVector = (function(n) {
  var b = this.Lscodec_bits_ByteVector$Buffer__f_hd.size__J();
  var ahi = n.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  if (((ahi === bhi) ? (((-2147483648) ^ n.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))) {
    var id = this.Lscodec_bits_ByteVector$Buffer__f_id;
    var t = this.Lscodec_bits_ByteVector$Buffer__f_stamp;
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var hd = this.Lscodec_bits_ByteVector$Buffer__f_hd.drop__J__Lscodec_bits_ByteVector(n);
    var lastChunk = this.Lscodec_bits_ByteVector$Buffer__f_lastChunk;
    var lastSize = this.Lscodec_bits_ByteVector$Buffer__f_lastSize;
    return new $c_Lscodec_bits_ByteVector$Buffer(id, new $c_RTLong(lo, hi), hd.unbuffer__Lscodec_bits_ByteVector(), lastChunk, lastSize)
  } else {
    return this.unbuffer__Lscodec_bits_ByteVector().drop__J__Lscodec_bits_ByteVector(n).bufferBy__I__Lscodec_bits_ByteVector(this.Lscodec_bits_ByteVector$Buffer__f_lastChunk.u.length)
  }
});
$c_Lscodec_bits_ByteVector$Buffer.prototype.getImpl__J__B = (function(n) {
  var b = this.Lscodec_bits_ByteVector$Buffer__f_hd.size__J();
  var ahi = n.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  if (((ahi === bhi) ? (((-2147483648) ^ n.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))) {
    return this.Lscodec_bits_ByteVector$Buffer__f_hd.getImpl__J__B(n)
  } else {
    var $$x1 = this.Lscodec_bits_ByteVector$Buffer__f_lastChunk;
    var b$1 = this.Lscodec_bits_ByteVector$Buffer__f_hd.size__J();
    var alo = n.RTLong__f_lo;
    var ahi$1 = n.RTLong__f_hi;
    var bhi$1 = b$1.RTLong__f_hi;
    var lo = ((alo - b$1.RTLong__f_lo) | 0);
    return $$x1.get(lo)
  }
});
$c_Lscodec_bits_ByteVector$Buffer.prototype.$colon$plus__B__Lscodec_bits_ByteVector = (function(b) {
  var $$x2 = this.Lscodec_bits_ByteVector$Buffer__f_id;
  var $$x1 = this.Lscodec_bits_ByteVector$Buffer__f_stamp;
  var b$1 = this.Lscodec_bits_ByteVector$Buffer__f_stamp;
  var bhi = b$1.RTLong__f_hi;
  var lo = ((1 + b$1.RTLong__f_lo) | 0);
  var hi = ((lo === 0) ? ((1 + bhi) | 0) : bhi);
  if (($$x2.compareAndSet__J__J__Z($$x1, new $c_RTLong(lo, hi)) && (this.Lscodec_bits_ByteVector$Buffer__f_lastSize < this.Lscodec_bits_ByteVector$Buffer__f_lastChunk.u.length))) {
    this.Lscodec_bits_ByteVector$Buffer__f_lastChunk.set(this.Lscodec_bits_ByteVector$Buffer__f_lastSize, b);
    var id = this.Lscodec_bits_ByteVector$Buffer__f_id;
    var b$2 = this.Lscodec_bits_ByteVector$Buffer__f_stamp;
    var bhi$1 = b$2.RTLong__f_hi;
    var lo$1 = ((1 + b$2.RTLong__f_lo) | 0);
    var hi$1 = ((lo$1 === 0) ? ((1 + bhi$1) | 0) : bhi$1);
    var hd = this.Lscodec_bits_ByteVector$Buffer__f_hd;
    var lastChunk = this.Lscodec_bits_ByteVector$Buffer__f_lastChunk;
    var lastSize = ((1 + this.Lscodec_bits_ByteVector$Buffer__f_lastSize) | 0);
    return new $c_Lscodec_bits_ByteVector$Buffer(id, new $c_RTLong(lo$1, hi$1), hd.unbuffer__Lscodec_bits_ByteVector(), lastChunk, lastSize)
  } else {
    var id$1 = new $c_ju_concurrent_atomic_AtomicLong($L0);
    var hd$1 = this.unbuffer__Lscodec_bits_ByteVector();
    var dimensions = new $ac_I(new Int32Array([this.Lscodec_bits_ByteVector$Buffer__f_lastChunk.u.length]));
    var lastChunk$1 = $asArrayOf_B($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_B.getClassOf(), dimensions), 1);
    return new $c_Lscodec_bits_ByteVector$Buffer(id$1, $L0, hd$1.unbuffer__Lscodec_bits_ByteVector(), lastChunk$1, 0).$colon$plus__B__Lscodec_bits_ByteVector(b)
  }
});
$c_Lscodec_bits_ByteVector$Buffer.prototype.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector = (function(bs) {
  if (bs.isEmpty__Z()) {
    return this
  } else {
    var $$x3 = this.Lscodec_bits_ByteVector$Buffer__f_id;
    var $$x2 = this.Lscodec_bits_ByteVector$Buffer__f_stamp;
    var b = this.Lscodec_bits_ByteVector$Buffer__f_stamp;
    var bhi = b.RTLong__f_hi;
    var lo = ((1 + b.RTLong__f_lo) | 0);
    var hi = ((lo === 0) ? ((1 + bhi) | 0) : bhi);
    if ($$x3.compareAndSet__J__J__Z($$x2, new $c_RTLong(lo, hi))) {
      var value = ((this.Lscodec_bits_ByteVector$Buffer__f_lastChunk.u.length - this.Lscodec_bits_ByteVector$Buffer__f_lastSize) | 0);
      var hi$1 = (value >> 31);
      var b$1 = bs.size__J();
      var bhi$1 = b$1.RTLong__f_hi;
      var $$x1 = ((hi$1 === bhi$1) ? (((-2147483648) ^ value) > ((-2147483648) ^ b$1.RTLong__f_lo)) : (hi$1 > bhi$1))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      bs.copyToArray__AB__I__V(this.Lscodec_bits_ByteVector$Buffer__f_lastChunk, this.Lscodec_bits_ByteVector$Buffer__f_lastSize);
      var id = this.Lscodec_bits_ByteVector$Buffer__f_id;
      var b$2 = this.Lscodec_bits_ByteVector$Buffer__f_stamp;
      var bhi$2 = b$2.RTLong__f_hi;
      var lo$1 = ((1 + b$2.RTLong__f_lo) | 0);
      var hi$2 = ((lo$1 === 0) ? ((1 + bhi$2) | 0) : bhi$2);
      var hd = this.Lscodec_bits_ByteVector$Buffer__f_hd;
      var lastChunk = this.Lscodec_bits_ByteVector$Buffer__f_lastChunk;
      var $$x4 = this.Lscodec_bits_ByteVector$Buffer__f_lastSize;
      var this$4 = bs.size__J();
      var lastSize = (($$x4 + this$4.RTLong__f_lo) | 0);
      return new $c_Lscodec_bits_ByteVector$Buffer(id, new $c_RTLong(lo$1, hi$2), hd.unbuffer__Lscodec_bits_ByteVector(), lastChunk, lastSize)
    } else if ((this.Lscodec_bits_ByteVector$Buffer__f_lastSize === 0)) {
      var id$1 = this.Lscodec_bits_ByteVector$Buffer__f_id;
      var t = this.Lscodec_bits_ByteVector$Buffer__f_stamp;
      var lo$2 = t.RTLong__f_lo;
      var hi$3 = t.RTLong__f_hi;
      var hd$1 = this.Lscodec_bits_ByteVector$Buffer__f_hd.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector(bs).unbuffer__Lscodec_bits_ByteVector();
      var lastChunk$1 = this.Lscodec_bits_ByteVector$Buffer__f_lastChunk;
      var lastSize$1 = this.Lscodec_bits_ByteVector$Buffer__f_lastSize;
      return new $c_Lscodec_bits_ByteVector$Buffer(id$1, new $c_RTLong(lo$2, hi$3), hd$1.unbuffer__Lscodec_bits_ByteVector(), lastChunk$1, lastSize$1)
    } else {
      var id$2 = new $c_ju_concurrent_atomic_AtomicLong($L0);
      var hd$2 = this.unbuffer__Lscodec_bits_ByteVector();
      var dimensions = new $ac_I(new Int32Array([this.Lscodec_bits_ByteVector$Buffer__f_lastChunk.u.length]));
      var lastChunk$2 = $asArrayOf_B($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_B.getClassOf(), dimensions), 1);
      return new $c_Lscodec_bits_ByteVector$Buffer(id$2, $L0, hd$2.unbuffer__Lscodec_bits_ByteVector(), lastChunk$2, 0).$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector(bs)
    }
  }
});
$c_Lscodec_bits_ByteVector$Buffer.prototype.lastBytes__Lscodec_bits_ByteVector = (function() {
  var $$x1 = $m_Lscodec_bits_ByteVector$().view__AB__Lscodec_bits_ByteVector(this.Lscodec_bits_ByteVector$Buffer__f_lastChunk);
  var value = this.Lscodec_bits_ByteVector$Buffer__f_lastSize;
  var hi = (value >> 31);
  return $$x1.take__J__Lscodec_bits_ByteVector(new $c_RTLong(value, hi))
});
$c_Lscodec_bits_ByteVector$Buffer.prototype.unbuffer__Lscodec_bits_ByteVector = (function() {
  return this.Lscodec_bits_ByteVector$Buffer__f_hd.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector((((this.Lscodec_bits_ByteVector$Buffer__f_lastSize << 1) < this.Lscodec_bits_ByteVector$Buffer__f_lastChunk.u.length) ? this.lastBytes__Lscodec_bits_ByteVector().copy__Lscodec_bits_ByteVector() : this.lastBytes__Lscodec_bits_ByteVector()))
});
$c_Lscodec_bits_ByteVector$Buffer.prototype.rebuffer__I__Lscodec_bits_ByteVector = (function(chunkSize) {
  $m_s_Predef$().require__Z__V((chunkSize > this.Lscodec_bits_ByteVector$Buffer__f_lastChunk.u.length));
  var dimensions = new $ac_I(new Int32Array([chunkSize]));
  var lastChunk2 = $asArrayOf_B($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_B.getClassOf(), dimensions), 1);
  var xs = this.Lscodec_bits_ByteVector$Buffer__f_lastChunk;
  $m_sc_ArrayOps$().copyToArray$extension__O__O__I__I__I(xs, lastChunk2, 0, lastChunk2.u.length);
  var id = new $c_ju_concurrent_atomic_AtomicLong($L0);
  var hd = this.Lscodec_bits_ByteVector$Buffer__f_hd;
  var lastChunk = this.Lscodec_bits_ByteVector$Buffer__f_lastChunk;
  var lastSize = this.Lscodec_bits_ByteVector$Buffer__f_lastSize;
  return new $c_Lscodec_bits_ByteVector$Buffer(id, $L0, hd.unbuffer__Lscodec_bits_ByteVector(), lastChunk, lastSize)
});
function $as_Lscodec_bits_ByteVector$Buffer(obj) {
  return (((obj instanceof $c_Lscodec_bits_ByteVector$Buffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scodec.bits.ByteVector$Buffer"))
}
function $isArrayOf_Lscodec_bits_ByteVector$Buffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscodec_bits_ByteVector$Buffer)))
}
function $asArrayOf_Lscodec_bits_ByteVector$Buffer(obj, depth) {
  return (($isArrayOf_Lscodec_bits_ByteVector$Buffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscodec.bits.ByteVector$Buffer;", depth))
}
var $d_Lscodec_bits_ByteVector$Buffer = new $TypeData().initClass({
  Lscodec_bits_ByteVector$Buffer: 0
}, false, "scodec.bits.ByteVector$Buffer", {
  Lscodec_bits_ByteVector$Buffer: 1,
  Lscodec_bits_ByteVector: 1,
  O: 1,
  Lscodec_bits_ByteVectorCrossPlatform: 1,
  Lscodec_bits_BitwiseOperations: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_io_Serializable: 1
});
$c_Lscodec_bits_ByteVector$Buffer.prototype.$classData = $d_Lscodec_bits_ByteVector$Buffer;
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    if (($thiz.jl_JSConsoleBasedPrintStream__f_isErr && $uZ((!(!console.error))))) {
      console.error(line)
    } else {
      console.log(line)
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.jl_JSConsoleBasedPrintStream__f_isErr = false;
  this.jl_JSConsoleBasedPrintStream__f_buffer = null;
  this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
  var out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, out, false, null);
  this.jl_JSConsoleBasedPrintStream__f_buffer = ""
}
$c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$c_jl_JSConsoleBasedPrintStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
  /*<skip>*/
}
$h_jl_JSConsoleBasedPrintStream.prototype = $c_jl_JSConsoleBasedPrintStream.prototype;
$c_jl_JSConsoleBasedPrintStream.prototype.java$lang$JSConsoleBasedPrintStream$$printString__T__V = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = $uI(this$1.indexOf("\n"));
    if ((nlPos < 0)) {
      this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
      rest = ""
    } else {
      var $$x1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
      var this$2 = rest;
      if ((nlPos > this$2.length)) {
        $charAt(this$2, nlPos)
      };
      if ((nlPos < 0)) {
        $charAt(this$2, (-1))
      };
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $$x1) + $as_T(this$2.substring(0, nlPos))));
      this.jl_JSConsoleBasedPrintStream__f_buffer = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      if (((beginIndex < 0) || (beginIndex > this$3.length))) {
        $charAt(this$3, beginIndex)
      };
      rest = $as_T(this$3.substring(beginIndex))
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream", {
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
});
$c_jl_JSConsoleBasedPrintStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream;
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.isEmpty__Z())) {
      return s
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = $as_sc_LinearSeq(s.tail__O());
      n = temp$n;
      s = temp$s
    }
  }
}
function $is_sc_StrictOptimizedLinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_StrictOptimizedLinearSeqOps)))
}
function $as_sc_StrictOptimizedLinearSeqOps(obj) {
  return (($is_sc_StrictOptimizedLinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StrictOptimizedLinearSeqOps"))
}
function $isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StrictOptimizedLinearSeqOps)))
}
function $asArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (($isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StrictOptimizedLinearSeqOps;", depth))
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$BooleanManifest.prototype.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $c_s_reflect_ManifestFactory$BooleanManifest.prototype;
$c_s_reflect_ManifestFactory$BooleanManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_Z.getClassOf()
});
$c_s_reflect_ManifestFactory$BooleanManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_Z(len)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$ByteManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $c_s_reflect_ManifestFactory$ByteManifest.prototype;
$c_s_reflect_ManifestFactory$ByteManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_B.getClassOf()
});
$c_s_reflect_ManifestFactory$ByteManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_B(len)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$CharManifest.prototype.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $c_s_reflect_ManifestFactory$CharManifest.prototype;
$c_s_reflect_ManifestFactory$CharManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_C.getClassOf()
});
$c_s_reflect_ManifestFactory$CharManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_C(len)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$DoubleManifest.prototype.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $c_s_reflect_ManifestFactory$DoubleManifest.prototype;
$c_s_reflect_ManifestFactory$DoubleManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_D.getClassOf()
});
$c_s_reflect_ManifestFactory$DoubleManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_D(len)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$FloatManifest.prototype.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $c_s_reflect_ManifestFactory$FloatManifest.prototype;
$c_s_reflect_ManifestFactory$FloatManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_F.getClassOf()
});
$c_s_reflect_ManifestFactory$FloatManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_F(len)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$IntManifest.prototype.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $c_s_reflect_ManifestFactory$IntManifest.prototype;
$c_s_reflect_ManifestFactory$IntManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_I.getClassOf()
});
$c_s_reflect_ManifestFactory$IntManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_I(len)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$LongManifest.prototype.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $c_s_reflect_ManifestFactory$LongManifest.prototype;
$c_s_reflect_ManifestFactory$LongManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_J.getClassOf()
});
$c_s_reflect_ManifestFactory$LongManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_J(len)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $c_s_reflect_ManifestFactory$PhantomManifest.prototype;
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.toString__T = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.hashCode__I = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$ShortManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $c_s_reflect_ManifestFactory$ShortManifest.prototype;
$c_s_reflect_ManifestFactory$ShortManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_S.getClassOf()
});
$c_s_reflect_ManifestFactory$ShortManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_S(len)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$UnitManifest.prototype.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $c_s_reflect_ManifestFactory$UnitManifest.prototype;
$c_s_reflect_ManifestFactory$UnitManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_V.getClassOf()
});
$c_s_reflect_ManifestFactory$UnitManifest.prototype.newArray__I__O = (function(len) {
  return new ($d_jl_Void.getArrayOf().constr)(len)
});
/** @constructor */
function $c_sc_AbstractView() {
  /*<skip>*/
}
$c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
  /*<skip>*/
}
$h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
$c_sc_AbstractView.prototype.toString__T = (function() {
  return $f_sc_View__toString__T(this)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
  $m_s_package$();
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $c_s_reflect_ManifestFactory$AnyManifest$.prototype;
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_O.getClassOf()
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.newArray__I__O = (function(len) {
  return new $ac_O(len)
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyManifest$", {
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyManifest$;
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0;
  this.s_reflect_AnyValManifest__f_toString = "Boolean";
  this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$BooleanManifest$: 0
}, false, "scala.reflect.ManifestFactory$BooleanManifest$", {
  s_reflect_ManifestFactory$BooleanManifest$: 1,
  s_reflect_ManifestFactory$BooleanManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$BooleanManifest$;
var $n_s_reflect_ManifestFactory$BooleanManifest$;
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$()
  };
  return $n_s_reflect_ManifestFactory$BooleanManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0;
  this.s_reflect_AnyValManifest__f_toString = "Byte";
  this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $c_s_reflect_ManifestFactory$ByteManifest$.prototype;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ByteManifest$: 0
}, false, "scala.reflect.ManifestFactory$ByteManifest$", {
  s_reflect_ManifestFactory$ByteManifest$: 1,
  s_reflect_ManifestFactory$ByteManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ByteManifest$;
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$()
  };
  return $n_s_reflect_ManifestFactory$ByteManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0;
  this.s_reflect_AnyValManifest__f_toString = "Char";
  this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$c_s_reflect_ManifestFactory$CharManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $c_s_reflect_ManifestFactory$CharManifest$.prototype;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$CharManifest$: 0
}, false, "scala.reflect.ManifestFactory$CharManifest$", {
  s_reflect_ManifestFactory$CharManifest$: 1,
  s_reflect_ManifestFactory$CharManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$CharManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$CharManifest$;
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$()
  };
  return $n_s_reflect_ManifestFactory$CharManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0;
  this.s_reflect_AnyValManifest__f_toString = "Double";
  this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$DoubleManifest$: 0
}, false, "scala.reflect.ManifestFactory$DoubleManifest$", {
  s_reflect_ManifestFactory$DoubleManifest$: 1,
  s_reflect_ManifestFactory$DoubleManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$DoubleManifest$;
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$()
  };
  return $n_s_reflect_ManifestFactory$DoubleManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0;
  this.s_reflect_AnyValManifest__f_toString = "Float";
  this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $c_s_reflect_ManifestFactory$FloatManifest$.prototype;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$FloatManifest$: 0
}, false, "scala.reflect.ManifestFactory$FloatManifest$", {
  s_reflect_ManifestFactory$FloatManifest$: 1,
  s_reflect_ManifestFactory$FloatManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$FloatManifest$;
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$()
  };
  return $n_s_reflect_ManifestFactory$FloatManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0;
  this.s_reflect_AnyValManifest__f_toString = "Int";
  this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$c_s_reflect_ManifestFactory$IntManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $c_s_reflect_ManifestFactory$IntManifest$.prototype;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$IntManifest$: 0
}, false, "scala.reflect.ManifestFactory$IntManifest$", {
  s_reflect_ManifestFactory$IntManifest$: 1,
  s_reflect_ManifestFactory$IntManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$IntManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$IntManifest$;
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$()
  };
  return $n_s_reflect_ManifestFactory$IntManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0;
  this.s_reflect_AnyValManifest__f_toString = "Long";
  this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$c_s_reflect_ManifestFactory$LongManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $c_s_reflect_ManifestFactory$LongManifest$.prototype;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$LongManifest$: 0
}, false, "scala.reflect.ManifestFactory$LongManifest$", {
  s_reflect_ManifestFactory$LongManifest$: 1,
  s_reflect_ManifestFactory$LongManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$LongManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$LongManifest$;
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$()
  };
  return $n_s_reflect_ManifestFactory$LongManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing";
  $m_s_package$();
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $c_s_reflect_ManifestFactory$NothingManifest$.prototype;
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_sr_Nothing$.getClassOf()
});
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.newArray__I__O = (function(len) {
  return new $ac_O(len)
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NothingManifest$: 0
}, false, "scala.reflect.ManifestFactory$NothingManifest$", {
  s_reflect_ManifestFactory$NothingManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NothingManifest$;
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$()
  };
  return $n_s_reflect_ManifestFactory$NothingManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Null";
  $m_s_package$();
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$NullManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $c_s_reflect_ManifestFactory$NullManifest$.prototype;
$c_s_reflect_ManifestFactory$NullManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_sr_Null$.getClassOf()
});
$c_s_reflect_ManifestFactory$NullManifest$.prototype.newArray__I__O = (function(len) {
  return new $ac_O(len)
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NullManifest$: 0
}, false, "scala.reflect.ManifestFactory$NullManifest$", {
  s_reflect_ManifestFactory$NullManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NullManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NullManifest$;
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$()
  };
  return $n_s_reflect_ManifestFactory$NullManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
  $m_s_package$();
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype;
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_O.getClassOf()
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.newArray__I__O = (function(len) {
  return new $ac_O(len)
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ObjectManifest$: 0
}, false, "scala.reflect.ManifestFactory$ObjectManifest$", {
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ObjectManifest$;
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$()
  };
  return $n_s_reflect_ManifestFactory$ObjectManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0;
  this.s_reflect_AnyValManifest__f_toString = "Short";
  this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $c_s_reflect_ManifestFactory$ShortManifest$.prototype;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ShortManifest$: 0
}, false, "scala.reflect.ManifestFactory$ShortManifest$", {
  s_reflect_ManifestFactory$ShortManifest$: 1,
  s_reflect_ManifestFactory$ShortManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ShortManifest$;
var $n_s_reflect_ManifestFactory$ShortManifest$;
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$()
  };
  return $n_s_reflect_ManifestFactory$ShortManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_hashCode = 0;
  this.s_reflect_AnyValManifest__f_toString = "Unit";
  this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $c_s_reflect_ManifestFactory$UnitManifest$.prototype;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$UnitManifest$: 0
}, false, "scala.reflect.ManifestFactory$UnitManifest$", {
  s_reflect_ManifestFactory$UnitManifest$: 1,
  s_reflect_ManifestFactory$UnitManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$UnitManifest$;
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$()
  };
  return $n_s_reflect_ManifestFactory$UnitManifest$
}
function $p_Lscodec_bits_BitVector$Append__go$10__sci_List__J__J($thiz, rem, acc) {
  var lo = acc.RTLong__f_lo;
  var hi = acc.RTLong__f_hi;
  var acc$tailLocal3__lo = lo;
  var acc$tailLocal3__hi = hi;
  var rem$tailLocal1 = rem;
  while (true) {
    var x141 = rem$tailLocal1;
    var x = $m_s_package$().s_package$__f_Nil;
    if (((x === null) ? (x141 === null) : x.equals__O__Z(x141))) {
      return new $c_RTLong(acc$tailLocal3__lo, acc$tailLocal3__hi)
    };
    if ((x141 instanceof $c_sci_$colon$colon)) {
      var x158 = $as_sci_$colon$colon(x141);
      var x159 = $as_Lscodec_bits_BitVector(x158.sci_$colon$colon__f_head);
      var x160 = x158.sci_$colon$colon__f_next;
      if ((x159 instanceof $c_Lscodec_bits_BitVector$Append)) {
        var x$1 = $as_Lscodec_bits_BitVector$Append(x159);
        var x163 = x$1.Lscodec_bits_BitVector$Append__f_left;
        var x164 = x$1.Lscodec_bits_BitVector$Append__f_right;
        var this$2 = new $c_sci_$colon$colon(x164, x160);
        rem$tailLocal1 = new $c_sci_$colon$colon(x163, this$2);
        continue
      };
      if ((x159 instanceof $c_Lscodec_bits_BitVector$Chunks)) {
        var x$1$1 = $as_Lscodec_bits_BitVector$Chunks(x159);
        var x154 = x$1$1.Lscodec_bits_BitVector$Chunks__f_chunks;
        if ((x154 !== null)) {
          var x156 = x154.Lscodec_bits_BitVector$Append__f_left;
          var x157 = x154.Lscodec_bits_BitVector$Append__f_right;
          var this$5 = new $c_sci_$colon$colon(x157, x160);
          rem$tailLocal1 = new $c_sci_$colon$colon(x156, this$5);
          continue
        }
      };
      if (false) {
        var s = $as_Lscodec_bits_BitVector$Suspend(x159);
        var elem$3 = s.underlying__Lscodec_bits_BitVector();
        rem$tailLocal1 = new $c_sci_$colon$colon(elem$3, x160);
        continue
      };
      var this$6__lo = acc$tailLocal3__lo;
      var this$6__hi = acc$tailLocal3__hi;
      var b = x159.size__J();
      var alo = this$6__lo;
      var ahi = this$6__hi;
      var bhi = b.RTLong__f_hi;
      var lo$1 = ((alo + b.RTLong__f_lo) | 0);
      var hi$1 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0));
      rem$tailLocal1 = x160;
      var $$x1__lo = lo$1;
      var $$x1__hi = hi$1;
      acc$tailLocal3__lo = $$x1__lo;
      acc$tailLocal3__hi = $$x1__hi;
      continue
    };
    throw new $c_s_MatchError(x141)
  }
}
function $p_Lscodec_bits_BitVector$Append__go$11__Lscodec_bits_BitVector__Lscodec_bits_BitVector__J__Lscodec_bits_BitVector($thiz, accL, cur, n) {
  var lo = n.RTLong__f_lo;
  var hi = n.RTLong__f_hi;
  var n$tailLocal1__lo = lo;
  var n$tailLocal1__hi = hi;
  var cur$tailLocal1 = cur;
  var accL$tailLocal1 = accL;
  while (true) {
    var x165 = cur$tailLocal1;
    if ((x165 instanceof $c_Lscodec_bits_BitVector$Append)) {
      var x$1 = $as_Lscodec_bits_BitVector$Append(x165);
      var x169 = x$1.Lscodec_bits_BitVector$Append__f_left;
      var x170 = x$1.Lscodec_bits_BitVector$Append__f_right;
      var this$2__lo = n$tailLocal1__lo;
      var this$2__hi = n$tailLocal1__hi;
      var b = x169.size__J();
      var ahi = this$2__hi;
      var bhi = b.RTLong__f_hi;
      if (((ahi === bhi) ? (((-2147483648) ^ this$2__lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))) {
        return accL$tailLocal1.$plus$plus__Lscodec_bits_BitVector__Lscodec_bits_BitVector(x169.take__J__Lscodec_bits_BitVector(new $c_RTLong(n$tailLocal1__lo, n$tailLocal1__hi)))
      } else {
        var accL$tailLocal1$tmp1 = accL$tailLocal1.$plus$plus__Lscodec_bits_BitVector__Lscodec_bits_BitVector(x169);
        var this$3__lo = n$tailLocal1__lo;
        var this$3__hi = n$tailLocal1__hi;
        var b$1 = x169.size__J();
        var alo = this$3__lo;
        var ahi$1 = this$3__hi;
        var bhi$1 = b$1.RTLong__f_hi;
        var lo$1 = ((alo - b$1.RTLong__f_lo) | 0);
        var hi$1 = ((((-2147483648) ^ lo$1) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi$1 - bhi$1) | 0)) | 0) : ((ahi$1 - bhi$1) | 0));
        accL$tailLocal1 = accL$tailLocal1$tmp1;
        cur$tailLocal1 = x170;
        var $$x1__lo = lo$1;
        var $$x1__hi = hi$1;
        n$tailLocal1__lo = $$x1__lo;
        n$tailLocal1__hi = $$x1__hi;
        continue
      }
    };
    if (false) {
      var s = $as_Lscodec_bits_BitVector$Suspend(x165);
      cur$tailLocal1 = s.underlying__Lscodec_bits_BitVector();
      continue
    };
    return accL$tailLocal1.$plus$plus__Lscodec_bits_BitVector__Lscodec_bits_BitVector(cur$tailLocal1.take__J__Lscodec_bits_BitVector(new $c_RTLong(n$tailLocal1__lo, n$tailLocal1__hi)))
  }
}
function $p_Lscodec_bits_BitVector$Append__go$12__Lscodec_bits_BitVector__J__Lscodec_bits_BitVector($thiz, cur, n) {
  var lo = n.RTLong__f_lo;
  var hi = n.RTLong__f_hi;
  var n$tailLocal2__lo = lo;
  var n$tailLocal2__hi = hi;
  var cur$tailLocal2 = cur;
  while (true) {
    var x171 = cur$tailLocal2;
    if ((x171 instanceof $c_Lscodec_bits_BitVector$Append)) {
      var x$1 = $as_Lscodec_bits_BitVector$Append(x171);
      var x175 = x$1.Lscodec_bits_BitVector$Append__f_left;
      var x176 = x$1.Lscodec_bits_BitVector$Append__f_right;
      var this$2__lo = n$tailLocal2__lo;
      var this$2__hi = n$tailLocal2__hi;
      var b = x175.size__J();
      var ahi = this$2__hi;
      var bhi = b.RTLong__f_hi;
      if (((ahi === bhi) ? (((-2147483648) ^ this$2__lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))) {
        var this$3__lo = n$tailLocal2__lo;
        var this$3__hi = n$tailLocal2__hi;
        var b$1 = x175.size__J();
        var alo = this$3__lo;
        var ahi$1 = this$3__hi;
        var bhi$1 = b$1.RTLong__f_hi;
        var lo$1 = ((alo - b$1.RTLong__f_lo) | 0);
        var hi$1 = ((((-2147483648) ^ lo$1) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi$1 - bhi$1) | 0)) | 0) : ((ahi$1 - bhi$1) | 0));
        cur$tailLocal2 = x176;
        var $$x1__lo = lo$1;
        var $$x1__hi = hi$1;
        n$tailLocal2__lo = $$x1__lo;
        n$tailLocal2__hi = $$x1__hi;
        continue
      } else {
        var left = x175.drop__J__Lscodec_bits_BitVector(new $c_RTLong(n$tailLocal2__lo, n$tailLocal2__hi));
        return new $c_Lscodec_bits_BitVector$Append(left, x176)
      }
    };
    if (false) {
      var s = $as_Lscodec_bits_BitVector$Suspend(x171);
      cur$tailLocal2 = s.underlying__Lscodec_bits_BitVector();
      continue
    };
    return cur$tailLocal2.drop__J__Lscodec_bits_BitVector(new $c_RTLong(n$tailLocal2__lo, n$tailLocal2__hi))
  }
}
function $p_Lscodec_bits_BitVector$Append__go$13__Lscodec_bits_BitVector__J__J__Z($thiz, cur, n, seen) {
  var lo = seen.RTLong__f_lo;
  var hi = seen.RTLong__f_hi;
  var seen$tailLocal1__lo = lo;
  var seen$tailLocal1__hi = hi;
  var lo$1 = n.RTLong__f_lo;
  var hi$1 = n.RTLong__f_hi;
  var n$tailLocal3__lo = lo$1;
  var n$tailLocal3__hi = hi$1;
  var cur$tailLocal3 = cur;
  while (true) {
    var x177 = cur$tailLocal3;
    if ((x177 instanceof $c_Lscodec_bits_BitVector$Append)) {
      var x$1 = $as_Lscodec_bits_BitVector$Append(x177);
      var x181 = x$1.Lscodec_bits_BitVector$Append__f_left;
      var x182 = x$1.Lscodec_bits_BitVector$Append__f_right;
      var this$2 = x181.size__J();
      var b__lo = n$tailLocal3__lo;
      var b__hi = n$tailLocal3__hi;
      var ahi = this$2.RTLong__f_hi;
      var bhi = b__hi;
      if (((ahi === bhi) ? (((-2147483648) ^ this$2.RTLong__f_lo) >= ((-2147483648) ^ b__lo)) : (ahi > bhi))) {
        var this$3__lo = seen$tailLocal1__lo;
        var this$3__hi = seen$tailLocal1__hi;
        var b$1 = x181.size__J();
        var alo = this$3__lo;
        var ahi$1 = this$3__hi;
        var bhi$1 = b$1.RTLong__f_hi;
        var lo$2 = ((alo + b$1.RTLong__f_lo) | 0);
        var hi$2 = ((((-2147483648) ^ lo$2) < ((-2147483648) ^ alo)) ? ((1 + ((ahi$1 + bhi$1) | 0)) | 0) : ((ahi$1 + bhi$1) | 0));
        var t = $thiz.Lscodec_bits_BitVector$Append__f_sizeLowerBound;
        var lo$3 = t.RTLong__f_lo;
        var hi$3 = t.RTLong__f_hi;
        if (((hi$2 === hi$3) ? (((-2147483648) ^ lo$2) > ((-2147483648) ^ lo$3)) : (hi$2 > hi$3))) {
          var x__lo = lo$2;
          var x__hi = hi$2
        } else {
          var x__lo = lo$3;
          var x__hi = hi$3
        };
        $thiz.Lscodec_bits_BitVector$Append__f_sizeLowerBound = new $c_RTLong(x__lo, x__hi);
        return false
      } else {
        var this$7__lo = n$tailLocal3__lo;
        var this$7__hi = n$tailLocal3__hi;
        var b$2 = x181.size__J();
        var alo$1 = this$7__lo;
        var ahi$2 = this$7__hi;
        var bhi$2 = b$2.RTLong__f_hi;
        var lo$4 = ((alo$1 - b$2.RTLong__f_lo) | 0);
        var hi$4 = ((((-2147483648) ^ lo$4) > ((-2147483648) ^ alo$1)) ? (((-1) + ((ahi$2 - bhi$2) | 0)) | 0) : ((ahi$2 - bhi$2) | 0));
        var this$9__lo = seen$tailLocal1__lo;
        var this$9__hi = seen$tailLocal1__hi;
        var b$3 = x181.size__J();
        var alo$2 = this$9__lo;
        var ahi$3 = this$9__hi;
        var bhi$3 = b$3.RTLong__f_hi;
        var lo$5 = ((alo$2 + b$3.RTLong__f_lo) | 0);
        var hi$5 = ((((-2147483648) ^ lo$5) < ((-2147483648) ^ alo$2)) ? ((1 + ((ahi$3 + bhi$3) | 0)) | 0) : ((ahi$3 + bhi$3) | 0));
        cur$tailLocal3 = x182;
        var $$x1__lo = lo$4;
        var $$x1__hi = hi$4;
        n$tailLocal3__lo = $$x1__lo;
        n$tailLocal3__hi = $$x1__hi;
        var $$x2__lo = lo$5;
        var $$x2__hi = hi$5;
        seen$tailLocal1__lo = $$x2__lo;
        seen$tailLocal1__hi = $$x2__hi;
        continue
      }
    };
    if (false) {
      var s = $as_Lscodec_bits_BitVector$Suspend(x177);
      cur$tailLocal3 = s.underlying__Lscodec_bits_BitVector();
      continue
    };
    var x$2__lo = seen$tailLocal1__lo;
    var x$2__hi = seen$tailLocal1__hi;
    var t$1 = $thiz.Lscodec_bits_BitVector$Append__f_sizeLowerBound;
    var lo$6 = t$1.RTLong__f_lo;
    var hi$6 = t$1.RTLong__f_hi;
    var ahi$4 = x$2__hi;
    if (((ahi$4 === hi$6) ? (((-2147483648) ^ x$2__lo) > ((-2147483648) ^ lo$6)) : (ahi$4 > hi$6))) {
      var x$3__lo = x$2__lo;
      var x$3__hi = x$2__hi
    } else {
      var x$3__lo = lo$6;
      var x$3__hi = hi$6
    };
    $thiz.Lscodec_bits_BitVector$Append__f_sizeLowerBound = new $c_RTLong(x$3__lo, x$3__hi);
    var this$13 = cur$tailLocal3.size__J();
    var b$4__lo = n$tailLocal3__lo;
    var b$4__hi = n$tailLocal3__hi;
    var ahi$5 = this$13.RTLong__f_hi;
    var bhi$4 = b$4__hi;
    return ((ahi$5 === bhi$4) ? (((-2147483648) ^ this$13.RTLong__f_lo) < ((-2147483648) ^ b$4__lo)) : (ahi$5 < bhi$4))
  }
}
/** @constructor */
function $c_Lscodec_bits_BitVector$Append(left, right) {
  this.Lscodec_bits_BitVector__f_hashCode$lzy1 = 0;
  this.Lscodec_bits_BitVector__f_hashCodebitmap$1 = false;
  this.Lscodec_bits_BitVector$Append__f_left = null;
  this.Lscodec_bits_BitVector$Append__f_right = null;
  this.Lscodec_bits_BitVector$Append__f_knownSize = $L0;
  this.Lscodec_bits_BitVector$Append__f_sizeLowerBound = $L0;
  this.Lscodec_bits_BitVector$Append__f_left = left;
  this.Lscodec_bits_BitVector$Append__f_right = right;
  if (false) {
    var $$x1 = new $c_RTLong((-1), (-1))
  } else {
    var this$1 = left.size__J();
    var b = right.size__J();
    var alo = this$1.RTLong__f_lo;
    var ahi = this$1.RTLong__f_hi;
    var bhi = b.RTLong__f_hi;
    var lo = ((alo + b.RTLong__f_lo) | 0);
    var hi = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0));
    var $$x1 = new $c_RTLong(lo, hi)
  };
  this.Lscodec_bits_BitVector$Append__f_knownSize = $$x1;
  this.Lscodec_bits_BitVector$Append__f_sizeLowerBound = left.size__J()
}
$c_Lscodec_bits_BitVector$Append.prototype = new $h_Lscodec_bits_BitVector();
$c_Lscodec_bits_BitVector$Append.prototype.constructor = $c_Lscodec_bits_BitVector$Append;
/** @constructor */
function $h_Lscodec_bits_BitVector$Append() {
  /*<skip>*/
}
$h_Lscodec_bits_BitVector$Append.prototype = $c_Lscodec_bits_BitVector$Append.prototype;
$c_Lscodec_bits_BitVector$Append.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this)
});
$c_Lscodec_bits_BitVector$Append.prototype.productArity__I = (function() {
  return 2
});
$c_Lscodec_bits_BitVector$Append.prototype.productPrefix__T = (function() {
  return "Append"
});
$c_Lscodec_bits_BitVector$Append.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lscodec_bits_BitVector$Append__f_left
  };
  if ((n === 1)) {
    return this.Lscodec_bits_BitVector$Append__f_right
  };
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lscodec_bits_BitVector$Append.prototype.get__J__Z = (function(n) {
  var b = this.Lscodec_bits_BitVector$Append__f_left.size__J();
  var ahi = n.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  if (((ahi === bhi) ? (((-2147483648) ^ n.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))) {
    return this.Lscodec_bits_BitVector$Append__f_left.get__J__Z(n)
  } else {
    var $$x1 = this.Lscodec_bits_BitVector$Append__f_right;
    var b$1 = this.Lscodec_bits_BitVector$Append__f_left.size__J();
    var alo = n.RTLong__f_lo;
    var ahi$1 = n.RTLong__f_hi;
    var bhi$1 = b$1.RTLong__f_hi;
    var lo = ((alo - b$1.RTLong__f_lo) | 0);
    var hi = ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi$1 - bhi$1) | 0)) | 0) : ((ahi$1 - bhi$1) | 0));
    return $$x1.get__J__Z(new $c_RTLong(lo, hi))
  }
});
$c_Lscodec_bits_BitVector$Append.prototype.align__Lscodec_bits_BitVector$Bytes = (function() {
  return this.Lscodec_bits_BitVector$Append__f_left.align__Lscodec_bits_BitVector$Bytes().combine__Lscodec_bits_BitVector$Bytes__Lscodec_bits_BitVector$Bytes(this.Lscodec_bits_BitVector$Append__f_right.align__Lscodec_bits_BitVector$Bytes())
});
$c_Lscodec_bits_BitVector$Append.prototype.size__J = (function() {
  var this$1 = this.Lscodec_bits_BitVector$Append__f_knownSize;
  if ((!((this$1.RTLong__f_lo === (-1)) && (this$1.RTLong__f_hi === (-1))))) {
    return this.Lscodec_bits_BitVector$Append__f_knownSize
  } else {
    $m_s_package$();
    var elems = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscodec_bits_BitVector.getArrayOf().constr)([this.Lscodec_bits_BitVector$Append__f_left, this.Lscodec_bits_BitVector$Append__f_right]));
    var t = $p_Lscodec_bits_BitVector$Append__go$10__sci_List__J__J(this, $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems), $L0);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    this.Lscodec_bits_BitVector$Append__f_knownSize = new $c_RTLong(lo, hi);
    return new $c_RTLong(lo, hi)
  }
});
$c_Lscodec_bits_BitVector$Append.prototype.take__J__Lscodec_bits_BitVector = (function(n) {
  var ahi = n.RTLong__f_hi;
  if ((ahi < 0)) {
    var t = $L0
  } else {
    var t = n
  };
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  if (((lo === 0) && (hi === 0))) {
    return $m_Lscodec_bits_BitVector$().Lscodec_bits_BitVector$__f_empty
  } else {
    var b = this.Lscodec_bits_BitVector$Append__f_left.size__J();
    var bhi = b.RTLong__f_hi;
    if (((hi === bhi) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (hi < bhi))) {
      return this.Lscodec_bits_BitVector$Append__f_left.take__J__Lscodec_bits_BitVector(new $c_RTLong(lo, hi))
    } else {
      var $$x2 = this.Lscodec_bits_BitVector$Append__f_left;
      var $$x1 = this.Lscodec_bits_BitVector$Append__f_right;
      var b$1 = this.Lscodec_bits_BitVector$Append__f_left.size__J();
      var bhi$1 = b$1.RTLong__f_hi;
      var lo$1 = ((lo - b$1.RTLong__f_lo) | 0);
      var hi$1 = ((((-2147483648) ^ lo$1) > ((-2147483648) ^ lo)) ? (((-1) + ((hi - bhi$1) | 0)) | 0) : ((hi - bhi$1) | 0));
      return $p_Lscodec_bits_BitVector$Append__go$11__Lscodec_bits_BitVector__Lscodec_bits_BitVector__J__Lscodec_bits_BitVector(this, $$x2, $$x1, new $c_RTLong(lo$1, hi$1))
    }
  }
});
$c_Lscodec_bits_BitVector$Append.prototype.drop__J__Lscodec_bits_BitVector = (function(n) {
  var ahi = n.RTLong__f_hi;
  if ((ahi < 0)) {
    var t = $L0
  } else {
    var t = n
  };
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  if (((lo === 0) && (hi === 0))) {
    return this
  } else {
    var b = this.Lscodec_bits_BitVector$Append__f_left.size__J();
    var bhi = b.RTLong__f_hi;
    if (((hi === bhi) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (hi > bhi))) {
      var $$x1 = this.Lscodec_bits_BitVector$Append__f_right;
      var b$1 = this.Lscodec_bits_BitVector$Append__f_left.size__J();
      var bhi$1 = b$1.RTLong__f_hi;
      var lo$1 = ((lo - b$1.RTLong__f_lo) | 0);
      var hi$1 = ((((-2147483648) ^ lo$1) > ((-2147483648) ^ lo)) ? (((-1) + ((hi - bhi$1) | 0)) | 0) : ((hi - bhi$1) | 0));
      return $p_Lscodec_bits_BitVector$Append__go$12__Lscodec_bits_BitVector__J__Lscodec_bits_BitVector(this, $$x1, new $c_RTLong(lo$1, hi$1))
    } else {
      var left = this.Lscodec_bits_BitVector$Append__f_left.drop__J__Lscodec_bits_BitVector(new $c_RTLong(lo, hi));
      var right = this.Lscodec_bits_BitVector$Append__f_right;
      return new $c_Lscodec_bits_BitVector$Append(left, right)
    }
  }
});
$c_Lscodec_bits_BitVector$Append.prototype.sizeLessThan__J__Z = (function(n) {
  var this$1 = this.Lscodec_bits_BitVector$Append__f_knownSize;
  if ((!((this$1.RTLong__f_lo === (-1)) && (this$1.RTLong__f_hi === (-1))))) {
    var this$2 = this.Lscodec_bits_BitVector$Append__f_knownSize;
    var ahi = this$2.RTLong__f_hi;
    var bhi = n.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this$2.RTLong__f_lo) < ((-2147483648) ^ n.RTLong__f_lo)) : (ahi < bhi))
  } else {
    var this$3 = this.Lscodec_bits_BitVector$Append__f_sizeLowerBound;
    var ahi$1 = this$3.RTLong__f_hi;
    var bhi$1 = n.RTLong__f_hi;
    if ((!((ahi$1 === bhi$1) ? (((-2147483648) ^ this$3.RTLong__f_lo) >= ((-2147483648) ^ n.RTLong__f_lo)) : (ahi$1 > bhi$1)))) {
      return $p_Lscodec_bits_BitVector$Append__go$13__Lscodec_bits_BitVector__J__J__Z(this, this, n, $L0)
    } else {
      return false
    }
  }
});
function $as_Lscodec_bits_BitVector$Append(obj) {
  return (((obj instanceof $c_Lscodec_bits_BitVector$Append) || (obj === null)) ? obj : $throwClassCastException(obj, "scodec.bits.BitVector$Append"))
}
function $isArrayOf_Lscodec_bits_BitVector$Append(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscodec_bits_BitVector$Append)))
}
function $asArrayOf_Lscodec_bits_BitVector$Append(obj, depth) {
  return (($isArrayOf_Lscodec_bits_BitVector$Append(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscodec.bits.BitVector$Append;", depth))
}
var $d_Lscodec_bits_BitVector$Append = new $TypeData().initClass({
  Lscodec_bits_BitVector$Append: 0
}, false, "scodec.bits.BitVector$Append", {
  Lscodec_bits_BitVector$Append: 1,
  Lscodec_bits_BitVector: 1,
  O: 1,
  Lscodec_bits_BitwiseOperations: 1,
  Lscodec_bits_BitVectorCrossPlatform: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1,
  s_Product: 1
});
$c_Lscodec_bits_BitVector$Append.prototype.$classData = $d_Lscodec_bits_BitVector$Append;
function $p_Lscodec_bits_BitVector$Bytes__invalidBits__J($thiz) {
  var b = $m_Lscodec_bits_BitVector$().scodec$bits$BitVector$$$validBitsInLastByte__J__J($thiz.Lscodec_bits_BitVector$Bytes__f_size);
  var bhi = b.RTLong__f_hi;
  var lo = ((8 - b.RTLong__f_lo) | 0);
  var hi = ((((-2147483648) ^ lo) > (-2147483640)) ? (((-1) - bhi) | 0) : ((-bhi) | 0));
  return new $c_RTLong(lo, hi)
}
/** @constructor */
function $c_Lscodec_bits_BitVector$Bytes(underlying, size) {
  this.Lscodec_bits_BitVector__f_hashCode$lzy1 = 0;
  this.Lscodec_bits_BitVector__f_hashCodebitmap$1 = false;
  this.Lscodec_bits_BitVector$Bytes__f_underlying = null;
  this.Lscodec_bits_BitVector$Bytes__f_size = $L0;
  this.Lscodec_bits_BitVector$Bytes__f_underlying = underlying;
  this.Lscodec_bits_BitVector$Bytes__f_size = size
}
$c_Lscodec_bits_BitVector$Bytes.prototype = new $h_Lscodec_bits_BitVector();
$c_Lscodec_bits_BitVector$Bytes.prototype.constructor = $c_Lscodec_bits_BitVector$Bytes;
/** @constructor */
function $h_Lscodec_bits_BitVector$Bytes() {
  /*<skip>*/
}
$h_Lscodec_bits_BitVector$Bytes.prototype = $c_Lscodec_bits_BitVector$Bytes.prototype;
$c_Lscodec_bits_BitVector$Bytes.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this)
});
$c_Lscodec_bits_BitVector$Bytes.prototype.productArity__I = (function() {
  return 2
});
$c_Lscodec_bits_BitVector$Bytes.prototype.productPrefix__T = (function() {
  return "Bytes"
});
$c_Lscodec_bits_BitVector$Bytes.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lscodec_bits_BitVector$Bytes__f_underlying
  };
  if ((n === 1)) {
    return this.Lscodec_bits_BitVector$Bytes__f_size
  };
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lscodec_bits_BitVector$Bytes.prototype.size__J = (function() {
  return this.Lscodec_bits_BitVector$Bytes__f_size
});
$c_Lscodec_bits_BitVector$Bytes.prototype.align__Lscodec_bits_BitVector$Bytes = (function() {
  return this
});
$c_Lscodec_bits_BitVector$Bytes.prototype.sizeLessThan__J__Z = (function(n) {
  var this$1 = this.Lscodec_bits_BitVector$Bytes__f_size;
  var ahi = this$1.RTLong__f_hi;
  var bhi = n.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this$1.RTLong__f_lo) < ((-2147483648) ^ n.RTLong__f_lo)) : (ahi < bhi))
});
$c_Lscodec_bits_BitVector$Bytes.prototype.take__J__Lscodec_bits_BitVector$Bytes = (function(n) {
  var $$x2 = $m_Lscodec_bits_BitVector$();
  var $$x1 = this.Lscodec_bits_BitVector$Bytes__f_underlying;
  var t = this.Lscodec_bits_BitVector$Bytes__f_size;
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var bhi = n.RTLong__f_hi;
  if (((hi === bhi) ? (((-2147483648) ^ lo) < ((-2147483648) ^ n.RTLong__f_lo)) : (hi < bhi))) {
    var t$1 = new $c_RTLong(lo, hi)
  } else {
    var t$1 = n
  };
  var lo$1 = t$1.RTLong__f_lo;
  var hi$1 = t$1.RTLong__f_hi;
  return $$x2.toBytes__Lscodec_bits_ByteVector__J__Lscodec_bits_BitVector$Bytes($$x1, ((hi$1 < 0) ? $L0 : new $c_RTLong(lo$1, hi$1)))
});
$c_Lscodec_bits_BitVector$Bytes.prototype.drop__J__Lscodec_bits_BitVector = (function(n) {
  var b = this.Lscodec_bits_BitVector$Bytes__f_size;
  var ahi = n.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  if (((ahi === bhi) ? (((-2147483648) ^ n.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))) {
    return $m_Lscodec_bits_BitVector$().Lscodec_bits_BitVector$__f_empty
  } else {
    var ahi$1 = n.RTLong__f_hi;
    if (((ahi$1 === 0) ? (n.RTLong__f_lo === 0) : (ahi$1 < 0))) {
      return this
    } else {
      var this$1 = $m_RTLong$();
      var lo = this$1.remainderImpl__I__I__I__I__I(n.RTLong__f_lo, n.RTLong__f_hi, 8, 0);
      var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      if (((lo === 0) && (hi === 0))) {
        var $$x2 = this.Lscodec_bits_BitVector$Bytes__f_underlying;
        var this$2 = $m_RTLong$();
        var lo$1 = this$2.divideImpl__I__I__I__I__I(n.RTLong__f_lo, n.RTLong__f_hi, 8, 0);
        var hi$1 = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        var underlying = $$x2.drop__J__Lscodec_bits_ByteVector(new $c_RTLong(lo$1, hi$1));
        var this$3 = this.Lscodec_bits_BitVector$Bytes__f_size;
        var alo = this$3.RTLong__f_lo;
        var ahi$2 = this$3.RTLong__f_hi;
        var bhi$1 = n.RTLong__f_hi;
        var lo$2 = ((alo - n.RTLong__f_lo) | 0);
        var hi$2 = ((((-2147483648) ^ lo$2) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi$2 - bhi$1) | 0)) | 0) : ((ahi$2 - bhi$1) | 0));
        var $$x1 = new $c_Lscodec_bits_BitVector$Bytes(underlying, new $c_RTLong(lo$2, hi$2))
      } else {
        var $$x1 = new $c_Lscodec_bits_BitVector$Drop(this, n)
      };
      return $as_Lscodec_bits_BitVector($$x1)
    }
  }
});
$c_Lscodec_bits_BitVector$Bytes.prototype.get__J__Z = (function(n) {
  this.checkBounds__J__V(n);
  var $$x2 = $m_Lscodec_bits_BitVector$();
  var this$2 = this.Lscodec_bits_BitVector$Bytes__f_underlying;
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(n.RTLong__f_lo, n.RTLong__f_hi, 8, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var $$x1 = this$2.get__J__B(new $c_RTLong(lo, hi));
  var this$3 = $m_RTLong$();
  var lo$1 = this$3.remainderImpl__I__I__I__I__I(n.RTLong__f_lo, n.RTLong__f_hi, 8, 0);
  return $$x2.scodec$bits$BitVector$$$getBit__B__I__Z($$x1, lo$1)
});
$c_Lscodec_bits_BitVector$Bytes.prototype.combine__Lscodec_bits_BitVector$Bytes__Lscodec_bits_BitVector$Bytes = (function(other) {
  var t = $p_Lscodec_bits_BitVector$Bytes__invalidBits__J(this);
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var otherBytes = other.Lscodec_bits_BitVector$Bytes__f_underlying;
  if (this.sizeLessThan__J__Z(new $c_RTLong(1, 0))) {
    return other
  } else if (otherBytes.isEmpty__Z()) {
    return this
  } else if (((lo === 0) && (hi === 0))) {
    var $$x2 = $m_Lscodec_bits_BitVector$();
    var $$x1 = this.Lscodec_bits_BitVector$Bytes__f_underlying.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector(otherBytes);
    var this$1 = this.Lscodec_bits_BitVector$Bytes__f_size;
    var b = other.Lscodec_bits_BitVector$Bytes__f_size;
    var alo = this$1.RTLong__f_lo;
    var ahi = this$1.RTLong__f_hi;
    var bhi = b.RTLong__f_hi;
    var lo$1 = ((alo + b.RTLong__f_lo) | 0);
    var hi$1 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0));
    return $$x2.toBytes__Lscodec_bits_ByteVector__J__Lscodec_bits_BitVector$Bytes($$x1, new $c_RTLong(lo$1, hi$1))
  } else {
    var bytesCleared = $m_Lscodec_bits_BitVector$().scodec$bits$BitVector$$$clearUnneededBits__J__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector(this.Lscodec_bits_BitVector$Bytes__f_size, this.Lscodec_bits_BitVector$Bytes__f_underlying);
    var b$1 = bytesCleared.size__J();
    var bhi$1 = b$1.RTLong__f_hi;
    var lo$2 = (((-1) + b$1.RTLong__f_lo) | 0);
    var hi$2 = ((lo$2 !== (-1)) ? bhi$1 : (((-1) + bhi$1) | 0));
    var hi$3 = bytesCleared.get__J__B(new $c_RTLong(lo$2, hi$2));
    var $$x4 = otherBytes.get__J__B($L0);
    var $$x3 = $m_Lscodec_bits_BitVector$().scodec$bits$BitVector$$$topNBits__I__B(lo);
    var this$4 = $m_Lscodec_bits_BitVector$().scodec$bits$BitVector$$$validBitsInLastByte__J__J(this.Lscodec_bits_BitVector$Bytes__f_size);
    var lo$3 = (((((255 & ($$x4 & $$x3)) >>> this$4.RTLong__f_lo) | 0) << 24) >> 24);
    var b$2 = bytesCleared.size__J();
    var bhi$2 = b$2.RTLong__f_hi;
    var lo$4 = (((-1) + b$2.RTLong__f_lo) | 0);
    var hi$4 = ((lo$4 !== (-1)) ? bhi$2 : (((-1) + bhi$2) | 0));
    var updatedOurBytes = bytesCleared.update__J__B__Lscodec_bits_ByteVector(new $c_RTLong(lo$4, hi$4), (((hi$3 | lo$3) << 24) >> 24));
    var updatedOtherBytes = other.drop__J__Lscodec_bits_BitVector(new $c_RTLong(lo, hi)).toByteVector__Lscodec_bits_ByteVector();
    var $$x6 = $m_Lscodec_bits_BitVector$();
    var $$x5 = updatedOurBytes.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector(updatedOtherBytes);
    var this$6 = this.Lscodec_bits_BitVector$Bytes__f_size;
    var b$3 = other.Lscodec_bits_BitVector$Bytes__f_size;
    var alo$1 = this$6.RTLong__f_lo;
    var ahi$1 = this$6.RTLong__f_hi;
    var bhi$3 = b$3.RTLong__f_hi;
    var lo$5 = ((alo$1 + b$3.RTLong__f_lo) | 0);
    var hi$5 = ((((-2147483648) ^ lo$5) < ((-2147483648) ^ alo$1)) ? ((1 + ((ahi$1 + bhi$3) | 0)) | 0) : ((ahi$1 + bhi$3) | 0));
    return $$x6.toBytes__Lscodec_bits_ByteVector__J__Lscodec_bits_BitVector$Bytes($$x5, new $c_RTLong(lo$5, hi$5))
  }
});
$c_Lscodec_bits_BitVector$Bytes.prototype.take__J__Lscodec_bits_BitVector = (function(n) {
  return this.take__J__Lscodec_bits_BitVector$Bytes(n)
});
function $as_Lscodec_bits_BitVector$Bytes(obj) {
  return (((obj instanceof $c_Lscodec_bits_BitVector$Bytes) || (obj === null)) ? obj : $throwClassCastException(obj, "scodec.bits.BitVector$Bytes"))
}
function $isArrayOf_Lscodec_bits_BitVector$Bytes(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscodec_bits_BitVector$Bytes)))
}
function $asArrayOf_Lscodec_bits_BitVector$Bytes(obj, depth) {
  return (($isArrayOf_Lscodec_bits_BitVector$Bytes(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscodec.bits.BitVector$Bytes;", depth))
}
var $d_Lscodec_bits_BitVector$Bytes = new $TypeData().initClass({
  Lscodec_bits_BitVector$Bytes: 0
}, false, "scodec.bits.BitVector$Bytes", {
  Lscodec_bits_BitVector$Bytes: 1,
  Lscodec_bits_BitVector: 1,
  O: 1,
  Lscodec_bits_BitwiseOperations: 1,
  Lscodec_bits_BitVectorCrossPlatform: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1,
  s_Product: 1
});
$c_Lscodec_bits_BitVector$Bytes.prototype.$classData = $d_Lscodec_bits_BitVector$Bytes;
function $p_Lscodec_bits_BitVector$Chunks__go$14__Lscodec_bits_BitVector$Append__Lscodec_bits_BitVector__Lscodec_bits_BitVector($thiz, chunks, last) {
  var last$tailLocal1 = last;
  var chunks$tailLocal1 = chunks;
  while (true) {
    var t = last$tailLocal1.size__J();
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var b = chunks$tailLocal1.size__J();
    var bhi = b.RTLong__f_hi;
    if (((hi === bhi) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (hi > bhi))) {
      var $$x1 = true
    } else {
      var lo$1 = (lo << 1);
      var hi$1 = (((lo >>> 31) | 0) | (hi << 1));
      var b$1 = chunks$tailLocal1.Lscodec_bits_BitVector$Append__f_right.size__J();
      var bhi$1 = b$1.RTLong__f_hi;
      var $$x1 = ((hi$1 === bhi$1) ? (((-2147483648) ^ lo$1) <= ((-2147483648) ^ b$1.RTLong__f_lo)) : (hi$1 < bhi$1))
    };
    if ($$x1) {
      var left = chunks$tailLocal1;
      var right = last$tailLocal1;
      var chunks$1 = new $c_Lscodec_bits_BitVector$Append(left, right);
      return new $c_Lscodec_bits_BitVector$Chunks(chunks$1)
    } else {
      var x187 = chunks$tailLocal1.Lscodec_bits_BitVector$Append__f_left;
      if ((x187 instanceof $c_Lscodec_bits_BitVector$Append)) {
        var left$1 = $as_Lscodec_bits_BitVector$Append(x187);
        var t$1 = chunks$tailLocal1.Lscodec_bits_BitVector$Append__f_right.size__J();
        var lo$2 = t$1.RTLong__f_lo;
        var hi$2 = t$1.RTLong__f_hi;
        var this$3 = $m_RTLong$();
        var lo$3 = this$3.remainderImpl__I__I__I__I__I(lo, hi, 8, 0);
        var hi$3 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        var this$4 = $m_RTLong$();
        var lo$4 = this$4.remainderImpl__I__I__I__I__I(lo$2, hi$2, 8, 0);
        var hi$4 = this$4.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        var lo$5 = ((lo$3 + lo$4) | 0);
        var hi$5 = ((((-2147483648) ^ lo$5) < ((-2147483648) ^ lo$3)) ? ((1 + ((hi$3 + hi$4) | 0)) | 0) : ((hi$3 + hi$4) | 0));
        var aligned = ((lo$5 === 0) && (hi$5 === 0));
        if ((((hi$2 === 0) ? (((-2147483648) ^ lo$2) <= (-2147483392)) : (hi$2 < 0)) && aligned)) {
          var last$tailLocal1$tmp1 = chunks$tailLocal1.Lscodec_bits_BitVector$Append__f_right.align__Lscodec_bits_BitVector$Bytes().combine__Lscodec_bits_BitVector$Bytes__Lscodec_bits_BitVector$Bytes(last$tailLocal1.align__Lscodec_bits_BitVector$Bytes());
          chunks$tailLocal1 = left$1;
          last$tailLocal1 = last$tailLocal1$tmp1;
          continue
        } else {
          var left$2 = chunks$tailLocal1.Lscodec_bits_BitVector$Append__f_right;
          var right$1 = last$tailLocal1;
          var last$tailLocal1$tmp2 = new $c_Lscodec_bits_BitVector$Append(left$2, right$1);
          chunks$tailLocal1 = left$1;
          last$tailLocal1 = last$tailLocal1$tmp2;
          continue
        }
      };
      var left$3 = chunks$tailLocal1;
      var right$2 = last$tailLocal1;
      var chunks$2 = new $c_Lscodec_bits_BitVector$Append(left$3, right$2);
      return new $c_Lscodec_bits_BitVector$Chunks(chunks$2)
    }
  }
}
/** @constructor */
function $c_Lscodec_bits_BitVector$Chunks(chunks) {
  this.Lscodec_bits_BitVector__f_hashCode$lzy1 = 0;
  this.Lscodec_bits_BitVector__f_hashCodebitmap$1 = false;
  this.Lscodec_bits_BitVector$Chunks__f_chunks = null;
  this.Lscodec_bits_BitVector$Chunks__f_chunks = chunks
}
$c_Lscodec_bits_BitVector$Chunks.prototype = new $h_Lscodec_bits_BitVector();
$c_Lscodec_bits_BitVector$Chunks.prototype.constructor = $c_Lscodec_bits_BitVector$Chunks;
/** @constructor */
function $h_Lscodec_bits_BitVector$Chunks() {
  /*<skip>*/
}
$h_Lscodec_bits_BitVector$Chunks.prototype = $c_Lscodec_bits_BitVector$Chunks.prototype;
$c_Lscodec_bits_BitVector$Chunks.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this)
});
$c_Lscodec_bits_BitVector$Chunks.prototype.productArity__I = (function() {
  return 1
});
$c_Lscodec_bits_BitVector$Chunks.prototype.productPrefix__T = (function() {
  return "Chunks"
});
$c_Lscodec_bits_BitVector$Chunks.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lscodec_bits_BitVector$Chunks__f_chunks
  };
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lscodec_bits_BitVector$Chunks.prototype.unchunk__Lscodec_bits_BitVector = (function() {
  var left = this.Lscodec_bits_BitVector$Chunks__f_chunks.Lscodec_bits_BitVector$Append__f_left;
  var right = this.Lscodec_bits_BitVector$Chunks__f_chunks.Lscodec_bits_BitVector$Append__f_right.unchunk__Lscodec_bits_BitVector();
  return new $c_Lscodec_bits_BitVector$Append(left, right)
});
$c_Lscodec_bits_BitVector$Chunks.prototype.align__Lscodec_bits_BitVector$Bytes = (function() {
  return this.Lscodec_bits_BitVector$Chunks__f_chunks.align__Lscodec_bits_BitVector$Bytes()
});
$c_Lscodec_bits_BitVector$Chunks.prototype.take__J__Lscodec_bits_BitVector = (function(n) {
  return this.Lscodec_bits_BitVector$Chunks__f_chunks.take__J__Lscodec_bits_BitVector(n)
});
$c_Lscodec_bits_BitVector$Chunks.prototype.drop__J__Lscodec_bits_BitVector = (function(n) {
  return this.Lscodec_bits_BitVector$Chunks__f_chunks.drop__J__Lscodec_bits_BitVector(n)
});
$c_Lscodec_bits_BitVector$Chunks.prototype.$plus$plus__Lscodec_bits_BitVector__Lscodec_bits_BitVector = (function(b) {
  return (b.sizeLessThan__J__Z(new $c_RTLong(1, 0)) ? this : (this.Lscodec_bits_BitVector$Chunks__f_chunks.sizeLessThan__J__Z(new $c_RTLong(1, 0)) ? b : $p_Lscodec_bits_BitVector$Chunks__go$14__Lscodec_bits_BitVector$Append__Lscodec_bits_BitVector__Lscodec_bits_BitVector(this, this.Lscodec_bits_BitVector$Chunks__f_chunks, b.unchunk__Lscodec_bits_BitVector())))
});
$c_Lscodec_bits_BitVector$Chunks.prototype.size__J = (function() {
  return this.Lscodec_bits_BitVector$Chunks__f_chunks.size__J()
});
$c_Lscodec_bits_BitVector$Chunks.prototype.sizeLessThan__J__Z = (function(n) {
  return this.Lscodec_bits_BitVector$Chunks__f_chunks.sizeLessThan__J__Z(n)
});
$c_Lscodec_bits_BitVector$Chunks.prototype.get__J__Z = (function(n) {
  return this.Lscodec_bits_BitVector$Chunks__f_chunks.get__J__Z(n)
});
function $as_Lscodec_bits_BitVector$Chunks(obj) {
  return (((obj instanceof $c_Lscodec_bits_BitVector$Chunks) || (obj === null)) ? obj : $throwClassCastException(obj, "scodec.bits.BitVector$Chunks"))
}
function $isArrayOf_Lscodec_bits_BitVector$Chunks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscodec_bits_BitVector$Chunks)))
}
function $asArrayOf_Lscodec_bits_BitVector$Chunks(obj, depth) {
  return (($isArrayOf_Lscodec_bits_BitVector$Chunks(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscodec.bits.BitVector$Chunks;", depth))
}
var $d_Lscodec_bits_BitVector$Chunks = new $TypeData().initClass({
  Lscodec_bits_BitVector$Chunks: 0
}, false, "scodec.bits.BitVector$Chunks", {
  Lscodec_bits_BitVector$Chunks: 1,
  Lscodec_bits_BitVector: 1,
  O: 1,
  Lscodec_bits_BitwiseOperations: 1,
  Lscodec_bits_BitVectorCrossPlatform: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1,
  s_Product: 1
});
$c_Lscodec_bits_BitVector$Chunks.prototype.$classData = $d_Lscodec_bits_BitVector$Chunks;
/** @constructor */
function $c_Lscodec_bits_BitVector$Drop(underlying, m) {
  this.Lscodec_bits_BitVector__f_hashCode$lzy1 = 0;
  this.Lscodec_bits_BitVector__f_hashCodebitmap$1 = false;
  this.Lscodec_bits_BitVector$Drop__f_underlying = null;
  this.Lscodec_bits_BitVector$Drop__f_m = $L0;
  this.Lscodec_bits_BitVector$Drop__f_underlying = underlying;
  this.Lscodec_bits_BitVector$Drop__f_m = m
}
$c_Lscodec_bits_BitVector$Drop.prototype = new $h_Lscodec_bits_BitVector();
$c_Lscodec_bits_BitVector$Drop.prototype.constructor = $c_Lscodec_bits_BitVector$Drop;
/** @constructor */
function $h_Lscodec_bits_BitVector$Drop() {
  /*<skip>*/
}
$h_Lscodec_bits_BitVector$Drop.prototype = $c_Lscodec_bits_BitVector$Drop.prototype;
$c_Lscodec_bits_BitVector$Drop.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this)
});
$c_Lscodec_bits_BitVector$Drop.prototype.productArity__I = (function() {
  return 2
});
$c_Lscodec_bits_BitVector$Drop.prototype.productPrefix__T = (function() {
  return "Drop"
});
$c_Lscodec_bits_BitVector$Drop.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lscodec_bits_BitVector$Drop__f_underlying
  };
  if ((n === 1)) {
    return this.Lscodec_bits_BitVector$Drop__f_m
  };
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lscodec_bits_BitVector$Drop.prototype.size__J = (function() {
  var this$1 = this.Lscodec_bits_BitVector$Drop__f_underlying.Lscodec_bits_BitVector$Bytes__f_size;
  var b = this.Lscodec_bits_BitVector$Drop__f_m;
  var alo = this$1.RTLong__f_lo;
  var ahi = this$1.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo - b.RTLong__f_lo) | 0);
  var hi = ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0));
  return ((hi < 0) ? $L0 : new $c_RTLong(lo, hi))
});
$c_Lscodec_bits_BitVector$Drop.prototype.sizeLessThan__J__Z = (function(n) {
  var this$1 = this.size__J();
  var ahi = this$1.RTLong__f_hi;
  var bhi = n.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this$1.RTLong__f_lo) < ((-2147483648) ^ n.RTLong__f_lo)) : (ahi < bhi))
});
$c_Lscodec_bits_BitVector$Drop.prototype.align__Lscodec_bits_BitVector$Bytes = (function() {
  return this.interpretDrop__Lscodec_bits_BitVector$Bytes()
});
$c_Lscodec_bits_BitVector$Drop.prototype.drop__J__Lscodec_bits_BitVector = (function(n) {
  var b = this.size__J();
  var ahi = n.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  if (((ahi === bhi) ? (((-2147483648) ^ n.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))) {
    return $m_Lscodec_bits_BitVector$().Lscodec_bits_BitVector$__f_empty
  } else {
    var ahi$1 = n.RTLong__f_hi;
    if (((ahi$1 === 0) ? (n.RTLong__f_lo === 0) : (ahi$1 < 0))) {
      return this
    } else {
      var b$1 = this.Lscodec_bits_BitVector$Drop__f_m;
      var alo = n.RTLong__f_lo;
      var ahi$2 = n.RTLong__f_hi;
      var bhi$1 = b$1.RTLong__f_hi;
      var lo = ((alo + b$1.RTLong__f_lo) | 0);
      var hi = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi$2 + bhi$1) | 0)) | 0) : ((ahi$2 + bhi$1) | 0));
      var underlying = this.Lscodec_bits_BitVector$Drop__f_underlying;
      var d = new $c_Lscodec_bits_BitVector$Drop(underlying, new $c_RTLong(lo, hi));
      if (((hi === 0) ? (((-2147483648) ^ lo) > (-2147450880)) : (hi > 0))) {
        var this$3 = $m_RTLong$();
        var lo$1 = this$3.remainderImpl__I__I__I__I__I(lo, hi, 8, 0);
        var hi$1 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        var $$x1 = ((lo$1 === 0) && (hi$1 === 0))
      } else {
        var $$x1 = false
      };
      return $as_Lscodec_bits_BitVector(($$x1 ? d.interpretDrop__Lscodec_bits_BitVector$Bytes() : d))
    }
  }
});
$c_Lscodec_bits_BitVector$Drop.prototype.take__J__Lscodec_bits_BitVector = (function(n) {
  var b = this.size__J();
  var ahi = n.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  if (((ahi === bhi) ? (((-2147483648) ^ n.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))) {
    return this
  } else {
    var ahi$1 = n.RTLong__f_hi;
    if (((ahi$1 === 0) ? (n.RTLong__f_lo === 0) : (ahi$1 < 0))) {
      return $m_Lscodec_bits_BitVector$().Lscodec_bits_BitVector$__f_empty
    } else {
      var $$x1 = this.Lscodec_bits_BitVector$Drop__f_underlying;
      var this$1 = this.Lscodec_bits_BitVector$Drop__f_m;
      var alo = this$1.RTLong__f_lo;
      var ahi$2 = this$1.RTLong__f_hi;
      var bhi$1 = n.RTLong__f_hi;
      var lo = ((alo + n.RTLong__f_lo) | 0);
      var hi = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi$2 + bhi$1) | 0)) | 0) : ((ahi$2 + bhi$1) | 0));
      return $$x1.take__J__Lscodec_bits_BitVector$Bytes(new $c_RTLong(lo, hi)).drop__J__Lscodec_bits_BitVector(this.Lscodec_bits_BitVector$Drop__f_m)
    }
  }
});
$c_Lscodec_bits_BitVector$Drop.prototype.get__J__Z = (function(n) {
  var $$x1 = this.Lscodec_bits_BitVector$Drop__f_underlying;
  var this$1 = this.Lscodec_bits_BitVector$Drop__f_m;
  var alo = this$1.RTLong__f_lo;
  var ahi = this$1.RTLong__f_hi;
  var bhi = n.RTLong__f_hi;
  var lo = ((alo + n.RTLong__f_lo) | 0);
  var hi = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0));
  return $$x1.get__J__Z(new $c_RTLong(lo, hi))
});
$c_Lscodec_bits_BitVector$Drop.prototype.interpretDrop__Lscodec_bits_BitVector$Bytes = (function() {
  var t = this.Lscodec_bits_BitVector$Drop__f_m;
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var t$1 = (((hi === 0) ? (lo !== 0) : (hi > 0)) ? new $c_RTLong(lo, hi) : $L0);
  var lo$1 = t$1.RTLong__f_lo;
  var hi$1 = t$1.RTLong__f_hi;
  var t$2 = this.size__J();
  var lo$2 = t$2.RTLong__f_lo;
  var hi$2 = t$2.RTLong__f_hi;
  if (((lo$2 === 0) && (hi$2 === 0))) {
    return $m_Lscodec_bits_BitVector$().Lscodec_bits_BitVector$__f_empty.align__Lscodec_bits_BitVector$Bytes()
  } else {
    var this$5 = $m_RTLong$();
    var lo$3 = this$5.divideImpl__I__I__I__I__I(lo$1, hi$1, 8, 0);
    var hi$3 = this$5.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var $$x2 = this.Lscodec_bits_BitVector$Drop__f_underlying.Lscodec_bits_BitVector$Bytes__f_underlying;
    var $$x1 = new $c_RTLong(lo$3, hi$3);
    var b = $m_Lscodec_bits_BitVector$().scodec$bits$BitVector$$$bytesNeededForBits__J__J(new $c_RTLong(lo$2, hi$2));
    var bhi = b.RTLong__f_hi;
    var lo$4 = ((lo$3 + b.RTLong__f_lo) | 0);
    var hi$4 = ((((-2147483648) ^ lo$4) < ((-2147483648) ^ lo$3)) ? ((1 + ((hi$3 + bhi) | 0)) | 0) : ((hi$3 + bhi) | 0));
    var lo$5 = ((1 + lo$4) | 0);
    var hi$5 = ((lo$5 === 0) ? ((1 + hi$4) | 0) : hi$4);
    var shiftedByWholeBytes = $$x2.slice__J__J__Lscodec_bits_ByteVector($$x1, new $c_RTLong(lo$5, hi$5));
    var this$8 = $m_RTLong$();
    var lo$6 = this$8.remainderImpl__I__I__I__I__I(lo$1, hi$1, 8, 0);
    var newBytes = ((lo$6 === 0) ? shiftedByWholeBytes : shiftedByWholeBytes.zipWithI__Lscodec_bits_ByteVector__F2__Lscodec_bits_ByteVector(shiftedByWholeBytes.drop__J__Lscodec_bits_ByteVector(new $c_RTLong(1, 0)).$colon$plus__B__Lscodec_bits_ByteVector(0), new $c_sjsr_AnonFunction2(((x$1, x$2) => {
      var x$1$1 = $uB(x$1);
      var x$2$1 = $uB(x$2);
      var hi$7 = (x$1$1 << lo$6);
      var low = (((255 & (x$2$1 & $m_Lscodec_bits_BitVector$().scodec$bits$BitVector$$$topNBits__I__B(lo$6))) >>> ((8 - lo$6) | 0)) | 0);
      return (hi$7 | low)
    }))));
    var $$x3 = $m_Lscodec_bits_BitVector$();
    var b$1 = newBytes.size__J();
    var bhi$1 = b$1.RTLong__f_hi;
    var lo$7 = (((-1) + b$1.RTLong__f_lo) | 0);
    var hi$8 = ((lo$7 !== (-1)) ? bhi$1 : (((-1) + bhi$1) | 0));
    var lo$8 = (lo$7 << 3);
    var hi$9 = (((lo$7 >>> 29) | 0) | (hi$8 << 3));
    return $$x3.toBytes__Lscodec_bits_ByteVector__J__Lscodec_bits_BitVector$Bytes((((hi$2 === hi$9) ? (((-2147483648) ^ lo$2) <= ((-2147483648) ^ lo$8)) : (hi$2 < hi$9)) ? newBytes.dropRight__J__Lscodec_bits_ByteVector(new $c_RTLong(1, 0)) : newBytes), new $c_RTLong(lo$2, hi$2))
  }
});
function $as_Lscodec_bits_BitVector$Drop(obj) {
  return (((obj instanceof $c_Lscodec_bits_BitVector$Drop) || (obj === null)) ? obj : $throwClassCastException(obj, "scodec.bits.BitVector$Drop"))
}
function $isArrayOf_Lscodec_bits_BitVector$Drop(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscodec_bits_BitVector$Drop)))
}
function $asArrayOf_Lscodec_bits_BitVector$Drop(obj, depth) {
  return (($isArrayOf_Lscodec_bits_BitVector$Drop(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscodec.bits.BitVector$Drop;", depth))
}
var $d_Lscodec_bits_BitVector$Drop = new $TypeData().initClass({
  Lscodec_bits_BitVector$Drop: 0
}, false, "scodec.bits.BitVector$Drop", {
  Lscodec_bits_BitVector$Drop: 1,
  Lscodec_bits_BitVector: 1,
  O: 1,
  Lscodec_bits_BitwiseOperations: 1,
  Lscodec_bits_BitVectorCrossPlatform: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1,
  s_Product: 1
});
$c_Lscodec_bits_BitVector$Drop.prototype.$classData = $d_Lscodec_bits_BitVector$Drop;
function $as_Lscodec_bits_BitVector$Suspend(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scodec.bits.BitVector$Suspend"))
}
function $isArrayOf_Lscodec_bits_BitVector$Suspend(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscodec_bits_BitVector$Suspend)))
}
function $asArrayOf_Lscodec_bits_BitVector$Suspend(obj, depth) {
  return (($isArrayOf_Lscodec_bits_BitVector$Suspend(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscodec.bits.BitVector$Suspend;", depth))
}
/** @constructor */
function $c_Lscodec_bits_ByteVector$Append(left, right) {
  this.Lscodec_bits_ByteVector__f_hashCode$lzy1 = 0;
  this.Lscodec_bits_ByteVector__f_hashCodebitmap$1 = false;
  this.Lscodec_bits_ByteVector$Append__f_left = null;
  this.Lscodec_bits_ByteVector$Append__f_right = null;
  this.Lscodec_bits_ByteVector$Append__f_size = $L0;
  this.Lscodec_bits_ByteVector$Append__f_left = left;
  this.Lscodec_bits_ByteVector$Append__f_right = right;
  var this$1 = left.size__J();
  var b = right.size__J();
  var alo = this$1.RTLong__f_lo;
  var ahi = this$1.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo + b.RTLong__f_lo) | 0);
  var hi = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0));
  this.Lscodec_bits_ByteVector$Append__f_size = new $c_RTLong(lo, hi)
}
$c_Lscodec_bits_ByteVector$Append.prototype = new $h_Lscodec_bits_ByteVector();
$c_Lscodec_bits_ByteVector$Append.prototype.constructor = $c_Lscodec_bits_ByteVector$Append;
/** @constructor */
function $h_Lscodec_bits_ByteVector$Append() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$Append.prototype = $c_Lscodec_bits_ByteVector$Append.prototype;
$c_Lscodec_bits_ByteVector$Append.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this)
});
$c_Lscodec_bits_ByteVector$Append.prototype.productArity__I = (function() {
  return 2
});
$c_Lscodec_bits_ByteVector$Append.prototype.productPrefix__T = (function() {
  return "Append"
});
$c_Lscodec_bits_ByteVector$Append.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lscodec_bits_ByteVector$Append__f_left
  };
  if ((n === 1)) {
    return this.Lscodec_bits_ByteVector$Append__f_right
  };
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lscodec_bits_ByteVector$Append.prototype.size__J = (function() {
  return this.Lscodec_bits_ByteVector$Append__f_size
});
$c_Lscodec_bits_ByteVector$Append.prototype.getImpl__J__B = (function(n) {
  var b = this.Lscodec_bits_ByteVector$Append__f_left.size__J();
  var ahi = n.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  if (((ahi === bhi) ? (((-2147483648) ^ n.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))) {
    return this.Lscodec_bits_ByteVector$Append__f_left.getImpl__J__B(n)
  } else {
    var $$x1 = this.Lscodec_bits_ByteVector$Append__f_right;
    var b$1 = this.Lscodec_bits_ByteVector$Append__f_left.size__J();
    var alo = n.RTLong__f_lo;
    var ahi$1 = n.RTLong__f_hi;
    var bhi$1 = b$1.RTLong__f_hi;
    var lo = ((alo - b$1.RTLong__f_lo) | 0);
    var hi = ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi$1 - bhi$1) | 0)) | 0) : ((ahi$1 - bhi$1) | 0));
    return $$x1.getImpl__J__B(new $c_RTLong(lo, hi))
  }
});
function $as_Lscodec_bits_ByteVector$Append(obj) {
  return (((obj instanceof $c_Lscodec_bits_ByteVector$Append) || (obj === null)) ? obj : $throwClassCastException(obj, "scodec.bits.ByteVector$Append"))
}
function $isArrayOf_Lscodec_bits_ByteVector$Append(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscodec_bits_ByteVector$Append)))
}
function $asArrayOf_Lscodec_bits_ByteVector$Append(obj, depth) {
  return (($isArrayOf_Lscodec_bits_ByteVector$Append(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscodec.bits.ByteVector$Append;", depth))
}
var $d_Lscodec_bits_ByteVector$Append = new $TypeData().initClass({
  Lscodec_bits_ByteVector$Append: 0
}, false, "scodec.bits.ByteVector$Append", {
  Lscodec_bits_ByteVector$Append: 1,
  Lscodec_bits_ByteVector: 1,
  O: 1,
  Lscodec_bits_ByteVectorCrossPlatform: 1,
  Lscodec_bits_BitwiseOperations: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1,
  s_Product: 1
});
$c_Lscodec_bits_ByteVector$Append.prototype.$classData = $d_Lscodec_bits_ByteVector$Append;
/** @constructor */
function $c_Lscodec_bits_ByteVector$Chunk(bytes) {
  this.Lscodec_bits_ByteVector__f_hashCode$lzy1 = 0;
  this.Lscodec_bits_ByteVector__f_hashCodebitmap$1 = false;
  this.Lscodec_bits_ByteVector$Chunk__f_bytes = null;
  this.Lscodec_bits_ByteVector$Chunk__f_bytes = bytes
}
$c_Lscodec_bits_ByteVector$Chunk.prototype = new $h_Lscodec_bits_ByteVector();
$c_Lscodec_bits_ByteVector$Chunk.prototype.constructor = $c_Lscodec_bits_ByteVector$Chunk;
/** @constructor */
function $h_Lscodec_bits_ByteVector$Chunk() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$Chunk.prototype = $c_Lscodec_bits_ByteVector$Chunk.prototype;
$c_Lscodec_bits_ByteVector$Chunk.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this)
});
$c_Lscodec_bits_ByteVector$Chunk.prototype.productArity__I = (function() {
  return 1
});
$c_Lscodec_bits_ByteVector$Chunk.prototype.productPrefix__T = (function() {
  return "Chunk"
});
$c_Lscodec_bits_ByteVector$Chunk.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lscodec_bits_ByteVector$Chunk__f_bytes
  };
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lscodec_bits_ByteVector$Chunk.prototype.size__J = (function() {
  return this.Lscodec_bits_ByteVector$Chunk__f_bytes.Lscodec_bits_ByteVector$View__f_size
});
$c_Lscodec_bits_ByteVector$Chunk.prototype.getImpl__J__B = (function(i) {
  return this.Lscodec_bits_ByteVector$Chunk__f_bytes.apply__J__B(i)
});
function $as_Lscodec_bits_ByteVector$Chunk(obj) {
  return (((obj instanceof $c_Lscodec_bits_ByteVector$Chunk) || (obj === null)) ? obj : $throwClassCastException(obj, "scodec.bits.ByteVector$Chunk"))
}
function $isArrayOf_Lscodec_bits_ByteVector$Chunk(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscodec_bits_ByteVector$Chunk)))
}
function $asArrayOf_Lscodec_bits_ByteVector$Chunk(obj, depth) {
  return (($isArrayOf_Lscodec_bits_ByteVector$Chunk(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscodec.bits.ByteVector$Chunk;", depth))
}
var $d_Lscodec_bits_ByteVector$Chunk = new $TypeData().initClass({
  Lscodec_bits_ByteVector$Chunk: 0
}, false, "scodec.bits.ByteVector$Chunk", {
  Lscodec_bits_ByteVector$Chunk: 1,
  Lscodec_bits_ByteVector: 1,
  O: 1,
  Lscodec_bits_ByteVectorCrossPlatform: 1,
  Lscodec_bits_BitwiseOperations: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1,
  s_Product: 1
});
$c_Lscodec_bits_ByteVector$Chunk.prototype.$classData = $d_Lscodec_bits_ByteVector$Chunk;
function $p_Lscodec_bits_ByteVector$Chunks__go$10__Lscodec_bits_ByteVector$Append__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector($thiz, chunks, last) {
  var last$tailLocal1 = last;
  var chunks$tailLocal1 = chunks;
  while (true) {
    var t = last$tailLocal1.size__J();
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var b = chunks$tailLocal1.Lscodec_bits_ByteVector$Append__f_size;
    var bhi = b.RTLong__f_hi;
    if (((hi === bhi) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (hi > bhi))) {
      var $$x1 = true
    } else {
      var lo$1 = (lo << 1);
      var hi$1 = (((lo >>> 31) | 0) | (hi << 1));
      var b$1 = chunks$tailLocal1.Lscodec_bits_ByteVector$Append__f_right.size__J();
      var bhi$1 = b$1.RTLong__f_hi;
      var $$x1 = ((hi$1 === bhi$1) ? (((-2147483648) ^ lo$1) <= ((-2147483648) ^ b$1.RTLong__f_lo)) : (hi$1 < bhi$1))
    };
    if ($$x1) {
      var left = chunks$tailLocal1;
      var right = last$tailLocal1;
      var chunks$1 = new $c_Lscodec_bits_ByteVector$Append(left, right);
      return new $c_Lscodec_bits_ByteVector$Chunks(chunks$1)
    } else {
      var x168 = chunks$tailLocal1.Lscodec_bits_ByteVector$Append__f_left;
      if ((x168 instanceof $c_Lscodec_bits_ByteVector$Append)) {
        var left$1 = $as_Lscodec_bits_ByteVector$Append(x168);
        var left$2 = chunks$tailLocal1.Lscodec_bits_ByteVector$Append__f_right;
        var right$1 = last$tailLocal1;
        var last$tailLocal1$tmp1 = new $c_Lscodec_bits_ByteVector$Append(left$2, right$1);
        chunks$tailLocal1 = left$1;
        last$tailLocal1 = last$tailLocal1$tmp1;
        continue
      };
      var left$3 = chunks$tailLocal1;
      var right$2 = last$tailLocal1;
      var chunks$2 = new $c_Lscodec_bits_ByteVector$Append(left$3, right$2);
      return new $c_Lscodec_bits_ByteVector$Chunks(chunks$2)
    }
  }
}
/** @constructor */
function $c_Lscodec_bits_ByteVector$Chunks(chunks) {
  this.Lscodec_bits_ByteVector__f_hashCode$lzy1 = 0;
  this.Lscodec_bits_ByteVector__f_hashCodebitmap$1 = false;
  this.Lscodec_bits_ByteVector$Chunks__f_chunks = null;
  this.Lscodec_bits_ByteVector$Chunks__f_chunks = chunks
}
$c_Lscodec_bits_ByteVector$Chunks.prototype = new $h_Lscodec_bits_ByteVector();
$c_Lscodec_bits_ByteVector$Chunks.prototype.constructor = $c_Lscodec_bits_ByteVector$Chunks;
/** @constructor */
function $h_Lscodec_bits_ByteVector$Chunks() {
  /*<skip>*/
}
$h_Lscodec_bits_ByteVector$Chunks.prototype = $c_Lscodec_bits_ByteVector$Chunks.prototype;
$c_Lscodec_bits_ByteVector$Chunks.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this)
});
$c_Lscodec_bits_ByteVector$Chunks.prototype.productArity__I = (function() {
  return 1
});
$c_Lscodec_bits_ByteVector$Chunks.prototype.productPrefix__T = (function() {
  return "Chunks"
});
$c_Lscodec_bits_ByteVector$Chunks.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lscodec_bits_ByteVector$Chunks__f_chunks
  };
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lscodec_bits_ByteVector$Chunks.prototype.size__J = (function() {
  return this.Lscodec_bits_ByteVector$Chunks__f_chunks.Lscodec_bits_ByteVector$Append__f_size
});
$c_Lscodec_bits_ByteVector$Chunks.prototype.getImpl__J__B = (function(n) {
  return this.Lscodec_bits_ByteVector$Chunks__f_chunks.getImpl__J__B(n)
});
$c_Lscodec_bits_ByteVector$Chunks.prototype.$plus$plus__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector = (function(b) {
  return (b.isEmpty__Z() ? this : (this.isEmpty__Z() ? b : $p_Lscodec_bits_ByteVector$Chunks__go$10__Lscodec_bits_ByteVector$Append__Lscodec_bits_ByteVector__Lscodec_bits_ByteVector(this, this.Lscodec_bits_ByteVector$Chunks__f_chunks, b.unbuffer__Lscodec_bits_ByteVector())))
});
function $as_Lscodec_bits_ByteVector$Chunks(obj) {
  return (((obj instanceof $c_Lscodec_bits_ByteVector$Chunks) || (obj === null)) ? obj : $throwClassCastException(obj, "scodec.bits.ByteVector$Chunks"))
}
function $isArrayOf_Lscodec_bits_ByteVector$Chunks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscodec_bits_ByteVector$Chunks)))
}
function $asArrayOf_Lscodec_bits_ByteVector$Chunks(obj, depth) {
  return (($isArrayOf_Lscodec_bits_ByteVector$Chunks(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscodec.bits.ByteVector$Chunks;", depth))
}
var $d_Lscodec_bits_ByteVector$Chunks = new $TypeData().initClass({
  Lscodec_bits_ByteVector$Chunks: 0
}, false, "scodec.bits.ByteVector$Chunks", {
  Lscodec_bits_ByteVector$Chunks: 1,
  Lscodec_bits_ByteVector: 1,
  O: 1,
  Lscodec_bits_ByteVectorCrossPlatform: 1,
  Lscodec_bits_BitwiseOperations: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1,
  s_Product: 1
});
$c_Lscodec_bits_ByteVector$Chunks.prototype.$classData = $d_Lscodec_bits_ByteVector$Chunks;
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true
  } else {
    if ($is_sc_Seq(o)) {
      var x2 = $as_sc_Seq(o);
      if (x2.canEqual__O__Z($thiz)) {
        return $thiz.sameElements__sc_IterableOnce__Z(x2)
      }
    };
    return false
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
}
/** @constructor */
function $c_s_math_Numeric$ByteIsIntegral$() {
  /*<skip>*/
}
$c_s_math_Numeric$ByteIsIntegral$.prototype = new $h_O();
$c_s_math_Numeric$ByteIsIntegral$.prototype.constructor = $c_s_math_Numeric$ByteIsIntegral$;
/** @constructor */
function $h_s_math_Numeric$ByteIsIntegral$() {
  /*<skip>*/
}
$h_s_math_Numeric$ByteIsIntegral$.prototype = $c_s_math_Numeric$ByteIsIntegral$.prototype;
$c_s_math_Numeric$ByteIsIntegral$.prototype.toInt__O__I = (function(x) {
  var x$1 = $uB(x);
  return x$1
});
var $d_s_math_Numeric$ByteIsIntegral$ = new $TypeData().initClass({
  s_math_Numeric$ByteIsIntegral$: 0
}, false, "scala.math.Numeric$ByteIsIntegral$", {
  s_math_Numeric$ByteIsIntegral$: 1,
  O: 1,
  s_math_Numeric$ByteIsIntegral: 1,
  s_math_Integral: 1,
  s_math_Numeric: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordering$ByteOrdering: 1
});
$c_s_math_Numeric$ByteIsIntegral$.prototype.$classData = $d_s_math_Numeric$ByteIsIntegral$;
var $n_s_math_Numeric$ByteIsIntegral$;
function $m_s_math_Numeric$ByteIsIntegral$() {
  if ((!$n_s_math_Numeric$ByteIsIntegral$)) {
    $n_s_math_Numeric$ByteIsIntegral$ = new $c_s_math_Numeric$ByteIsIntegral$()
  };
  return $n_s_math_Numeric$ByteIsIntegral$
}
/** @constructor */
function $c_s_math_Numeric$IntIsIntegral$() {
  /*<skip>*/
}
$c_s_math_Numeric$IntIsIntegral$.prototype = new $h_O();
$c_s_math_Numeric$IntIsIntegral$.prototype.constructor = $c_s_math_Numeric$IntIsIntegral$;
/** @constructor */
function $h_s_math_Numeric$IntIsIntegral$() {
  /*<skip>*/
}
$h_s_math_Numeric$IntIsIntegral$.prototype = $c_s_math_Numeric$IntIsIntegral$.prototype;
$c_s_math_Numeric$IntIsIntegral$.prototype.toInt__O__I = (function(x) {
  var x$1 = $uI(x);
  return x$1
});
var $d_s_math_Numeric$IntIsIntegral$ = new $TypeData().initClass({
  s_math_Numeric$IntIsIntegral$: 0
}, false, "scala.math.Numeric$IntIsIntegral$", {
  s_math_Numeric$IntIsIntegral$: 1,
  O: 1,
  s_math_Numeric$IntIsIntegral: 1,
  s_math_Integral: 1,
  s_math_Numeric: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordering$IntOrdering: 1
});
$c_s_math_Numeric$IntIsIntegral$.prototype.$classData = $d_s_math_Numeric$IntIsIntegral$;
var $n_s_math_Numeric$IntIsIntegral$;
function $m_s_math_Numeric$IntIsIntegral$() {
  if ((!$n_s_math_Numeric$IntIsIntegral$)) {
    $n_s_math_Numeric$IntIsIntegral$ = new $c_s_math_Numeric$IntIsIntegral$()
  };
  return $n_s_math_Numeric$IntIsIntegral$
}
/** @constructor */
function $c_sc_AbstractSeq() {
  /*<skip>*/
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
  /*<skip>*/
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
  return true
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o)
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
/** @constructor */
function $c_sc_AbstractSeqView() {
  /*<skip>*/
}
$c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
  /*<skip>*/
}
$h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.sc_SeqView$Id__f_underlying = null
}
$c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
  /*<skip>*/
}
$h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
$c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
  return this.sc_SeqView$Id__f_underlying.apply__I__O(idx)
});
$c_sc_SeqView$Id.prototype.length__I = (function() {
  return this.sc_SeqView$Id__f_underlying.length__I()
});
$c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
  return this.sc_SeqView$Id__f_underlying.isEmpty__Z()
});
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)))
}
function $as_sci_Seq(obj) {
  return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"))
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)))
}
function $asArrayOf_sci_Seq(obj, depth) {
  return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth))
}
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.sc_SeqView$Id__f_underlying = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying)
}
$c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$Id.prototype = $c_sc_IndexedSeqView$Id.prototype;
$c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
});
$c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView"
});
$c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
  return this.length__I()
});
var $d_sc_IndexedSeqView$Id = new $TypeData().initClass({
  sc_IndexedSeqView$Id: 0
}, false, "scala.collection.IndexedSeqView$Id", {
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Id.prototype.$classData = $d_sc_IndexedSeqView$Id;
/** @constructor */
function $c_sci_AbstractSeq() {
  /*<skip>*/
}
$c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
  /*<skip>*/
}
$h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true
  } else {
    var x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === x2.length__I())
  }
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    var x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true
    } else {
      var length = $thiz.length__I();
      var equal = (length === x2.length__I());
      if (equal) {
        var index = 0;
        var a = $thiz.applyPreferredMaxLength__I();
        var b = x2.applyPreferredMaxLength__I();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength
        } else {
          var maxApplyCompare = length
        };
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), x2.apply__I__O(index));
          index = ((1 + index) | 0)
        };
        if (((index < length) && equal)) {
          var thisIt = $thiz.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          var thatIt = x2.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          while ((equal && thisIt.hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z(thisIt.next__O(), thatIt.next__O())
          }
        }
      };
      return equal
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o)
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth))
}
/** @constructor */
function $c_scm_AbstractSeq() {
  /*<skip>*/
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
  /*<skip>*/
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.sci_LazyList__f_bitmap$0)) {
    if ($thiz.sci_LazyList__f_midEvaluation) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "self-referential LazyList or a derivation thereof has no more elements")
    };
    $thiz.sci_LazyList__f_midEvaluation = true;
    try {
      var res = $as_sci_LazyList$State($thiz.sci_LazyList__f_lazyState.apply__O())
    } finally {
      $thiz.sci_LazyList__f_midEvaluation = false
    };
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = true;
    $thiz.sci_LazyList__f_lazyState = null;
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state = res;
    $thiz.sci_LazyList__f_bitmap$0 = true
  };
  return $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
  } else if ((!$thiz.isEmpty__Z())) {
    var obj = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    var elem$2 = null;
    elem$2 = elem$1;
    if ((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ((!$as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated) || ($as_sci_LazyList(elem).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $as_sci_LazyList(elem$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
      elem = $as_sci_LazyList(elem$2);
      if (($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) {
        var this$3 = $as_sci_LazyList(elem$2);
        elem$2 = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        while (((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) && ($as_sci_LazyList(elem).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $as_sci_LazyList(elem$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State()))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$4 = $as_sci_LazyList(elem);
          var obj$1 = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
          var this$5 = $as_sci_LazyList(elem);
          elem = this$5.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          var this$6 = $as_sci_LazyList(elem$2);
          elem$2 = this$6.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          if (($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) {
            var this$7 = $as_sci_LazyList(elem$2);
            elem$2 = this$7.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
          }
        }
      }
    };
    if ((!($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z())))) {
      while (($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$8 = $as_sci_LazyList(elem);
        var obj$2 = this$8.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
        var this$9 = $as_sci_LazyList(elem);
        elem = this$9.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      if ((!$as_sci_LazyList(elem).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = $as_sci_LazyList(elem$2);
        if ((!((a === b$1) || (a.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          var this$10 = runner;
          runner = this$10.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          var this$11 = $as_sci_LazyList(elem$2);
          elem$2 = this$11.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          k = ((1 + k) | 0)
        } else {
          break
        }
      };
      var a$1 = $as_sci_LazyList(elem);
      var b$2 = $as_sci_LazyList(elem$2);
      if ((((a$1 === b$2) || (a$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State())) && (k > 0))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$12 = $as_sci_LazyList(elem);
        var obj$3 = this$12.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3);
        var this$13 = $as_sci_LazyList(elem);
        elem = this$13.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      while (true) {
        var a$2 = $as_sci_LazyList(elem);
        var b$3 = $as_sci_LazyList(elem$2);
        if ((!((a$2 === b$3) || (a$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$14 = $as_sci_LazyList(elem);
          var obj$4 = this$14.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          var this$15 = $as_sci_LazyList(elem);
          elem = this$15.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
        } else {
          break
        }
      };
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
    }
  };
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$state = null;
  this.sci_LazyList__f_lazyState = null;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false;
  this.sci_LazyList__f_bitmap$0 = false;
  this.sci_LazyList__f_lazyState = lazyState;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false
}
$c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$c_sci_LazyList.prototype.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
  /*<skip>*/
}
$h_sci_LazyList.prototype = $c_sci_LazyList.prototype;
$c_sci_LazyList.prototype.stringPrefix__T = (function() {
  return "LinearSeq"
});
$c_sci_LazyList.prototype.length__I = (function() {
  return $f_sc_LinearSeqOps__length__I(this)
});
$c_sci_LazyList.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
});
$c_sci_LazyList.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_LazyList.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sci_LazyList.prototype.scala$collection$immutable$LazyList$$state__sci_LazyList$State = (function() {
  return ((!this.sci_LazyList__f_bitmap$0) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.sci_LazyList__f_scala$collection$immutable$LazyList$$state)
});
$c_sci_LazyList.prototype.isEmpty__Z = (function() {
  return (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())
});
$c_sci_LazyList.prototype.knownSize__I = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? 0 : (-1))
});
$c_sci_LazyList.prototype.head__O = (function() {
  return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O()
});
$c_sci_LazyList.prototype.force__sci_LazyList = (function() {
  var these = this;
  var those = this;
  if ((!these.isEmpty__Z())) {
    var this$1 = these;
    these = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
  };
  while ((those !== these)) {
    if (these.isEmpty__Z()) {
      return this
    };
    var this$2 = these;
    these = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    if (these.isEmpty__Z()) {
      return this
    };
    var this$3 = these;
    these = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    if ((these === those)) {
      return this
    };
    var this$4 = those;
    those = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
  };
  return this
});
$c_sci_LazyList.prototype.iterator__sc_Iterator = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_LazyList$LazyIterator(this))
});
$c_sci_LazyList.prototype.foreach__F1__V = (function(f) {
  var _$this = this;
  while ((!_$this.isEmpty__Z())) {
    var this$1 = _$this;
    f.apply__O__O(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O());
    var this$2 = _$this;
    _$this = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
  }
});
$c_sci_LazyList.prototype.className__T = (function() {
  return "LazyList"
});
$c_sci_LazyList.prototype.drop__I__sci_LazyList = (function(n) {
  return ((n <= 0) ? this : ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(this, n)))
});
$c_sci_LazyList.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  this.force__sci_LazyList();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.scm_StringBuilder__f_underlying, start, sep, end);
  return sb
});
$c_sci_LazyList.prototype.toString__T = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_sci_LazyList.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_LazyList.prototype.drop__I__O = (function(n) {
  return this.drop__I__sci_LazyList(n)
});
$c_sci_LazyList.prototype.tail__O = (function() {
  return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
});
function $as_sci_LazyList(obj) {
  return (((obj instanceof $c_sci_LazyList) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList"))
}
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList)))
}
function $asArrayOf_sci_LazyList(obj, depth) {
  return (($isArrayOf_sci_LazyList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList;", depth))
}
var $d_sci_LazyList = new $TypeData().initClass({
  sci_LazyList: 0
}, false, "scala.collection.immutable.LazyList", {
  sci_LazyList: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList.prototype.$classData = $d_sci_LazyList;
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array
}
$c_sjsr_WrappedVarArgs.prototype = new $h_O();
$c_sjsr_WrappedVarArgs.prototype.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
  /*<skip>*/
}
$h_sjsr_WrappedVarArgs.prototype = $c_sjsr_WrappedVarArgs.prototype;
$c_sjsr_WrappedVarArgs.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sjsr_WrappedVarArgs.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
});
$c_sjsr_WrappedVarArgs.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength
});
$c_sjsr_WrappedVarArgs.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_sjsr_WrappedVarArgs.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sjsr_WrappedVarArgs.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sjsr_WrappedVarArgs.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o)
});
$c_sjsr_WrappedVarArgs.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sjsr_WrappedVarArgs.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sjsr_WrappedVarArgs.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sjsr_WrappedVarArgs.prototype.foreach__F1__V = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f)
});
$c_sjsr_WrappedVarArgs.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sjsr_WrappedVarArgs.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sjsr_WrappedVarArgs.prototype.length__I = (function() {
  return $uI(this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length)
});
$c_sjsr_WrappedVarArgs.prototype.apply__I__O = (function(idx) {
  return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx]
});
$c_sjsr_WrappedVarArgs.prototype.className__T = (function() {
  return "WrappedVarArgs"
});
$c_sjsr_WrappedVarArgs.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
function $as_sjsr_WrappedVarArgs(obj) {
  return (((obj instanceof $c_sjsr_WrappedVarArgs) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.WrappedVarArgs"))
}
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)))
}
function $asArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (($isArrayOf_sjsr_WrappedVarArgs(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.WrappedVarArgs;", depth))
}
var $d_sjsr_WrappedVarArgs = new $TypeData().initClass({
  sjsr_WrappedVarArgs: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs", {
  sjsr_WrappedVarArgs: 1,
  O: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs.prototype.$classData = $d_sjsr_WrappedVarArgs;
/** @constructor */
function $c_scm_AbstractBuffer() {
  /*<skip>*/
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
  /*<skip>*/
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
$c_scm_AbstractBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
});
/** @constructor */
function $c_sci_ArraySeq() {
  /*<skip>*/
}
$c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$c_sci_ArraySeq.prototype.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
  /*<skip>*/
}
$h_sci_ArraySeq.prototype = $c_sci_ArraySeq.prototype;
$c_sci_ArraySeq.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sci_ArraySeq.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
});
$c_sci_ArraySeq.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sci_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sci_ArraySeq.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sci_ArraySeq.prototype.className__T = (function() {
  return "ArraySeq"
});
$c_sci_ArraySeq.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var srcLen = this.length__I();
  var destLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V(this.unsafeArray__O(), 0, xs, start, copied)
  };
  return copied
});
$c_sci_ArraySeq.prototype.applyPreferredMaxLength__I = (function() {
  return 2147483647
});
function $as_sci_ArraySeq(obj) {
  return (((obj instanceof $c_sci_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq"))
}
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq)))
}
function $asArrayOf_sci_ArraySeq(obj, depth) {
  return (($isArrayOf_sci_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq;", depth))
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.sci_Vector__f_prefix1 = prefix1;
  return $thiz
}
/** @constructor */
function $c_sci_Vector() {
  this.sci_Vector__f_prefix1 = null
}
$c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$c_sci_Vector.prototype.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
  /*<skip>*/
}
$h_sci_Vector.prototype = $c_sci_Vector.prototype;
$c_sci_Vector.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sci_Vector.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
});
$c_sci_Vector.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sci_Vector.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sci_Vector.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sci_Vector.prototype.length__I = (function() {
  return ((this instanceof $c_sci_BigVector) ? $as_sci_BigVector(this).sci_BigVector__f_length0 : this.sci_Vector__f_prefix1.u.length)
});
$c_sci_Vector.prototype.iterator__sc_Iterator = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator : new $c_sci_NewVectorIterator(this, this.length__I(), this.vectorSliceCount__I()))
});
$c_sci_Vector.prototype.className__T = (function() {
  return "Vector"
});
$c_sci_Vector.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return this.iterator__sc_Iterator().copyToArray__O__I__I__I(xs, start, len)
});
$c_sci_Vector.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength
});
$c_sci_Vector.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.length__I()) | 0)) + ")"))
});
$c_sci_Vector.prototype.foreach__F1__V = (function(f) {
  var c = this.vectorSliceCount__I();
  var i = 0;
  while ((i < c)) {
    var $$x1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    $$x1.foreachRec__I__AO__F1__V((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.vectorSlice__I__AO(i), f);
    i = ((1 + i) | 0)
  }
});
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"))
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth))
}
/** @constructor */
function $c_scm_ArraySeq() {
  /*<skip>*/
}
$c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$c_scm_ArraySeq.prototype.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
  /*<skip>*/
}
$h_scm_ArraySeq.prototype = $c_scm_ArraySeq.prototype;
$c_scm_ArraySeq.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_scm_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_scm_ArraySeq.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_scm_ArraySeq.prototype.className__T = (function() {
  return "ArraySeq"
});
$c_scm_ArraySeq.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    var x2 = $as_scm_ArraySeq(other);
    var xs = this.array__O();
    var $$x1 = $m_jl_reflect_Array$().getLength__O__I(xs);
    var xs$1 = x2.array__O();
    if (($$x1 !== $m_jl_reflect_Array$().getLength__O__I(xs$1))) {
      return false
    }
  };
  return $f_sc_Seq__equals__O__Z(this, other)
});
function $as_scm_ArraySeq(obj) {
  return (((obj instanceof $c_scm_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq"))
}
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq)))
}
function $asArrayOf_scm_ArraySeq(obj, depth) {
  return (($isArrayOf_scm_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq;", depth))
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.sci_ArraySeq$ofBoolean__f_unsafeArray = null;
  this.sci_ArraySeq$ofBoolean__f_unsafeArray = unsafeArray
}
$c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofBoolean.prototype.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
  /*<skip>*/
}
$h_sci_ArraySeq$ofBoolean.prototype = $c_sci_ArraySeq$ofBoolean.prototype;
$c_sci_ArraySeq$ofBoolean.prototype.length__I = (function() {
  return this.sci_ArraySeq$ofBoolean__f_unsafeArray.u.length
});
$c_sci_ArraySeq$ofBoolean.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofBoolean__f_unsafeArray;
  return this$1.arrayHash$mZc$sp__AZ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_sci_ArraySeq$ofBoolean.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofBoolean)) {
    var x2 = $as_sci_ArraySeq$ofBoolean(that);
    var a = this.sci_ArraySeq$ofBoolean__f_unsafeArray;
    var b = x2.sci_ArraySeq$ofBoolean__f_unsafeArray;
    return $m_ju_Arrays$().equals__AZ__AZ__Z(a, b)
  } else {
    return $f_sc_Seq__equals__O__Z(this, that)
  }
});
$c_sci_ArraySeq$ofBoolean.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.sci_ArraySeq$ofBoolean__f_unsafeArray)
});
$c_sci_ArraySeq$ofBoolean.prototype.apply$mcZI$sp__I__Z = (function(i) {
  return this.sci_ArraySeq$ofBoolean__f_unsafeArray.get(i)
});
$c_sci_ArraySeq$ofBoolean.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcZI$sp__I__Z(i)
});
$c_sci_ArraySeq$ofBoolean.prototype.apply__I__O = (function(i) {
  return this.apply$mcZI$sp__I__Z(i)
});
$c_sci_ArraySeq$ofBoolean.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofBoolean__f_unsafeArray
});
function $as_sci_ArraySeq$ofBoolean(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofBoolean) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofBoolean"))
}
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofBoolean)))
}
function $asArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofBoolean;", depth))
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().initClass({
  sci_ArraySeq$ofBoolean: 0
}, false, "scala.collection.immutable.ArraySeq$ofBoolean", {
  sci_ArraySeq$ofBoolean: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ArraySeq$ofBoolean.prototype.$classData = $d_sci_ArraySeq$ofBoolean;
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.sci_ArraySeq$ofByte__f_unsafeArray = null;
  this.sci_ArraySeq$ofByte__f_unsafeArray = unsafeArray
}
$c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofByte.prototype.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
  /*<skip>*/
}
$h_sci_ArraySeq$ofByte.prototype = $c_sci_ArraySeq$ofByte.prototype;
$c_sci_ArraySeq$ofByte.prototype.length__I = (function() {
  return this.sci_ArraySeq$ofByte__f_unsafeArray.u.length
});
$c_sci_ArraySeq$ofByte.prototype.apply__I__B = (function(i) {
  return this.sci_ArraySeq$ofByte__f_unsafeArray.get(i)
});
$c_sci_ArraySeq$ofByte.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofByte__f_unsafeArray;
  return this$1.arrayHash$mBc$sp__AB__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_sci_ArraySeq$ofByte.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofByte)) {
    var x2 = $as_sci_ArraySeq$ofByte(that);
    var a = this.sci_ArraySeq$ofByte__f_unsafeArray;
    var b = x2.sci_ArraySeq$ofByte__f_unsafeArray;
    return $m_ju_Arrays$().equals__AB__AB__Z(a, b)
  } else {
    return $f_sc_Seq__equals__O__Z(this, that)
  }
});
$c_sci_ArraySeq$ofByte.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.sci_ArraySeq$ofByte__f_unsafeArray)
});
$c_sci_ArraySeq$ofByte.prototype.apply__O__O = (function(v1) {
  return this.apply__I__B($uI(v1))
});
$c_sci_ArraySeq$ofByte.prototype.apply__I__O = (function(i) {
  return this.apply__I__B(i)
});
$c_sci_ArraySeq$ofByte.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofByte__f_unsafeArray
});
function $as_sci_ArraySeq$ofByte(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofByte) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofByte"))
}
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofByte)))
}
function $asArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofByte(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofByte;", depth))
}
var $d_sci_ArraySeq$ofByte = new $TypeData().initClass({
  sci_ArraySeq$ofByte: 0
}, false, "scala.collection.immutable.ArraySeq$ofByte", {
  sci_ArraySeq$ofByte: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ArraySeq$ofByte.prototype.$classData = $d_sci_ArraySeq$ofByte;
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.sci_ArraySeq$ofChar__f_unsafeArray = null;
  this.sci_ArraySeq$ofChar__f_unsafeArray = unsafeArray
}
$c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofChar.prototype.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
  /*<skip>*/
}
$h_sci_ArraySeq$ofChar.prototype = $c_sci_ArraySeq$ofChar.prototype;
$c_sci_ArraySeq$ofChar.prototype.length__I = (function() {
  return this.sci_ArraySeq$ofChar__f_unsafeArray.u.length
});
$c_sci_ArraySeq$ofChar.prototype.apply__I__C = (function(i) {
  return this.sci_ArraySeq$ofChar__f_unsafeArray.get(i)
});
$c_sci_ArraySeq$ofChar.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofChar__f_unsafeArray;
  return this$1.arrayHash$mCc$sp__AC__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_sci_ArraySeq$ofChar.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofChar)) {
    var x2 = $as_sci_ArraySeq$ofChar(that);
    var a = this.sci_ArraySeq$ofChar__f_unsafeArray;
    var b = x2.sci_ArraySeq$ofChar__f_unsafeArray;
    return $m_ju_Arrays$().equals__AC__AC__Z(a, b)
  } else {
    return $f_sc_Seq__equals__O__Z(this, that)
  }
});
$c_sci_ArraySeq$ofChar.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.sci_ArraySeq$ofChar__f_unsafeArray)
});
$c_sci_ArraySeq$ofChar.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.sci_ArraySeq$ofChar__f_unsafeArray).addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end)
});
$c_sci_ArraySeq$ofChar.prototype.apply__O__O = (function(v1) {
  return $bC(this.apply__I__C($uI(v1)))
});
$c_sci_ArraySeq$ofChar.prototype.apply__I__O = (function(i) {
  return $bC(this.apply__I__C(i))
});
$c_sci_ArraySeq$ofChar.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofChar__f_unsafeArray
});
function $as_sci_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofChar"))
}
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofChar)))
}
function $asArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofChar;", depth))
}
var $d_sci_ArraySeq$ofChar = new $TypeData().initClass({
  sci_ArraySeq$ofChar: 0
}, false, "scala.collection.immutable.ArraySeq$ofChar", {
  sci_ArraySeq$ofChar: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ArraySeq$ofChar.prototype.$classData = $d_sci_ArraySeq$ofChar;
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.sci_ArraySeq$ofDouble__f_unsafeArray = null;
  this.sci_ArraySeq$ofDouble__f_unsafeArray = unsafeArray
}
$c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofDouble.prototype.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
  /*<skip>*/
}
$h_sci_ArraySeq$ofDouble.prototype = $c_sci_ArraySeq$ofDouble.prototype;
$c_sci_ArraySeq$ofDouble.prototype.length__I = (function() {
  return this.sci_ArraySeq$ofDouble__f_unsafeArray.u.length
});
$c_sci_ArraySeq$ofDouble.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofDouble__f_unsafeArray;
  return this$1.arrayHash$mDc$sp__AD__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_sci_ArraySeq$ofDouble.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofDouble)) {
    var x2 = $as_sci_ArraySeq$ofDouble(that);
    var a = this.sci_ArraySeq$ofDouble__f_unsafeArray;
    var b = x2.sci_ArraySeq$ofDouble__f_unsafeArray;
    return $m_ju_Arrays$().equals__AD__AD__Z(a, b)
  } else {
    return $f_sc_Seq__equals__O__Z(this, that)
  }
});
$c_sci_ArraySeq$ofDouble.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.sci_ArraySeq$ofDouble__f_unsafeArray)
});
$c_sci_ArraySeq$ofDouble.prototype.apply$mcDI$sp__I__D = (function(i) {
  return this.sci_ArraySeq$ofDouble__f_unsafeArray.get(i)
});
$c_sci_ArraySeq$ofDouble.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcDI$sp__I__D(i)
});
$c_sci_ArraySeq$ofDouble.prototype.apply__I__O = (function(i) {
  return this.apply$mcDI$sp__I__D(i)
});
$c_sci_ArraySeq$ofDouble.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofDouble__f_unsafeArray
});
function $as_sci_ArraySeq$ofDouble(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofDouble) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofDouble"))
}
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofDouble)))
}
function $asArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofDouble(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofDouble;", depth))
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().initClass({
  sci_ArraySeq$ofDouble: 0
}, false, "scala.collection.immutable.ArraySeq$ofDouble", {
  sci_ArraySeq$ofDouble: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ArraySeq$ofDouble.prototype.$classData = $d_sci_ArraySeq$ofDouble;
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.sci_ArraySeq$ofFloat__f_unsafeArray = null;
  this.sci_ArraySeq$ofFloat__f_unsafeArray = unsafeArray
}
$c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofFloat.prototype.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
  /*<skip>*/
}
$h_sci_ArraySeq$ofFloat.prototype = $c_sci_ArraySeq$ofFloat.prototype;
$c_sci_ArraySeq$ofFloat.prototype.length__I = (function() {
  return this.sci_ArraySeq$ofFloat__f_unsafeArray.u.length
});
$c_sci_ArraySeq$ofFloat.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofFloat__f_unsafeArray;
  return this$1.arrayHash$mFc$sp__AF__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_sci_ArraySeq$ofFloat.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofFloat)) {
    var x2 = $as_sci_ArraySeq$ofFloat(that);
    var a = this.sci_ArraySeq$ofFloat__f_unsafeArray;
    var b = x2.sci_ArraySeq$ofFloat__f_unsafeArray;
    return $m_ju_Arrays$().equals__AF__AF__Z(a, b)
  } else {
    return $f_sc_Seq__equals__O__Z(this, that)
  }
});
$c_sci_ArraySeq$ofFloat.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.sci_ArraySeq$ofFloat__f_unsafeArray)
});
$c_sci_ArraySeq$ofFloat.prototype.apply$mcFI$sp__I__F = (function(i) {
  return this.sci_ArraySeq$ofFloat__f_unsafeArray.get(i)
});
$c_sci_ArraySeq$ofFloat.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcFI$sp__I__F(i)
});
$c_sci_ArraySeq$ofFloat.prototype.apply__I__O = (function(i) {
  return this.apply$mcFI$sp__I__F(i)
});
$c_sci_ArraySeq$ofFloat.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofFloat__f_unsafeArray
});
function $as_sci_ArraySeq$ofFloat(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofFloat) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofFloat"))
}
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofFloat)))
}
function $asArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofFloat(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofFloat;", depth))
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().initClass({
  sci_ArraySeq$ofFloat: 0
}, false, "scala.collection.immutable.ArraySeq$ofFloat", {
  sci_ArraySeq$ofFloat: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ArraySeq$ofFloat.prototype.$classData = $d_sci_ArraySeq$ofFloat;
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.sci_ArraySeq$ofInt__f_unsafeArray = null;
  this.sci_ArraySeq$ofInt__f_unsafeArray = unsafeArray
}
$c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofInt.prototype.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
  /*<skip>*/
}
$h_sci_ArraySeq$ofInt.prototype = $c_sci_ArraySeq$ofInt.prototype;
$c_sci_ArraySeq$ofInt.prototype.length__I = (function() {
  return this.sci_ArraySeq$ofInt__f_unsafeArray.u.length
});
$c_sci_ArraySeq$ofInt.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofInt__f_unsafeArray;
  return this$1.arrayHash$mIc$sp__AI__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_sci_ArraySeq$ofInt.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofInt)) {
    var x2 = $as_sci_ArraySeq$ofInt(that);
    var a = this.sci_ArraySeq$ofInt__f_unsafeArray;
    var b = x2.sci_ArraySeq$ofInt__f_unsafeArray;
    return $m_ju_Arrays$().equals__AI__AI__Z(a, b)
  } else {
    return $f_sc_Seq__equals__O__Z(this, that)
  }
});
$c_sci_ArraySeq$ofInt.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.sci_ArraySeq$ofInt__f_unsafeArray)
});
$c_sci_ArraySeq$ofInt.prototype.apply$mcII$sp__I__I = (function(i) {
  return this.sci_ArraySeq$ofInt__f_unsafeArray.get(i)
});
$c_sci_ArraySeq$ofInt.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcII$sp__I__I(i)
});
$c_sci_ArraySeq$ofInt.prototype.apply__I__O = (function(i) {
  return this.apply$mcII$sp__I__I(i)
});
$c_sci_ArraySeq$ofInt.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofInt__f_unsafeArray
});
function $as_sci_ArraySeq$ofInt(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofInt"))
}
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofInt)))
}
function $asArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofInt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofInt;", depth))
}
var $d_sci_ArraySeq$ofInt = new $TypeData().initClass({
  sci_ArraySeq$ofInt: 0
}, false, "scala.collection.immutable.ArraySeq$ofInt", {
  sci_ArraySeq$ofInt: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ArraySeq$ofInt.prototype.$classData = $d_sci_ArraySeq$ofInt;
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.sci_ArraySeq$ofLong__f_unsafeArray = null;
  this.sci_ArraySeq$ofLong__f_unsafeArray = unsafeArray
}
$c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofLong.prototype.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
  /*<skip>*/
}
$h_sci_ArraySeq$ofLong.prototype = $c_sci_ArraySeq$ofLong.prototype;
$c_sci_ArraySeq$ofLong.prototype.length__I = (function() {
  return this.sci_ArraySeq$ofLong__f_unsafeArray.u.length
});
$c_sci_ArraySeq$ofLong.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofLong__f_unsafeArray;
  return this$1.arrayHash$mJc$sp__AJ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_sci_ArraySeq$ofLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofLong)) {
    var x2 = $as_sci_ArraySeq$ofLong(that);
    var a = this.sci_ArraySeq$ofLong__f_unsafeArray;
    var b = x2.sci_ArraySeq$ofLong__f_unsafeArray;
    return $m_ju_Arrays$().equals__AJ__AJ__Z(a, b)
  } else {
    return $f_sc_Seq__equals__O__Z(this, that)
  }
});
$c_sci_ArraySeq$ofLong.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.sci_ArraySeq$ofLong__f_unsafeArray)
});
$c_sci_ArraySeq$ofLong.prototype.apply$mcJI$sp__I__J = (function(i) {
  return this.sci_ArraySeq$ofLong__f_unsafeArray.get(i)
});
$c_sci_ArraySeq$ofLong.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcJI$sp__I__J(i)
});
$c_sci_ArraySeq$ofLong.prototype.apply__I__O = (function(i) {
  return this.apply$mcJI$sp__I__J(i)
});
$c_sci_ArraySeq$ofLong.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofLong__f_unsafeArray
});
function $as_sci_ArraySeq$ofLong(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofLong) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofLong"))
}
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofLong)))
}
function $asArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofLong;", depth))
}
var $d_sci_ArraySeq$ofLong = new $TypeData().initClass({
  sci_ArraySeq$ofLong: 0
}, false, "scala.collection.immutable.ArraySeq$ofLong", {
  sci_ArraySeq$ofLong: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ArraySeq$ofLong.prototype.$classData = $d_sci_ArraySeq$ofLong;
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.sci_ArraySeq$ofRef__f_unsafeArray = null;
  this.sci_ArraySeq$ofRef__f_unsafeArray = unsafeArray
}
$c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofRef.prototype.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
  /*<skip>*/
}
$h_sci_ArraySeq$ofRef.prototype = $c_sci_ArraySeq$ofRef.prototype;
$c_sci_ArraySeq$ofRef.prototype.elemTag__s_reflect_ClassTag = (function() {
  var $$x1 = $m_s_reflect_ClassTag$();
  var this$1 = this.sci_ArraySeq$ofRef__f_unsafeArray;
  return $$x1.apply__jl_Class__s_reflect_ClassTag($objectGetClass(this$1).getComponentType__jl_Class())
});
$c_sci_ArraySeq$ofRef.prototype.length__I = (function() {
  return this.sci_ArraySeq$ofRef__f_unsafeArray.u.length
});
$c_sci_ArraySeq$ofRef.prototype.apply__I__O = (function(i) {
  return this.sci_ArraySeq$ofRef__f_unsafeArray.get(i)
});
$c_sci_ArraySeq$ofRef.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofRef__f_unsafeArray;
  return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_sci_ArraySeq$ofRef.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofRef)) {
    var x2 = $as_sci_ArraySeq$ofRef(that);
    return $m_s_Array$().equals__AO__AO__Z(this.sci_ArraySeq$ofRef__f_unsafeArray, x2.sci_ArraySeq$ofRef__f_unsafeArray)
  } else {
    return $f_sc_Seq__equals__O__Z(this, that)
  }
});
$c_sci_ArraySeq$ofRef.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.sci_ArraySeq$ofRef__f_unsafeArray)
});
$c_sci_ArraySeq$ofRef.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
$c_sci_ArraySeq$ofRef.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofRef__f_unsafeArray
});
function $as_sci_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofRef"))
}
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofRef)))
}
function $asArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofRef;", depth))
}
var $d_sci_ArraySeq$ofRef = new $TypeData().initClass({
  sci_ArraySeq$ofRef: 0
}, false, "scala.collection.immutable.ArraySeq$ofRef", {
  sci_ArraySeq$ofRef: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ArraySeq$ofRef.prototype.$classData = $d_sci_ArraySeq$ofRef;
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.sci_ArraySeq$ofShort__f_unsafeArray = null;
  this.sci_ArraySeq$ofShort__f_unsafeArray = unsafeArray
}
$c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofShort.prototype.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
  /*<skip>*/
}
$h_sci_ArraySeq$ofShort.prototype = $c_sci_ArraySeq$ofShort.prototype;
$c_sci_ArraySeq$ofShort.prototype.length__I = (function() {
  return this.sci_ArraySeq$ofShort__f_unsafeArray.u.length
});
$c_sci_ArraySeq$ofShort.prototype.apply__I__S = (function(i) {
  return this.sci_ArraySeq$ofShort__f_unsafeArray.get(i)
});
$c_sci_ArraySeq$ofShort.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofShort__f_unsafeArray;
  return this$1.arrayHash$mSc$sp__AS__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_sci_ArraySeq$ofShort.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofShort)) {
    var x2 = $as_sci_ArraySeq$ofShort(that);
    var a = this.sci_ArraySeq$ofShort__f_unsafeArray;
    var b = x2.sci_ArraySeq$ofShort__f_unsafeArray;
    return $m_ju_Arrays$().equals__AS__AS__Z(a, b)
  } else {
    return $f_sc_Seq__equals__O__Z(this, that)
  }
});
$c_sci_ArraySeq$ofShort.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.sci_ArraySeq$ofShort__f_unsafeArray)
});
$c_sci_ArraySeq$ofShort.prototype.apply__O__O = (function(v1) {
  return this.apply__I__S($uI(v1))
});
$c_sci_ArraySeq$ofShort.prototype.apply__I__O = (function(i) {
  return this.apply__I__S(i)
});
$c_sci_ArraySeq$ofShort.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofShort__f_unsafeArray
});
function $as_sci_ArraySeq$ofShort(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofShort) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofShort"))
}
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofShort)))
}
function $asArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofShort(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofShort;", depth))
}
var $d_sci_ArraySeq$ofShort = new $TypeData().initClass({
  sci_ArraySeq$ofShort: 0
}, false, "scala.collection.immutable.ArraySeq$ofShort", {
  sci_ArraySeq$ofShort: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ArraySeq$ofShort.prototype.$classData = $d_sci_ArraySeq$ofShort;
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.sci_ArraySeq$ofUnit__f_unsafeArray = null;
  this.sci_ArraySeq$ofUnit__f_unsafeArray = unsafeArray
}
$c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofUnit.prototype.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
  /*<skip>*/
}
$h_sci_ArraySeq$ofUnit.prototype = $c_sci_ArraySeq$ofUnit.prototype;
$c_sci_ArraySeq$ofUnit.prototype.length__I = (function() {
  return this.sci_ArraySeq$ofUnit__f_unsafeArray.u.length
});
$c_sci_ArraySeq$ofUnit.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofUnit__f_unsafeArray;
  return this$1.arrayHash$mVc$sp__Ajl_Void__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_sci_ArraySeq$ofUnit.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofUnit)) {
    var x2 = $as_sci_ArraySeq$ofUnit(that);
    return (this.sci_ArraySeq$ofUnit__f_unsafeArray.u.length === x2.sci_ArraySeq$ofUnit__f_unsafeArray.u.length)
  } else {
    return $f_sc_Seq__equals__O__Z(this, that)
  }
});
$c_sci_ArraySeq$ofUnit.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.sci_ArraySeq$ofUnit__f_unsafeArray)
});
$c_sci_ArraySeq$ofUnit.prototype.apply$mcVI$sp__I__V = (function(i) {
  this.sci_ArraySeq$ofUnit__f_unsafeArray.get(i)
});
$c_sci_ArraySeq$ofUnit.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  this.apply$mcVI$sp__I__V(i)
});
$c_sci_ArraySeq$ofUnit.prototype.apply__I__O = (function(i) {
  this.apply$mcVI$sp__I__V(i)
});
$c_sci_ArraySeq$ofUnit.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofUnit__f_unsafeArray
});
function $as_sci_ArraySeq$ofUnit(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofUnit) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofUnit"))
}
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofUnit)))
}
function $asArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofUnit(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofUnit;", depth))
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().initClass({
  sci_ArraySeq$ofUnit: 0
}, false, "scala.collection.immutable.ArraySeq$ofUnit", {
  sci_ArraySeq$ofUnit: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ArraySeq$ofUnit.prototype.$classData = $d_sci_ArraySeq$ofUnit;
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sci_List(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      var aEmpty = a.isEmpty__Z();
      var bEmpty = b.isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        var temp$a = $as_sci_List(a.tail__O());
        var temp$b = $as_sci_List(b.tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (aEmpty && bEmpty)
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
  /*<skip>*/
}
$c_sci_List.prototype = new $h_sci_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
  /*<skip>*/
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this)
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "LinearSeq"
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sci_List.prototype.$colon$colon$colon__sci_List__sci_List = (function(prefix) {
  if (this.isEmpty__Z()) {
    return prefix
  } else if (prefix.isEmpty__Z()) {
    return this
  } else {
    var result = new $c_sci_$colon$colon(prefix.head__O(), this);
    var curr = result;
    var that = $as_sci_List(prefix.tail__O());
    while ((!that.isEmpty__Z())) {
      var temp = new $c_sci_$colon$colon(that.head__O(), this);
      curr.sci_$colon$colon__f_next = temp;
      curr = temp;
      that = $as_sci_List(that.tail__O())
    };
    return result
  }
});
$c_sci_List.prototype.isEmpty__Z = (function() {
  return (this === $m_sci_Nil$())
});
$c_sci_List.prototype.prependedAll__sc_IterableOnce__sci_List = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    var x2 = $as_sci_List(prefix);
    return this.$colon$colon$colon__sci_List__sci_List(x2)
  };
  if ((prefix.knownSize__I() === 0)) {
    return this
  };
  if (false) {
    var x3 = $as_scm_ListBuffer(prefix);
    if (this.isEmpty__Z()) {
      return x3.toList__sci_List()
    }
  };
  var iter = prefix.iterator__sc_Iterator();
  if (iter.hasNext__Z()) {
    var result = new $c_sci_$colon$colon(iter.next__O(), this);
    var curr = result;
    while (iter.hasNext__Z()) {
      var temp = new $c_sci_$colon$colon(iter.next__O(), this);
      curr.sci_$colon$colon__f_next = temp;
      curr = temp
    };
    return result
  } else {
    return this
  }
});
$c_sci_List.prototype.foreach__F1__V = (function(f) {
  var these = this;
  while ((!these.isEmpty__Z())) {
    f.apply__O__O(these.head__O());
    these = $as_sci_List(these.tail__O())
  }
});
$c_sci_List.prototype.reverse__sci_List = (function() {
  var result = $m_sci_Nil$();
  var these = this;
  while ((!these.isEmpty__Z())) {
    var rassoc$6 = these.head__O();
    var this$1 = result;
    result = new $c_sci_$colon$colon(rassoc$6, this$1);
    these = $as_sci_List(these.tail__O())
  };
  return result
});
$c_sci_List.prototype.length__I = (function() {
  var these = this;
  var len = 0;
  while ((!these.isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sci_List(these.tail__O())
  };
  return len
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len))
});
$c_sci_List.prototype.className__T = (function() {
  return "List"
});
$c_sci_List.prototype.equals__O__Z = (function(o) {
  if ((o instanceof $c_sci_List)) {
    var x2 = $as_sci_List(o);
    return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2)
  } else {
    return $f_sc_Seq__equals__O__Z(this, o)
  }
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this)
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.sci_Vector__f_prefix1 = null
}
$c_sci_VectorImpl.prototype = new $h_sci_Vector();
$c_sci_VectorImpl.prototype.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
  /*<skip>*/
}
$h_sci_VectorImpl.prototype = $c_sci_VectorImpl.prototype;
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.scm_ArraySeq$ofChar__f_array = null;
  this.scm_ArraySeq$ofChar__f_array = array
}
$c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofChar.prototype.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofChar.prototype = $c_scm_ArraySeq$ofChar.prototype;
$c_scm_ArraySeq$ofChar.prototype.length__I = (function() {
  return this.scm_ArraySeq$ofChar__f_array.u.length
});
$c_scm_ArraySeq$ofChar.prototype.apply__I__C = (function(index) {
  return this.scm_ArraySeq$ofChar__f_array.get(index)
});
$c_scm_ArraySeq$ofChar.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofChar__f_array;
  return this$1.arrayHash$mCc$sp__AC__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofChar.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofChar)) {
    var x2 = $as_scm_ArraySeq$ofChar(that);
    var a = this.scm_ArraySeq$ofChar__f_array;
    var b = x2.scm_ArraySeq$ofChar__f_array;
    return $m_ju_Arrays$().equals__AC__AC__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofChar.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.scm_ArraySeq$ofChar__f_array)
});
$c_scm_ArraySeq$ofChar.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  var jsb = sb.scm_StringBuilder__f_underlying;
  if ((start.length !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  var len = this.scm_ArraySeq$ofChar__f_array.u.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.append__AC__jl_StringBuilder(this.scm_ArraySeq$ofChar__f_array)
    } else {
      jsb.length__I();
      var c = this.scm_ArraySeq$ofChar__f_array.get(0);
      var str = $as_T(String.fromCharCode(c));
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
      var i = 1;
      while ((i < len)) {
        jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var c$1 = this.scm_ArraySeq$ofChar__f_array.get(i);
        var str$1 = $as_T(String.fromCharCode(c$1));
        jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
        i = ((1 + i) | 0)
      }
    }
  };
  if ((end.length !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return sb
});
$c_scm_ArraySeq$ofChar.prototype.apply__O__O = (function(v1) {
  return $bC(this.apply__I__C($uI(v1)))
});
$c_scm_ArraySeq$ofChar.prototype.apply__I__O = (function(i) {
  return $bC(this.apply__I__C(i))
});
$c_scm_ArraySeq$ofChar.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofChar__f_array
});
function $as_scm_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofChar"))
}
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofChar)))
}
function $asArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofChar;", depth))
}
var $d_scm_ArraySeq$ofChar = new $TypeData().initClass({
  scm_ArraySeq$ofChar: 0
}, false, "scala.collection.mutable.ArraySeq$ofChar", {
  scm_ArraySeq$ofChar: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofChar.prototype.$classData = $d_scm_ArraySeq$ofChar;
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.sci_BigVector__f_suffix1 = suffix1;
  $thiz.sci_BigVector__f_length0 = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz
}
/** @constructor */
function $c_sci_BigVector() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0
}
$c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$c_sci_BigVector.prototype.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
  /*<skip>*/
}
$h_sci_BigVector.prototype = $c_sci_BigVector.prototype;
function $as_sci_BigVector(obj) {
  return (((obj instanceof $c_sci_BigVector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BigVector"))
}
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BigVector)))
}
function $asArrayOf_sci_BigVector(obj, depth) {
  return (($isArrayOf_sci_BigVector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BigVector;", depth))
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.sci_Vector__f_prefix1 = null;
  $ct_sci_Vector__AO__(this, _data1)
}
$c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$c_sci_Vector1.prototype.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
  /*<skip>*/
}
$h_sci_Vector1.prototype = $c_sci_Vector1.prototype;
$c_sci_Vector1.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_Vector__f_prefix1.u.length))) {
    return this.sci_Vector__f_prefix1.get(index)
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector1.prototype.appended__O__sci_Vector = (function(elem) {
  var len1 = this.sci_Vector__f_prefix1.u.length;
  if ((len1 < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_Vector__f_prefix1, elem))
  } else {
    var $$x2 = this.sci_Vector__f_prefix1;
    var $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a = new $ac_O(1);
    a.set(0, elem);
    return new $c_sci_Vector2($$x2, 32, $$x1, a, 33)
  }
});
$c_sci_Vector1.prototype.vectorSliceCount__I = (function() {
  return 1
});
$c_sci_Vector1.prototype.vectorSlice__I__AO = (function(idx) {
  return this.sci_Vector__f_prefix1
});
$c_sci_Vector1.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector1.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_Vector__f_prefix1.u.length))) {
    return this.sci_Vector__f_prefix1.get(index)
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
function $as_sci_Vector1(obj) {
  return (((obj instanceof $c_sci_Vector1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector1"))
}
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector1)))
}
function $asArrayOf_sci_Vector1(obj, depth) {
  return (($isArrayOf_sci_Vector1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector1;", depth))
}
var $d_sci_Vector1 = new $TypeData().initClass({
  sci_Vector1: 0
}, false, "scala.collection.immutable.Vector1", {
  sci_Vector1: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector1.prototype.$classData = $d_sci_Vector1;
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.sci_$colon$colon__f_head = null;
  this.sci_$colon$colon__f_next = null;
  this.sci_$colon$colon__f_head = head;
  this.sci_$colon$colon__f_next = next
}
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
  /*<skip>*/
}
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.sci_$colon$colon__f_head
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::"
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.sci_$colon$colon__f_head;
      break
    }
    case 1: {
      return this.sci_$colon$colon__f_next;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.sci_$colon$colon__f_next
});
function $as_sci_$colon$colon(obj) {
  return (((obj instanceof $c_sci_$colon$colon) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.$colon$colon"))
}
function $isArrayOf_sci_$colon$colon(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_$colon$colon)))
}
function $asArrayOf_sci_$colon$colon(obj, depth) {
  return (($isArrayOf_sci_$colon$colon(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.$colon$colon;", depth))
}
var $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  new $c_T2($m_sci_Nil$(), $m_sci_Nil$())
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
  /*<skip>*/
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list")
});
$c_sci_Nil$.prototype.tail__E = (function() {
  throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty list")
});
$c_sci_Nil$.prototype.knownSize__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil"
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_Nil$.prototype.tail__O = (function() {
  this.tail__E()
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
/** @constructor */
function $c_sci_Vector0$() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, 0)
}
$c_sci_Vector0$.prototype = new $h_sci_BigVector();
$c_sci_Vector0$.prototype.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
  /*<skip>*/
}
$h_sci_Vector0$.prototype = $c_sci_Vector0$.prototype;
$c_sci_Vector0$.prototype.apply__I__E = (function(index) {
  throw this.ioob__I__jl_IndexOutOfBoundsException(index)
});
$c_sci_Vector0$.prototype.appended__O__sci_Vector = (function(elem) {
  var a = new $ac_O(1);
  a.set(0, elem);
  return new $c_sci_Vector1(a)
});
$c_sci_Vector0$.prototype.vectorSliceCount__I = (function() {
  return 0
});
$c_sci_Vector0$.prototype.vectorSlice__I__AO = (function(idx) {
  return null
});
$c_sci_Vector0$.prototype.equals__O__Z = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)))
});
$c_sci_Vector0$.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"))
});
$c_sci_Vector0$.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector0$.prototype.apply__O__O = (function(v1) {
  this.apply__I__E($uI(v1))
});
$c_sci_Vector0$.prototype.apply__I__O = (function(i) {
  this.apply__I__E(i)
});
var $d_sci_Vector0$ = new $TypeData().initClass({
  sci_Vector0$: 0
}, false, "scala.collection.immutable.Vector0$", {
  sci_Vector0$: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector0$.prototype.$classData = $d_sci_Vector0$;
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$()
  };
  return $n_sci_Vector0$
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector2__f_len1 = 0;
  this.sci_Vector2__f_data2 = null;
  this.sci_Vector2__f_len1 = len1;
  this.sci_Vector2__f_data2 = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector2.prototype = new $h_sci_BigVector();
$c_sci_Vector2.prototype.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
  /*<skip>*/
}
$h_sci_Vector2.prototype = $c_sci_Vector2.prototype;
$c_sci_Vector2.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.sci_Vector2__f_data2.u.length) ? this.sci_Vector2__f_data2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get((31 & io)))
    } else {
      return this.sci_Vector__f_prefix1.get(index)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector2.prototype.appended__O__sci_Vector = (function(elem) {
  if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector2__f_len1;
    var x$5 = this.sci_Vector2__f_data2;
    return new $c_sci_Vector2(x$3, x$4, x$5, x$1, x$2)
  } else if ((this.sci_Vector2__f_data2.u.length < 30)) {
    var x$6 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector2__f_data2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    a.set(0, elem);
    var x$8 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$9 = this.sci_Vector__f_prefix1;
    var x$10 = this.sci_Vector2__f_len1;
    return new $c_sci_Vector2(x$9, x$10, x$6, a, x$8)
  } else {
    var $$x5 = this.sci_Vector__f_prefix1;
    var $$x4 = this.sci_Vector2__f_len1;
    var $$x3 = this.sci_Vector2__f_data2;
    var $$x2 = this.sci_Vector2__f_len1;
    var $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x = this.sci_BigVector__f_suffix1;
    var a$1 = new ($d_O.getArrayOf().getArrayOf().constr)(1);
    a$1.set(0, x);
    var a$2 = new $ac_O(1);
    a$2.set(0, elem);
    return new $c_sci_Vector3($$x5, $$x4, $$x3, ((960 + $$x2) | 0), $$x1, a$1, a$2, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector2.prototype.vectorSliceCount__I = (function() {
  return 3
});
$c_sci_Vector2.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector2__f_data2;
      break
    }
    case 2: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector2.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector2.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.sci_Vector2__f_data2.u.length) ? this.sci_Vector2__f_data2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get((31 & io)))
    } else {
      return this.sci_Vector__f_prefix1.get(index)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
function $as_sci_Vector2(obj) {
  return (((obj instanceof $c_sci_Vector2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector2"))
}
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector2)))
}
function $asArrayOf_sci_Vector2(obj, depth) {
  return (($isArrayOf_sci_Vector2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector2;", depth))
}
var $d_sci_Vector2 = new $TypeData().initClass({
  sci_Vector2: 0
}, false, "scala.collection.immutable.Vector2", {
  sci_Vector2: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector2.prototype.$classData = $d_sci_Vector2;
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector3__f_len1 = 0;
  this.sci_Vector3__f_prefix2 = null;
  this.sci_Vector3__f_len12 = 0;
  this.sci_Vector3__f_data3 = null;
  this.sci_Vector3__f_suffix2 = null;
  this.sci_Vector3__f_len1 = len1;
  this.sci_Vector3__f_prefix2 = prefix2;
  this.sci_Vector3__f_len12 = len12;
  this.sci_Vector3__f_data3 = data3;
  this.sci_Vector3__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector3.prototype = new $h_sci_BigVector();
$c_sci_Vector3.prototype.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
  /*<skip>*/
}
$h_sci_Vector3.prototype = $c_sci_Vector3.prototype;
$c_sci_Vector3.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.sci_Vector3__f_data3.u.length) ? this.sci_Vector3__f_data3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector3__f_suffix2.u.length) ? this.sci_Vector3__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1)))
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return this.sci_Vector3__f_prefix2.get(((io$2 >>> 5) | 0)).get((31 & io$2))
    } else {
      return this.sci_Vector__f_prefix1.get(index)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector3.prototype.appended__O__sci_Vector = (function(elem) {
  if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector3__f_len1;
    var x$5 = this.sci_Vector3__f_prefix2;
    var x$6 = this.sci_Vector3__f_len12;
    var x$7 = this.sci_Vector3__f_data3;
    var x$8 = this.sci_Vector3__f_suffix2;
    return new $c_sci_Vector3(x$3, x$4, x$5, x$6, x$7, x$8, x$1, x$2)
  } else if ((this.sci_Vector3__f_suffix2.u.length < 31)) {
    var x$9 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    a.set(0, elem);
    var x$11 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$12 = this.sci_Vector__f_prefix1;
    var x$13 = this.sci_Vector3__f_len1;
    var x$14 = this.sci_Vector3__f_prefix2;
    var x$15 = this.sci_Vector3__f_len12;
    var x$16 = this.sci_Vector3__f_data3;
    return new $c_sci_Vector3(x$12, x$13, x$14, x$15, x$16, x$9, a, x$11)
  } else if ((this.sci_Vector3__f_data3.u.length < 30)) {
    var x$17 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_data3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var x$18 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    a$1.set(0, elem);
    var x$20 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$21 = this.sci_Vector__f_prefix1;
    var x$22 = this.sci_Vector3__f_len1;
    var x$23 = this.sci_Vector3__f_prefix2;
    var x$24 = this.sci_Vector3__f_len12;
    return new $c_sci_Vector3(x$21, x$22, x$23, x$24, x$17, x$18, a$1, x$20)
  } else {
    var $$x8 = this.sci_Vector__f_prefix1;
    var $$x7 = this.sci_Vector3__f_len1;
    var $$x6 = this.sci_Vector3__f_prefix2;
    var $$x5 = this.sci_Vector3__f_len12;
    var $$x4 = this.sci_Vector3__f_data3;
    var $$x3 = this.sci_Vector3__f_len12;
    var $$x2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a$2 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(1);
    a$2.set(0, x);
    var $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$3 = new $ac_O(1);
    a$3.set(0, elem);
    return new $c_sci_Vector4($$x8, $$x7, $$x6, $$x5, $$x4, ((30720 + $$x3) | 0), $$x2, a$2, $$x1, a$3, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector3.prototype.vectorSliceCount__I = (function() {
  return 5
});
$c_sci_Vector3.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector3__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector3__f_data3;
      break
    }
    case 3: {
      return this.sci_Vector3__f_suffix2;
      break
    }
    case 4: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector3.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector3.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.sci_Vector3__f_data3.u.length) ? this.sci_Vector3__f_data3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector3__f_suffix2.u.length) ? this.sci_Vector3__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1)))
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return this.sci_Vector3__f_prefix2.get(((io$2 >>> 5) | 0)).get((31 & io$2))
    } else {
      return this.sci_Vector__f_prefix1.get(index)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
function $as_sci_Vector3(obj) {
  return (((obj instanceof $c_sci_Vector3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector3"))
}
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector3)))
}
function $asArrayOf_sci_Vector3(obj, depth) {
  return (($isArrayOf_sci_Vector3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector3;", depth))
}
var $d_sci_Vector3 = new $TypeData().initClass({
  sci_Vector3: 0
}, false, "scala.collection.immutable.Vector3", {
  sci_Vector3: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector3.prototype.$classData = $d_sci_Vector3;
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector4__f_len1 = 0;
  this.sci_Vector4__f_prefix2 = null;
  this.sci_Vector4__f_len12 = 0;
  this.sci_Vector4__f_prefix3 = null;
  this.sci_Vector4__f_len123 = 0;
  this.sci_Vector4__f_data4 = null;
  this.sci_Vector4__f_suffix3 = null;
  this.sci_Vector4__f_suffix2 = null;
  this.sci_Vector4__f_len1 = len1;
  this.sci_Vector4__f_prefix2 = prefix2;
  this.sci_Vector4__f_len12 = len12;
  this.sci_Vector4__f_prefix3 = prefix3;
  this.sci_Vector4__f_len123 = len123;
  this.sci_Vector4__f_data4 = data4;
  this.sci_Vector4__f_suffix3 = suffix3;
  this.sci_Vector4__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector4.prototype = new $h_sci_BigVector();
$c_sci_Vector4.prototype.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
  /*<skip>*/
}
$h_sci_Vector4.prototype = $c_sci_Vector4.prototype;
$c_sci_Vector4.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.sci_Vector4__f_data4.u.length) ? this.sci_Vector4__f_data4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector4__f_suffix3.u.length) ? this.sci_Vector4__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector4__f_suffix2.u.length) ? this.sci_Vector4__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1))))
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return this.sci_Vector4__f_prefix3.get(((io$2 >>> 10) | 0)).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return this.sci_Vector4__f_prefix2.get(((io$3 >>> 5) | 0)).get((31 & io$3))
    } else {
      return this.sci_Vector__f_prefix1.get(index)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector4.prototype.appended__O__sci_Vector = (function(elem) {
  if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector4__f_len1;
    var x$5 = this.sci_Vector4__f_prefix2;
    var x$6 = this.sci_Vector4__f_len12;
    var x$7 = this.sci_Vector4__f_prefix3;
    var x$8 = this.sci_Vector4__f_len123;
    var x$9 = this.sci_Vector4__f_data4;
    var x$10 = this.sci_Vector4__f_suffix3;
    var x$11 = this.sci_Vector4__f_suffix2;
    return new $c_sci_Vector4(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$1, x$2)
  } else if ((this.sci_Vector4__f_suffix2.u.length < 31)) {
    var x$12 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    a.set(0, elem);
    var x$14 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$15 = this.sci_Vector__f_prefix1;
    var x$16 = this.sci_Vector4__f_len1;
    var x$17 = this.sci_Vector4__f_prefix2;
    var x$18 = this.sci_Vector4__f_len12;
    var x$19 = this.sci_Vector4__f_prefix3;
    var x$20 = this.sci_Vector4__f_len123;
    var x$21 = this.sci_Vector4__f_data4;
    var x$22 = this.sci_Vector4__f_suffix3;
    return new $c_sci_Vector4(x$15, x$16, x$17, x$18, x$19, x$20, x$21, x$22, x$12, a, x$14)
  } else if ((this.sci_Vector4__f_suffix3.u.length < 31)) {
    var x$23 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var x$24 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    a$1.set(0, elem);
    var x$26 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$27 = this.sci_Vector__f_prefix1;
    var x$28 = this.sci_Vector4__f_len1;
    var x$29 = this.sci_Vector4__f_prefix2;
    var x$30 = this.sci_Vector4__f_len12;
    var x$31 = this.sci_Vector4__f_prefix3;
    var x$32 = this.sci_Vector4__f_len123;
    var x$33 = this.sci_Vector4__f_data4;
    return new $c_sci_Vector4(x$27, x$28, x$29, x$30, x$31, x$32, x$33, x$23, x$24, a$1, x$26)
  } else if ((this.sci_Vector4__f_data4.u.length < 30)) {
    var x$34 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_data4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
    var x$35 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$36 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$2 = new $ac_O(1);
    a$2.set(0, elem);
    var x$38 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$39 = this.sci_Vector__f_prefix1;
    var x$40 = this.sci_Vector4__f_len1;
    var x$41 = this.sci_Vector4__f_prefix2;
    var x$42 = this.sci_Vector4__f_len12;
    var x$43 = this.sci_Vector4__f_prefix3;
    var x$44 = this.sci_Vector4__f_len123;
    return new $c_sci_Vector4(x$39, x$40, x$41, x$42, x$43, x$44, x$34, x$35, x$36, a$2, x$38)
  } else {
    var $$x11 = this.sci_Vector__f_prefix1;
    var $$x10 = this.sci_Vector4__f_len1;
    var $$x9 = this.sci_Vector4__f_prefix2;
    var $$x8 = this.sci_Vector4__f_len12;
    var $$x7 = this.sci_Vector4__f_prefix3;
    var $$x6 = this.sci_Vector4__f_len123;
    var $$x5 = this.sci_Vector4__f_data4;
    var $$x4 = this.sci_Vector4__f_len123;
    var $$x3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
    var x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var a$3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(1);
    a$3.set(0, x);
    var $$x2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$4 = new $ac_O(1);
    a$4.set(0, elem);
    return new $c_sci_Vector5($$x11, $$x10, $$x9, $$x8, $$x7, $$x6, $$x5, ((983040 + $$x4) | 0), $$x3, a$3, $$x2, $$x1, a$4, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector4.prototype.vectorSliceCount__I = (function() {
  return 7
});
$c_sci_Vector4.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector4__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector4__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector4__f_data4;
      break
    }
    case 4: {
      return this.sci_Vector4__f_suffix3;
      break
    }
    case 5: {
      return this.sci_Vector4__f_suffix2;
      break
    }
    case 6: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector4.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector4.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.sci_Vector4__f_data4.u.length) ? this.sci_Vector4__f_data4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector4__f_suffix3.u.length) ? this.sci_Vector4__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector4__f_suffix2.u.length) ? this.sci_Vector4__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1))))
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return this.sci_Vector4__f_prefix3.get(((io$2 >>> 10) | 0)).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return this.sci_Vector4__f_prefix2.get(((io$3 >>> 5) | 0)).get((31 & io$3))
    } else {
      return this.sci_Vector__f_prefix1.get(index)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
function $as_sci_Vector4(obj) {
  return (((obj instanceof $c_sci_Vector4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector4"))
}
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector4)))
}
function $asArrayOf_sci_Vector4(obj, depth) {
  return (($isArrayOf_sci_Vector4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector4;", depth))
}
var $d_sci_Vector4 = new $TypeData().initClass({
  sci_Vector4: 0
}, false, "scala.collection.immutable.Vector4", {
  sci_Vector4: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector4.prototype.$classData = $d_sci_Vector4;
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector5__f_len1 = 0;
  this.sci_Vector5__f_prefix2 = null;
  this.sci_Vector5__f_len12 = 0;
  this.sci_Vector5__f_prefix3 = null;
  this.sci_Vector5__f_len123 = 0;
  this.sci_Vector5__f_prefix4 = null;
  this.sci_Vector5__f_len1234 = 0;
  this.sci_Vector5__f_data5 = null;
  this.sci_Vector5__f_suffix4 = null;
  this.sci_Vector5__f_suffix3 = null;
  this.sci_Vector5__f_suffix2 = null;
  this.sci_Vector5__f_len1 = len1;
  this.sci_Vector5__f_prefix2 = prefix2;
  this.sci_Vector5__f_len12 = len12;
  this.sci_Vector5__f_prefix3 = prefix3;
  this.sci_Vector5__f_len123 = len123;
  this.sci_Vector5__f_prefix4 = prefix4;
  this.sci_Vector5__f_len1234 = len1234;
  this.sci_Vector5__f_data5 = data5;
  this.sci_Vector5__f_suffix4 = suffix4;
  this.sci_Vector5__f_suffix3 = suffix3;
  this.sci_Vector5__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector5.prototype = new $h_sci_BigVector();
$c_sci_Vector5.prototype.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
  /*<skip>*/
}
$h_sci_Vector5.prototype = $c_sci_Vector5.prototype;
$c_sci_Vector5.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.sci_Vector5__f_data5.u.length) ? this.sci_Vector5__f_data5.get(i5).get(i4).get(i3).get(i2).get(i1) : ((i4 < this.sci_Vector5__f_suffix4.u.length) ? this.sci_Vector5__f_suffix4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector5__f_suffix3.u.length) ? this.sci_Vector5__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector5__f_suffix2.u.length) ? this.sci_Vector5__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1)))))
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return this.sci_Vector5__f_prefix4.get(((io$2 >>> 15) | 0)).get((31 & ((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return this.sci_Vector5__f_prefix3.get(((io$3 >>> 10) | 0)).get((31 & ((io$3 >>> 5) | 0))).get((31 & io$3))
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return this.sci_Vector5__f_prefix2.get(((io$4 >>> 5) | 0)).get((31 & io$4))
    } else {
      return this.sci_Vector__f_prefix1.get(index)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector5.prototype.appended__O__sci_Vector = (function(elem) {
  if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector5__f_len1;
    var x$5 = this.sci_Vector5__f_prefix2;
    var x$6 = this.sci_Vector5__f_len12;
    var x$7 = this.sci_Vector5__f_prefix3;
    var x$8 = this.sci_Vector5__f_len123;
    var x$9 = this.sci_Vector5__f_prefix4;
    var x$10 = this.sci_Vector5__f_len1234;
    var x$11 = this.sci_Vector5__f_data5;
    var x$12 = this.sci_Vector5__f_suffix4;
    var x$13 = this.sci_Vector5__f_suffix3;
    var x$14 = this.sci_Vector5__f_suffix2;
    return new $c_sci_Vector5(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, x$1, x$2)
  } else if ((this.sci_Vector5__f_suffix2.u.length < 31)) {
    var x$15 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    a.set(0, elem);
    var x$17 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$18 = this.sci_Vector__f_prefix1;
    var x$19 = this.sci_Vector5__f_len1;
    var x$20 = this.sci_Vector5__f_prefix2;
    var x$21 = this.sci_Vector5__f_len12;
    var x$22 = this.sci_Vector5__f_prefix3;
    var x$23 = this.sci_Vector5__f_len123;
    var x$24 = this.sci_Vector5__f_prefix4;
    var x$25 = this.sci_Vector5__f_len1234;
    var x$26 = this.sci_Vector5__f_data5;
    var x$27 = this.sci_Vector5__f_suffix4;
    var x$28 = this.sci_Vector5__f_suffix3;
    return new $c_sci_Vector5(x$18, x$19, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$15, a, x$17)
  } else if ((this.sci_Vector5__f_suffix3.u.length < 31)) {
    var x$29 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var x$30 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    a$1.set(0, elem);
    var x$32 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$33 = this.sci_Vector__f_prefix1;
    var x$34 = this.sci_Vector5__f_len1;
    var x$35 = this.sci_Vector5__f_prefix2;
    var x$36 = this.sci_Vector5__f_len12;
    var x$37 = this.sci_Vector5__f_prefix3;
    var x$38 = this.sci_Vector5__f_len123;
    var x$39 = this.sci_Vector5__f_prefix4;
    var x$40 = this.sci_Vector5__f_len1234;
    var x$41 = this.sci_Vector5__f_data5;
    var x$42 = this.sci_Vector5__f_suffix4;
    return new $c_sci_Vector5(x$33, x$34, x$35, x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$29, x$30, a$1, x$32)
  } else if ((this.sci_Vector5__f_suffix4.u.length < 31)) {
    var x$43 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
    var x$44 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$45 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$2 = new $ac_O(1);
    a$2.set(0, elem);
    var x$47 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$48 = this.sci_Vector__f_prefix1;
    var x$49 = this.sci_Vector5__f_len1;
    var x$50 = this.sci_Vector5__f_prefix2;
    var x$51 = this.sci_Vector5__f_len12;
    var x$52 = this.sci_Vector5__f_prefix3;
    var x$53 = this.sci_Vector5__f_len123;
    var x$54 = this.sci_Vector5__f_prefix4;
    var x$55 = this.sci_Vector5__f_len1234;
    var x$56 = this.sci_Vector5__f_data5;
    return new $c_sci_Vector5(x$48, x$49, x$50, x$51, x$52, x$53, x$54, x$55, x$56, x$43, x$44, x$45, a$2, x$47)
  } else if ((this.sci_Vector5__f_data5.u.length < 30)) {
    var x$57 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_data5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1)))), 5);
    var x$58 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$59 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$60 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$3 = new $ac_O(1);
    a$3.set(0, elem);
    var x$62 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$63 = this.sci_Vector__f_prefix1;
    var x$64 = this.sci_Vector5__f_len1;
    var x$65 = this.sci_Vector5__f_prefix2;
    var x$66 = this.sci_Vector5__f_len12;
    var x$67 = this.sci_Vector5__f_prefix3;
    var x$68 = this.sci_Vector5__f_len123;
    var x$69 = this.sci_Vector5__f_prefix4;
    var x$70 = this.sci_Vector5__f_len1234;
    return new $c_sci_Vector5(x$63, x$64, x$65, x$66, x$67, x$68, x$69, x$70, x$57, x$58, x$59, x$60, a$3, x$62)
  } else {
    var $$x14 = this.sci_Vector__f_prefix1;
    var $$x13 = this.sci_Vector5__f_len1;
    var $$x12 = this.sci_Vector5__f_prefix2;
    var $$x11 = this.sci_Vector5__f_len12;
    var $$x10 = this.sci_Vector5__f_prefix3;
    var $$x9 = this.sci_Vector5__f_len123;
    var $$x8 = this.sci_Vector5__f_prefix4;
    var $$x7 = this.sci_Vector5__f_len1234;
    var $$x6 = this.sci_Vector5__f_data5;
    var $$x5 = this.sci_Vector5__f_len1234;
    var $$x4 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty6;
    var x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
    var a$4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(1);
    a$4.set(0, x);
    var $$x3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var $$x2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var $$x1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$5 = new $ac_O(1);
    a$5.set(0, elem);
    return new $c_sci_Vector6($$x14, $$x13, $$x12, $$x11, $$x10, $$x9, $$x8, $$x7, $$x6, ((31457280 + $$x5) | 0), $$x4, a$4, $$x3, $$x2, $$x1, a$5, ((1 + this.sci_BigVector__f_length0) | 0))
  }
});
$c_sci_Vector5.prototype.vectorSliceCount__I = (function() {
  return 9
});
$c_sci_Vector5.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector5__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector5__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector5__f_prefix4;
      break
    }
    case 4: {
      return this.sci_Vector5__f_data5;
      break
    }
    case 5: {
      return this.sci_Vector5__f_suffix4;
      break
    }
    case 6: {
      return this.sci_Vector5__f_suffix3;
      break
    }
    case 7: {
      return this.sci_Vector5__f_suffix2;
      break
    }
    case 8: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector5.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector5.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.sci_Vector5__f_data5.u.length) ? this.sci_Vector5__f_data5.get(i5).get(i4).get(i3).get(i2).get(i1) : ((i4 < this.sci_Vector5__f_suffix4.u.length) ? this.sci_Vector5__f_suffix4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector5__f_suffix3.u.length) ? this.sci_Vector5__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector5__f_suffix2.u.length) ? this.sci_Vector5__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1)))))
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return this.sci_Vector5__f_prefix4.get(((io$2 >>> 15) | 0)).get((31 & ((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return this.sci_Vector5__f_prefix3.get(((io$3 >>> 10) | 0)).get((31 & ((io$3 >>> 5) | 0))).get((31 & io$3))
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return this.sci_Vector5__f_prefix2.get(((io$4 >>> 5) | 0)).get((31 & io$4))
    } else {
      return this.sci_Vector__f_prefix1.get(index)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
function $as_sci_Vector5(obj) {
  return (((obj instanceof $c_sci_Vector5) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector5"))
}
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector5)))
}
function $asArrayOf_sci_Vector5(obj, depth) {
  return (($isArrayOf_sci_Vector5(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector5;", depth))
}
var $d_sci_Vector5 = new $TypeData().initClass({
  sci_Vector5: 0
}, false, "scala.collection.immutable.Vector5", {
  sci_Vector5: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector5.prototype.$classData = $d_sci_Vector5;
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector6__f_len1 = 0;
  this.sci_Vector6__f_prefix2 = null;
  this.sci_Vector6__f_len12 = 0;
  this.sci_Vector6__f_prefix3 = null;
  this.sci_Vector6__f_len123 = 0;
  this.sci_Vector6__f_prefix4 = null;
  this.sci_Vector6__f_len1234 = 0;
  this.sci_Vector6__f_prefix5 = null;
  this.sci_Vector6__f_len12345 = 0;
  this.sci_Vector6__f_data6 = null;
  this.sci_Vector6__f_suffix5 = null;
  this.sci_Vector6__f_suffix4 = null;
  this.sci_Vector6__f_suffix3 = null;
  this.sci_Vector6__f_suffix2 = null;
  this.sci_Vector6__f_len1 = len1;
  this.sci_Vector6__f_prefix2 = prefix2;
  this.sci_Vector6__f_len12 = len12;
  this.sci_Vector6__f_prefix3 = prefix3;
  this.sci_Vector6__f_len123 = len123;
  this.sci_Vector6__f_prefix4 = prefix4;
  this.sci_Vector6__f_len1234 = len1234;
  this.sci_Vector6__f_prefix5 = prefix5;
  this.sci_Vector6__f_len12345 = len12345;
  this.sci_Vector6__f_data6 = data6;
  this.sci_Vector6__f_suffix5 = suffix5;
  this.sci_Vector6__f_suffix4 = suffix4;
  this.sci_Vector6__f_suffix3 = suffix3;
  this.sci_Vector6__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector6.prototype = new $h_sci_BigVector();
$c_sci_Vector6.prototype.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
  /*<skip>*/
}
$h_sci_Vector6.prototype = $c_sci_Vector6.prototype;
$c_sci_Vector6.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.sci_Vector6__f_data6.u.length) ? this.sci_Vector6__f_data6.get(i6).get(i5).get(i4).get(i3).get(i2).get(i1) : ((i5 < this.sci_Vector6__f_suffix5.u.length) ? this.sci_Vector6__f_suffix5.get(i5).get(i4).get(i3).get(i2).get(i1) : ((i4 < this.sci_Vector6__f_suffix4.u.length) ? this.sci_Vector6__f_suffix4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector6__f_suffix3.u.length) ? this.sci_Vector6__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector6__f_suffix2.u.length) ? this.sci_Vector6__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1))))))
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return this.sci_Vector6__f_prefix5.get(((io$2 >>> 20) | 0)).get((31 & ((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return this.sci_Vector6__f_prefix4.get(((io$3 >>> 15) | 0)).get((31 & ((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0))).get((31 & io$3))
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return this.sci_Vector6__f_prefix3.get(((io$4 >>> 10) | 0)).get((31 & ((io$4 >>> 5) | 0))).get((31 & io$4))
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return this.sci_Vector6__f_prefix2.get(((io$5 >>> 5) | 0)).get((31 & io$5))
    } else {
      return this.sci_Vector__f_prefix1.get(index)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
$c_sci_Vector6.prototype.appended__O__sci_Vector = (function(elem) {
  if ((this.sci_BigVector__f_suffix1.u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector6__f_len1;
    var x$5 = this.sci_Vector6__f_prefix2;
    var x$6 = this.sci_Vector6__f_len12;
    var x$7 = this.sci_Vector6__f_prefix3;
    var x$8 = this.sci_Vector6__f_len123;
    var x$9 = this.sci_Vector6__f_prefix4;
    var x$10 = this.sci_Vector6__f_len1234;
    var x$11 = this.sci_Vector6__f_prefix5;
    var x$12 = this.sci_Vector6__f_len12345;
    var x$13 = this.sci_Vector6__f_data6;
    var x$14 = this.sci_Vector6__f_suffix5;
    var x$15 = this.sci_Vector6__f_suffix4;
    var x$16 = this.sci_Vector6__f_suffix3;
    var x$17 = this.sci_Vector6__f_suffix2;
    return new $c_sci_Vector6(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$1, x$2)
  } else if ((this.sci_Vector6__f_suffix2.u.length < 31)) {
    var x$18 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    a.set(0, elem);
    var x$20 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$21 = this.sci_Vector__f_prefix1;
    var x$22 = this.sci_Vector6__f_len1;
    var x$23 = this.sci_Vector6__f_prefix2;
    var x$24 = this.sci_Vector6__f_len12;
    var x$25 = this.sci_Vector6__f_prefix3;
    var x$26 = this.sci_Vector6__f_len123;
    var x$27 = this.sci_Vector6__f_prefix4;
    var x$28 = this.sci_Vector6__f_len1234;
    var x$29 = this.sci_Vector6__f_prefix5;
    var x$30 = this.sci_Vector6__f_len12345;
    var x$31 = this.sci_Vector6__f_data6;
    var x$32 = this.sci_Vector6__f_suffix5;
    var x$33 = this.sci_Vector6__f_suffix4;
    var x$34 = this.sci_Vector6__f_suffix3;
    return new $c_sci_Vector6(x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$30, x$31, x$32, x$33, x$34, x$18, a, x$20)
  } else if ((this.sci_Vector6__f_suffix3.u.length < 31)) {
    var x$35 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var x$36 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    a$1.set(0, elem);
    var x$38 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$39 = this.sci_Vector__f_prefix1;
    var x$40 = this.sci_Vector6__f_len1;
    var x$41 = this.sci_Vector6__f_prefix2;
    var x$42 = this.sci_Vector6__f_len12;
    var x$43 = this.sci_Vector6__f_prefix3;
    var x$44 = this.sci_Vector6__f_len123;
    var x$45 = this.sci_Vector6__f_prefix4;
    var x$46 = this.sci_Vector6__f_len1234;
    var x$47 = this.sci_Vector6__f_prefix5;
    var x$48 = this.sci_Vector6__f_len12345;
    var x$49 = this.sci_Vector6__f_data6;
    var x$50 = this.sci_Vector6__f_suffix5;
    var x$51 = this.sci_Vector6__f_suffix4;
    return new $c_sci_Vector6(x$39, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, x$48, x$49, x$50, x$51, x$35, x$36, a$1, x$38)
  } else if ((this.sci_Vector6__f_suffix4.u.length < 31)) {
    var x$52 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
    var x$53 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$54 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$2 = new $ac_O(1);
    a$2.set(0, elem);
    var x$56 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$57 = this.sci_Vector__f_prefix1;
    var x$58 = this.sci_Vector6__f_len1;
    var x$59 = this.sci_Vector6__f_prefix2;
    var x$60 = this.sci_Vector6__f_len12;
    var x$61 = this.sci_Vector6__f_prefix3;
    var x$62 = this.sci_Vector6__f_len123;
    var x$63 = this.sci_Vector6__f_prefix4;
    var x$64 = this.sci_Vector6__f_len1234;
    var x$65 = this.sci_Vector6__f_prefix5;
    var x$66 = this.sci_Vector6__f_len12345;
    var x$67 = this.sci_Vector6__f_data6;
    var x$68 = this.sci_Vector6__f_suffix5;
    return new $c_sci_Vector6(x$57, x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$52, x$53, x$54, a$2, x$56)
  } else if ((this.sci_Vector6__f_suffix5.u.length < 31)) {
    var x$69 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1)))), 5);
    var x$70 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$71 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$72 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$3 = new $ac_O(1);
    a$3.set(0, elem);
    var x$74 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$75 = this.sci_Vector__f_prefix1;
    var x$76 = this.sci_Vector6__f_len1;
    var x$77 = this.sci_Vector6__f_prefix2;
    var x$78 = this.sci_Vector6__f_len12;
    var x$79 = this.sci_Vector6__f_prefix3;
    var x$80 = this.sci_Vector6__f_len123;
    var x$81 = this.sci_Vector6__f_prefix4;
    var x$82 = this.sci_Vector6__f_len1234;
    var x$83 = this.sci_Vector6__f_prefix5;
    var x$84 = this.sci_Vector6__f_len12345;
    var x$85 = this.sci_Vector6__f_data6;
    return new $c_sci_Vector6(x$75, x$76, x$77, x$78, x$79, x$80, x$81, x$82, x$83, x$84, x$85, x$69, x$70, x$71, x$72, a$3, x$74)
  } else if ((this.sci_Vector6__f_data6.u.length < 62)) {
    var x$86 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_data6, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1))))), 6);
    var x$87 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
    var x$88 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$89 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$90 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$4 = new $ac_O(1);
    a$4.set(0, elem);
    var x$92 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$93 = this.sci_Vector__f_prefix1;
    var x$94 = this.sci_Vector6__f_len1;
    var x$95 = this.sci_Vector6__f_prefix2;
    var x$96 = this.sci_Vector6__f_len12;
    var x$97 = this.sci_Vector6__f_prefix3;
    var x$98 = this.sci_Vector6__f_len123;
    var x$99 = this.sci_Vector6__f_prefix4;
    var x$100 = this.sci_Vector6__f_len1234;
    var x$101 = this.sci_Vector6__f_prefix5;
    var x$102 = this.sci_Vector6__f_len12345;
    return new $c_sci_Vector6(x$93, x$94, x$95, x$96, x$97, x$98, x$99, x$100, x$101, x$102, x$86, x$87, x$88, x$89, x$90, a$4, x$92)
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
$c_sci_Vector6.prototype.vectorSliceCount__I = (function() {
  return 11
});
$c_sci_Vector6.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector6__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector6__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector6__f_prefix4;
      break
    }
    case 4: {
      return this.sci_Vector6__f_prefix5;
      break
    }
    case 5: {
      return this.sci_Vector6__f_data6;
      break
    }
    case 6: {
      return this.sci_Vector6__f_suffix5;
      break
    }
    case 7: {
      return this.sci_Vector6__f_suffix4;
      break
    }
    case 8: {
      return this.sci_Vector6__f_suffix3;
      break
    }
    case 9: {
      return this.sci_Vector6__f_suffix2;
      break
    }
    case 10: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector6.prototype.appended__O__O = (function(elem) {
  return this.appended__O__sci_Vector(elem)
});
$c_sci_Vector6.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.sci_Vector6__f_data6.u.length) ? this.sci_Vector6__f_data6.get(i6).get(i5).get(i4).get(i3).get(i2).get(i1) : ((i5 < this.sci_Vector6__f_suffix5.u.length) ? this.sci_Vector6__f_suffix5.get(i5).get(i4).get(i3).get(i2).get(i1) : ((i4 < this.sci_Vector6__f_suffix4.u.length) ? this.sci_Vector6__f_suffix4.get(i4).get(i3).get(i2).get(i1) : ((i3 < this.sci_Vector6__f_suffix3.u.length) ? this.sci_Vector6__f_suffix3.get(i3).get(i2).get(i1) : ((i2 < this.sci_Vector6__f_suffix2.u.length) ? this.sci_Vector6__f_suffix2.get(i2).get(i1) : this.sci_BigVector__f_suffix1.get(i1))))))
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return this.sci_Vector6__f_prefix5.get(((io$2 >>> 20) | 0)).get((31 & ((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0))).get((31 & io$2))
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return this.sci_Vector6__f_prefix4.get(((io$3 >>> 15) | 0)).get((31 & ((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0))).get((31 & io$3))
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return this.sci_Vector6__f_prefix3.get(((io$4 >>> 10) | 0)).get((31 & ((io$4 >>> 5) | 0))).get((31 & io$4))
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return this.sci_Vector6__f_prefix2.get(((io$5 >>> 5) | 0)).get((31 & io$5))
    } else {
      return this.sci_Vector__f_prefix1.get(index)
    }
  } else {
    throw this.ioob__I__jl_IndexOutOfBoundsException(index)
  }
});
function $as_sci_Vector6(obj) {
  return (((obj instanceof $c_sci_Vector6) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector6"))
}
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector6)))
}
function $asArrayOf_sci_Vector6(obj, depth) {
  return (($isArrayOf_sci_Vector6(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector6;", depth))
}
var $d_sci_Vector6 = new $TypeData().initClass({
  sci_Vector6: 0
}, false, "scala.collection.immutable.Vector6", {
  sci_Vector6: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector6.prototype.$classData = $d_sci_Vector6;
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
  /*<skip>*/
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  var x = this.scm_StringBuilder__f_underlying.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_scm_StringBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(xs) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return this.scm_StringBuilder__f_underlying.length__I()
});
$c_scm_StringBuilder.prototype.knownSize__I = (function() {
  return this.scm_StringBuilder__f_underlying.length__I()
});
$c_scm_StringBuilder.prototype.addOne__C__scm_StringBuilder = (function(x) {
  var this$1 = this.scm_StringBuilder__f_underlying;
  var str = $as_T(String.fromCharCode(x));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
  return this
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.append__C__scm_StringBuilder = (function(x) {
  var this$1 = this.scm_StringBuilder__f_underlying;
  var str = $as_T(String.fromCharCode(x));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
  return this
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return (this.scm_StringBuilder__f_underlying.length__I() === 0)
});
$c_scm_StringBuilder.prototype.result__O = (function() {
  return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__C__scm_StringBuilder($uC(elem))
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
  return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
});
var $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
function $as_scm_ListBuffer(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
}
$c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray.prototype = $c_sjs_js_WrappedArray.prototype;
$c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_sjs_js_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
  var x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
$c_sjs_js_WrappedArray.prototype.length__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
});
$c_sjs_js_WrappedArray.prototype.knownSize__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
});
$c_sjs_js_WrappedArray.prototype.className__T = (function() {
  return "WrappedArray"
});
$c_sjs_js_WrappedArray.prototype.result__O = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.addOne__O__scm_Growable = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this
});
$c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"))
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth))
}
var $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
let $e_Scoin = $m_Lscoin_Scoin$();
export { $e_Scoin as Scoin };
//# sourceMappingURL=main.js.map

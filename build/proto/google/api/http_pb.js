/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.google.api.CustomHttpPattern', null, global);
goog.exportSymbol('proto.google.api.Http', null, global);
goog.exportSymbol('proto.google.api.HttpRule', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.Http = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Http.repeatedFields_, null);
};
goog.inherits(proto.google.api.Http, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.api.Http.displayName = 'proto.google.api.Http';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Http.repeatedFields_ = [1];
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.google.api.Http.prototype.toObject = function (opt_includeInstance) {
        return proto.google.api.Http.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.google.api.Http} msg The msg instance to transform.
     * @return {!Object}
     */
    proto.google.api.Http.toObject = function (includeInstance, msg) {
        var f, obj = {
            rulesList: jspb.Message.toObjectList(msg.getRulesList(), proto.google.api.HttpRule.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.Http}
 */
proto.google.api.Http.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.api.Http;
    return proto.google.api.Http.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Http} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Http}
 */
proto.google.api.Http.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.google.api.HttpRule;
                reader.readMessage(value, proto.google.api.HttpRule.deserializeBinaryFromReader);
                msg.addRules(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.Http.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.api.Http.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Http} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.api.Http.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getRulesList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(1, f, proto.google.api.HttpRule.serializeBinaryToWriter);
    }
};
/**
 * repeated HttpRule rules = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.api.HttpRule>}
 */
proto.google.api.Http.prototype.getRulesList = function () {
    return /** @type{!Array.<!proto.google.api.HttpRule>} */ (jspb.Message.getRepeatedWrapperField(this, proto.google.api.HttpRule, 1));
};
/** @param {!Array.<!proto.google.api.HttpRule>} value */
proto.google.api.Http.prototype.setRulesList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.google.api.HttpRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.HttpRule}
 */
proto.google.api.Http.prototype.addRules = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.api.HttpRule, opt_index);
};
proto.google.api.Http.prototype.clearRulesList = function () {
    this.setRulesList([]);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.HttpRule = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.HttpRule.repeatedFields_, proto.google.api.HttpRule.oneofGroups_);
};
goog.inherits(proto.google.api.HttpRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.api.HttpRule.displayName = 'proto.google.api.HttpRule';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.HttpRule.repeatedFields_ = [11];
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.api.HttpRule.oneofGroups_ = [[2, 3, 4, 5, 6, 8]];
/**
 * @enum {number}
 */
proto.google.api.HttpRule.PatternCase = {
    PATTERN_NOT_SET: 0,
    GET: 2,
    PUT: 3,
    POST: 4,
    DELETE: 5,
    PATCH: 6,
    CUSTOM: 8
};
/**
 * @return {proto.google.api.HttpRule.PatternCase}
 */
proto.google.api.HttpRule.prototype.getPatternCase = function () {
    return /** @type {proto.google.api.HttpRule.PatternCase} */ (jspb.Message.computeOneofCase(this, proto.google.api.HttpRule.oneofGroups_[0]));
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.google.api.HttpRule.prototype.toObject = function (opt_includeInstance) {
        return proto.google.api.HttpRule.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.google.api.HttpRule} msg The msg instance to transform.
     * @return {!Object}
     */
    proto.google.api.HttpRule.toObject = function (includeInstance, msg) {
        var f, obj = {
            selector: jspb.Message.getFieldWithDefault(msg, 1, ""),
            get: jspb.Message.getFieldWithDefault(msg, 2, ""),
            put: jspb.Message.getFieldWithDefault(msg, 3, ""),
            post: jspb.Message.getFieldWithDefault(msg, 4, ""),
            pb_delete: jspb.Message.getFieldWithDefault(msg, 5, ""),
            patch: jspb.Message.getFieldWithDefault(msg, 6, ""),
            custom: (f = msg.getCustom()) && proto.google.api.CustomHttpPattern.toObject(includeInstance, f),
            body: jspb.Message.getFieldWithDefault(msg, 7, ""),
            additionalBindingsList: jspb.Message.toObjectList(msg.getAdditionalBindingsList(), proto.google.api.HttpRule.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.HttpRule}
 */
proto.google.api.HttpRule.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.api.HttpRule;
    return proto.google.api.HttpRule.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.HttpRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.HttpRule}
 */
proto.google.api.HttpRule.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readString());
                msg.setSelector(value);
                break;
            case 2:
                var value = (reader.readString());
                msg.setGet(value);
                break;
            case 3:
                var value = (reader.readString());
                msg.setPut(value);
                break;
            case 4:
                var value = (reader.readString());
                msg.setPost(value);
                break;
            case 5:
                var value = (reader.readString());
                msg.setDelete(value);
                break;
            case 6:
                var value = (reader.readString());
                msg.setPatch(value);
                break;
            case 8:
                var value = new proto.google.api.CustomHttpPattern;
                reader.readMessage(value, proto.google.api.CustomHttpPattern.deserializeBinaryFromReader);
                msg.setCustom(value);
                break;
            case 7:
                var value = (reader.readString());
                msg.setBody(value);
                break;
            case 11:
                var value = new proto.google.api.HttpRule;
                reader.readMessage(value, proto.google.api.HttpRule.deserializeBinaryFromReader);
                msg.addAdditionalBindings(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.HttpRule.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.api.HttpRule.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.HttpRule} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.api.HttpRule.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getSelector();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 2));
    if (f != null) {
        writer.writeString(2, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 3));
    if (f != null) {
        writer.writeString(3, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 4));
    if (f != null) {
        writer.writeString(4, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 5));
    if (f != null) {
        writer.writeString(5, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 6));
    if (f != null) {
        writer.writeString(6, f);
    }
    f = message.getCustom();
    if (f != null) {
        writer.writeMessage(8, f, proto.google.api.CustomHttpPattern.serializeBinaryToWriter);
    }
    f = message.getBody();
    if (f.length > 0) {
        writer.writeString(7, f);
    }
    f = message.getAdditionalBindingsList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(11, f, proto.google.api.HttpRule.serializeBinaryToWriter);
    }
};
/**
 * optional string selector = 1;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getSelector = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.google.api.HttpRule.prototype.setSelector = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * optional string get = 2;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getGet = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.google.api.HttpRule.prototype.setGet = function (value) {
    jspb.Message.setOneofField(this, 2, proto.google.api.HttpRule.oneofGroups_[0], value);
};
proto.google.api.HttpRule.prototype.clearGet = function () {
    jspb.Message.setOneofField(this, 2, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.HttpRule.prototype.hasGet = function () {
    return jspb.Message.getField(this, 2) != null;
};
/**
 * optional string put = 3;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getPut = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};
/** @param {string} value */
proto.google.api.HttpRule.prototype.setPut = function (value) {
    jspb.Message.setOneofField(this, 3, proto.google.api.HttpRule.oneofGroups_[0], value);
};
proto.google.api.HttpRule.prototype.clearPut = function () {
    jspb.Message.setOneofField(this, 3, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.HttpRule.prototype.hasPut = function () {
    return jspb.Message.getField(this, 3) != null;
};
/**
 * optional string post = 4;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getPost = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};
/** @param {string} value */
proto.google.api.HttpRule.prototype.setPost = function (value) {
    jspb.Message.setOneofField(this, 4, proto.google.api.HttpRule.oneofGroups_[0], value);
};
proto.google.api.HttpRule.prototype.clearPost = function () {
    jspb.Message.setOneofField(this, 4, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.HttpRule.prototype.hasPost = function () {
    return jspb.Message.getField(this, 4) != null;
};
/**
 * optional string delete = 5;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getDelete = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};
/** @param {string} value */
proto.google.api.HttpRule.prototype.setDelete = function (value) {
    jspb.Message.setOneofField(this, 5, proto.google.api.HttpRule.oneofGroups_[0], value);
};
proto.google.api.HttpRule.prototype.clearDelete = function () {
    jspb.Message.setOneofField(this, 5, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.HttpRule.prototype.hasDelete = function () {
    return jspb.Message.getField(this, 5) != null;
};
/**
 * optional string patch = 6;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getPatch = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};
/** @param {string} value */
proto.google.api.HttpRule.prototype.setPatch = function (value) {
    jspb.Message.setOneofField(this, 6, proto.google.api.HttpRule.oneofGroups_[0], value);
};
proto.google.api.HttpRule.prototype.clearPatch = function () {
    jspb.Message.setOneofField(this, 6, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.HttpRule.prototype.hasPatch = function () {
    return jspb.Message.getField(this, 6) != null;
};
/**
 * optional CustomHttpPattern custom = 8;
 * @return {?proto.google.api.CustomHttpPattern}
 */
proto.google.api.HttpRule.prototype.getCustom = function () {
    return /** @type{?proto.google.api.CustomHttpPattern} */ (jspb.Message.getWrapperField(this, proto.google.api.CustomHttpPattern, 8));
};
/** @param {?proto.google.api.CustomHttpPattern|undefined} value */
proto.google.api.HttpRule.prototype.setCustom = function (value) {
    jspb.Message.setOneofWrapperField(this, 8, proto.google.api.HttpRule.oneofGroups_[0], value);
};
proto.google.api.HttpRule.prototype.clearCustom = function () {
    this.setCustom(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.HttpRule.prototype.hasCustom = function () {
    return jspb.Message.getField(this, 8) != null;
};
/**
 * optional string body = 7;
 * @return {string}
 */
proto.google.api.HttpRule.prototype.getBody = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};
/** @param {string} value */
proto.google.api.HttpRule.prototype.setBody = function (value) {
    jspb.Message.setField(this, 7, value);
};
/**
 * repeated HttpRule additional_bindings = 11;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.api.HttpRule>}
 */
proto.google.api.HttpRule.prototype.getAdditionalBindingsList = function () {
    return /** @type{!Array.<!proto.google.api.HttpRule>} */ (jspb.Message.getRepeatedWrapperField(this, proto.google.api.HttpRule, 11));
};
/** @param {!Array.<!proto.google.api.HttpRule>} value */
proto.google.api.HttpRule.prototype.setAdditionalBindingsList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 11, value);
};
/**
 * @param {!proto.google.api.HttpRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.HttpRule}
 */
proto.google.api.HttpRule.prototype.addAdditionalBindings = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.api.HttpRule, opt_index);
};
proto.google.api.HttpRule.prototype.clearAdditionalBindingsList = function () {
    this.setAdditionalBindingsList([]);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.CustomHttpPattern = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.CustomHttpPattern, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.api.CustomHttpPattern.displayName = 'proto.google.api.CustomHttpPattern';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.google.api.CustomHttpPattern.prototype.toObject = function (opt_includeInstance) {
        return proto.google.api.CustomHttpPattern.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.google.api.CustomHttpPattern} msg The msg instance to transform.
     * @return {!Object}
     */
    proto.google.api.CustomHttpPattern.toObject = function (includeInstance, msg) {
        var f, obj = {
            kind: jspb.Message.getFieldWithDefault(msg, 1, ""),
            path: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.CustomHttpPattern}
 */
proto.google.api.CustomHttpPattern.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.api.CustomHttpPattern;
    return proto.google.api.CustomHttpPattern.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.CustomHttpPattern} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.CustomHttpPattern}
 */
proto.google.api.CustomHttpPattern.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readString());
                msg.setKind(value);
                break;
            case 2:
                var value = (reader.readString());
                msg.setPath(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.CustomHttpPattern.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.api.CustomHttpPattern.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.CustomHttpPattern} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.api.CustomHttpPattern.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getKind();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getPath();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
};
/**
 * optional string kind = 1;
 * @return {string}
 */
proto.google.api.CustomHttpPattern.prototype.getKind = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.google.api.CustomHttpPattern.prototype.setKind = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * optional string path = 2;
 * @return {string}
 */
proto.google.api.CustomHttpPattern.prototype.getPath = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.google.api.CustomHttpPattern.prototype.setPath = function (value) {
    jspb.Message.setField(this, 2, value);
};
goog.object.extend(exports, proto.google.api);

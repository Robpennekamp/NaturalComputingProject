"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdpMetadata = void 0;
/**
* @file metadata-idp.ts
* @author tngan
* @desc  Metadata of identity provider
*/
var metadata_1 = __importDefault(require("./metadata"));
var urn_1 = require("./urn");
var libsaml_1 = __importDefault(require("./libsaml"));
var utility_1 = require("./utility");
var xml_1 = __importDefault(require("xml"));
/*
 * @desc interface function
 */
function default_1(meta) {
    return new IdpMetadata(meta);
}
exports.default = default_1;
var IdpMetadata = /** @class */ (function (_super) {
    var e_1, _a, e_2, _b;
    __extends(IdpMetadata, _super);
    function IdpMetadata(meta) {
        var isFile = (0, utility_1.isString)(meta) || meta instanceof Buffer;
        if (!isFile) {
            var _a = meta, entityID = _a.entityID, signingCert = _a.signingCert, encryptCert = _a.encryptCert, _b = _a.wantAuthnRequestsSigned, wantAuthnRequestsSigned = _b === void 0 ? false : _b, _c = _a.nameIDFormat, nameIDFormat = _c === void 0 ? [] : _c, _d = _a.singleSignOnService, singleSignOnService = _d === void 0 ? [] : _d, _e = _a.singleLogoutService, singleLogoutService = _e === void 0 ? [] : _e;
            var IDPSSODescriptor_1 = [{
                    _attr: {
                        WantAuthnRequestsSigned: String(wantAuthnRequestsSigned),
                        protocolSupportEnumeration: urn_1.namespace.names.protocol,
                    },
                }];
            try {
                for (var _f = __values((0, utility_1.castArrayOpt)(signingCert)), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var cert = _g.value;
                    IDPSSODescriptor_1.push(libsaml_1.default.createKeySection('signing', cert));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var _h = __values((0, utility_1.castArrayOpt)(encryptCert)), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var cert = _j.value;
                    IDPSSODescriptor_1.push(libsaml_1.default.createKeySection('encryption', cert));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if ((0, utility_1.isNonEmptyArray)(nameIDFormat)) {
                nameIDFormat.forEach(function (f) { return IDPSSODescriptor_1.push({ NameIDFormat: f }); });
            }
            if ((0, utility_1.isNonEmptyArray)(singleSignOnService)) {
                singleSignOnService.forEach(function (a, indexCount) {
                    var attr = {
                        Binding: a.Binding,
                        Location: a.Location,
                    };
                    if (a.isDefault) {
                        attr.isDefault = true;
                    }
                    IDPSSODescriptor_1.push({ SingleSignOnService: [{ _attr: attr }] });
                });
            }
            else {
                throw new Error('ERR_IDP_METADATA_MISSING_SINGLE_SIGN_ON_SERVICE');
            }
            if ((0, utility_1.isNonEmptyArray)(singleLogoutService)) {
                singleLogoutService.forEach(function (a, indexCount) {
                    var attr = {};
                    if (a.isDefault) {
                        attr.isDefault = true;
                    }
                    attr.Binding = a.Binding;
                    attr.Location = a.Location;
                    IDPSSODescriptor_1.push({ SingleLogoutService: [{ _attr: attr }] });
                });
            }
            else {
                console.warn('Construct identity  provider - missing endpoint of SingleLogoutService');
            }
            // Create a new metadata by setting
            meta = (0, xml_1.default)([{
                    EntityDescriptor: [{
                            _attr: {
                                'xmlns': urn_1.namespace.names.metadata,
                                'xmlns:assertion': urn_1.namespace.names.assertion,
                                'xmlns:ds': 'http://www.w3.org/2000/09/xmldsig#',
                                entityID: entityID,
                            },
                        }, { IDPSSODescriptor: IDPSSODescriptor_1 }],
                }]);
        }
        return _super.call(this, meta, [
            {
                key: 'wantAuthnRequestsSigned',
                localPath: ['EntityDescriptor', 'IDPSSODescriptor'],
                attributes: ['WantAuthnRequestsSigned'],
            },
            {
                key: 'singleSignOnService',
                localPath: ['EntityDescriptor', 'IDPSSODescriptor', 'SingleSignOnService'],
                index: ['Binding'],
                attributePath: [],
                attributes: ['Location']
            },
        ]) || this;
    }
    /**
    * @desc Get the preference whether it wants a signed request
    * @return {boolean} WantAuthnRequestsSigned
    */
    IdpMetadata.prototype.isWantAuthnRequestsSigned = function () {
        var was = this.meta.wantAuthnRequestsSigned;
        if (was === undefined) {
            return false;
        }
        return String(was) === 'true';
    };
    /**
    * @desc Get the entity endpoint for single sign on service
    * @param  {string} binding      protocol binding (e.g. redirect, post)
    * @return {string/object} location
    */
    IdpMetadata.prototype.getSingleSignOnService = function (binding) {
        if ((0, utility_1.isString)(binding)) {
            var bindName = urn_1.namespace.binding[binding];
            var service = this.meta.singleSignOnService[bindName];
            if (service) {
                return service;
            }
        }
        return this.meta.singleSignOnService;
    };
    return IdpMetadata;
}(metadata_1.default));
exports.IdpMetadata = IdpMetadata;
//# sourceMappingURL=metadata-idp.js.map
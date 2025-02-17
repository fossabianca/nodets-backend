"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPatient = exports.goodbye = exports.hello = void 0;
const hello = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Hello World");
    return "Hello World";
});
exports.hello = hello;
const goodbye = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Goodbye World");
    return "Goodbye World";
});
exports.goodbye = goodbye;
const getAllPatient = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = {
        statusCode: 200,
        body: JSON.stringify({ nome: "João", cognome: "Silvia", dataNascita: "01/01/1990" }),
    };
    return response;
});
exports.getAllPatient = getAllPatient;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoles = getRoles;
exports.getRolesByID = getRolesByID;
exports.createRole = createRole;
function getRoles(request, response) {
    response.send([]);
}
function getRolesByID(request, response) {
    response.send({});
}
function createRole(request, response) {
    request.body.name;
}

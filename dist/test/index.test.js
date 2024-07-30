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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const supertest_1 = __importDefault(require("supertest"));
const __1 = require("..");
const db_1 = require("../__mocks__/db");
vitest_1.vi.mock(",,/db");
(0, vitest_1.describe)("Testing the /sum end point", () => {
    (0, vitest_1.it)("should return the sum of the two numbers", () => __awaiter(void 0, void 0, void 0, function* () {
        db_1.prismaClient.sum.create.mockResolvedValue({
            id: 1,
            a: 1,
            b: 2,
            result: 3,
        });
        const res = yield (0, supertest_1.default)(__1.app).post("/sum").send({
            a: 1,
            b: 2,
        });
        (0, vitest_1.expect)(res.statusCode).toBe(200);
        (0, vitest_1.expect)(res.body.answer).toBe(3);
    }));
    (0, vitest_1.it)("should return 411 if no inputs are provided", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(__1.app).post("/sum").send();
        (0, vitest_1.expect)(res.statusCode).toBe(411);
        (0, vitest_1.expect)(res.body.message).toBe("Incorrect inputs");
    }));
});
(0, vitest_1.describe)("Testing the POST /string", () => {
    (0, vitest_1.it)("should return string repeted n number of time", () => __awaiter(void 0, void 0, void 0, function* () {
        db_1.prismaClient.stringM.create.mockResolvedValue({
            id: 1,
            letter: "a",
            b: 3,
            result: "aaa",
        });
        const res = yield (0, supertest_1.default)(__1.app).post("/string").send({
            letter: "a",
            b: 3,
        });
        (0, vitest_1.expect)(res.statusCode).toBe(200);
        (0, vitest_1.expect)(res.body.answer).toBe("aaa");
    }));
    (0, vitest_1.it)("should return 411 if the inputs are wrong", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(__1.app).post("/string").send();
        (0, vitest_1.expect)(res.statusCode).toBe(411);
    }));
});

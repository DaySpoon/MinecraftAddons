import { register } from "@minecraft/server-gametest";

register("addon", "test", (test) => {
    const bot = test.spawnSimulatedPlayer({ x: 0, y: 3, z: 0 }, "テスト")
}).maxTicks(999999 * 20)
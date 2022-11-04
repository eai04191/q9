import { writable } from "svelte/store";
import type { KurariPattern } from "./types";

export const kurariList = writable<
    {
        id: number;
        pattern: KurariPattern;
    }[]
>([]);

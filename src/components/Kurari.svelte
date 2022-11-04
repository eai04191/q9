<script lang="ts">
    import type { KurariPattern } from "../types";

    export let pattern: KurariPattern = 1;
    export let index: number = 0;

    const src = new URL("/q9/kurari/f" + pattern + ".webp", import.meta.url)
        .href;
</script>

<img
    {src}
    class="kurari absolute right-0 animate-appear-top"
    style="--index:{index}"
    alt=""
/>

<style>
    .kurari {
        margin-right: calc(var(--index) * -50px);
    }
</style>

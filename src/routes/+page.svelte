<script lang="ts">
    import Kurari from "../components/Kurari.svelte";
    import type { KurariPattern } from "../types";
    import { kurariList } from "../store";

    import { onMount } from "svelte";

    onMount(() => {
        document.addEventListener("keydown", (e) => {
            console.log("keydown", e.key);
            switch (e.key) {
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                    $kurariList = [
                        ...$kurariList,
                        {
                            id: [...$kurariList].length,
                            pattern: parseInt(e.key) as KurariPattern,
                        },
                    ];
                    break;
                case "r":
                    $kurariList = [];
                    break;
                default:
                    break;
            }
        });

        kurariList.subscribe((v) => {
            //scroll to bottom
            const container = document.querySelector("#kurari-container");
            if (container) {
                container.scrollLeft = container.scrollWidth;
            }
        });
    });
</script>

<div class="overflow-y-hidden">
    <div class="h-10 flex items-center justify-center">
        Press 1-7 to add a kurari. Press R to crear all kuari.
    </div>

    <div
        id="kurari-container"
        class="relative min-w-full overflow-x-scroll h-screen overflow-y-hidden -mt-10"
    >
        {#each $kurariList as kurari}
            <Kurari pattern={kurari.pattern} index={kurari.id} />
        {/each}
    </div>
</div>

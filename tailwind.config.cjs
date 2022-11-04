/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                "q9-pink": "#FEC9D7",
            },
            keyframes: {
                "appear-top": {
                    "0%": {
                        transform: "translateY(-600px)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                "appear-top":
                    /* https://matthewlein.com/tools/ceaser easeInOutBack */
                    "appear-top 0.2s cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            },
        },
    },
    plugins: [],
};

// ==UserScript==
// @name         r/Place overlay for Vietnam flag
// @namespace    http://tampermonkey.net/
// @version      alpha
// @description  r/Place overlay for the Vietnam flag (1490,661 -> 1561,687). Stolen from OsuPlace.
// @author       u/oralekin (OC), u/LittleEndu, u/ekgame, u/84436, t3bol90, u/MonHauVD
// @match       https://www.reddit.com/r/place/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        // Load the image
        const image = document.createElement("img");
        // image.src = "https://cdn.mirai.gg/tmp/dotted-place-template.png";
        image.src = "https://raw.githubusercontent.com/MonHauVD/flag-of-vietnam-rplace2023/main/Co%20Viet%20Nam%201.0.png";
        image.onload = () => {
            image.style = `position: absolute; left: 0; top: 0; width: ${image.width/3}px; height: ${image.height/3}px; image-rendering: pixelated; z-index: 1`;
        };

        // Add the image as overlay
        const camera = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("garlic-bread-camera");
        const canvas = camera.querySelector("garlic-bread-canvas");
        canvas.shadowRoot.querySelector('.container').appendChild(image);

        // Add a 50% white overlay
        //canvas.shadowRoot.querySelector('.container canvas').style.opacity = "0.50";

        // Add a style to put a hole in the pixel preview (to see the current or desired color)
        const waitForPreview = setInterval(() => {
            const preview = camera.querySelector("garlic-bread-pixel-preview");
            if (preview) {
              clearInterval(waitForPreview);
              const style = document.createElement('style')
              style.innerHTML = '.pixel { clip-path: polygon(-20% -20%, -20% 120%, 37% 120%, 37% 37%, 62% 37%, 62% 62%, 37% 62%, 37% 120%, 120% 120%, 120% -20%); }'
              preview.shadowRoot.appendChild(style);
            }
        }, 100);
    }, false);
}

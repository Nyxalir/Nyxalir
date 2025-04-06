let rafId = null;

document.addEventListener("mousemove", (e) => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
        let x = (e.clientX / window.innerWidth) * 100;
        let y = (e.clientY / window.innerHeight) * 100;

        document.querySelector('.container').style.background = 
            `radial-gradient(circle 450px at ${x}% ${y}%, rgb(201, 201, 201), rgb(230, 230, 230))`;
    });
});

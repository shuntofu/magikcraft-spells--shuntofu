const magik = magikcraft.io;

function warp(name) {
    const there = magik.memento.getItem(name);
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento.setItem('auto',here);
    }	
}

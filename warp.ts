const magik = magikcraft.io;

function warp() {
    const there = magik.memento.getItem('save');
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento.setItem('auto',here);
    }	
}

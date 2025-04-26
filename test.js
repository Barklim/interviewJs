'use strict';

function a() {
    console.log(this)
}

const c = {
    a,
    b: () => {
        console.log(this)
    }
}

c.a()
c.b()
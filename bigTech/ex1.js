// uchi.r 27-

// cookie, session...
// какие проблемы решает redux
// зачем в redux иммутабельность
// в redux rtk какую проблему решают thunk-и

'use strict';

function a() {
    console.log(this)
}

function b() {
    a()
}

const c = {
    a,
    b
}

c.a()
c.b()

// ----- 2 -----

'use strict';

function a() {
    console.log(this)
}

function b() {
    a()
}

const c = {
    a,
    b: () => {
        console.log(this)
    }
}

c.a()
c.b()

// ----- 3 -----

// Как изменется браузерный дом после нажатия на кнопку
// Какие изменеия произойдут в браузерным дом после нажатия на кнопку

function SimpleButton(props) {
    const [txt, setTxt] = useState(props.text || 'a')
    const changeText = () => {
        setTxt(txt + txt)
    }

    return (
        <button onClick={changeText}>
            {txt}
        </button>
    )
}

// ----- 4 -----

function SimpleList(props) {
    const [list, setList] = useState(props.list || ['a', 'b'])
    const rotateList = () => {
        // setList([...list].reverse())
        setList([...list.reverse()])
    }

    return (
        <div>
            {list.map((txt, id) => (
                <div key={id}>{txt}</div>
            ))}
            <button onClick={rotateList}>rotate</button>
        </div>
    )
}
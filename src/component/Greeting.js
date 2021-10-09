import React from 'react'

function Greeting({name, heroName, children}) {
    return (
        <div>
            <h2>Greeting {name} a.k.a {heroName}</h2>
            {children}
        </div>
    )
}

export default Greeting

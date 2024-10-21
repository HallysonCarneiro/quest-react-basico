const labelMsg = () => {
    alert('A label desse botão é "Baixar CV"')
}

const Button = () => {
    return <button onClick={labelMsg}>Baixar CV</button>
}

export default Button
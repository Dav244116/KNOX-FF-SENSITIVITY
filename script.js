* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: #0b0b0b;
    color: white;
    font-family: Arial, sans-serif;
    text-align: center;
    min-height: 100vh;
}

header {
    padding: 25px 15px;
    border-bottom: 1px solid #333;
}

.logo {
    font-size: 30px;
    font-weight: bold;
}

.subtitle {
    color: #ff3333;
    margin-top: 5px;
    letter-spacing: 3px;
}

main {
    width: 100%;
    max-width: 650px;
    margin: auto;
    padding: 25px 15px;
}

.hero {
    padding: 35px 15px;
}

.hero h1 {
    font-size: 32px;
    margin-bottom: 15px;
}

.hero p {
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 25px;
}

button {
    width: 100%;
    max-width: 420px;
    padding: 16px;
    margin: 8px auto;
    display: block;

    border: none;
    border-radius: 10px;

    background: #e00000;
    color: white;

    font-size: 16px;
    font-weight: bold;

    cursor: pointer;
    transition: 0.2s;
}

button:hover {
    background: #ff2222;
    transform: scale(1.02);
}

.content {
    margin-top: 30px;
    padding: 25px 15px;

    background: #171717;
    border: 1px solid #333;
    border-radius: 12px;
}

.content h2 {
    margin-bottom: 15px;
}

.content p {
    color: #ccc;
    margin: 10px 0;
    line-height: 1.5;
}

.device-list {
    margin-top: 15px;
}

footer {
    margin-top: 30px;
    padding: 25px 15px;

    color: #777;
    font-size: 13px;

    border-top: 1px solid #222;
}

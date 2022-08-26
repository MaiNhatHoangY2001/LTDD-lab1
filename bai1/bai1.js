const $ = document.querySelector.bind(document);



function input() {
    $(".root").innerHTML = `
        <span>a</span>
        <input src="number" class="inputA"/>
        </br>
        </br>
        <span>b</span>
        <input src="txt" class="inputB"/>
    `;
}

function button() {
    $(".root").innerHTML += `
    </br>
    </br>
    <button src="submit" class="sum"/>Sum</button>
    <span class= "cal">0</span>
`;
    const click = () => {
        const numA = parseInt($(".inputA").value);
        const numB = parseInt($(".inputB").value);
        const cal = numA + numB;

        $(".cal").innerHTML = cal;
    }

    $(".sum").onclick = click;
}


function app() {
    input();
    button();

}


app();
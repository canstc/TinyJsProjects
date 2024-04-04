const hex_keys= ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];
const my_button = document.getElementById('btn');
const color_span = document.getElementById('spancolor');
const copy_button = document.getElementById('copybtn')


function create_random_color()
{
    var color='#';
    for(let i=0;i<=6;i++)
    {
        let color_index = Math.floor(Math.random()*hex_keys.length);
        color+=hex_keys[color_index];
        document.getElementById('mybody').style.backgroundColor=color;
        color_span.innerHTML=color;
    }
}

my_button.addEventListener("click",create_random_color);



async function copy_hex_code()
{
    let copy_text = color_span.innerHTML;
    const text_code=copy_text.toString();
    navigator.clipboard.writeText(text_code);
    alert("Copied the text: " + text_code);

}

copy_button.addEventListener("click",copy_hex_code);

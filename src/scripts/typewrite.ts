


export function typing(elem:HTMLElement, speed:Number){
    var text = elem.innerText
    elem.innerText = ""
    type_text(elem,text, speed,0)

}

export function type_text(elem:HTMLElement, text:string, speed:Number, i=0){
    if (i<text.length){
        elem.textContent += text[i];
        setTimeout(()=>type_text(elem,text,speed, i+1), Number(speed))
    }
}

export function foo(){
    console.log("FOO")
}
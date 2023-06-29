function viewBox(){
    const box = document.getElementById('hidden_box'); 
    box.style.visibility = "visible";

    const blur_box = document.getElementById('blur-box');
    blur_box.style.visibility = "hidden";
    box.style.animation = "Hidden_box ease-out 0.7s, Hidden_box_rotate ease-out 0.7s";
    
    const Hidden_box_head = document.getElementById('hidden_box_head');
    setTimeout( ()=>{Hidden_box_head.style.visibility = "visible";},1000)
    
}
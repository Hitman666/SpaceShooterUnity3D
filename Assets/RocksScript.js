#pragma strict
import UnityEngine.UI.Text;

var Counter : int;
private var text : UnityEngine.UI.Text;

function Start () {
	text = GetComponent(UnityEngine.UI.Text);
	Counter = 0;
}

function Update () {    
     text.text = "Rocks: "+Counter;
}   
         
function RockAdd () {            
    Counter++;
}
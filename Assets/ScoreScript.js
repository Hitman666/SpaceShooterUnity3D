#pragma strict
import UnityEngine.UI.Text;

public var Counter : int;
var text : UnityEngine.UI.Text;

function Start () {
	text = GetComponent(UnityEngine.UI.Text);
	Counter = 0;
}

function Update () {    
     text.text = "Kills: "+Counter;
}   
         
function Hit () {            
    Counter++;
}
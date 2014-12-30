#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () 
{
	GUI.color = Color.white;
 	GUILayout.Label(" Kills: " + score.ToString());
}
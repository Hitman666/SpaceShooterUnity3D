#pragma strict
import UnityEngine.UI.Text;

private var Kills : int;
private var Rocks : int;
private var Eff : float;
private var text : UnityEngine.UI.Text;

function Start () {
	text = GetComponent(UnityEngine.UI.Text);
	Eff = 0;
	Kills = 0;
	Rocks = 0;
}

function Update () {    
     Kills = gameObject.Find("ScoreText").GetComponent(ScoreScript).Counter;
     Rocks = gameObject.Find("RocksText").GetComponent(RocksScript).Counter;
          
     if (Kills == 0 || Rocks == 0)
     	Eff = 0;
     else
     	Eff = Kills * 1.0f / Rocks * 100;
     	
     text.text = "Eff: " + Eff.ToString("F0") + "%";
}   
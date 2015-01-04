#pragma strict
// A variable that will contain our bullet prefab
public var bullet : GameObject;
public var brzina: int;
var score : int;

function Start(){
    	score = 0;
}

function Update() {  
    // Move the spaceship horizontally  
    rigidbody2D.velocity.x = Input.GetAxis("Horizontal") * 10;
    rigidbody2D.velocity.y = Input.GetAxis("Vertical") * 10;

	//add support for mobile phone tilting
	transform.Translate(Input.acceleration.x*Time.deltaTime*20, 0, 0);
    
    if (Input.GetKeyDown("space") || Input.GetMouseButtonDown(0)) {   
    	Instantiate(bullet, transform.position, Quaternion.identity);
    }    
}
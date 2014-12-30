#pragma strict
// A variable that will contain our bullet prefab
public var bullet : GameObject;
private var timer : int;
public var brzina: int;

function Start(){
    	timer = 0;
}

function Update() {  
    // Move the spaceship horizontally  
    rigidbody2D.velocity.x = Input.GetAxis("Horizontal") * 10;
    rigidbody2D.velocity.y = Input.GetAxis("Vertical") * 10;

    if (timer++ == brzina){
     	Instantiate(bullet, transform.position, Quaternion.identity);
       	timer = 0;	
    }    
}
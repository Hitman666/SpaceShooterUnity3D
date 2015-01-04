#pragma strict

// Public variable that contains the speed of the enemy
public var speed : int = -5;

// Function called when the enemy is created
function Start () {  
    // Add a vertical speed to the enemy
    rigidbody2D.velocity.y = speed;

    // Make the enemy rotate on itself
    rigidbody2D.angularVelocity = Random.Range(-200, 200);

    // Destroy the enemy in 3 seconds,
    // when it is no longer visible on the screen
    Destroy(gameObject, 3);
}

function OnTriggerEnter2D(obj : Collider2D) {  
    var name = obj.gameObject.name;

    // If it collided with a bullet
    if (name == "bullet(Clone)") {
        // And destroy the bullet
        Destroy(obj.gameObject);
        
        handleDestroy(gameObject);
    }

    // If it collided with the spaceship
    if (name == "spaceship") {
        handleDestroy(gameObject);
    }
}

function handleDestroy(gameObject: GameObject){
	gameObject.Find("ScoreText").SendMessage("Hit");
    Destroy(gameObject);
}
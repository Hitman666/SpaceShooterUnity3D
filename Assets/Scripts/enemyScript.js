#pragma strict

// Public variable that contains the speed of the enemy
public var speed : int = -5;
var score : int = 0;

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

// Function called when the enemy collides with another object
function OnTriggerEnter2D(obj : Collider2D) {  
    var name = obj.gameObject.name;

    // If it collided with a bullet
    if (name == "bullet(Clone)") {
        // Destroy itself (the enemy)
        Destroy(gameObject);

        // And destroy the bullet
        Destroy(obj.gameObject);
        
        score++;
    }

    // If it collided with the spaceship
    if (name == "spaceship") {
        // Destroy itself (the enemy) to keep things simple
        Destroy(gameObject);
    }
}

function OnGUI () 
{
	GUI.color = Color.white;
 	GUILayout.Label(" Kills: " + score.ToString());
}
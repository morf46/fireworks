import { Monster } from "../internal";
import Vector2 from "../lib/vector";
import Key from "../input";
import chroma from 'chroma-js';
import { ProjectileWeaponBase, RainbowGun, WPN_TPattern } from "../internal";










export class Player extends Monster {


    Init(props) {

        super.Init(props);


        this.RegisterCollisonQuery = true;
        this.team = 0;

        this.maxHealth = 100;
        this.health = this.maxHealth;

        this.InputStrength = 250;

        this.weapon = null;
        this.Inventory = [];

        //start with 1 to avoid modulus 0
        this.PositionLevel = 1;
    }

    BeginPlay() {
        //let BaseWeapon = new ProjectileWeaponBase();
        //let BaseWeapon = new WPN_TPattern();

       // let BaseWeapon = new RainbowGun();
        this.PickupItem(ProjectileWeaponBase);
   //     this.PickupItem(RainbowGun);
    }

    update(delta) {

        this.Velocity = new Vector2(0, 0);

        if (Key.isDown(Key.UP)) {
            this.Velocity.addScaled(new Vector2(0, -1), this.InputStrength);
        }

        if (Key.isDown(Key.DOWN)) {
            this.Velocity.addScaled(new Vector2(0, 1), this.InputStrength);
        }

        if (Key.isDown(Key.LEFT)) {
            this.Velocity.addScaled(new Vector2(-1, 0), this.InputStrength);
        }
        if (Key.isDown(Key.RIGHT)) {
            this.Velocity.addScaled(new Vector2(1, 0), this.InputStrength);
        }

        super.update(delta);



        if (Key.isDown(Key.CTRL)) {

            if (this.weapon) {
                this.weapon.FireWeapon();
            }

        }
    }

    QueryCollisions(delta) {
        if (!this.PendingDestroy) {
            const potentials = this.RootBody.potentials();
            for (const otherBody of potentials) {
                if (this.RootBody.collides(otherBody, this.World.collisionResults)) {
                    if (this.team !== otherBody.Outer.team) {
                        otherBody.Outer.OnOverlap(this);

                    }
                }
            }
        }
    }

    PickupItem(newItemClass) {
        let newItem = this.World.SpawnEntity(newItemClass, {});
        const FoundItem = this.Inventory.find(item => item.constructor.name === newItem.constructor.name);
        if (FoundItem) {
            FoundItem.onStackInventory();
            newItem.Destroy();
        } else {
            this.Inventory.push(newItem);
            newItem.SetOwner(this);
        }
        this.OnPickupInventory();
    }
    DropItem(itemToDrop) {
        this.Inventory = this.Inventory.filter(item => item.ID !== itemToDrop.ID);
        this.OnDropInventory();
    }
    OnPickupInventory() {
        this.OnWeaponPickup();

    }
    OnDropInventory() {
        this.OnWeaponPickup();
    }
    OnWeaponPickup() {
        //just pickup latest weapon
        this.weapon = this.Inventory[this.Inventory.length - 1];
    }


    takeDamage(amount) {

        super.takeDamage(amount);

    
    }

    CreateCollionBody() {
        return this.World.collisions.createPolygon(this.Location.x, this.Location.y, [[0, 0], [16, 32], [-16, 32]]);
    }



    render(delta) {
        const ctx = this.World.ctx;
        ctx.save();
        //module import for rollup
        ctx.fillStyle = chroma('green').darken(Math.sin(this.Age * 0.002)).hex();
        ctx.strokeStyle = '#f0f';

        ctx.beginPath();
        ctx.translate(this.Location.x, this.Location.y);
        ctx.lineTo(16, 32);
        ctx.lineTo(-16, 32);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

}


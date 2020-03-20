export class Weapon {
    public name:string
    public type:string
    public slot:string
    public icon: string
    public screenshot: string
    public glimmer:number
    public shards:number

    constructor(name:string,type:string, slot:string, icon:string, screenshot:string, glimmer:number, shards:number) {
        this.name = name
        this.type = type
        this.slot = slot
        this.icon = icon
        this.screenshot = screenshot
        this.glimmer = glimmer
        this.shards = shards
    }
}
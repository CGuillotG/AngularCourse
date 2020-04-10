export class D2Character {
    constructor(
        public time: string,
        public light: number,
        public intellect: number,
        public resilience: number,
        public discipline: number,
        public recovery: number,
        public mobility: number,
        public strength: number,
        public race: string,
        public gender: string,
        public pClass: string,
        public emblemPath: string,
        public emblemBackgroundPath: string,
        public emblemColor: {
            red: number,
            green: number,
            blue: number,
            alpha: number
        }
    ) { }
}
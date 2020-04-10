export class BungieResponse {
    constructor(
        public Response: {
            characters?: {
                data: {
                    [x:string]:{
                        minutesPlayedTotal:string,
                        light:number,
                        stats:object,
                        raceHash:number,
                        genderHash:number,
                        classHash: number,
                        emblemPath:string,
                        emblemBackgroundPath:string,
                        emblemColor: {
                            red: number,
                            green: number,
                            blue: number,
                            alpha: number
                        }
                    }
                },
                privacy: number
            },            
            character?: {
                data: {
                    minutesPlayedTotal:string,
                    light:number,
                    stats:object,
                    raceHash:number,
                    genderHash:number,
                    classHash: number,
                    emblemPath:string,
                    emblemBackgroundPath:string,
                    emblemColor: {
                        red: number,
                        green: number,
                        blue: number,
                        alpha: number
                    }
                },
                privacy: number
            }
        },
        public ErrorCode: number,
        public ThrottleSeconds: number,
        public ErrorStatus: string,
        public Message: string,
        public MessageData: object
        ) { }
}
export class BungieResponse {
    constructor(
        public Response: {
            characters?: {
                data: object,
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
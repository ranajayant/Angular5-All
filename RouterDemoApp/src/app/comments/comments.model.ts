export class Comment {
    constructor(
        public postId: number,
        public id: number,
        public name?: number,
        public email?: string,
        public body?: string,
    ) { }
}

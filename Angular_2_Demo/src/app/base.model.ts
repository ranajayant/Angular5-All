export class BaseEntity {
    public name: string = '';
    public id: string = '0';
    public constructor(theName: string, id: string) { this.name = theName; this.id = id; }
}
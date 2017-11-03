export class User {
  constructor(
    public _id: string = "",
    public name: string = "",
    public bucketList: Array<Object> = [],
    public createdAt: Date = new Date(),

  ){}
}

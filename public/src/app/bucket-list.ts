export class BucketList {
  constructor(
  public _id: string = "",
  public _user: Object = {},
  public title: string = "",
  public description: string = "",
  public author: string = "",
  public done: boolean = false,
  public createdAt: Date = new Date(),
){}
}

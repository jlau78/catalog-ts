
interface IItem {
    itemId: string
    name: string
    description: string
    fullDescription: string
    price: DoubleRange
    areaCodes: Array<string> 

    // optional fields as denoted by ?
    createdAt?: string
    updatedAt?: string

}

interface ItemProps {
    item: IItem
}

interface ApiDataType {
    message: string
    status: string
    items: IItem[]
    item: IItem
}
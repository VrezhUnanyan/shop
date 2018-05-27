export class DataService {
    private manData: String[] = [
        'Apple iPhone 7',
        'Apple iPhone 8',
        'Apple iPhone 9'
    ];

    private shopData: String[] = [
        'Shop1',
        'Shop1',
        'Shop1'
    ];

    getShopData(): String[] {
        return this.shopData;
    }
    getManData(): String[] {
        return this.manData;
    }
    addData(item: String) {
        this.manData.push(item);
    }
}
